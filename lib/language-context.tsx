"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type TranslationDict } from "@/data/translations";

interface LanguageContextValue {
  lang: Lang;
  t: TranslationDict;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "aysar-portfolio-lang";

function applyDocumentDirection(lang: Lang) {
  if (typeof document === "undefined") return;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default is always English on first load — matches server-rendered <html lang="en" dir="ltr">
  const [lang, setLangState] = useState<Lang>("en");

  // After mount, check for a saved preference and apply it.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "ar") {
        setLangState("ar");
        applyDocumentDirection("ar");
      }
    } catch {
      // ignore (e.g. privacy mode)
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    applyDocumentDirection(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggleLang, setLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
