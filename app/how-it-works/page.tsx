import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { HowItWorksContent } from "./HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works | Restyle",
  description:
    "Learn how to buy and sell pre-loved fashion on Restyle. Simple steps for buyers and sellers.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HowItWorksContent />
      <Footer />
    </main>
  );
}
