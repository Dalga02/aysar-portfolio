"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { HeroBackground } from "./HeroBackground";
import { FloatingIcons } from "./FloatingIcons";
import { HeroIllustration } from "./HeroIllustration";

function useTyped(words: readonly string[], speed = 90, pause = 1400) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setWordIdx(0);
    setDisplay("");
    setDeleting(false);
  }, [words]);

  useEffect(() => {
    const current = words[wordIdx] ?? "";
    if (!deleting && display === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && display === "") {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setDisplay((d) =>
          deleting ? current.slice(0, d.length - 1) : current.slice(0, d.length + 1)
        );
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [display, deleting, wordIdx, words, speed, pause]);

  return display;
}

export function Hero() {
  const { t } = useLanguage();
  const typed = useTyped(t.hero.typing);
  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-[100svh] pt-28 md:pt-32">
      <HeroBackground />

      <div className="container-x grid grid-cols-1 items-center gap-14 pb-24 lg:grid-cols-2 lg:gap-10 lg:pb-32">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-xs font-medium text-ink-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(2.6rem,7vw,5.25rem)] font-normal leading-[0.98] tracking-tight"
          >
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
            <br />
            {t.hero.titleLine3} <GradientText>{t.hero.titleHighlight}</GradientText>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">
            {t.hero.subtitlePrefix} <span className="text-ink">{t.hero.fullName}</span>. {t.hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-5 font-mono text-sm text-ink-soft">
            &gt;{" "}
            <span className="text-accent">{typed}</span>
            <span className="animate-pulse text-accent">▍</span>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" onClick={() => (window.location.hash = "projects")}>
              {t.hero.viewProjects} <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="/resume.pdf"
              download="Aysar-Dalgamouni-Resume.pdf"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 text-base font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent focus-ring"
            >
              <Download className="h-4 w-4" /> {t.hero.resume}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4 text-ink-soft">
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="focus-ring rounded-full p-2 transition-colors hover:text-ink">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="focus-ring rounded-full p-2 transition-colors hover:text-ink">
              <MessageCircle className="h-5 w-5" />
            </a>
            <div className="mx-3 h-4 w-px bg-border" />
            <span className="text-sm">{t.hero.location}</span>
          </motion.div>
        </motion.div>

        {/* Right */}
        <div className="relative mx-auto flex w-full items-center justify-center">
          <FloatingIcons />
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
