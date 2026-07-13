"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Target, Zap, Shield, ArrowUpRight } from "lucide-react";

export default function YatirimDanismanligiPage() {
  const { t: translate } = useTranslation();

  const isTr = translate("nav.home") === "Ana Sayfa";

  const contentTr = {
    title: "Yatırım Danışmanlığı",
    badge: "B2B Finans & Projeksiyon",
    desc: "Ağır iş makineleri filosu yatırımlarında, sondaj projelerinde ve yenilenebilir enerji santralleri kurulum bütçelerinde bağımsız fizibilite ve yatırım geri dönüş (ROI) raporlamaları hazırlıyoruz.",
    longDesc: "Vera Gold Enerji olarak, iş ortaklarımızın yapacağı milyon euro seviyesindeki makine parkuru alımlarında ve GES/RES yenilenebilir santrali projelerinde finansal riskleri azaltıyoruz. B2B sektörel birikimimiz sayesinde satın alma bütçelerini, operasyonel amortisman sürelerini, lojistik maliyet paylarını ve yatırım geri kazanım grafiklerini profesyonel raporlarla ortaya koyuyoruz.",
    features: [
      { title: "Fizibilite Çalışmaları", desc: "Maden, delgi veya enerji sahalarının finansal fizibilite ve risk analiz raporları." },
      { title: "Geri Dönüş (ROI) Planlama", desc: "Alınan iş makinelerinin amortisman sürelerinin ve çalışma saat başı maliyetlerinin hesaplanması." },
      { title: "CAPEX & OPEX Analizleri", desc: "Başlangıç yatırım maliyetleri ile periyodik operasyonel giderlerin optimal dengelenmesi." },
      { title: "Piyasa Değer Raporlamaları", desc: "Geniş makine parkuru alımlarında uluslararası piyasa fiyat araştırmaları ve satın alma desteği." }
    ],
    stats: [
      { val: "%100", label: "Finansal Uyumluluk Oranı" },
      { val: "10M€+", label: "Yönetilen Yatırım Bütçesi" },
      { val: "15 Yıl", label: "Geri Dönüş Projeksiyon Süresi" }
    ],
    cta: "Yatırım Danışmanlığı İste"
  };

  const contentEn = {
    title: "Investment Consulting",
    badge: "B2B Finance & Projection",
    desc: "We formulate independent feasibility and return on investment (ROI) reports for heavy machinery fleets, drilling contracts, and renewable power plant budgets.",
    longDesc: "At Vera Gold Enerji, we mitigate financial risks associated with million-euro heavy machinery acquisitions and renewable energy setups (solar/wind). Leveraging our deep B2B sector expertise, we provide capital budget modeling, machine lifecycle amortization schedules, logistical cost evaluations, and detailed ROI charts.",
    features: [
      { title: "Feasibility Studies", desc: "Drafting detailed engineering feasibility and economic viability studies for mining and energy projects." },
      { title: "ROI Planning & Amortization", desc: "Calculating capital depreciation rates and operating cost per hour metrics for core fleets." },
      { title: "CAPEX & OPEX Analysis", desc: "Optimizing initial capital expenses versus recurring operational maintenance expenditures." },
      { title: "Market Valuation Reports", desc: "Conducting global market research to evaluate pricing strategies for fleet purchasing." }
    ],
    stats: [
      { val: "100%", label: "Financial Compliance" },
      { val: "10M€+", label: "Managed Investment Budgets" },
      { val: "15 Years", label: "ROI Projection Models" }
    ],
    cta: "Request Investment Consulting"
  };

  const current = isTr ? contentTr : contentEn;

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden bg-white text-zinc-900">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#C59B27]/3 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Back button */}
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-950 transition-colors mb-10 group font-bold"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>{isTr ? "Hizmetlere Dön" : "Back to Services"}</span>
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/30 bg-[#C59B27]/5 text-xs text-[#C59B27] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{current.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mb-8">
            {current.title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left side details */}
            <div className="lg:col-span-8">
              <p className="text-lg text-zinc-700 font-semibold mb-6 leading-relaxed">
                {current.desc}
              </p>
              <div className="prose prose-zinc max-w-none text-zinc-500 font-medium text-sm leading-relaxed mb-10">
                <p>{current.longDesc}</p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {current.features.map((feat) => (
                  <div key={feat.title} className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50/20 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                      <Check className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-zinc-950 mb-1">{feat.title}</h3>
                    <p className="text-zinc-400 text-[11px] font-semibold leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side card */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Stats Card */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 shadow-2xs">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  {isTr ? "Saha Verilerimiz" : "Field Metrics"}
                </h3>
                <div className="space-y-6">
                  {current.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-extrabold text-zinc-950">{s.val}</div>
                      <div className="text-xs text-zinc-500 font-bold">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <Link
                href="/iletisim?service=investment"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-zinc-950 text-white font-extrabold text-sm hover:bg-zinc-900 transition-all shadow-md group"
              >
                <span>{current.cta}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
