"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 py-16 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#10B981]/2 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        {/* Brand Info */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/ver.png"
              alt="Vera Gold Enerji Logo"
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-medium">
            {t("footer.desc")}
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="text-zinc-900 text-xs font-bold uppercase tracking-wider mb-4">// {t("nav.services")}</h4>
          <ul className="space-y-3 text-sm font-semibold">
            <li>
              <Link href="/hizmetler/delgi" className="text-zinc-500 hover:text-zinc-950 transition-colors flex items-center gap-1 group">
                {t("services.drill.title")}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/hizmetler/kiralama" className="text-zinc-500 hover:text-zinc-950 transition-colors flex items-center gap-1 group">
                {t("services.rental.title")}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/hizmetler/enerji" className="text-zinc-500 hover:text-zinc-950 transition-colors flex items-center gap-1 group">
                {t("services.energy.title")}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="text-zinc-900 text-xs font-bold uppercase tracking-wider mb-1">// {t("contact.title")}</h4>
          <div className="text-sm text-zinc-500 space-y-2.5 font-medium">
            <p>
              <strong className="text-zinc-800">{t("contact.email")}:</strong>{" "}
              <a href="mailto:info@veragoldenerji.com" className="hover:text-zinc-950 transition-colors">
                info@veragoldenerji.com
              </a>
            </p>
            <p>
              <strong className="text-zinc-800">{t("contact.phone")}:</strong>{" "}
              <span className="flex flex-col gap-0.5">
                <a href="tel:+902325022321" className="hover:text-zinc-950 transition-colors">
                  +90 (232) 502 23 21
                </a>
                <a href="tel:+905066275271" className="hover:text-zinc-950 transition-colors">
                  +90 (506) 627 52 71
                </a>
              </span>
            </p>
            <p className="leading-relaxed">
              <strong className="text-zinc-800">{t("contact.address")} (Ofis):</strong> Passa Plaza No: 8 Kat: 1 Daire: 27, Bornova, İzmir, Türkiye
            </p>
            <p className="leading-relaxed text-xs">
              <strong className="text-zinc-700">Depo:</strong> 6106/17 Sok. No: 10 Egemenlik Mah. Bornova, İzmir, Türkiye
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-semibold relative z-10">
        <p>
          &copy; {currentYear} {t("footer.rights")}
        </p>
        <div className="flex gap-6 items-center">
          <a href="https://instagram.com/veragoldenerji" target="_blank" rel="noopener noreferrer" className="hover:text-[#C59B27] transition-colors">
            Instagram
          </a>
          <a href="https://facebook.com/veragoldenerji" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-650 transition-colors">
            Facebook
          </a>
          <a href="https://linkedin.com/company/veragoldenerji" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-650 transition-colors">
            LinkedIn
          </a>
          <span className="text-zinc-200">|</span>
          <a href="#" className="hover:text-zinc-600 transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};
