"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InteractiveMap } from "@/components/InteractiveMap";
import { useTranslation } from "@/context/LanguageContext";
import { ShieldCheck, Truck, Globe2 } from "lucide-react";

export default function CoveragePage() {
  const { t } = useTranslation();

  const isTr = t("nav.home") === "Ana Sayfa";

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24">
        {/* Intro */}
        <section className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mb-4">
            {t("nav.map")}
          </h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-3xl mx-auto font-medium mb-12">
            {isTr
              ? "Vera Gold Enerji olarak, Birleşik Krallık ve İskandinavya hariç tüm Avrupa ve Balkan ülkelerinde aktif operasyonel hizmet sağlıyoruz."
              : "As Vera Gold Enerji, we provide active operational services in all European and Balkan countries except the UK and Scandinavia."}
          </p>
        </section>

        {/* Interactive Map Component */}
        <InteractiveMap />

        {/* Quality/Lojistik info */}
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-zinc-200 bg-white shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-150 flex items-center justify-center text-[#C59B27] mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">
                {isTr ? "Uluslararası Mobil Lojistik Ağı" : "International Mobile Logistics"}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-semibold">
                {isTr
                  ? "Sondaj ve delgi filolarımızı, rüzgar/güneş santrali kurulum ekiplerimizi Avrupa ve Balkanlar genelindeki şantiyelerinize kendi lojistik ağımızla ulaştırıyoruz."
                  : "We deliver our drilling fleets and power plant installation crews to your sites across Europe and the Balkans via our own dedicated logistics network."}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-zinc-200 bg-white shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-150 flex items-center justify-center text-[#10B981] mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">
                {isTr ? "Yerel Standartlara Uyum" : "Compliance with Local Standards"}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-semibold">
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
