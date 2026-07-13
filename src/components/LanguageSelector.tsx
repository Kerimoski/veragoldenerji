"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "tr" as const, label: "Türkçe" },
    { code: "en" as const, label: "English" },
    { code: "de" as const, label: "Deutsch" },
    { code: "fr" as const, label: "Français" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLangLabel = languages.find((l) => l.code === language)?.label || "Türkçe";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-250 hover:border-zinc-450 bg-white hover:bg-zinc-50 text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition-all duration-150 shadow-xs"
      >
        <Globe className="w-3.5 h-3.5 text-[#C59B27]" />
        <span>{activeLangLabel}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-zinc-200 rounded-xl shadow-lg py-1.5 z-[100] animate-fadeIn backdrop-blur-md">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-xs font-semibold transition-colors ${
                language === lang.code
                  ? "text-[#C59B27] bg-zinc-50"
                  : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
