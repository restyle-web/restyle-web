import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { TermsContent } from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | Restyle",
  description:
    "Read the terms and conditions for using Restyle. Understand your rights and responsibilities on our platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TermsContent />
      <Footer />
    </main>
  );
}
