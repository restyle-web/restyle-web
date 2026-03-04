import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Restyle",
  description:
    "Learn how Restyle collects, uses, and protects your personal information. Your privacy matters to us.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
