import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import PhotoCard from "@/components/card";
import { PRODUCTS } from "@/data/products";

export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section with Mascot */}
        <HeroSection />

        {/* 2. Featured Mascot Drops */}
        <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border-muted/70 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-accent-purple" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent-purple font-semibold">
                  Mascot Drops
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
                hazy-bnuy // Signature Silhouettes
              </h2>
              <p className="text-sm text-muted max-w-md">
                Heavyweight organic cotton, subtle lavender stitching, and our studious round-glasses bunny mascot on every piece.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-wider text-accent-purple hover:text-accent-purple-hover font-semibold transition-colors group"
            >
              <span>Explore All Clothes & Merch</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <PhotoCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 rounded-2xl bg-card hover:bg-surface-subtle border border-border-muted hover:border-accent-purple/40 px-8 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-all duration-200 shadow-2xs"
            >
              <span>View All hazy-bnuy Merch ({PRODUCTS.length} Items)</span>
            </Link>
          </div>
        </section>

        {/* 3. The Mascot & Bone White Philosophy Banner */}
        <section className="py-20 bg-surface-subtle/50 border-y border-border-muted/70 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-purple font-semibold">
                Why hazy-bnuy?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
                A Little Bunny with Big Ideas
              </h2>
              <p className="text-sm text-muted">
                Our mascot wears round wire glasses because he spends too many quiet hours reading, sketching, and daydreaming.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 01 */}
              <div className="p-8 rounded-3xl bg-card border border-border-muted shadow-[0_4px_20px_rgb(0,0,0,0.02)] space-y-4 hover:border-accent-purple/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-accent-purple-mist flex items-center justify-center font-mono text-sm font-bold text-accent-purple">
                  01
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Warm Bone White
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Never stark or clinical. Our custom bone white is inspired by unbleached cotton fibers, chalk, and ancient book pages. Warm, calming, and easy on the eyes.
                </p>
              </div>

              {/* Feature 02 */}
              <div className="p-8 rounded-3xl bg-card border border-border-muted shadow-[0_4px_20px_rgb(0,0,0,0.02)] space-y-4 hover:border-accent-purple/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-accent-purple-mist flex items-center justify-center font-mono text-sm font-bold text-accent-purple">
                  02
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Subtle Lavender Accents
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Gentle lavender and muted plum details. Found on the round glasses of our mascot, internal neck tape, and dipped drawstring tips.
                </p>
              </div>

              {/* Feature 03 */}
              <div className="p-8 rounded-3xl bg-card border border-border-muted shadow-[0_4px_20px_rgb(0,0,0,0.02)] space-y-4 hover:border-accent-purple/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-accent-purple-mist flex items-center justify-center font-mono text-sm font-bold text-accent-purple">
                  03
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Heavy 480 GSM Cotton
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Constructed from heavyweight 480 GSM loopback french terry that holds its drape. Like a soft, sturdy shield built to last years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Mascot Lookbook Highlight */}
        <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden bg-card border border-border-muted shadow-md flex items-center justify-center p-8">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <Image
                  src="/mascot.svg"
                  alt="hazy-bnuy mascot reading"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 rounded-full bg-accent-purple-mist border border-accent-purple/20 px-3.5 py-1">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-purple font-semibold">
                  Mascot Lore
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-foreground leading-tight">
                Designed for slow days and studious thoughts.
              </h2>
              <p className="text-base text-muted leading-relaxed">
                hazy-bnuy was born from a sketch on the margin of a notebook in a quiet library corner. A little bunny who wears round glasses because the world moves too fast, and books need close reading.
              </p>
              <div className="pt-2">
                <Link
                  href="/vision-and-story"
                  className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-wider text-accent-purple hover:text-accent-purple-hover font-semibold transition-colors underline underline-offset-8"
                >
                  <span>Read the full story of hazy-bnuy</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Enterprise Security & Anti-DDoS Assurance — Pure Light Bone White & Lavender */}
        <section className="py-16 bg-surface-subtle/70 border-t border-border-muted text-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start space-y-2">
                <div className="w-10 h-10 rounded-xl bg-accent-purple-mist flex items-center justify-center text-accent-purple mb-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  Layer 7 DDoS Defense
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Edge proxy rate limiting and flood filters keep hazy-bnuy online 24/7.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-2">
                <div className="w-10 h-10 rounded-xl bg-accent-purple-mist flex items-center justify-center text-accent-purple mb-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  256-Bit TLS Checkout
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Bank-level SSL encryption guarantees your transactions are safe.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-2">
                <div className="w-10 h-10 rounded-xl bg-accent-purple-mist flex items-center justify-center text-accent-purple mb-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  100% GOTS Cotton
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Zero toxic dyes or itchy synthetics. Only certified pure organic fibers.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-2">
                <div className="w-10 h-10 rounded-xl bg-accent-purple-mist flex items-center justify-center text-accent-purple mb-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  30-Day Easy Returns
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Love the fit or exchange it with prepaid return labels in every order.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
