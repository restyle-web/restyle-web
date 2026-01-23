import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FeaturesContent } from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Features | Restyle",
  description:
    "Discover all the features that make Restyle the best platform for buying and selling pre-loved fashion.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <FeaturesContent />
      <Footer />
    </main>
  );
}
