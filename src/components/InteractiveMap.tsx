"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Globe, MapPin, CheckCircle2, XCircle, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const InteractiveMap: React.FC = () => {
  const { t, language } = useTranslation();
  const [selectedHub, setSelectedHub] = useState<string | null>("west");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    name: string;
    status: "active" | "excluded";
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
      countries: ["Yunanistan", "Bulgaristan", "Romanya", "Sırbistan", "Hırvatistan", "Arnavutluk", "Kuzey Makedonya", "Macaristan", "Slovenya", "Bosna Hersek", "Karadağ", "Kosova"],
      countriesEn: ["Greece", "Bulgaria", "Romania", "Serbia", "Croatia", "Albania", "North Macedonia", "Hungary", "Slovenia", "Bosnia & Herzegovina", "Montenegro", "Kosovo"],
      descriptionTr: "Tüm Balkan ülkelerini kapsayan hızlı lojistik, mobil delgi filoları ve enerji santrali altyapı hizmetlerimiz.",
      descriptionEn: "Our fast logistics, mobile drilling fleets, and power plant infrastructure services covering all Balkan countries.",
      descriptionDe: "Unsere schnellen Logistik-, mobilen Bohrflotten- und Kraftwerksinfrastrukturdienste für alle Balkanländer.",
      descriptionFr: "Nos services logistiques rapides, nos flottes de forage mobiles et nos infrastructures de centrales pour tous les pays des Balkans.",
    },
    {
      id: "central",
      nameTr: "Orta & Kuzey Avrupa",
      nameEn: "Central & Northern Europe",
      nameDe: "Mittel- & Nordeuropa",
      nameFr: "Europe Centrale & du Nord",
      countries: ["Polonya", "Çekya", "Slovakya", "Danimarka", "Litvanya", "Letonya", "Estonya"],
      countriesEn: ["Poland", "Czechia", "Slovakia", "Denmark", "Lithuania", "Latvia", "Estonia"],
      descriptionTr: "Enerji yatırımları ve delgi mühendisliği projelerimizle B2B üretim tesislerini desteklediğimiz kuzey operasyonlarımız.",
      descriptionEn: "Our northern operations supporting B2B production facilities with energy investments and drilling engineering projects.",
      descriptionDe: "Unsere Nordaktivitäten unterstützen B2B-Produktionsanlagen mit Energieinvestitionen und Bohrprojekten.",
      descriptionFr: "Nos opérations nordiques soutiennent les installations B2B avec des investissements énergétiques et des projets de forage.",
    }
  ];

  const excludedCountries = [
    { nameTr: "Birleşik Krallık (İngiltere)", nameEn: "United Kingdom (UK)", nameDe: "Vereinigtes Königreich (UK)", nameFr: "Royaume-Uni (UK)" },
    { nameTr: "İsveç", nameEn: "Sweden", nameDe: "Schweden", nameFr: "Suède" },
    { nameTr: "Norveç", nameEn: "Norway", nameDe: "Norwegen", nameFr: "Norvège" },
    { nameTr: "Finlandiya", nameEn: "Finland", nameDe: "Finnland", nameFr: "Finlande" }
  ];

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResult(null);
      return;
    }
    const query = searchQuery.toLowerCase().trim();
    const isExcluded = excludedCountries.find(
      (c) =>
        c.nameTr.toLowerCase().includes(query) ||
        c.nameEn.toLowerCase().includes(query) ||
        c.nameDe.toLowerCase().includes(query) ||
        c.nameFr.toLowerCase().includes(query)
    );
    if (isExcluded) {
      setSearchResult({
        found: true,
        name: isTr ? isExcluded.nameTr : isDe ? isExcluded.nameDe : isFr ? isExcluded.nameFr : isExcluded.nameEn,
        status: "excluded"
      });
      return;
    }
    for (const hub of hubs) {
      const isTrMatch = hub.countries.find((c) => c.toLowerCase().includes(query));
      const isEnMatch = hub.countriesEn.find((c) => c.toLowerCase().includes(query));
      if (isTrMatch || isEnMatch) {
        const matchedName = isTrMatch || isEnMatch || "";
        setSearchResult({ found: true, name: matchedName, status: "active", region: hub.id });
        setSelectedHub(hub.id);
        return;
      }
    }
    setSearchResult({ found: false, name: searchQuery, status: "excluded" });
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

  return (
    <section id="map" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/30 bg-[#C59B27]/5 text-xs text-[#C59B27] mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>{t("map.activeRegions")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4">
            {t("map.title")}
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base font-semibold leading-relaxed">
            {t("map.subtitle")}
          </p>
        </div>

        {/* Search & Interaction Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <div className="relative">
            <input
              type="text"
              placeholder={isTr ? "Ülke ara (örn: Almanya, İspanya, İsveç)..." : isDe ? "Land suchen (z.B. Deutschland, Spanien)..." : isFr ? "Chercher un pays (ex: Allemagne, Espagne)..." : "Search country (e.g. Germany, Spain, Sweden)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-250 bg-white text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] text-sm transition-all"
            />
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {searchResult && (
            <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white border border-zinc-200 rounded-xl shadow-lg z-30 text-xs flex items-center justify-between font-semibold">
              <span className="text-zinc-700">{searchResult.name}:</span>
              {searchResult.found ? (
                searchResult.status === "active" ? (
                  <span className="text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isTr ? "Aktif Hizmet Bölgesi" : isDe ? "Aktiver Servicebereich" : isFr ? "Zone de service active" : "Active Service Region"}
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" />
                    {isTr ? "Kapsam Dışı" : isDe ? "Außerhalb des Bereichs" : isFr ? "Hors du périmètre" : "Service Excluded"}
                  </span>
                )
              ) : (
                <span className="text-zinc-400">
                  {isTr ? "Bulunamadı (Kapsam Dışı)" : isDe ? "Nicht gefunden" : isFr ? "Non trouvé" : "Not found (Excluded)"}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Real World Map via OpenStreetMap Embed */}
          <div className="lg:col-span-7 bg-zinc-50/50 border border-zinc-200 rounded-3xl p-4 relative min-h-[460px] flex flex-col overflow-hidden shadow-xs">
            {/* Visual Header */}
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-200/50 pb-2 mb-3 flex items-center justify-between">
              <span>{isTr ? "Avrupa Hizmet Haritamız" : isDe ? "Unsere Europa-Servicekarte" : isFr ? "Notre Carte de Service Europe" : "Our Europe Service Map"}</span>
              <span className="flex gap-3">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" />{isTr ? "Aktif" : isDe ? "Aktiv" : isFr ? "Actif" : "Active"}</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400" />{isTr ? "Hariç" : isDe ? "Ausschl." : isFr ? "Exclu" : "Excluded"}</span>
              </span>
            </div>

            {/* Embedded Real Map */}
            <div className="flex-grow rounded-2xl overflow-hidden border border-zinc-200 relative">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-12.0,34.0,42.0,62.0&layer=mapnik&marker=38.4192,27.1287"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
                title="Vera Gold Enerji Europe Service Map"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-10">
                <div className="bg-white/95 backdrop-blur-md border border-zinc-200 rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C59B27] animate-pulse" />
                  <span className="text-[11px] font-bold text-zinc-900">HQ: İzmir, Türkiye</span>
                </div>
                <div className="bg-white/95 backdrop-blur-md border border-zinc-200 rounded-xl px-4 py-2.5 shadow-lg">
                  <span className="text-[11px] font-bold text-emerald-600">
                    {isTr ? "30+ Ülkede Aktif Operasyon" : isDe ? "30+ Länder Aktive Operationen" : isFr ? "30+ Pays Opérations Actives" : "30+ Countries Active Operations"}
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
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    selectedHub === hub.id
                      ? "bg-zinc-950 text-white shadow-sm"
                      : "bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  {getHubName(hub)}
                </button>
              ))}
            </div>
          </div>

          {/* Details & Country Grid Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Region Details */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-xs flex-grow transition-all duration-300 hover:border-zinc-300 min-h-[300px] flex flex-col justify-between">
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
                      <h3 className="text-xl font-bold text-zinc-950">
                        {getHubName(activeHub)}
                      </h3>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-medium">
                      {getHubDesc(activeHub)}
                    </p>
                  </div>

                  {/* Dynamic Country Checklist */}
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider mb-3 border-b border-zinc-100 pb-1">
                      {isTr ? "Bölgede Bulunan Aktif Ülkeler" : isDe ? "Aktive Länder in der Region" : isFr ? "Pays actifs dans la région" : "Active Countries in Region"} ({activeHub.countries.length})
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
                          className="flex items-center gap-2 text-xs text-zinc-700 font-semibold bg-zinc-50 px-3 py-2.5 rounded-lg border border-zinc-150 shadow-2xs hover:border-zinc-200 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{country}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Excluded regions overview */}
            <div className="bg-zinc-50/50 border border-zinc-200 rounded-3xl p-6 shadow-xs">
              <h4 className="text-[10px] font-extrabold text-red-500/80 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-500" />
                {t("map.inactiveRegions")}
              </h4>
              <p className="text-zinc-500 text-xs leading-relaxed mb-4 font-semibold">
                {isTr
                  ? "Aşağıda listelenen ülkeler yeni B2B organizasyonumuzun hizmet kapsamı dışındadır:"
                  : isDe ? "Die folgenden Länder liegen außerhalb unseres B2B-Servicebereichs:"
                  : isFr ? "Les pays suivants sont en dehors de notre périmètre de services B2B :"
                  : "The following nations are outside the scope of our new B2B regional organization:"}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {excludedCountries.map((c) => {
                  const name = isTr ? c.nameTr : isDe ? c.nameDe : isFr ? c.nameFr : c.nameEn;
                  return (
                    <div
                      key={c.nameEn}
                      className="flex items-center gap-2 text-zinc-400 text-xs font-semibold px-3 py-2 rounded-lg bg-white border border-zinc-200 shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" />
                      <span>{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
