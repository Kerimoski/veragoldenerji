"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Hero: React.FC = () => {
  const { t, language } = useTranslation();
  const isTr = language === "tr";

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    // Slide 0: Main Brand Overview
    {
      id: "main",
      tag: "VERA GOLD ENERJİ // B2B HEAVY DRILLING & PILING",
      watermark: "VERA GOLD",
      badge: isTr ? "AĞIR HİZMET DELGİ & SONDAJ FİLOSU" : "HEAVY DUTY DRILLING & PILING FLEET",
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      image: "/satismakineleri/Paletli-Rock-Makina.jpg",
      specs: [
        { label: isTr ? "BÖLGE" : "ZONE", val: "Tüm Avrupa & Balkanlar" },
        { label: isTr ? "FİLO" : "FLEET", val: "100+ Ağır İş Makinesi" },
        { label: isTr ? "DESTEK" : "SUPPORT", val: "7/24 Saha Servisi" },
      ],
      primaryCtaText: t("hero.exploreFleet"),
      primaryCtaLink: "/urunler",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
    // Slide 1: Paletli Rock Makinesi
    {
      id: "rock",
      tag: "FD580 HEAVY ROCK DRILL // DTH RIG",
      watermark: "ROCK DRILL",
      badge: isTr ? "GÜÇLÜ KAYA DELGİ TEKNOLOJİSİ" : "HIGH-PRESSURE DTH ROCK DRILLING",
      title: t("hero.rock"),
      subtitle: isTr
        ? "Maden ocakları, şev stabilizasyonu ve granit zeminlerde 24 Bar yüksek basınçlı DTH delgi performansı."
        : "24 Bar high-pressure DTH drilling performance engineered for tough granite terrains and quarry operations.",
      image: "/satismakineleri/Paletli-Rock-Makina.jpg",
      specs: [
        { label: isTr ? "BASINÇ" : "PRESSURE", val: "24 Bar DTH" },
        { label: isTr ? "ÇAP" : "DIAMETER", val: "90 - 165 mm" },
        { label: isTr ? "MOTOR" : "ENGINE", val: "Cummins 194 kW" },
      ],
      primaryCtaText: isTr ? "Makine Detaylarını İncele" : "Explore Machine Specs",
      primaryCtaLink: "/urunler/paletli-rock-delgi-makinesi",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
    // Slide 2: MZ460Y GES Kazık Çakma
    {
      id: "solar",
      tag: "MZ460Y HYDRAULIC PILER // GES PILING",
      watermark: "SOLAR PILER",
      badge: isTr ? "GÜNEŞ ENERJİ SANTRALİ (GES) SİSTEMLERİ" : "PV SOLAR FARM SUBSTRUCTURE RIG",
      title: t("hero.solar"),
      subtitle: isTr
        ? "GES sahalarında C ve U çelik profilleri milimetrik hassasiyetle çakan yüksek hızlı hidrolik çakım gücü."
        : "High-frequency hydraulic piler driving C & U steel posts with millimetric precision on solar farm terrains.",
      image: "/satismakineleri/mz460y.jpg",
      specs: [
        { label: isTr ? "ÇAKIM Uzunluk" : "MAX LENGTH", val: "4,600 mm" },
        { label: isTr ? "DARBE Gücü" : "IMPACT", val: "1,200 J" },
        { label: isTr ? "KAPASİTE" : "CAPACITY", val: "400+ Kazık/Gün" },
      ],
      primaryCtaText: isTr ? "Makine Detaylarını İncele" : "Explore Machine Specs",
      primaryCtaLink: "/urunler/mz460y-gunes-enerjisi-ges-kazik-cakma-makinesi",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
    // Slide 3: Derin Su & Zemin Sondaj Kulesi
    {
      id: "water",
      tag: "VD-S300 DEEP WELL RIG // DRILLING MAST",
      watermark: "DEEP WELL",
      badge: isTr ? "ENDÜSTRİYEL SONDAJ & JEOTEKNİK" : "INDUSTRIAL WATER & GEOTECHNICAL DRILLING",
      title: t("hero.water"),
      subtitle: isTr
        ? "300+ metre derin su sondajı, jeoteknik etütler ve karot alım operasyonlarında yüksek torklu hidrolik kule."
        : "High-torque hydraulic mast for 300+ meter deep water wells and geotechnical core sampling.",
      image: "/stokfoto/aerial-shot-of-water-well-drilling-rig-boring-dowi-2024-10-18-10-11-35-utc.jpeg",
      specs: [
        { label: isTr ? "DERİNLİK" : "DEPTH", val: "300 - 450 m" },
        { label: isTr ? "TORK" : "TORQUE", val: "8,500 Nm" },
        { label: isTr ? "POMPA" : "PUMP", val: "Entegre Çamur Pompası" },
      ],
      primaryCtaText: isTr ? "Makine Detaylarını İncele" : "Explore Machine Specs",
      primaryCtaLink: "/urunler/derin-su-sondaj-makinesi",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
    // Slide 4: Havadan Çekim Su Sondaj Operasyonu
    {
      id: "aerial",
      tag: "AERIAL OPERATIONS // SITE SURVEY & BORING",
      watermark: "AERIAL RIG",
      badge: isTr ? "HAVADAN ŞANTİYE & SONDAJ GÖRÜNTÜLEME" : "AERIAL SITE SURVEY & WELL BORING",
      title: isTr ? "HAVADAN JEOTEKNİK & DERİN SONDAJ OPERASYONLARI" : "AERIAL GEOTECHNICAL & WELL DRILLING FLEET",
      subtitle: isTr
        ? "Zorlu coğrafyalarda dron destekli haritalama ve 400 metreye varan derin su sondaj kuleleri."
        : "Drone-assisted mapping and deep water well drilling rigs operating in challenging terrains.",
      image: "/stokfoto/aerial-shot-of-water-well-drilling-rig-boring-dowi-2024-10-18-10-11-35-utc.jpeg",
      specs: [
        { label: isTr ? "HARİTALAMA" : "MAPPING", val: "3D Dron Etüt" },
        { label: isTr ? "DERİNLİK" : "MAX DEPTH", val: "400 Metre" },
        { label: isTr ? "KAPASİTE" : "CAPACITY", val: "7/24 Kesintisiz" },
      ],
      primaryCtaText: isTr ? "Saha Operasyonlarını İncele" : "View Field Operations",
      primaryCtaLink: "/operasyonlar",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
    // Slide 5: Açık Ocak Maden Delgi Operasyonu
    {
      id: "quarry",
      tag: "OPEN PIT MINING // PORPHYRY DRILLING",
      watermark: "OPEN PIT",
      badge: isTr ? "MADEN OCAĞI & KAYA PATLATMA DELGİLERİ" : "OPEN PIT QUARRY & BLAST HOLE DRILLING",
      title: isTr ? "AÇIK OCAK KAYA DELİM & ŞEV STABİLİZASYONU" : "OPEN PIT BLAST HOLE & SLOPE STABILIZATION",
      subtitle: isTr
        ? "Maden sahaları ve taş ocaklarında granit ve porfir kayaçlar için yüksek darbe enerjili ağır kaya delici kuleler."
        : "High-impact rock drilling masts engineered for porphyry and granite rock extraction in open pit quarries.",
      image: "/stokfoto/driller-in-an-open-pit-mine-porphyry-rock-materia-2023-11-27-05-03-42-utc.jpg",
      specs: [
        { label: isTr ? "DARBE" : "IMPACT", val: "24 Bar Basınç" },
        { label: isTr ? "FORMASYON" : "ROCK TYPE", val: "Granit & Porfir" },
        { label: isTr ? "GÜVENLİK" : "SAFETY", val: "%100 Uyumlu" },
      ],
      primaryCtaText: isTr ? "Operasyon Detaylarını İncele" : "Explore Operation Specs",
      primaryCtaLink: "/operasyonlar",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="relative min-h-screen bg-zinc-950 text-white flex flex-col justify-between overflow-hidden pt-32 pb-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* SpaceX Dark Background Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(197,155,39,0.12),transparent_65%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Dynamic Background Backdrop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.65, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={activeSlide.image}
            alt={activeSlide.title}
            fill
            className="object-cover object-center brightness-90 contrast-110 opacity-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/75 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60 z-10" />
        </motion.div>
      </AnimatePresence>



      {/* Main Hero Container - Full Screen SpaceX Layout for ALL Slides */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Full Width Left Column */}
          <div className="lg:col-span-11 xl:col-span-10 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* SpaceX Telemetry Monospace Tag */}
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C59B27] tracking-widest uppercase mb-5 border-l-2 border-[#C59B27] pl-3 py-0.5">
                  <Activity className="w-3.5 h-3.5 animate-pulse text-[#C59B27]" />
                  <span>{activeSlide.tag}</span>
                </div>

                {/* Main Headline (SpaceX Style Giant Sans-Serif) */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mb-6 leading-[1.02] font-sans">
                  {activeSlide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-zinc-300 text-base sm:text-xl max-w-2xl font-medium leading-relaxed mb-10">
                  {activeSlide.subtitle}
                </p>

                {/* Action Buttons (SpaceX Sharp Borders) */}
                <div className="flex flex-wrap items-center gap-4 mb-12">
                  <Link
                    href={activeSlide.primaryCtaLink}
                    className="px-8 py-4 rounded-none bg-white text-zinc-950 font-black text-xs uppercase tracking-widest hover:bg-[#C59B27] hover:text-white transition-all flex items-center gap-3 shadow-xl group cursor-pointer"
                  >
                    <span>{activeSlide.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <Link
                    href={activeSlide.secondaryCtaLink}
                    className="px-8 py-4 rounded-none border border-zinc-700 bg-zinc-900/70 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest hover:border-white hover:bg-zinc-800 transition-all cursor-pointer"
                  >
                    {activeSlide.secondaryCtaText}
                  </Link>
                </div>

                {/* Live Telemetry Specs Row */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800/80 max-w-xl">
                  {activeSlide.specs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-sm md:text-base font-extrabold text-white mt-1">
                        {spec.val}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* SpaceX Bottom Slide Switcher Bar */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-30 pt-4 pb-4 border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-xl rounded-t-2xl shadow-2xl mt-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Progress Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx
                    ? "w-10 bg-[#C59B27]"
                    : "w-4 bg-zinc-700 hover:bg-zinc-500"
                }`}
                title={s.title}
              />
            ))}
          </div>

          {/* Machine Selection Pills */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3.5 py-2 text-[10px] font-mono uppercase tracking-widest rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                  currentSlide === idx
                    ? "border-[#C59B27] bg-[#C59B27] text-white font-bold shadow-md"
                    : "border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:border-zinc-600 hover:text-white"
                }`}
              >
                0{idx + 1} // {s.id}
              </button>
            ))}
          </div>

          {/* Arrow Nav */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="w-9 h-9 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-white transition-colors cursor-pointer shadow-md"
              title="Önceki Slayt"
            >
              <ChevronLeft className="w-5 h-5 text-[#C59B27]" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="w-9 h-9 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-white transition-colors cursor-pointer shadow-md"
              title="Sonraki Slayt"
            >
              <ChevronRight className="w-5 h-5 text-[#C59B27]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
