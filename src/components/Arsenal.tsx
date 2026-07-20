"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { Shield, Settings, Cpu } from "lucide-react";

export const Arsenal: React.FC = () => {
  const { t } = useTranslation();
  const isTr = t("nav.home") === "Ana Sayfa";

  const items = [
    {
      icon: <Settings className="w-5 h-5 text-[#C59B27]" />,
      titleTr: "DTH Çekiçler (Aşağı Delgi Çekiçleri)",
      titleEn: "DTH Hammers (Down-the-Hole)",
      descTr: "Yüksek darbe gücü, minimum aşınma. Derin ve sert kaya formasyonlarında yüksek penetrasyon oranı sunan özel alaşım çelik yapısı.",
      descEn: "High impact power, minimum wear. Special alloy steel structure providing high penetration rate in deep and hard rock formations.",
      specTr: "Çaplar: 3\" - 12\" | Mission, QL, DHD Uyumluluğu",
      specEn: "Diameters: 3\" - 12\" | Mission, QL, DHD Compatibility",
      image: "/veragaleri/Parca-6705-scaled.jpg",
      tag: "HIGH IMPACT DTH",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#C59B27]" />,
      titleTr: "Kaya Matkapları & Bit Çeşitleri",
      titleEn: "Rock Drill Bits & Accessories",
      descTr: "En sert granit ve bazalt zeminlere meydan okuyan, tungsten karbür uçlu profesyonel matkaplar. Yüksek aşınma direnci.",
      descEn: "Professional tungsten carbide bits defying the hardest granite and basalt terrains. Maximum abrasion resistance.",
      specTr: "Uç Tipi: Balistik, Küresel | Karbür Kalitesi: A++",
      specEn: "Bit Type: Ballistic, Spherical | Carbide Grade: A++",
      image: "/satismakineleri/Paletli-Rock-Makina.jpg",
      tag: "TUNGSTEN CARBIDE",
    },
    {
      icon: <Shield className="w-5 h-5 text-[#C59B27]" />,
      titleTr: "Auger (Burgu) ve Delgi Ekipmanları",
      titleEn: "Auger & Boring Tools",
      descTr: "Farklı çap ve boylarda, her türlü zemin yapısına uygun ağır hizmet burguları. Aşınma plakalı ve sert dolgulu helezon yapısı.",
      descEn: "Heavy-duty augers suited for all soil formations in various diameters and sizes. Hard-faced flighting with wear plates.",
      specTr: "Çaplar: 300mm - 2000mm | Bağlantı: Altıgen, Kare",
      specEn: "Diameters: 300mm - 2000mm | Joint: Hexagonal, Square",
      image: "/satismakineleri/sondajmakinesi.jpeg",
      tag: "HEAVY DUTY AUGER",
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
              className="group relative rounded-3xl bg-white border border-zinc-200 hover:border-[#C59B27]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full bg-zinc-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={isTr ? item.titleTr : item.titleEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono font-extrabold text-[#C59B27] uppercase tracking-wider bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-xs">
                    // {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Info */}
                  <h3 className="text-lg font-bold text-zinc-950 mb-3 group-hover:text-[#C59B27] transition-colors">
                    {isTr ? item.titleTr : item.titleEn}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed font-semibold mb-6">
                    {isTr ? item.descTr : item.descEn}
                  </p>
                </div>

                {/* Technical Spec Tag */}
                <div className="pt-4 border-t border-zinc-150 text-[10px] text-[#C59B27] font-extrabold tracking-wider uppercase">
                  {isTr ? item.specTr : item.specEn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
