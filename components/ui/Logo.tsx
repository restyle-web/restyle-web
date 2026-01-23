"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
  dark?: boolean;
}

export function Logo({
  className = "",
  size = "md",
  withText = true,
  dark = false,
}: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: "text-lg" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 40, text: "text-2xl" },
  };

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2"
      >
        <div
          className={`flex items-center justify-center rounded-lg ${dark ? "bg-black" : "bg-black"} p-1.5`}
        >
          <Image
            src="/logo/R..svg"
            alt="Restyle Logo"
            width={sizes[size].icon}
            height={sizes[size].icon}
            className="w-auto h-auto"
          />
        </div>
        {withText && (
          <span
            className={`font-semibold tracking-tight ${sizes[size].text} ${dark ? "text-white" : "text-black"}`}
          >
            Restyle.
          </span>
        )}
      </motion.div>
    </Link>
  );
}
