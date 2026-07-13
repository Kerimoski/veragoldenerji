"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { Eye, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  src: string;
  category: "machinery" | "equipment" | "operations";
  titleTr: string;
  titleEn: string;
}

export default function GalleryPage() {
  const { t } = useTranslation();
  const isTr = t("nav.home") === "Ana Sayfa";

  const galleryItems: GalleryItem[] = [
    // Machinery
    { src: "/veragaleri/Makine-6610-scaled.jpg", category: "machinery", titleTr: "Hidrolik Delgi Makinesi", titleEn: "Hydraulic Drilling Rig" },
    { src: "/veragaleri/Makine-6615-scaled.jpg", category: "machinery", titleTr: "Ağır Hizmet Paletli Sondaj", titleEn: "Heavy-Duty Crawler Drill" },
    { src: "/veragaleri/Makine-6616-scaled.jpg", category: "machinery", titleTr: "Rock Delici Makine Parkuru", titleEn: "Rock Drilling Fleet Unit" },
    { src: "/veragaleri/Makine-6621-scaled.jpg", category: "machinery", titleTr: "B2B Ağır İş Makinesi", titleEn: "B2B Heavy Construction Machinery" },
    { src: "/veragaleri/Makine-6632-scaled.jpg", category: "machinery", titleTr: "Şantiye Kaya Kırıcı & Delici", titleEn: "Site Rock Breaker & Driller" },
    { src: "/veragaleri/Makine-6633-scaled.jpg", category: "machinery", titleTr: "Yüksek Torklu Delme Ünitesi", titleEn: "High-Torque Drilling Unit" },
    { src: "/veragaleri/Makine-6639-scaled.jpg", category: "machinery", titleTr: "Mobil Kompresör Entegre Delici", titleEn: "Mobile Compressor Integrated Rig" },
    { src: "/veragaleri/MZ460Y-KAZIK-CAKMA-MAKINASI-2.png", category: "machinery", titleTr: "MZ460Y Kazık Çakma Makinesi", titleEn: "MZ460Y Pile Driving Machine" },
    { src: "/veragaleri/Rock-makinasi-fd580.jpeg", category: "machinery", titleTr: "FD580 Ağır Kaya Makinesi", titleEn: "FD580 Heavy Rock Machine" },

    // Equipment & Filters
    { src: "/veragaleri/Filtre-6579-scaled.jpg", category: "equipment", titleTr: "Endüstriyel Hava Filtresi Grubu", titleEn: "Industrial Air Filter Group" },
    { src: "/veragaleri/Filtre-6582-scaled.jpg", category: "equipment", titleTr: "Ağır Hizmet Yağ Seperatörü", titleEn: "Heavy-Duty Oil Separator" },
    { src: "/veragaleri/Filtre-6584-scaled.jpg", category: "equipment", titleTr: "Kompresör Filtre Sarf Malzemeleri", titleEn: "Compressor Filter Consumables" },
    { src: "/veragaleri/Filtre-6597-scaled.jpg", category: "equipment", titleTr: "Yüksek Basınç Dayanımlı Filtre", titleEn: "High-Pressure Resistance Filter" },
    { src: "/veragaleri/Filtre-6600-scaled.jpg", category: "equipment", titleTr: "Hidrolik Sıvı Filtre Grubu", titleEn: "Hydraulic Fluid Filter Element" },
    { src: "/veragaleri/Filtre-6608-scaled.jpg", category: "equipment", titleTr: "Motor Emme Manifoldu Filtresi", titleEn: "Engine Intake Manifold Filter" },
    { src: "/veragaleri/Filtre-6643-scaled.jpg", category: "equipment", titleTr: "Yakıt Seperatör Filtre Başlığı", titleEn: "Fuel Separator Filter Cap" },
    { src: "/veragaleri/Filtre-6645-scaled.jpg", category: "equipment", titleTr: "Orijinal Yedek Parça Filtresi", titleEn: "OEM Replacement Filter" },
    { src: "/veragaleri/Bidon-6664-scaled.jpg", category: "equipment", titleTr: "Özel Hidrolik Yağ Katkıları", titleEn: "Special Hydraulic Oil Additives" },
    { src: "/veragaleri/Bidon-6665-scaled.jpg", category: "equipment", titleTr: "Madeni Yağ & Bakım Sıvısı", titleEn: "Lubricating Oil & Maintenance Fluid" },
    { src: "/veragaleri/Bidon-6669-scaled.jpg", category: "equipment", titleTr: "B2B Endüstriyel Şantiye Sıvıları", titleEn: "B2B Industrial Site Fluids" },
    { src: "/veragaleri/Parca-6705-scaled.jpg", category: "equipment", titleTr: "Orijinal DTH Çekiç Piston Başlığı", titleEn: "OEM DTH Hammer Piston Head" },

    // Operations
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-15.24.20-2.jpeg", category: "operations", titleTr: "Aktif Kaya Delme Şantiyesi", titleEn: "Active Rock Drilling Site" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-15.24.20-4.jpeg", category: "operations", titleTr: "Paletli Delici Çakım Operasyonu", titleEn: "Crawler Drill Piling Operation" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-15.24.21-1.jpeg", category: "operations", titleTr: "Balkanlar Şantiye Kurulum Çalışması", titleEn: "Balkans Site Setup Preparation" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.27.56.jpeg", category: "operations", titleTr: "GES Altyapı Çakım Aşaması", titleEn: "Solar Array Pile Foundation Phase" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.32.42-1.jpeg", category: "operations", titleTr: "Karot Numunesi Delgi Testi", titleEn: "Core Geotechnical Sample Drill Test" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.32.42-6.jpeg", category: "operations", titleTr: "Yüksek Torklu Auger Delgi Kontrolü", titleEn: "High-Torque Auger Drill Quality Control" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.34.59-4.jpeg", category: "operations", titleTr: "Zemin Ankraj & Şev Güçlendirme", titleEn: "Soil Anchor & Slope Reinforcement" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.56.17-10.jpeg", category: "operations", titleTr: "Endüstriyel Su Sondaj Kulesi", titleEn: "Industrial Water Boring Derrick" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.56.17-3.jpeg", category: "operations", titleTr: "Operatörlü Sondaj Çalışmaları", titleEn: "Operator Assisted Well Drilling" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.56.17-5.jpeg", category: "operations", titleTr: "Derin Zemin Karot Sondajı", titleEn: "Deep Geotechnical Core Boring" },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.56.17-8.jpeg", category: "operations", titleTr: "Ağır İş Makinesi Nakliyesi", titleEn: "Heavy Machinery Logistics Dispatch" },
    { src: "/veragaleri/mmexport1726125636859.jpg", category: "operations", titleTr: "Avrupa GES Sahası Altyapı Teslimi", titleEn: "European Solar Farm Substructure Handover" }
  ];

  const [activeTab, setActiveTab] = useState<"all" | "machinery" | "equipment" | "operations">("all");
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
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden bg-white text-zinc-900">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#C59B27]/3 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/30 bg-[#C59B27]/5 text-xs text-[#C59B27] font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isTr ? "Vera Gold Makine Parkuru" : "Vera Gold Fleet Gallery"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mb-4">
              {t("nav.gallery")}
            </h1>
            <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto font-semibold leading-relaxed">
              {isTr 
                ? "Saha operasyonlarımız, ağır hizmet makinelerimiz ve tedarik ettiğimiz orijinal yedek parçaların gerçek fotoğrafları."
                : "Real photos of our on-site B2B operations, heavy machinery fleet, and supplied replacement parts."}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-zinc-200 pb-6 max-w-2xl mx-auto">
            {[
              { id: "all", labelTr: "Tümü", labelEn: "All" },
              { id: "machinery", labelTr: "Makineler", labelEn: "Machinery" },
              { id: "equipment", labelTr: "Ekipman & Filtre", labelEn: "Equipment & Filters" },
              { id: "operations", labelTr: "Saha Operasyonları", labelEn: "Field Operations" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                    : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
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
                  key={item.src}
                  className="group relative h-72 rounded-3xl border border-zinc-200 bg-zinc-50 overflow-hidden shadow-2xs cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <Image
                    src={item.src}
                    alt={isTr ? item.titleTr : item.titleEn}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="self-end w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#C59B27] font-extrabold uppercase tracking-widest mb-1 block">
                        {item.category === "machinery" ? (isTr ? "Makine" : "Machinery") : item.category === "equipment" ? (isTr ? "Ekipman" : "Equipment") : (isTr ? "Operasyon" : "Operation")}
                      </span>
                      <h3 className="text-sm font-bold text-white leading-snug">
                        {isTr ? item.titleTr : item.titleEn}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-black/95 z-[9999] flex flex-col justify-between py-6 px-6 backdrop-blur-sm"
          >
            {/* Close & Header */}
            <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full">
              <div className="text-xs font-semibold text-zinc-400">
                {isTr ? "Vera Gold Enerji - B2B Fotoğraf Arşivi" : "Vera Gold Enerji - B2B Photo Archive"}
              </div>
              <button 
                onClick={() => setLightboxIndex(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slider Content */}
            <div className="relative flex items-center justify-center max-w-5xl mx-auto w-full h-[70vh]">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white cursor-pointer z-50 focus:outline-none"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Active Image container */}
              <div className="relative w-full h-full max-h-[600px] flex items-center justify-center">
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={isTr ? filteredItems[lightboxIndex].titleTr : filteredItems[lightboxIndex].titleEn}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white cursor-pointer z-50 focus:outline-none"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Image Details Footer */}
            <div className="text-center text-white max-w-xl mx-auto w-full">
              <h3 className="text-base font-bold mb-1">
                {isTr ? filteredItems[lightboxIndex].titleTr : filteredItems[lightboxIndex].titleEn}
              </h3>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
                {filteredItems[lightboxIndex].category === "machinery" ? (isTr ? "Makineler" : "Machinery") : filteredItems[lightboxIndex].category === "equipment" ? (isTr ? "Ekipman & Yedek Parça" : "Equipment & Spares") : (isTr ? "Saha Çalışmaları" : "On-Site Works")} 
                {" | "} {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
