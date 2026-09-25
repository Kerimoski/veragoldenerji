"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import { Video, Play, Activity, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const VideoShowcase: React.FC = () => {
  const { t, tx } = useTranslation();

  const videos = [
    {
      id: "vid-1",
      src: "/makineler/17516652-uhd_2560_1440_30fps.mp4",
      title: tx({ tr: "Ağır Saha Sondaj Kulesi Operasyonu (UHD)", en: "Heavy Rig Field Drilling Operation (UHD)", de: "Schwerer Bohreinsatz im Feld (UHD)", fr: "Opération de Forage Lourd sur Terrain (UHD)", it: "Perforazione Pesante sul Campo (UHD)", es: "Operación de Perforación Pesada en Campo (UHD)" }),
      subtitle: tx({ tr: "Zorlu granit zeminlerde 24 Bar DTH delgi kulesi canlı çalışması.", en: "24 Bar DTH drilling rig operating in hard granite rock formations.", de: "24-bar-DTH-Bohranlage im Einsatz in hartem Granitgestein.", fr: "Foreuse DTH 24 bar en action dans des formations de granit dur.", it: "Perforatrice DTH da 24 bar al lavoro in formazioni di granito duro.", es: "Perforadora DTH de 24 bar trabajando en formaciones de granito duro." }),
      code: "RIG-01 // UHD 4K",
      spec: tx({ tr: "24 Bar Basınç", en: "24 Bar Pressure", de: "24 bar Druck", fr: "Pression 24 bar", it: "Pressione 24 bar", es: "Presión 24 bar" }),
    },
    {
      id: "vid-2",
      src: "/makineler/10327270-hd_1080_1920_30fps.mp4",
      title: tx({ tr: "Dikey Kule Kazık Delgi Operasyonu (HD)", en: "Vertical Mast Piling Operation (HD)", de: "Rammeinsatz mit Vertikalmast (HD)", fr: "Battage avec Mât Vertical (HD)", it: "Infissione con Albero Verticale (HD)", es: "Hincado con Mástil Vertical (HD)" }),
      subtitle: tx({ tr: "Derin temel mühendisliği ve pilot delik delme sahası.", en: "Pilot hole drilling prior to deep foundation piling operations.", de: "Pilotbohrung vor Tiefgründungs-Rammarbeiten.", fr: "Forage pilote avant les travaux de fondations profondes.", it: "Foro pilota prima delle operazioni di fondazione profonda.", es: "Perforación piloto previa a los trabajos de cimentación profunda." }),
      code: "RIG-02 // HD MAST",
      spec: tx({ tr: "Dikey Mast Kulesi", en: "Vertical Mast Rig", de: "Vertikaler Mastturm", fr: "Mât Vertical", it: "Albero Verticale", es: "Mástil Vertical" }),
    },
    {
      id: "vid-3",
      src: "/makineler/WhatsApp Video 2026-07-13 at 16.02.17.mp4",
      title: tx({ tr: "Şantiye Canlı Mobil Saha Çekimi", en: "Live On-Site Mobile Field Recording", de: "Mobile Live-Aufnahme von der Baustelle", fr: "Enregistrement Mobile en Direct du Chantier", it: "Registrazione Mobile dal Vivo in Cantiere", es: "Grabación Móvil en Directo desde la Obra" }),
      subtitle: tx({ tr: "Vera Gold Enerji mühendisleri tarafından sahadan doğrudan operasyon kaydı.", en: "Live operation recording captured by Vera Gold field engineers.", de: "Live-Aufnahme eines Einsatzes durch Vera-Gold-Außendienstingenieure.", fr: "Enregistrement en direct réalisé par les ingénieurs terrain de Vera Gold.", it: "Registrazione dal vivo effettuata dagli ingegneri sul campo di Vera Gold.", es: "Grabación en directo realizada por los ingenieros de campo de Vera Gold." }),
      code: "FIELD-03 // LIVE RECORD",
      spec: tx({ tr: "7/24 Saha Destek", en: "24/7 Field Support", de: "24/7 Vor-Ort-Support", fr: "Assistance Terrain 24/7", it: "Supporto sul Campo 24/7", es: "Soporte en Campo 24/7" }),
    },
  ];

  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="py-28 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-800/80">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,155,39,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
              <Video className="w-3.5 h-3.5 text-[#C59B27] animate-pulse" />
              <span>// {tx({ tr: "CANLI SAHA MEDYA MERKEZİ", en: "LIVE FIELD MEDIA HUB", de: "LIVE-FELDMEDIENZENTRUM", fr: "CENTRE MÉDIA TERRAIN EN DIRECT", it: "HUB MEDIA LIVE DAL CAMPO", es: "CENTRO MULTIMEDIA DE CAMPO EN DIRECTO" })}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white font-sans">
              {tx({ tr: "Saha Operasyon Videoları", en: "Field Operation Videos", de: "Videos unserer Feldeinsätze", fr: "Vidéos de Nos Opérations Terrain", it: "Video delle Operazioni sul Campo", es: "Vídeos de Operaciones de Campo" })}
            </h2>
          </div>

          <p className="text-zinc-400 text-sm md:text-base max-w-md font-medium leading-relaxed">
            {tx({ tr: "Avrupa ve Balkanlar genelindeki şantiyelerimizde çalışan ağır makine filomuzun yüksek çözünürlüklü canlı video yayını.", en: "High-definition video streams capturing our heavy fleet operating across European and Balkan construction sites.", de: "HD-Videos unserer Schwermaschinenflotte im Einsatz auf Baustellen in Europa und auf dem Balkan.", fr: "Vidéos haute définition de notre flotte d'engins lourds en action sur les chantiers d'Europe et des Balkans.", it: "Video in alta definizione della nostra flotta di macchine pesanti al lavoro nei cantieri in Europa e nei Balcani.", es: "Vídeos en alta definición de nuestra flota de maquinaria pesada trabajando en obras de Europa y los Balcanes." })}
          </p>
        </motion.div>

        {/* Featured Video Player & Video Switcher Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Featured Video Player (Columns 1-7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-4 shadow-2xl flex flex-col justify-between overflow-hidden relative"
          >
            {/* Video Container */}
            <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-black border border-zinc-800">
              <video
                key={activeVideo.id}
                src={activeVideo.src}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Top Telemetry Tag Overlay */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1.5 rounded-md text-[10px] font-mono font-extrabold uppercase tracking-widest bg-zinc-950/90 text-[#C59B27] border border-zinc-800 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                  <Activity className="w-3.5 h-3.5 text-[#C59B27] animate-pulse" />
                  {activeVideo.code}
                </span>
              </div>
            </div>

            {/* Video Info Footnote */}
            <div className="pt-4 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-white font-sans">{activeVideo.title}</h3>
                <p className="text-zinc-400 text-xs mt-1 font-medium leading-relaxed">{activeVideo.subtitle}</p>
              </div>

              <div className="shrink-0 bg-zinc-950 border border-zinc-800 px-3.5 py-2 rounded-xl text-xs font-mono text-[#C59B27] font-bold">
                {activeVideo.spec}
              </div>
            </div>
          </motion.div>

          {/* Playlist Selection Items (Columns 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {videos.map((vid, idx) => {
              const isActive = activeVideo.id === vid.id;

              return (
                <div
                  key={vid.id}
                  onClick={() => setActiveVideo(vid)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isActive
                      ? "border-[#C59B27] bg-[#C59B27]/10 shadow-[0_10px_30px_rgba(197,155,39,0.15)]"
                      : "border-zinc-800 bg-zinc-900/70 hover:border-zinc-700 hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                      isActive ? "bg-[#C59B27] text-white border-[#C59B27]" : "bg-zinc-950 text-zinc-400 border-zinc-800"
                    }`}>
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-[#C59B27] font-bold uppercase tracking-widest">
                        0{idx + 1} // {vid.code}
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug mt-0.5">{vid.title}</h4>
                      <p className="text-zinc-400 text-[11px] line-clamp-1 mt-0.5">{vid.subtitle}</p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span className={`px-2.5 py-1 text-[9px] font-mono font-bold uppercase rounded-md border ${
                      isActive ? "bg-[#C59B27] text-white border-[#C59B27]" : "bg-zinc-950 text-zinc-400 border-zinc-800"
                    }`}>
                      {isActive ? "YAYINDA" : "OYNAT"}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* CTA Box */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/90 text-center flex flex-col items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#C59B27] mb-2" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                {tx({ tr: "Tüm Operasyon Görsellerini İnceleyin", en: "Explore All Operational Media", de: "Alle Einsatzmedien ansehen", fr: "Voir Tous les Médias Opérationnels", it: "Scopri Tutti i Media Operativi", es: "Ver Todos los Medios Operativos" })}
              </h4>
              <p className="text-zinc-400 text-xs mb-4">
                {tx({ tr: "20+ HD stok fotoğraf ve tam ekran video kütüphanesi.", en: "20+ HD stock photos and full video library.", de: "Über 20 HD-Stockfotos und die komplette Videobibliothek.", fr: "Plus de 20 photos HD et la vidéothèque complète.", it: "Oltre 20 foto HD e l'intera videoteca.", es: "Más de 20 fotos HD y la videoteca completa." })}
              </p>
              <Link
                href="/operasyonlar"
                className="w-full py-3 px-4 rounded-none bg-white hover:bg-[#C59B27] text-zinc-950 hover:text-white font-mono text-xs uppercase font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{tx({ tr: "Operasyonlar Sayfasına Git", en: "Go to Operations Hub", de: "Zum Einsatzzentrum", fr: "Aller au Centre Opérations", it: "Vai all'Hub Operativo", es: "Ir al Centro de Operaciones" })}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
