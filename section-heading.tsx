"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
} satisfies Record<string, Variants>;

type AnimatedSectionProps = {
  as?: "section" | "div";
  id?: string;
  className?: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
};

export function AnimatedSection({
  as = "section",
  id,
  className,
  children,
  variant = "fadeUp",
  delay = 0,
}: AnimatedSectionProps) {
  const transition = {
    duration: 0.65,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  };

  const sharedProps = {
    id,
    className,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
    variants: variants[variant],
    transition,
  };

  if (as === "div") {
    return <motion.div {...sharedProps}>{children}</motion.div>;
  }

  return (
    <motion.section {...sharedProps}>{children}</motion.section>
  );
}
