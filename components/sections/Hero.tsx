"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { SplitText } from "../animations/SplitText";
import { FadeIn } from "../animations/FadeIn";
import { FloatingElement } from "../animations/FloatingElement";
import { MagneticButton } from "../animations/MagneticButton";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Badge } from "../ui/Badge";
import { PhoneMockup } from "../ui/PhoneMockup";
import { ArrowRight, Sparkles } from "lucide-react";

const waitlistAvatars = [
  { initials: "AM", label: "Ava Martinez", tone: "bg-stone-900 text-white" },
  { initials: "JK", label: "Jordan Kim", tone: "bg-stone-200 text-stone-900" },
  { initials: "SR", label: "Sofia Rahman", tone: "bg-zinc-800 text-white" },
  { initials: "TL", label: "Taylor Lee", tone: "bg-neutral-100 text-neutral-900" },
];

const heroPhoneScreens = {
  main: {
    src: "/mockups/Homepage.png",
    alt: "Restyle home screen",
    imageClassName: "object-cover object-top",
  },
  left: {
    src: "/mockups/Intro Carousel (1).svg",
    alt: "Restyle discovery",
    imageClassName: "object-cover object-top",
  },
  right: {
    src: "/mockups/Intro Carousel.svg",
    alt: "Restyle onboarding",
    imageClassName: "object-cover object-top",
  },
};

export function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, black 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, black 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="relative z-10">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <Badge variant="outline" className="mb-6">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Coming Soon
              </Badge>
            </FadeIn>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              <SplitText
                text="Thrift smarter."
                className="block"
                delay={0.2}
              />
              <SplitText
                text="Style better."
                className="block text-black/30"
                delay={0.4}
              />
            </h1>

            {/* Description */}
            <FadeIn delay={0.6} className="mb-8">
              <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-lg">
                Discover pre-loved fashion, connect with sellers, and build your
                sustainable wardrobe. Buy, sell, and thrift with purpose.
              </p>
            </FadeIn>

            {/* Email signup form */}
            <FadeIn delay={0.8}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-row gap-3 max-w-md">
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
                      Join Waitlist
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </MagneticButton>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-black/80 bg-black/5 rounded-full px-4 py-3 max-w-md"
                >
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">
                    You&apos;re on the list! We&apos;ll notify you at launch.
                  </span>
                </motion.div>
              )}
            </FadeIn>

            {/* Social proof */}
            <FadeIn delay={1} className="mt-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {waitlistAvatars.map((avatar) => (
                    <div
                      key={avatar.label}
                      aria-label={avatar.label}
                      title={avatar.label}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-semibold tracking-tight shadow-sm ${avatar.tone}`}
                    >
                      {avatar.initials}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-black/50">
                  <span className="font-semibold text-black/70">500+</span>{" "}
                  people already on the waitlist
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right content - Phone mockups */}
          <div className="relative lg:h-[700px] flex items-center justify-center">
            {/* Background glow */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-black/5 via-black/[0.03] to-transparent blur-2xl" />

            {/* Main phone */}
            <motion.div
              className="relative z-10 transform-gpu"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <FloatingElement distance={7} duration={4.8}>
                <PhoneMockup
                  src={heroPhoneScreens.main.src}
                  alt={heroPhoneScreens.main.alt}
                  imageClassName={heroPhoneScreens.main.imageClassName}
                  className="w-[280px] md:w-[320px]"
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </FloatingElement>
            </motion.div>

            {/* Secondary phone (behind) */}
            <motion.div
              className="absolute -left-4 top-1/2 z-20 hidden transform-gpu lg:block"
              initial={{ opacity: 0, x: -36, y: "-50%", rotate: -8 }}
              animate={{ opacity: 1, x: 0, y: "-50%", rotate: -8 }}
              transition={{ delay: 0.32, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <FloatingElement distance={5} duration={5.4} delay={0.35}>
                <PhoneMockup
                  src={heroPhoneScreens.left.src}
                  alt={heroPhoneScreens.left.alt}
                  imageClassName={heroPhoneScreens.left.imageClassName}
                  className="w-[210px]"
                  sizes="220px"
                />
              </FloatingElement>
            </motion.div>

            {/* Tertiary phone (behind right) */}
            <motion.div
              className="absolute -right-4 top-1/2 z-20 hidden transform-gpu lg:block"
              initial={{ opacity: 0, x: 36, y: "-50%", rotate: 8 }}
              animate={{ opacity: 1, x: 0, y: "-50%", rotate: 8 }}
              transition={{ delay: 0.42, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <FloatingElement distance={5} duration={4.9} delay={0.7}>
                <PhoneMockup
                  src={heroPhoneScreens.right.src}
                  alt={heroPhoneScreens.right.alt}
                  imageClassName={heroPhoneScreens.right.imageClassName}
                  className="w-[210px]"
                  sizes="220px"
                />
              </FloatingElement>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-black/20 flex items-start justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-black/40 rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
