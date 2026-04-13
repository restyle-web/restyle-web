"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../ui/Logo";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Track pill dimensions
  const navContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0 });

  // Track scroll position
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Find active index
  const activeIndex = navLinks.findIndex((link) => pathname === link.href);

  // Update pill position based on hovered or active link
  const updatePillPosition = (targetIndex: number) => {
    if (targetIndex === -1 || !navContainerRef.current) return;

    const targetLink = linkRefs.current[targetIndex];
    if (!targetLink) return;

    const containerRect = navContainerRef.current.getBoundingClientRect();
    const linkRect = targetLink.getBoundingClientRect();

    setPillStyle({
      width: linkRect.width,
      left: linkRect.left - containerRect.left,
    });
  };

  // Initial measurement on mount
  useEffect(() => {
    // Small delay to ensure refs are populated
    const timer = setTimeout(() => {
      const targetIndex = hoveredIndex ?? activeIndex;
      updatePillPosition(targetIndex);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Update on hover or active change
  useEffect(() => {
    const targetIndex = hoveredIndex ?? activeIndex;
    updatePillPosition(targetIndex);
  }, [hoveredIndex, activeIndex]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Main navbar container */}
          <motion.div
            className={`mt-4 rounded-2xl border transition-all duration-500 ${
              isScrolled
                ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-black/5"
                : "bg-transparent border-transparent"
            }`}
          >
            <div className="px-4 sm:px-6 py-3">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <Logo size="md" />
                </motion.div>

                {/* Center Navigation - Pill Style */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="hidden md:block absolute left-1/2 -translate-x-1/2"
                >
                  <div
                    ref={navContainerRef}
                    className="relative flex items-center bg-black/5 rounded-full p-1.5"
                  >
                    {/* Animated pill background */}
                    <AnimatePresence>
                      {(hoveredIndex !== null || activeIndex !== -1) && pillStyle.width > 0 && (
                        <motion.div
                          className="absolute top-1.5 bottom-1.5 left-0 bg-white rounded-full shadow-sm"
                          initial={{ opacity: 0, x: pillStyle.left, width: pillStyle.width }}
                          animate={{
                            opacity: 1,
                            width: pillStyle.width,
                            x: pillStyle.left,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Nav Links */}
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href;
                      const isHovered = hoveredIndex === index;

                      return (
                        <Link
                          key={link.label}
                          ref={(el) => { linkRefs.current[index] = el; }}
                          href={link.href}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                            isActive || isHovered
                              ? "text-black"
                              : "text-black/60 hover:text-black"
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Right side - CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="hidden md:flex items-center gap-3"
                >
                  <Link
                    href="/#waitlist"
                    className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:pr-8"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Join the Waitlist</span>
                    <ArrowRight className="w-4 h-4 absolute right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-black/5">
                  <Logo size="md" />
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Links */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-2">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                              isActive
                                ? "bg-black text-white"
                                : "hover:bg-black/5"
                            }`}
                          >
                            <span className="text-lg font-medium">
                              {link.label}
                            </span>
                            <ArrowRight
                              className={`w-5 h-5 transition-transform ${
                                isActive ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                              }`}
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-black/5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      href="/#waitlist"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-black text-white text-lg font-medium rounded-xl"
                    >
                      <Sparkles className="w-5 h-5" />
                      Join the Waitlist
                    </Link>
                    <p className="text-center text-sm text-black/40 mt-4">
                      Be first to know when we launch
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
