"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Target, Zap, Shield, ArrowUpRight } from "lucide-react";

export default function EkipmanDanismanligiPage() {
  const { t: translate } = useTranslation();

  const isTr = translate("nav.home") === "Ana Sayfa";

  const contentTr = {
    title: "Delme Ekipmanları Danışmanlığı",
    badge: "B2B Ekipman Optimizasyonu",
    desc: "Kaya sertliği ve formasyon yapılarına göre en uygun matkap ucu, delici çekiç (Hammer & Bit) ve delgi sarf malzemelerinin seçiminde mühendislik raporları hazırlıyoruz.",
    longDesc: "Vera Gold Enerji olarak, B2B maden ve zemin etüt firmalarına operasyonel giderleri kısmak adına delme sarf malzemeleri seçimlerinde danışmanlık veriyoruz. Yanlış bit yüzeyi veya çekiç modeli seçimi, delici ömrünü 4 kata kadar azaltabilir. Kayadan alınan karot numuneleri ve jeolojik zemin etütlerine göre en yüksek verim veren QL, Mission ve DHD çekiç-matkap ucu kombinasyonlarını sunuyoruz.",
    features: [
      { title: "Kaya Sertlik Analizleri", desc: "Zeminin aşındırıcılık ve Mohs sertlik derecelerine göre delici malzeme tespiti." },
      { title: "Uç ve Çekiç Eşleştirme", desc: "DHD, QL ve Mission serisi çekiçlerin matkap çaplarıyla verimli konfigürasyonu." },
      { title: "Aşınma & Ömür Testleri", desc: "Operasyondaki delici sarf malzemelerinin yıpranma oranlarının takip edilmesi." },
      { title: "Sarf Malzeme Yönetimi", desc: "Şantiyenizde yedek çekiç ve delici uç stok planlamaları ve tedarik zinciri desteği." }
    ],
    stats: [
      { val: "+300", label: "Ekipman Performans Analizi" },
      { val: "15+ Marka", label: "Uyum ve Entegrasyon" },
      { val: "4 Kat", label: "Daha Uzun Ekipman Ömrü" }
    ],
    cta: "Ekipman Danışmanlığı İste"
  };

  const contentEn = {
    title: "Drilling Equipment Consulting",
    badge: "B2B Equipment Optimization",
    desc: "We prepare engineering reports for selecting the most appropriate drill bits, dth hammers, and consumables depending on rock hardness and soil profiles.",
    longDesc: "At Vera Gold Enerji, we consult B2B mining and geotechnical companies to lower operational CAPEX by choosing the right drilling consumables. Choosing the wrong bit surface or dth hammer model can decrease tool lifespan by up to 4x. We analyze rock core samples and geotechnical reports to determine the most cost-effective QL, Mission, or DHD configurations.",
    features: [
      { title: "Rock Hardness Tests", desc: "Determining appropriate cutter shapes based on soil abrasiveness and Mohs scale." },
      { title: "DTH Hammer Calibration", desc: "Matching QL, DHD, and Mission series hammers to bit diameters for maximum kinetic energy." },
      { title: "Wear & Lifespan Analytics", desc: "Tracking wear rates and fatigue levels of operating bits at different rotational speeds." },
      { title: "Consumable Inventory Auditing", desc: "Planning stock cycles for DTH hammers and bits to prevent operation downtime." }
    ],
    stats: [
      { val: "+300", label: "Equipment Audits" },
      { val: "15+ Brands", label: "Compatible Support" },
      { val: "4x", label: "Longer Tool Lifespan" }
    ],
    cta: "Request Equipment Consulting"
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
                href="/iletisim?service=equipment"
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
