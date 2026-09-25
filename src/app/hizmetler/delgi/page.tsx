"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Target, Zap, Shield } from "lucide-react";

export default function DelgiIsleriPage() {
  const { t, language } = useTranslation();
  const isTr = language === "tr";
  const isDe = language === "de";
  const isFr = language === "fr";
  const isIt = language === "it";
  const isEs = language === "es";

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
      { title: "Percement de Tunnels & Galeries", desc: "Solutions professionnelles pour les excavations souterraines nécessitant une ingénierie de précision." }
    ],
    stats: [
      { val: "+150", label: "Projets Réalisés" },
      { val: "25m+", label: "Mètres Forés" },
      { val: "100%", label: "Taux de Sécurité" }
    ]
  };

  const detailsIt = {
    features: [
      { title: "Perforazione in Roccia & Brillamento", desc: "Perforazioni ad alta velocità in miniere, costruzioni stradali e cave." },
      { title: "Ancoraggi & Stabilizzazione di Scarpate", desc: "Opere di sostegno e ancoraggio per prevenire frane e garantire la sicurezza degli scavi su terreni difficili." },
      { title: "Micropali & Rinforzo delle Fondazioni", desc: "Pali di fondazione profonda per aumentare la stabilità del terreno delle strutture." },
      { title: "Scavo di Gallerie & Cunicoli", desc: "Soluzioni professionali per scavi e perforazioni sotterranee che richiedono ingegneria di precisione." }
    ],
    stats: [
      { val: "+150", label: "Progetti Completati" },
      { val: "25m+", label: "Metri Perforati" },
      { val: "100%", label: "Tasso di Sicurezza" }
    ]
  };

  const detailsEs = {
    features: [
      { title: "Perforación en Roca & Voladura", desc: "Perforaciones de alta velocidad en minas, construcción de carreteras y canteras." },
      { title: "Anclajes & Estabilización de Taludes", desc: "Trabajos de sostenimiento y anclaje para prevenir deslizamientos y garantizar la seguridad de las excavaciones en terrenos difíciles." },
      { title: "Micropilotes & Refuerzo de Cimentaciones", desc: "Pilotes de cimentación profunda para aumentar la estabilidad del terreno de las estructuras." },
      { title: "Excavación de Túneles & Galerías", desc: "Soluciones profesionales para excavaciones y perforaciones subterráneas que requieren ingeniería de precisión." }
    ],
    stats: [
      { val: "+150", label: "Proyectos Completados" },
      { val: "25m+", label: "Metros Perforados" },
      { val: "100%", label: "Índice de Seguridad" }
    ]
  };

  const currentDetails = isTr ? detailsTr : isDe ? detailsDe : isFr ? detailsFr : isIt ? detailsIt : isEs ? detailsEs : detailsEn;

  const drillingInfo = {
    tr: {
      methodsTitle: "Delgi Yöntemleri",
      methods: "Havalı (DTH - Down-The-Hole) tabancalı sistemler, hidrolik üstten vurmalı (top-hammer) Delik Delme Makineleri (DDM) ve rotatif delgi sistemleri.",
      rangeTitle: "Değerlendirme Alanı",
      range: "Standart çelik profil yuvaları ve zemin çivileri için Ø89 mm - Ø140 mm, derin ankraj ve temel delgileri için Ø150 mm - Ø250 mm aralığında, ±2 mm sapma toleransıyla delgi yapılmaktadır.",
    },
    en: {
      methodsTitle: "Drilling Methods",
      methods: "Pneumatic DTH (Down-The-Hole) hammer systems, hydraulic top-hammer drilling rigs and rotary drilling systems.",
      rangeTitle: "Application Range",
      range: "Drilling is performed at Ø89 mm - Ø140 mm for standard steel profile sockets and soil nails, and Ø150 mm - Ø250 mm for deep anchor and foundation holes, with a ±2 mm deviation tolerance.",
    },
    de: {
      methodsTitle: "Bohrverfahren",
      methods: "Pneumatische DTH-Imlochhammersysteme (Down-The-Hole), hydraulische Top-Hammer-Bohrgeräte und Rotationsbohrsysteme.",
      rangeTitle: "Anwendungsbereich",
      range: "Gebohrt wird mit Ø89 mm - Ø140 mm für Standard-Stahlprofilaufnahmen und Bodennägel sowie mit Ø150 mm - Ø250 mm für tiefe Anker- und Fundamentbohrungen, bei einer Abweichungstoleranz von ±2 mm.",
    },
    fr: {
      methodsTitle: "Méthodes de Forage",
      methods: "Systèmes pneumatiques fond de trou (DTH - Down-The-Hole), foreuses hydrauliques à marteau hors trou (top-hammer) et systèmes de forage rotatif.",
      rangeTitle: "Domaine d'Application",
      range: "Les forages sont réalisés en Ø89 mm - Ø140 mm pour les logements de profilés acier standard et les clous de sol, et en Ø150 mm - Ø250 mm pour les ancrages profonds et les fondations, avec une tolérance d'écart de ±2 mm.",
    },
    it: {
      methodsTitle: "Metodi di Perforazione",
      methods: "Sistemi pneumatici DTH (Down-The-Hole), perforatrici idrauliche a martello in testa (top-hammer) e sistemi di perforazione rotativa.",
      rangeTitle: "Campo di Applicazione",
      range: "Le perforazioni vengono eseguite con diametri da Ø89 mm a Ø140 mm per alloggiamenti di profili in acciaio standard e chiodature, e da Ø150 mm a Ø250 mm per ancoraggi profondi e fondazioni, con una tolleranza di deviazione di ±2 mm.",
    },
    es: {
      methodsTitle: "Métodos de Perforación",
      methods: "Sistemas neumáticos DTH (Down-The-Hole), perforadoras hidráulicas de martillo en cabeza (top-hammer) y sistemas de perforación rotativa.",
      rangeTitle: "Campo de Aplicación",
      range: "Las perforaciones se realizan con diámetros de Ø89 mm a Ø140 mm para alojamientos de perfiles de acero estándar y bulones de suelo, y de Ø150 mm a Ø250 mm para anclajes profundos y cimentaciones, con una tolerancia de desviación de ±2 mm.",
    },
  };
  const currentInfo = isTr ? drillingInfo.tr : isDe ? drillingInfo.de : isFr ? drillingInfo.fr : isIt ? drillingInfo.it : isEs ? drillingInfo.es : drillingInfo.en;

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
            <span>{isTr ? "Hizmetlere Dön" : isDe ? "Zurück zu Dienstleistungen" : isFr ? "Retour aux services" : isIt ? "Torna ai Servizi" : isEs ? "Volver a Servicios" : "Back to Services"}</span>
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// {t("services.drill.title")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-sans">
            {t("services.drill.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-4xl font-medium">
            {t("services.drill.long")}
          </p>

          {/* Featured Machine Photo */}
          <div className="relative h-72 md:h-96 w-full rounded-3xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl">
            <Image
              src="/satismakineleri/Paletli-Rock-Makina.jpg"
              alt="Delgi İşleri Saha Operasyonu"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#C59B27] uppercase tracking-widest bg-zinc-950/80 px-3 py-1 rounded-md border border-zinc-800">
                  // {isTr ? "SAHA KAYA DELGİ OPERASYONU" : isDe ? "FELSBOHRUNG IM EINSATZ" : isFr ? "OPÉRATION DE FORAGE EN ROCHE" : isIt ? "OPERAZIONE DI PERFORAZIONE IN ROCCIA" : isEs ? "OPERACIÓN DE PERFORACIÓN EN ROCA" : "FIELD ROCK DRILLING OPERATION"}
                </span>
                <h3 className="text-lg md:text-2xl font-black uppercase mt-2 font-sans">{isTr ? "DTH Yüksek Basınçlı Kaya Delme Parkuru" : isDe ? "DTH-Hochdruck-Felsbohrflotte" : isFr ? "Parc de Forage en Roche DTH Haute Pression" : isIt ? "Flotta di Perforazione in Roccia DTH ad Alta Pressione" : isEs ? "Flota de Perforación en Roca DTH de Alta Presión" : "DTH High-Pressure Rock Drilling Fleet"}</h3>
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

          {/* Drilling Methods & Application Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 md:p-8 rounded-3xl border border-zinc-800 bg-zinc-900/90 shadow-xl">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#C59B27] mb-3 flex items-center gap-2.5">
                <Zap className="w-4 h-4" />
                // {currentInfo.methodsTitle}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">{currentInfo.methods}</p>
            </div>
            <div className="p-6 md:p-8 rounded-3xl border border-zinc-800 bg-zinc-900/90 shadow-xl">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#C59B27] mb-3 flex items-center gap-2.5">
                <Target className="w-4 h-4" />
                // {currentInfo.rangeTitle}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">{currentInfo.range}</p>
            </div>
          </div>

          {/* Detailed Features Section */}
          <div className="space-y-8 mb-16">
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white mb-6 flex items-center gap-3">
              <Target className="w-5 h-5 text-emerald-400" />
              // {isTr ? "Hizmet Kapsamımız" : isDe ? "Unser Leistungsumfang" : isFr ? "Notre Champ d'Action" : isIt ? "Ambito dei Servizi" : isEs ? "Alcance de los Servicios" : "Scope of Services"}
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
              {isTr ? "Projeniz İçin Teklif Alın" : isDe ? "Fordern Sie ein Angebot an" : isFr ? "Demandez un devis" : isIt ? "Richiedi un Preventivo per il Tuo Progetto" : isEs ? "Solicite un Presupuesto para su Proyecto" : "Request a Quote for Your Project"}
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-medium">
              {isTr
                ? "B2B iş ortaklarımıza sunduğumuz kaya delgi çözümlerimizle projelerinizi zamanında ve güvenle tamamlayın."
                : isDe
                ? "Schließen Sie Ihre Projekte pünktlich und sicher ab mit unseren B2B-Felsbohrlösungen."
                : isFr
                ? "Réalisez vos chantiers en toute sécurité et dans les délais grâce à nos solutions de forage B2B."
                : isIt
                ? "Completate i vostri progetti in tempo e in sicurezza con le nostre soluzioni B2B di perforazione in roccia."
                : isEs
                ? "Complete sus proyectos a tiempo y con seguridad con nuestras soluciones B2B de perforación en roca."
                : "Complete your projects on time and safely with our B2B rock drilling solutions."}
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
