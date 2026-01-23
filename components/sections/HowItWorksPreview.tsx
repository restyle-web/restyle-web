"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FadeIn } from "../animations/FadeIn";
import { PhoneMockup } from "../ui/PhoneMockup";
import { FloatingElement } from "../animations/FloatingElement";
import { ArrowRight, Search, MessageSquare, CreditCard } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "Browse thousands of unique pre-loved items with powerful filters.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Connect",
    description: "Message sellers, ask questions, and send offers.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Purchase",
    description: "Secure checkout with multiple payment and shipping options.",
  },
];

export function HowItWorksPreview() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest text-black/50 uppercase mb-4">
                How It Works
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Simple. Seamless.
                <br />
                <span className="text-black/30">Sustainable.</span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-black/70 hover:text-black group"
            >
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        {/* Content */}
        <div ref={containerRef} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <step.icon className="w-6 h-6" />
                  </motion.div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-black/30">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-black/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <FloatingElement distance={8} duration={4}>
              <PhoneMockup
                src="/mockups/Homepage.png"
                alt="Restyle App"
                className="w-[280px] md:w-[320px]"
              />
            </FloatingElement>
          </div>
        </div>
      </div>
    </section>
  );
}
