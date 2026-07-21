"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Target, Zap, Shield } from "lucide-react";

export default function EkipmanDanismanligiPage() {
  const { t: translate, language } = useTranslation();
  const isTr = language === "tr";

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
      <main className="flex-grow pt-32 pb-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#C59B27]/10 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white mb-8 transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 text-[#C59B27]" />
            <span>{isTr ? "Hizmetlere Dön" : "Back to Services"}</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// {current.badge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-sans">
            {current.title}
          </h1>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-4xl font-medium">
            {current.longDesc}
          </p>

          <div className="relative h-72 md:h-96 w-full rounded-3xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl">
            <Image
              src="/veragaleri/Filtre-6579-scaled.jpg"
              alt={current.title}
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-3 gap-6 py-8 px-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-xl mb-16">
            {current.stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-4xl font-black font-mono text-[#C59B27] mb-1">{s.val}</div>
                <div className="text-zinc-400 text-xs font-mono font-bold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8 mb-16">
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white mb-6 flex items-center gap-3">
              <Target className="w-5 h-5 text-emerald-400" />
              // {isTr ? "Danışmanlık Kapsamımız" : "Scope of Consulting"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.features.map((f, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/90 hover:border-[#C59B27]/50 transition-colors shadow-xl"
                >
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C59B27]" />
                    {f.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-normal">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/90 border border-zinc-800 text-center relative overflow-hidden shadow-2xl">
            <Shield className="w-12 h-12 text-[#C59B27] mx-auto mb-6" />
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
              {current.cta}
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-medium">
              {current.desc}
            </p>
            <Link
              href="/iletisim?service=equipment"
              className="inline-flex items-center gap-3 py-4 px-8 rounded-none bg-[#C59B27] hover:bg-[#b08920] text-white font-mono font-bold text-xs uppercase tracking-widest shadow-lg transition-colors cursor-pointer"
            >
              <span>{isTr ? "İletişime Geç" : "Get In Touch"}</span>
              <Zap className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
