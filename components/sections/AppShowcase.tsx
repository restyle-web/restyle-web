"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FadeIn } from "../animations/FadeIn";

const mockups = [
  { src: "/mockups/Intro Carousel.svg", alt: "Intro Screen", label: "Onboarding" },
  { src: "/mockups/Intro Carousel (1).svg", alt: "Fashion Discovery", label: "Discover" },
  { src: "/mockups/Intro Carousel (2).svg", alt: "Start Selling", label: "Sell" },
  { src: "/mockups/Homepage.png", alt: "Home Feed", label: "Home" },
  { src: "/mockups/store.svg", alt: "Store Profile", label: "Stores" },
];

export function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section className="py-24 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Section header */}
        <div className="text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-white/40 uppercase mb-4">
              App Preview
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Designed with
              <br />
              <span className="text-white/30">purpose & style</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              A beautiful, intuitive interface that makes thrifting a delightful
              experience. Every screen crafted for simplicity and elegance.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Scrolling mockups */}
      <div ref={containerRef} className="relative">
        <motion.div style={{ x }} className="flex gap-6 px-6">
          {[...mockups, ...mockups].map((mockup, index) => (
            <motion.div
              key={`${mockup.src}-${index}`}
              className="relative flex-shrink-0 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: (index % mockups.length) * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              {/* Phone frame */}
              <div className="relative bg-zinc-900 rounded-[2.5rem] p-3 shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Screen */}
                <div className="relative rounded-[2rem] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-900 rounded-b-xl z-10" />

                  {/* Screen content */}
                  <div className="relative w-[220px] aspect-[9/19.5] bg-white">
                    <Image
                      src={mockup.src}
                      alt={mockup.alt}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium text-white/60 whitespace-nowrap">
                  {mockup.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
