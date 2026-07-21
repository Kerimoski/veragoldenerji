"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/context/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

export const Header: React.FC = () => {
  const { t, language } = useTranslation();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

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

  const isTr = language === "tr";

  const productCategories = [
    { key: "sondaj", nameTr: "Sondaj Makinaları", nameEn: "Drilling Rigs", path: "/urunler/sondaj-makinalari" },
    { key: "rock", nameTr: "Rock Makinaları", nameEn: "Rock Machines", path: "/urunler/rock-makinalari" },
    { key: "kazik", nameTr: "Kazık Çakma Makinaları", nameEn: "Pile Driving Rigs", path: "/urunler/kazik-cakma-makinalari" },
    { key: "fore", nameTr: "Fore Kazık Makinaları", nameEn: "Bored Piling Rigs", path: "/urunler/fore-kazik-makinalari" },
    { key: "jet", nameTr: "Jet Grout ve Ankraj Makinaları", nameEn: "Jet Grout & Anchoring Rigs", path: "/urunler/jet-grout-ankraj-makinalari" },
    { key: "kompresor", nameTr: "Kompresörler", nameEn: "Compressors", path: "/urunler/kompresorler" },
  ];

  const servicePages = [
    { nameTr: "Delgi Mühendisliği & Kaya Çakım", nameEn: "Drilling Engineering & Rock Piling", path: "/hizmetler/delgi" },
    { nameTr: "GES & Ağır İş Makinesi Kiralama", nameEn: "Solar & Heavy Rig Rental Fleet", path: "/hizmetler/kiralama" },
    { nameTr: "Enerji Santralleri & Derin Sondaj", nameEn: "Energy Plants & Deep Well Drilling", path: "/hizmetler/enerji" },
    { nameTr: "Makine Danışmanlığı & Filo", nameEn: "Machinery Consulting & Fleet", path: "/hizmetler/makine-danismanligi" },
    { nameTr: "Yedek Parça & Mobil Saha Servisi", nameEn: "Spare Parts & Mobile Field Service", path: "/hizmetler/yedek-parca-servis" },
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
                  <span>// {isTr ? "Ürün Kategorileri" : "Product Categories"}</span>
                  <Link href="/urunler" className="text-zinc-400 hover:text-white text-[9px] uppercase">
                    {isTr ? "Tümü >" : "All >"}
                  </Link>
                </div>
                <div className="space-y-1">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.key}
                      href={cat.path}
                      className="block px-3 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
                    >
                      {isTr ? cat.nameTr : cat.nameEn}
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
                  // {isTr ? "Hizmetlerimiz" : "Our Services"}
                </div>
                <div className="space-y-1">
                  {servicePages.map((srv, idx) => (
                    <Link
                      key={idx}
                      href={srv.path}
                      className="block px-3 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
                    >
                      {isTr ? srv.nameTr : srv.nameEn}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 4. Hizmet Bölgemiz */}
          <Link
            href="/hizmet-bolgemiz"
            className={`text-xs font-mono uppercase tracking-widest transition-colors py-1 ${
              pathname === "/hizmet-bolgemiz" ? "text-[#C59B27] font-bold" : "text-zinc-300 hover:text-white"
            }`}
          >
            {t("nav.map")}
          </Link>

          {/* 5. Galeri */}
          <Link
            href="/galeri"
            className={`text-xs font-mono uppercase tracking-widest transition-colors py-1 ${
              pathname === "/galeri" ? "text-[#C59B27] font-bold" : "text-zinc-300 hover:text-white"
            }`}
          >
            {isTr ? "Galeri" : "Gallery"}
          </Link>

          {/* 6. İletişim */}
          <Link
            href="/iletisim"
            className={`text-xs font-mono uppercase tracking-widest transition-colors py-1 ${
              pathname === "/iletisim" ? "text-[#C59B27] font-bold" : "text-zinc-300 hover:text-white"
            }`}
          >
            {t("nav.contact")}
          </Link>
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
            <span>{isTr ? "İletişime Geç" : "Get In Touch"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <LanguageSelector />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
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
            href="/hizmet-bolgemiz"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-mono uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
          >
            {t("nav.map")}
          </Link>
          <Link
            href="/galeri"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-mono uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
          >
            {isTr ? "Galeri" : "Gallery"}
          </Link>
          <Link
            href="/iletisim"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-mono uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
          >
            {t("nav.contact")}
          </Link>
          <Link
            href="/iletisim"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-mono uppercase tracking-widest py-2 text-[#C59B27] font-bold"
          >
            {isTr ? "İletişime Geç" : "Get In Touch"}
          </Link>
        </div>
      )}
    </header>
  );
};
