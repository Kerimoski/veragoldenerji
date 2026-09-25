"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Check, Sparkles, Target, Zap, Shield } from "lucide-react";

export default function EkipmanDanismanligiPage() {
  const { t: translate, language, tx } = useTranslation();

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

  const contentDe = {
    title: "Beratung für Bohrausrüstung",
    badge: "B2B-Ausrüstungsoptimierung",
    desc: "Wir erstellen Ingenieurberichte zur Auswahl der am besten geeigneten Bohrkronen, DTH-Hämmer und Verbrauchsmaterialien je nach Gesteinshärte und Bodenprofil.",
    longDesc: "Bei Vera Gold Enerji beraten wir B2B-Bergbau- und Geotechnikunternehmen bei der Wahl der richtigen Bohrverbrauchsmaterialien, um die Betriebskosten zu senken. Eine falsche Bohrkronenoberfläche oder ein falsches DTH-Hammermodell kann die Standzeit des Werkzeugs um bis zum Vierfachen verkürzen. Anhand von Gesteinskernproben und geotechnischen Berichten ermitteln wir die wirtschaftlichsten QL-, Mission- oder DHD-Konfigurationen.",
    features: [
      { title: "Gesteinshärteprüfungen", desc: "Bestimmung geeigneter Schneidformen nach Abrasivität des Bodens und Mohs-Skala." },
      { title: "DTH-Hammer-Abstimmung", desc: "Abstimmung von QL-, DHD- und Mission-Hämmern auf die Bohrkronendurchmesser für maximale kinetische Energie." },
      { title: "Verschleiß- & Standzeitanalysen", desc: "Überwachung von Verschleiß und Ermüdung der eingesetzten Bohrkronen bei unterschiedlichen Drehzahlen." },
      { title: "Bestandsprüfung der Verbrauchsmaterialien", desc: "Planung der Lagerzyklen für DTH-Hämmer und Bohrkronen zur Vermeidung von Stillstandszeiten." }
    ],
    stats: [
      { val: "+300", label: "Ausrüstungsaudits" },
      { val: "15+ Marken", label: "Kompatibler Support" },
      { val: "4x", label: "Längere Werkzeugstandzeit" }
    ],
    cta: "Ausrüstungsberatung anfordern"
  };

  const contentFr = {
    title: "Conseil en Équipements de Forage",
    badge: "Optimisation des Équipements B2B",
    desc: "Nous préparons des rapports d'ingénierie pour choisir les taillants, marteaux DTH et consommables les plus adaptés selon la dureté de la roche et le profil du sol.",
    longDesc: "Chez Vera Gold Enerji, nous conseillons les entreprises minières et géotechniques B2B dans le choix des bons consommables de forage afin de réduire leurs coûts d'exploitation. Un mauvais choix de surface de taillant ou de modèle de marteau DTH peut réduire la durée de vie de l'outil jusqu'à 4 fois. Nous analysons les carottes de roche et les rapports géotechniques pour déterminer les configurations QL, Mission ou DHD les plus rentables.",
    features: [
      { title: "Essais de Dureté de la Roche", desc: "Choix des formes de coupe adaptées selon l'abrasivité du sol et l'échelle de Mohs." },
      { title: "Calibrage des Marteaux DTH", desc: "Association des marteaux QL, DHD et Mission aux diamètres de taillant pour une énergie cinétique maximale." },
      { title: "Analyses d'Usure & de Durée de Vie", desc: "Suivi des taux d'usure et de fatigue des taillants en service à différentes vitesses de rotation." },
      { title: "Audit des Stocks de Consommables", desc: "Planification des cycles de stock de marteaux et taillants DTH pour éviter les arrêts d'exploitation." }
    ],
    stats: [
      { val: "+300", label: "Audits d'Équipements" },
      { val: "15+ Marques", label: "Support Compatible" },
      { val: "4x", label: "Durée de Vie des Outils Prolongée" }
    ],
    cta: "Demander un Conseil Équipement"
  };

  const contentIt = {
    title: "Consulenza sulle Attrezzature di Perforazione",
    badge: "Ottimizzazione delle Attrezzature B2B",
    desc: "Prepariamo report ingegneristici per scegliere le punte, i martelli DTH e i materiali di consumo più adatti in base alla durezza della roccia e al profilo del terreno.",
    longDesc: "In Vera Gold Enerji assistiamo le aziende minerarie e geotecniche B2B nella scelta dei giusti materiali di consumo per ridurre i costi operativi. Una superficie della punta o un modello di martello DTH sbagliati possono ridurre la durata dell'utensile fino a 4 volte. Analizziamo carote di roccia e relazioni geotecniche per individuare le configurazioni QL, Mission o DHD più convenienti.",
    features: [
      { title: "Prove di Durezza della Roccia", desc: "Scelta delle forme di taglio adatte in base all'abrasività del terreno e alla scala di Mohs." },
      { title: "Calibrazione dei Martelli DTH", desc: "Abbinamento dei martelli QL, DHD e Mission ai diametri delle punte per la massima energia cinetica." },
      { title: "Analisi di Usura & Durata", desc: "Monitoraggio dei tassi di usura e fatica delle punte in esercizio a diverse velocità di rotazione." },
      { title: "Verifica delle Scorte di Consumabili", desc: "Pianificazione dei cicli di scorta di martelli e punte DTH per evitare fermi operativi." }
    ],
    stats: [
      { val: "+300", label: "Audit delle Attrezzature" },
      { val: "15+ Marchi", label: "Supporto Compatibile" },
      { val: "4x", label: "Durata Utensili Maggiore" }
    ],
    cta: "Richiedi una Consulenza sulle Attrezzature"
  };

  const contentEs = {
    title: "Consultoría de Equipos de Perforación",
    badge: "Optimización de Equipos B2B",
    desc: "Elaboramos informes de ingeniería para seleccionar las brocas, martillos DTH y consumibles más adecuados según la dureza de la roca y el perfil del suelo.",
    longDesc: "En Vera Gold Enerji asesoramos a empresas mineras y geotécnicas B2B en la elección de los consumibles de perforación adecuados para reducir los costes operativos. Una superficie de broca o un modelo de martillo DTH equivocados pueden reducir la vida útil de la herramienta hasta 4 veces. Analizamos testigos de roca e informes geotécnicos para determinar las configuraciones QL, Mission o DHD más rentables.",
    features: [
      { title: "Ensayos de Dureza de la Roca", desc: "Selección de las formas de corte adecuadas según la abrasividad del suelo y la escala de Mohs." },
      { title: "Calibración de Martillos DTH", desc: "Combinación de martillos QL, DHD y Mission con los diámetros de broca para obtener la máxima energía cinética." },
      { title: "Análisis de Desgaste & Vida Útil", desc: "Seguimiento de las tasas de desgaste y fatiga de las brocas en servicio a distintas velocidades de rotación." },
      { title: "Auditoría de Inventario de Consumibles", desc: "Planificación de los ciclos de stock de martillos y brocas DTH para evitar paradas operativas." }
    ],
    stats: [
      { val: "+300", label: "Auditorías de Equipos" },
      { val: "15+ Marcas", label: "Soporte Compatible" },
      { val: "4x", label: "Mayor Vida Útil de las Herramientas" }
    ],
    cta: "Solicitar Consultoría de Equipos"
  };

  const current = { tr: contentTr, en: contentEn, de: contentDe, fr: contentFr, it: contentIt, es: contentEs }[language];

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
            <span>{tx({ tr: "Hizmetlere Dön", en: "Back to Services", de: "Zurück zu Dienstleistungen", fr: "Retour aux services", it: "Torna ai Servizi", es: "Volver a Servicios" })}</span>
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
              // {tx({ tr: "Danışmanlık Kapsamımız", en: "Scope of Consulting", de: "Beratungsumfang", fr: "Champ du Conseil", it: "Ambito della Consulenza", es: "Alcance de la Consultoría" })}
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
              <span>{tx({ tr: "İletişime Geç", en: "Get In Touch", de: "Kontakt aufnehmen", fr: "Nous Contacter", it: "Contattaci", es: "Contáctenos" })}</span>
              <Zap className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
