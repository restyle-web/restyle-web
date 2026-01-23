import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { FeaturesPreview } from "@/components/sections/FeaturesPreview";
import { HowItWorksPreview } from "@/components/sections/HowItWorksPreview";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturesPreview />
      <HowItWorksPreview />
      <AppShowcase />
      <Testimonials />
      <section id="waitlist">
        <CTA />
      </section>
      <Footer />
    </main>
  );
}
