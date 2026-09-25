"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InteractiveMap } from "@/components/InteractiveMap";
import { useTranslation } from "@/context/LanguageContext";
import { ShieldCheck, Truck, Globe2, Sparkles } from "lucide-react";

export default function CoveragePage() {
  const { t, tx } = useTranslation();

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
            <span>// {tx({ tr: "Uluslararası Operasyon Ağı", en: "International Fleet Operations", de: "Internationale Flotteneinsätze", fr: "Opérations Internationales de la Flotte", it: "Operazioni Internazionali della Flotta", es: "Operaciones Internacionales de la Flota" })}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 font-sans">
            {t("nav.map")}
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-3xl mx-auto font-medium mb-12 leading-relaxed">
            {tx({ tr: "Vera Gold Enerji olarak, İskandinavya ve Birleşik Krallık dahil tüm Avrupa kıtasında aktif operasyonel hizmet sağlıyoruz.", en: "As Vera Gold Enerji, we provide active operational services across the entire European continent including Scandinavia and the United Kingdom.", de: "Als Vera Gold Enerji bieten wir aktive operative Dienstleistungen auf dem gesamten europäischen Kontinent einschließlich Skandinavien und dem Vereinigten Königreich.", fr: "En tant que Vera Gold Enerji, nous fournissons des services opérationnels actifs sur l'ensemble du continent européen, y compris la Scandinavie et le Royaume-Uni.", it: "Come Vera Gold Enerji, forniamo servizi operativi attivi in tutto il continente europeo, compresi la Scandinavia e il Regno Unito.", es: "Como Vera Gold Enerji, prestamos servicios operativos activos en todo el continente europeo, incluidos Escandinavia y el Reino Unido." })}
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
                {tx({ tr: "Uluslararası Mobil Lojistik Ağı", en: "International Mobile Logistics", de: "Internationale Mobile Logistik", fr: "Logistique Mobile Internationale", it: "Logistica Mobile Internazionale", es: "Logística Móvil Internacional" })}
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                {tx({ tr: "Sondaj ve delgi filolarımızı, rüzgar/güneş santrali kurulum ekiplerimizi Avrupa ve Balkanlar genelindeki şantiyelerinize kendi lojistik ağımızla ulaştırıyoruz.", en: "We deliver our drilling fleets and power plant installation crews to your sites across Europe and the Balkans via our own dedicated logistics network.", de: "Über unser eigenes Logistiknetz bringen wir unsere Bohrflotten und Kraftwerks-Montageteams zu Ihren Baustellen in ganz Europa und auf dem Balkan.", fr: "Grâce à notre propre réseau logistique, nous acheminons nos flottes de forage et nos équipes de montage de centrales vers vos chantiers en Europe et dans les Balkans.", it: "Attraverso la nostra rete logistica dedicata portiamo le flotte di perforazione e le squadre di montaggio delle centrali nei vostri cantieri in tutta Europa e nei Balcani.", es: "A través de nuestra propia red logística llevamos nuestras flotas de perforación y equipos de montaje de centrales a sus obras en toda Europa y los Balcanes." })}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/90 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {tx({ tr: "Yerel Standartlara Uyum", en: "Compliance with Local Standards", de: "Einhaltung Lokaler Normen", fr: "Conformité aux Normes Locales", it: "Conformità agli Standard Locali", es: "Cumplimiento de Normas Locales" })}
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                {tx({ tr: "Hizmet verdiğimiz tüm Balkan ve Avrupa ülkelerindeki yerel teknik şartnamelere, iş güvenliği direktiflerine ve çevre mevzuatlarına tam uyum sağlıyoruz.", en: "We ensure full compliance with local technical specifications, work safety directives, and environmental regulations in all Balkan and European countries we serve.", de: "In allen Balkan- und europäischen Ländern, in denen wir tätig sind, halten wir lokale technische Spezifikationen, Arbeitsschutzrichtlinien und Umweltvorschriften vollständig ein.", fr: "Dans tous les pays des Balkans et d'Europe où nous intervenons, nous respectons pleinement les spécifications techniques locales, les directives de sécurité et les réglementations environnementales.", it: "In tutti i paesi balcanici ed europei in cui operiamo garantiamo il pieno rispetto delle specifiche tecniche locali, delle direttive sulla sicurezza e delle normative ambientali.", es: "En todos los países de los Balcanes y de Europa en los que operamos garantizamos el pleno cumplimiento de las especificaciones técnicas locales, las directivas de seguridad y la normativa medioambiental." })}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
