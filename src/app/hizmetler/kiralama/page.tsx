"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Target, Zap, Shield } from "lucide-react";

export default function KiralamaPage() {
  const { t, language } = useTranslation();
  const isTr = language === "tr";
  const isDe = language === "de";
  const isFr = language === "fr";

  const detailsTr = {
    features: [
      { title: "Kaya Delgi ve Sondaj Makineleri", desc: "Ağır hizmet tipi yüksek torklu sondaj makineleri ve paletli kaya delgi ekipmanları." },
      { title: "Hafif ve Mobil Sondaj Üniteleri", desc: "Dar veya engebeli arazilerde kolay manevra yapabilen mobil delgi ekipmanları." },
      { title: "Kompresör ve Hava Destek Üniteleri", desc: "Yüksek basınçlı delgi işlemleri için premium hava kompresörü filosu." },
      { title: "Operatörlü & Teknik Destekli Modeller", desc: "Talep halinde alanında uzman, sertifikalı operatörlerimiz ve yerinde teknik desteğimiz." }
    ],
    stats: [
      { val: "+45", label: "Aktif Makine Filosu" },
      { val: "7/24", label: "Teknik Servis & Destek" },
      { val: "%98", label: "Operasyonel Verimlilik" }
    ]
  };

  const detailsEn = {
    features: [
      { title: "Rock Drilling & Excavation Rigs", desc: "Heavy-duty high-torque drilling rigs and crawler-based excavation equipment." },
      { title: "Light & Mobile Drilling Units", desc: "Mobile drilling gear with high maneuverability for narrow or challenging spaces." },
      { title: "High-Pressure Air Compressors", desc: "Premium air compressor fleet designed to support heavy drilling requirements." },
      { title: "Operator & Maintenance Included", desc: "Certified expert operators and full on-site technical support available on request." }
    ],
    stats: [
      { val: "+45", label: "Active Fleet Units" },
      { val: "24/7", label: "Technical Support" },
      { val: "98%", label: "Operational Uptime" }
    ]
  };

  const detailsDe = {
    features: [
      { title: "Gesteinsbohrgeräte & Aushubmaschinen", desc: "Leistungsstarke Raupenbohrgeräte und Erdaushubgeräte mit hohem Drehmoment." },
      { title: "Leichte & Mobile Bohreinheiten", desc: "Wendige mobile Bohrgeräte für enge oder anspruchsvolle Gelände." },
      { title: "Hochdruck-Luftkompressoren", desc: "Premium-Kompressorenflotte zur Unterstützung schwerer Bohranforderungen." },
      { title: "Inklusive Bediener & Wartung", desc: "Zertifizierte Fachbediener und vollständiger technischer Support vor Ort auf Anfrage." }
    ],
    stats: [
      { val: "+45", label: "Aktive Flotteneinheiten" },
      { val: "24/7", label: "Technischer Support" },
      { val: "98%", label: "Betriebliche Verfügbarkeit" }
    ]
  };

  const detailsFr = {
    features: [
      { title: "Foreuses de Roche & Équipements", desc: "Foreuses haute performance à grand couple et équipements de forage sur chenilles." },
      { title: "Unités de Forage Légères & Mobiles", desc: "Équipements mobiles maniables pour espaces restreints ou terrains difficiles." },
      { title: "Compresseurs d'Air Haute Pression", desc: "Flotte de compresseurs haut de gamme pour soutenir les exigences de forage lourd." },
      { title: "Opérateur & Maintenance Inclus", desc: "Opérateurs certifiés et assistance technique complète sur site sur demande." }
    ],
    stats: [
      { val: "+45", label: "Unités de Flotte Actives" },
      { val: "24/7", label: "Support Technique" },
      { val: "98%", label: "Disponibilité Opérationnelle" }
    ]
  };

  const currentDetails = isTr ? detailsTr : isDe ? detailsDe : isFr ? detailsFr : detailsEn;

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#C59B27]/10 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Back button */}
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white mb-8 transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 text-[#C59B27]" />
            <span>{isTr ? "Hizmetlere Dön" : isDe ? "Zurück zu Dienstleistungen" : isFr ? "Retour aux services" : "Back to Services"}</span>
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// {t("services.rental.title")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-sans">
            {t("services.rental.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-4xl font-medium">
            {t("services.rental.long")}
          </p>

          {/* Featured Machine Photo */}
          <div className="relative h-72 md:h-96 w-full rounded-3xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl">
            <Image
              src="/satismakineleri/mz460y.jpg"
              alt="Rock Makineleri Kiralama Filosu"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#C59B27] uppercase tracking-widest bg-zinc-950/80 px-3 py-1 rounded-md border border-zinc-800">
                  // KİRALIK MAKİNE FİLOSU & SAHA OPERASYONU
                </span>
                <h3 className="text-lg md:text-2xl font-black uppercase mt-2 font-sans">MZ460Y Hidrolik GES Kazık Çakma & Delgi Parkı</h3>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 py-8 px-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-xl mb-16">
            {currentDetails.stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-4xl font-black font-mono text-[#C59B27] mb-1">{s.val}</div>
                <div className="text-zinc-400 text-xs font-mono font-bold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Detailed Features Section */}
          <div className="space-y-8 mb-16">
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white mb-6 flex items-center gap-3">
              <Target className="w-5 h-5 text-emerald-400" />
              // {isTr ? "Hizmet Kapsamımız" : isDe ? "Unser Leistungsumfang" : isFr ? "Notre Champ d'Action" : "Scope of Services"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentDetails.features.map((f, idx) => (
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

          {/* Call to action card */}
          <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/90 border border-zinc-800 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C59B27]/10 rounded-full filter blur-[80px]" />
            <Shield className="w-12 h-12 text-[#C59B27] mx-auto mb-6" />
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
              {isTr ? "Filomuz İçin Teklif Alın" : isDe ? "Fordern Sie ein Angebot an" : isFr ? "Demandez un devis" : "Request a Quote for Our Fleet"}
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-medium">
              {isTr
                ? "Güneş santralleri ve kaya delgi projeleriniz için kiralık makine parkurumuzu hemen keşfedin."
                : "Explore our rental rig fleet for solar farms and heavy rock drilling operations."}
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 py-4 px-8 rounded-none bg-[#C59B27] hover:bg-[#b08920] text-white font-mono font-bold text-xs uppercase tracking-widest shadow-lg transition-colors cursor-pointer"
            >
              <span>{t("contact.title")}</span>
              <Zap className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
