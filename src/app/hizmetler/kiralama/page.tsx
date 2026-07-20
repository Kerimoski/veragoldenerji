"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Settings, Truck, ShieldCheck } from "lucide-react";

export default function KiralamaPage() {
  const { t } = useTranslation();

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
      { title: "Felsbohr- und Lafettenbohrgeräte", desc: "Schwere Bohrgeräte mit hohem Drehmoment und kettengetriebene Bohranlagen." },
      { title: "Leichte und mobile Bohreinheiten", desc: "Mobile Bohrgeräte mit hoher Wendigkeit für enge oder anspruchsvolle Einsatzorte." },
      { title: "Hochdruck-Luftkompressoren", desc: "Erstklassige Luftkompressorflotte zur Unterstützung schwerer Bohranforderungen." },
      { title: "Option mit Bediener & Wartung", desc: "Zertifizierte Fachbediener und umfassender technischer Support vor Ort auf Anfrage." }
    ],
    stats: [
      { val: "+45", label: "Aktive Mietgeräte" },
      { val: "24/7", label: "Technischer Service" },
      { val: "98%", label: "Betriebliche Uptime" }
    ]
  };

  const detailsFr = {
    features: [
      { title: "Foreuses de Roche et Sondage", desc: "Foreuses lourdes à couple élevé et équipements de forage sur chenilles." },
      { title: "Unités de Forage Mobiles", desc: "Équipements de forage mobiles à haute maniabilité pour les chantiers étroits." },
      { title: "Compresseurs d'Air Haute Pression", desc: "Flotte de compresseurs d'air premium pour soutenir les forages intensifs." },
      { title: "Options avec Opérateur & Support", desc: "Opérateurs certifiés experts et assistance technique complète sur site." }
    ],
    stats: [
      { val: "+45", label: "Unités Actives en Flotte" },
      { val: "24/7", label: "Assistance Technique" },
      { val: "98%", label: "Disponibilité Opérationnelle" }
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
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#10B981]/3 rounded-full filter blur-[120px] pointer-events-none" />

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#10B981]/30 bg-[#10B981]/5 text-xs text-[#10B981] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("services.rental.title")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mb-8">
            {t("services.rental.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-650 text-base md:text-lg leading-relaxed mb-8 max-w-4xl font-medium">
            {t("services.rental.long")}
          </p>

          {/* Featured Machine Photo */}
          <div className="relative h-72 md:h-96 w-full rounded-3xl overflow-hidden mb-12 border border-zinc-200 shadow-md">
            <Image
              src="/satismakineleri/kazıkçakma.jpeg"
              alt="Rock Makineleri Kiralama Filosu"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
              <div>
                <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider bg-black/70 px-3 py-1 rounded-md backdrop-blur-xs">
                  // KİRALIK MAKİNE FİLOSU & SAHA OPERASYONU
                </span>
                <h3 className="text-lg md:text-2xl font-extrabold mt-2">MZ460Y Hidrolik GES Kazık Çakma & Delgi Parkı</h3>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 py-8 px-6 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-xs mb-16">
            {currentDetails.stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-4xl font-extrabold text-[#10B981] mb-2">{s.val}</div>
                <div className="text-zinc-500 text-xs md:text-sm font-semibold">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Detailed Features Section */}
          <div className="space-y-8 mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-zinc-950 mb-6 flex items-center gap-2">
              <Settings className="w-5 h-5 text-[#C59B27]" />
              {isTr ? "Kiralama Filomuz" : isDe ? "Unsere Mietflotte" : isFr ? "Notre Parc de Machines" : "Our Fleet Specifications"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentDetails.features.map((f, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors shadow-xs"
                >
                  <h4 className="text-lg font-bold text-zinc-950 mb-2 flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#10B981]" />
                    {f.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-semibold">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action card */}
          <div className="p-8 md:p-12 rounded-3xl bg-zinc-50 border border-zinc-200 text-center relative overflow-hidden shadow-xs">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C59B27]/5 rounded-full filter blur-[60px]" />
            <Truck className="w-12 h-12 text-[#C59B27] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-4">
              {isTr ? "Rezervasyon ve Kiralama Talebi" : isDe ? "Mietanfragen & Reservierung" : isFr ? "Demande de Location & Devis" : "Lease and Machinery Reservation"}
            </h3>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-semibold">
              {isTr
                ? "Geniş makine filomuz ve esnek kiralama modellerimizle projenize en uygun çözümleri belirleyelim."
                : isDe
                ? "Finden Sie die beste Mietlösung für Ihr Projekt mit unserer flexiblen Vermietungsflotte."
                : isFr
                ? "Déterminons ensemble les meilleures solutions pour vos chantiers avec nos modèles de location flexibles."
                : "Let us determine the best lease terms and equipment for your project with our flexible rental models."}
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 py-4 px-8 rounded-lg bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm tracking-wide shadow-sm transition-colors"
            >
              <span>{t("contact.title")}</span>
              <ShieldCheck className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
