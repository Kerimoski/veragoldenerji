"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C59B27]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-250 bg-white/80 backdrop-blur-md text-xs text-[#C59B27] font-semibold mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>{t("hero.badge")}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
          <span className="shimmer-text">
            {t("hero.title")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-500 text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
          {t("hero.subtitle")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/iletisim"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-lg bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm tracking-wide shadow-sm transition-colors"
          >
            {t("hero.ctaQuote")}
          </Link>
          <Link
            href="/hizmetler"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-lg bg-white hover:bg-zinc-50 border border-zinc-250 text-zinc-800 font-bold text-sm transition-colors shadow-xs group"
          >
            <span>{t("hero.ctaProjects")}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Visual decoration: glowing line */}
        <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/25 to-transparent mx-auto mt-20" />
      </div>
    </section>
  );
};
