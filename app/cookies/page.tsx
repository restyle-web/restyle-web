import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CookiesContent } from "./CookiesContent";

export const metadata: Metadata = {
  title: "Cookie Policy | Restyle",
  description:
    "Learn how Restyle uses cookies and similar technologies to improve your experience on our platform.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CookiesContent />
      <Footer />
    </main>
  );
}
