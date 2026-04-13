"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function PhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 280px, 320px",
}: PhoneMockupProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Phone frame */}
      <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl shadow-black/20">
        {/* Screen bezel */}
        <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-10" />

          {/* Screen content */}
          <div className="relative aspect-[9/19.5] bg-neutral-100 rounded-[2.3rem] overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              priority={priority}
              sizes={sizes}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
