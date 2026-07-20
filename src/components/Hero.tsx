"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2, Drill, Hammer, Layers, Wind } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Hero: React.FC = () => {
  const { t, language } = useTranslation();
  const isTr = language === "tr";

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    // Slide 0: Main Brand Slogan & Overview
    {
      type: "main",
      badge: t("hero.badge"),
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      watermark: "VERA GOLD ENERJİ",
      ctaPrimaryText: t("hero.exploreFleet"),
      ctaPrimaryLink: "/urunler",
      ctaSecondaryText: t("hero.ctaQuote"),
      ctaSecondaryLink: "/iletisim",
    },
    // Slide 1: Paletli Rock Makinesi
    {
      type: "machine",
      categoryPath: "/urunler/rock-makinalari",
      watermark: "ROCK DRILLING",
      badge: isTr ? "Ağır Hizmet Delici Parkuru" : "Heavy Duty Rock Fleet",
      title: t("hero.rock"),
      subtitle: isTr
        ? "Maden ocakları, şev stabilizasyonları ve zorlu granit zeminlerde 24 Bar yüksek basınçlı DTH delgi gücü."
        : "24 Bar high-pressure DTH drilling performance in tough granite terrains and quarries.",
      image: "/satismakineleri/Paletli-Rock-Makina.jpg",
      specs: [
        { label: "Basınç", val: "24 Bar DTH" },
        { label: "Çap", val: "90 - 165 mm" },
        { label: "Motor", val: "Cummins 194 kW" },
      ],
      tag: "FD580 HEAVY ROCK DRILL",
    },
    // Slide 2: MZ460Y GES Kazık Çakma
    {
      type: "machine",
      categoryPath: "/urunler/kazik-cakma-makinalari",
      watermark: "SOLAR PILING",
      badge: isTr ? "Güneş Enerjisi (GES) Çözümleri" : "PV Solar Farm Substructures",
      title: t("hero.solar"),
      subtitle: isTr
        ? "GES arazilerinde C ve U profilli çelik çakım kazıklarını milimetrik açı doğruluğu ile çakan yüksek hızlı hidrolik sistem."
        : "High-frequency hydraulic piler driving C & U steel posts with millimetric precision on solar terrains.",
      image: "/satismakineleri/kazıkçakma.jpeg",
      specs: [
        { label: "Çakım", val: "4,600 mm" },
        { label: "Darbe", val: "1,200 J" },
        { label: "Kapasite", val: "400+ Kazık/Gün" },
      ],
      tag: "MZ460Y HYDRAULIC PILER",
    },
    // Slide 3: Derin Su & Zemin Sondaj Kulesi
    {
      type: "machine",
      categoryPath: "/urunler/sondaj-makinalari",
      watermark: "DEEP WELL RIG",
      badge: isTr ? "Endüstriyel Sondaj Filosu" : "Industrial Water & Coring Rigs",
      title: t("hero.water"),
      subtitle: isTr
        ? "300+ metre derin su sondajı, jeoteknik zemin etütleri ve karot numune alım operasyonlarında yüksek torklu hidrolik kule."
        : "High-torque hydraulic mast for 300+ meter deep water wells and geotechnical core drilling.",
      image: "/satismakineleri/sondaj-14.07.2023-19-09-01.jpg",
      specs: [
        { label: "Derinlik", val: "300 - 450 m" },
        { label: "Tork", val: "8,500 Nm" },
        { label: "Pompa", val: "Çamur Pompası" },
      ],
      tag: "VD-S300 DEEP DRILLING",
    },
    // Slide 4: Mobil Dizel Kompresör
    {
      type: "machine",
      categoryPath: "/urunler/kompresorler",
      watermark: "AIR COMPRESSOR",
      badge: isTr ? "Yüksek Basınçlı Hava Ünitesi" : "High Pressure Diesel Air End",
      title: t("hero.compressor"),
      subtitle: isTr
        ? "Şantiye koşullarında DTH çekiç ve kaya delgilerini kesintisiz besleyen 24 Bar, 33 m³/dk hava debili mobil dizel kompresör."
        : "Heavy-duty diesel air compressor delivering 24 Bar and 33 m³/min airflow for continuous DTH rock drilling.",
      image: "/satismakineleri/csh1120a-hava-kompresoru.png",
      specs: [
        { label: "Basınç", val: "24 Bar (348 PSI)" },
        { label: "Debi", val: "33 m³/dk" },
        { label: "Motor", val: "Cummins QSL9" },
      ],
      tag: "CSH1120A DIESEL AIR END",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative overflow-hidden bg-white text-zinc-900 select-none"
    >
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C59B27]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Giant 3D Watermark Typography Backdrop */}
      <div className="absolute top-28 sm:top-36 md:inset-0 flex items-start md:items-center justify-center pointer-events-none overflow-hidden z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.watermark}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 0.09, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl md:text-[11vw] font-black uppercase tracking-tighter text-zinc-950 whitespace-nowrap text-center select-none font-mono px-2 leading-none"
            style={{ textShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
          >
            {activeSlide.watermark}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Slide Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {activeSlide.type === "main" ? (
              /* Main Overview Slide (Slide 0) */
              <div className="text-center py-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-250 bg-white/90 backdrop-blur-md text-xs text-[#C59B27] font-semibold mb-6 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>{activeSlide.badge}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto text-zinc-950">
                  <span className="shimmer-text">
                    {activeSlide.title}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-zinc-500 text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
                  {activeSlide.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                  <Link
                    href={activeSlide.ctaPrimaryLink || "/urunler"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm tracking-wide shadow-md transition-colors"
                  >
                    <span>{activeSlide.ctaPrimaryText}</span>
                    <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                  </Link>
                  <Link
                    href={activeSlide.ctaSecondaryLink || "/iletisim"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-250 text-zinc-800 font-bold text-sm transition-colors shadow-xs"
                  >
                    <span>{activeSlide.ctaSecondaryText}</span>
                  </Link>
                </div>

                {/* 4 Machine Quick Badges Strip */}
                <div className="max-w-5xl mx-auto">
                  <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                    <span>{t("hero.fleetTag")}</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { title: t("hero.rock"), image: "/satismakineleri/Paletli-Rock-Makina.jpg", slideIndex: 1 },
                      { title: t("hero.solar"), image: "/satismakineleri/kazıkçakma.jpeg", slideIndex: 2 },
                      { title: t("hero.water"), image: "/satismakineleri/sondaj-14.07.2023-19-09-01.jpg", slideIndex: 3 },
                      { title: t("hero.compressor"), image: "/satismakineleri/csh1120a-hava-kompresoru.png", slideIndex: 4 },
                    ].map((m, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(m.slideIndex)}
                        className="group relative h-28 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-xs hover:shadow-md hover:border-[#C59B27] transition-all text-left cursor-pointer"
                      >
                        <Image
                          src={m.image}
                          alt={m.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-2.5 left-3 right-3 z-10">
                          <div className="text-[11px] font-bold text-white leading-tight group-hover:text-[#C59B27] transition-colors">
                            {m.title}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* 3D Machine Feature Slide (Slides 1-4) */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
                {/* Left Side: Info & CTAs */}
                <div className="lg:col-span-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-250 bg-white text-xs text-[#C59B27] font-semibold mb-4 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>{activeSlide.badge}</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
                    {activeSlide.title}
                  </h2>

                  <p className="text-zinc-600 text-sm md:text-base font-semibold leading-relaxed mb-6">
                    {activeSlide.subtitle}
                  </p>

                  {/* Tech Specs Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {activeSlide.specs?.map((sp, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200">
                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-tight">{sp.label}</div>
                        <div className="text-xs md:text-sm font-extrabold text-zinc-900 mt-0.5">{sp.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={activeSlide.categoryPath || "/urunler"}
                      className="py-3.5 px-6 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-xs tracking-wide shadow-md transition-colors inline-flex items-center gap-2"
                    >
                      <span>{isTr ? "Makine Detaylarını İncele" : "View Machine Specs"}</span>
                      <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                    </Link>
                    <Link
                      href={`/iletisim?product=${encodeURIComponent(activeSlide.title || "")}`}
                      className="py-3.5 px-6 rounded-xl bg-white border border-zinc-250 text-zinc-900 font-bold text-xs hover:bg-zinc-50 transition-colors shadow-xs"
                    >
                      <span>{t("productsPage.getQuote")}</span>
                    </Link>
                  </div>
                </div>

                {/* Right Side: 3D Floating Machine Showcase */}
                <div className="lg:col-span-6 relative flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative w-full max-w-lg h-72 md:h-96 rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl bg-zinc-100 group"
                    style={{ perspective: 1000 }}
                  >
                    <Image
                      src={activeSlide.image || ""}
                      alt={activeSlide.title || ""}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating 3D Badge Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-extrabold text-[#C59B27] uppercase tracking-wider bg-black/80 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
                        // {activeSlide.tag}
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-emerald-500/90 text-white font-bold text-[10px] backdrop-blur-md shadow-lg flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {t("productsPage.inStock")}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation & Indicators */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-150">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx
                    ? "w-8 bg-[#C59B27]"
                    : "w-2.5 bg-zinc-250 hover:bg-zinc-400"
                }`}
                title={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Current Slide Numbering */}
          <div className="text-xs font-mono font-bold text-zinc-400">
            <span className="text-[#C59B27]">0{currentSlide + 1}</span> / 0{slides.length}
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-xl border border-zinc-250 bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors shadow-2xs cursor-pointer"
              title="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-xl border border-zinc-250 bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors shadow-2xs cursor-pointer"
              title="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
