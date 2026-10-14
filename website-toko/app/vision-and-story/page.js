import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Meet hazy-bnuy — Vision & Story",
  description: "The story, character, and aesthetic philosophy behind hazy-bnuy.",
};

export default function VisionAndStoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        {/* Header Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full bg-accent-purple-mist border border-accent-purple/20 px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-purple" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-purple font-semibold">
              The Lore & Philosophy
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-foreground leading-[1.12]">
            meet hazy-bnuy.
            <br />
            <span className="italic text-accent-purple">a little bunny with round glasses.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Born from a love of quiet mornings, oversized heavyweight fleece, warm bone white tones, and spending hours lost inside thick novels.
          </p>
        </section>

        {/* Mascot Centerpiece Presentation */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="relative rounded-3xl bg-card border border-border-muted shadow-lg p-10 sm:p-16 flex flex-col items-center text-center space-y-6">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/mascot.svg"
                alt="hazy-bnuy mascot wearing round glasses"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="space-y-2 max-w-md">
              <h3 className="font-serif text-2xl font-medium text-foreground">
                Always Reading, Never Hurrying
              </h3>
              <p className="text-sm text-muted font-mono">
                Round wire glasses • Soft bone fur • Warm lavender blush
              </p>
            </div>
          </div>
        </section>

        {/* Story Chapters */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Chapter 01 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-border-muted pt-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-semibold text-accent-purple tracking-widest uppercase block mb-1">
                Chapter 01
              </span>
              <h3 className="font-serif text-2xl font-medium text-foreground">
                Why Round Glasses?
              </h3>
            </div>
            <div className="md:col-span-8 space-y-4 text-foreground/80 leading-relaxed text-sm sm:text-base">
              <p>
                hazy-bnuy got his glasses after spending too many late nights reading architecture manuals and philosophy essays by candlelight.
              </p>
              <p>
                His round glasses symbolize curiosity, mindfulness, and seeing through the noise. When you wear our clothes or carry our merch, it is a reminder to slow down, look closely, and cherish the small quiet moments.
              </p>
            </div>
          </div>

          {/* Chapter 02 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-border-muted pt-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-semibold text-accent-purple tracking-widest uppercase block mb-1">
                Chapter 02
              </span>
              <h3 className="font-serif text-2xl font-medium text-foreground">
                The Bone White Tone
              </h3>
            </div>
            <div className="md:col-span-8 space-y-4 text-foreground/80 leading-relaxed text-sm sm:text-base">
              <p>
                We chose warm <strong>Bone White</strong> as the color of hazy-bnuy&apos;s world. It represents the natural, unbleached shade of raw cotton and ceramic clay.
              </p>
              <p>
                Unlike sterile bluish-white or harsh black, bone white radiates warmth and coziness. It complements everyone and ages with a beautiful, natural patina.
              </p>
            </div>
          </div>

          {/* Chapter 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-border-muted pt-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-semibold text-accent-purple tracking-widest uppercase block mb-1">
                Chapter 03
              </span>
              <h3 className="font-serif text-2xl font-medium text-foreground">
                A Touch of Lavender
              </h3>
            </div>
            <div className="md:col-span-8 space-y-4 text-foreground/80 leading-relaxed text-sm sm:text-base">
              <p>
                Our signature purple accent is soft and dreamy—like dusk settling over a quiet rooftop garden.
              </p>
              <p>
                You will spot it on the rim of hazy-bnuy&apos;s glasses, the dipped ends of hoodie drawstrings, and the subtle embroidery on the chest pocket.
              </p>
            </div>
          </div>

        </section>

        {/* CTA Bar */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-card border border-border-muted shadow-sm space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
              Ready to wear the cozy life?
            </h3>
            <p className="text-sm text-muted max-w-md mx-auto">
              Explore limited hoodies, tees, totes, and ceramic mugs featuring our little mascot.
            </p>
            <div>
              <Link
                href="/products"
                className="inline-flex items-center space-x-2 rounded-xl bg-accent-purple hover:bg-accent-purple-hover px-8 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all active:scale-95"
              >
                <span>Shop hazy-bnuy Drops</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
