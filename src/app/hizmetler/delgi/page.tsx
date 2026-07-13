"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Target, Zap, Shield } from "lucide-react";

export default function DelgiIsleriPage() {
  const { t } = useTranslation();

  const detailsTr = {
    features: [
      { title: "Kaya Delme & Patlatma", desc: "Maden sahaları, yol inşaatları ve taş ocaklarında yüksek hızlı delik delme operasyonları." },
      { title: "Zemin Ankrajı & Şev Stabilizasyonu", desc: "Zorlu arazilerde heyelan önleme ve kazı güvenliğini sağlama amaçlı iksa ve ankraj işleri." },
      { title: "Mikrokazık & Temel Güçlendirme", desc: "Yapıların zemin stabilitesini artırmak amacıyla derin temel kazık uygulamaları." },
      { title: "Tünel & Galeri Açma", desc: "Hassas mühendislik gerektiren yer altı kazı ve delgi işlerinde profesyonel çözümler." }
    ],
    stats: [
      { val: "+150", label: "Tamamlanan Proje" },
      { val: "25m+", label: "Metraj Delgi" },
      { val: "%100", label: "İş Güvenliği Oranı" }
    ]
  };

  const detailsEn = {
    features: [
      { title: "Rock Drilling & Blasting", desc: "High-speed drilling operations in mining sites, road construction, and quarries." },
      { title: "Ground Anchoring & Slope Stabilization", desc: "Shoring and anchoring works to prevent landslides and ensure excavation safety in tough terrains." },
      { title: "Micropiles & Foundation Reinforcement", desc: "Deep foundation piling applications to increase structural ground stability." },
      { title: "Tunneling & Gallery Excavation", desc: "Professional solutions in underground excavation and drilling requiring high-precision engineering." }
    ],
    stats: [
      { val: "+150", label: "Completed Projects" },
      { val: "25m+", label: "Drilled Meters" },
      { val: "100%", label: "Safety Record" }
    ]
  };

  const detailsDe = {
    features: [
      { title: "Felsbohren & Sprengen", desc: "Hochgeschwindigkeitsbohrungen in Bergwerken, beim Straßenbau und in Steinbrüchen." },
      { title: "Baugrundverankerung & Hangsicherung", desc: "Verankerungsarbeiten zur Verhinderung von Erdrutschen und zur Sicherung von Baugruben in schwierigem Gelände." },
      { title: "Mikropfähle & Fundamentverstärkung", desc: "Tiefgründungsarbeiten zur Erhöhung der Standsicherheit von Bauwerken." },
      { title: "Tunnel- und Stollenbau", desc: "Professionelle Lösungen für unterirdische Ausgrabungen und Bohrungen, die hohe Präzision erfordern." }
    ],
    stats: [
      { val: "+150", label: "Abgeschlossene Projekte" },
      { val: "25m+", label: "Gebohrte Meter" },
      { val: "100%", label: "Sicherheitsquote" }
    ]
  };

  const detailsFr = {
    features: [
      { title: "Forage de Roche & Minage", desc: "Opérations de forage à grande vitesse dans les mines, la construction de routes et les carrières." },
      { title: "Ancrage de Sol & Stabilisation de Pente", desc: "Travaux de soutènement et d'ancrage pour prévenir les glissements de terrain et assurer la sécurité des fouilles." },
      { title: "Micro-pieux & Renforcement des Fondations", desc: "Applications de pieux de fondation profonde pour augmenter la stabilité structurelle du sol." },
      { title: "Forage de Tunnels & Galeries", desc: "Solutions professionnelles dans les excavations souterraines nécessitant une ingénierie de haute précision." }
    ],
    stats: [
      { val: "+150", label: "Projets Réalisés" },
      { val: "25m+", label: "Mètres Forés" },
      { val: "100%", label: "Sécurité Garantie" }
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
            <span>{t("services.drill.title")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mb-8">
            {t("services.drill.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-650 text-base md:text-lg leading-relaxed mb-12 max-w-4xl font-medium">
            {t("services.drill.long")}
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
              <Target className="w-5 h-5 text-[#10B981]" />
              {isTr ? "Hizmet Kapsamımız" : isDe ? "Unser Leistungsumfang" : isFr ? "Notre Champ d'Action" : "Scope of Services"}
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
            <Shield className="w-12 h-12 text-[#10B981] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-4">
              {isTr ? "Projeniz İçin Teklif Alın" : isDe ? "Fordern Sie ein Angebot an" : isFr ? "Demandez un devis" : "Request a Quote for Your Project"}
            </h3>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-semibold">
              {isTr
                ? "B2B iş ortaklarımıza sunduğumuz kaya delgi çözümlerimizle projelerinizi zamanında ve güvenle tamamlayın."
                : isDe
                ? "Schließen Sie Ihre Projekte pünktlich und sicher ab mit unseren B2B-Felsbohrlösungen."
                : isFr
                ? "Réalisez vos chantiers en toute sécurité et dans les délais grâce à nos solutions de forage B2B."
                : "Complete your projects on time and safely with our B2B rock drilling solutions."}
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 py-4 px-8 rounded-lg bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm tracking-wide shadow-sm transition-colors"
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
