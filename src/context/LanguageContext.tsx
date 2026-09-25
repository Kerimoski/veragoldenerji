"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import tr from "@/locales/tr.json";
import en from "@/locales/en.json";
import de from "@/locales/de.json";
import fr from "@/locales/fr.json";
import it from "@/locales/it.json";
import es from "@/locales/es.json";

export type Language = "tr" | "en" | "de" | "fr" | "it" | "es";

const LANGUAGES: Language[] = ["tr", "en", "de", "fr", "it", "es"];

const translations = { tr, en, de, fr, it, es };

/** Inline copy for every language; languages without an entry fall back to English. */
export type LocalizedText = { tr: string; en: string } & Partial<Record<Language, string>>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
  tx: (text: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("tr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("vera_gold_lang") as Language;
    if (saved && LANGUAGES.includes(saved)) {
      setLanguageState(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("vera_gold_lang", lang);
  };

  const t = (path: string): any => {
    const keys = path.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to Turkish if the translation doesn't exist
        let fallback: any = translations["tr"];
        for (const fkey of keys) {
          if (fallback && typeof fallback === "object" && fkey in fallback) {
            fallback = fallback[fkey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  const tx = (text: LocalizedText): string => text[language] ?? text.en;

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "tr", setLanguage: () => {}, t: (k) => k, tx: (m) => m.tr }}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tx }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
