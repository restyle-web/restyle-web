"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "../animations/FadeIn";
import { MagneticButton } from "../animations/MagneticButton";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, black 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <FadeIn>
          <motion.div
            className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 text-sm font-medium mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </motion.div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ready to restyle
            <br />
            your wardrobe?
          </h2>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-10">
            Be the first to know when we launch. Join our waitlist for early
            access, exclusive updates, and special perks.
          </p>
        </FadeIn>

        {/* Email signup form */}
        <FadeIn delay={0.3}>
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-row gap-3 justify-center max-w-lg mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <MagneticButton strength={0.1}>
                <Button type="submit" variant="primary" size="md" className="whitespace-nowrap">
                  Get Early Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </MagneticButton>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 bg-black text-white rounded-full px-6 py-4"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">
                You&apos;re on the list! We&apos;ll be in touch soon.
              </span>
            </motion.div>
          )}
        </FadeIn>

        {/* Privacy note */}
        <FadeIn delay={0.4}>
          <p className="text-sm text-black/40 mt-6">
            No spam, ever. Unsubscribe anytime.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
