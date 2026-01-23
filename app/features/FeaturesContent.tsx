"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { FloatingElement } from "@/components/animations/FloatingElement";
import {
  ShoppingBag,
  MessageCircle,
  Search,
  Heart,
  Star,
  Truck,
  Shield,
  TrendingUp,
  Camera,
  Filter,
  Bell,
  CreditCard,
  Users,
  Eye,
  Package,
} from "lucide-react";

const mainFeatures = [
  {
    icon: ShoppingBag,
    title: "Buy & Sell Seamlessly",
    description:
      "List your pre-loved clothes in seconds with our intuitive listing flow. Take photos, add details, set your price, and go live instantly. Buyers can browse, filter, and purchase with just a few taps.",
    mockup: "/mockups/Homepage.png",
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging & Offers",
    description:
      "Connect directly with sellers through our built-in chat. Ask questions, negotiate prices, and send offers. Our smart offer system lets you propose your price and track all your negotiations in one place.",
    mockup: "/mockups/store.svg",
  },
  {
    icon: Search,
    title: "Smart Search & Filters",
    description:
      "Find exactly what you're looking for with powerful search capabilities. Filter by size, brand, condition, price range, category, and more. Save your searches and get notified when new items match.",
    mockup: "/mockups/Intro Carousel (1).svg",
  },
];

const allFeatures = [
  {
    icon: Heart,
    title: "Follow & Favorites",
    description:
      "Follow your favorite sellers and save items to your wishlist. Get updates when they post new items or drop prices.",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    description:
      "Build trust with authentic reviews. Rate your purchases and help others make informed decisions.",
  },
  {
    icon: Truck,
    title: "Integrated Shipping",
    description:
      "Choose from multiple courier options at checkout. We handle the logistics so you can focus on fashion.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description:
      "Shop with confidence. Our secure payment system protects both buyers and sellers on every transaction.",
  },
  {
    icon: TrendingUp,
    title: "Trending Styles",
    description:
      "Stay ahead of fashion trends with personalized recommendations based on your style preferences.",
  },
  {
    icon: Camera,
    title: "Smart Camera",
    description:
      "Our AI-powered camera helps you capture the best angles and lighting for your listings.",
  },
  {
    icon: Filter,
    title: "Advanced Filters",
    description:
      "Filter by size, brand, condition, price, category, color, and more to find your perfect piece.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Get notified about price drops, new items from followed sellers, and offers on your listings.",
  },
  {
    icon: CreditCard,
    title: "Easy Checkout",
    description:
      "Streamlined checkout process with multiple payment options. Buy now or send an offer with ease.",
  },
  {
    icon: Users,
    title: "Seller Profiles",
    description:
      "Build your brand with customizable seller profiles. Showcase your style and build a following.",
  },
  {
    icon: Eye,
    title: "Guest Browsing",
    description:
      "Explore the app without creating an account. Sign up when you're ready to buy or sell.",
  },
  {
    icon: Package,
    title: "Order Tracking",
    description:
      "Track your purchases from payment to delivery. Stay updated every step of the way.",
  },
];

// Animated Phone Mockup Component with slide-in effect
function AnimatedPhoneMockup({
  src,
  alt,
  direction = "right",
}: {
  src: string;
  alt: string;
  direction?: "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: direction === "right" ? 200 : -200,
        rotate: direction === "right" ? 15 : -15,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              rotate: 0,
            }
          : {
              opacity: 0,
              x: direction === "right" ? 200 : -200,
              rotate: direction === "right" ? 15 : -15,
            }
      }
      transition={{
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <FloatingElement distance={10} duration={4}>
        <div className="relative">
          {/* Glow effect behind phone */}
          <motion.div
            className="absolute inset-0 bg-black/5 rounded-[3rem] blur-3xl scale-110"
            animate={{
              scale: [1.1, 1.15, 1.1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Phone frame */}
          <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl shadow-black/20">
            <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-10" />
              <div className="relative w-[280px] md:w-[320px] aspect-[9/19.5] bg-white rounded-[2.3rem] overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </FloatingElement>
    </motion.div>
  );
}

// Feature Section with staggered animations
function FeatureSection({
  feature,
  index,
}: {
  feature: (typeof mainFeatures)[0];
  index: number;
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={sectionRef}
      className={`grid lg:grid-cols-2 gap-16 items-center mb-40 last:mb-0`}
    >
      {/* Content */}
      <div className={!isEven ? "lg:order-2" : ""}>
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, rotate: 0 }
              : { opacity: 0, scale: 0, rotate: -180 }
          }
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <feature.icon className="w-8 h-8" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        >
          {feature.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-black/60 leading-relaxed"
        >
          {feature.description}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 w-20 bg-black/10 rounded-full mt-8 origin-left"
        />
      </div>

      {/* Mockup */}
      <div className={`flex justify-center ${!isEven ? "lg:order-1" : ""}`}>
        <AnimatedPhoneMockup
          src={feature.mockup}
          alt={feature.title}
          direction={isEven ? "right" : "left"}
        />
      </div>
    </motion.div>
  );
}

export function FeaturesContent() {
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  // Parallax effect for header
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      <motion.div ref={headerRef} style={{ y: headerY }}>
        <PageHeader
          badge="Features"
          title="Everything you need"
          titleHighlight="to thrift with confidence"
          description="A complete platform designed for the modern thrifter. Powerful tools for buying, selling, and discovering sustainable fashion."
        />
      </motion.div>

      {/* Main Features with Mockups */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {mainFeatures.map((feature, index) => (
            <FeatureSection key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative h-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-px h-full bg-gradient-to-b from-transparent via-black/20 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </div>

      {/* All Features Grid */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold tracking-widest text-black/50 uppercase mb-4"
            >
              More Features
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              And so much more
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Every feature designed to make your thrifting experience seamless
              and enjoyable.
            </p>
          </FadeIn>

          <motion.div
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {allFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={
                  isGridInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 50, scale: 0.9 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full group cursor-pointer">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to experience these features?
            </h2>
            <p className="text-lg text-black/60 mb-8">
              Join the waitlist and be the first to try Restyle when we launch.
            </p>
            <motion.a
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-black text-white rounded-full hover:bg-black/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Waitlist
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
