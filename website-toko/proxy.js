import { NextResponse } from "next/server";

// In-memory sliding-window rate limiter for Layer-7 DDoS and flood mitigation
const rateLimitMap = new Map();
const WINDOW_SIZE_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 120; // 120 requests/minute for page visits
const MAX_API_REQUESTS_PER_WINDOW = 30; // 30 requests/minute for forms/APIs

// Periodic cleanup of stale entries to prevent memory leaks
let lastCleanup = Date.now();
function cleanupStaleEntries() {
  const now = Date.now();
  if (now - lastCleanup > 30000) {
    for (const [key, data] of rateLimitMap.entries()) {
      if (now - data.resetTime > WINDOW_SIZE_MS) {
        rateLimitMap.delete(key);
      }
    }
    lastCleanup = now;
  }
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // 1. Bypass static assets, next internal files, and public images
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.match(/\.(png|jpg|jpeg|svg|webp|ico|css|js|txt|woff|woff2)$/)
  ) {
    return NextResponse.next();
  }

  // 2. Extract Client IP securely from edge proxies (Cloudflare, Vercel, Nginx, or direct)
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    (forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1");

  cleanupStaleEntries();

  const isApi = pathname.startsWith("/api");
  const limit = isApi ? MAX_API_REQUESTS_PER_WINDOW : MAX_REQUESTS_PER_WINDOW;
  const key = `${clientIp}:${isApi ? "api" : "page"}`;
  const now = Date.now();

  const currentRecord = rateLimitMap.get(key) || { count: 0, resetTime: now + WINDOW_SIZE_MS };

  if (now > currentRecord.resetTime) {
    currentRecord.count = 0;
    currentRecord.resetTime = now + WINDOW_SIZE_MS;
  }

  currentRecord.count += 1;
  rateLimitMap.set(key, currentRecord);

  const remaining = Math.max(0, limit - currentRecord.count);
  const resetSeconds = Math.ceil((currentRecord.resetTime - now) / 1000);

  // 3. Reject excessive requests (HTTP 429 Too Many Requests)
  if (currentRecord.count > limit) {
    return new NextResponse(
      JSON.stringify({
        error: "Too Many Requests",
        message: "Rate limit exceeded. High request volume detected. Please try again in a few moments.",
        retryAfter: resetSeconds,
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": resetSeconds.toString(),
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": resetSeconds.toString(),
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  }

  // 4. Continue with standard response and attach rate limit headers
  const response = NextResponse.next();
  response.headers.set("X-RateLimit-Limit", limit.toString());
  response.headers.set("X-RateLimit-Remaining", remaining.toString());
  response.headers.set("X-RateLimit-Reset", resetSeconds.toString());

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
