"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowRight, ChevronLeft, ChevronRight, Activity, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const B2BServices: React.FC = () => {
  const { t, tx } = useTranslation();

  const [currentService, setCurrentService] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      id: "delgi",
      tag: "OPS-01 // DTH ROCK DRILLING FLEET",
      watermark: "ROCK DRILLING",
      badge: tx({ tr: "AĞIR HİZMET KAYA DELGİ", en: "HEAVY DUTY ROCK DRILLING", de: "SCHWERLAST-FELSBOHRUNG", fr: "FORAGE EN ROCHE LOURD", it: "PERFORAZIONE IN ROCCIA PESANTE", es: "PERFORACIÓN EN ROCA PESADA" }),
      title: t("b2bServices.delgi.title"),
      subtitle: tx({ tr: "Maden sahaları, şev stabilizasyonları ve granit zeminlerde 24 Bar yüksek basınçlı DTH delme operasyonları.", en: "24 Bar high-pressure DTH rock drilling operations engineered for tough granite terrains and quarry sites.", de: "24-bar-Hochdruck-DTH-Felsbohrungen für harte Granitböden und Steinbrüche.", fr: "Opérations de forage en roche DTH haute pression 24 bar pour terrains granitiques et carrières.", it: "Perforazioni in roccia DTH ad alta pressione da 24 bar per terreni granitici e cave.", es: "Operaciones de perforación en roca DTH de alta presión de 24 bar para terrenos graníticos y canteras." }),
      image: "/satismakineleri/Paletli-Rock-Makina.jpg",
      specs: [
        { label: tx({ tr: "BASINÇ", en: "PRESSURE", de: "DRUCK", fr: "PRESSION", it: "PRESSIONE", es: "PRESIÓN" }), val: "24 Bar DTH" },
        { label: tx({ tr: "ÇAP", en: "DIAMETER", de: "DURCHMESSER", fr: "DIAMÈTRE", it: "DIAMETRO", es: "DIÁMETRO" }), val: "89 - 250 mm" },
        { label: tx({ tr: "VERİM", en: "UPTIME", de: "VERFÜGBARKEIT", fr: "DISPONIBILITÉ", it: "OPERATIVITÀ", es: "DISPONIBILIDAD" }), val: tx({ tr: "%99.4", en: "99.4%", de: "99,4 %", fr: "99,4 %", it: "99,4%", es: "99,4 %" }) },
      ],
      primaryCtaText: tx({ tr: "Delgi Detaylarını İncele", en: "Explore Drilling Specs", de: "Bohrdaten ansehen", fr: "Voir les Données de Forage", it: "Scopri le Specifiche di Perforazione", es: "Ver Datos de Perforación" }),
      primaryCtaLink: "/hizmetler/delgi",
    },
    {
      id: "kiralama",
      tag: "OPS-02 // SOLAR PILING RENTAL FLEET",
      watermark: "SOLAR PILING",
      badge: tx({ tr: "KİRALIK GES ÇAKIM FİLOSU", en: "SOLAR PILING RENTAL FLEET", de: "SOLAR-RAMM-MIETFLOTTE", fr: "FLOTTE DE BATTAGE SOLAIRE EN LOCATION", it: "FLOTTA BATTIPALO FV A NOLEGGIO", es: "FLOTA DE HINCADO SOLAR EN ALQUILER" }),
      title: t("b2bServices.kiralama.title"),
      subtitle: tx({ tr: "GES arazilerinde C ve U profilli çelik çakım kazıklarını milimetrik açı doğruluğu ile çakan hidrolik makine filosu.", en: "High-frequency hydraulic piler rental fleet driving C & U steel posts with millimetric precision on solar terrains.", de: "Mietflotte hochfrequenter hydraulischer Rammen, die C- und U-Stahlprofile millimetergenau in Solarflächen rammen.", fr: "Flotte de sonneuses hydrauliques haute fréquence en location, enfonçant les profilés acier C et U avec une précision millimétrique.", it: "Flotta a noleggio di battipalo idraulici ad alta frequenza che infiggono profili in acciaio C e U con precisione millimetrica.", es: "Flota de alquiler de hincadoras hidráulicas de alta frecuencia que hincan perfiles de acero C y U con precisión milimétrica." }),
      image: "/satismakineleri/mz460y.jpg",
      specs: [
        { label: tx({ tr: "ÇAKIM", en: "MAX PILE", de: "MAX. PFAHL", fr: "PIEU MAX", it: "PALO MAX", es: "PILOTE MÁX." }), val: "4,600 mm" },
        { label: tx({ tr: "KAPASİTE", en: "DAILY PILES", de: "PFÄHLE/TAG", fr: "PIEUX/JOUR", it: "PALI/GIORNO", es: "PILOTES/DÍA" }), val: tx({ tr: "400+ Kazık/Gün", en: "400+ Piles/Day", de: "400+ Pfähle/Tag", fr: "400+ Pieux/Jour", it: "400+ Pali/Giorno", es: "400+ Pilotes/Día" }) },
        { label: tx({ tr: "HASSASİYET", en: "ACCURACY", de: "GENAUIGKEIT", fr: "PRÉCISION", it: "PRECISIONE", es: "PRECISIÓN" }), val: "± 2 mm" },
      ],
      primaryCtaText: tx({ tr: "Kiralama Filosunu İncele", en: "Explore Rental Fleet", de: "Mietflotte ansehen", fr: "Voir la Flotte de Location", it: "Scopri la Flotta a Noleggio", es: "Ver Flota de Alquiler" }),
      primaryCtaLink: "/hizmetler/kiralama",
    },
    {
      id: "enerji",
      tag: "OPS-03 // DEEP WELL & GEOTHERMAL MAST",
      watermark: "DEEP WELL",
      badge: tx({ tr: "ENDÜSTRİYEL SONDAJ KULELERİ", en: "INDUSTRIAL WATER & CORING MASTS", de: "INDUSTRIE-BRUNNEN- & KERNBOHRMASTEN", fr: "MÂTS DE FORAGE D'EAU & CAROTTAGE", it: "ALBERI PER POZZI INDUSTRIALI & CAROTAGGIO", es: "MÁSTILES PARA POZOS INDUSTRIALES & TESTIFICACIÓN" }),
      title: t("b2bServices.enerji.title"),
      subtitle: tx({ tr: "300+ metre derin su sondajı, jeoteknik etütler ve jeotermal projelerde yüksek torklu hidrolik kuleler.", en: "High-torque hydraulic mast systems for 300+ meter deep water wells, geotechnical core sampling, and geothermal sites.", de: "Hydraulische Mastsysteme mit hohem Drehmoment für Brunnen über 300 m, geotechnische Kernproben und Geothermie.", fr: "Systèmes de mât hydraulique à couple élevé pour puits de plus de 300 m, carottage géotechnique et géothermie.", it: "Sistemi ad albero idraulico ad alta coppia per pozzi oltre 300 m, carotaggi geotecnici e geotermia.", es: "Sistemas de mástil hidráulico de alto par para pozos de más de 300 m, testificación geotécnica y geotermia." }),
      image: "/satismakineleri/sondaj-14.07.2023-19-09-01.jpg",
      specs: [
        { label: tx({ tr: "DERİNLİK", en: "MAX DEPTH", de: "MAX. TIEFE", fr: "PROFONDEUR MAX", it: "PROFONDITÀ MAX", es: "PROFUNDIDAD MÁX." }), val: "180 - 800 m" },
        { label: tx({ tr: "TORK", en: "TORQUE", de: "DREHMOMENT", fr: "COUPLE", it: "COPPIA", es: "PAR" }), val: "14,000 N·m" },
        { label: tx({ tr: "DESTEK", en: "SUPPORT", de: "SUPPORT", fr: "SUPPORT", it: "SUPPORTO", es: "SOPORTE" }), val: tx({ tr: "7/24 Saha Servisi", en: "24/7 Field Service", de: "24/7 Außendienst", fr: "Service Terrain 24/7", it: "Assistenza 24/7", es: "Servicio en Campo 24/7" }) },
      ],
      primaryCtaText: tx({ tr: "Sondaj Detaylarını İncele", en: "Explore Drilling Specs", de: "Bohrdaten ansehen", fr: "Voir les Données de Forage", it: "Scopri le Specifiche di Perforazione", es: "Ver Datos de Perforación" }),
      primaryCtaLink: "/hizmetler/enerji",
    },
    {
      id: "yedek-parca",
      tag: "OPS-04 // OEM PARTS & FIELD SERVICE",
      watermark: "OEM SPARES",
      badge: tx({ tr: "ORİJİNAL SARF & SAHA DESTEK", en: "OEM SPARES & FIELD SERVICE", de: "OEM-ERSATZTEILE & AUSSENDIENST", fr: "PIÈCES OEM & SERVICE TERRAIN", it: "RICAMBI OEM & ASSISTENZA SUL CAMPO", es: "REPUESTOS OEM & SERVICIO EN CAMPO" }),
      title: tx({ tr: "Yedek Parça & Mobil Servis", en: "Spare Parts & Mobile Field Service", de: "Ersatzteile & Mobiler Außendienst", fr: "Pièces Détachées & Service Terrain Mobile", it: "Ricambi & Assistenza Mobile sul Campo", es: "Repuestos & Servicio Móvil en Campo" }),
      subtitle: tx({ tr: "Şantiye duruşlarını sıfıra indiren 7/24 mobil saha servis mühendisliği, orijinal DTH çekiç ve bit tedariki.", en: "24/7 mobile field engineering support, OEM DTH hammer, button bit, and compressor filter supply pipeline.", de: "24/7 mobiler technischer Außendienst sowie Versorgung mit OEM-DTH-Hämmern, Stiftbohrkronen und Kompressorfiltern.", fr: "Assistance technique mobile 24/7 et approvisionnement en marteaux DTH OEM, taillants à boutons et filtres de compresseur.", it: "Assistenza tecnica mobile 24/7 e fornitura di martelli DTH OEM, punte a bottoni e filtri per compressori.", es: "Soporte técnico móvil 24/7 y suministro de martillos DTH OEM, brocas de botones y filtros de compresor." }),
      image: "/gorseller/kompresor-lgzj-25bar/lgzj-1.jpg",
      specs: [
        { label: tx({ tr: "MÜDAHALE", en: "RESPONSE", de: "REAKTION", fr: "INTERVENTION", it: "INTERVENTO", es: "RESPUESTA" }), val: tx({ tr: "< 24 Saat", en: "< 24 Hours", de: "< 24 Std.", fr: "< 24 Heures", it: "< 24 Ore", es: "< 24 Horas" }) },
        { label: tx({ tr: "STOK", en: "INVENTORY", de: "LAGER", fr: "STOCK", it: "MAGAZZINO", es: "INVENTARIO" }), val: tx({ tr: "%100 Orijinal", en: "100% Original", de: "100 % Original", fr: "100 % d'Origine", it: "100% Originale", es: "100 % Original" }) },
        { label: tx({ tr: "GARANTİ", en: "WARRANTY", de: "GARANTIE", fr: "GARANTIE", it: "GARANZIA", es: "GARANTÍA" }), val: tx({ tr: "OEM Garantili", en: "OEM Warranty", de: "OEM-Garantie", fr: "Garantie OEM", it: "Garanzia OEM", es: "Garantía OEM" }) },
      ],
      primaryCtaText: tx({ tr: "Servis Detaylarını İncele", en: "Explore Service Specs", de: "Servicedaten ansehen", fr: "Voir les Détails du Service", it: "Scopri i Dettagli del Servizio", es: "Ver Detalles del Servicio" }),
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
      className="relative min-h-screen bg-zinc-950 text-white flex flex-col justify-between overflow-hidden pt-28 pb-8 select-none border-t border-zinc-800/80"
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
                    {tx({ tr: "Teklif İste", en: "Request Quote", de: "Angebot anfordern", fr: "Demander un Devis", it: "Richiedi un Preventivo", es: "Solicitar Presupuesto" })}
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
      <div className="max-w-7xl mx-auto px-6 w-full relative z-30 pt-4 pb-4 border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-xl rounded-t-2xl shadow-2xl mt-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Progress Indicators */}
          <div className="flex items-center gap-2">
            {services.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentService(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentService === idx
                    ? "w-10 bg-[#C59B27]"
                    : "w-4 bg-zinc-700 hover:bg-zinc-500"
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
                className={`px-3.5 py-2 text-[10px] font-mono uppercase tracking-widest rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                  currentService === idx
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
              onClick={() => setCurrentService((prev) => (prev - 1 + services.length) % services.length)}
              className="w-9 h-9 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-white transition-colors cursor-pointer shadow-md"
              title={tx({ tr: "Önceki Hizmet", en: "Previous Service", de: "Vorherige Leistung", fr: "Service Précédent", it: "Servizio Precedente", es: "Servicio Anterior" })}
            >
              <ChevronLeft className="w-5 h-5 text-[#C59B27]" />
            </button>
            <button
              onClick={() => setCurrentService((prev) => (prev + 1) % services.length)}
              className="w-9 h-9 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-white transition-colors cursor-pointer shadow-md"
              title={tx({ tr: "Sonraki Hizmet", en: "Next Service", de: "Nächste Leistung", fr: "Service Suivant", it: "Servizio Successivo", es: "Servicio Siguiente" })}
            >
              <ChevronRight className="w-5 h-5 text-[#C59B27]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
