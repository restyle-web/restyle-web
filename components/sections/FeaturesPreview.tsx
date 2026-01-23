"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FadeIn } from "../animations/FadeIn";
import { Card } from "../ui/Card";
import { ArrowRight, ShoppingBag, MessageCircle, Search, Shield } from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Buy & Sell",
    description: "List clothes in seconds or discover unique pieces from sellers worldwide.",
  },
  {
    icon: MessageCircle,
    title: "Chat & Negotiate",
    description: "Connect directly with sellers and negotiate the best deals.",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Powerful filters for size, brand, condition, price & more.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe transactions with buyer protection on every purchase.",
  },
];

export function FeaturesPreview() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-black/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest text-black/50 uppercase mb-4">
                Features
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Everything you need to
                <br />
                <span className="text-black/30">thrift with confidence</span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-sm font-medium text-black/70 hover:text-black group"
            >
              View all features
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        {/* Features grid */}
        <motion.div
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <Card className="h-full group">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <feature.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
