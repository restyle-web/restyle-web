"use client";

import { motion } from "framer-motion";
import { useState, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-black/70 mb-2">
          {label}
        </label>
      )}
      <motion.div
        className="relative"
        animate={{
          scale: isFocused ? 1.01 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <input
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            w-full px-4 py-3 text-base
            bg-white border-2 rounded-xl
            outline-none transition-all duration-300
            placeholder:text-black/40
            ${isFocused ? "border-black shadow-[0_0_0_4px_rgba(0,0,0,0.05)]" : "border-black/10 hover:border-black/30"}
            ${error ? "border-red-500" : ""}
            ${className}
          `}
        />
      </motion.div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
