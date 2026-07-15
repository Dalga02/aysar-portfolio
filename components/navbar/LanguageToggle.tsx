"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <button
      onClick={toggleLang}
      dir="ltr"
      aria-label={isAr ? "Switch to English" : "التبديل للعربية"}
      className="focus-ring relative grid h-9 w-[68px] grid-cols-2 rounded-full border border-border bg-surface/60 p-1"
    >
      {/* Sliding pill — exactly half the track, slides by 100% of its own width */}
      <motion.span
        className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-accent shadow-[0_2px_8px_-2px_hsl(var(--accent)/0.6)]"
        animate={{ x: isAr ? "100%" : "0%" }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
      />

      {/* Labels — each cell is exactly 50%, matching the pill exactly */}
      <span
        className={`relative z-10 flex items-center justify-center font-mono text-[10px] font-semibold transition-colors ${
          !isAr ? "text-white" : "text-ink-soft"
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex items-center justify-center font-mono text-[10px] font-semibold transition-colors ${
          isAr ? "text-white" : "text-ink-soft"
        }`}
      >
        AR
      </span>
    </button>
  );
}