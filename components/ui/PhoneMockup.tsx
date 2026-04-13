"use client";

import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  imageClassName?: string;
}

export function PhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 280px, 320px",
  imageClassName = "object-cover object-top",
}: PhoneMockupProps) {
  return (
    <div className={`relative transform-gpu ${className}`}>
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
              className={imageClassName}
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              sizes={sizes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
