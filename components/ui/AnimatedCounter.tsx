"use client";

import { useEffect } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

interface CounterProps {
  to: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({ to, duration = 1.6, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, duration, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
