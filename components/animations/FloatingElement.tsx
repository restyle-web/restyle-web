"use client";

import { useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

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
    <div
      className={prefersReducedMotion ? className : `${className} animate-hero-float`}
      style={
        prefersReducedMotion
          ? undefined
          : ({
              "--float-distance": `${distance}px`,
              "--float-distance-negative": `-${distance}px`,
              "--float-duration": `${duration}s`,
              "--float-delay": `${delay}s`,
            } as CSSProperties)
      }
    >
      {children}
    </div>
  );
}
