"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Globe, MapPin, CheckCircle2, XCircle, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const InteractiveMap: React.FC = () => {
  const { t } = useTranslation();
  const [selectedHub, setSelectedHub] = useState<string | null>("west");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    name: string;
    status: "active" | "excluded";
    region?: string;
  } | null>(null);

  // Define key operational hubs to represent regional coverage
  const hubs = [
    {
      id: "west",
      nameTr: "Batı Avrupa Bölgesi",
      nameEn: "Western Europe Region",
      nameDe: "Westeuropa-Region",
      nameFr: "Région Europe de l'Ouest",
      x: "240",
      y: "340",
      countries: ["Almanya", "Fransa", "Hollanda", "Belçika", "İsviçre", "Avusturya", "Lüksemburg", "İrlanda"],
      countriesEn: ["Germany", "France", "Netherlands", "Belgium", "Switzerland", "Austria", "Luxembourg", "Ireland"],
      descriptionTr: "Endüstriyel santral kurulumları ve kaya delgi projelerimizin yoğunlukta olduğu Batı Avrupa ağımız.",
      descriptionEn: "Our Western European network where industrial power plant installations and rock drilling projects are concentrated.",
      descriptionDe: "Unser westeuropäisches Netzwerk, in dem sich industrielle Kraftwerksinstallationen und Felsbohrprojekte konzentrieren.",
      descriptionFr: "Notre réseau d'Europe occidentale où se concentrent les installations de centrales électriques industrielles et les projets de forage de roches.",
    },
    {
      id: "south",
      nameTr: "Güney Avrupa & Akdeniz",
      nameEn: "Southern Europe & Med",
      nameDe: "Südeuropa & Mittelmeer",
      nameFr: "Europe du Sud & Méditerranée",
      x: "280",
      y: "470",
      countries: ["İspanya", "Portekiz", "İtalya", "Malta", "Kıbrıs"],
      countriesEn: ["Spain", "Portugal", "Italy", "Malta", "Cyprus"],
      descriptionTr: "Delgi mühendisliği, liman altyapısı ve yenilenebilir enerji montaj projelerimizi yönettiğimiz Akdeniz ağı.",
      descriptionEn: "Mediterranean network where we manage drilling engineering, port infrastructure, and renewable energy assembly projects.",
      descriptionDe: "Mittelmeer-Netzwerk, in dem wir Bohrarbeiten, Hafeninfrastruktur und Montageprojekte für erneuerbare Energien verwalten.",
      descriptionFr: "Réseau méditerranéen où nous gérons des projets d'ingénierie de forage, d'infrastructures portuaires et d'assemblage d'énergies renouvelables.",
    },
    {
      id: "balkans",
      nameTr: "Balkanlar & Doğu Avrupa",
      nameEn: "Balkans & Eastern Europe",
      nameDe: "Balkan & Osteuropa",
      nameFr: "Balkans & Europe de l'Est",
      x: "480",
      y: "430",
      countries: ["Yunanistan", "Bulgaristan", "Romanya", "Sırbistan", "Hırvatistan", "Arnavutluk", "Kuzey Makedonya", "Macaristan", "Slovenya", "Bosna Hersek", "Karadağ", "Kosova"],
      countriesEn: ["Greece", "Bulgaria", "Romania", "Serbia", "Croatia", "Albania", "North Macedonia", "Hungary", "Slovenia", "Bosnia & Herzegovina", "Montenegro", "Kosovo"],
      descriptionTr: "Tüm Balkan ülkelerini kapsayan hızlı lojistik, mobil delgi filoları ve enerji santrali altyapı hizmetlerimiz.",
      descriptionEn: "Our fast logistics, mobile drilling fleets, and power plant infrastructure services covering all Balkan countries.",
      descriptionDe: "Unsere schnellen Logistik-, mobilen Bohrflotten- und Kraftwerksinfrastrukturdienste, die alle Balkanländer abdecken.",
      descriptionFr: "Nos services logistiques rapides, nos flottes de forage mobiles et nos services d'infrastructure de centrales électriques couvrant tous les pays des Balkans.",
    },
    {
      id: "central",
      nameTr: "Orta & Kuzey Avrupa",
      nameEn: "Central & Northern Europe",
      nameDe: "Mittel- & Nordeuropa",
      nameFr: "Europe Centrale & du Nord",
      x: "410",
      y: "250",
      countries: ["Polonya", "Çekya", "Slovakya", "Danimarka", "Litvanya", "Letonya", "Estonya"],
      countriesEn: ["Poland", "Czechia", "Slovakia", "Denmark", "Lithuania", "Latvia", "Estonya"],
      descriptionTr: "Enerji yatırımları ve delgi mühendisliği projelerimizle B2B üretim tesislerini desteklediğimiz kuzey operasyonlarımız.",
      descriptionEn: "Our northern operations supporting B2B production facilities with energy investments and drilling engineering projects.",
      descriptionDe: "Unsere Nordaktivitäten unterstützen B2B-Produktionsanlagen mit Energieinvestitionen und Felsbohrprojekten.",
      descriptionFr: "Nos opérations nordiques soutiennent les installations de production B2B avec des investissements énergétiques et des projets de forage de roches.",
    }
  ];

  const excludedCountries = [
    { nameTr: "Birleşik Krallık (İngiltere)", nameEn: "United Kingdom (UK)", nameDe: "Vereinigtes Königreich (UK)", nameFr: "Royaume-Uni (UK)" },
    { nameTr: "İsveç", nameEn: "Sweden", nameDe: "Schweden", nameFr: "Suède" },
    { nameTr: "Norveç", nameEn: "Norway", nameDe: "Norwegen", nameFr: "Norvège" },
    { nameTr: "Finlandiya", nameEn: "Finland", nameDe: "Finnland", nameFr: "Finlande" }
  ];

  // Live country search handling
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResult(null);
      return;
    }

    const query = searchQuery.toLowerCase().trim();

    // Check excluded first
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
        name: t("nav.home") === "Ana Sayfa" ? isExcluded.nameTr : isExcluded.nameEn,
        status: "excluded"
      });
      return;
    }

    // Check active hubs
    for (const hub of hubs) {
      const isTrMatch = hub.countries.find((c) => c.toLowerCase().includes(query));
      const isEnMatch = hub.countriesEn.find((c) => c.toLowerCase().includes(query));
      if (isTrMatch || isEnMatch) {
        const matchedName = isTrMatch || isEnMatch || "";
        setSearchResult({
          found: true,
          name: matchedName,
          status: "active",
          region: hub.id
        });
        setSelectedHub(hub.id); // Auto-focus the corresponding hub
        return;
      }
    }

    // Not found
    setSearchResult({
      found: false,
      name: searchQuery,
      status: "excluded"
    });
  }, [searchQuery]);

  const activeHub = hubs.find((h) => h.id === selectedHub) || hubs[0];
  const isTr = t("nav.home") === "Ana Sayfa";
  const isDe = t("nav.home") === "Startseite";
  const isFr = t("nav.home") === "Accueil";

  return (
    <section id="map" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/30 bg-[#C59B27]/5 text-xs text-[#C59B27] mb-4">
            <Globe className="w-3.5 h-3.5 animate-spin-slow" />
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
              placeholder={isTr ? "Ülke ara (örn: Almanya, İspanya, İsveç)..." : "Search country (e.g. Germany, Spain, Sweden)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-250 bg-white text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] text-sm transition-all"
            />
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Search Feedback Badge */}
          {searchResult && (
            <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white border border-zinc-200 rounded-xl shadow-lg z-30 animate-fadeIn text-xs flex items-center justify-between font-semibold">
              <span className="text-zinc-700">
                {searchResult.name}:
              </span>
              {searchResult.found ? (
                searchResult.status === "active" ? (
                  <span className="text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isTr ? "Aktif Hizmet Bölgesi" : "Active Service Region"}
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" />
                    {isTr ? "Kapsam Dışı / Excluded" : "Service Excluded"}
                  </span>
                )
              ) : (
                <span className="text-zinc-400">
                  {isTr ? "Bulunamadı (Kapsam Dışı)" : "Not found (Excluded)"}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Europe SVG Interactive Vector Graphic */}
          <div className="lg:col-span-7 bg-zinc-50/50 border border-zinc-200 rounded-3xl p-6 relative min-h-[460px] flex flex-col justify-between overflow-hidden shadow-xs">
            {/* Visual Header */}
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-200/50 pb-2 mb-4">
              {isTr ? "İnteraktif Avrupa Bölge Haritası" : "Interactive Europe Region Map"}
            </div>

            {/* Europe Vector SVG */}
            <div className="relative flex-grow flex items-center justify-center">
              <svg
                viewBox="0 0 800 600"
                className="w-full h-auto max-w-[550px] opacity-90 transition-opacity duration-300"
              >
                {/* Dashed Scandinavian boundary */}
                <path
                  d="M 370,10 L 590,10 L 610,210 L 410,250 Z"
                  fill="rgba(239, 68, 68, 0.015)"
                  stroke="rgba(239, 68, 68, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                />
                <text x="510" y="90" fill="rgba(239, 68, 68, 0.5)" fontSize="11" textAnchor="middle" fontWeight="bold">
                  SCANDINAVIA (EXCLUDED)
                </text>

                {/* Dashed UK boundary */}
                <path
                  d="M 140,150 L 250,110 L 270,260 L 160,290 Z"
                  fill="rgba(239, 68, 68, 0.015)"
                  stroke="rgba(239, 68, 68, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                />
                <text x="205" y="200" fill="rgba(239, 68, 68, 0.5)" fontSize="11" textAnchor="middle" fontWeight="bold">
                  UK (EXCLUDED)
                </text>

                {/* Operations Boundary Overlay */}
                <polygon
                  points="210,310 430,220 620,240 730,480 440,550 250,510"
                  fill="rgba(16, 185, 129, 0.03)"
                  stroke="rgba(16, 185, 129, 0.15)"
                  strokeWidth="1"
                />
                <text x="470" y="360" fill="rgba(16, 185, 129, 0.2)" fontSize="15" letterSpacing="4" textAnchor="middle" fontWeight="extrabold">
                  VERA GOLD SERVICE ZONE
                </text>

                {/* Curved logistics flows from İzmir (HQ) to selected active hub */}
                {activeHub && (
                  <>
                    {/* Glowing path underlay */}
                    <path
                      d={
                        activeHub.id === "west" ? "M 520 490 Q 380 415, 240 340" :
                        activeHub.id === "south" ? "M 520 490 Q 400 480, 280 470" :
                        activeHub.id === "balkans" ? "M 520 490 Q 500 460, 480 430" :
                        "M 520 490 Q 465 370, 410 250"
                      }
                      fill="none"
                      stroke="rgba(197, 155, 39, 0.15)"
                      strokeWidth="3"
                      className="transition-all duration-500"
                    />
                    {/* Active flow dashed line */}
                    <path
                      d={
                        activeHub.id === "west" ? "M 520 490 Q 380 415, 240 340" :
                        activeHub.id === "south" ? "M 520 490 Q 400 480, 280 470" :
                        activeHub.id === "balkans" ? "M 520 490 Q 500 460, 480 430" :
                        "M 520 490 Q 465 370, 410 250"
                      }
                      fill="none"
                      stroke="#C59B27"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="flow-active"
                    />
                    {/* Flowing photon particle along path */}
                    <circle r="4" fill="#10B981" filter="drop-shadow(0px 0px 4px #10B981)">
                      <animateMotion
                        dur="2.5s"
                        repeatCount="indefinite"
                        path={
                          activeHub.id === "west" ? "M 520 490 Q 380 415, 240 340" :
                          activeHub.id === "south" ? "M 520 490 Q 400 480, 280 470" :
                          activeHub.id === "balkans" ? "M 520 490 Q 500 460, 480 430" :
                          "M 520 490 Q 465 370, 410 250"
                        }
                      />
                    </circle>
                  </>
                )}

                {/* HQ Point (İzmir) */}
                <g transform="translate(520, 490)" className="select-none">
                  <circle r="12" fill="rgba(197, 155, 39, 0.15)" className="animate-pulse" />
                  <circle r="5" fill="#C59B27" />
                  <circle r="2" fill="#ffffff" />
                  <text x="0" y="18" fill="#C59B27" fontSize="8" fontWeight="extrabold" textAnchor="middle">
                    HQ (İZMİR)
                  </text>
                </g>

                {/* Interactive Points with large hitboxes */}
                {hubs.map((hub) => {
                  const isSelected = selectedHub === hub.id;
                  return (
                    <g
                      key={hub.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedHub(hub.id)}
                    >
                      {/* Hardware-accelerated CSS Ripple */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r="8"
                        fill="none"
                        stroke={isSelected ? "#10B981" : "#C59B27"}
                        className="map-ripple"
                        style={{ transformOrigin: `${hub.x}px ${hub.y}px` }}
                      />
                      {/* Ambient hover circle */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r="14"
                        fill={isSelected ? "rgba(16, 185, 129, 0.12)" : "rgba(197, 155, 39, 0.06)"}
                        className="hover:scale-110 transition-transform duration-200"
                        style={{ transformOrigin: `${hub.x}px ${hub.y}px` }}
                      />
                      {/* Center Node */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r="6"
                        fill={isSelected ? "#10B981" : "#C59B27"}
                      />
                      {/* Label */}
                      <text
                        x={hub.x}
                        y={Number(hub.y) - 18}
                        fill="#09090b"
                        fontSize="9"
                        fontWeight="bold"
                        textAnchor="middle"
                        className="bg-white/80 select-none shadow-xs"
                      >
                        {isTr ? hub.nameTr.split(" ")[0] : hub.nameEn.split(" ")[0]}
                      </text>

                      {/* Large Transparent Hitbox for easy clicking (Mobile/Desktop) */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r="35"
                        fill="transparent"
                        className="cursor-pointer"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Instruction Footer overlay */}
            <div className="border-t border-zinc-200/50 pt-2 flex items-center justify-between text-xs text-zinc-500 font-semibold mt-4">
              <span>{isTr ? "💡 Haritadaki merkez noktalara tıklayarak bölgeleri değiştirebilirsiniz." : "💡 Click on map node points to switch regions."}</span>
              <span className="flex gap-4">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#C59B27]" />{isTr ? "Aktif" : "Active"}</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />{isTr ? "Hariç" : "Excluded"}</span>
              </span>
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
                        {isTr ? activeHub.nameTr : activeHub.nameEn}
                      </h3>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-medium">
                      {isTr ? activeHub.descriptionTr : activeHub.descriptionEn}
                    </p>
                  </div>

                  {/* Dynamic Country Checklist of Selected Region */}
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider mb-3 border-b border-zinc-100 pb-1">
                      {isTr ? "Bölgede Bulunan Aktif Ülkeler" : "Active Countries in Region"} ({activeHub.countries.length})
                    </h4>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.03
                          }
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
                {t("map.inactiveRegions")} (İngiltere & İskandinavya)
              </h4>
              <p className="text-zinc-500 text-xs leading-relaxed mb-4 font-semibold">
                {isTr 
                  ? "Aşağıda listelenen ülkeler yeni B2B organizasyonumuzun hizmet kapsamı dışındadır:" 
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
