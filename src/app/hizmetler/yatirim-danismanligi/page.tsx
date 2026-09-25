"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Sparkles, Zap, Shield } from "lucide-react";

export default function YatirimDanismanligiPage() {
  const { t: translate, tx } = useTranslation();

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#C59B27]/10 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white mb-8 transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 text-[#C59B27]" />
            <span>{tx({ tr: "Hizmetlere Dön", en: "Back to Services", de: "Zurück zu Dienstleistungen", fr: "Retour aux services", it: "Torna ai Servizi", es: "Volver a Servicios" })}</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// {tx({ tr: "B2B Ekipman & Makine Yatırımları", en: "B2B Fleet Investment Advisory", de: "B2B-Flotteninvestitionsberatung", fr: "Conseil en Investissement de Flotte B2B", it: "Consulenza sugli Investimenti in Flotta B2B", es: "Asesoría de Inversión en Flota B2B" })}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-sans">
            {tx({ tr: "Makine Parkı Yatırım Danışmanlığı", en: "Fleet Investment & Asset Advisory", de: "Flotteninvestitions- & Anlagenberatung", fr: "Conseil en Investissement de Flotte & Actifs", it: "Consulenza su Investimenti in Flotta & Asset", es: "Asesoría de Inversión en Flota & Activos" })}
          </h1>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-4xl font-medium">
            {tx({ tr: "Yüksek bütçeli kaya delgi ve sondaj makinesi alımlarında Amortisman (ROI), ikinci el değerleme ve operasyonel maliyet raporları sunuyoruz.", en: "We provide ROI depreciation, secondary market valuation, and operational CAPEX/OPEX reports for high-budget drilling rig acquisitions.", de: "Für kostenintensive Bohranlagen-Anschaffungen erstellen wir ROI- und Abschreibungsanalysen, Gebrauchtmarktbewertungen sowie CAPEX/OPEX-Berichte.", fr: "Pour les acquisitions coûteuses de foreuses, nous fournissons des analyses de ROI et d'amortissement, des évaluations sur le marché de l'occasion et des rapports CAPEX/OPEX.", it: "Per acquisti di perforatrici ad alto budget forniamo analisi di ROI e ammortamento, valutazioni sul mercato dell'usato e report CAPEX/OPEX.", es: "Para adquisiciones de perforadoras de alto presupuesto ofrecemos análisis de ROI y amortización, valoraciones en el mercado de segunda mano e informes CAPEX/OPEX." })}
          </p>

          <div className="relative h-72 md:h-96 w-full rounded-3xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl">
            <Image
              src="/veragaleri/Makine-6621-scaled.jpg"
              alt="Yatırım Danışmanlığı"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/90 border border-zinc-800 text-center relative overflow-hidden shadow-2xl">
            <Shield className="w-12 h-12 text-[#C59B27] mx-auto mb-6" />
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
              {tx({ tr: "Yatırım Danışmanlığı İletişimi", en: "Investment Advisory Inquiry", de: "Anfrage zur Investitionsberatung", fr: "Demande de Conseil en Investissement", it: "Richiesta di Consulenza sugli Investimenti", es: "Solicitud de Asesoría de Inversión" })}
            </h3>
            <Link
              href="/iletisim?service=investment"
              className="inline-flex items-center gap-3 py-4 px-8 rounded-none bg-[#C59B27] hover:bg-[#b08920] text-white font-mono font-bold text-xs uppercase tracking-widest shadow-lg transition-colors cursor-pointer"
            >
              <span>{tx({ tr: "İletişime Geç", en: "Get In Touch", de: "Kontakt aufnehmen", fr: "Nous Contacter", it: "Contattaci", es: "Contáctenos" })}</span>
              <Zap className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
