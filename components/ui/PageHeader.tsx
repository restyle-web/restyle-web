"use client";

import { motion } from "framer-motion";
import { SplitText } from "../animations/SplitText";
import { FadeIn } from "../animations/FadeIn";

interface PageHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
}

export function PageHeader({
  badge,
  title,
  titleHighlight,
  description,
}: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, black 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {badge && (
          <FadeIn>
            <motion.span
              className="inline-block text-sm font-semibold tracking-widest text-black/50 uppercase mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {badge}
            </motion.span>
          </FadeIn>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <SplitText text={title} className="justify-center" delay={0.1} />
          {titleHighlight && (
            <>
              <br />
              <SplitText
                text={titleHighlight}
                className="justify-center text-black/30"
                delay={0.3}
              />
            </>
          )}
        </h1>

        <FadeIn delay={0.5}>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
