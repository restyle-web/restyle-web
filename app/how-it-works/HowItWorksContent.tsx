"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { FloatingElement } from "@/components/animations/FloatingElement";
import {
  Search,
  Heart,
  MessageSquare,
  CreditCard,
  Package,
  Star,
  Camera,
  Tag,
  DollarSign,
  Send,
  Truck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const buyerSteps = [
  {
    number: "01",
    icon: Search,
    title: "Browse & Discover",
    description:
      "Explore thousands of unique pre-loved items from sellers worldwide. Use powerful filters to search by size, brand, condition, price, and more. Our algorithm learns your style preferences to show you items you'll love.",
    details: [
      "Search by brand, size, or style",
      "Save filters for quick access",
      "Get personalized recommendations",
    ],
  },
  {
    number: "02",
    icon: Heart,
    title: "Save & Follow",
    description:
      "Found something you like? Save items to your wishlist and follow your favorite sellers. Get notified when they post new items or when prices drop on items you've saved.",
    details: [
      "Create wishlists for different occasions",
      "Follow sellers to see their new listings",
      "Get price drop notifications",
    ],
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Connect & Negotiate",
    description:
      "Have questions? Message sellers directly through our built-in chat. Want a better deal? Send an offer with your proposed price. Sellers can accept, decline, or counter your offer.",
    details: [
      "Direct messaging with sellers",
      "Send and track offers",
      "View offers from other buyers",
    ],
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Secure Checkout",
    description:
      "Ready to buy? Our secure checkout process makes purchasing simple. Choose your payment method and shipping preference. All transactions are protected with buyer guarantee.",
    details: [
      "Multiple payment options",
      "Choose your courier",
      "Buyer protection on all purchases",
    ],
  },
  {
    number: "05",
    icon: Package,
    title: "Track & Receive",
    description:
      "Track your order from payment to delivery with real-time updates. Once your item arrives, confirm receipt and enjoy your new-to-you fashion find!",
    details: [
      "Real-time order tracking",
      "Delivery notifications",
      "Easy returns process",
    ],
  },
  {
    number: "06",
    icon: Star,
    title: "Review & Rate",
    description:
      "Had a great experience? Leave a review for the seller to help build trust in our community. Your feedback helps other buyers make informed decisions.",
    details: [
      "Rate your experience",
      "Add photos to reviews",
      "Build seller reputation",
    ],
  },
];

const sellerSteps = [
  {
    number: "01",
    icon: Camera,
    title: "Capture Your Item",
    description:
      "Take beautiful photos of your items using our smart camera. Good photos are key to selling fast! Our app guides you to capture the best angles and highlight important details.",
    details: [
      "Smart photo guidance",
      "Multiple angle suggestions",
      "Auto-enhance for better visibility",
    ],
  },
  {
    number: "02",
    icon: Tag,
    title: "Create Your Listing",
    description:
      "Add details about your item: brand, size, condition, and category. Write a compelling description and set your price. Our pricing suggestions help you stay competitive.",
    details: [
      "Easy detail entry",
      "Pricing recommendations",
      "Condition guidelines",
    ],
  },
  {
    number: "03",
    icon: Send,
    title: "Go Live Instantly",
    description:
      "Your listing goes live immediately and is visible to thousands of potential buyers. Share your listing on social media to reach even more people.",
    details: [
      "Instant publishing",
      "Social sharing tools",
      "Boost options available",
    ],
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Engage With Buyers",
    description:
      "Respond to questions and offers from interested buyers. Our chat system makes communication easy. Accept, decline, or counter offers with a single tap.",
    details: [
      "Quick response templates",
      "Offer management",
      "Buyer insights",
    ],
  },
  {
    number: "05",
    icon: Truck,
    title: "Ship With Ease",
    description:
      "Once sold, print your shipping label and drop off your package. We partner with multiple couriers to give you the best rates and convenience.",
    details: [
      "Pre-paid shipping labels",
      "Multiple courier options",
      "Package pickup available",
    ],
  },
  {
    number: "06",
    icon: DollarSign,
    title: "Get Paid",
    description:
      "Money is released to your wallet once the buyer confirms receipt. Withdraw to your bank account anytime. Track all your earnings in the seller dashboard.",
    details: [
      "Secure payments",
      "Fast withdrawals",
      "Detailed earnings reports",
    ],
  },
];

export function HowItWorksContent() {
  const [activeTab, setActiveTab] = useState<"buyer" | "seller">("buyer");
  const stepsRef = useRef(null);
  const isStepsInView = useInView(stepsRef, { once: true, margin: "-50px" });

  const steps = activeTab === "buyer" ? buyerSteps : sellerSteps;

  return (
    <>
      <PageHeader
        badge="How It Works"
        title="Simple. Seamless."
        titleHighlight="Sustainable."
        description="Whether you're buying or selling, Restyle makes the process effortless. Here's how it works."
      />

      {/* Tab Switcher */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex justify-center">
            <div className="inline-flex bg-black/5 rounded-full p-1.5">
              {[
                { id: "buyer", label: "For Buyers", icon: Search },
                { id: "seller", label: "For Sellers", icon: Tag },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "buyer" | "seller")}
                  className={`relative flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeHowItWorksTab"
                      className="absolute inset-0 bg-black rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <tab.icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6" ref={stepsRef}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-0"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isStepsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-20 w-0.5 h-full bg-black/10" />
                )}

                <div className="flex gap-6 pb-16 group">
                  {/* Step number and icon */}
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-[#f0f0f0] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <step.icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-black/30 tracking-widest">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-black/60 leading-relaxed mb-4 max-w-2xl">
                      {step.description}
                    </p>

                    {/* Details list */}
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={
                            isStepsInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -10 }
                          }
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + i * 0.05 + 0.2,
                          }}
                          className="flex items-center gap-2 text-sm text-black/50"
                        >
                          <CheckCircle className="w-4 h-4 text-black/30" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <p className="text-sm font-semibold tracking-widest text-white/40 uppercase mb-4">
                  See It In Action
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                  Intuitive design for
                  <br />
                  <span className="text-white/40">effortless thrifting</span>
                </h2>
                <p className="text-lg text-white/60 leading-relaxed mb-8">
                  Every screen is carefully crafted to make buying and selling
                  pre-loved fashion a delightful experience. Clean, simple, and
                  beautiful.
                </p>
                <motion.a
                  href="/"
                  className="inline-flex items-center gap-2 text-white font-medium group"
                  whileHover={{ x: 5 }}
                >
                  Join the waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </FadeIn>
            </div>

            <div className="flex justify-center">
              <FloatingElement distance={10} duration={4}>
                <PhoneMockup
                  src={
                    activeTab === "buyer"
                      ? "/mockups/Homepage.png"
                      : "/mockups/Intro Carousel (1).svg"
                  }
                  alt="Restyle App"
                  className="w-[280px] md:w-[320px]"
                />
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-black/60 mb-8">
              We're here to help. Reach out to our team and we'll get back to
              you as soon as possible.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-black text-white rounded-full hover:bg-black/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
