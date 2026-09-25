"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Hero: React.FC = () => {
  const { t, tx } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    // Slide 0: Main Brand Overview
    {
      id: "main",
      tag: "VERA GOLD ENERJİ // B2B HEAVY DRILLING & PILING",
      watermark: "VERA GOLD",
      badge: tx({ tr: "AĞIR HİZMET DELGİ & SONDAJ FİLOSU", en: "HEAVY DUTY DRILLING & PILING FLEET", de: "SCHWERLAST-BOHR- & RAMMFLOTTE", fr: "FLOTTE DE FORAGE & BATTAGE LOURD", it: "FLOTTA DI PERFORAZIONE & INFISSIONE PESANTE", es: "FLOTA DE PERFORACIÓN & HINCADO PESADO" }),
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      image: "/satismakineleri/Paletli-Rock-Makina.jpg",
      specs: [
        { label: tx({ tr: "BÖLGE", en: "ZONE", de: "REGION", fr: "ZONE", it: "ZONA", es: "ZONA" }), val: tx({ tr: "Tüm Avrupa & Balkanlar", en: "All Europe & Balkans", de: "Ganz Europa & Balkan", fr: "Toute l'Europe & Balkans", it: "Tutta Europa & Balcani", es: "Toda Europa & Balcanes" }) },
        { label: tx({ tr: "FİLO", en: "FLEET", de: "FLOTTE", fr: "FLOTTE", it: "FLOTTA", es: "FLOTA" }), val: tx({ tr: "+23 Ağır İş Makinesi", en: "+23 Heavy Machines", de: "+23 Schwermaschinen", fr: "+23 Engins Lourds", it: "+23 Macchine Pesanti", es: "+23 Máquinas Pesadas" }) },
        { label: tx({ tr: "DESTEK", en: "SUPPORT", de: "SUPPORT", fr: "SUPPORT", it: "SUPPORTO", es: "SOPORTE" }), val: tx({ tr: "7/24 Saha Servisi", en: "24/7 Field Service", de: "24/7 Außendienst", fr: "Service Terrain 24/7", it: "Assistenza 24/7", es: "Servicio en Campo 24/7" }) },
      ],
      primaryCtaText: t("hero.exploreFleet"),
      primaryCtaLink: "/urunler",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
    // Slide 1: Paletli Rock Makinesi
    {
      id: "rock",
      tag: "VERA500 ROCK DRILL // DTH RIG",
      watermark: "ROCK DRILL",
      badge: tx({ tr: "GÜÇLÜ KAYA DELGİ TEKNOLOJİSİ", en: "HIGH-PRESSURE DTH ROCK DRILLING", de: "HOCHDRUCK-DTH-FELSBOHRUNG", fr: "FORAGE EN ROCHE DTH HAUTE PRESSION", it: "PERFORAZIONE IN ROCCIA DTH AD ALTA PRESSIONE", es: "PERFORACIÓN EN ROCA DTH DE ALTA PRESIÓN" }),
      title: t("hero.rock"),
      subtitle: tx({ tr: "Maden ocakları, şev stabilizasyonu ve granit zeminlerde 24 Bar yüksek basınçlı DTH delgi performansı.", en: "24 Bar high-pressure DTH drilling performance engineered for tough granite terrains and quarry operations.", de: "24-bar-Hochdruck-DTH-Bohrleistung für harte Granitböden und Steinbrucheinsätze.", fr: "Performance de forage DTH haute pression 24 bar pour terrains granitiques et carrières.", it: "Prestazioni di perforazione DTH ad alta pressione da 24 bar per terreni granitici e cave.", es: "Rendimiento de perforación DTH de alta presión de 24 bar para terrenos graníticos y canteras." }),
      image: "/satismakineleri/Paletli-Rock-Makina.jpg",
      specs: [
        { label: tx({ tr: "ÇAP", en: "DIAMETER", de: "DURCHMESSER", fr: "DIAMÈTRE", it: "DIAMETRO", es: "DIÁMETRO" }), val: "185 - 500 mm" },
        { label: tx({ tr: "TORK", en: "TORQUE", de: "DREHMOMENT", fr: "COUPLE", it: "COPPIA", es: "PAR" }), val: "12,000 Nm" },
        { label: tx({ tr: "MOTOR", en: "ENGINE", de: "MOTOR", fr: "MOTEUR", it: "MOTORE", es: "MOTOR" }), val: "Yuchai 86 kW" },
      ],
      primaryCtaText: tx({ tr: "Makine Detaylarını İncele", en: "Explore Machine Specs", de: "Maschinendaten ansehen", fr: "Voir les Caractéristiques", it: "Scopri le Specifiche della Macchina", es: "Ver Especificaciones de la Máquina" }),
      primaryCtaLink: "/urunler/rock-makinalari",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
    // Slide 2: MZ460Y GES Kazık Çakma
    {
      id: "solar",
      tag: "MZ460Y HYDRAULIC PILER // GES PILING",
      watermark: "SOLAR PILER",
      badge: tx({ tr: "GÜNEŞ ENERJİ SANTRALİ (GES) SİSTEMLERİ", en: "PV SOLAR FARM SUBSTRUCTURE RIG", de: "UNTERKONSTRUKTIONSGERÄT FÜR PV-SOLARPARKS", fr: "SONNEUSE POUR STRUCTURES DE CENTRALES PV", it: "MACCHINA PER SOTTOSTRUTTURE DI IMPIANTI FV", es: "MÁQUINA PARA SUBESTRUCTURAS DE PLANTAS FV" }),
      title: t("hero.solar"),
      subtitle: tx({ tr: "GES sahalarında C ve U çelik profilleri milimetrik hassasiyetle çakan yüksek hızlı hidrolik çakım gücü.", en: "High-frequency hydraulic piler driving C & U steel posts with millimetric precision on solar farm terrains.", de: "Hochfrequente hydraulische Ramme, die C- und U-Stahlprofile millimetergenau in Solarparkflächen rammt.", fr: "Sonneuse hydraulique haute fréquence enfonçant les profilés acier C et U avec une précision millimétrique sur les terrains solaires.", it: "Battipalo idraulico ad alta frequenza che infigge profili in acciaio C e U con precisione millimetrica nei terreni fotovoltaici.", es: "Hincadora hidráulica de alta frecuencia que hinca perfiles de acero C y U con precisión milimétrica en terrenos solares." }),
      image: "/satismakineleri/mz460y.jpg",
      specs: [
        { label: tx({ tr: "ÇAKIM Uzunluk", en: "MAX LENGTH", de: "MAX. LÄNGE", fr: "LONGUEUR MAX", it: "LUNGHEZZA MAX", es: "LONGITUD MÁX." }), val: "4,600 mm" },
        { label: tx({ tr: "DARBE Gücü", en: "IMPACT", de: "SCHLAGKRAFT", fr: "IMPACT", it: "IMPATTO", es: "IMPACTO" }), val: "1,200 J" },
        { label: tx({ tr: "KAPASİTE", en: "CAPACITY", de: "KAPAZITÄT", fr: "CAPACITÉ", it: "CAPACITÀ", es: "CAPACIDAD" }), val: tx({ tr: "400+ Kazık/Gün", en: "400+ Piles/Day", de: "400+ Pfähle/Tag", fr: "400+ Pieux/Jour", it: "400+ Pali/Giorno", es: "400+ Pilotes/Día" }) },
      ],
      primaryCtaText: tx({ tr: "Makine Detaylarını İncele", en: "Explore Machine Specs", de: "Maschinendaten ansehen", fr: "Voir les Caractéristiques", it: "Scopri le Specifiche della Macchina", es: "Ver Especificaciones de la Máquina" }),
      primaryCtaLink: "/urunler/kazik-cakma-makinalari",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
    // Slide 3: Derin Su & Zemin Sondaj Kulesi
    {
      id: "water",
      tag: "FY SERIES DEEP WELL RIG // DRILLING MAST",
      watermark: "DEEP WELL",
      badge: tx({ tr: "ENDÜSTRİYEL SONDAJ & JEOTEKNİK", en: "INDUSTRIAL WATER & GEOTECHNICAL DRILLING", de: "INDUSTRIELLE BRUNNEN- & GEOTECHNIKBOHRUNG", fr: "FORAGE D'EAU INDUSTRIEL & GÉOTECHNIQUE", it: "PERFORAZIONE INDUSTRIALE DI POZZI & GEOTECNICA", es: "PERFORACIÓN INDUSTRIAL DE POZOS & GEOTÉCNICA" }),
      title: t("hero.water"),
      subtitle: tx({ tr: "300+ metre derin su sondajı, jeoteknik etütler ve karot alım operasyonlarında yüksek torklu hidrolik kule.", en: "High-torque hydraulic mast for 300+ meter deep water wells and geotechnical core sampling.", de: "Hydraulikmast mit hohem Drehmoment für Brunnen über 300 m und geotechnische Kernproben.", fr: "Mât hydraulique à couple élevé pour puits de plus de 300 m et carottage géotechnique.", it: "Albero idraulico ad alta coppia per pozzi oltre 300 m e carotaggi geotecnici.", es: "Mástil hidráulico de alto par para pozos de más de 300 m y testificación geotécnica." }),
      image: "/stokfoto/aerial-shot-of-water-well-drilling-rig-boring-dowi-2024-10-18-10-11-35-utc.jpeg",
      specs: [
        { label: tx({ tr: "DERİNLİK", en: "DEPTH", de: "TIEFE", fr: "PROFONDEUR", it: "PROFONDITÀ", es: "PROFUNDIDAD" }), val: "180 - 800 m" },
        { label: tx({ tr: "TORK", en: "TORQUE", de: "DREHMOMENT", fr: "COUPLE", it: "COPPIA", es: "PAR" }), val: "14,000 N·m" },
        { label: tx({ tr: "KALDIRMA", en: "LIFTING", de: "HUBKRAFT", fr: "LEVAGE", it: "SOLLEVAMENTO", es: "ELEVACIÓN" }), val: "36 T" },
      ],
      primaryCtaText: tx({ tr: "Makine Detaylarını İncele", en: "Explore Machine Specs", de: "Maschinendaten ansehen", fr: "Voir les Caractéristiques", it: "Scopri le Specifiche della Macchina", es: "Ver Especificaciones de la Máquina" }),
      primaryCtaLink: "/urunler/sondaj-makinalari",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
    // Slide 4: Havadan Çekim Su Sondaj Operasyonu
    {
      id: "aerial",
      tag: "AERIAL OPERATIONS // SITE SURVEY & BORING",
      watermark: "AERIAL RIG",
      badge: tx({ tr: "HAVADAN ŞANTİYE & SONDAJ GÖRÜNTÜLEME", en: "AERIAL SITE SURVEY & WELL BORING", de: "LUFTBILD-ERKUNDUNG & BRUNNENBOHRUNG", fr: "RELEVÉ AÉRIEN & FORAGE DE PUITS", it: "RILIEVO AEREO & PERFORAZIONE DI POZZI", es: "RECONOCIMIENTO AÉREO & PERFORACIÓN DE POZOS" }),
      title: tx({ tr: "HAVADAN JEOTEKNİK & DERİN SONDAJ OPERASYONLARI", en: "AERIAL GEOTECHNICAL & WELL DRILLING FLEET", de: "LUFTGESTÜTZTE GEOTECHNIK- & BRUNNENBOHRFLOTTE", fr: "FLOTTE AÉRIENNE DE GÉOTECHNIQUE & FORAGE", it: "FLOTTA GEOTECNICA & DI PERFORAZIONE CON RILIEVO AEREO", es: "FLOTA GEOTÉCNICA & DE PERFORACIÓN CON RECONOCIMIENTO AÉREO" }),
      subtitle: tx({ tr: "Zorlu coğrafyalarda dron destekli haritalama ve 400 metreye varan derin su sondaj kuleleri.", en: "Drone-assisted mapping and deep water well drilling rigs operating in challenging terrains.", de: "Drohnengestützte Kartierung und Tiefbrunnen-Bohranlagen in schwierigem Gelände.", fr: "Cartographie assistée par drone et foreuses de puits profonds en terrains difficiles.", it: "Mappatura con drone e perforatrici per pozzi profondi in terreni difficili.", es: "Cartografía asistida por dron y perforadoras de pozos profundos en terrenos difíciles." }),
      image: "/stokfoto/aerial-shot-of-water-well-drilling-rig-boring-dowi-2024-10-18-10-11-35-utc.jpeg",
      specs: [
        { label: tx({ tr: "HARİTALAMA", en: "MAPPING", de: "KARTIERUNG", fr: "CARTOGRAPHIE", it: "MAPPATURA", es: "CARTOGRAFÍA" }), val: tx({ tr: "3D Dron Etüt", en: "3D Drone Survey", de: "3D-Drohnenvermessung", fr: "Relevé 3D par Drone", it: "Rilievo 3D con Drone", es: "Levantamiento 3D con Dron" }) },
        { label: tx({ tr: "DERİNLİK", en: "MAX DEPTH", de: "MAX. TIEFE", fr: "PROFONDEUR MAX", it: "PROFONDITÀ MAX", es: "PROFUNDIDAD MÁX." }), val: tx({ tr: "400 Metre", en: "400 Meters", de: "400 Meter", fr: "400 Mètres", it: "400 Metri", es: "400 Metros" }) },
        { label: tx({ tr: "KAPASİTE", en: "CAPACITY", de: "KAPAZITÄT", fr: "CAPACITÉ", it: "CAPACITÀ", es: "CAPACIDAD" }), val: tx({ tr: "7/24 Kesintisiz", en: "24/7 Non-Stop", de: "24/7 Durchgehend", fr: "24/7 Sans Interruption", it: "24/7 Senza Sosta", es: "24/7 Sin Interrupción" }) },
      ],
      primaryCtaText: tx({ tr: "Saha Operasyonlarını İncele", en: "View Field Operations", de: "Feldeinsätze ansehen", fr: "Voir les Opérations Terrain", it: "Scopri le Operazioni sul Campo", es: "Ver Operaciones de Campo" }),
      primaryCtaLink: "/operasyonlar",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
    // Slide 5: Açık Ocak Maden Delgi Operasyonu
    {
      id: "quarry",
      tag: "OPEN PIT MINING // PORPHYRY DRILLING",
      watermark: "OPEN PIT",
      badge: tx({ tr: "MADEN OCAĞI & KAYA PATLATMA DELGİLERİ", en: "OPEN PIT QUARRY & BLAST HOLE DRILLING", de: "TAGEBAU- & SPRENGLOCHBOHRUNG", fr: "CARRIÈRE À CIEL OUVERT & FORAGE DE MINES", it: "CAVA A CIELO APERTO & FORI DA MINA", es: "CANTERA A CIELO ABIERTO & BARRENOS" }),
      title: tx({ tr: "AÇIK OCAK KAYA DELİM & ŞEV STABİLİZASYONU", en: "OPEN PIT BLAST HOLE & SLOPE STABILIZATION", de: "SPRENGLOCHBOHRUNG IM TAGEBAU & HANGSICHERUNG", fr: "FORAGE DE MINES & STABILISATION DE TALUS", it: "FORI DA MINA A CIELO APERTO & STABILIZZAZIONE DEI PENDII", es: "BARRENOS A CIELO ABIERTO & ESTABILIZACIÓN DE TALUDES" }),
      subtitle: tx({ tr: "Maden sahaları ve taş ocaklarında granit ve porfir kayaçlar için yüksek darbe enerjili ağır kaya delici kuleler.", en: "High-impact rock drilling masts engineered for porphyry and granite rock extraction in open pit quarries.", de: "Schlagkräftige Bohrmasten für den Abbau von Porphyr und Granit im Tagebau.", fr: "Mâts de forage à fort impact pour l'extraction de porphyre et de granit en carrière à ciel ouvert.", it: "Alberi di perforazione ad alto impatto per l'estrazione di porfido e granito in cave a cielo aperto.", es: "Mástiles de perforación de alto impacto para la extracción de pórfido y granito en canteras a cielo abierto." }),
      image: "/stokfoto/driller-in-an-open-pit-mine-porphyry-rock-materia-2023-11-27-05-03-42-utc.jpg",
      specs: [
        { label: tx({ tr: "DARBE", en: "IMPACT", de: "SCHLAGKRAFT", fr: "IMPACT", it: "IMPATTO", es: "IMPACTO" }), val: tx({ tr: "24 Bar Basınç", en: "24 Bar Pressure", de: "24 bar Druck", fr: "Pression 24 bar", it: "Pressione 24 bar", es: "Presión 24 bar" }) },
        { label: tx({ tr: "FORMASYON", en: "ROCK TYPE", de: "GESTEINSART", fr: "TYPE DE ROCHE", it: "TIPO DI ROCCIA", es: "TIPO DE ROCA" }), val: tx({ tr: "Granit & Porfir", en: "Granite & Porphyry", de: "Granit & Porphyr", fr: "Granit & Porphyre", it: "Granito & Porfido", es: "Granito & Pórfido" }) },
        { label: tx({ tr: "GÜVENLİK", en: "SAFETY", de: "SICHERHEIT", fr: "SÉCURITÉ", it: "SICUREZZA", es: "SEGURIDAD" }), val: tx({ tr: "%100 Uyumlu", en: "100% Compliant", de: "100 % Konform", fr: "100 % Conforme", it: "100% Conforme", es: "100 % Conforme" }) },
      ],
      primaryCtaText: tx({ tr: "Operasyon Detaylarını İncele", en: "Explore Operation Specs", de: "Einsatzdaten ansehen", fr: "Voir les Détails de l'Opération", it: "Scopri i Dettagli dell'Operazione", es: "Ver Detalles de la Operación" }),
      primaryCtaLink: "/operasyonlar",
      secondaryCtaText: t("hero.ctaQuote"),
      secondaryCtaLink: "/iletisim",
    },
    // Slide 6: LGZJ-31/25 Yüksek Basınçlı Vidalı Kompresör
    {
      id: "compressor-lgzj",
      tag: "LGZJ-31/25 DIESEL COMPRESSOR // YUCHAI POWER",
      watermark: "COMPRESSOR",
      badge: tx({ tr: "YÜKSEK BASINÇLI VİDALI KOMPRESÖR", en: "HIGH-PRESSURE DIESEL SCREW COMPRESSOR", de: "HOCHDRUCK-DIESEL-SCHRAUBENKOMPRESSOR", fr: "COMPRESSEUR DIESEL À VIS HAUTE PRESSION", it: "COMPRESSORE DIESEL A VITE AD ALTA PRESSIONE", es: "COMPRESOR DIÉSEL DE TORNILLO DE ALTA PRESIÓN" }),
      title: tx({ tr: "LGZJ-31/25-35/18 DİZEL KOMPRESÖR", en: "LGZJ-31/25-35/18 DIESEL COMPRESSOR", de: "LGZJ-31/25-35/18 DIESELKOMPRESSOR", fr: "COMPRESSEUR DIESEL LGZJ-31/25-35/18", it: "COMPRESSORE DIESEL LGZJ-31/25-35/18", es: "COMPRESOR DIÉSEL LGZJ-31/25-35/18" }),
      subtitle: tx({ tr: "Yuchai 288-400 HP motor ve çift kademeli vida bloğu ile kaya delgi ve derin sondajların kesintisiz hava kaynağı.", en: "Equipped with Yuchai 288-400 HP engine and two-stage air end for continuous air delivery on tough sites.", de: "Ausgestattet mit Yuchai-Motor (288-400 PS) und zweistufigem Verdichterblock für unterbrechungsfreie Luftversorgung auf harten Baustellen.", fr: "Équipé d'un moteur Yuchai de 288-400 CV et d'un bloc vis bi-étagé pour une alimentation en air continue sur les chantiers difficiles.", it: "Dotato di motore Yuchai da 288-400 CV e gruppo vite bistadio per un'erogazione d'aria continua nei cantieri più duri.", es: "Equipado con motor Yuchai de 288-400 CV y bloque de tornillo de dos etapas para un suministro de aire continuo en obras exigentes." }),
      image: "/yeni/1/WhatsApp Image 2026-07-29 at 10.26.00.jpeg",
      specs: [
        { label: tx({ tr: "DEBİ", en: "CAPACITY", de: "KAPAZITÄT", fr: "CAPACITÉ", it: "CAPACITÀ", es: "CAPACIDAD" }), val: tx({ tr: "31 - 35 m³/dak", en: "31 - 35 m³/min", de: "31 - 35 m³/min", fr: "31 - 35 m³/min", it: "31 - 35 m³/min", es: "31 - 35 m³/min" }) },
        { label: tx({ tr: "BASINÇ", en: "PRESSURE", de: "DRUCK", fr: "PRESSION", it: "PRESSIONE", es: "PRESIÓN" }), val: "25 - 18 bar" },
        { label: tx({ tr: "MOTOR", en: "ENGINE", de: "MOTOR", fr: "MOTEUR", it: "MOTORE", es: "MOTOR" }), val: "Yuchai 288-400 HP" },
      ],
      primaryCtaText: tx({ tr: "Kompresör Detaylarını İncele", en: "Explore Compressor Specs", de: "Kompressordaten ansehen", fr: "Voir le Compresseur", it: "Scopri il Compressore", es: "Ver Especificaciones del Compresor" }),
      primaryCtaLink: "/urunler/lgzj-31-25-35-18-dizel-vidali-kompresor",
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
              title={tx({ tr: "Önceki Slayt", en: "Previous Slide", de: "Vorherige Folie", fr: "Diapositive Précédente", it: "Slide Precedente", es: "Diapositiva Anterior" })}
            >
              <ChevronLeft className="w-5 h-5 text-[#C59B27]" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="w-9 h-9 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-white transition-colors cursor-pointer shadow-md"
              title={tx({ tr: "Sonraki Slayt", en: "Next Slide", de: "Nächste Folie", fr: "Diapositive Suivante", it: "Slide Successiva", es: "Diapositiva Siguiente" })}
            >
              <ChevronRight className="w-5 h-5 text-[#C59B27]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
