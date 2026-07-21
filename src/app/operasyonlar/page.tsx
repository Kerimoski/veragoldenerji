"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { Play, Sparkles, ArrowUpRight, Eye, ShieldCheck, Video, Image as ImageIcon, X, Activity, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OperasyonlarPage() {
  const { t, language } = useTranslation();
  const isTr = language === "tr";

  const [activeTab, setActiveTab] = useState<"all" | "video" | "quarry" | "well" | "construction">("all");
  const [selectedMedia, setSelectedMedia] = useState<{ type: "image" | "video"; src: string; title: string; desc: string; tag: string } | null>(null);

  // Operational MP4 Videos
  const videos = [
    {
      id: "vid-1",
      src: "/makineler/17516652-uhd_2560_1440_30fps.mp4",
      title: isTr ? "Ağır Saha Sondaj Operasyonu (UHD)" : "Heavy Rig Field Drilling Operation (UHD)",
      desc: isTr ? "Zorlu granit ve sert kaya formasyonlarında 24 Bar DTH kule çalışması." : "24 Bar DTH drilling rig operating in hard granite rock formations.",
      tag: "UHD VIDEO // 4K RIG",
    },
    {
      id: "vid-2",
      src: "/makineler/10327270-hd_1080_1920_30fps.mp4",
      title: isTr ? "Dikey Kule Delgi Operasyonu (HD)" : "Vertical Mast Drilling Operation (HD)",
      desc: isTr ? "Derin temel ve kazık çakım öncesi pilot delik delme çalışması." : "Pilot hole drilling prior to deep foundation piling operations.",
      tag: "HD VIDEO // VERTICAL MAST",
    },
    {
      id: "vid-3",
      src: "/makineler/WhatsApp Video 2026-07-13 at 16.02.17.mp4",
      title: isTr ? "Şantiye Saha Çekimi (Mobil Servis)" : "On-Site Field Recording (Mobile Service)",
      desc: isTr ? "Vera Gold Enerji teknik ekibi tarafından sahadan canlı operasyon kaydı." : "Live operation recording captured by Vera Gold field engineers.",
      tag: "FIELD VIDEO // LIVE ACTION",
    },
  ];

  // 20 High-Res Stock Photos
  const photos = [
    {
      id: "stok-1",
      category: "well",
      src: "/stokfoto/aerial-shot-of-water-well-drilling-rig-boring-dowi-2024-10-18-10-11-35-utc.jpeg",
      title: isTr ? "Havadan Su Sondaj Kulesi Çekimi" : "Aerial Water Well Drilling Rig",
      desc: isTr ? "400 metre derinliğe ulaşan hidrolik kule ve çamur sirkülasyon havuzu." : "Hydraulic drilling mast with mud circulation pit reaching 400m depths.",
      tag: "AERIAL // WATER WELL",
    },
    {
      id: "stok-2",
      category: "quarry",
      src: "/stokfoto/driller-in-an-open-pit-mine-porphyry-rock-materia-2023-11-27-05-03-42-utc.jpg",
      title: isTr ? "Açık Ocak Maden Delgi Makinesi" : "Open Pit Mine Driller",
      desc: isTr ? "Porfir ve granit kaya patlatma delikleri delme operasyonu." : "Porphyry and granite rock blast hole drilling operation.",
      tag: "OPEN PIT // PORPHYRY DRILL",
    },
    {
      id: "stok-3",
      category: "quarry",
      src: "/stokfoto/yellow-drilling-machine-drills-rock-in-a-quarry-2023-11-27-05-30-25-utc.jpg",
      title: isTr ? "Sarı Kaya Delgi Makinesi Operasyonu" : "Yellow Rock Drilling Rig in Quarry",
      desc: isTr ? "Taş ocağında yüksek darbe enerjili DTH delici çekiç çalışması." : "High impact DTH hammer operating in stone quarry.",
      tag: "QUARRY // HEAVY DTH",
    },
    {
      id: "stok-4",
      category: "well",
      src: "/stokfoto/well-auger-during-a-job-2023-11-27-05-24-57-utc.jpg",
      title: isTr ? "Auger Temel Sondaj Burgusu" : "Heavy Duty Well Auger Rig",
      desc: isTr ? "Derin temel zemin ıslahı ve burgulu boru çakım operasyonu." : "Deep soil stabilization and continuous auger boring.",
      tag: "AUGER // SOIL BORING",
    },
    {
      id: "stok-5",
      category: "construction",
      src: "/stokfoto/vertical-shot-of-a-drilling-machine-on-a-construct-2023-11-27-05-37-07-utc.jpg",
      title: isTr ? "İnşaat Şantiyesi Dikey Sondaj Kulesi" : "Construction Site Vertical Mast",
      desc: isTr ? "Kentsel dönüşüm ve köprü viyadük ayaklarında kazık kulesi." : "Piling rig operating on urban bridge & foundation site.",
      tag: "CONSTRUCTION // VERTICAL MAST",
    },
    {
      id: "stok-6",
      category: "quarry",
      src: "/stokfoto/driller-in-a-quarry-mine-exploring-rock-material-2023-11-27-05-17-31-utc.jpg",
      title: isTr ? "Maden Sahası Jeoloji Uzman İncelemesi" : "Quarry Mining Geological Inspection",
      desc: isTr ? "Karot numuneleri ve kaya sertlik analizi yapan mühendisler." : "Engineers evaluating rock core samples and Mohs hardness.",
      tag: "GEOLOGY // FIELD AUDIT",
    },
    {
      id: "stok-7",
      category: "construction",
      src: "/stokfoto/building-activity-on-construction-site-close-up-v-2023-11-27-05-04-41-utc.jpg",
      title: isTr ? "Şantiye Temel Kazı ve Çakım Detayı" : "Construction Substructure Piling",
      desc: isTr ? "Endüstriyel tesis temelinde ağır makine ve kazık çakım kulesi." : "Heavy machinery driving posts on industrial building site.",
      tag: "SUBSTRUCTURE // PILING",
    },
    {
      id: "stok-8",
      category: "construction",
      src: "/stokfoto/greasing-points-inside-heavy-equipment-crawler-2023-11-27-05-18-39-utc.jpeg",
      title: isTr ? "Ağır Ekipman Palet & Yağlama Bakımı" : "Crawler Maintenance & Greasing",
      desc: isTr ? "7/24 şantiye başı mobil servis ve önleyici bakım operasyonu." : "24/7 mobile field service and preventive crawler greasing.",
      tag: "SERVICE // MAINTENANCE",
    },
    {
      id: "stok-9",
      category: "quarry",
      src: "/stokfoto/driller-in-a-quarry-mine-porphyry-rocks-mining-i-2023-11-27-05-20-13-utc.jpg",
      title: isTr ? "Maden Ocağı Porfir Kaya Delme" : "Porphyry Rock Mining Driller",
      desc: isTr ? "Maden sahasında basamak delgisi ve patlatma hazırlığı." : "Bench drilling and blast hole prep in quarry mine.",
      tag: "BENCH DRILLING // BLAST HOLE",
    },
    {
      id: "stok-10",
      category: "well",
      src: "/stokfoto/drilling-wells-in-the-ground-using-a-professional-2023-11-27-05-23-52-utc.jpg",
      title: isTr ? "Profesyonel Su Sondaj Çalışması" : "Professional Groundwater Boring",
      desc: isTr ? "Tarımsal ve endüstriyel su ihtiyacı için derin borulama." : "Deep casing pipe installation for agricultural groundwater.",
      tag: "GROUNDWATER // CASING",
    },
    {
      id: "stok-11",
      category: "quarry",
      src: "/stokfoto/extraction-of-stone-male-worker-next-to-stone-qua-2024-08-09-22-49-33-utc.jpg",
      title: isTr ? "Taş Çıkarma Sahasında Teknik Personel" : "Quarry Stone Extraction Worker",
      desc: isTr ? "Saha iş güvenliği ve operasyonel denetim ekibi." : "On-site safety officer and operational compliance team.",
      tag: "SAFETY // FIELD AUDIT",
    },
    {
      id: "stok-12",
      category: "construction",
      src: "/stokfoto/rock maikana yellow-excavator-digging-rocks-at-the-quarry-doin-2023-11-27-05-14-44-utc.jpg",
      title: isTr ? "Taş Ocağı Ağır İş Ekskavatörü" : "Heavy Quarry Excavator Digging Rocks",
      desc: isTr ? "Sert blok kayaların kırılması ve yüklenmesi." : "Heavy rock breaking and excavation in quarry pit.",
      tag: "EXCAVATION // ROCK BREAKING",
    },
  ];

  const filteredPhotos = activeTab === "all" ? photos : photos.filter((p) => p.category === activeTab);

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-zinc-950 text-white relative overflow-hidden">
        {/* Background Visual Grids */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#C59B27]/10 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">{t("nav.home")}</Link>
            <span>/</span>
            <span className="text-[#C59B27] font-bold">{t("nav.operations")}</span>
          </div>

          {/* Page Hero Header */}
          <div className="mb-16 border border-zinc-800 rounded-3xl p-8 md:p-12 bg-zinc-900/90 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl backdrop-blur-xl">
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>// {isTr ? "VERA GOLD FIELD MEDIA HUB" : "OPERATIONAL MEDIA HUB"}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 font-sans">
                {isTr ? "Saha Operasyonları & Canlı Medya" : "Field Operations & Live Media"}
              </h1>
              <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed mb-6">
                {isTr
                  ? "Maden ocakları, su sondaj kuyuları ve GES altyapı şantiyelerinde çalışan 100+ ağır makine filomuzun canlı saha çekimleri ve teknik operasyon kayıtları."
                  : "Live field recordings and technical operation logs from our 100+ heavy fleet operating across quarry mines, water wells, and solar substructures."}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-none bg-[#C59B27] hover:bg-[#b08920] text-white font-mono font-bold text-xs uppercase tracking-widest transition-colors shadow-md"
                >
                  <span>{isTr ? "Şantiye Destek Talebi" : "Request Field Support"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Video Cover Badge */}
            <div className="relative w-full md:w-80 h-52 md:h-64 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950">
              <Image
                src="/stokfoto/aerial-shot-of-water-well-drilling-rig-boring-dowi-2024-10-18-10-11-35-utc.jpeg"
                alt="Saha Operasyonları"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] font-mono text-[#C59B27] uppercase tracking-widest font-extrabold flex items-center gap-1.5 mb-1">
                  <Activity className="w-3 h-3 text-[#C59B27] animate-pulse" />
                  LIVE FIELD TELEMETRY
                </span>
                <span className="text-xs font-bold text-white uppercase">Avrupa & Balkanlar Saha Portföyü</span>
              </div>
            </div>
          </div>

          {/* Section 1: Operational MP4 Video Player Showcase */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-3">
              <Video className="w-5 h-5 text-[#C59B27]" />
              <h2 className="text-xl md:text-2xl font-mono uppercase font-black text-white">
                // {isTr ? "Operasyonel Canlı Saha Videoları (MP4)" : "Live Field Video Logins (MP4)"}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-zinc-900/90 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl hover:border-[#C59B27]/50 transition-all group flex flex-col justify-between"
                >
                  <div className="relative h-64 w-full bg-black overflow-hidden">
                    <video
                      src={vid.src}
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 z-10 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-md text-[9px] font-mono font-extrabold uppercase tracking-widest bg-zinc-950/90 text-[#C59B27] border border-zinc-800 backdrop-blur-md">
                        // {vid.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C59B27] transition-colors leading-snug">
                      {vid.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                      {vid.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: HD Stock Photo Media Showcase Grid */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4 mb-8">
              <div className="flex items-center gap-3">
                <ImageIcon className="w-5 h-5 text-[#C59B27]" />
                <h2 className="text-xl md:text-2xl font-mono uppercase font-black text-white">
                  // {isTr ? "Saha Fotoğraf Galerisi & Şantiye Görselleri" : "Field Photo Gallery & Site Imagery"}
                </h2>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { key: "all", label: isTr ? "Tümü" : "All" },
                  { key: "quarry", label: isTr ? "Maden & Taş Ocağı" : "Quarry Mining" },
                  { key: "well", label: isTr ? "Su Sondajı" : "Water Well" },
                  { key: "construction", label: isTr ? "İnşaat & Kazık" : "Piling & Substructure" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest rounded-none border transition-all cursor-pointer ${
                      activeTab === tab.key
                        ? "border-[#C59B27] bg-[#C59B27]/10 text-[#C59B27] font-bold"
                        : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-zinc-900/90 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl hover:border-[#C59B27]/50 hover:bg-zinc-900 transition-all group flex flex-col justify-between cursor-pointer"
                  onClick={() => setSelectedMedia({ type: "image", src: photo.src, title: photo.title, desc: photo.desc, tag: photo.tag })}
                >
                  <div className="relative h-60 w-full bg-zinc-950 overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-md text-[9px] font-mono font-extrabold uppercase tracking-widest bg-zinc-950/90 text-[#C59B27] border border-zinc-800 backdrop-blur-md">
                        // {photo.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-zinc-950/80 border border-zinc-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4 text-[#C59B27]" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#C59B27] transition-colors leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                      {photo.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Lightbox Photo Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-4xl w-full p-6 relative text-white shadow-2xl overflow-hidden">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[65vh] w-full rounded-2xl overflow-hidden mb-6 border border-zinc-800 bg-zinc-950">
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#C59B27] uppercase tracking-widest font-extrabold mb-1 block">
                    // {selectedMedia.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{selectedMedia.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{selectedMedia.desc}</p>
                </div>

                <Link
                  href="/iletisim"
                  onClick={() => setSelectedMedia(null)}
                  className="py-3 px-6 rounded-none bg-[#C59B27] hover:bg-[#b08920] text-white font-mono text-xs uppercase font-bold transition-all shadow-md shrink-0 cursor-pointer"
                >
                  {isTr ? "Saha Destek İste" : "Request Support"}
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
