"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const heroMachines = [
    { title: t("hero.rock"), image: "/satismakineleri/Paletli-Rock-Makina.jpg", path: "/urunler/rock-makinalari" },
    { title: t("hero.water"), image: "/satismakineleri/sondaj-14.07.2023-19-09-01.jpg", path: "/urunler/sondaj-makinalari" },
    { title: t("hero.solar"), image: "/satismakineleri/kazıkçakma.jpeg", path: "/urunler/kazik-cakma-makinalari" },
    { title: t("hero.compressor"), image: "/satismakineleri/csh1120a-hava-kompresoru.png", path: "/urunler/kompresorler" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative overflow-hidden"
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/urunler"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm tracking-wide shadow-md transition-colors"
          >
            <span>{t("hero.exploreFleet")}</span>
            <ArrowRight className="w-4 h-4 text-[#C59B27]" />
          </Link>
          <Link
            href="/iletisim"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-250 text-zinc-800 font-bold text-sm transition-colors shadow-xs"
          >
            <span>{t("hero.ctaQuote")}</span>
          </Link>
        </div>

        {/* Real Machinery Photo Showcase Strip */}
        <div className="max-w-5xl mx-auto mt-4">
          <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
            <span>{t("hero.fleetTag")}</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroMachines.map((m, idx) => (
              <Link
                key={idx}
                href={m.path}
                className="group relative h-36 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-xs hover:shadow-md hover:border-[#C59B27]/40 transition-all block text-left"
              >
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <div className="text-[11px] font-bold text-white leading-tight group-hover:text-[#C59B27] transition-colors">
                    {m.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
