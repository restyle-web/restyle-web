"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      className={`
        bg-white rounded-2xl border border-black/5
        ${paddings[padding]}
        ${hover ? "hover:border-black/10 hover:shadow-xl hover:shadow-black/5" : ""}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </motion.div>
  );
}
