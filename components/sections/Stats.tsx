"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "../animations/CountUp";

const stats = [
  { value: 500, suffix: "+", label: "Waitlist signups" },
  { value: 1000, suffix: "+", label: "Items ready to list" },
  { value: 50, suffix: "+", label: "Seller partners" },
  { value: 99, suffix: "%", label: "Sustainable focus" },
];

export function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-black/50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
