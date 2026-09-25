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
  const { t, tx } = useTranslation();

  const [activeTab, setActiveTab] = useState<"all" | "video" | "quarry" | "well" | "construction">("all");
  const [selectedMedia, setSelectedMedia] = useState<{ type: "image" | "video"; src: string; title: string; desc: string; tag: string } | null>(null);

  // Operational MP4 Videos
  const videos = [
    {
      id: "vid-1",
      src: "/makineler/17516652-uhd_2560_1440_30fps.mp4",
      title: tx({ tr: "Ağır Saha Sondaj Operasyonu (UHD)", en: "Heavy Rig Field Drilling Operation (UHD)", de: "Schwerer Bohreinsatz im Feld (UHD)", fr: "Opération de Forage Lourd sur Terrain (UHD)", it: "Perforazione Pesante sul Campo (UHD)", es: "Operación de Perforación Pesada en Campo (UHD)" }),
      desc: tx({ tr: "Zorlu granit ve sert kaya formasyonlarında 24 Bar DTH kule çalışması.", en: "24 Bar DTH drilling rig operating in hard granite rock formations.", de: "24-bar-DTH-Bohranlage im Einsatz in hartem Granitgestein.", fr: "Foreuse DTH 24 bar en action dans des formations de granit dur.", it: "Perforatrice DTH da 24 bar al lavoro in formazioni di granito duro.", es: "Perforadora DTH de 24 bar trabajando en formaciones de granito duro." }),
      tag: "UHD VIDEO // 4K RIG",
    },
    {
      id: "vid-2",
      src: "/makineler/10327270-hd_1080_1920_30fps.mp4",
      title: tx({ tr: "Dikey Kule Delgi Operasyonu (HD)", en: "Vertical Mast Drilling Operation (HD)", de: "Bohreinsatz mit vertikalem Mast (HD)", fr: "Opération de Forage à Mât Vertical (HD)", it: "Perforazione con Albero Verticale (HD)", es: "Operación de Perforación con Mástil Vertical (HD)" }),
      desc: tx({ tr: "Derin temel ve kazık çakım öncesi pilot delik delme çalışması.", en: "Pilot hole drilling prior to deep foundation piling operations.", de: "Pilotbohrung vor Tiefgründungs-Rammarbeiten.", fr: "Forage pilote avant les travaux de fondations profondes.", it: "Foro pilota prima delle operazioni di fondazione profonda.", es: "Perforación piloto previa a los trabajos de cimentación profunda." }),
      tag: "HD VIDEO // VERTICAL MAST",
    },
    {
      id: "vid-3",
      src: "/gorseller/sondaj-makineleri/WhatsApp_Video_2026-08-11_at_14.48.55.mp4",
      title: tx({ tr: "Endüstriyel Su Sondaj Kulesi Çalışması", en: "Industrial Water Well Boring Rig", de: "Industrielle Brunnenbohranlage", fr: "Foreuse Industrielle de Puits d'Eau", it: "Perforatrice Industriale per Pozzi d'Acqua", es: "Perforadora Industrial de Pozos de Agua" }),
      desc: tx({ tr: "Saha ortamında yüksek basınçlı hava destekli çamur sirkülasyonlu su sondajı.", en: "High-pressure air assisted mud circulation water well drilling in action.", de: "Brunnenbohrung mit luftunterstützter Spülungszirkulation im Einsatz.", fr: "Forage de puits avec circulation de boue assistée par air haute pression.", it: "Perforazione di pozzi con circolazione di fango assistita da aria ad alta pressione.", es: "Perforación de pozos con circulación de lodo asistida por aire a alta presión." }),
      tag: "FIELD VIDEO // WATER WELL",
    },
    {
      id: "vid-4",
      src: "/gorseller/sondaj-makineleri/WhatsApp_Video_2026-08-11_at_14.48.56.mp4",
      title: tx({ tr: "Kaya Sondaj Kulesi Tij Ekleme & Borulama", en: "Drill Rod Handling & Casing Operation", de: "Gestänge- & Verrohrungseinsatz", fr: "Manutention des Tiges & Tubage", it: "Movimentazione Aste & Tubaggio", es: "Manejo de Varillas & Entubado" }),
      desc: tx({ tr: "Otomatik tij ve muhafaza borusu yerleştirme sistemi canlı saha kaydı.", en: "Automatic drill rod and casing handling system recorded live on site.", de: "Automatisches Gestänge- und Verrohrungshandling live auf der Baustelle aufgenommen.", fr: "Système automatique de manutention des tiges et du tubage filmé en direct sur le chantier.", it: "Sistema automatico di movimentazione aste e tubaggio ripreso dal vivo in cantiere.", es: "Sistema automático de manejo de varillas y entubado grabado en directo en obra." }),
      tag: "FIELD VIDEO // ROD HANDLING",
    },
    {
      id: "vid-5",
      src: "/gorseller/sondaj-makineleri/WhatsApp_Video_2026-08-11_at_14.48.57.mp4",
      title: tx({ tr: "Paletli Derin Kuyu Sondaj Kulesi Canlı Çekim", en: "Tracked Deep Well Rig Live Action", de: "Raupen-Tiefbohranlage live im Einsatz", fr: "Foreuse Profonde sur Chenilles en Action", it: "Perforatrice Cingolata per Pozzi Profondi in Azione", es: "Perforadora de Pozos Profundos sobre Orugas en Acción" }),
      desc: tx({ tr: "Paletli mobil kule ile derin katman karot ve su arama delgisi.", en: "Tracked mobile rig drilling deep layer core and groundwater exploration.", de: "Mobile Raupenanlage bei Kernbohrungen in tiefen Schichten und Grundwassererkundung.", fr: "Foreuse mobile sur chenilles pour carottage profond et exploration des eaux souterraines.", it: "Perforatrice mobile cingolata per carotaggi profondi ed esplorazione delle acque sotterranee.", es: "Perforadora móvil sobre orugas para testificación profunda y exploración de aguas subterráneas." }),
      tag: "FIELD VIDEO // CRAWLER RIG",
    },
    {
      id: "vid-6",
      src: "/gorseller/sondaj-makineleri/WhatsApp_Video_2026-08-11_at_14.48.57_1.mp4",
      title: tx({ tr: "24 Bar DTH Delgi & Çamur Sirkülasyonu", en: "24 Bar DTH Drill & Mud Circulation", de: "24-bar-DTH-Bohrung & Spülungszirkulation", fr: "Forage DTH 24 bar & Circulation de Boue", it: "Perforazione DTH 24 bar & Circolazione Fanghi", es: "Perforación DTH 24 bar & Circulación de Lodo" }),
      desc: tx({ tr: "Kompresör havası ve çamur pompası senkronize delgi operasyonu.", en: "Synchronized compressor air and mud pump drilling operation.", de: "Synchronisierter Bohrbetrieb mit Kompressorluft und Spülungspumpe.", fr: "Opération de forage synchronisée air comprimé et pompe à boue.", it: "Perforazione sincronizzata con aria del compressore e pompa fanghi.", es: "Operación de perforación sincronizada con aire del compresor y bomba de lodo." }),
      tag: "FIELD VIDEO // 24 BAR DTH",
    },
    {
      id: "vid-7",
      src: "/gorseller/reklam-gorselleri/WhatsApp_Video_2026-08-11_at_14.49.10.mp4",
      title: tx({ tr: "Vera Gold Enerji Filo Tanıtım Kaydı", en: "Vera Gold Fleet Presentation Video", de: "Vera Gold Flotten-Präsentationsvideo", fr: "Vidéo de Présentation de la Flotte Vera Gold", it: "Video di Presentazione della Flotta Vera Gold", es: "Vídeo de Presentación de la Flota Vera Gold" }),
      desc: tx({ tr: "Avrupa ve Balkanlar projesi şantiye teslimi ve saha hazırlığı.", en: "Balkans & European project site setup and fleet deployment.", de: "Baustelleneinrichtung und Flotteneinsatz in Balkan- und Europaprojekten.", fr: "Installation de chantier et déploiement de la flotte sur les projets des Balkans et d'Europe.", it: "Allestimento del cantiere e impiego della flotta nei progetti nei Balcani e in Europa.", es: "Instalación de obra y despliegue de la flota en proyectos de los Balcanes y Europa." }),
      tag: "FIELD VIDEO // FLEET SHOWCASE",
    },
    {
      id: "vid-8",
      src: "/makineler/WhatsApp Video 2026-07-13 at 16.02.17.mp4",
      title: tx({ tr: "Mobil Servis & Saha Destek Çekimi", en: "Mobile Field Service & Technical Support", de: "Mobiler Außendienst & Technischer Support", fr: "Service Terrain Mobile & Support Technique", it: "Assistenza Mobile sul Campo & Supporto Tecnico", es: "Servicio Móvil en Campo & Soporte Técnico" }),
      desc: tx({ tr: "Vera Gold Enerji teknik ekibi tarafından sahadan canlı operasyon kaydı.", en: "Live operation recording captured by Vera Gold field engineers.", de: "Live-Aufnahme eines Einsatzes durch Vera-Gold-Außendienstingenieure.", fr: "Enregistrement en direct réalisé par les ingénieurs terrain de Vera Gold.", it: "Registrazione dal vivo effettuata dagli ingegneri sul campo di Vera Gold.", es: "Grabación en directo realizada por los ingenieros de campo de Vera Gold." }),
      tag: "FIELD VIDEO // LIVE ACTION",
    },
  ];

  // 20 High-Res Stock Photos
  const photos = [
    {
      id: "stok-1",
      category: "well",
      src: "/stokfoto/aerial-shot-of-water-well-drilling-rig-boring-dowi-2024-10-18-10-11-35-utc.jpeg",
      title: tx({ tr: "Havadan Su Sondaj Kulesi Çekimi", en: "Aerial Water Well Drilling Rig", de: "Brunnenbohranlage aus der Luft", fr: "Foreuse de Puits d'Eau Vue du Ciel", it: "Perforatrice per Pozzi d'Acqua Vista dall'Alto", es: "Perforadora de Pozos de Agua a Vista de Dron" }),
      desc: tx({ tr: "400 metre derinliğe ulaşan hidrolik kule ve çamur sirkülasyon havuzu.", en: "Hydraulic drilling mast with mud circulation pit reaching 400m depths.", de: "Hydraulischer Bohrmast mit Spülungsgrube für Tiefen bis 400 m.", fr: "Mât de forage hydraulique avec bassin de boue atteignant 400 m de profondeur.", it: "Albero di perforazione idraulico con vasca fanghi fino a 400 m di profondità.", es: "Mástil de perforación hidráulico con balsa de lodos que alcanza 400 m de profundidad." }),
      tag: "AERIAL // WATER WELL",
    },
    {
      id: "stok-2",
      category: "quarry",
      src: "/stokfoto/driller-in-an-open-pit-mine-porphyry-rock-materia-2023-11-27-05-03-42-utc.jpg",
      title: tx({ tr: "Açık Ocak Maden Delgi Makinesi", en: "Open Pit Mine Driller", de: "Bohrgerät im Tagebau", fr: "Foreuse de Mine à Ciel Ouvert", it: "Perforatrice per Miniera a Cielo Aperto", es: "Perforadora de Mina a Cielo Abierto" }),
      desc: tx({ tr: "Porfir ve granit kaya patlatma delikleri delme operasyonu.", en: "Porphyry and granite rock blast hole drilling operation.", de: "Sprenglochbohrung in Porphyr- und Granitgestein.", fr: "Forage de trous de mine dans le porphyre et le granit.", it: "Perforazione di fori da mina in porfido e granito.", es: "Perforación de barrenos en pórfido y granito." }),
      tag: "OPEN PIT // PORPHYRY DRILL",
    },
    {
      id: "stok-3",
      category: "quarry",
      src: "/stokfoto/yellow-drilling-machine-drills-rock-in-a-quarry-2023-11-27-05-30-25-utc.jpg",
      title: tx({ tr: "Sarı Kaya Delgi Makinesi Operasyonu", en: "Yellow Rock Drilling Rig in Quarry", de: "Gelbes Gesteinsbohrgerät im Steinbruch", fr: "Foreuse de Roche Jaune en Carrière", it: "Perforatrice da Roccia Gialla in Cava", es: "Perforadora de Roca Amarilla en Cantera" }),
      desc: tx({ tr: "Taş ocağında yüksek darbe enerjili DTH delici çekiç çalışması.", en: "High impact DTH hammer operating in stone quarry.", de: "Schlagkräftiger DTH-Hammer im Steinbruch im Einsatz.", fr: "Marteau DTH à fort impact en action dans une carrière.", it: "Martello DTH ad alto impatto al lavoro in cava.", es: "Martillo DTH de alto impacto trabajando en cantera." }),
      tag: "QUARRY // HEAVY DTH",
    },
    {
      id: "stok-4",
      category: "well",
      src: "/stokfoto/well-auger-during-a-job-2023-11-27-05-24-57-utc.jpg",
      title: tx({ tr: "Auger Temel Sondaj Burgusu", en: "Heavy Duty Well Auger Rig", de: "Schwere Brunnen-Schneckenbohranlage", fr: "Foreuse à Tarière Lourde", it: "Perforatrice a Coclea per Impieghi Gravosi", es: "Perforadora de Barrena de Alta Resistencia" }),
      desc: tx({ tr: "Derin temel zemin ıslahı ve burgulu boru çakım operasyonu.", en: "Deep soil stabilization and continuous auger boring.", de: "Tiefe Bodenstabilisierung und durchgehende Schneckenbohrung.", fr: "Stabilisation profonde des sols et forage continu à la tarière.", it: "Stabilizzazione profonda del terreno e perforazione continua a coclea.", es: "Estabilización profunda del suelo y perforación continua con barrena." }),
      tag: "AUGER // SOIL BORING",
    },
    {
      id: "stok-5",
      category: "construction",
      src: "/stokfoto/vertical-shot-of-a-drilling-machine-on-a-construct-2023-11-27-05-37-07-utc.jpg",
      title: tx({ tr: "İnşaat Şantiyesi Dikey Sondaj Kulesi", en: "Construction Site Vertical Mast", de: "Vertikaler Mast auf der Baustelle", fr: "Mât Vertical sur Chantier", it: "Albero Verticale in Cantiere", es: "Mástil Vertical en Obra" }),
      desc: tx({ tr: "Kentsel dönüşüm ve köprü viyadük ayaklarında kazık kulesi.", en: "Piling rig operating on urban bridge & foundation site.", de: "Rammgerät im Einsatz auf einer städtischen Brücken- und Fundamentbaustelle.", fr: "Foreuse de pieux en action sur un chantier urbain de pont et de fondations.", it: "Macchina per pali al lavoro in un cantiere urbano di ponti e fondazioni.", es: "Pilotadora trabajando en una obra urbana de puentes y cimentaciones." }),
      tag: "CONSTRUCTION // VERTICAL MAST",
    },
    {
      id: "stok-6",
      category: "quarry",
      src: "/stokfoto/driller-in-a-quarry-mine-exploring-rock-material-2023-11-27-05-17-31-utc.jpg",
      title: tx({ tr: "Maden Sahası Jeoloji Uzman İncelemesi", en: "Quarry Mining Geological Inspection", de: "Geologische Inspektion im Steinbruch", fr: "Inspection Géologique en Carrière", it: "Ispezione Geologica in Cava", es: "Inspección Geológica en Cantera" }),
      desc: tx({ tr: "Karot numuneleri ve kaya sertlik analizi yapan mühendisler.", en: "Engineers evaluating rock core samples and Mohs hardness.", de: "Ingenieure bewerten Gesteinskernproben und Mohs-Härte.", fr: "Ingénieurs évaluant des carottes de roche et la dureté Mohs.", it: "Ingegneri che valutano carote di roccia e durezza Mohs.", es: "Ingenieros evaluando testigos de roca y la dureza Mohs." }),
      tag: "GEOLOGY // FIELD AUDIT",
    },
    {
      id: "stok-7",
      category: "construction",
      src: "/stokfoto/building-activity-on-construction-site-close-up-v-2023-11-27-05-04-41-utc.jpg",
      title: tx({ tr: "Şantiye Temel Kazı ve Çakım Detayı", en: "Construction Substructure Piling", de: "Rammung für Unterkonstruktionen", fr: "Battage de Pieux pour Infrastructures", it: "Infissione per Sottostrutture", es: "Hincado para Subestructuras" }),
      desc: tx({ tr: "Endüstriyel tesis temelinde ağır makine ve kazık çakım kulesi.", en: "Heavy machinery driving posts on industrial building site.", de: "Schwermaschine rammt Pfähle auf einer Industriebaustelle.", fr: "Engin lourd enfonçant des poteaux sur un chantier industriel.", it: "Macchina pesante che infigge pali in un cantiere industriale.", es: "Maquinaria pesada hincando postes en una obra industrial." }),
      tag: "SUBSTRUCTURE // PILING",
    },
    {
      id: "stok-8",
      category: "construction",
      src: "/stokfoto/greasing-points-inside-heavy-equipment-crawler-2023-11-27-05-18-39-utc.jpeg",
      title: tx({ tr: "Ağır Ekipman Palet & Yağlama Bakımı", en: "Crawler Maintenance & Greasing", de: "Raupenwartung & Abschmieren", fr: "Entretien & Graissage des Chenilles", it: "Manutenzione & Ingrassaggio dei Cingoli", es: "Mantenimiento & Engrase de Orugas" }),
      desc: tx({ tr: "7/24 şantiye başı mobil servis ve önleyici bakım operasyonu.", en: "24/7 mobile field service and preventive crawler greasing.", de: "24/7 mobiler Außendienst und vorbeugendes Abschmieren der Raupen.", fr: "Service terrain mobile 24/7 et graissage préventif des chenilles.", it: "Assistenza mobile sul campo 24/7 e ingrassaggio preventivo dei cingoli.", es: "Servicio móvil en campo 24/7 y engrase preventivo de orugas." }),
      tag: "SERVICE // MAINTENANCE",
    },
    {
      id: "stok-9",
      category: "quarry",
      src: "/stokfoto/driller-in-a-quarry-mine-porphyry-rocks-mining-i-2023-11-27-05-20-13-utc.jpg",
      title: tx({ tr: "Maden Ocağı Porfir Kaya Delme", en: "Porphyry Rock Mining Driller", de: "Bohrgerät im Porphyrabbau", fr: "Foreuse d'Extraction de Porphyre", it: "Perforatrice per Estrazione di Porfido", es: "Perforadora de Extracción de Pórfido" }),
      desc: tx({ tr: "Maden sahasında basamak delgisi ve patlatma hazırlığı.", en: "Bench drilling and blast hole prep in quarry mine.", de: "Strossenbohrung und Sprenglochvorbereitung im Steinbruch.", fr: "Forage de gradins et préparation des trous de mine en carrière.", it: "Perforazione a gradoni e preparazione dei fori da mina in cava.", es: "Perforación de bancos y preparación de barrenos en cantera." }),
      tag: "BENCH DRILLING // BLAST HOLE",
    },
    {
      id: "stok-10",
      category: "well",
      src: "/stokfoto/drilling-wells-in-the-ground-using-a-professional-2023-11-27-05-23-52-utc.jpg",
      title: tx({ tr: "Profesyonel Su Sondaj Çalışması", en: "Professional Groundwater Boring", de: "Professionelle Grundwasserbohrung", fr: "Forage Professionnel d'Eaux Souterraines", it: "Perforazione Professionale per Acque Sotterranee", es: "Perforación Profesional de Aguas Subterráneas" }),
      desc: tx({ tr: "Tarımsal ve endüstriyel su ihtiyacı için derin borulama.", en: "Deep casing pipe installation for agricultural groundwater.", de: "Tiefe Verrohrung für landwirtschaftliche Grundwassernutzung.", fr: "Installation de tubage profond pour les eaux souterraines agricoles.", it: "Installazione di tubazioni profonde per acque sotterranee agricole.", es: "Instalación de entubado profundo para aguas subterráneas agrícolas." }),
      tag: "GROUNDWATER // CASING",
    },
    {
      id: "stok-11",
      category: "quarry",
      src: "/stokfoto/extraction-of-stone-male-worker-next-to-stone-qua-2024-08-09-22-49-33-utc.jpg",
      title: tx({ tr: "Taş Çıkarma Sahasında Teknik Personel", en: "Quarry Stone Extraction Worker", de: "Arbeiter beim Steinabbau", fr: "Ouvrier d'Extraction de Pierre", it: "Operaio all'Estrazione della Pietra", es: "Operario de Extracción de Piedra" }),
      desc: tx({ tr: "Saha iş güvenliği ve operasyonel denetim ekibi.", en: "On-site safety officer and operational compliance team.", de: "Sicherheitsbeauftragter und Compliance-Team vor Ort.", fr: "Responsable sécurité et équipe de conformité sur site.", it: "Responsabile della sicurezza e team di conformità in cantiere.", es: "Responsable de seguridad y equipo de cumplimiento en obra." }),
      tag: "SAFETY // FIELD AUDIT",
    },
    {
      id: "stok-12",
      category: "construction",
      src: "/stokfoto/rock maikana yellow-excavator-digging-rocks-at-the-quarry-doin-2023-11-27-05-14-44-utc.jpg",
      title: tx({ tr: "Taş Ocağı Ağır İş Ekskavatörü", en: "Heavy Quarry Excavator Digging Rocks", de: "Schwerer Bagger beim Gesteinsabbau im Steinbruch", fr: "Pelle Lourde Excavant la Roche en Carrière", it: "Escavatore Pesante che Scava Roccia in Cava", es: "Excavadora Pesada Excavando Roca en Cantera" }),
      desc: tx({ tr: "Sert blok kayaların kırılması ve yüklenmesi.", en: "Heavy rock breaking and excavation in quarry pit.", de: "Schweres Brechen und Ausheben von Gestein in der Steinbruchgrube.", fr: "Fragmentation et excavation lourde de roche dans la fosse de carrière.", it: "Frantumazione e scavo pesante di roccia nella fossa di cava.", es: "Rotura y excavación pesada de roca en el foso de la cantera." }),
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
                <span>// {tx({ tr: "VERA GOLD FIELD MEDIA HUB", en: "OPERATIONAL MEDIA HUB", de: "OPERATIVES MEDIENZENTRUM", fr: "CENTRE MÉDIA OPÉRATIONNEL", it: "HUB MEDIA OPERATIVO", es: "CENTRO MULTIMEDIA OPERATIVO" })}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 font-sans">
                {tx({ tr: "Saha Operasyonları & Canlı Medya", en: "Field Operations & Live Media", de: "Feldeinsätze & Live-Medien", fr: "Opérations Terrain & Médias en Direct", it: "Operazioni sul Campo & Media Live", es: "Operaciones de Campo & Medios en Directo" })}
              </h1>
              <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed mb-6">
                {tx({ tr: "Maden ocakları, su sondaj kuyuları ve GES altyapı şantiyelerinde çalışan 100+ ağır makine filomuzun canlı saha çekimleri ve teknik operasyon kayıtları.", en: "Live field recordings and technical operation logs from our 100+ heavy fleet operating across quarry mines, water wells, and solar substructures.", de: "Live-Aufnahmen und technische Einsatzprotokolle unserer über 100 schweren Maschinen in Steinbrüchen, Brunnen und Solar-Unterkonstruktionen.", fr: "Enregistrements en direct et journaux techniques de notre flotte de plus de 100 engins lourds opérant en carrières, puits d'eau et structures solaires.", it: "Registrazioni dal vivo e registri tecnici delle operazioni della nostra flotta di oltre 100 macchine pesanti in cave, pozzi d'acqua e sottostrutture fotovoltaiche.", es: "Grabaciones en directo y registros técnicos de nuestra flota de más de 100 máquinas pesadas operando en canteras, pozos de agua y subestructuras solares." })}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-none bg-[#C59B27] hover:bg-[#b08920] text-white font-mono font-bold text-xs uppercase tracking-widest transition-colors shadow-md"
                >
                  <span>{tx({ tr: "Şantiye Destek Talebi", en: "Request Field Support", de: "Außendienst anfordern", fr: "Demander une Assistance Terrain", it: "Richiedi Assistenza sul Campo", es: "Solicitar Soporte en Campo" })}</span>
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
                <span className="text-xs font-bold text-white uppercase">{tx({ tr: "Avrupa & Balkanlar Saha Portföyü", en: "Europe & Balkans Field Portfolio", de: "Feldportfolio Europa & Balkan", fr: "Portfolio Terrain Europe & Balkans", it: "Portfolio sul Campo Europa & Balcani", es: "Portafolio de Campo Europa & Balcanes" })}</span>
              </div>
            </div>
          </div>

          {/* Section 1: Operational MP4 Video Player Showcase */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-3">
              <Video className="w-5 h-5 text-[#C59B27]" />
              <h2 className="text-xl md:text-2xl font-mono uppercase font-black text-white">
                // {tx({ tr: "Operasyonel Canlı Saha Videoları (MP4)", en: "Live Field Video Logins (MP4)", de: "Live-Feldvideos (MP4)", fr: "Vidéos Terrain en Direct (MP4)", it: "Video dal Campo (MP4)", es: "Vídeos de Campo en Directo (MP4)" })}
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
                  // {tx({ tr: "Saha Fotoğraf Galerisi & Şantiye Görselleri", en: "Field Photo Gallery & Site Imagery", de: "Feld-Fotogalerie & Baustellenbilder", fr: "Galerie Photos Terrain & Images de Chantier", it: "Galleria Fotografica dal Campo & Immagini di Cantiere", es: "Galería de Fotos de Campo & Imágenes de Obra" })}
                </h2>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { key: "all", label: tx({ tr: "Tümü", en: "All", de: "Alle", fr: "Tout", it: "Tutti", es: "Todos" }) },
                  { key: "quarry", label: tx({ tr: "Maden & Taş Ocağı", en: "Quarry Mining", de: "Steinbruch & Bergbau", fr: "Carrières & Mines", it: "Cave & Miniere", es: "Canteras & Minería" }) },
                  { key: "well", label: tx({ tr: "Su Sondajı", en: "Water Well", de: "Brunnenbau", fr: "Puits d'Eau", it: "Pozzi d'Acqua", es: "Pozos de Agua" }) },
                  { key: "construction", label: tx({ tr: "İnşaat & Kazık", en: "Piling & Substructure", de: "Rammung & Unterkonstruktion", fr: "Battage & Infrastructure", it: "Infissione & Sottostrutture", es: "Hincado & Subestructura" }) },
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
                  {tx({ tr: "Saha Destek İste", en: "Request Support", de: "Support anfordern", fr: "Demander du Support", it: "Richiedi Supporto", es: "Solicitar Soporte" })}
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
