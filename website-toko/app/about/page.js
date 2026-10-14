import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "About hazy-bnuy Studio",
  description: "Learn about the craftsmanship, sourcing ethics, and the little mascot behind hazy-bnuy.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-accent-purple-mist border border-accent-purple/20 px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-purple" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-purple font-semibold">
              The hazy-bnuy Studio
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-foreground">
            A sanctuary for quiet thinkers.
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Founded with the belief that everyday clothing should feel soft, architectural, and accompanied by a friendly little mascot who wears round glasses.
          </p>
        </section>

        {/* Visual Spread */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden bg-card border border-border-muted shadow-md p-8 flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <Image
                  src="/mascot.svg"
                  alt="hazy-bnuy mascot"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="md:col-span-6 rounded-3xl bg-surface-subtle p-8 sm:p-10 border border-border-muted flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent-purple font-semibold">
                  Mascot Note
                </span>
                <p className="font-serif text-xl sm:text-2xl font-medium text-foreground leading-snug">
                  &ldquo;A little bunny who reminds us to put our phones down, adjust our glasses, and read something that makes us wonder.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-border-muted/70 font-mono text-xs text-muted">
                <span className="block font-semibold text-foreground">hazy-bnuy Creative Studio</span>
                <span>Crafted in Bone White & Lavender</span>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Pillars */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border-muted shadow-2xs space-y-3">
              <span className="font-mono text-xs font-semibold text-accent-purple">01 / COTTON</span>
              <h3 className="font-serif text-xl font-medium text-foreground">
                GOTS Combed Organic Fleece
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                480 GSM French Terry for our hoodies and 280 GSM combed jersey for our boxy tees. Pre-shrunk and durable for hundreds of washes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border-muted shadow-2xs space-y-3">
              <span className="font-mono text-xs font-semibold text-accent-purple">02 / COLOR</span>
              <h3 className="font-serif text-xl font-medium text-foreground">
                Bone White & Soft Lavender
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Our palette is calm, soothing, and strictly light. Warm bone white backgrounds paired with delicate violet details.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border-muted shadow-2xs space-y-3">
              <span className="font-mono text-xs font-semibold text-accent-purple">03 / SECURITY</span>
              <h3 className="font-serif text-xl font-medium text-foreground">
                Anti-DDoS Edge Shield
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Protected by Next.js edge rate limiting and strict TLS encryption. Bot flood attacks are intercepted automatically so shopping remains safe.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 rounded-xl bg-accent-purple hover:bg-accent-purple-hover px-8 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-colors"
          >
            <span>Explore hazy-bnuy Merch</span>
            <span>→</span>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
