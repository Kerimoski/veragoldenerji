"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/context/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const { t, tx } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const productCategories = [
    { key: "rock", names: { tr: "Rock Makinaları", en: "Rock Machines", de: "Gesteinsbohrgeräte", fr: "Foreuses de Roche", it: "Perforatrici da Roccia", es: "Perforadoras de Roca" }, path: "/urunler/rock-makinalari" },
    { key: "sondaj", names: { tr: "Sondaj Makinaları", en: "Drilling Rigs", de: "Bohranlagen", fr: "Foreuses", it: "Perforatrici per Sondaggi", es: "Perforadoras de Sondeo" }, path: "/urunler/sondaj-makinalari" },
    { key: "kompresor", names: { tr: "Hava Kompresör Grubu", en: "Air Compressors", de: "Kompressoren", fr: "Compresseurs d'Air", it: "Compressori d'Aria", es: "Compresores de Aire" }, path: "/urunler/kompresorler" },
    { key: "kazik", names: { tr: "Kazık Çakma Makinaları", en: "Pile Driving Rigs", de: "Rammanlagen", fr: "Sonneuses", it: "Battipalo", es: "Hincadoras de Pilotes" }, path: "/urunler/kazik-cakma-makinalari" },
    { key: "dth", names: { tr: "DTH Ekipmanları & Sarf", en: "DTH Equipment & Spares", de: "DTH-Ausrüstung & Verbrauchsmaterial", fr: "Équipements DTH & Consommables", it: "Attrezzature DTH & Consumo", es: "Equipos DTH & Consumibles" }, path: "/urunler/dth-ekipmanlari" },
  ];

  const servicePages = [
    { names: { tr: "Delgi Mühendisliği & Kaya Çakım", en: "Drilling Engineering & Rock Piling", de: "Bohrtechnik & Felsrammung", fr: "Ingénierie de Forage & Battage en Roche", it: "Ingegneria di Perforazione & Infissione in Roccia", es: "Ingeniería de Perforación & Hincado en Roca" }, path: "/hizmetler/delgi" },
    { names: { tr: "GES & Ağır İş Makinesi Kiralama", en: "Solar & Heavy Rig Rental Fleet", de: "Solar- & Schwermaschinenvermietung", fr: "Location Solaire & Engins Lourds", it: "Noleggio Fotovoltaico & Macchine Pesanti", es: "Alquiler Solar & Maquinaria Pesada" }, path: "/hizmetler/kiralama" },
    { names: { tr: "Derin Sondaj", en: "Deep Drilling", de: "Tiefbohrungen", fr: "Forage Profond", it: "Perforazione Profonda", es: "Perforación Profunda" }, path: "/hizmetler/enerji" },
    { names: { tr: "Makine Danışmanlığı & Filo", en: "Machinery Consulting & Fleet", de: "Maschinenberatung & Flotte", fr: "Conseil Machines & Flotte", it: "Consulenza Macchine & Flotta", es: "Consultoría de Maquinaria & Flota" }, path: "/hizmetler/makine-danismanligi" },
    { names: { tr: "Yedek Parça & Mobil Saha Servisi", en: "Spare Parts & Mobile Field Service", de: "Ersatzteile & Mobiler Außendienst", fr: "Pièces Détachées & Service Mobile", it: "Ricambi & Assistenza Mobile in Cantiere", es: "Repuestos & Servicio Móvil en Obra" }, path: "/hizmetler/yedek-parca-servis" },
    { names: { tr: "Sarf Malzeme & Yedek Parça Satış", en: "Consumables & Spare Parts Sales", de: "Verkauf von Verbrauchsmaterial & Ersatzteilen", fr: "Vente de Consommables & Pièces", it: "Vendita Consumabili & Ricambi", es: "Venta de Consumibles & Repuestos" }, path: "/hizmetler/yedek-parca-servis" },
    { names: { tr: "Saha Operasyonları & Canlı Medya", en: "Field Operations & Live Media", de: "Feldeinsätze & Live-Medien", fr: "Opérations Terrain & Médias en Direct", it: "Operazioni sul Campo & Media Live", es: "Operaciones de Campo & Medios en Directo" }, path: "/operasyonlar" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 py-3 shadow-2xl text-white"
          : "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Logo Container */}
        <Link href="/" className="flex items-center group">
          <div className="py-1 group-hover:scale-102 transition-transform">
            <Image
              src="/Veragold-Logo-400.png"
              alt="Vera Gold Enerji Logo"
              width={180}
              height={45}
              className="h-9 md:h-10 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* 1. Ana Sayfa */}
          <Link
            href="/"
            className={`text-xs font-mono uppercase tracking-widest transition-colors py-1 ${
              pathname === "/" ? "text-[#C59B27] font-bold" : "text-zinc-300 hover:text-white"
            }`}
          >
            {t("nav.home")}
          </Link>

          {/* 2. Ürünlerimiz Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <Link
              href="/urunler"
              className={`text-xs font-mono uppercase tracking-widest transition-colors flex items-center gap-1.5 cursor-pointer ${
                pathname.startsWith("/urunler") ? "text-[#C59B27] font-bold" : "text-zinc-300 hover:text-white"
              }`}
            >
              <span>{t("nav.products")}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductsDropdownOpen ? "rotate-180 text-[#C59B27]" : ""}`} />
            </Link>

            {isProductsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-[290px] bg-zinc-900/95 border border-zinc-800 rounded-2xl shadow-2xl p-3 z-[100] backdrop-blur-xl text-white animate-fadeIn">
                <div className="text-[10px] font-mono font-bold text-[#C59B27] uppercase tracking-widest px-3 py-2 border-b border-zinc-800 mb-2 flex items-center justify-between">
                  <span>// {tx({ tr: "Ürün Kategorileri", en: "Product Categories", de: "Produktkategorien", fr: "Catégories de Produits", it: "Categorie di Prodotti", es: "Categorías de Productos" })}</span>
                  <Link href="/urunler" className="text-zinc-400 hover:text-white text-[9px] uppercase">
                    {tx({ tr: "Tümü >", en: "All >", de: "Alle >", fr: "Tout >", it: "Tutti >", es: "Todos >" })}
                  </Link>
                </div>
                <div className="space-y-1">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.key}
                      href={cat.path}
                      className="block px-3 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
                    >
                      {tx(cat.names)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. Hizmetlerimiz Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Link
              href="/hizmetler"
              className={`text-xs font-mono uppercase tracking-widest transition-colors flex items-center gap-1.5 cursor-pointer ${
                pathname.startsWith("/hizmetler") ? "text-[#C59B27] font-bold" : "text-zinc-300 hover:text-white"
              }`}
            >
              <span>{t("nav.services")}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180 text-[#C59B27]" : ""}`} />
            </Link>

            {isServicesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-[310px] bg-zinc-900/95 border border-zinc-800 rounded-2xl shadow-2xl p-3 z-[100] backdrop-blur-xl text-white animate-fadeIn">
                <div className="text-[10px] font-mono font-bold text-[#C59B27] uppercase tracking-widest px-3 py-2 border-b border-zinc-800 mb-2">
                  // {tx({ tr: "Hizmetlerimiz", en: "Our Services", de: "Unsere Leistungen", fr: "Nos Services", it: "I Nostri Servizi", es: "Nuestros Servicios" })}
                </div>
                <div className="space-y-1">
                  {servicePages.map((srv, idx) => (
                    <Link
                      key={idx}
                      href={srv.path}
                      className="block px-3 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
                    >
                      {tx(srv.names)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 4. Galeri */}
          <Link
            href="/galeri"
            className={`text-xs font-mono uppercase tracking-widest transition-colors py-1 ${
              pathname === "/galeri" ? "text-[#C59B27] font-bold" : "text-zinc-300 hover:text-white"
            }`}
          >
            {tx({ tr: "Galeri", en: "Gallery", de: "Galerie", fr: "Galerie", it: "Galleria", es: "Galería" })}
          </Link>

          {/* 5. İletişim Dropdown (Hizmet Bölgemiz Altında) */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsContactDropdownOpen(true)}
            onMouseLeave={() => setIsContactDropdownOpen(false)}
          >
            <Link
              href="/iletisim"
              className={`text-xs font-mono uppercase tracking-widest transition-colors flex items-center gap-1.5 cursor-pointer ${
                pathname.startsWith("/iletisim") || pathname === "/hizmet-bolgemiz" ? "text-[#C59B27] font-bold" : "text-zinc-300 hover:text-white"
              }`}
            >
              <span>{t("nav.contact")}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isContactDropdownOpen ? "rotate-180 text-[#C59B27]" : ""}`} />
            </Link>

            {isContactDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[240px] bg-zinc-900/95 border border-zinc-800 rounded-2xl shadow-2xl p-3 z-[100] backdrop-blur-xl text-white animate-fadeIn">
                <div className="text-[10px] font-mono font-bold text-[#C59B27] uppercase tracking-widest px-3 py-2 border-b border-zinc-800 mb-2">
                  // {tx({ tr: "İletişim & Konum", en: "Contact & Location", de: "Kontakt & Standort", fr: "Contact & Localisation", it: "Contatti & Sede", es: "Contacto & Ubicación" })}
                </div>
                <div className="space-y-1">
                  <Link
                    href="/iletisim"
                    className="block px-3 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
                  >
                    {tx({ tr: "Teklif & İletişim Formu", en: "Quote & Contact Form", de: "Angebots- & Kontaktformular", fr: "Formulaire de Devis & Contact", it: "Modulo Preventivo & Contatti", es: "Formulario de Presupuesto & Contacto" })}
                  </Link>
                  <Link
                    href="/hizmet-bolgemiz"
                    className="block px-3 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
                  >
                    {tx({ tr: "Hizmet Bölgemiz & Harita", en: "Coverage Map & Regions", de: "Einsatzgebiete & Karte", fr: "Zones d'Intervention & Carte", it: "Aree Servite & Mappa", es: "Zonas de Servicio & Mapa" })}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right: Language Selector + İletişime Geç Button */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Dil Seçeneği */}
          <LanguageSelector />

          {/* İletişime Geç Sharp CTA */}
          <Link
            href="/iletisim"
            className="px-5 py-2.5 rounded-none border border-[#C59B27] bg-[#C59B27]/10 text-[#C59B27] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#C59B27] hover:text-white transition-all shadow-md cursor-pointer flex items-center gap-2"
          >
            <span>{tx({ tr: "İletişime Geç", en: "Get In Touch", de: "Kontakt aufnehmen", fr: "Nous Contacter", it: "Contattaci", es: "Contáctenos" })}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Controls: Language Selector & Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelector />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-400 hover:text-white cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 text-white px-6 py-6 space-y-4 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-mono uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/urunler"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-mono uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
          >
            {t("nav.products")}
          </Link>
          <Link
            href="/hizmetler"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-mono uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
          >
            {t("nav.services")}
          </Link>
          <Link
            href="/galeri"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-mono uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
          >
            {tx({ tr: "Galeri", en: "Gallery", de: "Galerie", fr: "Galerie", it: "Galleria", es: "Galería" })}
          </Link>
          <Link
            href="/hizmet-bolgemiz"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-mono uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
          >
            {t("nav.map")}
          </Link>
          <Link
            href="/iletisim"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-mono uppercase tracking-widest py-2 border-b border-zinc-800 text-white text-[#C59B27]"
          >
            {t("nav.contact")}
          </Link>

          {/* Mobile Language Selector Drawer Row */}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">// {tx({ tr: "DİL SEÇİMİ", en: "LANGUAGE", de: "SPRACHE", fr: "LANGUE", it: "LINGUA", es: "IDIOMA" })}</span>
            <LanguageSelector />
          </div>
        </div>
      )}
    </header>
  );
};
