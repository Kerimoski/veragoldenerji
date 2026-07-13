"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Zap, Sun, Shield } from "lucide-react";

export default function EnerjiPage() {
  const { t } = useTranslation();

  const detailsTr = {
    features: [
      { title: "Endüstriyel Güneş Santralleri (GES)", desc: "Fabrika çatıları ve arazi tipi güneş enerjisi santrallerinin fizibilite ve anahtar teslim kurulumu." },
      { title: "Rüzgar Enerjisi Santralleri (RES)", desc: "Rüzgar türbinlerinin montaj mühendisliği, kablolama ve altyapı işlerinin üstlenilmesi." },
      { title: "Depolamalı Enerji Çözümleri", desc: "Tesisinizin enerji sürekliliğini sağlamak için endüstriyel akü ve depolama sistemleri kurulumu." },
      { title: "Uzun Vadeli Bakım ve İşletme (O&M)", desc: "Santral verimliliğini maksimumda tutmak amacıyla periyodik teknik bakım ve analizler." }
    ],
    stats: [
      { val: "250MW+", label: "Kurulu Güç Kapasitesi" },
      { val: "+80", label: "Tesis Entegrasyonu" },
      { val: "%35+", label: "Ortalama Karbon Tasarrufu" }
    ]
  };

  const detailsEn = {
    features: [
      { title: "Industrial Solar Power Plants (PV)", desc: "Feasibility studies and turnkey installation for rooftop and ground-mounted solar plants." },
      { title: "Wind Energy Integration (WTG)", desc: "Assembly engineering, cabling, and foundation works for wind turbines." },
      { title: "Battery Energy Storage Systems (BESS)", desc: "Installation of heavy-duty industrial storage systems to guarantee uninterruptible power." },
      { title: "Long-term Operation & Maintenance (O&M)", desc: "Periodic technical servicing and diagnostics to keep power generation efficiency peaked." }
    ],
    stats: [
      { val: "250MW+", label: "Installed Capacity" },
      { val: "+80", label: "Completed Plants" },
      { val: "35%+", label: "Carbon Savings Rate" }
    ]
  };

  const detailsDe = {
    features: [
      { title: "Industrielle Solarkraftwerke (PV)", desc: "Machbarkeitsstudien und schlüsselfertiger Bau von Dachanlagen und Freiflächen-Solarparks." },
      { title: "Windkraftanlagen-Integration", desc: "Montageplanung, Verkabelung und Fundamentarbeiten für Windenergieanlagen." },
      { title: "Batterie-Energiespeichersysteme (BESS)", desc: "Installation von industriellen Speichersystemen zur Gewährleistung einer unterbrechungsfreien Stromversorgung." },
      { title: "Betrieb & Instandhaltung (O&M)", desc: "Regelmäßige technische Wartung und Diagnosen zur Maximierung der Kraftwerkseffizienz." }
    ],
    stats: [
      { val: "250MW+", label: "Installierte Leistung" },
      { val: "+80", label: "Kraftwerksprojekte" },
      { val: "35%+", label: "CO2-Einsparungsquote" }
    ]
  };

  const detailsFr = {
    features: [
      { title: "Centrales Solaires Industrielles (PV)", desc: "Études de faisabilité et installation clés en main de centrales solaires en toiture ou au sol." },
      { title: "Intégration d'Énergie Éolienne", desc: "Ingénierie de montage, câblage et travaux d'infrastructure pour turbines éoliennes." },
      { title: "Systèmes de Stockage par Batterie (BESS)", desc: "Installation de systèmes de stockage industriels pour garantir la continuité énergétique." },
      { title: "Opération & Maintenance à Long Terme (O&M)", desc: "Entretien technique périodique et diagnostics pour maximiser l'efficacité de production." }
    ],
    stats: [
      { val: "250MW+", label: "Capacité Installée" },
      { val: "+80", label: "Centrales Réalisées" },
      { val: "35%+", label: "Réduction de Carbone" }
    ]
  };

  const isTr = t("nav.home") === "Ana Sayfa";
  const isDe = t("nav.home") === "Startseite";
  const isFr = t("nav.home") === "Accueil";

  const currentDetails = isTr ? detailsTr : isDe ? detailsDe : isFr ? detailsFr : detailsEn;

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden bg-white text-zinc-900">
        {/* Glow */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#C59B27]/3 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Back button */}
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-950 transition-colors mb-10 group font-bold"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>{isTr ? "Hizmetlere Dön" : isDe ? "Zurück zu Dienstleistungen" : isFr ? "Retour aux services" : "Back to Services"}</span>
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/30 bg-[#C59B27]/5 text-xs text-[#C59B27] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("services.energy.title")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mb-8">
            {t("services.energy.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-650 text-base md:text-lg leading-relaxed mb-12 max-w-4xl font-medium">
            {t("services.energy.long")}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 py-8 px-6 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-xs mb-16">
            {currentDetails.stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-4xl font-extrabold text-[#C59B27] mb-2">{s.val}</div>
                <div className="text-zinc-500 text-xs md:text-sm font-semibold">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Detailed Features Section */}
          <div className="space-y-8 mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-zinc-950 mb-6 flex items-center gap-2">
              <Sun className="w-5 h-5 text-[#10B981]" />
              {isTr ? "Santral Çözümlerimiz" : isDe ? "Unsere Kraftwerkslösungen" : isFr ? "Nos Solutions Énergétiques" : "Our Renewable Solutions"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentDetails.features.map((f, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors shadow-xs"
                >
                  <h4 className="text-lg font-bold text-zinc-950 mb-2 flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C59B27]" />
                    {f.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-semibold">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action card */}
          <div className="p-8 md:p-12 rounded-3xl bg-zinc-50 border border-zinc-200 text-center relative overflow-hidden shadow-xs">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#10B981]/5 rounded-full filter blur-[60px]" />
            <Zap className="w-12 h-12 text-[#10B981] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-4">
              {isTr ? "Yenilenebilir Enerji Yatırımı Başlatın" : isDe ? "Projektanfrage Energiewende" : isFr ? "Lancer un Projet d'Énergie Propre" : "Launch Your Clean Energy Project"}
            </h3>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-semibold">
              {isTr
                ? "Tesisinizin karbon ayak izini azaltmak ve enerji maliyetlerinizi optimize etmek için hemen bize ulaşın."
                : isDe
                ? "Kontaktieren Sie uns jetzt, um die Energiekosten Ihres Unternehmens zu senken."
                : isFr
                ? "Contactez-nous pour réduire l'empreinte carbone et optimiser les coûts énergétiques de votre site."
                : "Contact us now to reduce your plant's carbon footprint and optimize your industrial energy costs."}
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 py-4 px-8 rounded-lg bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm tracking-wide shadow-sm transition-colors"
            >
              <span>{t("contact.title")}</span>
              <Shield className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
