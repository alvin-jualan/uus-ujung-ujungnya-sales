import "./globals.css";
import Providers from "@/components/providers";

export const metadata = {
  title: "hazy-bnuy — Cozy Apparel & Merch",
  description: "Official shop of hazy-bnuy. Warm bone white heavyweight apparel, cozy hoodies, and limited-run mascot merchandise.",
  keywords: ["hazy-bnuy", "apparel", "merchandise", "bunny", "streetwear", "minimalist"],
  authors: [{ name: "hazy-bnuy" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F9F6F0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent-purple/20 selection:text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
