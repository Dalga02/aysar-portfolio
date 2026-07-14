"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { site } from "@/data/site";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[55] bg-canvas/95 backdrop-blur-xl md:hidden"
        >
          <div className="container-x flex items-center justify-between py-6">
            <span className="font-display text-2xl">{site.shortName}</span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-x mt-10 flex flex-col gap-6">
            {site.nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="font-display text-4xl leading-tight text-ink hover:text-accent"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
