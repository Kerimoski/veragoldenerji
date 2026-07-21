"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InteractiveMap } from "@/components/InteractiveMap";
import { useTranslation } from "@/context/LanguageContext";
import { ShieldCheck, Truck, Globe2, Sparkles } from "lucide-react";

export default function CoveragePage() {
  const { t, language } = useTranslation();
  const isTr = language === "tr";

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-zinc-950 text-white relative overflow-hidden">
        {/* Background Visual Elements */}
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#C59B27]/10 rounded-full filter blur-[140px] pointer-events-none" />

        {/* Intro */}
        <section className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// {isTr ? "Uluslararası Operasyon Ağı" : "International Fleet Operations"}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 font-sans">
            {t("nav.map")}
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-3xl mx-auto font-medium mb-12 leading-relaxed">
            {isTr
              ? "Vera Gold Enerji olarak, İskandinavya ve Birleşik Krallık dahil tüm Avrupa kıtasında aktif operasyonel hizmet sağlıyoruz."
              : "As Vera Gold Enerji, we provide active operational services across the entire European continent including Scandinavia and the United Kingdom."}
          </p>
        </section>

        {/* Interactive Map Component */}
        <InteractiveMap />

        {/* Quality/Lojistik info */}
        <section className="max-w-5xl mx-auto px-6 mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/90 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#C59B27] mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {isTr ? "Uluslararası Mobil Lojistik Ağı" : "International Mobile Logistics"}
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                {isTr
                  ? "Sondaj ve delgi filolarımızı, rüzgar/güneş santrali kurulum ekiplerimizi Avrupa ve Balkanlar genelindeki şantiyelerinize kendi lojistik ağımızla ulaştırıyoruz."
                  : "We deliver our drilling fleets and power plant installation crews to your sites across Europe and the Balkans via our own dedicated logistics network."}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/90 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {isTr ? "Yerel Standartlara Uyum" : "Compliance with Local Standards"}
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                {isTr
                  ? "Hizmet verdiğimiz tüm Balkan ve Avrupa ülkelerindeki yerel teknik şartnamelere, iş güvenliği direktiflerine ve çevre mevzuatlarına tam uyum sağlıyoruz."
                  : "We ensure full compliance with local technical specifications, work safety directives, and environmental regulations in all Balkan and European countries we serve."}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
