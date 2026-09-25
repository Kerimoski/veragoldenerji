"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation, type LocalizedText } from "@/context/LanguageContext";
import { Eye, X, ChevronLeft, ChevronRight, Sparkles, Video, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  src: string;
  category: "machinery" | "kazik" | "dth" | "kompresor" | "equipment" | "operations" | "stokfoto";
  title: LocalizedText;
}

export default function GalleryPage() {
  const { t, tx } = useTranslation();

  const galleryTabs = [
    { id: "all", label: { tr: "Tümü", en: "All", de: "Alle", fr: "Tout", it: "Tutti", es: "Todos" } },
    { id: "machinery", label: { tr: "Makineler & Deliciler", en: "Machinery & Drills", de: "Maschinen & Bohrgeräte", fr: "Machines & Foreuses", it: "Macchine & Perforatrici", es: "Máquinas & Perforadoras" } },
    { id: "kazik", label: { tr: "Kazık Çakma & Aksesuar", en: "Piling & Accessories", de: "Rammen & Zubehör", fr: "Battage & Accessoires", it: "Infissione & Accessori", es: "Hincado & Accesorios" } },
    { id: "dth", label: { tr: "DTH Çekiç & Bits", en: "DTH Hammers & Bits", de: "DTH-Hämmer & Bohrkronen", fr: "Marteaux & Taillants DTH", it: "Martelli & Punte DTH", es: "Martillos & Brocas DTH" } },
    { id: "kompresor", label: { tr: "Kompresör Grubu", en: "Compressors", de: "Kompressoren", fr: "Compresseurs", it: "Compressori", es: "Compresores" } },
    { id: "equipment", label: { tr: "Ekipman & Filtre", en: "Equipment & Filters", de: "Ausrüstung & Filter", fr: "Équipements & Filtres", it: "Attrezzature & Filtri", es: "Equipos & Filtros" } },
    { id: "operations", label: { tr: "Saha Operasyonları", en: "Field Operations", de: "Feldeinsätze", fr: "Opérations Terrain", it: "Operazioni sul Campo", es: "Operaciones de Campo" } },
    { id: "stokfoto", label: { tr: "HD Stok Galerisi", en: "HD Stock Photos", de: "HD-Stockfotos", fr: "Photos HD", it: "Foto HD", es: "Fotos HD" } }
  ];

  const galleryItems: GalleryItem[] = [
    // Real Field & Machinery Photos
    { src: "/gorseller/rock-vera/vera300-genel.jpg", category: "machinery", title: { tr: "VERA300 Kaya Delici Kule", en: "VERA300 Rock Drilling Rig", de: "VERA300 Gesteinsbohrgerät", fr: "Foreuse de Roche VERA300", it: "Perforatrice da Roccia VERA300", es: "Perforadora de Roca VERA300" } },
    { src: "/gorseller/rock-vera/vera300-mast.jpg", category: "machinery", title: { tr: "VERA300 Delgi Kafası & Mast Detayı", en: "VERA300 Drill Head & Mast Detail", de: "VERA300 Bohrkopf- & Mastdetail", fr: "VERA300 Détail Tête de Forage & Mât", it: "VERA300 Dettaglio Testa di Perforazione & Albero", es: "VERA300 Detalle de Cabezal & Mástil" } },
    { src: "/gorseller/rock-vera/vera500-genel.jpg", category: "machinery", title: { tr: "VERA500 Kaya Delici Kule", en: "VERA500 Rock Drilling Rig", de: "VERA500 Gesteinsbohrgerät", fr: "Foreuse de Roche VERA500", it: "Perforatrice da Roccia VERA500", es: "Perforadora de Roca VERA500" } },
    { src: "/veragaleri/Makine-6610-scaled.jpg", category: "machinery", title: { tr: "Hidrolik Delgi Makinesi", en: "Hydraulic Drilling Rig", de: "Hydraulisches Bohrgerät", fr: "Foreuse Hydraulique", it: "Perforatrice Idraulica", es: "Perforadora Hidráulica" } },
    { src: "/veragaleri/Makine-6615-scaled.jpg", category: "machinery", title: { tr: "Ağır Hizmet Paletli Sondaj", en: "Heavy-Duty Crawler Drill", de: "Schwerlast-Raupenbohrgerät", fr: "Foreuse sur Chenilles Lourde", it: "Perforatrice Cingolata per Impieghi Gravosi", es: "Perforadora sobre Orugas de Alta Resistencia" } },
    { src: "/veragaleri/Makine-6616-scaled.jpg", category: "machinery", title: { tr: "Rock Delici Makine Parkuru", en: "Rock Drilling Fleet Unit", de: "Felsbohr-Flotteneinheit", fr: "Unité de la Flotte de Forage en Roche", it: "Unità della Flotta di Perforazione in Roccia", es: "Unidad de la Flota de Perforación en Roca" } },
    { src: "/veragaleri/Makine-6621-scaled.jpg", category: "machinery", title: { tr: "B2B Ağır İş Makinesi", en: "B2B Heavy Construction Machinery", de: "B2B-Schwerbaumaschinen", fr: "Engins de Chantier Lourds B2B", it: "Macchine Pesanti da Cantiere B2B", es: "Maquinaria Pesada de Construcción B2B" } },
    { src: "/veragaleri/MZ460Y-KAZIK-CAKMA-MAKINASI-2.png", category: "machinery", title: { tr: "MZ460Y Kazık Çakma Makinesi", en: "MZ460Y Pile Driving Machine", de: "MZ460Y Rammgerät", fr: "Sonneuse MZ460Y", it: "Battipalo MZ460Y", es: "Hincadora de Pilotes MZ460Y" } },
    { src: "/veragaleri/Rock-makinasi-fd580.jpeg", category: "machinery", title: { tr: "Paletli Rock Makinesi Saha Çekimi", en: "Crawler Rock Drill Field Shot", de: "Raupen-Gesteinsbohrgerät im Einsatz", fr: "Foreuse de Roche sur Chenilles sur le Terrain", it: "Perforatrice Cingolata da Roccia sul Campo", es: "Perforadora de Roca sobre Orugas en Campo" } },

    // Kazık Çakma & Orteco Aksesuarları
    { src: "/gorseller/kazik-cakma-aksesuar/GPS.png", category: "kazik", title: { tr: "Orteco Otomatik GPS Konumlandırma Sistemi", en: "Orteco Automated GPS Positioning System", de: "Orteco Automatisches GPS-Positionierungssystem", fr: "Système de Positionnement GPS Automatique Orteco", it: "Sistema di Posizionamento GPS Automatico Orteco", es: "Sistema de Posicionamiento GPS Automático Orteco" } },
    { src: "/gorseller/kazik-cakma-aksesuar/gps_2.png", category: "kazik", title: { tr: "GES Sahası Milimetrik GPS Kontrol Ünitesi", en: "Solar Array GPS Guidance Control Unit", de: "GPS-Steuereinheit für Solarparks", fr: "Unité de Guidage GPS pour Centrales Solaires", it: "Unità di Guida GPS per Impianti Fotovoltaici", es: "Unidad de Guiado GPS para Plantas Solares" } },
    { src: "/gorseller/kazik-cakma-aksesuar/LASER1.png", category: "kazik", title: { tr: "Lazer Dikey Hizalama Kiti", en: "Laser Vertical Alignment Kit", de: "Laser-Vertikalausrichtungskit", fr: "Kit d'Alignement Vertical Laser", it: "Kit di Allineamento Verticale Laser", es: "Kit de Alineación Vertical Láser" } },
    { src: "/gorseller/kazik-cakma-aksesuar/Laser_2-elab.png", category: "kazik", title: { tr: "Otomatik Lazer Seviye Sensörü", en: "Automatic Laser Leveling Sensor", de: "Automatischer Laser-Nivelliersensor", fr: "Capteur de Nivellement Laser Automatique", it: "Sensore di Livellamento Laser Automatico", es: "Sensor de Nivelación Láser Automático" } },
    { src: "/gorseller/kazik-cakma-aksesuar/Down_the_hole_hammer_BASIC.png", category: "kazik", title: { tr: "Dalıcı Çekiç (DTH Hammer) Aksesuarı", en: "Down-the-Hole Hammer Attachment", de: "Imlochhammer-Anbaugerät (DTH)", fr: "Accessoire Marteau Fond de Trou (DTH)", it: "Accessorio Martello DTH", es: "Accesorio de Martillo en Fondo (DTH)" } },
    { src: "/gorseller/kazik-cakma-aksesuar/nuovi_motori.png", category: "kazik", title: { tr: "Stage 5 / Tier 4 Final Yanmar Motor Ünitesi", en: "Stage 5 / Tier 4 Final Yanmar Engine Powerpack", de: "Stage 5 / Tier 4 Final Yanmar-Motoreinheit", fr: "Groupe Moteur Yanmar Stage 5 / Tier 4 Final", it: "Gruppo Motore Yanmar Stage 5 / Tier 4 Final", es: "Grupo Motor Yanmar Stage 5 / Tier 4 Final" } },

    // DTH Çekiç & Bits (Hammer Bits)
    { src: "/gorseller/dth-hammer-bits/WhatsApp_Image_2026-08-17_at_13.09.07_3.jpeg", category: "dth", title: { tr: "Tungsten Karbür DTH Matkap Uçları (WT Serisi)", en: "Tungsten Carbide DTH Drill Bits (WT Series)", de: "Wolframkarbid-DTH-Bohrkronen (WT-Serie)", fr: "Taillants DTH en Carbure de Tungstène (Série WT)", it: "Punte DTH in Carburo di Tungsteno (Serie WT)", es: "Brocas DTH de Carburo de Tungsteno (Serie WT)" } },
    { src: "/gorseller/dth-hammer-bits/WhatsApp_Image_2026-08-17_at_13.09.07_1.jpeg", category: "dth", title: { tr: "Ağır Hizmet Kaya Delici DTH Buton Bit", en: "Heavy-Duty DTH Button Bit", de: "Schwerlast-DTH-Stiftbohrkrone", fr: "Taillant à Boutons DTH Haute Résistance", it: "Punta DTH a Bottoni per Impieghi Gravosi", es: "Broca de Botones DTH de Alta Resistencia" } },
    { src: "/gorseller/dth-hammer-bits/WhatsApp_Image_2026-08-17_at_13.09.07_2.jpeg", category: "dth", title: { tr: "Yüksek Aşınma Dirençli DTH Delgi Ucu", en: "High Wear Resistant DTH Drilling Bit", de: "Hoch verschleißfeste DTH-Bohrkrone", fr: "Taillant DTH Haute Résistance à l'Usure", it: "Punta DTH ad Alta Resistenza all'Usura", es: "Broca DTH de Alta Resistencia al Desgaste" } },
    { src: "/veragaleri/Parca-6705-scaled.jpg", category: "dth", title: { tr: "Orijinal DTH Çekiç Piston Başlığı", en: "OEM DTH Hammer Piston Head", de: "OEM-DTH-Hammer-Kolbenkopf", fr: "Tête de Piston de Marteau DTH OEM", it: "Testa del Pistone del Martello DTH OEM", es: "Cabeza de Pistón de Martillo DTH OEM" } },

    // Kompresör Grubu
    { src: "/gorseller/lgcy-18bar-kompresor/WhatsApp_Image_2026-08-11_at_14.48.40.jpeg", category: "kompresor", title: { tr: "LGCY 18 Bar Römorklu Dizel Kompresör", en: "LGCY 18 Bar Towable Diesel Compressor", de: "LGCY 18 bar Fahrbarer Dieselkompressor", fr: "Compresseur Diesel Remorquable LGCY 18 bar", it: "Compressore Diesel Carrellato LGCY 18 bar", es: "Compresor Diésel Remolcable LGCY 18 bar" } },
    { src: "/gorseller/lgcy-18bar-kompresor/WhatsApp_Image_2026-08-11_at_14.48.40_2.jpeg", category: "kompresor", title: { tr: "LGCY 220 HP Yuchai Motor Bölmesi", en: "LGCY 220 HP Yuchai Engine Bay", de: "LGCY 220 PS Yuchai-Motorraum", fr: "Compartiment Moteur Yuchai 220 CV LGCY", it: "Vano Motore Yuchai 220 CV LGCY", es: "Compartimento del Motor Yuchai 220 CV LGCY" } },
    { src: "/gorseller/kompresor-kszj-23bar/kszj-1.jpg", category: "kompresor", title: { tr: "KSZJ-29/23 23 Bar Yüksek Basınçlı Kompresör", en: "KSZJ-29/23 23 Bar High Pressure Air Compressor", de: "KSZJ-29/23 23 bar Hochdruck-Luftkompressor", fr: "Compresseur d'Air Haute Pression KSZJ-29/23 23 bar", it: "Compressore d'Aria ad Alta Pressione KSZJ-29/23 23 bar", es: "Compresor de Aire de Alta Presión KSZJ-29/23 23 bar" } },
    { src: "/gorseller/kompresor-lgzj-25bar/lgzj-1.jpg", category: "kompresor", title: { tr: "LGZJ-31/25 25 Bar İki Kademeli Dizel Kompresör", en: "LGZJ-31/25 25 Bar Two-Stage Diesel Compressor", de: "LGZJ-31/25 25 bar Zweistufiger Dieselkompressor", fr: "Compresseur Diesel Bi-étagé LGZJ-31/25 25 bar", it: "Compressore Diesel Bistadio LGZJ-31/25 25 bar", es: "Compresor Diésel de Dos Etapas LGZJ-31/25 25 bar" } },

    // Equipment & Filters
    { src: "/veragaleri/Filtre-6579-scaled.jpg", category: "equipment", title: { tr: "Endüstriyel Hava Filtresi Grubu", en: "Industrial Air Filter Group", de: "Industrielle Luftfiltergruppe", fr: "Groupe de Filtres à Air Industriels", it: "Gruppo Filtri Aria Industriali", es: "Grupo de Filtros de Aire Industriales" } },
    { src: "/veragaleri/Filtre-6582-scaled.jpg", category: "equipment", title: { tr: "Ağır Hizmet Yağ Seperatörü", en: "Heavy-Duty Oil Separator", de: "Schwerlast-Ölabscheider", fr: "Séparateur d'Huile Haute Résistance", it: "Separatore d'Olio per Impieghi Gravosi", es: "Separador de Aceite de Alta Resistencia" } },
    { src: "/veragaleri/Filtre-6584-scaled.jpg", category: "equipment", title: { tr: "Kompresör Filtre Sarf Malzemeleri", en: "Compressor Filter Consumables", de: "Kompressorfilter-Verbrauchsmaterial", fr: "Consommables de Filtration pour Compresseur", it: "Filtri di Consumo per Compressori", es: "Consumibles de Filtración para Compresor" } },
    { src: "/veragaleri/Filtre-6597-scaled.jpg", category: "equipment", title: { tr: "Yüksek Basınç Dayanımlı Filtre", en: "High-Pressure Resistance Filter", de: "Hochdruckbeständiger Filter", fr: "Filtre Résistant à la Haute Pression", it: "Filtro Resistente all'Alta Pressione", es: "Filtro Resistente a Alta Presión" } },
    { src: "/veragaleri/Filtre-6600-scaled.jpg", category: "equipment", title: { tr: "Hidrolik Sıvı Filtre Grubu", en: "Hydraulic Fluid Filter Element", de: "Hydraulikölfilter-Element", fr: "Élément Filtrant pour Fluide Hydraulique", it: "Elemento Filtrante per Fluido Idraulico", es: "Elemento Filtrante para Fluido Hidráulico" } },
    { src: "/veragaleri/Filtre-6645-scaled.jpg", category: "equipment", title: { tr: "Orijinal Yedek Parça Filtresi", en: "OEM Replacement Filter", de: "OEM-Ersatzfilter", fr: "Filtre de Rechange OEM", it: "Filtro di Ricambio OEM", es: "Filtro de Repuesto OEM" } },
    { src: "/veragaleri/Bidon-6664-scaled.jpg", category: "equipment", title: { tr: "Özel Hidrolik Yağ Katkıları", en: "Special Hydraulic Oil Additives", de: "Spezielle Hydrauliköl-Additive", fr: "Additifs Spéciaux pour Huile Hydraulique", it: "Additivi Speciali per Olio Idraulico", es: "Aditivos Especiales para Aceite Hidráulico" } },
    { src: "/veragaleri/Bidon-6665-scaled.jpg", category: "equipment", title: { tr: "Madeni Yağ & Bakım Sıvısı", en: "Lubricating Oil & Maintenance Fluid", de: "Schmieröl & Wartungsflüssigkeit", fr: "Huile de Lubrification & Fluide d'Entretien", it: "Olio Lubrificante & Fluido di Manutenzione", es: "Aceite Lubricante & Fluido de Mantenimiento" } },

    // Field Operations
    { src: "/gorseller/sondaj-makineleri/WhatsApp_Image_2026-08-11_at_14.48.54.jpeg", category: "operations", title: { tr: "Derin Su Sondaj Kulesi Saha Kurulumu", en: "Deep Water Boring Derrick Field Setup", de: "Aufbau eines Tiefbrunnen-Bohrturms", fr: "Installation d'un Mât de Forage d'Eau Profond", it: "Allestimento di una Torre per Pozzi Profondi", es: "Montaje de una Torre de Perforación de Pozos Profundos" } },
    { src: "/gorseller/sondaj-makineleri/WhatsApp_Image_2026-08-11_at_14.48.55_1.jpeg", category: "operations", title: { tr: "Su Kuyusu Borulama & Çamur Havuzu", en: "Water Well Casing & Mud Circulation Pit", de: "Brunnenverrohrung & Spülungsgrube", fr: "Tubage de Puits & Bassin de Circulation de Boue", it: "Tubaggio del Pozzo & Vasca di Circolazione Fanghi", es: "Entubado de Pozo & Balsa de Circulación de Lodo" } },
    { src: "/gorseller/sondaj-makineleri/WhatsApp_Image_2026-08-11_at_14.48.56.jpeg", category: "operations", title: { tr: "Ağır Hizmet Paletli Sondaj Kulesi", en: "Heavy-Duty Tracked Drilling Derrick", de: "Schwerlast-Raupenbohrturm", fr: "Mât de Forage sur Chenilles Haute Résistance", it: "Torre di Perforazione Cingolata per Impieghi Gravosi", es: "Torre de Perforación sobre Orugas de Alta Resistencia" } },
    { src: "/gorseller/sondaj-makineleri/WhatsApp_Image_2026-08-11_at_14.48.57.jpeg", category: "operations", title: { tr: "Balkanlar Şantiyesi Canlı Delgi Testi", en: "Balkans Site Live Drilling Test", de: "Live-Bohrtest auf einer Balkan-Baustelle", fr: "Test de Forage en Direct sur un Chantier des Balkans", it: "Test di Perforazione dal Vivo in un Cantiere nei Balcani", es: "Prueba de Perforación en Directo en una Obra de los Balcanes" } },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-15.24.20-2.jpeg", category: "operations", title: { tr: "Aktif Kaya Delme Şantiyesi", en: "Active Rock Drilling Site", de: "Aktive Felsbohr-Baustelle", fr: "Chantier de Forage en Roche Actif", it: "Cantiere di Perforazione in Roccia Attivo", es: "Obra de Perforación en Roca Activa" } },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.27.56.jpeg", category: "operations", title: { tr: "GES Altyapı Çakım Aşaması", en: "Solar Array Pile Foundation Phase", de: "Pfahlgründungsphase im Solarpark", fr: "Phase de Fondation sur Pieux d'une Centrale Solaire", it: "Fase di Fondazione su Pali dell'Impianto Fotovoltaico", es: "Fase de Cimentación con Pilotes de la Planta Solar" } },
    { src: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.34.59-4.jpeg", category: "operations", title: { tr: "Zemin Ankraj & Şev Güçlendirme", en: "Soil Anchor & Slope Reinforcement", de: "Bodenanker & Hangverstärkung", fr: "Ancrage de Sol & Renforcement de Talus", it: "Ancoraggio del Terreno & Rinforzo dei Pendii", es: "Anclaje de Suelo & Refuerzo de Taludes" } },

    // Stock Photography Collection
    { src: "/stokfoto/aerial-shot-of-water-well-drilling-rig-boring-dowi-2024-10-18-10-11-35-utc.jpeg", category: "stokfoto", title: { tr: "Havadan Su Sondaj Kulesi Görünümü", en: "Aerial View of Water Well Rig", de: "Luftaufnahme einer Brunnenbohranlage", fr: "Vue Aérienne d'une Foreuse de Puits", it: "Vista Aerea di una Perforatrice per Pozzi", es: "Vista Aérea de una Perforadora de Pozos" } },
    { src: "/stokfoto/driller-in-an-open-pit-mine-porphyry-rock-materia-2023-11-27-05-03-42-utc.jpg", category: "stokfoto", title: { tr: "Açık Ocak Maden Delgi Operasyonu", en: "Open Pit Mining Rock Drilling", de: "Felsbohrung im Tagebau", fr: "Forage en Roche en Mine à Ciel Ouvert", it: "Perforazione in Roccia in Miniera a Cielo Aperto", es: "Perforación en Roca en Mina a Cielo Abierto" } },
    { src: "/stokfoto/yellow-drilling-machine-drills-rock-in-a-quarry-2023-11-27-05-30-25-utc.jpg", category: "stokfoto", title: { tr: "Taş Ocağı Yüksek Basınçlı Delgi", en: "Quarry High Pressure Drilling Rig", de: "Hochdruck-Bohrgerät im Steinbruch", fr: "Foreuse Haute Pression en Carrière", it: "Perforatrice ad Alta Pressione in Cava", es: "Perforadora de Alta Presión en Cantera" } },
    { src: "/stokfoto/well-auger-during-a-job-2023-11-27-05-24-57-utc.jpg", category: "stokfoto", title: { tr: "Auger Zemin Temel Sondaj Burgusu", en: "Heavy Well Auger Boring Unit", de: "Schwere Brunnen-Schneckenbohreinheit", fr: "Unité de Forage à Tarière Lourde", it: "Unità di Perforazione a Coclea Pesante", es: "Unidad de Perforación con Barrena Pesada" } },
    { src: "/stokfoto/vertical-shot-of-a-drilling-machine-on-a-construct-2023-11-27-05-37-07-utc.jpg", category: "stokfoto", title: { tr: "Dikey Kazık & Sondaj Kulesi", en: "Vertical Piling Drilling Mast", de: "Vertikaler Ramm- und Bohrmast", fr: "Mât Vertical de Forage & Battage", it: "Albero Verticale di Perforazione & Infissione", es: "Mástil Vertical de Perforación & Hincado" } },
    { src: "/stokfoto/driller-in-a-quarry-mine-porphyry-rocks-mining-i-2023-11-27-05-20-13-utc.jpg", category: "stokfoto", title: { tr: "Porfir Kayaç Patlatma Delgisi", en: "Porphyry Rock Blast Hole Drill", de: "Sprenglochbohrung in Porphyrgestein", fr: "Forage de Trous de Mine dans le Porphyre", it: "Perforazione di Fori da Mina nel Porfido", es: "Perforación de Barrenos en Pórfido" } }
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
              <span>// {tx({ tr: "Vera Gold Makine & Saha Portföyü", en: "Vera Gold Fleet Portfolio", de: "Vera Gold Flottenportfolio", fr: "Portfolio de la Flotte Vera Gold", it: "Portfolio della Flotta Vera Gold", es: "Portafolio de la Flota Vera Gold" })}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 font-sans">
              {tx({ tr: "Galeri", en: "Gallery", de: "Galerie", fr: "Galerie", it: "Galleria", es: "Galería" })}
            </h1>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
              {tx({ tr: "Saha operasyonlarımız, ağır hizmet makinelerimiz, yüksek çözünürlüklü stok fotoğraflar ve orijinal yedek parçaların galeri koleksiyonu.", en: "Real photos of our B2B field operations, heavy machinery fleet, HD stock photography, and OEM replacement parts.", de: "Echte Fotos unserer B2B-Feldeinsätze, unserer Schwermaschinenflotte, HD-Stockfotos und OEM-Ersatzteile.", fr: "Photos réelles de nos opérations B2B sur le terrain, de notre flotte d'engins lourds, photos HD et pièces de rechange OEM.", it: "Foto reali delle nostre operazioni B2B sul campo, della flotta di macchine pesanti, foto HD e ricambi OEM.", es: "Fotos reales de nuestras operaciones B2B en campo, nuestra flota de maquinaria pesada, fotos HD y repuestos OEM." })}
            </p>

            <div className="mt-6">
              <Link
                href="/operasyonlar"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-zinc-700 bg-zinc-900 text-white font-mono text-xs uppercase font-bold hover:border-[#C59B27] hover:text-[#C59B27] transition-all"
              >
                <Video className="w-4 h-4 text-[#C59B27]" />
                <span>{tx({ tr: "Canlı Saha Videolarını İzle (MP4)", en: "Watch Live Field Videos (MP4)", de: "Live-Feldvideos ansehen (MP4)", fr: "Voir les Vidéos Terrain (MP4)", it: "Guarda i Video dal Campo (MP4)", es: "Ver Vídeos de Campo (MP4)" })}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C59B27]" />
              </Link>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-zinc-800 pb-6 max-w-5xl mx-auto">
            {galleryTabs.map(tab => (
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
                {tx(tab.label)}
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
                    alt={tx(item.title)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Info Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest bg-zinc-950/90 text-[#C59B27] border border-zinc-800 backdrop-blur-md">
                        // {tx(galleryTabs.find((tab) => tab.id === item.category)?.label ?? { tr: item.category, en: item.category })}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-4 h-4 text-[#C59B27]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#C59B27] transition-colors leading-snug">
                        {tx(item.title)}
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
                alt={tx(filteredItems[lightboxIndex].title)}
                fill
                className="object-contain"
              />
              <div className="relative z-10 bg-zinc-950/90 border border-zinc-800 p-4 rounded-2xl backdrop-blur-md">
                <span className="text-[10px] font-mono text-[#C59B27] uppercase tracking-widest font-extrabold block mb-1">
                  // {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {tx(filteredItems[lightboxIndex].title)}
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
