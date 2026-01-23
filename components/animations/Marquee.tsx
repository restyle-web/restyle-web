"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className = "",
  speed = 30,
  direction = "left",
  pauseOnHover = true,
}: MarqueeProps) {
  const baseVelocity = direction === "left" ? -speed : speed;

  return (
    <div
      className={`flex overflow-hidden ${pauseOnHover ? "group" : ""} ${className}`}
    >
      <motion.div
        className="flex shrink-0 gap-4 group-hover:[animation-play-state:paused]"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 50 / (speed / 30),
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
