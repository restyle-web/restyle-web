"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "../animations/FadeIn";
import { Card } from "../ui/Card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Fashion Enthusiast",
    avatar: "S",
    content:
      "Finally, a thrift app that actually gets it! The UI is gorgeous and finding unique pieces has never been easier. Can't wait for launch!",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Vintage Seller",
    avatar: "J",
    content:
      "As someone who sells vintage clothing, I'm excited about the seller tools. The offer system and direct chat will be game-changers.",
    rating: 5,
  },
  {
    name: "Priya R.",
    role: "Sustainable Fashion Advocate",
    avatar: "P",
    content:
      "Love the mission behind Restyle. Making sustainable fashion accessible and stylish is exactly what we need. Signed up immediately!",
    rating: 5,
  },
  {
    name: "Alex T.",
    role: "Streetwear Collector",
    avatar: "A",
    content:
      "The filter system looks incredible. Being able to search by specific sizes, brands, and conditions will save so much time hunting for grails.",
    rating: 5,
  },
  {
    name: "Maya L.",
    role: "Thrift Beginner",
    avatar: "M",
    content:
      "The guest mode is perfect for exploring before committing. And the review system gives me confidence in buying from new sellers.",
    rating: 5,
  },
  {
    name: "David H.",
    role: "Reseller",
    avatar: "D",
    content:
      "In-app checkout with courier selection? That's huge. No more back-and-forth about shipping. This is going to streamline everything.",
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
              People are excited
              <br />
              <span className="text-black/30">and so are we</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Here&apos;s what our early community members are saying about Restyle.
              Join the waitlist to be part of the journey.
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
