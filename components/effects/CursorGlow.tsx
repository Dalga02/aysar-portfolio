"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  // Motion values update outside React, so moving the mouse no longer re-renders the component.
  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);
  const x = useSpring(rawX, { stiffness: 60, damping: 22, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 60, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX - 210);
      rawY.set(e.clientY - 210);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[45] h-[420px] w-[420px] rounded-full mix-blend-screen will-change-transform"
      style={{
        x,
        y,
        background:
          "radial-gradient(circle, hsl(var(--accent) / 0.25), transparent 60%)",
      }}
    />
  );
}
