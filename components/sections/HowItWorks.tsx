"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FadeIn } from "../animations/FadeIn";
import { PhoneMockup } from "../ui/PhoneMockup";
import { FloatingElement } from "../animations/FloatingElement";
import { Camera, Tag, MessageSquare, Package, Sparkles } from "lucide-react";

const buyerSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Browse thousands of unique pre-loved items from sellers worldwide. Use filters to find your perfect style.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Connect",
    description: "Message sellers, ask questions, and send offers. Negotiate directly for the best deals.",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Purchase",
    description: "Secure checkout with multiple payment options. Choose your preferred courier for delivery.",
    icon: Package,
  },
];

const sellerSteps = [
  {
    number: "01",
    title: "Snap",
    description: "Take beautiful photos of your items. Our smart camera helps you capture the best angles.",
    icon: Camera,
  },
  {
    number: "02",
    title: "List",
    description: "Add details like brand, size, condition, and price. Your listing goes live instantly.",
    icon: Tag,
  },
  {
    number: "03",
    title: "Earn",
    description: "Receive offers, chat with buyers, and ship your items. Money goes straight to your wallet.",
    icon: Package,
  },
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"buyer" | "seller">("buyer");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = activeTab === "buyer" ? buyerSteps : sellerSteps;
  const mockupSrc =
    activeTab === "buyer"
      ? "/mockups/Homepage.png"
      : "/mockups/Intro Carousel (1).svg";

  return (
    <section id="how-it-works" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-black/50 uppercase mb-4">
              How It Works
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Simple. Seamless.
              <br />
              <span className="text-black/30">Sustainable.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Tab switcher */}
        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-black/5 rounded-full p-1.5">
              {[
                { id: "buyer", label: "For Buyers" },
                { id: "seller", label: "For Sellers" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "buyer" | "seller")}
                  className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-black rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Content */}
        <div
          ref={containerRef}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Steps */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
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
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Step content */}
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
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            key={mockupSrc}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <FloatingElement distance={8} duration={4}>
              <PhoneMockup
                src={mockupSrc}
                alt={`Restyle ${activeTab} flow`}
                className="w-[280px] md:w-[320px]"
              />
            </FloatingElement>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
