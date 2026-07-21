"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowRight, ChevronLeft, ChevronRight, Activity, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const B2BServices: React.FC = () => {
  const { t, language } = useTranslation();
  const isTr = language === "tr";

  const [currentService, setCurrentService] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      id: "delgi",
      tag: "OPS-01 // DTH ROCK DRILLING FLEET",
      watermark: "ROCK DRILLING",
      badge: isTr ? "AĞIR HİZMET KAYA DELGİ" : "HEAVY DUTY ROCK DRILLING",
      title: t("b2bServices.delgi.title"),
      subtitle: isTr
        ? "Maden sahaları, şev stabilizasyonları ve granit zeminlerde 24 Bar yüksek basınçlı DTH delme operasyonları."
        : "24 Bar high-pressure DTH rock drilling operations engineered for tough granite terrains and quarry sites.",
      image: "/satismakineleri/Paletli-Rock-Makina.jpg",
      specs: [
        { label: isTr ? "BASINÇ" : "PRESSURE", val: "24 Bar DTH" },
        { label: isTr ? "ÇAP" : "DIAMETER", val: "90 - 165 mm" },
        { label: isTr ? "VERİM" : "UPTIME", val: "%99.4" },
      ],
      primaryCtaText: isTr ? "Delgi Detaylarını İncele" : "Explore Drilling Specs",
      primaryCtaLink: "/hizmetler/delgi",
    },
    {
      id: "kiralama",
      tag: "OPS-02 // SOLAR PILING RENTAL FLEET",
      watermark: "SOLAR PILING",
      badge: isTr ? "KİRALIK GES ÇAKIM FİLOSU" : "SOLAR PILING RENTAL FLEET",
      title: t("b2bServices.kiralama.title"),
      subtitle: isTr
        ? "GES arazilerinde C ve U profilli çelik çakım kazıklarını milimetrik açı doğruluğu ile çakan hidrolik makine filosu."
        : "High-frequency hydraulic piler rental fleet driving C & U steel posts with millimetric precision on solar terrains.",
      image: "/satismakineleri/mz460y.jpg",
      specs: [
        { label: isTr ? "ÇAKIM" : "MAX PILE", val: "4,600 mm" },
        { label: isTr ? "KAPASİTE" : "DAILY PILES", val: "400+ Kazık/Gün" },
        { label: isTr ? "HASSASİYET" : "ACCURACY", val: "± 2 mm" },
      ],
      primaryCtaText: isTr ? "Kiralama Filosunu İncele" : "Explore Rental Fleet",
      primaryCtaLink: "/hizmetler/kiralama",
    },
    {
      id: "enerji",
      tag: "OPS-03 // DEEP WELL & GEOTHERMAL MAST",
      watermark: "DEEP WELL",
      badge: isTr ? "ENDÜSTRİYEL SONDAJ KULELERİ" : "INDUSTRIAL WATER & CORING MASTS",
      title: t("b2bServices.enerji.title"),
      subtitle: isTr
        ? "300+ metre derin su sondajı, jeoteknik etütler ve santral altyapı projelerinde yüksek torklu hidrolik kuleler."
        : "High-torque hydraulic mast systems for 300+ meter deep water wells and geotechnical core sampling.",
      image: "/satismakineleri/sondaj-14.07.2023-19-09-01.jpg",
      specs: [
        { label: isTr ? "DERİNLİK" : "MAX DEPTH", val: "300 - 450 m" },
        { label: isTr ? "TORK" : "TORQUE", val: "8,500 Nm" },
        { label: isTr ? "DESTEK" : "SUPPORT", val: "7/24 Saha Servisi" },
      ],
      primaryCtaText: isTr ? "Sondaj Detaylarını İncele" : "Explore Drilling Specs",
      primaryCtaLink: "/hizmetler/enerji",
    },
    {
      id: "yedek-parca",
      tag: "OPS-04 // OEM PARTS & FIELD SERVICE",
      watermark: "OEM SPARES",
      badge: isTr ? "ORİJİNAL SARF & SAHA DESTEK" : "OEM SPARES & FIELD SERVICE",
      title: isTr ? "Yedek Parça & Mobil Servis" : "Spare Parts & Mobile Field Service",
      subtitle: isTr
        ? "Şantiye duruşlarını sıfıra indiren 7/24 mobil saha servis mühendisliği, orijinal DTH çekiç ve bit tedariki."
        : "24/7 mobile field engineering support, OEM DTH hammer, button bit, and compressor filter supply pipeline.",
      image: "/satismakineleri/csh1120a-hava-kompresoru.png",
      specs: [
        { label: isTr ? "MÜDAHALE" : "RESPONSE", val: "< 24 Saat" },
        { label: isTr ? "STOK" : "INVENTORY", val: "%100 Orijinal" },
        { label: isTr ? "GARANTİ" : "WARRANTY", val: "OEM Garantili" },
      ],
      primaryCtaText: isTr ? "Servis Detaylarını İncele" : "Explore Service Specs",
      primaryCtaLink: "/hizmetler/yedek-parca-servis",
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, services.length]);

  const activeSvc = services[currentService];

  return (
    <section
      id="services"
      className="relative h-screen min-h-screen snap-start snap-always bg-zinc-950 text-white flex flex-col justify-between overflow-hidden pt-28 pb-12 select-none border-t border-zinc-800/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >


      {/* SpaceX Background Grids & Particle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,155,39,0.12),transparent_65%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Dynamic Background Photo (Fullscreen Image) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSvc.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.65, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={activeSvc.image}
            alt={activeSvc.title}
            fill
            className="object-cover object-center brightness-90 contrast-110 opacity-95"
            priority
          />
          {/* REVERSED Gradient Vignette: Dark from RIGHT to Left! */}
          <div className="absolute inset-0 bg-gradient-to-l from-zinc-950 via-zinc-950/75 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60 z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Main Container - REVERSED LAYOUT (Text Aligned to the RIGHT!) */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Aligned Column (Taking columns 3-12 on Desktop) */}
          <div className="lg:col-span-10 xl:col-span-9 lg:col-start-3 xl:col-start-4 flex flex-col justify-center text-left lg:text-right lg:items-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSvc.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col lg:items-end"
              >
                {/* SpaceX Telemetry Monospace Tag (Right Aligned) */}
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C59B27] tracking-widest uppercase mb-5 border-l-2 lg:border-l-0 lg:border-r-2 border-[#C59B27] pl-3 lg:pl-0 lg:pr-3 py-0.5">
                  <Activity className="w-3.5 h-3.5 animate-pulse text-[#C59B27]" />
                  <span>{activeSvc.tag}</span>
                </div>

                {/* Main Headline (Giant Right Aligned Typography) */}
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6 leading-[1.02] font-sans">
                  {activeSvc.title}
                </h2>

                {/* Subtitle */}
                <p className="text-zinc-300 text-base sm:text-xl max-w-2xl font-medium leading-relaxed mb-10 text-left lg:text-right">
                  {activeSvc.subtitle}
                </p>

                {/* Action Buttons (Right Aligned) */}
                <div className="flex flex-wrap items-center justify-start lg:justify-end gap-4 mb-12">
                  <Link
                    href={activeSvc.primaryCtaLink}
                    className="px-8 py-4 rounded-none bg-white text-zinc-950 font-black text-xs uppercase tracking-widest hover:bg-[#C59B27] hover:text-white transition-all flex items-center gap-3 shadow-xl group cursor-pointer"
                  >
                    <span>{activeSvc.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <Link
                    href="/iletisim"
                    className="px-8 py-4 rounded-none border border-zinc-700 bg-zinc-900/70 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest hover:border-white hover:bg-zinc-800 transition-all cursor-pointer"
                  >
                    {isTr ? "Teklif İste" : "Request Quote"}
                  </Link>
                </div>

                {/* Live Telemetry Specs Row (Right Aligned Grid) */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800/80 max-w-xl w-full">
                  {activeSvc.specs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col text-left lg:text-right">
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

      {/* SpaceX Bottom Service Switcher Bar */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-6 border-t border-zinc-800/80">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Progress Indicators */}
          <div className="flex items-center gap-3">
            {services.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentService(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentService === idx
                    ? "w-12 bg-[#C59B27]"
                    : "w-6 bg-zinc-800 hover:bg-zinc-700"
                }`}
                title={s.title}
              />
            ))}
          </div>

          {/* Service Selection Pills */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
            {services.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentService(idx)}
                className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest rounded-none border transition-all cursor-pointer whitespace-nowrap ${
                  currentService === idx
                    ? "border-[#C59B27] bg-[#C59B27]/10 text-[#C59B27]"
                    : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                0{idx + 1} // {s.id}
              </button>
            ))}
          </div>

          {/* Arrow Nav */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentService((prev) => (prev - 1 + services.length) % services.length)}
              className="w-9 h-9 rounded-none border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:border-white hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentService((prev) => (prev + 1) % services.length)}
              className="w-9 h-9 rounded-none border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:border-white hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
