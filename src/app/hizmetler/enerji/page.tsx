"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Target, Zap, Shield } from "lucide-react";

export default function EnerjiSantralleriPage() {
  const { t, language } = useTranslation();
  const isTr = language === "tr";
  const isDe = language === "de";
  const isFr = language === "fr";

  const detailsTr = {
    features: [
      { title: "Rüzgar Santralı (RES) Temel Kazıkları", desc: "Rüzgar türbinlerinin yüksek tork yüklerini karşılayan derin kazık mühendisliği." },
      { title: "Güneş Santralı (GES) Saha Altyapısı", desc: "Binlerce çelik çakım kazığının arazide milimetrik doğrultu ile çakılması." },
      { title: "Derin Su & Jeotermal Sondajı", desc: "300+ metre derin su ve jeotermal kaynak arama sondaj kuleleri." },
      { title: "Karot Alım & Jeoteknik Etütler", desc: "Zemin mekaniği ve yapı emniyeti için karotlu sondaj numune alma operasyonları." }
    ],
    stats: [
      { val: "+120", label: "GES & RES Altyapısı" },
      { val: "450m", label: "Max Sondaj Derinliği" },
      { val: "7/24", label: "Saha Servis Desteği" }
    ]
  };

  const detailsEn = {
    features: [
      { title: "Wind Farm (WTG) Foundation Piling", desc: "Deep foundation piling engineering to sustain high torque loads of wind turbines." },
      { title: "Solar Array (PV) Substructure", desc: "Precision pile driving for thousands of steel posts across solar terrains." },
      { title: "Deep Water Well & Geothermal Rig", desc: "Water well and geothermal exploration drilling masts reaching up to 300+ meters." },
      { title: "Core Sampling & Geotechnical Surveys", desc: "Core drilling operations for soil mechanics and structural safety assessment." }
    ],
    stats: [
      { val: "+120", label: "Solar & Wind Sites" },
      { val: "450m", label: "Max Boring Depth" },
      { val: "24/7", label: "Field Service Support" }
    ]
  };

  const detailsDe = {
    features: [
      { title: "Gründungspfähle für Windparks (WEA)", desc: "Spezialtiefbau für Windenergieanlagen zur Aufnahme hoher Drehmomente." },
      { title: "Unterkonstruktion für Solarparks (PV)", desc: "Präzises Rammen von Tausenden von Stahlpfählen auf Solarparkflächen." },
      { title: "Tiefbrunnen- & Geothermiebohrungen", desc: "Bohranlagen für Wasser- und Geothermiebohrungen bis zu 300+ Metern." },
      { title: "Kernbohrungen & Geotechnische Untersuchungen", desc: "Kernbohrungen zur Beurteilung der Bodenmechanik und Baustatik." }
    ],
    stats: [
      { val: "+120", label: "Solar- & Windparks" },
      { val: "450m", label: "Max. Bohrtiefe" },
      { val: "24/7", label: "Kundendienst vor Ort" }
    ]
  };

  const detailsFr = {
    features: [
      { title: "Pieux de Fondation pour Éoliennes", desc: "Ingénierie de fondation profonde pour supporter les charges des turbines éoliennes." },
      { title: "Infrastructure de Centrales Solaires (PV)", desc: "Enfoncement de précision de milliers de pieux en acier sur les terrains solaires." },
      { title: "Forage de Puits d'Eau Profonds & Géothermie", desc: "Mâts de forage d'eau et de géothermie atteignant plus de 300 mètres." },
      { title: "Carottage & Études Géotechniques", desc: "Opérations de carottage pour l'évaluation de la mécanique des sols." }
    ],
    stats: [
      { val: "+120", label: "Sites Solaires & Éoliens" },
      { val: "450m", label: "Profondeur Max" },
      { val: "24/7", label: "Support Sur Terrain" }
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
            <span>// {t("services.energy.title")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-sans">
            {t("services.energy.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-4xl font-medium">
            {t("services.energy.long")}
          </p>

          {/* Featured Machine Photo */}
          <div className="relative h-72 md:h-96 w-full rounded-3xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl">
            <Image
              src="/satismakineleri/sondaj-14.07.2023-19-09-01.jpg"
              alt="Endüstriyel Sondaj ve Enerji Altyapısı"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#C59B27] uppercase tracking-widest bg-zinc-950/80 px-3 py-1 rounded-md border border-zinc-800">
                  // ENDÜSTRİYEL SONDAJ & ENERJİ ALTYAPISI
                </span>
                <h3 className="text-lg md:text-2xl font-black uppercase mt-2 font-sans">Derin Zemin Etüdü & Endüstriyel Sondaj Operasyonu</h3>
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
              {isTr ? "Enerji Projeniz İçin Teklif Alın" : isDe ? "Fordern Sie ein Angebot an" : isFr ? "Demandez un devis" : "Request a Quote for Energy Infrastructure"}
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-medium">
              {isTr
                ? "GES, RES ve endüstriyel su sondaj altyapısı çözümlerimiz için mühendislik ekibimizle iletişime geçin."
                : "Contact our engineering team for solar, wind farm, and industrial deep water well drilling infrastructure."}
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
