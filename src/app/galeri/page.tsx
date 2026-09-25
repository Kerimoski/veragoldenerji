"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { Eye, X, ChevronLeft, ChevronRight, Sparkles, Video, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  src: string;
  category: "machinery" | "kazik" | "dth" | "kompresor" | "equipment" | "operations" | "stokfoto";
  titleTr: string;
  titleEn: string;
}

export default function GalleryPage() {
  const { t, language } = useTranslation();
  const isTr = language === "tr";

  const galleryItems: GalleryItem[] = [
    // Real Field & Machinery Photos
    { src: "/gorseller/rock-vera/vera300-genel.jpg", category: "machinery", titleTr: "VERA300 Kaya Delici Kule", titleEn: "VERA300 Rock Drilling Rig" },
    { src: "/gorseller/rock-vera/vera300-mast.jpg", category: "machinery", titleTr: "VERA300 Delgi Kafası & Mast Detayı", titleEn: "VERA300 Drill Head & Mast Detail" },
    { src: "/gorseller/rock-vera/vera500-genel.jpg", category: "machinery", titleTr: "VERA500 Kaya Delici Kule", titleEn: "VERA500 Rock Drilling Rig" },
    { src: "/veragaleri/Makine-6610-scaled.jpg", category: "machinery", titleTr: "Hidrolik Delgi Makinesi", titleEn: "Hydraulic Drilling Rig" },
    { src: "/veragaleri/Makine-6615-scaled.jpg", category: "machinery", titleTr: "Ağır Hizmet Paletli Sondaj", titleEn: "Heavy-Duty Crawler Drill" },
    { src: "/veragaleri/Makine-6616-scaled.jpg", category: "machinery", titleTr: "Rock Delici Makine Parkuru", titleEn: "Rock Drilling Fleet Unit" },
    { src: "/veragaleri/Makine-6621-scaled.jpg", category: "machinery", titleTr: "B2B Ağır İş Makinesi", titleEn: "B2B Heavy Construction Machinery" },
    { src: "/veragaleri/MZ460Y-KAZIK-CAKMA-MAKINASI-2.png", category: "machinery", titleTr: "MZ460Y Kazık Çakma Makinesi", titleEn: "MZ460Y Pile Driving Machine" },
    { src: "/veragaleri/Rock-makinasi-fd580.jpeg", category: "machinery", titleTr: "Paletli Rock Makinesi Saha Çekimi", titleEn: "Crawler Rock Drill Field Shot" },

    // Kazık Çakma & Orteco Aksesuarları
    { src: "/gorseller/kazik-cakma-aksesuar/GPS.png", category: "kazik", titleTr: "Orteco Otomatik GPS Konumlandırma Sistemi", titleEn: "Orteco Automated GPS Positioning System" },
    { src: "/gorseller/kazik-cakma-aksesuar/gps_2.png", category: "kazik", titleTr: "GES Sahası Milimetrik GPS Kontrol Ünitesi", titleEn: "Solar Array GPS Guidance Control Unit" },
    { src: "/gorseller/kazik-cakma-aksesuar/LASER1.png", category: "kazik", titleTr: "Lazer Dikey Hizalama Kiti", titleEn: "Laser Vertical Alignment Kit" },
    { src: "/gorseller/kazik-cakma-aksesuar/Laser_2-elab.png", category: "kazik", titleTr: "Otomatik Lazer Seviye Sensörü", titleEn: "Automatic Laser Leveling Sensor" },
    { src: "/gorseller/kazik-cakma-aksesuar/Down_the_hole_hammer_BASIC.png", category: "kazik", titleTr: "Dalıcı Çekiç (DTH Hammer) Aksesuarı", titleEn: "Down-the-Hole Hammer Attachment" },
    { src: "/gorseller/kazik-cakma-aksesuar/nuovi_motori.png", category: "kazik", titleTr: "Stage 5 / Tier 4 Final Yanmar Motor Ünitesi", titleEn: "Stage 5 / Tier 4 Final Yanmar Engine Powerpack" },

    // DTH Çekiç & Bits (Hammer Bits)
    { src: "/gorseller/dth-hammer-bits/WhatsApp_Image_2026-08-17_at_13.09.07_3.jpeg", category: "dth", titleTr: "Tungsten Karbür DTH Matkap Uçları (WT Serisi)", titleEn: "Tungsten Carbide DTH Drill Bits (WT Series)" },
    { src: "/gorseller/dth-hammer-bits/WhatsApp_Image_2026-08-17_at_13.09.07_1.jpeg", category: "dth", titleTr: "Ağır Hizmet Kaya Delici DTH Buton Bit", titleEn: "Heavy-Duty DTH Button Bit" },
    { src: "/gorseller/dth-hammer-bits/WhatsApp_Image_2026-08-17_at_13.09.07_2.jpeg", category: "dth", titleTr: "Yüksek Aşınma Dirençli DTH Delgi Ucu", titleEn: "High Wear Resistant DTH Drilling Bit" },
    { src: "/veragaleri/Parca-6705-scaled.jpg", category: "dth", titleTr: "Orijinal DTH Çekiç Piston Başlığı", titleEn: "OEM DTH Hammer Piston Head" },

    // Kompresör Grubu
    { src: "/gorseller/lgcy-18bar-kompresor/WhatsApp_Image_2026-08-11_at_14.48.40.jpeg", category: "kompresor", titleTr: "LGCY 18 Bar Römorklu Dizel Kompresör", titleEn: "LGCY 18 Bar Towable Diesel Compressor" },
    { src: "/gorseller/lgcy-18bar-kompresor/WhatsApp_Image_2026-08-11_at_14.48.40_2.jpeg", category: "kompresor", titleTr: "LGCY 220 HP Yuchai Motor Bölmesi", titleEn: "LGCY 220 HP Yuchai Engine Bay" },
    { src: "/gorseller/kompresor-kszj-23bar/kszj-1.jpg", category: "kompresor", titleTr: "KSZJ-29/23 23 Bar Yüksek Basınçlı Kompresör", titleEn: "KSZJ-29/23 23 Bar High Pressure Air Compressor" },
    { src: "/gorseller/kompresor-lgzj-25bar/lgzj-1.jpg", category: "kompresor", titleTr: "LGZJ-31/25 25 Bar İki Kademeli Dizel Kompresör", titleEn: "LGZJ-31/25 25 Bar Two-Stage Diesel Compressor" },

    // Equipment & Filters
    { src: "/veragaleri/Filtre-6579-scaled.jpg", category: "equipment", titleTr: "Endüstriyel Hava Filtresi Grubu", titleEn: "Industrial Air Filter Group" },
    { src: "/veragaleri/Filtre-6582-scaled.jpg", category: "equipment", titleTr: "Ağır Hizmet Yağ Seperatörü", titleEn: "Heavy-Duty Oil Separator" },
    { src: "/veragaleri/Filtre-6584-scaled.jpg", category: "equipment", titleTr: "Kompresör Filtre Sarf Malzemeleri", titleEn: "Compressor Filter Consumables" },
    { src: "/veragaleri/Filtre-6597-scaled.jpg", category: "equipment", titleTr: "Yüksek Basınç Dayanımlı Filtre", titleEn: "High-Pressure Resistance Filter" },
    { src: "/veragaleri/Filtre-6600-scaled.jpg", category: "equipment", titleTr: "Hidrolik Sıvı Filtre Grubu", titleEn: "Hydraulic Fluid Filter Element" },
    { src: "/veragaleri/Filtre-6645-scaled.jpg", category: "equipment", titleTr: "Orijinal Yedek Parça Filtresi", titleEn: "OEM Replacement Filter" },
    { src: "/veragaleri/Bidon-6664-scaled.jpg", category: "equipment", titleTr: "Özel Hidrolik Yağ Katkıları", titleEn: "Special Hydraulic Oil Additives" },
    { src: "/veragaleri/Bidon-6665-scaled.jpg", category: "equipment", titleTr: "Madeni Yağ & Bakım Sıvısı", titleEn: "Lubricating Oil & Maintenance Fluid" },

    // Field Operations
    { src: "/gorseller/sondaj-makineleri/WhatsApp_Image_2026-08-11_at_14.48.54.jpeg", category: "operations", titleTr: "Derin Su Sondaj Kulesi Saha Kurulumu", titleEn: "Deep Water Boring Derrick Field Setup" },
    { src: "/gorseller/sondaj-makineleri/WhatsApp_Image_2026-08-11_at_14.48.55_1.jpeg", category: "operations", titleTr: "Su Kuyusu Borulama & Çamur Havuzu", titleEn: "Water Well Casing & Mud Circulation Pit" },
    { src: "/gorseller/sondaj-makineleri/WhatsApp_Image_2026-08-11_at_14.48.56.jpeg", category: "operations", titleTr: "Ağır Hizmet Paletli Sondaj Kulesi", titleEn: "Heavy-Duty Tracked Drilling Derrick" },
    { src: "/gorseller/sondaj-makineleri/WhatsApp_Image_2026-08-11_at_14.48.57.jpeg", category: "operations", titleTr: "Balkanlar Şantiyesi Canlı Delgi Testi", titleEn: "Balkans Site Live Drilling Test" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-15.24.20-2.jpeg", category: "operations", titleTr: "Aktif Kaya Delme Şantiyesi", titleEn: "Active Rock Drilling Site" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.27.56.jpeg", category: "operations", titleTr: "GES Altyapı Çakım Aşaması", titleEn: "Solar Array Pile Foundation Phase" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.34.59-4.jpeg", category: "operations", titleTr: "Zemin Ankraj & Şev Güçlendirme", titleEn: "Soil Anchor & Slope Reinforcement" },

    // Stock Photography Collection
    { src: "/stokfoto/aerial-shot-of-water-well-drilling-rig-boring-dowi-2024-10-18-10-11-35-utc.jpeg", category: "stokfoto", titleTr: "Havadan Su Sondaj Kulesi Görünümü", titleEn: "Aerial View of Water Well Rig" },
    { src: "/stokfoto/driller-in-an-open-pit-mine-porphyry-rock-materia-2023-11-27-05-03-42-utc.jpg", category: "stokfoto", titleTr: "Açık Ocak Maden Delgi Operasyonu", titleEn: "Open Pit Mining Rock Drilling" },
    { src: "/stokfoto/yellow-drilling-machine-drills-rock-in-a-quarry-2023-11-27-05-30-25-utc.jpg", category: "stokfoto", titleTr: "Taş Ocağı Yüksek Basınçlı Delgi", titleEn: "Quarry High Pressure Drilling Rig" },
    { src: "/stokfoto/well-auger-during-a-job-2023-11-27-05-24-57-utc.jpg", category: "stokfoto", titleTr: "Auger Zemin Temel Sondaj Burgusu", titleEn: "Heavy Well Auger Boring Unit" },
    { src: "/stokfoto/vertical-shot-of-a-drilling-machine-on-a-construct-2023-11-27-05-37-07-utc.jpg", category: "stokfoto", titleTr: "Dikey Kazık & Sondaj Kulesi", titleEn: "Vertical Piling Drilling Mast" },
    { src: "/stokfoto/driller-in-a-quarry-mine-porphyry-rocks-mining-i-2023-11-27-05-20-13-utc.jpg", category: "stokfoto", titleTr: "Porfir Kayaç Patlatma Delgisi", titleEn: "Porphyry Rock Blast Hole Drill" }
  ];

  const [activeTab, setActiveTab] = useState<"all" | "machinery" | "kazik" | "dth" | "kompresor" | "equipment" | "operations" | "stokfoto">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#C59B27]/10 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// {isTr ? "Vera Gold Makine & Saha Portföyü" : "Vera Gold Fleet Portfolio"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 font-sans">
              {isTr ? "Galeri" : "Gallery"}
            </h1>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
              {isTr 
                ? "Saha operasyonlarımız, ağır hizmet makinelerimiz, yüksek çözünürlüklü stok fotoğraflar ve orijinal yedek parçaların galeri koleksiyonu."
                : "Real photos of our B2B field operations, heavy machinery fleet, HD stock photography, and OEM replacement parts."}
            </p>

            <div className="mt-6">
              <Link
                href="/operasyonlar"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-zinc-700 bg-zinc-900 text-white font-mono text-xs uppercase font-bold hover:border-[#C59B27] hover:text-[#C59B27] transition-all"
              >
                <Video className="w-4 h-4 text-[#C59B27]" />
                <span>{isTr ? "Canlı Saha Videolarını İzle (MP4)" : "Watch Live Field Videos (MP4)"}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C59B27]" />
              </Link>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-zinc-800 pb-6 max-w-5xl mx-auto">
            {[
              { id: "all", labelTr: "Tümü", labelEn: "All" },
              { id: "machinery", labelTr: "Makineler & Deliciler", labelEn: "Machinery & Drills" },
              { id: "kazik", labelTr: "Kazık Çakma & Aksesuar", labelEn: "Piling & Accessories" },
              { id: "dth", labelTr: "DTH Çekiç & Bits", labelEn: "DTH Hammers & Bits" },
              { id: "kompresor", labelTr: "Kompresör Grubu", labelEn: "Compressors" },
              { id: "equipment", labelTr: "Ekipman & Filtre", labelEn: "Equipment & Filters" },
              { id: "operations", labelTr: "Saha Operasyonları", labelEn: "Field Operations" },
              { id: "stokfoto", labelTr: "HD Stok Galerisi", labelEn: "HD Stock Photos" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#C59B27] text-white border-[#C59B27] shadow-md"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {isTr ? tab.labelTr : tab.labelEn}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={`${item.src}-${idx}`}
                  className="group relative h-72 rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-xl cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <Image
                    src={item.src}
                    alt={isTr ? item.titleTr : item.titleEn}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Info Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest bg-zinc-950/90 text-[#C59B27] border border-zinc-800 backdrop-blur-md">
                        // {item.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-4 h-4 text-[#C59B27]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#C59B27] transition-colors leading-snug">
                        {isTr ? item.titleTr : item.titleEn}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-20 p-3 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-zinc-800/80 text-white hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav */}
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-zinc-800/80 text-white hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Body */}
            <div 
              className="relative max-w-5xl w-full h-[75vh] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col justify-end p-8"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={isTr ? filteredItems[lightboxIndex].titleTr : filteredItems[lightboxIndex].titleEn}
                fill
                className="object-contain"
              />
              <div className="relative z-10 bg-zinc-950/90 border border-zinc-800 p-4 rounded-2xl backdrop-blur-md">
                <span className="text-[10px] font-mono text-[#C59B27] uppercase tracking-widest font-extrabold block mb-1">
                  // {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {isTr ? filteredItems[lightboxIndex].titleTr : filteredItems[lightboxIndex].titleEn}
                </h3>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
