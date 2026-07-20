"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { ThreeDCard } from "./ThreeDCard";
import { ArrowRight, Drill, Hammer, Layers } from "lucide-react";

export const B2BServices: React.FC = () => {
  const { t } = useTranslation();
  const isTr = t("nav.home") === "Ana Sayfa";

  const cards = [
    {
      id: "delgi",
      icon: <Hammer className="w-5 h-5 text-[#C59B27]" />,
      titleTr: "Ağır Hizmet Kaya Delgi & Çakım İşleri (Kompresörlü)",
      titleEn: "Heavy-Duty Rock Drilling & Piling (Compressor)",
      descTr: "Zorlu kaya formasyonlarında, yüksek hava basınçlı DTH çekiç sistemlerimizle hızlı ve milimetrik GES sahası delgi ve kazık çakım işleri.",
      descEn: "Fast and millimetric solar site drilling and pile driving works in tough rock formations using high-pressure DTH hammer systems.",
      href: "/hizmetler/delgi",
      image: "/satismakineleri/Paletli-Rock-Makina.jpg",
      tag: "DTH & ROCK DRILLING",
    },
    {
      id: "kiralama",
      icon: <Drill className="w-5 h-5 text-[#C59B27]" />,
      titleTr: "Havasız (Kompresörsüz) Rotari & Burgu Delgileri",
      titleEn: "Rotary & Auger Drilling (Compressorless)",
      descTr: "Kompresör kullanımının uygun olmadığı zeminlerde, yüksek torklu rotari sistemler ve özel burgularımız (Auger) ile çevre dostu, sessiz ve efektif delgi çözümleri.",
      descEn: "Eco-friendly, quiet, and effective drilling solutions using high-torque rotary systems and custom augers on sites where compressor usage is restricted.",
      href: "/hizmetler/kiralama",
      image: "/satismakineleri/kazıkçakma.jpeg",
      tag: "SOLAR PILING & AUGER",
    },
    {
      id: "enerji",
      icon: <Layers className="w-5 h-5 text-[#C59B27]" />,
      titleTr: "Endüstriyel Sondaj & Su Sondajı",
      titleEn: "Industrial Drilling & Water Wells",
      descTr: "Derin zemin etütleri, ankraj, mikro kazık ve yüksek verimli endüstriyel su sondajı operasyonları.",
      descEn: "Deep soil geotechnical diagnostics, anchoring, micro-piling, and high-capacity industrial water well drilling operations.",
      href: "/hizmetler/enerji",
      image: "/satismakineleri/sondaj-14.07.2023-19-09-01.jpg",
      tag: "DEEP WELL & FOUNDATION",
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
              <div className="h-full flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all shadow-2xs group relative overflow-hidden">
                {/* Real Photo Thumbnail */}
                <div className="relative h-48 w-full bg-zinc-100 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={isTr ? card.titleTr : card.titleEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono font-extrabold text-[#C59B27] uppercase tracking-wider bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-xs">
                      // {card.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs">
                      {card.icon}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
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
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  );
};
