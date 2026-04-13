"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "../animations/FadeIn";
import { Card } from "../ui/Card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha K.",
    role: "Fashion Enthusiast",
    avatar: "A",
    content:
      "The preview already feels polished and thoughtful. If the launch experience is this smooth, I can see Restyle becoming my go-to thrifting app.",
    rating: 5,
  },
  {
    name: "Hamza R.",
    role: "Vintage Seller",
    avatar: "H",
    content:
      "I haven&apos;t seen many pre-launch thrift platforms think this much about sellers. The offer flow and chat features already look really promising.",
    rating: 5,
  },
  {
    name: "Sana A.",
    role: "Sustainable Fashion Advocate",
    avatar: "S",
    content:
      "I signed up for the waitlist because the mission is clear from the start. Restyle feels like it could make secondhand fashion more approachable for a lot of people.",
    rating: 5,
  },
  {
    name: "Bilal M.",
    role: "Streetwear Collector",
    avatar: "B",
    content:
      "Even from the early screens, the search and filtering look strong. That&apos;s the part that usually makes or breaks a thrift app for me.",
    rating: 4,
  },
  {
    name: "Hira S.",
    role: "Thrift Beginner",
    avatar: "H",
    content:
      "As someone new to thrifting, I like that the product already feels welcoming instead of overwhelming. It makes me want to try it when it launches.",
    rating: 5,
  },
  {
    name: "Usman F.",
    role: "Reseller",
    avatar: "U",
    content:
      "The idea of having checkout and delivery built in from day one is exciting. If they execute well, this could save sellers a lot of time.",
    rating: 5,
  },
];

export function Testimonials() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-black/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-black/50 uppercase mb-4">
              Early Feedback
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Early interest is building
              <br />
              <span className="text-black/30">ahead of launch</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Here&apos;s what early supporters are saying after previewing Restyle.
              Join the waitlist to be among the first to try it when we launch.
            </p>
          </FadeIn>
        </div>

        {/* Testimonials grid */}
        <motion.div
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <Card className="h-full relative">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-black/5" />

                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-black text-black"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-black/70 leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-black/50">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
