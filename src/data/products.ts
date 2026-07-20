export interface ProductSpec {
  labelTr: string;
  labelEn: string;
  labelDe: string;
  labelFr: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  categorySlug: string;
  nameTr: string;
  nameEn: string;
  nameDe: string;
  nameFr: string;
  model: string;
  shortDescTr: string;
  shortDescEn: string;
  shortDescDe: string;
  shortDescFr: string;
  fullDescTr: string;
  fullDescEn: string;
  fullDescDe: string;
  fullDescFr: string;
  image: string;
  specs: ProductSpec[];
  featuresTr: string[];
  featuresEn: string[];
  featuresDe: string[];
  featuresFr: string[];
  inStock: boolean;
}

export interface ProductCategory {
  slug: string;
  nameTr: string;
  nameEn: string;
  nameDe: string;
  nameFr: string;
  descTr: string;
  descEn: string;
  descDe: string;
  descFr: string;
  iconName: string;
  coverImage: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "sondaj-makinalari",
    nameTr: "Sondaj Makinaları",
    nameEn: "Drilling Rigs",
    nameDe: "Bohranlagen",
    nameFr: "Foreuses",
    descTr: "Derin su sondajı, zemin etüdü ve karotlu delgi operasyonları için ağır hizmet hidrolik sondaj makinaları.",
    descEn: "Heavy-duty hydraulic drilling rigs for deep water wells, geotechnical surveying, and core drilling operations.",
    descDe: "Hydraulische Schwerlast-Bohranlagen für Tiefwasserbrunnen, Baugrunduntersuchungen und Kernbohrungen.",
    descFr: "Foreuses hydrauliques robustes pour puits d'eau profonds, études géotechniques et carottage.",
    iconName: "Drill",
    coverImage: "/satismakineleri/sondaj-14.07.2023-19-09-01.jpg",
  },
  {
    slug: "rock-makinalari",
    nameTr: "Rock Makinaları",
    nameEn: "Rock Machines",
    nameDe: "Gesteinsbohrgeräte",
    nameFr: "Foreuses de Roche",
    descTr: "En sert granit, bazalt ve kaya formasyonlarında yüksek penetrasyon sağlayan paletli kaya delgi makinaları.",
    descEn: "Crawler rock drills delivering high penetration rates in hard granite, basalt, and tough rock formations.",
    descDe: "Raupen-Gesteinsbohrgeräte mit hohen Penetrationsraten in hartem Granit, Basalt und schwerem Gestein.",
    descFr: "Foreuses sur chenilles offrant des vitesses de pénétration élevées dans le granit et le basalte.",
    iconName: "Pickaxe",
    coverImage: "/satismakineleri/Paletli-Rock-Makina.jpg",
  },
  {
    slug: "kazik-cakma-makinalari",
    nameTr: "Kazık Çakma Makinaları",
    nameEn: "Pile Driving Rigs",
    nameDe: "Rammanlagen",
    nameFr: "Sonneuses de Pieux",
    descTr: "Güneş enerjisi (GES) sahaları ve altyapı projeleri için yüksek hassasiyetli hidrolik kazık çakma makinaları.",
    descEn: "High-precision hydraulic pile drivers engineered for solar farm construction and foundation piling.",
    descDe: "Präzisions-Hydraulikrammen für den Bau von Solarparks und Fundamentpfählen.",
    descFr: "Sonneuses hydrauliques de haute précision conçues pour les centrales solaires et fondations.",
    iconName: "Hammer",
    coverImage: "/satismakineleri/kazik-cakma.jpeg",
  },
  {
    slug: "fore-kazik-makinalari",
    nameTr: "Fore Kazık Makinaları",
    nameEn: "Bored Piling Rigs",
    nameDe: "Drehbohrgeräte",
    nameFr: "Foreuses de Pieux Forés",
    descTr: "Derin temel mühendisliği ve köprü/bina alt altyapısı için yüksek torklu fore kazık delme sistemleri.",
    descEn: "High-torque rotary drilling rigs for deep foundation engineering and heavy structural bored piling.",
    descDe: "Drehbohrgeräte mit hohem Drehmoment für Spezialtiefbau und Großbohrpfähle.",
    descFr: "Foreuses rotatives à grand couple pour les travaux de fondations profondes et pieux forés.",
    iconName: "Layers",
    coverImage: "/satismakineleri/fore-kazik-cakma-makinesi.jpeg",
  },
  {
    slug: "jet-grout-ankraj-makinalari",
    nameTr: "Jet Grout ve Ankraj Makinaları",
    nameEn: "Jet Grouting & Anchoring Rigs",
    nameDe: "Düsenstrahl- & Ankerbohrgeräte",
    nameFr: "Foreuses Jet Grouting & Ancrage",
    descTr: "Zemin iyileştirme, mikrokazık, zemin ankrajı ve jet grout enjeksiyonu için çok yönlü paletli sondaj üniteleri.",
    descEn: "Versatile crawler rigs designed for ground improvement, micro-piling, soil anchoring, and jet grouting.",
    descDe: "Vielseitige Raupenbohrgeräte für Baugrundverbesserung, Mikropfähle, Verankerung und Düsenstrahlverfahren.",
    descFr: "Foreuses polyvalentes pour l'amélioration des sols, micro-pieux, ancrages et injection jet grouting.",
    iconName: "Cpu",
    coverImage: "/satismakineleri/sondajmakinesi.jpeg",
  },
  {
    slug: "kompresorler",
    nameTr: "Kompresörler",
    nameEn: "Air Compressors",
    nameDe: "Kompressoren",
    nameFr: "Compresseurs d'Air",
    descTr: "Zorlu şantiye koşullarında DTH çekiç ve kaya delgi sistemlerini besleyen yüksek basınçlı dizel kompresörler.",
    descEn: "High-pressure diesel air compressors powering DTH hammers and rock drills in demanding site conditions.",
    descDe: "Hochdruck-Dieselkompressoren für den Betrieb von DTH-Hämmern unter anspruchsvollen Bedingungen.",
    descFr: "Compresseurs diesel haute pression alimentant les marteaux fond de trou et foreuses.",
    iconName: "Wind",
    coverImage: "/satismakineleri/csh1120a-hava-kompresoru.png",
  },
];

