"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import { CountUp } from "@/components/animations/CountUp";
import { Card } from "@/components/ui/Card";
import {
  Leaf,
  Recycle,
  Heart,
  Globe,
  Target,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "Every piece of clothing resold is one less in a landfill. We're building a platform that makes sustainable fashion the easy choice. Our goal is to extend the lifecycle of fashion and reduce the environmental impact of the industry.",
  },
  {
    icon: Recycle,
    title: "Circular Fashion",
    description:
      "We believe in a circular economy where clothes are worn, loved, passed on, and worn again. By making it easy to buy and sell pre-loved fashion, we're keeping clothes in circulation longer and out of landfills.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description:
      "Restyle is more than a marketplace — we're a community of fashion lovers who believe style shouldn't come at the planet's expense. We celebrate individuality, creativity, and the stories behind every piece.",
  },
  {
    icon: Globe,
    title: "Accessible Style",
    description:
      "Designer pieces at thrift prices. We're democratizing fashion and making quality accessible to everyone. Everyone deserves to express themselves through style, regardless of budget.",
  },
];

const stats = [
  { value: 92, suffix: "M", label: "Tons of textile waste annually" },
  { value: 85, suffix: "%", label: "Clothes end up in landfills" },
  { value: 20, suffix: "%", label: "Fashion's global water usage" },
  { value: 10, suffix: "%", label: "Global carbon emissions" },
];

const milestones = [
  {
    year: "2024",
    title: "The Idea",
    description:
      "Frustrated by fast fashion waste, we envisioned a platform that makes sustainable fashion mainstream.",
  },
  {
    year: "2025",
    title: "Development",
    description:
      "Building Restyle from the ground up with a focus on user experience and community.",
  },
  {
    year: "Coming Soon",
    title: "Launch",
    description:
      "Preparing to launch and revolutionize how people buy and sell pre-loved fashion.",
  },
];

export function AboutContent() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <>
      <PageHeader
        badge="About Us"
        title="Restyling the future"
        titleHighlight="of fashion"
        description="We're on a mission to make sustainable fashion the norm, not the exception. One closet at a time."
      />

      {/* Mission Statement */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <FadeIn>
              <motion.div
                className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-8"
                whileHover={{ scale: 1.05, rotate: 10 }}
              >
                <Target className="w-10 h-10" />
              </motion.div>
            </FadeIn>

            <div className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-relaxed">
              <TextReveal
                text="Fashion has a problem. 92 million tons of textile waste end up in landfills every year. The industry is one of the largest polluters on the planet. We believe there's a better way."
                className="justify-center text-black/80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Stats */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest text-white/40 uppercase mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Fashion's environmental impact
            </h2>
          </FadeIn>

          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <p className="text-sm font-semibold tracking-widest text-black/50 uppercase mb-4">
                  Our Solution
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Making sustainable fashion
                  <br />
                  <span className="text-black/30">accessible to everyone</span>
                </h2>
                <p className="text-lg text-black/60 leading-relaxed mb-6">
                  Restyle is a platform that connects people who want to sell
                  their pre-loved clothes with those looking for unique,
                  sustainable fashion finds. We're not just building a
                  marketplace — we're building a movement.
                </p>
                <p className="text-lg text-black/60 leading-relaxed">
                  By making it easy, enjoyable, and rewarding to buy and sell
                  second-hand, we're changing how people think about fashion.
                  Every purchase on Restyle is a vote for a more sustainable
                  future.
                </p>
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={0.2}>
                <div className="bg-black/[0.02] rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Our Vision</h3>
                      <p className="text-sm text-black/50">What we're building towards</p>
                    </div>
                  </div>
                  <p className="text-black/70 leading-relaxed">
                    A world where sustainable fashion is the default choice.
                    Where every closet tells a story. Where style is about
                    expression, not consumption. Where the fashion industry
                    works in harmony with our planet.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-black/50 uppercase mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What we believe in
            </h2>
          </FadeIn>

          <motion.div
            ref={valuesRef}
            className="grid md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <Card className="h-full">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                      >
                        <value.icon className="w-7 h-7" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-black/60 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-black/50 uppercase mb-4">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              From idea to launch
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-black/10 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <FadeIn key={milestone.year} delay={index * 0.15}>
                  <div
                    className={`flex flex-col md:flex-row gap-8 items-center ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex-1 ${index % 2 === 1 ? "md:text-left" : "md:text-right"}`}
                    >
                      <span className="text-sm font-bold text-black/30 tracking-widest">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-black/60">{milestone.description}</p>
                    </div>

                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <motion.div
                        className="w-4 h-4 rounded-full bg-black"
                        whileHover={{ scale: 1.5 }}
                      />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Join us on this journey
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Be part of the sustainable fashion movement. Join our waitlist and
              be the first to know when we launch.
            </p>
            <motion.a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium bg-white text-black rounded-full hover:bg-white/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
