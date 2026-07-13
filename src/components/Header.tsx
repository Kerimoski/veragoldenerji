"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/context/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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

  const isTr = t("nav.home") === "Ana Sayfa";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-zinc-200 py-4 shadow-sm"
          : "bg-white/50 backdrop-blur-sm border-b border-zinc-150 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/ver.png"
            alt="Vera Gold Enerji Logo"
            width={160}
            height={40}
            className="h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Home Link */}
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors relative py-1 ${
              pathname === "/" ? "text-[#C59B27]" : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            {t("nav.home")}
          </Link>

          {/* Services Dropdown Parent */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`text-sm font-semibold transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                pathname.startsWith("/hizmetler") ? "text-[#C59B27]" : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <span>{t("nav.services")}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Card */}
            {isDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white border border-zinc-200 rounded-2xl shadow-xl p-5 z-[100] animate-fadeIn grid grid-cols-2 gap-6 backdrop-blur-md">
                {/* Core Services Column */}
                <div>
                  <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 border-b border-zinc-100 pb-1">
                    {isTr ? "Uygulama & Kiralama" : "Execution & Rental"}
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/hizmetler/delgi"
                        className="block px-2.5 py-1.5 rounded-lg hover:bg-zinc-50 transition-colors"
                      >
                        <div className="text-xs font-bold text-zinc-950">{t("services.drill.title")}</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">{t("services.drill.short")}</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hizmetler/kiralama"
                        className="block px-2.5 py-1.5 rounded-lg hover:bg-zinc-50 transition-colors"
                      >
                        <div className="text-xs font-bold text-zinc-950">{t("services.rental.title")}</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">{t("services.rental.short")}</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hizmetler/enerji"
                        className="block px-2.5 py-1.5 rounded-lg hover:bg-zinc-50 transition-colors"
                      >
                        <div className="text-xs font-bold text-zinc-950">{t("services.energy.title")}</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">{t("services.energy.short")}</div>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Consultancy Column */}
                <div>
                  <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 border-b border-zinc-100 pb-1">
                    {isTr ? "Danışmanlık & Servis" : "Consultancy & Service"}
                  </h4>
                  <ul className="space-y-1">
                    {[
                      { key: "machineryConsulting", path: "/hizmetler/makine-danismanligi" },
                      { key: "equipmentConsulting", path: "/hizmetler/ekipman-danismanligi" },
                      { key: "investmentConsulting", path: "/hizmetler/yatirim-danismanligi" },
                      { key: "projectConsulting", path: "/hizmetler/proje-danismanligi" },
                      { key: "spareParts", path: "/hizmetler/yedek-parca-servis" }
                    ].map((item) => (
                      <li key={item.key}>
                        <Link
                          href={item.path}
                          className="block px-2.5 py-1 rounded-lg hover:bg-zinc-50 transition-colors text-xs font-semibold text-zinc-700 hover:text-zinc-950"
                        >
                          {t(`services.${item.key}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Map Link */}
          <Link
            href="/hizmet-bolgemiz"
            className={`text-sm font-semibold transition-colors relative py-1 ${
              pathname === "/hizmet-bolgemiz" ? "text-[#C59B27]" : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            {t("nav.map")}
          </Link>

          {/* Gallery Link */}
          <Link
            href="/galeri"
            className={`text-sm font-semibold transition-colors relative py-1 ${
              pathname === "/galeri" ? "text-[#C59B27]" : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            {t("nav.gallery")}
          </Link>

          {/* Contact Link */}
          <Link
            href="/iletisim"
            className={`text-sm font-semibold transition-colors relative py-1 ${
              pathname === "/iletisim" ? "text-[#C59B27]" : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-900 text-white font-semibold text-xs transition-colors shadow-sm"
          >
            <span>{t("nav.getQuote")}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSelector />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg border border-zinc-200 text-zinc-600 hover:text-zinc-950 bg-white/80"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 px-6 py-6 flex flex-col gap-6 animate-slideDown shadow-lg max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-sm font-bold transition-colors ${
                pathname === "/" ? "text-[#C59B27]" : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {t("nav.home")}
            </Link>

            {/* Hizmetlerimiz Accordion */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors flex items-center justify-between focus:outline-none cursor-pointer"
              >
                <span>{t("nav.services")}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-3 flex flex-col gap-3 border-l border-zinc-200 mt-2">
                  <Link href="/hizmetler/delgi" onClick={() => setIsOpen(false)} className="text-xs font-bold text-zinc-700 hover:text-[#C59B27]">{t("services.drill.title")}</Link>
                  <Link href="/hizmetler/kiralama" onClick={() => setIsOpen(false)} className="text-xs font-bold text-zinc-700 hover:text-[#C59B27]">{t("services.rental.title")}</Link>
                  <Link href="/hizmetler/enerji" onClick={() => setIsOpen(false)} className="text-xs font-bold text-zinc-700 hover:text-[#C59B27]">{t("services.energy.title")}</Link>
                  <hr className="border-zinc-100 my-1" />
                  <Link href="/hizmetler/makine-danismanligi" onClick={() => setIsOpen(false)} className="text-xs font-semibold text-zinc-500 hover:text-[#C59B27]">{t("services.machineryConsulting")}</Link>
                  <Link href="/hizmetler/ekipman-danismanligi" onClick={() => setIsOpen(false)} className="text-xs font-semibold text-zinc-500 hover:text-[#C59B27]">{t("services.equipmentConsulting")}</Link>
                  <Link href="/hizmetler/yatirim-danismanligi" onClick={() => setIsOpen(false)} className="text-xs font-semibold text-zinc-500 hover:text-[#C59B27]">{t("services.investmentConsulting")}</Link>
                  <Link href="/hizmetler/proje-danismanligi" onClick={() => setIsOpen(false)} className="text-xs font-semibold text-zinc-500 hover:text-[#C59B27]">{t("services.projectConsulting")}</Link>
                  <Link href="/hizmetler/yedek-parca-servis" onClick={() => setIsOpen(false)} className="text-xs font-semibold text-zinc-500 hover:text-[#C59B27]">{t("services.spareParts")}</Link>
                </div>
              )}
            </div>

            {/* Map */}
            <Link
              href="/hizmet-bolgemiz"
              onClick={() => setIsOpen(false)}
              className={`text-sm font-bold transition-colors ${
                pathname === "/hizmet-bolgemiz" ? "text-[#C59B27]" : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {t("nav.map")}
            </Link>

            {/* Gallery */}
            <Link
              href="/galeri"
              onClick={() => setIsOpen(false)}
              className={`text-sm font-bold transition-colors ${
                pathname === "/galeri" ? "text-[#C59B27]" : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {t("nav.gallery")}
            </Link>

            {/* Contact */}
            <Link
              href="/iletisim"
              onClick={() => setIsOpen(false)}
              className={`text-sm font-bold transition-colors ${
                pathname === "/iletisim" ? "text-[#C59B27]" : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {t("nav.contact")}
            </Link>
          </nav>
          <hr className="border-zinc-200" />
          <Link
            href="/iletisim"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-lg bg-zinc-950 text-white font-bold text-sm shadow-sm"
          >
            <span>{t("nav.getQuote")}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
};

