"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "../animations/FadeIn";
import { Card } from "../ui/Card";
import {
  ShoppingBag,
  MessageCircle,
  Search,
  Heart,
  Star,
  Truck,
  Shield,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Buy & Sell",
    description:
      "List your pre-loved clothes in seconds or discover unique pieces from sellers worldwide.",
  },
  {
    icon: MessageCircle,
    title: "Chat & Negotiate",
    description:
      "Connect directly with sellers, send offers, and negotiate the best deals.",
  },
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Find exactly what you're looking for with powerful filters for size, brand, condition & more.",
  },
  {
    icon: Heart,
    title: "Follow Sellers",
    description:
      "Build your network, follow your favorite sellers, and never miss new listings.",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    description:
      "Make informed decisions with authentic reviews from real buyers and sellers.",
  },
  {
    icon: Truck,
    title: "Easy Shipping",
    description:
      "Seamless in-app checkout with multiple courier options to choose from.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description:
      "Safe and secure transactions with buyer protection on every purchase.",
  },
  {
    icon: TrendingUp,
    title: "Trending Styles",
    description:
      "Stay ahead of fashion trends with personalized recommendations.",
  },
];

export function Features() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-black/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-black/50 uppercase mb-4">
              Features
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Everything you need to
              <br />
              <span className="text-black/30">thrift with confidence</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              A complete platform designed for the modern thrifter. Buy, sell,
              and discover sustainable fashion with powerful tools at your fingertips.
            </p>
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
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <feature.icon className="w-6 h-6" />
                    </motion.div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-black/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
