"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedInViewProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedInView({
  children,
  delay = 0,
  className,
}: AnimatedInViewProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
