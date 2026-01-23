import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Restyle",
  description:
    "Learn about Restyle's mission to make sustainable fashion accessible. Our story, values, and the team behind the platform.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
