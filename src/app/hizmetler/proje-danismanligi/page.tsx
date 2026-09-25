"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowLeft, Sparkles, Zap, Shield } from "lucide-react";

export default function ProjeDanismanligiPage() {
  const { t: translate, tx } = useTranslation();

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
            <span>// {tx({ tr: "Saha Süreç Yönetimi", en: "Site Process Management", de: "Baustellen-Prozessmanagement", fr: "Gestion des Processus de Chantier", it: "Gestione dei Processi di Cantiere", es: "Gestión de Procesos de Obra" })}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-sans">
            {tx({ tr: "Proje & Saha Mühendisliği Danışmanlığı", en: "Project & Site Engineering Consulting", de: "Projekt- & Baustellen-Ingenieurberatung", fr: "Conseil en Ingénierie de Projet & Chantier", it: "Consulenza di Ingegneria di Progetto & Cantiere", es: "Consultoría de Ingeniería de Proyecto & Obra" })}
          </h1>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-4xl font-medium">
            {tx({ tr: "Büyük ölçekli GES santralleri, maden sahaları ve derin temel kazık projelerinde saha verimlilik ve zamanlama fizibiliteleri hazırlıyoruz.", en: "We provide site efficiency and timeline feasibility studies for utility-scale solar farms, quarry sites, and deep piling projects.", de: "Wir erstellen Effizienz- und Zeitplan-Machbarkeitsstudien für große Solarparks, Steinbrüche und Tiefgründungsprojekte.", fr: "Nous réalisons des études d'efficacité de chantier et de faisabilité des délais pour les grandes centrales solaires, les carrières et les projets de fondations profondes.", it: "Realizziamo studi di efficienza del cantiere e di fattibilità dei tempi per grandi impianti fotovoltaici, cave e progetti di fondazioni profonde.", es: "Realizamos estudios de eficiencia de obra y viabilidad de plazos para grandes plantas solares, canteras y proyectos de cimentación profunda." })}
          </p>

          <div className="relative h-72 md:h-96 w-full rounded-3xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl">
            <Image
              src="/veragaleri/WhatsApp-Image-2024-10-27-at-21.27.56.jpeg"
              alt="Proje Danışmanlığı"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/90 border border-zinc-800 text-center relative overflow-hidden shadow-2xl">
            <Shield className="w-12 h-12 text-[#C59B27] mx-auto mb-6" />
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
              {tx({ tr: "Proje Danışmanlığı Talebi", en: "Request Project Consulting", de: "Projektberatung anfordern", fr: "Demander un Conseil Projet", it: "Richiedi una Consulenza di Progetto", es: "Solicitar Consultoría de Proyecto" })}
            </h3>
            <Link
              href="/iletisim?service=project"
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
