"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { MagneticButton } from "@/components/animations/MagneticButton";
import {
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Instagram,
  Linkedin,
  HelpCircle,
  Briefcase,
  Users,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries",
    value: "info@getrestyle.com",
    href: "mailto:info@getrestyle.com",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Where we're based",
    value: "Worldwide (Remote)",
    href: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We typically respond within",
    value: "24-48 hours",
    href: null,
  },
];

const inquiryTypes = [
  {
    icon: HelpCircle,
    title: "General Inquiry",
    description: "Questions about Restyle or how it works",
  },
  {
    icon: Briefcase,
    title: "Partnership",
    description: "Business opportunities and collaborations",
  },
  {
    icon: Users,
    title: "Press & Media",
    description: "Interview requests and media inquiries",
  },
  {
    icon: MessageSquare,
    title: "Feedback",
    description: "Share your thoughts and suggestions",
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/getrestyle/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/getrestyle/", label: "LinkedIn" },
];

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          inquiryType: selectedType ?? "General Inquiry",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setSubmitError(data.error || "We couldn't send your message right now.");
        return;
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError("We couldn't send your message right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHeader
        badge="Contact Us"
        title="Let's talk"
        titleHighlight="We'd love to hear from you"
        description="Have questions, feedback, or want to collaborate? We're all ears. Reach out and let's start a conversation."
      />

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <FadeIn key={info.title} delay={index * 0.1}>
                <Card className="text-center h-full">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <info.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  <p className="text-sm text-black/50 mb-2">{info.description}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-black font-medium hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-black font-medium">{info.value}</span>
                  )}
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Inquiry Types */}
            <div>
              <FadeIn>
                <h2 className="text-2xl font-bold mb-2">How can we help?</h2>
                <p className="text-black/60 mb-8">
                  Select an inquiry type so we can route your message to the right team.
                </p>
              </FadeIn>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {inquiryTypes.map((type, index) => (
                  <FadeIn key={type.title} delay={index * 0.1} className="h-full">
                    <motion.button
                      onClick={() => setSelectedType(type.title)}
                      className={`w-full h-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                        selectedType === type.title
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-white hover:border-black/30"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <type.icon
                        className={`w-6 h-6 mb-3 ${
                          selectedType === type.title
                            ? "text-white"
                            : "text-black/60"
                        }`}
                      />
                      <h3
                        className={`font-semibold text-sm mb-1 ${
                          selectedType === type.title ? "text-white" : ""
                        }`}
                      >
                        {type.title}
                      </h3>
                      <p
                        className={`text-xs ${
                          selectedType === type.title
                            ? "text-white/70"
                            : "text-black/50"
                        }`}
                      >
                        {type.description}
                      </p>
                    </motion.button>
                  </FadeIn>
                ))}
              </div>

              {/* Social Links */}
              <FadeIn delay={0.4}>
                <div className="pt-8 border-t border-black/10">
                  <p className="text-sm text-black/50 mb-4">
                    Or connect with us on social media
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <MagneticButton key={social.label} strength={0.2}>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      </MagneticButton>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right - Contact Form */}
            <div>
              <FadeIn delay={0.2}>
                <Card padding="lg" className="bg-white">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="Your Name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <Input
                        label="Subject"
                        name="subject"
                        placeholder="What&apos;s this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />

                      <div className="rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3 text-sm text-black/60">
                        Inquiry Type: <span className="font-medium text-black">{selectedType ?? "General Inquiry"}</span>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-black/70 mb-2">
                          Message
                        </label>
                        <motion.textarea
                          name="message"
                          placeholder="Tell us more about your inquiry..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 text-base bg-white border-2 border-black/10 rounded-xl outline-none transition-all duration-300 placeholder:text-black/40 focus:border-black focus:shadow-[0_0_0_4px_rgba(0,0,0,0.05)] hover:border-black/30 resize-none"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>

                      {submitError ? (
                        <p className="text-sm text-red-500">{submitError}</p>
                      ) : null}

                      <MagneticButton strength={0.1} className="w-full">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                          <Send className="w-4 h-4 ml-2" />
                        </Button>
                      </MagneticButton>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: 0.2,
                        }}
                      >
                        <CheckCircle className="w-10 h-10" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-black/60 mb-6">
                        Thanks for reaching out. We&apos;ll get back to you within
                        24-48 hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsSubmitted(false);
                          setSubmitError("");
                          setSelectedType(null);
                          setFormData({
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                          });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Looking for quick answers?
            </h2>
            <p className="text-lg text-black/60 mb-8">
              Check out our How It Works page for detailed explanations of the
              Restyle platform.
            </p>
            <motion.a
              href="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-black text-white rounded-full hover:bg-black/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              How It Works
            </motion.a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
