export interface Product {
  id: string;
  slug: string;
  categorySlug: string;
  categoryNameTr: string;
  categoryNameEn: string;
  nameTr: string;
  nameEn: string;
  model: string;
  shortDescTr: string;
  shortDescEn: string;
  fullDescTr: string;
  fullDescEn: string;
  image: string;
  gallery?: string[];
  specs: {
    labelTr: string;
    labelEn: string;
    value: string;
  }[];
  featuresTr: string[];
  featuresEn: string[];
  inStock: boolean;
}

export interface ProductCategory {
  slug: string;
  nameTr: string;
  nameEn: string;
  descTr: string;
  descEn: string;
  iconName: string;
  coverImage: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "sondaj-makinalari",
    nameTr: "Sondaj Makinaları",
    nameEn: "Drilling Rigs",
    descTr: "Derin su sondajı, zemin etüdü ve karotlu delgi operasyonları için ağır hizmet hidrolik sondaj makinaları.",
    descEn: "Heavy-duty hydraulic drilling rigs for deep water wells, geotechnical surveying, and core drilling operations.",
    iconName: "Drill",
    coverImage: "/satismakineleri/sondaj-14.07.2023-19-09-01.jpg",
  },
  {
    slug: "rock-makinalari",
    nameTr: "Rock Makinaları",
    nameEn: "Rock Machines",
    descTr: "En sert granit, bazalt ve kaya formasyonlarında yüksek penetrasyon sağlayan paletli kaya delgi makinaları.",
    descEn: "Crawler rock drills delivering high penetration rates in hard granite, basalt, and tough rock formations.",
    iconName: "Pickaxe",
    coverImage: "/satismakineleri/Paletli-Rock-Makina.jpg",
  },
  {
    slug: "kazik-cakma-makinalari",
    nameTr: "Kazık Çakma Makinaları",
    nameEn: "Pile Driving Rigs",
    descTr: "Güneş enerjisi (GES) sahaları ve altyapı projeleri için yüksek hassasiyetli hidrolik kazık çakma makinaları.",
    descEn: "High-precision hydraulic pile drivers engineered for solar farm construction and foundation piling.",
    iconName: "Hammer",
    coverImage: "/satismakineleri/kazıkçakma.jpeg",
  },
  {
    slug: "fore-kazik-makinalari",
    nameTr: "Fore Kazık Makinaları",
    nameEn: "Bored Piling Rigs",
    descTr: "Derin temel mühendisliği ve köprü/bina alt altyapısı için yüksek torklu fore kazık delme sistemleri.",
    descEn: "High-torque rotary drilling rigs for deep foundation engineering and heavy structural bored piling.",
    iconName: "Layers",
    coverImage: "/satismakineleri/forekazıkçakmamakinesi.jpeg",
  },
  {
    slug: "jet-grout-ankraj-makinalari",
    nameTr: "Jet Grout ve Ankraj Makinaları",
    nameEn: "Jet Grouting & Anchoring Rigs",
    descTr: "Zemin iyileştirme, mikrokazık, zemin ankrajı ve jet grout enjeksiyonu için çok yönlü paletli sondaj üniteleri.",
    descEn: "Versatile crawler rigs designed for ground improvement, micro-piling, soil anchoring, and jet grouting.",
    iconName: "Cpu",
    coverImage: "/satismakineleri/sondajmakinesi.jpeg",
  },
  {
    slug: "kompresorler",
    nameTr: "Kompresörler",
    nameEn: "Air Compressors",
    descTr: "Zorlu şantiye koşullarında DTH çekiç ve kaya delgi sistemlerini besleyen yüksek basınçlı dizel kompresörler.",
    descEn: "High-pressure diesel air compressors powering DTH hammers and rock drills in demanding site conditions.",
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
    categoryNameTr: "Sondaj Makinaları",
    categoryNameEn: "Drilling Rigs",
    nameTr: "VD-S300 Derin Su & Zemin Sondaj Makinesi",
    nameEn: "VD-S300 Deep Water & Geotechnical Drilling Rig",
    model: "VD-S300 High-Torque",
    shortDescTr: "300 metre delme kapasitesine sahip, çamur sirkülasyonlu ve hidrolik kuleli endüstriyel sondaj makinesi.",
    shortDescEn: "Industrial drilling rig with 300m depth capacity, mud circulation system, and hydraulic mast.",
    fullDescTr: "Vera Gold Enerji güvencesiyle sunulan VD-S300, derin su sondajı, zemin etüdü ve maden arama operasyonlarında yüksek performans sağlar. Çamur pompası ve yüksek kule kaldırma kapasitesi sayesinde zorlu formasyonlarda kesintisiz çalışır.",
    fullDescEn: "Delivering exceptional performance in deep water well boring, soil exploration, and mineral drilling. Features integrated mud pump and heavy hydraulic mast lifting capacity.",
    image: "/satismakineleri/sondaj-14.07.2023-19-09-01.jpg",
    specs: [
      { labelTr: "Delme Derinliği", labelEn: "Drilling Depth", value: "300 - 450 m" },
      { labelTr: "Delme Çapı", labelEn: "Drill Diameter", value: "110 - 350 mm" },
      { labelTr: "Motor Gücü", labelEn: "Engine Power", value: "132 kW Dizel" },
      { labelTr: "Tork Kapasitesi", labelEn: "Torque", value: "8,500 Nm" },
    ],
    featuresTr: [
      "Entegre Ağır Hizmet Çamur Pompası",
      "Otomatik Tij Ekleme Sistemi",
      "Paletli Mobil Şasi",
      "Ergonomik Operatör Kontrol Paneli"
    ],
    featuresEn: [
      "Integrated Heavy Mud Pump",
      "Automatic Drill Rod Handling",
      "Tracked Mobile Chassis",
      "Ergonomic Operator Control Panel"
    ],
    inStock: true,
  },
  {
    id: "sondaj-2",
    slug: "vd-s500-hidrolik-sondaj-kulesi",
    categorySlug: "sondaj-makinalari",
    categoryNameTr: "Sondaj Makinaları",
    categoryNameEn: "Drilling Rigs",
    nameTr: "VD-S500 Hidrolik Karotlu Sondaj Kulesi",
    nameEn: "VD-S500 Hydraulic Wireline Core Rig",
    model: "VD-S500 Crawler",
    shortDescTr: "Maden arama ve derin zemin karot sondajları için yüksek devirli hidrolik delme ünitesi.",
    shortDescEn: "High-speed hydraulic wireline coring rig for mineral exploration and deep geotechnical sampling.",
    fullDescTr: "Maden sahalarında yüksek kaliteli karot numunesi almak için tasarlanan VD-S500, hassas basınç ayarları ve yüksek dönme hızıyla formasyon bozunumunu en aza indirir.",
    fullDescEn: "Designed for taking pristine core samples in mining sites. Offers precision pressure regulation and high rotation speeds.",
    image: "/veragaleri/Makine-6610-scaled.jpg",
    specs: [
      { labelTr: "Karot Derinliği", labelEn: "Coring Depth", value: "500 - 800 m" },
      { labelTr: "Kafa Devri", labelEn: "Head RPM", value: "0 - 1200 RPM" },
      { labelTr: "Şasi Tipi", labelEn: "Chassis", value: "Ağır Paletli" },
    ],
    featuresTr: [
      "Wireline Tambur Sistemi",
      "Yüksek Hızlı Rotasyon Kafası",
      "Düşük Yakıt Tüketimli Motor"
    ],
    featuresEn: [
      "Wireline Winch System",
      "High Speed Rotation Head",
      "Fuel Efficient Diesel Engine"
    ],
    inStock: true,
  },

  // Rock Makinaları
  {
    id: "rock-1",
    slug: "paletli-rock-makinesi-fd580",
    categorySlug: "rock-makinalari",
    categoryNameTr: "Rock Makinaları",
    categoryNameEn: "Rock Machines",
    nameTr: "FD580 Ağır Hizmet Paletli Rock Makinesi",
    nameEn: "FD580 Heavy-Duty Crawler Rock Drill",
    model: "FD580 Heavy Rock",
    shortDescTr: "Maden ocakları, taş ocakları ve yol yapım patlatma delikleri için yüksek darbeli DTH kaya delici.",
    shortDescEn: "High-impact DTH crawler rock drill for quarrying, open-pit mining, and blast hole drilling.",
    fullDescTr: "Sert granit ve kalker kayalarda hızlı patlatma deliği delmek için geliştirilen FD580, güçlü palet yapısı ve yüksek hava debili kompresör uyumu ile şantiyenizin üretkenliğini katlar.",
    fullDescEn: "Engineered for rapid blast hole drilling in tough granite and limestone. Combines heavy-duty crawler tracks with seamless DTH compressor integration.",
    image: "/satismakineleri/Paletli-Rock-Makina.jpg",
    specs: [
      { labelTr: "Delgi Çapı", labelEn: "Hole Diameter", value: "90 - 165 mm" },
      { labelTr: "Delgi Derinliği", labelEn: "Hole Depth", value: "25 m" },
      { labelTr: "Darbeli Çekiç Tipi", labelEn: "DTH Hammer", value: "4\" / 5\" / 6\" DTH" },
      { labelTr: "Motor", labelEn: "Engine", value: "Cummins Dizel 194 kW" },
    ],
    featuresTr: [
      "Tungsten Karbür Uçlu Delgi Desteği",
      "Toz Toplama & Emiş Filtre Sistemi",
      "Ağır Arazi Şasi Tırmanma Açısı (30°)",
      "ROPS/FOPS Güvenlikli Kabin"
    ],
    featuresEn: [
      "Tungsten Carbide Bit Support",
      "Integrated Dust Collector System",
      "High Gradeability Track Chassis (30°)",
      "ROPS/FOPS Certified Cabin"
    ],
    inStock: true,
  },
  {
    id: "rock-2",
    slug: "vd-r450-kompakt-kaya-delici",
    categorySlug: "rock-makinalari",
    categoryNameTr: "Rock Makinaları",
    categoryNameEn: "Rock Machines",
    nameTr: "VD-R450 Kompakt Şantiye Rock Makinesi",
    nameEn: "VD-R450 Compact Site Rock Drill",
    model: "VD-R450 Compact",
    shortDescTr: "Dar alanlarda, şev kayalarında ve altyapı kazılarında esnek manevra kabiliyetine sahip kaya delici.",
    shortDescEn: "Agile rock drill with high maneuverability for tight work sites, slope stabilization, and trenching.",
    fullDescTr: "Dar alanlarda yüksek performans gösteren VD-R450, otoyol kenarı şev ankrajları ve temel kaya kırma işlerinde ideal çözümdür.",
    fullDescEn: "Offers exceptional agility in restricted spaces. Perfect for slope anchoring along highways and foundation rock excavation.",
    image: "/veragaleri/Rock-makinasi-fd580.jpeg",
    specs: [
      { labelTr: "Delgi Çapı", labelEn: "Hole Diameter", value: "76 - 127 mm" },
      { labelTr: "Ağırlık", labelEn: "Weight", value: "7,200 kg" },
    ],
    featuresTr: [
      "Esnek Bom Açılanması",
      "Kompakt Şasi Ölçüleri",
      "Kolay Nakliye Tasarımı"
    ],
    featuresEn: [
      "Flexible Boom Articulation",
      "Compact Transport Dimensions",
      "Easy Lowboy Transport"
    ],
    inStock: true,
  },

  // Kazık Çakma Makinaları
  {
    id: "kazik-1",
    slug: "mz460y-gunes-enerjisi-ges-kazik-cakma-makinesi",
    categorySlug: "kazik-cakma-makinalari",
    categoryNameTr: "Kazık Çakma Makinaları",
    categoryNameEn: "Pile Driving Rigs",
    nameTr: "MZ460Y Güneş Enerjisi (GES) Kazık Çakma Makinesi",
    nameEn: "MZ460Y Solar Farm (PV) Pile Driving Rig",
    model: "MZ460Y Solar Piler",
    shortDescTr: "Güneş santrali (GES) arazi çakım projeleri için özel tasarlanmış, hidrolik çekiçli yüksek hızlı kazık çakma makinesi.",
    shortDescEn: "Specially designed hydraulic pile driver for solar farm substructures with high-frequency hammering.",
    fullDescTr: "GES arazilerinde C ve U profilli çelik çakım kazıklarını milimetrik dikey açı doğruluğu ile çakan MZ460Y, günlük 400+ kazık çakım kapasitesiyle projelerinizde maksimum hız sağlar.",
    fullDescEn: "Drives C and U-section steel posts with millimetric vertical angle precision on solar farm terrains. Delivers over 400 piles per day output.",
    image: "/satismakineleri/kazıkçakma.jpeg",
    specs: [
      { labelTr: "Çakım Uzunluğu", labelEn: "Max Pile Length", value: "4,600 mm" },
      { labelTr: "Çekiç Darbe Gücü", labelEn: "Impact Energy", value: "1,200 J" },
      { labelTr: "Darbe Frekansı", labelEn: "Impact Frequency", value: "500 - 900 bpm" },
      { labelTr: "Motor", labelEn: "Engine", value: "Yuchai 60 kW Dizel" },
    ],
    featuresTr: [
      "Açı Ölçerli Dikey Hizalama Kontrolü",
      "Yüksek Frekanslı Hidrolik Çekiç",
      "Paletli Kauçuk / Çelik Pabuç Seçeneği",
      "Düşük İşletme Maliyeti"
    ],
    featuresEn: [
      "Digital Inclinometer Alignment",
      "High Frequency Hydraulic Hammer",
      "Rubber / Steel Track Shoes",
      "Low Operational Cost"
    ],
    inStock: true,
  },

  // Fore Kazık Makinaları
  {
    id: "fore-1",
    slug: "vd-f180-agir-hizmet-fore-kazik-makinesi",
    categorySlug: "fore-kazik-makinalari",
    categoryNameTr: "Fore Kazık Makinaları",
    categoryNameEn: "Bored Piling Rigs",
    nameTr: "VD-F180 Ağır Hizmet Fore Kazık Makinesi",
    nameEn: "VD-F180 Heavy-Duty Rotary Bored Piling Rig",
    model: "VD-F180 Rotary",
    shortDescTr: "Bina temelleri, viyadük ve köprü altyapıları için yüksek torklu rotari fore kazık delgi ünitesi.",
    shortDescEn: "High-torque rotary bored piling rig for heavy foundation structures, bridges, and skyscrapers.",
    fullDescTr: "Derin temel mühendisliğinde yüksek tork üreten rotari kafası ve Teleskobik Kelly bar sistemiyle geniş çaplı ve derin fore kazık delgilerini sorunsuz gerçekleştirir.",
    fullDescEn: "Features high torque output rotary drive and telescopic Kelly bar system for large diameter, deep bored pile foundations.",
    image: "/satismakineleri/forekazıkçakmamakinesi.jpeg",
    specs: [
      { labelTr: "Maks. Kazık Çapı", labelEn: "Max Pile Diameter", value: "1,800 mm" },
      { labelTr: "Maks. Kazık Derinliği", labelEn: "Max Depth", value: "60 m" },
      { labelTr: "Rotari Torku", labelEn: "Max Torque", value: "180 kNm" },
      { labelTr: "Motor Gücü", labelEn: "Engine Power", value: "220 kW CAT" },
    ],
    featuresTr: [
      "Teleskobik Friction / Interlocking Kelly Bar",
      "Otomatik Delgi Derinlik Sensörü",
      "Ağır Hizmet Paletli Alt Şasi",
      "Gelişmiş Dokunmatik LCD Ekran Kontrolü"
    ],
    featuresEn: [
      "Telescopic Friction / Interlocking Kelly Bar",
      "Automatic Depth Sensor",
      "Heavy Duty Extendable Track Undercarriage",
      "Advanced Touchscreen LCD Controls"
    ],
    inStock: true,
  },

  // Jet Grout ve Ankraj Makinaları
  {
    id: "jet-1",
    slug: "vd-j200-jet-grout-ve-ankraj-sondaj-makinesi",
    categorySlug: "jet-grout-ankraj-makinalari",
    categoryNameTr: "Jet Grout ve Ankraj Makinaları",
    categoryNameEn: "Jet Grouting & Anchoring Rigs",
    nameTr: "VD-J200 Paletli Jet Grout & Zemin Ankraj Makinesi",
    nameEn: "VD-J200 Crawler Jet Grouting & Soil Anchoring Rig",
    model: "VD-J200 Multi-Purpose",
    shortDescTr: "Jet grout kolon uygulamaları, zemin ankrajı ve mikrokazık delgileri için çok yönlü hidrolik sondaj makinesi.",
    shortDescEn: "Multi-purpose hydraulic rig tailored for jet grout column jetting, tieback soil anchors, and micropiles.",
    fullDescTr: "Çok yönlü bom hareketleri ve yüksek kule yüksekliği sayesinde hem dikey hem yatay zemin ankrajı ve Jet Grouting enjeksiyon delgilerini tek bir makinede buluşturur.",
    fullDescEn: "Articulated boom kinematics allow both vertical jet grouting and inclined tieback soil anchor drilling on a single machine.",
    image: "/satismakineleri/sondajmakinesi.jpeg",
    specs: [
      { labelTr: "Maks. Kule Yüksekliği", labelEn: "Mast Height", value: "18 m" },
      { labelTr: "Rotari Torku", labelEn: "Rotary Torque", value: "12,000 Nm" },
      { labelTr: "Delme Çapı", labelEn: "Drill Diameter", value: "90 - 300 mm" },
      { labelTr: "Ağırlık", labelEn: "Weight", value: "11,500 kg" },
    ],
    featuresTr: [
      "Tek Pasşta 15m Jet Grout Kapasitesi",
      "Yatay & Eğimli Ankraj Bomu",
      "Çift Mandren Kelepçe Sistemi",
      "Yüksek Basınçlı Enjeksiyon Uyumu"
    ],
    featuresEn: [
      "Single Pass 15m Jet Grout Capacity",
      "Horizontal & Inclined Anchor Boom",
      "Double Hydraulic Clamp & Breaker",
      "High Pressure Grout Swivel Integrated"
    ],
    inStock: true,
  },

  // Kompresörler
  {
    id: "kompresor-1",
    slug: "csh1120a-yuksek-basincli-mobil-dizel-hava-kompresoru",
    categorySlug: "kompresorler",
    categoryNameTr: "Kompresörler",
    categoryNameEn: "Air Compressors",
    nameTr: "CSH1120A Yüksek Basınçlı Mobil Dizel Hava Kompresörü",
    nameEn: "CSH1120A High-Pressure Portable Diesel Air Compressor",
    model: "CSH1120A High Pressure",
    shortDescTr: "Kaya delgi ve DTH çekiç operasyonları için 24 Bar yüksek basınç ve 33 m³/dk hava debisi sağlayan dizel kompresör.",
    shortDescEn: "Heavy-duty portable diesel compressor delivering 24 Bar pressure and 33 m³/min airflow for DTH rock drilling.",
    fullDescTr: "Ağır şantiye şartlarına dayanıklı CSH1120A dizel hava kompresörü, derin kaya delgilerinde DTH çekiçlerin ihtiyaç duyduğu yüksek basınçlı havayı kesintisiz üretir.",
    fullDescEn: "Heavy-duty portable compressor built for harsh site environments. Supplies continuous high-pressure air for deep rock DTH drilling operations.",
    image: "/satismakineleri/csh1120a-hava-kompresoru.png",
    specs: [
      { labelTr: "Çalışma Basıncı", labelEn: "Working Pressure", value: "24 Bar (348 PSI)" },
      { labelTr: "Hava Debisi (FAD)", labelEn: "Free Air Delivery", value: "33 m³/min (1165 CFM)" },
      { labelTr: "Dizel Motor", labelEn: "Diesel Engine", value: "Cummins QSL9 (298 kW)" },
      { labelTr: "Şasi Tipi", labelEn: "Chassis", value: "Tekerlekli Mobil Çeki Demirli" },
    ],
    featuresTr: [
      "İki Kademeli Vida Ünitesi",
      "Akıllı Elektronik Kontrol Paneli",
      "Ağır Şantiye Ses Yalıtımlı Kanopi",
      "Otomatik Sıcaklık & Koruma Kapatması"
    ],
    featuresEn: [
      "Two-Stage Screw Air End",
      "Smart Digital Control Panel",
      "Heavy Duty Soundproofed Canopy",
      "Automatic High-Temp Safety Shutdown"
    ],
    inStock: true,
  },
  {
    id: "kompresor-2",
    slug: "csh900a-vidali-dizel-hava-kompresoru",
    categorySlug: "kompresorler",
    categoryNameTr: "Kompresörler",
    categoryNameEn: "Air Compressors",
    nameTr: "CSH900A Vidalı Dizel Mobil Hava Kompresörü",
    nameEn: "CSH900A Screw Diesel Portable Air Compressor",
    model: "CSH900A Standard",
    shortDescTr: "21 Bar basınç ve 25 m³/dk hava debili, yakıt tasarruflu mobil şantiye dizel kompresörü.",
    shortDescEn: "Fuel-efficient mobile diesel compressor providing 21 Bar pressure and 25 m³/min airflow.",
    fullDescTr: "Orta ve orta-derin sondaj ve kaya delgi işleri için mükemmel yakıt verimliliği sunan CSH900A, uzun ömürlü dizel motoru ve düşük bakım gereksinimiyle öne çıkar.",
    fullDescEn: "Offers superb fuel economy for medium to deep drilling operations. Highlighted by low maintenance demands and long engine life.",
    image: "/satismakineleri/csh900a-hava-kompresoru.png",
    specs: [
      { labelTr: "Çalışma Basıncı", labelEn: "Working Pressure", value: "21 Bar (304 PSI)" },
      { labelTr: "Hava Debisi (FAD)", labelEn: "Free Air Delivery", value: "25 m³/min (883 CFM)" },
      { labelTr: "Dizel Motor", labelEn: "Diesel Engine", value: "Cummins 239 kW" },
    ],
    featuresTr: [
      "Düşük Yakıt Tüketimi",
      "Soğuk Hava Kolay Çalıştırma",
      "Kompakt Mobil Şasi"
    ],
    featuresEn: [
      "Low Fuel Consumption",
      "Cold Weather Easy Start",
      "Compact Mobile Chassis"
    ],
    inStock: true,
  },
];
