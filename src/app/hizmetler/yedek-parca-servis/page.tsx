"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Target, Zap, Shield, ArrowUpRight } from "lucide-react";

export default function YedekParcaServisPage() {
  const { t: translate } = useTranslation();

  const isTr = translate("nav.home") === "Ana Sayfa";

  const contentTr = {
    title: "Yedek Parça & Servis",
    badge: "B2B Teknik Servis & Orijinal Parça",
    desc: "Ağır hizmet kaya delgi ve kompresör grupları için orijinal yedek parça temini ve 7/24 saha servis mühendisliği sunuyoruz.",
    longDesc: "Şantiyenizdeki duraklamaların maliyetini en aza indirmek için geniş yedek parça stoğumuz ve mobil servis ekiplerimizle yanınızdayız. Vera Gold Enerji olarak, iş ortaklarımızın kompresör, delici kafa (rotary head), hidrolik pompalar, sızdırmazlık elemanları ve valf blokları gibi hayati önem taşıyan yedek parçalarını en kısa sürede temin ediyor, yerinde montaj ve bakım servisimizle makinelerinizin kesintisiz çalışmasını garanti ediyoruz.",
    features: [
      { title: "Orijinal Yedek Parça Stoğu", desc: "Zega, Liugong, FYD ve diğer dünya markalarına ait kompresör ve delici yedek parçaları." },
      { title: "7/24 Mobil Saha Servisi", desc: "Arıza durumunda şantiyenize en hızlı şekilde ulaşan uzman servis mühendisleri." },
      { title: "Kompresör & Hidrolik Revizyon", desc: "Yıpranmış hava kompresörlerinin ve hidrolik motorların fabrika ayarlarına sıfırlanması." },
      { title: "Periyodik Bakım Anlaşmaları", desc: "Makine parkurunuzun ömrünü uzatan planlı bakım anlaşmaları ve düzenli Check-Up desteği." }
    ],
    stats: [
      { val: "2 Saat", label: "Ortalama Müdahale Süresi" },
      { val: "10,000+", label: "Aktif Parça Stoğu" },
      { val: "%99.4", label: "Müşteri Memnuniyet Oranı" }
    ],
    cta: "Yedek Parça & Servis İste"
  };

  const contentEn = {
    title: "Spare Parts & Service",
    badge: "B2B Technical Service & OEM Parts",
    desc: "We deliver rapid original spare parts logistics and 24/7 technical field maintenance for heavy-duty drilling units and compressor fleets.",
    longDesc: "To minimize costly operational downtime on your jobsite, we provide an extensive OEM parts inventory and mobile mechanic service units. At Vera Gold Enerji, we source, ship, and install critical components like rotary heads, hydraulic pumps, seals, and control valves. Our skilled mechanics travel directly to your site to restore equipment to factory specifications.",
    features: [
      { title: "OEM Parts Inventory", desc: "Stocking original components for Zega, Liugong, FYD, and other global brands." },
      { title: "24/7 Mobile Field Dispatch", desc: "On-site dispatch of experienced diagnostic mechanics directly to your operating site." },
      { title: "Compressor & Pump Overhaul", desc: "Complete reconstruction and bench testing of air ends, piston pumps, and motors." },
      { title: "Scheduled Maintenance Contracts", desc: "Preventative maintenance programs and checkups designed to prolong machine health." }
    ],
    stats: [
      { val: "2 Hours", label: "Average Site Dispatch" },
      { val: "10,000+", label: "In-Stock Components" },
      { val: "99.4%", label: "Satisfaction Rating" }
    ],
    cta: "Request Parts or Service"
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
                href="/iletisim?service=spareparts"
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
