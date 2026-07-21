"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Globe, MapPin, CheckCircle2, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

export const InteractiveMap: React.FC = () => {
  const { t, language } = useTranslation();
  const [selectedHub, setSelectedHub] = useState<string | null>("west");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    name: string;
    region?: string;
  } | null>(null);

  const isTr = language === "tr";
  const isDe = language === "de";
  const isFr = language === "fr";

  const hubs = [
    {
      id: "west",
      nameTr: "Batı Avrupa Bölgesi",
      nameEn: "Western Europe Region",
      nameDe: "Westeuropa-Region",
      nameFr: "Région Europe de l'Ouest",
      countries: ["Almanya", "Fransa", "Hollanda", "Belçika", "İsviçre", "Avusturya", "Lüksemburg", "İrlanda"],
      countriesEn: ["Germany", "France", "Netherlands", "Belgium", "Switzerland", "Austria", "Luxembourg", "Ireland"],
      descriptionTr: "Endüstriyel santral kurulumları ve kaya delgi projelerimizin yoğunlukta olduğu Batı Avrupa ağımız.",
      descriptionEn: "Our Western European network where industrial power plant installations and rock drilling projects are concentrated.",
      descriptionDe: "Unser westeuropäisches Netzwerk, in dem sich industrielle Kraftwerksinstallationen und Felsbohrprojekte konzentrieren.",
      descriptionFr: "Notre réseau d'Europe occidentale où se concentrent les installations de centrales industrielles et les projets de forage.",
    },
    {
      id: "south",
      nameTr: "Güney Avrupa & Akdeniz",
      nameEn: "Southern Europe & Med",
      nameDe: "Südeuropa & Mittelmeer",
      nameFr: "Europe du Sud & Méditerranée",
      countries: ["İspanya", "Portekiz", "İtalya", "Malta", "Kıbrıs"],
      countriesEn: ["Spain", "Portugal", "Italy", "Malta", "Cyprus"],
      descriptionTr: "Delgi mühendisliği, liman altyapısı ve yenilenebilir enerji montaj projelerimizi yönettiğimiz Akdeniz ağı.",
      descriptionEn: "Mediterranean network where we manage drilling engineering, port infrastructure, and renewable energy assembly projects.",
      descriptionDe: "Mittelmeer-Netzwerk, in dem wir Bohrarbeiten, Hafeninfrastruktur und Projekte für erneuerbare Energien verwalten.",
      descriptionFr: "Réseau méditerranéen où nous gérons des projets d'ingénierie de forage et d'assemblage d'énergies renouvelables.",
    },
    {
      id: "balkans",
      nameTr: "Balkanlar & Doğu Avrupa",
      nameEn: "Balkans & Eastern Europe",
      nameDe: "Balkan & Osteuropa",
      nameFr: "Balkans & Europe de l'Est",
      countries: ["Yunanistan", "Bulgaristan", "Romanya", "Sırbistan", "Hırvatistan", "Arnavutluk", "Kuzey Makedonya", "Macaristan", "Slovenya", "Bosna Hersek", "Karadağ", "Kosova", "Türkiye"],
      countriesEn: ["Greece", "Bulgaria", "Romania", "Serbia", "Croatia", "Albania", "North Macedonia", "Hungary", "Slovenia", "Bosnia & Herzegovina", "Montenegro", "Kosovo", "Türkiye"],
      descriptionTr: "Tüm Balkan ülkelerini kapsayan hızlı lojistik, mobil delgi filoları ve enerji santrali altyapı hizmetlerimiz.",
      descriptionEn: "Our fast logistics, mobile drilling fleets, and power plant infrastructure services covering all Balkan countries.",
      descriptionDe: "Unsere schnellen Logistik-, mobilen Bohrflotten- und Kraftwerksinfrastrukturdienste für alle Balkanländer.",
      descriptionFr: "Nos services logistiques rapides, nos flottes de forage mobiles et nos infrastructures de centrales pour tous les pays des Balkans.",
    },
    {
      id: "north",
      nameTr: "Kuzey Avrupa & İskandinavya",
      nameEn: "Northern Europe & Scandinavia",
      nameDe: "Nordeuropa & Skandinavien",
      nameFr: "Europe du Nord & Scandinavie",
      countries: ["Birleşik Krallık", "İsveç", "Norveç", "Finlandiya", "Danimarka", "İzlanda"],
      countriesEn: ["United Kingdom", "Sweden", "Norway", "Finland", "Denmark", "Iceland"],
      descriptionTr: "Kuzey Avrupa ve İskandinavya'daki enerji altyapısı, rüzgar santrali ve sondaj mühendisliği projelerimiz.",
      descriptionEn: "Our energy infrastructure, wind farm construction, and drilling engineering projects in Northern Europe and Scandinavia.",
      descriptionDe: "Unsere Energieinfrastruktur-, Windpark- und Bohrprojekte in Nordeuropa und Skandinavien.",
      descriptionFr: "Nos projets d'infrastructure énergétique, de construction éolienne et d'ingénierie de forage en Europe du Nord et en Scandinavie.",
    },
    {
      id: "central",
      nameTr: "Orta Avrupa",
      nameEn: "Central Europe",
      nameDe: "Mitteleuropa",
      nameFr: "Europe Centrale",
      countries: ["Polonya", "Çekya", "Slovakya", "Litvanya", "Letonya", "Estonya"],
      countriesEn: ["Poland", "Czechia", "Slovakia", "Lithuania", "Latvia", "Estonia"],
      descriptionTr: "Enerji yatırımları ve delgi mühendisliği projelerimizle B2B üretim tesislerini desteklediğimiz orta Avrupa operasyonlarımız.",
      descriptionEn: "Our Central European operations supporting B2B production facilities with energy investments and drilling engineering projects.",
      descriptionDe: "Unsere mitteleuropäischen Aktivitäten unterstützen B2B-Produktionsanlagen mit Energieinvestitionen und Bohrprojekten.",
      descriptionFr: "Nos opérations en Europe centrale soutiennent les installations B2B avec des investissements énergétiques et des projets de forage.",
    }
  ];

  // All countries flat list for search
  const allCountries = hubs.flatMap(h => h.countries.map((c, i) => ({ tr: c, en: h.countriesEn[i], hubId: h.id })));

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResult(null);
      return;
    }
    const query = searchQuery.toLowerCase().trim();
    const match = allCountries.find(
      (c) => c.tr.toLowerCase().includes(query) || c.en.toLowerCase().includes(query)
    );
    if (match) {
      setSearchResult({ found: true, name: isTr ? match.tr : match.en, region: match.hubId });
      setSelectedHub(match.hubId);
    } else {
      setSearchResult({ found: false, name: searchQuery });
    }
  }, [searchQuery]);

  const activeHub = hubs.find((h) => h.id === selectedHub) || hubs[0];

  const getHubName = (hub: typeof hubs[0]) => {
    if (isDe) return hub.nameDe;
    if (isFr) return hub.nameFr;
    if (isTr) return hub.nameTr;
    return hub.nameEn;
  };

  const getHubDesc = (hub: typeof hubs[0]) => {
    if (isDe) return hub.descriptionDe;
    if (isFr) return hub.descriptionFr;
    if (isTr) return hub.descriptionTr;
    return hub.descriptionEn;
  };

  // Total active countries
  const totalCountries = new Set(hubs.flatMap(h => h.countriesEn)).size;

  return (
    <section id="map" className="py-24 relative overflow-hidden bg-zinc-950 text-white border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>// {t("map.activeRegions")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white mb-4 font-sans">
            {t("map.title")}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            {isTr ? "Vera Gold Enerji olarak, İskandinavya ve Birleşik Krallık dahil tüm Avrupa kıtasında aktif operasyonel hizmet sağlıyoruz."
            : isDe ? "Als Vera Gold Enerji bieten wir aktive operative Dienstleistungen auf dem gesamten europäischen Kontinent einschließlich Skandinavien und dem Vereinigten Königreich."
            : isFr ? "En tant que Vera Gold Enerji, nous fournissons des services opérationnels actifs sur l'ensemble du continent européen, y compris la Scandinavie et le Royaume-Uni."
            : "As Vera Gold Enerji, we provide active operational services across the entire European continent including Scandinavia and the United Kingdom."}
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <div className="relative">
            <input
              type="text"
              placeholder={isTr ? "Ülke ara (örn: Almanya, İsveç, Norveç)..." : isDe ? "Land suchen (z.B. Deutschland, Schweden)..." : isFr ? "Chercher un pays (ex: Allemagne, Suède)..." : "Search country (e.g. Germany, Sweden, Norway)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:border-[#C59B27] text-sm transition-all shadow-inner"
            />
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {searchResult && (
            <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-30 text-xs flex items-center justify-between font-mono">
              <span className="text-zinc-300">{searchResult.name}:</span>
              {searchResult.found ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {isTr ? "Aktif Hizmet Bölgesi ✓" : isDe ? "Aktiver Servicebereich ✓" : isFr ? "Zone de service active ✓" : "Active Service Region ✓"}
                </span>
              ) : (
                <span className="text-zinc-500">
                  {isTr ? "Bulunamadı" : isDe ? "Nicht gefunden" : isFr ? "Non trouvé" : "Not found"}
                </span>
              )}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
        >
          {/* Real World Map Embed Container */}
          <div className="lg:col-span-7 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-4 relative min-h-[460px] flex flex-col overflow-hidden shadow-xl">
            {/* Header */}
            <div className="text-[10px] font-mono font-extrabold text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-2 mb-3 flex items-center justify-between">
              <span>// {isTr ? "Avrupa Hizmet Haritamız" : isDe ? "Unsere Europa-Servicekarte" : isFr ? "Notre Carte de Service Europe" : "Our Europe Service Map"}</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {isTr ? "Tüm Avrupa Aktif" : isDe ? "Ganz Europa Aktiv" : isFr ? "Toute l'Europe Active" : "All Europe Active"}
              </span>
            </div>

            {/* Embedded OpenStreetMap */}
            <div className="flex-grow rounded-2xl overflow-hidden border border-zinc-800 relative">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-12.0,34.0,42.0,62.0&layer=mapnik&marker=38.4192,27.1287"
                className="w-full h-full min-h-[400px] border-0 filter invert contrast-125 brightness-90 saturate-50 opacity-90"
                loading="lazy"
                title="Vera Gold Enerji Europe Service Map"
              />

              {/* Overlay Badges */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-20">
                <div className="bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C59B27] animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-white">HQ: İzmir, Türkiye</span>
                </div>
                <div className="bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-xl px-4 py-2.5 shadow-lg">
                  <span className="text-[11px] font-mono font-bold text-emerald-400">
                    {totalCountries}+ {isTr ? "Ülkede Aktif Operasyon" : isDe ? "Länder Aktive Operationen" : isFr ? "Pays Opérations Actives" : "Countries Active Operations"}
                  </span>
                </div>
              </div>
            </div>

            {/* Region Quick Switch Tabs */}
            <div className="flex flex-wrap gap-2 mt-3">
              {hubs.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub.id)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedHub === hub.id
                      ? "bg-white text-zinc-950 shadow-sm"
                      : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                  }`}
                >
                  {getHubName(hub)}
                </button>
              ))}
            </div>
          </div>

          {/* Details & Country Grid Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Region Details Card */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 shadow-xl flex-grow transition-all duration-300 min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHub}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-grow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-[#C59B27]" />
                      <h3 className="text-xl font-bold text-white">
                        {getHubName(activeHub)}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                      {getHubDesc(activeHub)}
                    </p>
                  </div>

                  {/* Dynamic Country Checklist */}
                  <div>
                    <h4 className="text-[10px] font-mono font-extrabold uppercase text-[#C59B27] tracking-wider mb-3 border-b border-zinc-800 pb-1">
                      // {isTr ? "Aktif Ülkeler" : "Active Countries"} ({activeHub.countries.length})
                    </h4>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.03 }
                        }
                      }}
                      className="grid grid-cols-2 gap-2"
                    >
                      {(isTr ? activeHub.countries : activeHub.countriesEn).map((country) => (
                        <motion.div
                          key={country}
                          variants={{
                            hidden: { opacity: 0, y: 8 },
                            visible: { opacity: 1, y: 0 }
                          }}
                          className="flex items-center gap-2 text-xs text-zinc-300 font-medium bg-zinc-950 px-3 py-2.5 rounded-lg border border-zinc-800/80 shadow-inner"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{country}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Total Coverage Stats Card with AnimatedCounter */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 shadow-xl text-white">
              <h4 className="text-[10px] font-mono font-extrabold text-[#C59B27] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                // {isTr ? "Toplam Kapsam Alanı" : isDe ? "Gesamtabdeckung" : isFr ? "Couverture Totale" : "Total Coverage Area"}
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white font-mono">
                    <AnimatedCounter value={totalCountries} suffix="+" />
                  </div>
                  <div className="text-[10px] font-mono font-semibold text-zinc-400 mt-1 uppercase tracking-wider">{isTr ? "Aktif Ülke" : isDe ? "Aktive Länder" : isFr ? "Pays Actifs" : "Active Countries"}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#C59B27] font-mono">
                    <AnimatedCounter value={hubs.length} />
                  </div>
                  <div className="text-[10px] font-mono font-semibold text-zinc-400 mt-1 uppercase tracking-wider">{isTr ? "Operasyon Bölgesi" : isDe ? "Einsatzgebiete" : isFr ? "Zones Opérations" : "Operation Zones"}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-emerald-400 font-mono">
                    <AnimatedCounter value={7} suffix="/24" prefix="" />
                  </div>
                  <div className="text-[10px] font-mono font-semibold text-zinc-400 mt-1 uppercase tracking-wider">{isTr ? "Lojistik Destek" : isDe ? "Logistik-Support" : isFr ? "Support Logistique" : "Logistics Support"}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
