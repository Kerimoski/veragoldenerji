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
  const isIt = language === "it";
  const isEs = language === "es";

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

  const detailsIt = {
    features: [
      { title: "Perforatrici da Roccia e da Sondaggio", desc: "Perforatrici per impieghi gravosi ad alta coppia e attrezzature cingolate per la perforazione in roccia." },
      { title: "Unità di Perforazione Leggere e Mobili", desc: "Attrezzature di perforazione mobili e manovrabili per spazi ristretti o terreni accidentati." },
      { title: "Compressori & Unità di Supporto Aria", desc: "Flotta premium di compressori per le operazioni di perforazione ad alta pressione." },
      { title: "Con Operatore & Supporto Tecnico", desc: "Su richiesta, operatori certificati ed esperti e supporto tecnico completo in cantiere." }
    ],
    stats: [
      { val: "+45", label: "Unità di Flotta Attive" },
      { val: "24/7", label: "Assistenza Tecnica" },
      { val: "98%", label: "Efficienza Operativa" }
    ]
  };

  const detailsEs = {
    features: [
      { title: "Perforadoras de Roca y de Sondeo", desc: "Perforadoras de alta resistencia y alto par y equipos de perforación en roca sobre orugas." },
      { title: "Unidades de Perforación Ligeras y Móviles", desc: "Equipos de perforación móviles y maniobrables para espacios reducidos o terrenos accidentados." },
      { title: "Compresores & Unidades de Apoyo de Aire", desc: "Flota premium de compresores para operaciones de perforación de alta presión." },
      { title: "Con Operador & Soporte Técnico", desc: "Bajo demanda, operadores certificados y expertos y soporte técnico completo en obra." }
    ],
    stats: [
      { val: "+45", label: "Unidades de Flota Activas" },
      { val: "24/7", label: "Soporte Técnico" },
      { val: "98%", label: "Eficiencia Operativa" }
    ]
  };

  const currentDetails = isTr ? detailsTr : isDe ? detailsDe : isFr ? detailsFr : isIt ? detailsIt : isEs ? detailsEs : detailsEn;

  const gesRental = {
    tr: {
      title: "GES Sahaları İçin Delgi Ekipmanı Kiralama",
      intro: "Engebeli ve kayalık arazilerde GES konstrüksiyon ayaklarının sabitlenmesi, zemin çivisi çakılması veya ön delgi (pre-boring) yapılması için özel delgi ekipmanlarına ihtiyaç duyulur. Sahadaki operasyonel hızınızı artırmak için en son teknolojiye sahip sistemleri kiralıyoruz:",
      items: [
        { title: "Seyyar ve Vidalı Kompresörler", desc: "Yüksek hava debisi ve basınç kapasitesiyle, şantiyenin en uzak noktalarında dahi kesintisiz pnömatik güç sağlar." },
        { title: "Pnömatik ve Hidrolik Rock Deliciler (DTH / Top-Hammer)", desc: "Sert kayalarda istenilen çap ve derinlikte kusursuz delgi yapılmasına olanak tanır." },
        { title: "Delici Uç, Tij ve Sarf Malzemeleri", desc: "Delgi operasyonlarınızın aksamaması için tam uyumlu yedek parça ve sarf malzeme desteği." },
      ],
    },
    en: {
      title: "Drilling Equipment Rental for Solar (PV) Sites",
      intro: "On rough and rocky terrain, fixing solar mounting structure posts, installing soil nails or pre-boring requires specialised drilling equipment. We rent out state-of-the-art systems to increase your operational speed on site:",
      items: [
        { title: "Portable & Screw Compressors", desc: "High air flow and pressure capacity deliver uninterrupted pneumatic power even at the most remote points of the site." },
        { title: "Pneumatic & Hydraulic Rock Drills (DTH / Top-Hammer)", desc: "Enable flawless drilling at the required diameter and depth in hard rock." },
        { title: "Drill Bits, Rods & Consumables", desc: "Fully compatible spare parts and consumables support to keep your drilling operations running." },
      ],
    },
    de: {
      title: "Bohrgerätevermietung für PV-Solarparks",
      intro: "In unebenem und felsigem Gelände erfordern die Verankerung von PV-Unterkonstruktionen, das Setzen von Bodennägeln oder Vorbohrungen (Pre-Boring) spezielle Bohrgeräte. Wir vermieten modernste Systeme, um Ihre Arbeitsgeschwindigkeit auf der Baustelle zu steigern:",
      items: [
        { title: "Mobile & Schraubenkompressoren", desc: "Hohe Liefermenge und Druckkapazität sorgen selbst an den entferntesten Stellen der Baustelle für unterbrechungsfreie pneumatische Leistung." },
        { title: "Pneumatische & Hydraulische Gesteinsbohrgeräte (DTH / Top-Hammer)", desc: "Ermöglichen einwandfreie Bohrungen mit dem gewünschten Durchmesser und der gewünschten Tiefe in hartem Gestein." },
        { title: "Bohrkronen, Bohrstangen & Verbrauchsmaterial", desc: "Vollständig kompatible Ersatzteile und Verbrauchsmaterialien, damit Ihre Bohrarbeiten nicht ins Stocken geraten." },
      ],
    },
    fr: {
      title: "Location d'Équipements de Forage pour Centrales Solaires",
      intro: "Sur les terrains accidentés et rocheux, la fixation des pieds de structures photovoltaïques, la pose de clous de sol ou le pré-forage (pre-boring) nécessitent des équipements de forage spécifiques. Nous louons des systèmes de dernière génération pour accélérer vos opérations sur site :",
      items: [
        { title: "Compresseurs Mobiles & à Vis", desc: "Un débit d'air et une capacité de pression élevés fournissent une puissance pneumatique continue, même aux points les plus éloignés du chantier." },
        { title: "Foreuses de Roche Pneumatiques & Hydrauliques (DTH / Top-Hammer)", desc: "Permettent un forage impeccable au diamètre et à la profondeur souhaités dans la roche dure." },
        { title: "Taillants, Tiges & Consommables", desc: "Un soutien complet en pièces détachées et consommables compatibles pour que vos opérations de forage ne s'arrêtent pas." },
      ],
    },
    it: {
      title: "Noleggio di Attrezzature di Perforazione per Impianti Fotovoltaici",
      intro: "Su terreni accidentati e rocciosi, il fissaggio dei montanti delle strutture fotovoltaiche, l'infissione di chiodi nel terreno o la preforatura (pre-boring) richiedono attrezzature di perforazione specifiche. Noleggiamo sistemi di ultima generazione per aumentare la vostra velocità operativa in cantiere:",
      items: [
        { title: "Compressori Mobili e a Vite", desc: "Grazie all'elevata portata d'aria e capacità di pressione, forniscono energia pneumatica continua anche nei punti più remoti del cantiere." },
        { title: "Perforatrici da Roccia Pneumatiche e Idrauliche (DTH / Top-Hammer)", desc: "Consentono perforazioni impeccabili nel diametro e nella profondità richiesti anche nella roccia dura." },
        { title: "Punte, Aste e Materiali di Consumo", desc: "Supporto completo di ricambi e materiali di consumo compatibili per non interrompere le vostre operazioni di perforazione." },
      ],
    },
    es: {
      title: "Alquiler de Equipos de Perforación para Plantas Solares",
      intro: "En terrenos accidentados y rocosos, la fijación de los postes de las estructuras fotovoltaicas, la colocación de bulones de suelo o la preperforación (pre-boring) requieren equipos de perforación específicos. Alquilamos sistemas de última tecnología para aumentar su velocidad operativa en obra:",
      items: [
        { title: "Compresores Móviles y de Tornillo", desc: "Con un alto caudal de aire y capacidad de presión, proporcionan energía neumática ininterrumpida incluso en los puntos más alejados de la obra." },
        { title: "Perforadoras de Roca Neumáticas e Hidráulicas (DTH / Top-Hammer)", desc: "Permiten perforaciones impecables con el diámetro y la profundidad requeridos en roca dura." },
        { title: "Brocas, Varillas y Consumibles", desc: "Soporte completo de repuestos y consumibles compatibles para que sus operaciones de perforación no se detengan." },
      ],
    },
  };
  const currentGes = isTr ? gesRental.tr : isDe ? gesRental.de : isFr ? gesRental.fr : isIt ? gesRental.it : isEs ? gesRental.es : gesRental.en;

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
                  // {isTr ? "KİRALIK MAKİNE FİLOSU & SAHA OPERASYONU" : isDe ? "MIETFLOTTE & FELDEINSATZ" : isFr ? "FLOTTE DE LOCATION & OPÉRATION TERRAIN" : isIt ? "FLOTTA A NOLEGGIO & OPERAZIONI IN CANTIERE" : isEs ? "FLOTA DE ALQUILER & OPERACIÓN EN OBRA" : "RENTAL FLEET & FIELD OPERATION"}
                </span>
                <h3 className="text-lg md:text-2xl font-black uppercase mt-2 font-sans">{isTr ? "MZ460Y Hidrolik GES Kazık Çakma & Delgi Parkı" : isDe ? "MZ460Y Hydraulische Solar-Ramm- & Bohrflotte" : isFr ? "Parc de Battage Solaire & Forage Hydraulique MZ460Y" : isIt ? "Flotta Idraulica MZ460Y per Infissione FV & Perforazione" : isEs ? "Flota Hidráulica MZ460Y de Hincado Solar & Perforación" : "MZ460Y Hydraulic Solar Piling & Drilling Fleet"}</h3>
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

          {/* GES Drilling Equipment Rental */}
          <div className="p-6 md:p-10 rounded-3xl border border-zinc-800 bg-zinc-900/90 shadow-xl mb-16">
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white mb-4">
              // {currentGes.title}
            </h3>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8">{currentGes.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentGes.items.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-zinc-800 bg-zinc-950">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
              {isTr ? "Filomuz İçin Teklif Alın" : isDe ? "Fordern Sie ein Angebot an" : isFr ? "Demandez un devis" : isIt ? "Richiedi un Preventivo per la Nostra Flotta" : isEs ? "Solicite un Presupuesto para Nuestra Flota" : "Request a Quote for Our Fleet"}
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-medium">
              {isTr
                ? "Güneş santralleri ve kaya delgi projeleriniz için kiralık makine parkurumuzu hemen keşfedin."
                : isIt
                ? "Scoprite subito la nostra flotta di macchine a noleggio per impianti fotovoltaici e progetti di perforazione in roccia."
                : isEs
                ? "Descubra ahora nuestra flota de maquinaria de alquiler para plantas solares y proyectos de perforación en roca."
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
