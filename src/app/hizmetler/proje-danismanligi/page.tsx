"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Target, Zap, Shield, ArrowUpRight } from "lucide-react";

export default function ProjeDanismanligiPage() {
  const { t: translate } = useTranslation();

  const isTr = translate("nav.home") === "Ana Sayfa";

  const contentTr = {
    title: "Proje Danışmanlığı",
    badge: "B2B Proje Yönetimi & Planlama",
    desc: "Maden çıkarma sahaları, büyük altyapı sondajları ve rüzgar/güneş santrallerinin kurulum aşamalarında mühendislik, iş zamanlama ve risk yönetimi danışmanlığı veriyoruz.",
    longDesc: "Büyük ölçekli şantiyelerde zaman yönetimi ve mühendislik planlamasındaki en ufak bir hata, ciddi gecikmelere sebep olabilir. Vera Gold Enerji olarak, B2B partnerlerimize projelerinin başlangıç aşamasından teslimine kadar geçen tüm süreçlerde teknik ve idari danışmanlık sağlıyoruz. İş akış şemalarının oluşturulması, risk yönetim modelleri, mühendislik hesaplamaları ve mevzuat izin süreçlerinin takibini üstleniyoruz.",
    features: [
      { title: "Zaman ve Kaynak Planlama", desc: "Saha operasyonlarının gecikmesiz ilerlemesi için kritik yol (CPM) metodolojisi uygulaması." },
      { title: "Risk Yönetim Modelleri", desc: "Jeolojik, teknik ve çevresel risklerin önceden tespit edilerek aksiyon planı hazırlanması." },
      { title: "Mühendislik Projelendirmesi", desc: "Zemin, delgi ve enerji kurulum sahaları için teknik çizim ve statik hesaplama destekleri." },
      { title: "Mevzuat ve İzin Takibi", desc: "Avrupa ve Balkanlar'daki yerel çevre, imar ve çalışma izin mevzuatlarının takibi ve uyum yönetimi." }
    ],
    stats: [
      { val: "+50", label: "Mega Proje Desteği" },
      { val: "Sıfır", label: "Gecikme ve Hata Kaydı" },
      { val: "A++ Class", label: "Mühendislik Standartı" }
    ],
    cta: "Proje Danışmanlığı İste"
  };

  const contentEn = {
    title: "Project Consulting",
    badge: "B2B Project Management",
    desc: "We deliver professional consulting in engineering coordination, operational scheduling, and risk mitigation for mines, heavy excavation, and solar/wind power plant setups.",
    longDesc: "In large-scale construction and drilling, minor planning lapses can lead to major contractual delays. At Vera Gold Enerji, we provide B2B partners with engineering and administrative oversight from initial layout blueprints to final project commissioning. We formulate critical path diagrams, geological risk models, and direct local compliance procedures.",
    features: [
      { title: "Time & Resource Planning", desc: "Applying Critical Path Method (CPM) algorithms to maintain tight operational timeline goals." },
      { title: "Risk Mitigation Models", desc: "Identifying structural, geological, and climate hazards to draft secondary contingency steps." },
      { title: "Engineering Blueprinting", desc: "Preparing structural calculations, layout drafting, and load capacity models for sites." },
      { title: "Regulatory Compliance", desc: "Handling local zoning, environmental clearance, and grid connectivity permits in Europe/Balkans." }
    ],
    stats: [
      { val: "+50", label: "Mega Projects Supported" },
      { val: "Zero", label: "Delay or Penalty Records" },
      { val: "A++ Grade", label: "Engineering Standard" }
    ],
    cta: "Request Project Consulting"
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
                href="/iletisim?service=project"
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
