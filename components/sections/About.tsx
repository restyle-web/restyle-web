"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "../animations/FadeIn";
import { TextReveal } from "../animations/TextReveal";
import { Leaf, Recycle, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "Every piece of clothing resold is one less in a landfill. We're building a platform that makes sustainable fashion the easy choice.",
  },
  {
    icon: Recycle,
    title: "Circular Fashion",
    description:
      "Extend the life of your wardrobe. Buy pre-loved, sell what you don't wear, and keep fashion in circulation longer.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description:
      "More than a marketplace — we're a community of fashion lovers who believe style shouldn't come at the planet's expense.",
  },
  {
    icon: Globe,
    title: "Accessible Style",
    description:
      "Designer pieces at thrift prices. We're democratizing fashion and making quality accessible to everyone.",
  },
];

export function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/[0.02] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-black/50 uppercase mb-4">
              Our Mission
            </p>
          </FadeIn>

          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <TextReveal
              text="Fashion has a problem. 92 million tons of textile waste end up in landfills every year. We're here to change that, one closet at a time."
              className="justify-center"
            />
          </div>
        </div>

        {/* Values grid */}
        <motion.div
          ref={containerRef}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="flex gap-4 group"
            >
              <div className="flex-shrink-0">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <value.icon className="w-6 h-6" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-black/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
