"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Shield, Settings, Cpu } from "lucide-react";

export const Arsenal: React.FC = () => {
  const { t } = useTranslation();
  const isTr = t("nav.home") === "Ana Sayfa";

  const items = [
    {
      icon: <Settings className="w-8 h-8 text-[#C59B27]" />,
      titleTr: "DTH Çekiçler (Aşağı Delgi Çekiçleri)",
      titleEn: "DTH Hammers (Down-the-Hole)",
      descTr: "Yüksek darbe gücü, minimum aşınma. Derin ve sert kaya formasyonlarında yüksek penetrasyon oranı sunan özel alaşım çelik yapısı.",
      descEn: "High impact power, minimum wear. Special alloy steel structure providing high penetration rate in deep and hard rock formations.",
      specTr: "Çaplar: 3\" - 12\" | Mission, QL, DHD Uyumluluğu",
      specEn: "Diameters: 3\" - 12\" | Mission, QL, DHD Compatibility",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-[#C59B27] fill-none stroke-1.5 opacity-80 group-hover:scale-105 transition-transform duration-300">
          {/* Cylinder barrel representing a DTH hammer */}
          <rect x="35" y="10" width="30" height="70" rx="3" />
          <line x1="35" y1="25" x2="65" y2="25" />
          <line x1="35" y1="65" x2="65" y2="65" />
          {/* Threads/Splines */}
          <path d="M40 80 L40 90 M45 80 L45 90 M50 80 L50 90 M55 80 L55 90 M60 80 L60 90" />
          <circle cx="50" cy="45" r="4" className="animate-pulse" />
        </svg>
      )
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#C59B27]" />,
      titleTr: "Kaya Matkapları & Bit Çeşitleri",
      titleEn: "Rock Drill Bits & Accessories",
      descTr: "En sert granit ve bazalt zeminlere meydan okuyan, tungsten karbür uçlu profesyonel matkaplar. Yüksek aşınma direnci.",
      descEn: "Professional tungsten carbide bits defying the hardest granite and basalt terrains. Maximum abrasion resistance.",
      specTr: "Uç Tipi: Balistik, Küresel | Karbür Kalitesi: A++",
      specEn: "Bit Type: Ballistic, Spherical | Carbide Grade: A++",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-[#C59B27] fill-none stroke-1.5 opacity-80 group-hover:scale-105 transition-transform duration-300">
          {/* Drilling bit head */}
          <path d="M25 60 L35 30 L65 30 L75 60 Z" />
          <rect x="35" y="60" width="30" height="25" />
          {/* Tungsten carbide buttons */}
          <circle cx="35" cy="28" r="3" fill="#C59B27" />
          <circle cx="50" cy="25" r="3" fill="#C59B27" />
          <circle cx="65" cy="28" r="3" fill="#C59B27" />
          <circle cx="30" cy="45" r="2.5" fill="#C59B27" />
          <circle cx="70" cy="45" r="2.5" fill="#C59B27" />
          <line x1="42" y1="40" x2="42" y2="75" strokeDasharray="3 3" />
          <line x1="58" y1="40" x2="58" y2="75" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      icon: <Shield className="w-8 h-8 text-[#C59B27]" />,
      titleTr: "Auger (Burgu) ve Delgi Ekipmanları",
      titleEn: "Auger & Boring Tools",
      descTr: "Farklı çap ve boylarda, her türlü zemin yapısına uygun ağır hizmet burguları. Aşınma plakalı ve sert dolgulu helezon yapısı.",
      descEn: "Heavy-duty augers suited for all soil formations in various diameters and sizes. Hard-faced flighting with wear plates.",
      specTr: "Çaplar: 300mm - 2000mm | Bağlantı: Altıgen, Kare",
      specEn: "Diameters: 300mm - 2000mm | Joint: Hexagonal, Square",
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-[#C59B27] fill-none stroke-1.5 opacity-80 group-hover:scale-105 transition-transform duration-300">
          {/* Helical flighting of an auger */}
          <line x1="50" y1="10" x2="50" y2="90" strokeWidth="3" />
          {/* Spiral flights */}
          <path d="M 30 25 Q 50 30, 70 25" />
          <path d="M 30 45 Q 50 50, 70 45" />
          <path d="M 30 65 Q 50 70, 70 65" />
          {/* Cutting teeth at bottom */}
          <path d="M 40 85 L 35 93 M 60 85 L 65 93" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white text-zinc-900 relative overflow-hidden border-t border-zinc-200">
      {/* Radial grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,9,11,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,9,11,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C59B27]/2 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/30 bg-[#C59B27]/5 text-xs text-[#C59B27] font-semibold mb-4 tracking-widest uppercase">
            {isTr ? "Ekipman Vitrini" : "Equipment Showcase"}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4">
            {isTr ? "Zırhlı Cephanelik" : "The Armored Arsenal"}
          </h2>
          <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto font-semibold leading-relaxed">
            {isTr 
              ? "Operasyonlarımızda kullandığımız ve B2B tedarik ettiğimiz stüdyo kalitesindeki ağır hizmet ekipman parkurumuz."
              : "Our premium heavy-duty operational equipment park and B2B supplied consumables."}
          </p>
        </div>

        {/* Arsenal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="group relative p-8 rounded-3xl bg-zinc-50/30 border border-zinc-200 hover:border-[#C59B27]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#C59B27]/5 to-transparent rounded-bl-full pointer-events-none" />
              
              <div>
                {/* SVG Blueprint Wireframe */}
                <div className="h-32 flex items-center justify-center mb-6 bg-zinc-50/50 rounded-2xl border border-zinc-150">
                  {item.svg}
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-zinc-950 mb-3 group-hover:text-[#C59B27] transition-colors">
                  {isTr ? item.titleTr : item.titleEn}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed font-semibold mb-6">
                  {isTr ? item.descTr : item.descEn}
                </p>
              </div>

              {/* Technical Spec Tag */}
              <div className="pt-4 border-t border-zinc-250 text-[10px] text-[#C59B27] font-extrabold tracking-wider uppercase">
                {isTr ? item.specTr : item.specEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
