import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Hero Showcase — hazy-bnuy",
  description: "Explore the seasonal showcase and mascot aesthetic of hazy-bnuy.",
};

export default function HeroPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
