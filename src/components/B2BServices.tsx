"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import { ThreeDCard } from "./ThreeDCard";
import { ArrowRight, Drill, Hammer, Layers } from "lucide-react";

export const B2BServices: React.FC = () => {
  const { t } = useTranslation();
  const isTr = t("nav.home") === "Ana Sayfa";

  const cards = [
    {
      id: "delgi",
      icon: <Hammer className="w-6 h-6 text-[#C59B27]" />,
      titleTr: "Ağır Hizmet Kaya Delgi & Çakım İşleri (Kompresörlü)",
      titleEn: "Heavy-Duty Rock Drilling & Piling (Compressor)",
      descTr: "Zorlu kaya formasyonlarında, yüksek hava basınçlı DTH çekiç sistemlerimizle hızlı ve milimetrik GES sahası delgi ve kazık çakım işleri.",
      descEn: "Fast and millimetric solar site drilling and pile driving works in tough rock formations using high-pressure DTH hammer systems.",
      href: "/hizmetler/delgi",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C59B27] fill-none stroke-1.5">
          {/* Heavy DTH Drill Rig setup */}
          <line x1="30" y1="90" x2="80" y2="90" strokeWidth="3" />
          <rect x="35" y="70" width="20" height="20" rx="2" />
          <line x1="45" y1="70" x2="45" y2="15" strokeWidth="2" />
          {/* Compressor Hose */}
          <path d="M 35 80 Q 20 85, 10 90" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="3 3" />
          {/* Driller slide block */}
          <rect x="41" y="25" width="8" height="15" fill="rgba(197, 155, 39, 0.1)" />
          <line x1="45" y1="40" x2="45" y2="90" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="45" cy="90" r="3" fill="#10B981" />
        </svg>
      )
    },
    {
      id: "kiralama",
      icon: <Drill className="w-6 h-6 text-[#C59B27]" />,
      titleTr: "Havasız (Kompresörsüz) Rotari & Burgu Delgileri",
      titleEn: "Rotary & Auger Drilling (Compressorless)",
      descTr: "Kompresör kullanımının uygun olmadığı zeminlerde, yüksek torklu rotari sistemler ve özel burgularımız (Auger) ile çevre dostu, sessiz ve efektif delgi çözümleri.",
      descEn: "Eco-friendly, quiet, and effective drilling solutions using high-torque rotary systems and custom augers on sites where compressor usage is restricted.",
      href: "/hizmetler/kiralama",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C59B27] fill-none stroke-1.5">
          {/* Rotary Auger system setup */}
          <line x1="20" y1="90" x2="80" y2="90" strokeWidth="3" />
          <line x1="50" y1="90" x2="50" y2="10" strokeWidth="3" />
          {/* Rotary motor head */}
          <rect x="42" y="20" width="16" height="16" rx="2" fill="rgba(197, 155, 39, 0.1)" />
          {/* Spiral Auger flighting */}
          <path d="M 45 36 Q 50 38, 55 36 M 45 46 Q 50 48, 55 46 M 45 56 Q 50 58, 55 56 M 45 66 Q 50 68, 55 66 M 45 76 Q 50 78, 55 76" strokeWidth="2" />
          <circle cx="50" cy="28" r="2" fill="#10B981" />
        </svg>
      )
    },
    {
      id: "enerji",
      icon: <Layers className="w-6 h-6 text-[#C59B27]" />,
      titleTr: "Endüstriyel Sondaj & Su Sondajı",
      titleEn: "Industrial Drilling & Water Wells",
      descTr: "Derin zemin etütleri, ankraj, mikro kazık ve yüksek verimli endüstriyel su sondajı operasyonları.",
      descEn: "Deep soil geotechnical diagnostics, anchoring, micro-piling, and high-capacity industrial water well drilling operations.",
      href: "/hizmetler/enerji",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C59B27] fill-none stroke-1.5">
          {/* Mud circulation deep water drilling rig */}
          <line x1="20" y1="90" x2="80" y2="90" strokeWidth="3" />
          {/* A-frame derrick */}
          <polygon points="50,15 35,90 65,90" fill="rgba(197, 155, 39, 0.05)" />
          {/* Crown block and cable */}
          <line x1="50" y1="15" x2="50" y2="90" strokeWidth="2" />
          {/* Water table layers */}
          <path d="M 10 90 Q 50 85, 90 90" stroke="rgba(16, 185, 129, 0.3)" />
          <path d="M 10 70 Q 50 75, 90 70" stroke="rgba(197, 155, 39, 0.15)" />
          <circle cx="50" cy="72" r="3" fill="#10B981" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Background visual helpers */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-zinc-50 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/30 bg-[#C59B27]/5 text-xs text-[#C59B27] font-semibold mb-4 tracking-widest uppercase">
            {isTr ? "Operasyonel Güç" : "Operational Strength"}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4">
            {isTr ? "Biz Ne Yapıyoruz?" : "What We Excel At"}
          </h2>
          <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto font-semibold">
            {isTr 
              ? "Saha mühendisliğinde sınırları zorlayan yüksek torklu ağır zemin ve delgi operasyonlarımız."
              : "High-torque heavy excavation and drilling operations pushing boundaries in site engineering."}
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <ThreeDCard key={card.id}>
              <div className="h-full flex flex-col justify-between p-8 rounded-3xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all shadow-2xs group relative">
                <div>
                  {/* Top layout: Icon & visual schema */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-150 flex items-center justify-center shadow-3xs group-hover:scale-105 transition-all">
                      {card.icon}
                    </div>
                    <div className="opacity-85">{card.svg}</div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-zinc-950 mb-3 group-hover:text-[#C59B27] transition-colors leading-snug">
                    {isTr ? card.titleTr : card.titleEn}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed font-semibold mb-6">
                    {isTr ? card.descTr : card.descEn}
                  </p>
                </div>

                {/* Subpage CTA */}
                <div className="pt-4 border-t border-zinc-100">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B27] hover:text-zinc-950 transition-colors group/link"
                  >
                    <span>{isTr ? "Hizmet Detaylarını Gör" : "View Service Details"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  );
};