export const PRODUCTS: Product[] = [
  // Sondaj Makinaları
  {
    id: "sondaj-1",
    slug: "vd-s300-derin-su-sondaj-makinesi",
    categorySlug: "sondaj-makinalari",
    nameTr: "VD-S300 Derin Su & Zemin Sondaj Makinesi",
    nameEn: "VD-S300 Deep Water & Geotechnical Drilling Rig",
    nameDe: "VD-S300 Tiefwasser- & Geotechnik-Bohranlage",
    nameFr: "Foreuse d'Eau Profonde & Géotechnique VD-S300",
    model: "VD-S300 High-Torque",
    shortDescTr: "300 metre delme kapasitesine sahip, çamur sirkülasyonlu ve hidrolik kuleli endüstriyel sondaj makinesi.",
    shortDescEn: "Industrial drilling rig with 300m depth capacity, mud circulation system, and hydraulic mast.",
    shortDescDe: "Industriebohranlage mit 300 m Tiefenkapazität, Spülungssystem und Hydraulikmast.",
    shortDescFr: "Foreuse industrielle avec capacité de 300 m, système de boue et mât hydraulique.",
    fullDescTr: "Vera Gold Enerji güvencesiyle sunulan VD-S300, derin su sondajı, zemin etüdü ve maden arama operasyonlarında yüksek performans sağlar.",
    fullDescEn: "Delivering exceptional performance in deep water well boring, soil exploration, and mineral drilling.",
    fullDescDe: "Hervorragende Leistung bei Tiefbrunnenbohrungen, Baugrunduntersuchungen und Mineralexploration.",
    fullDescFr: "Performances exceptionnelles dans le forage de puits d'eau profonds et la géotechnique.",
    image: "/satismakineleri/sondaj-14.07.2023-19-09-01.jpg",
    specs: [
      { labelTr: "Delme Derinliği", labelEn: "Drilling Depth", labelDe: "Bohrtiefe", labelFr: "Profondeur", value: "300 - 450 m" },
      { labelTr: "Delme Çapı", labelEn: "Drill Diameter", labelDe: "Bohrdurchmesser", labelFr: "Diamètre", value: "110 - 350 mm" },
      { labelTr: "Motor Gücü", labelEn: "Engine Power", labelDe: "Motorleistung", labelFr: "Puissance Motor", value: "132 kW Dizel" },
      { labelTr: "Tork Kapasitesi", labelEn: "Torque", labelDe: "Drehmoment", labelFr: "Couple", value: "8,500 Nm" },
    ],
    featuresTr: ["Entegre Ağır Hizmet Çamur Pompası", "Otomatik Tij Ekleme Sistemi", "Paletli Mobil Şasi"],
    featuresEn: ["Integrated Heavy Mud Pump", "Automatic Drill Rod Handling", "Tracked Mobile Chassis"],
    featuresDe: ["Integrierte Schlammpumpe", "Automatische Gestängehandhabung", "Raupenfahrwerk"],
    featuresFr: ["Pompe à Boue Intégrée", "Manutention Automatique des Tiges", "Châssis Chenillé"],
    inStock: true,
  },
  {
    id: "sondaj-2",
    slug: "vd-s500-hidrolik-sondaj-kulesi",
    categorySlug: "sondaj-makinalari",
    nameTr: "VD-S500 Hidrolik Karotlu Sondaj Kulesi",
    nameEn: "VD-S500 Hydraulic Wireline Core Rig",
    nameDe: "VD-S500 Hydraulik-Kernbohranlage",
    nameFr: "Foreuse de Carottage Hydraulique VD-S500",
    model: "VD-S500 Crawler",
    shortDescTr: "Maden arama ve derin zemin karot sondajları için yüksek devirli hidrolik delme ünitesi.",
    shortDescEn: "High-speed hydraulic wireline coring rig for mineral exploration and deep geotechnical sampling.",
    shortDescDe: "Hochgeschwindigkeits-Kernbohranlage für Mineralexploration und geotechnische Probenahmen.",
    shortDescFr: "Foreuse de carottage rapide pour l'exploration minière et les prélèvements géotechniques.",
    fullDescTr: "Maden sahalarında yüksek kaliteli karot numunesi almak için tasarlanan VD-S500, hassas basınç ayarları sunar.",
    fullDescEn: "Designed for taking pristine core samples in mining sites. Offers precision pressure regulation.",
    fullDescDe: "Entwickelt für erstklassige Kernproben im Bergbau mit präziser Druckregulierung.",
    fullDescFr: "Conçue pour prélever des carottes géologiques parfaites avec régulation de pression.",
    image: "/veragaleri/Makine-6610-scaled.jpg",
    specs: [
      { labelTr: "Karot Derinliği", labelEn: "Coring Depth", labelDe: "Kerntiefe", labelFr: "Profondeur de Carottage", value: "500 - 800 m" },
      { labelTr: "Kafa Devri", labelEn: "Head RPM", labelDe: "Drehzahl", labelFr: "Vitesse de Rotation", value: "0 - 1200 RPM" },
      { labelTr: "Şasi Tipi", labelEn: "Chassis", labelDe: "Fahrwerk", labelFr: "Châssis", value: "Ağır Paletli" },
    ],
    featuresTr: ["Wireline Tambur Sistemi", "Yüksek Hızlı Rotasyon Kafası", "Düşük Yakıt Tüketimi"],
    featuresEn: ["Wireline Winch System", "High Speed Rotation Head", "Low Fuel Consumption"],
    featuresDe: ["Seilkerneinrichtung", "Hochgeschwindigkeitskopfeinheit", "Sparsamer Motor"],
    featuresFr: ["Treuil Wireline", "Tête de Rotation Rapide", "Faible Consommation"],
    inStock: true,
  },

  // Rock Makinaları
  {
    id: "rock-1",
    slug: "paletli-rock-makinesi-fd580",
    categorySlug: "rock-makinalari",
    nameTr: "FD580 Ağır Hizmet Paletli Rock Makinesi",
    nameEn: "FD580 Heavy-Duty Crawler Rock Drill",
    nameDe: "FD580 Raupen-Gesteinsbohrgerät",
    nameFr: "Foreuse de Roche Chenillée FD580",
    model: "FD580 Heavy Rock",
    shortDescTr: "Maden ocakları, taş ocakları ve yol yapım patlatma delikleri için yüksek darbeli DTH kaya delici.",
    shortDescEn: "High-impact DTH crawler rock drill for quarrying, open-pit mining, and blast hole drilling.",
    shortDescDe: "Schlagkräftiges DTH-Bohrgerät für Steinbrüche, Tagebau und Sprenglochbohrungen.",
    shortDescFr: "Foreuse fond de trou à fort impact pour carrières, mines et forages de minage.",
    fullDescTr: "Sert granit ve kalker kayalarda hızlı patlatma deliği delmek için geliştirilen FD580, güçlü palet yapısına sahiptir.",
    fullDescEn: "Engineered for rapid blast hole drilling in tough granite and limestone. Features strong tracks.",
    fullDescDe: "Entwickelt für schnelle Sprenglochbohrungen in hartem Granit und Kalkstein.",
    fullDescFr: "Conçue pour le forage rapide de trous de mine dans le granit dur et le calcaire.",
    image: "/satismakineleri/Paletli-Rock-Makina.jpg",
    specs: [
      { labelTr: "Delgi Çapı", labelEn: "Hole Diameter", labelDe: "Lochdurchmesser", labelFr: "Diamètre de Forage", value: "90 - 165 mm" },
      { labelTr: "Delgi Derinliği", labelEn: "Hole Depth", labelDe: "Lochtiefe", labelFr: "Profondeur", value: "25 m" },
      { labelTr: "Darbeli Çekiç", labelEn: "DTH Hammer", labelDe: "DTH-Hammer", labelFr: "Marteau DTH", value: "4\" / 5\" / 6\" DTH" },
      { labelTr: "Motor", labelEn: "Engine", labelDe: "Motor", labelFr: "Moteur", value: "Cummins Dizel 194 kW" },
    ],
    featuresTr: ["Tungsten Karbür Uç Desteği", "Toz Toplama & Emiş Filtresi", "Ağır Arazi Şasisi"],
    featuresEn: ["Tungsten Carbide Bit Support", "Integrated Dust Collector", "Heavy Terrain Chassis"],
    featuresDe: ["Wolframkarbid-Unterstützung", "Staubabsaugung", "Geländefahrwerk"],
    featuresFr: ["Support Carbure de Tungstène", "Dépoussiéreur Intégré", "Châssis Tout-Terrain"],
    inStock: true,
  },
  {
    id: "rock-2",
    slug: "vd-r450-kompakt-kaya-delici",
    categorySlug: "rock-makinalari",
    nameTr: "VD-R450 Kompakt Şantiye Rock Makinesi",
    nameEn: "VD-R450 Compact Site Rock Drill",
    nameDe: "VD-R450 Kompaktes Gesteinsbohrgerät",
    nameFr: "Foreuse de Roche Compacte VD-R450",
    model: "VD-R450 Compact",
    shortDescTr: "Dar alanlarda, şev kayalarında ve altyapı kazılarında esnek manevra kabiliyetine sahip kaya delici.",
    shortDescEn: "Agile rock drill with high maneuverability for tight work sites, slope stabilization, and trenching.",
    shortDescDe: "Wendiges Bohrgerät für enge Baustellen, Hangsicherung und Grabenarbeiten.",
    shortDescFr: "Foreuse agile idéale pour espaces restreints, stabilisation de pentes et tranchées.",
    fullDescTr: "Dar alanlarda yüksek performans gösteren VD-R450, otoyol şev ankrajları için idealdir.",
    fullDescEn: "Offers exceptional agility in restricted spaces. Perfect for slope anchoring along highways.",
    fullDescDe: "Ausgezeichnete Wendigkeit auf engem Raum. Perfekt für Hangverankerungen an Autobahnen.",
    fullDescFr: "Agilité exceptionnelle en espace restreint. Parfaite pour l'ancrage de talus routiers.",
    image: "/veragaleri/Rock-makinasi-fd580.jpeg",
    specs: [
      { labelTr: "Delgi Çapı", labelEn: "Hole Diameter", labelDe: "Bohrdurchmesser", labelFr: "Diamètre", value: "76 - 127 mm" },
      { labelTr: "Ağırlık", labelEn: "Weight", labelDe: "Gewicht", labelFr: "Poids", value: "7,200 kg" },
    ],
    featuresTr: ["Esnek Bom Açılanması", "Kompakt Şasi", "Kolay Nakliye"],
    featuresEn: ["Flexible Boom Articulation", "Compact Chassis", "Easy Transport"],
    featuresDe: ["Flexibles Auslegersystem", "Kompaktes Fahrwerk", "Einfacher Transport"],
    featuresFr: ["Bras Articulé Flexible", "Châssis Compact", "Transport Facile"],
    inStock: true,
  },

  // Kazık Çakma Makinaları
  {
    id: "kazik-1",
    slug: "mz460y-gunes-enerjisi-ges-kazik-cakma-makinesi",
    categorySlug: "kazik-cakma-makinalari",
    nameTr: "MZ460Y Güneş Enerjisi (GES) Kazık Çakma Makinesi",
    nameEn: "MZ460Y Solar Farm (PV) Pile Driving Rig",
    nameDe: "MZ460Y Solarpark-Rammanlage",
    nameFr: "Sonneuse pour Centrales Solaires (PV) MZ460Y",
    model: "MZ460Y Solar Piler",
    shortDescTr: "Güneş santrali (GES) arazi çakım projeleri için özel tasarlanmış hidrolik kazık çakma makinesi.",
    shortDescEn: "Specially designed hydraulic pile driver for solar farm substructures with high frequency.",
    shortDescDe: "Speziell entwickelte Hydraulikramme für Solarpark-Unterkonstruktionen mit hoher Frequenz.",
    shortDescFr: "Sonneuse hydraulique conçue pour les structures de centrales solaires photovoltaïques.",
    fullDescTr: "GES arazilerinde çelik çakım kazıklarını milimetrik açı doğruluğu ile çakar, günlük 400+ kazık çakabilir.",
    fullDescEn: "Drives steel posts with millimetric accuracy on solar farm terrains. Delivers over 400 piles/day.",
    fullDescDe: "Rammt Stahlprofile millimetergenau auf Solarpark-Flächen. Über 400 Pfähle/Tag.",
    fullDescFr: "Enfonce les pieux en acier avec une précision millimétrique. Plus de 400 pieux/jour.",
    image: "/satismakineleri/kazik-cakma.jpeg",
    specs: [
      { labelTr: "Çakım Uzunluğu", labelEn: "Max Pile Length", labelDe: "Ramm-Länge", labelFr: "Longueur Max", value: "4,600 mm" },
      { labelTr: "Darbe Gücü", labelEn: "Impact Energy", labelDe: "Schlagenergie", labelFr: "Énergie d'Impact", value: "1,200 J" },
      { labelTr: "Frekans", labelEn: "Frequency", labelDe: "Frequenz", labelFr: "Fréquence", value: "500 - 900 bpm" },
      { labelTr: "Motor", labelEn: "Engine", labelDe: "Motor", labelFr: "Moteur", value: "Yuchai 60 kW Dizel" },
    ],
    featuresTr: ["Açı Ölçerli Dikey Hizalama", "Yüksek Frekanslı Çekiç", "Düşük İşletme Maliyeti"],
    featuresEn: ["Digital Inclinometer Alignment", "High Frequency Hammer", "Low Operational Cost"],
    featuresDe: ["Digitale Neigungsausrichtung", "Hochfrequenz-Hammer", "Niedrige Betriebskosten"],
    featuresFr: ["Alignement par Inclinomètre", "Marteau Haute Fréquence", "Faible Coût d'Exploitation"],
    inStock: true,
  },

  // Fore Kazık Makinaları
  {
    id: "fore-1",
    slug: "vd-f180-agir-hizmet-fore-kazik-makinesi",
    categorySlug: "fore-kazik-makinalari",
    nameTr: "VD-F180 Ağır Hizmet Fore Kazık Makinesi",
    nameEn: "VD-F180 Heavy-Duty Rotary Bored Piling Rig",
    nameDe: "VD-F180 Schwerlast-Drehbohrgerät",
    nameFr: "Foreuse de Pieux Forés VD-F180",
    model: "VD-F180 Rotary",
    shortDescTr: "Bina temelleri, viyadük ve köprü altyapıları için yüksek torklu rotari fore kazık delgi ünitesi.",
    shortDescEn: "High-torque rotary bored piling rig for heavy foundation structures, bridges, and skyscrapers.",
    shortDescDe: "Drehbohrgerät für schwere Fundamentstrukturen, Brücken und Hochhäuser.",
    shortDescFr: "Foreuse rotative pour fondations profondes, ponts et grands ouvrages.",
    fullDescTr: "Derin temel mühendisliğinde yüksek tork üreten rotari kafası ve Teleskobik Kelly bar sistemine sahiptir.",
    fullDescEn: "Features high torque output rotary drive and telescopic Kelly bar system.",
    fullDescDe: "Ausgestattet mit hohem Drehmoment und teleskopierbarer Kellystange.",
    fullDescFr: "Dotée d'un réducteur rotatif puissant et d'une barre Kelly télescopique.",
    image: "/satismakineleri/fore-kazik-cakma-makinesi.jpeg",
    specs: [
      { labelTr: "Maks. Çap", labelEn: "Max Diameter", labelDe: "Max. Durchmesser", labelFr: "Diamètre Max", value: "1,800 mm" },
      { labelTr: "Maks. Derinlik", labelEn: "Max Depth", labelDe: "Max. Tiefe", labelFr: "Profondeur Max", value: "60 m" },
      { labelTr: "Rotari Torku", labelEn: "Max Torque", labelDe: "Drehmoment", labelFr: "Couple Rotatif", value: "180 kNm" },
      { labelTr: "Motor Gücü", labelEn: "Engine Power", labelDe: "Motorleistung", labelFr: "Puissance Moteur", value: "220 kW CAT" },
    ],
    featuresTr: ["Teleskobik Kelly Bar", "Otomatik Derinlik Sensörü", "Ağır Hizmet Şasisi"],
    featuresEn: ["Telescopic Kelly Bar", "Automatic Depth Sensor", "Heavy Duty Chassis"],
    featuresDe: ["Teleskop-Kellystange", "Automatischer Tiefensensor", "Schwerlastfahrwerk"],
    featuresFr: ["Barre Kelly Télescopique", "Capteur de Profondeur", "Châssis Robuste"],
    inStock: true,
  },

  // Jet Grout ve Ankraj Makinaları
  {
    id: "jet-1",
    slug: "vd-j200-jet-grout-ve-ankraj-sondaj-makinesi",
    categorySlug: "jet-grout-ankraj-makinalari",
    nameTr: "VD-J200 Paletli Jet Grout & Zemin Ankraj Makinesi",
    nameEn: "VD-J200 Crawler Jet Grouting & Soil Anchoring Rig",
    nameDe: "VD-J200 Raupen-Düsenstrahl- & Ankerbohrgerät",
    nameFr: "Foreuse Jet Grouting & Ancrage VD-J200",
    model: "VD-J200 Multi-Purpose",
    shortDescTr: "Jet grout kolon uygulamaları, zemin ankrajı ve mikrokazık delgileri için çok yönlü sondaj makinesi.",
    shortDescEn: "Multi-purpose hydraulic rig tailored for jet grout columns, tieback soil anchors, and micropiles.",
    shortDescDe: "Mehrzweck-Bohrgerät für Düsenstrahlsäulen, Verankerungen und Mikropfähle.",
    shortDescFr: "Foreuse polyvalente pour colonnes jet grouting, tirants d'ancrage et micro-pieux.",
    fullDescTr: "Çok yönlü bom hareketleri sayesinde hem dikey hem yatay zemin ankrajı ve Jet Grouting uygulamalarını birleştirir.",
    fullDescEn: "Articulated boom kinematics allow both vertical jet grouting and inclined tieback soil anchor drilling.",
    fullDescDe: "Gelenkausleger ermöglicht vertikale Düsenstrahlbohrungen und geneigte Ankerbohrungen.",
    fullDescFr: "Cinématique articulée permettant le forage vertical et les tirants d'ancrage inclinés.",
    image: "/satismakineleri/sondajmakinesi.jpeg",
    specs: [
      { labelTr: "Kule Yüksekliği", labelEn: "Mast Height", labelDe: "Masthöhe", labelFr: "Hauteur de Mât", value: "18 m" },
      { labelTr: "Rotari Torku", labelEn: "Rotary Torque", labelDe: "Drehmoment", labelFr: "Couple", value: "12,000 Nm" },
      { labelTr: "Delme Çapı", labelEn: "Drill Diameter", labelDe: "Bohrdurchmesser", labelFr: "Diamètre", value: "90 - 300 mm" },
      { labelTr: "Ağırlık", labelEn: "Weight", labelDe: "Gewicht", labelFr: "Poids", value: "11,500 kg" },
    ],
    featuresTr: ["Tek Pasşta 15m Jet Grout", "Yatay & Eğimli Ankraj Bomu", "Çift Mandren Kelepçe"],
    featuresEn: ["Single Pass 15m Jet Grout", "Horizontal & Inclined Boom", "Double Hydraulic Clamp"],
    featuresDe: ["15m Düsenstrahl in einem Durchgang", "Horizontalausleger", "Doppelhydraulikklammer"],
    featuresFr: ["Jet Grouting 15m en une Passe", "Bras Horizontal et Incliné", "Double Margeur Hydraulique"],
    inStock: true,
  },

  // Kompresörler
  {
    id: "kompresor-1",
    slug: "csh1120a-yuksek-basincli-mobil-dizel-hava-kompresoru",
    categorySlug: "kompresorler",
    nameTr: "CSH1120A Yüksek Basınçlı Mobil Dizel Hava Kompresörü",
    nameEn: "CSH1120A High-Pressure Portable Diesel Air Compressor",
    nameDe: "CSH1120A Hochdruck-Fahrbarer Dieselkompressor",
    nameFr: "Compresseur Diesel Portable Haute Pression CSH1120A",
    model: "CSH1120A High Pressure",
    shortDescTr: "Kaya delgi ve DTH çekiç operasyonları için 24 Bar yüksek basınç ve 33 m³/dk hava debisi sağlayan kompresör.",
    shortDescEn: "Heavy-duty portable diesel compressor delivering 24 Bar pressure and 33 m³/min airflow for DTH rock drilling.",
    shortDescDe: "Fahrbarer Dieselkompressor mit 24 bar Druck und 33 m³/min Luftmenge für DTH-Bohrungen.",
    shortDescFr: "Compresseur diesel délivrant 24 bars et 33 m³/min de débit pour forages fond de trou.",
    fullDescTr: "Ağır şantiye şartlarına dayanıklı CSH1120A, derin kaya delgilerinde kesintisiz hava sağlar.",
    fullDescEn: "Heavy-duty portable compressor built for harsh site environments. Supplies continuous air.",
    fullDescDe: "Robustes Aggregat für raue Baustellenbedingungen. Kontinuierliche Druckluftversorgung.",
    fullDescFr: "Conçu pour les environnements de chantier rigoureux. Alimentation en air continue.",
    image: "/satismakineleri/csh1120a-hava-kompresoru.png",
    specs: [
      { labelTr: "Çalışma Basıncı", labelEn: "Working Pressure", labelDe: "Betriebsdruck", labelFr: "Pression de Service", value: "24 Bar (348 PSI)" },
      { labelTr: "Hava Debisi", labelEn: "Free Air Delivery", labelDe: "Liefermenge", labelFr: "Débit d'Air", value: "33 m³/min (1165 CFM)" },
      { labelTr: "Dizel Motor", labelEn: "Diesel Engine", labelDe: "Dieselmotor", labelFr: "Moteur Diesel", value: "Cummins QSL9 (298 kW)" },
      { labelTr: "Şasi Tipi", labelEn: "Chassis", labelDe: "Fahrwerk", labelFr: "Châssis", value: "Mobil Çeki Demirli" },
    ],
    featuresTr: ["İki Kademeli Vida Ünitesi", "Akıllı Kontrol Paneli", "Ses Yalıtımlı Kanopi"],
    featuresEn: ["Two-Stage Screw Air End", "Smart Digital Panel", "Soundproofed Canopy"],
    featuresDe: ["Zweistufiger Verdichter", "Digitales Bedienfeld", "Schallgedämmte Haube"],
    featuresFr: ["Bloc Vis Étagé", "Panneau Numérique Intelligent", "Capot Insonorisé"],
    inStock: true,
  },
  {
    id: "kompresor-2",
    slug: "csh900a-vidali-dizel-hava-kompresoru",
    categorySlug: "kompresorler",
    nameTr: "CSH900A Vidalı Dizel Mobil Hava Kompresörü",
    nameEn: "CSH900A Screw Diesel Portable Air Compressor",
    nameDe: "CSH900A Schrauben-Dieselkompressor",
    nameFr: "Compresseur Diesel à Vis CSH900A",
    model: "CSH900A Standard",
    shortDescTr: "21 Bar basınç ve 25 m³/dk hava debili, yakıt tasarruflu mobil şantiye dizel kompresörü.",
    shortDescEn: "Fuel-efficient mobile diesel compressor providing 21 Bar pressure and 25 m³/min airflow.",
    shortDescDe: "Kraftstoffsparender Kompressor mit 21 bar Druck und 25 m³/min Luftmenge.",
    shortDescFr: "Compresseur économoque en carburant fournissant 21 bars et 25 m³/min de débit.",
    fullDescTr: "Orta ve orta-derin sondaj işleri için yüksek yakıt verimliliği sunan CSH900A.",
    fullDescEn: "Offers superb fuel economy for medium to deep drilling operations.",
    fullDescDe: "Hervorragende Kraftstoffeffizienz für mittlere bis tiefe Bohrungen.",
    fullDescFr: "Excellente économie de carburant pour les forages moyens à profonds.",
    image: "/satismakineleri/csh900a-hava-kompresoru.png",
    specs: [
      { labelTr: "Çalışma Basıncı", labelEn: "Working Pressure", labelDe: "Betriebsdruck", labelFr: "Pression de Service", value: "21 Bar (304 PSI)" },
      { labelTr: "Hava Debisi", labelEn: "Free Air Delivery", labelDe: "Liefermenge", labelFr: "Débit d'Air", value: "25 m³/min (883 CFM)" },
      { labelTr: "Dizel Motor", labelEn: "Diesel Engine", labelDe: "Dieselmotor", labelFr: "Moteur Diesel", value: "Cummins 239 kW" },
    ],
    featuresTr: ["Düşük Yakıt Tüketimi", "Kolay Çalıştırma", "Kompakt Şasi"],
    featuresEn: ["Low Fuel Consumption", "Easy Cold Start", "Compact Chassis"],
    featuresDe: ["Niedriger Verbrauch", "Kaltstarthilfe", "Kompaktes Fahrwerk"],
    featuresFr: ["Faible Consommation", "Démarrage Facile", "Châssis Compact"],
    inStock: true,
  },
];
