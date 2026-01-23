import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Restyle",
  description:
    "Get in touch with the Restyle team. We'd love to hear from you about questions, feedback, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
