"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  className = "",
  duration = 3,
  distance = 10,
  delay = 0,
}: FloatingElementProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ willChange: "transform" }}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              y: [-distance, distance, -distance],
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay,
            }
      }
    >
      {children}
    </motion.div>
  );
}
