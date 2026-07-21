"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { Shield, Settings, Cpu, Zap, Filter, Droplet, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export const Arsenal: React.FC = () => {
  const { t, language } = useTranslation();
  const isTr = language === "tr";
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    {
      id: "dth",
      icon: <Settings className="w-5 h-5 text-[#C59B27]" />,
      title: t("arsenal.dth.title"),
      desc: t("arsenal.dth.desc"),
      spec: t("arsenal.dth.spec"),
      tag: t("arsenal.dth.tag"),
      image: "/veragaleri/Parca-6705-scaled.jpg",
      code: "EQUIP-01",
    },
    {
      id: "bits",
      icon: <Cpu className="w-5 h-5 text-[#C59B27]" />,
      title: t("arsenal.bits.title"),
      desc: t("arsenal.bits.desc"),
      spec: t("arsenal.bits.spec"),
      tag: t("arsenal.bits.tag"),
      image: "/satismakineleri/Paletli-Rock-Makina.jpg",
      code: "EQUIP-02",
    },
    {
      id: "auger",
      icon: <Shield className="w-5 h-5 text-[#C59B27]" />,
      title: t("arsenal.auger.title"),
      desc: t("arsenal.auger.desc"),
      spec: t("arsenal.auger.spec"),
      tag: t("arsenal.auger.tag"),
      image: "/satismakineleri/sondajmakinesi.jpeg",
      code: "EQUIP-03",
    },
    {
      id: "filter",
      icon: <Filter className="w-5 h-5 text-[#C59B27]" />,
      title: isTr ? "Ağır Hizmet Filtre Grubu" : "Heavy Duty Filter Assembly",
      desc: isTr ? "Yüksek basınçlı hava ve hidrolik hatları için orijinal emiş & seperatör filtreleri." : "OEM intake & separator filters engineered for high-pressure air and hydraulic circuits.",
      spec: "99.9% Partikül Tutma",
      tag: "AIR & HYDRAULIC FILTERS",
      image: "/veragaleri/Filtre-6579-scaled.jpg",
      code: "EQUIP-04",
    },
    {
      id: "fluids",
      icon: <Droplet className="w-5 h-5 text-[#C59B27]" />,
      title: isTr ? "Hidrolik & Madeni Sıvılar" : "Hydraulic & Lubricating Fluids",
      desc: isTr ? "Zorlu şantiye sıcaklıklarına dayanıklı özel hidrolik kırıcı ve kompresör yağları." : "Extreme temperature hydraulic fluids and DTH hammer lubricant additives.",
      spec: "ISO VG 46/68 Grade",
      tag: "SITE CHEMICALS & OILS",
      image: "/veragaleri/Bidon-6664-scaled.jpg",
      code: "EQUIP-05",
    },
    {
      id: "consumables",
      icon: <Wrench className="w-5 h-5 text-[#C59B27]" />,
      title: isTr ? "Kompresör Sarf Ekipmanları" : "Compressor Consumables & Rig Parts",
      desc: isTr ? "24 Bar yüksek basınçlı mobil kompresörlerin kesintisiz çalışması için orijinal yedekler." : "Original replacement kits and valves for 24 Bar mobile diesel air compressor ends.",
      spec: "OEM Guaranteed",
      tag: "AIR COMPRESSOR SPARES",
      image: "/veragaleri/Filtre-6645-scaled.jpg",
      code: "EQUIP-06",
    },
  ];

  // Tripled array for continuous seamless infinite marquee looping
  const marqueeItems = [...items, ...items, ...items];

  return (
    <section className="py-28 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-800/80">
      {/* Background Visual Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(197,155,39,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 mb-16 relative z-10"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>// {t("arsenal.badge")}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white font-sans">
              {t("arsenal.title")}
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-md font-medium leading-relaxed">
            {t("arsenal.subtitle")}
          </p>
        </div>
      </motion.div>

      {/* 3D Continuous Marquee Row (Moving Right to Left) */}
      <div
        className="relative w-full overflow-hidden py-6 select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left & Right Fade Shadows */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />

        <div
          className={`flex gap-6 w-max animate-marquee ${
            isHovered ? "[animation-play-state:paused]" : ""
          }`}
          style={{
            perspective: "1200px",
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[320px] md:w-[380px] shrink-0 group"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="h-full flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/90 backdrop-blur-md p-6 transition-all duration-500 group-hover:border-[#C59B27]/60 group-hover:bg-zinc-900 group-hover:shadow-[0_20px_50px_rgba(197,155,39,0.12)] relative overflow-hidden">
                {/* Top Code Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                  <span className="text-[10px] font-mono text-[#C59B27] uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] animate-pulse" />
                    {item.code} // {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#C59B27]">
                    {item.icon}
                  </div>
                </div>

                {/* Photo Thumbnail */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 border border-zinc-800 bg-zinc-950">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#C59B27] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-normal mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Spec Footer */}
                  <div className="pt-4 border-t border-zinc-800/80">
                    <div className="bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-500 font-bold uppercase tracking-wider">
                        {isTr ? "TEKNİK ÖZELLİK:" : "SPEC:"}
                      </span>
                      <span className="text-[#C59B27] font-extrabold text-right">
                        {item.spec}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Standard Right-to-Left Marquee Keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
};
