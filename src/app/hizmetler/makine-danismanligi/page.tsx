"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Target, Zap, Shield, ArrowUpRight } from "lucide-react";

export default function MakineDanismanligiPage() {
  const { t: translate } = useTranslation();

  const isTr = translate("nav.home") === "Ana Sayfa";
  const isDe = translate("nav.home") === "Startseite";
  const isFr = translate("nav.home") === "Accueil";

  const contentTr = {
    title: "Makine Teknik Danışmanlığı",
    badge: "B2B Teknik Mühendislik",
    desc: "Ağır hizmet sondaj ve delgi makinelerinizin seçimi, operasyonel optimizasyonu ve teknik durum analizlerinde profesyonel mühendislik destekleri sunuyoruz.",
    longDesc: "Vera Gold Enerji olarak, büyük ölçekli altyapı ve madencilik projelerinde doğru makine parkurunun oluşturulmasının maliyetleri ne denli etkilediğini çok iyi biliyoruz. B2B partnerlerimize makine satın alma süreçlerinde, güç/tork analizlerinde, şantiye zemin yapısına en uygun makine eşleştirmelerinde ve motor-hidrolik diagnostik kontrollerinde bağımsız uzmanlık sağlıyoruz.",
    features: [
      { title: "Güç & Tork Analizleri", desc: "Zemin formasyonuna uygun motor gücü ve hidrolik tork kapasite eşleştirmeleri." },
      { title: "Diagnostik & Hidrolik Kontrol", desc: "Mevcut makinelerinizin hidrolik basınç ve valf performans testlerinin raporlanması." },
      { title: "Yakıt Verimliliği Planlaması", desc: "Operasyon sahasında yakıt tüketimini minimuma indiren makine çalışma devir optimizasyonları." },
      { title: "Mekanik Durum Raporlama", desc: "İkinci el makine alım ve kiralama süreçlerinde bağımsız teknik ekspertiz." }
    ],
    stats: [
      { val: "+120", label: "Makine Ekspertizi" },
      { val: "24 Saat", label: "Acil Teknik Destek" },
      { val: "%25", label: "Maliyet Tasarrufu" }
    ],
    cta: "Teknik Destek İste"
  };

  const contentEn = {
    title: "Machinery Technical Consulting",
    badge: "B2B Technical Engineering",
    desc: "We offer professional engineering support in picking heavy-duty drilling machinery, operational optimization, and technical condition diagnostics.",
    longDesc: "At Vera Gold Enerji, we understand how critical selecting the right machinery fleet is to controlling costs in large-scale infrastructure and mining projects. We provide B2B partners with independent expertise in machinery acquisition, power/torque matching to terrain geology, and detailed diesel-hydraulic diagnostic reports.",
    features: [
      { title: "Power & Torque Analytics", desc: "Matching engine power and hydraulic torque capacities to specific soil and rock formations." },
      { title: "Diagnostics & Hydraulic Checks", desc: "Testing and reporting hydraulic pressures, valve states, and actuator performance." },
      { title: "Fuel Efficiency Optimization", desc: "Adjusting operation cycles and rpm to reduce site fuel consumption." },
      { title: "Independent Audits", desc: "Expert assessment and mechanical evaluations for pre-owned equipment acquisitions." }
    ],
    stats: [
      { val: "+120", label: "Machinery Audits" },
      { val: "24 Hours", label: "Emergency Support" },
      { val: "25%", label: "Average Cost Saved" }
    ],
    cta: "Request Technical Support"
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
                href="/iletisim?service=machinery"
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
