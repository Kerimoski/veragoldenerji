"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { B2BServices } from "@/components/B2BServices";
import { useTranslation } from "@/context/LanguageContext";
import { Building2, Briefcase, Cpu, ArrowUpRight, Sparkles } from "lucide-react";

export default function ServicesPage() {
  const { t, language } = useTranslation();
  const isTr = language === "tr";

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#C59B27]/10 rounded-full filter blur-[140px] pointer-events-none" />

        {/* Intro Section */}
        <section className="max-w-7xl mx-auto px-6 text-center mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// {isTr ? "Endüstriyel Saha Çözümleri" : "Industrial Engineering Solutions"}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 font-sans">
            {t("nav.services")}
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            {t("services.subtitle")}
          </p>
        </section>

        {/* Services 3D Infinite Marquee Grid */}
        <B2BServices />

        {/* Technical Consulting & Support Services */}
        <section className="max-w-7xl mx-auto px-6 py-16 relative z-10 border-t border-zinc-800">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-3">
              {t("consulting.title")}
            </h3>
            <p className="text-zinc-400 text-sm font-medium max-w-xl mx-auto">
              {t("consulting.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { key: "machineryConsulting", svc: "machinery", path: "/hizmetler/makine-danismanligi", image: "/veragaleri/Makine-6632-scaled.jpg", descKey: "consulting.machineryDesc" },
              { key: "equipmentConsulting", svc: "equipment", path: "/hizmetler/ekipman-danismanligi", image: "/veragaleri/Filtre-6579-scaled.jpg", descKey: "consulting.equipmentDesc" },
              { key: "investmentConsulting", svc: "investment", path: "/hizmetler/yatirim-danismanligi", image: "/veragaleri/Makine-6621-scaled.jpg", descKey: "consulting.investmentDesc" },
              { key: "projectConsulting", svc: "project", path: "/hizmetler/proje-danismanligi", image: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.27.56.jpeg", descKey: "consulting.projectDesc" },
              { key: "spareParts", svc: "spareparts", path: "/hizmetler/yedek-parca-servis", image: "/veragaleri/Filtre-6645-scaled.jpg", descKey: "consulting.sparePartsDesc" }
            ].map((item) => (
              <div 
                key={item.key} 
                className="rounded-3xl border border-zinc-800 bg-zinc-900/90 hover:border-[#C59B27]/50 hover:bg-zinc-900 transition-all flex flex-col justify-between shadow-xl group overflow-hidden"
              >
                {/* Photo Thumbnail */}
                <div className="relative h-40 w-full bg-zinc-950 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={t(`services.${item.key}`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2 group-hover:text-[#C59B27] transition-colors leading-snug">
                      {t(`services.${item.key}`)}
                    </h4>
                    <p className="text-zinc-400 text-xs leading-relaxed font-normal mb-4">
                      {t(item.descKey)}
                    </p>
                  </div>

                  <Link 
                    href={item.path}
                    className="inline-flex items-center justify-between w-full pt-3 border-t border-zinc-800 text-[11px] font-mono font-bold text-zinc-300 group-hover:text-white transition-colors"
                  >
                    <span>{isTr ? "Detaylar" : "Details"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
