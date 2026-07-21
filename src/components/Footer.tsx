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
    <footer className="bg-zinc-950 text-white border-t border-zinc-800/80 py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C59B27]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        {/* Brand Info */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/Veragold-Logo-400.png"
              alt="Vera Gold Enerji Logo"
              width={180}
              height={45}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-medium">
            {t("footer.desc")}
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="text-[#C59B27] text-xs font-mono font-bold uppercase tracking-widest mb-4">// {t("nav.services")}</h4>
          <ul className="space-y-3 text-xs font-mono">
            <li>
              <Link href="/hizmetler/delgi" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1 group">
                {t("services.drill.title")}
                <ArrowUpRight className="w-3 h-3 text-[#C59B27] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/hizmetler/kiralama" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1 group">
                {t("services.rental.title")}
                <ArrowUpRight className="w-3 h-3 text-[#C59B27] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/hizmetler/enerji" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1 group">
                {t("services.energy.title")}
                <ArrowUpRight className="w-3 h-3 text-[#C59B27] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/operasyonlar" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1 group">
                {t("nav.operations")}
                <ArrowUpRight className="w-3 h-3 text-[#C59B27] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4">
          <h4 className="text-[#C59B27] text-xs font-mono font-bold uppercase tracking-widest mb-4">// {t("nav.contact")}</h4>
          <address className="not-italic text-xs font-mono text-zinc-400 space-y-2 leading-relaxed">
            <p className="text-white font-bold">Vera Gold Enerji A.Ş.</p>
            <p>Fatih Mh. 1184 Sk. No: 6 Sarnıç / Gaziemir - İzmir</p>
            <p className="text-[#C59B27]">info@veragoldenerji.com</p>
            <p className="text-emerald-400">+90 232 502 23 21</p>
          </address>
        </div>
      </div>

      {/* Sub-footer copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4 relative z-10">
        <div>
          © {currentYear} Vera Gold Enerji. {t("footer.rights")}
        </div>
        <div className="flex items-center gap-6">
          <Link href="/hizmet-bolgemiz" className="hover:text-zinc-300 transition-colors">
            {t("nav.map")}
          </Link>
          <Link href="/urunler" className="hover:text-zinc-300 transition-colors">
            {t("nav.products")}
          </Link>
          <Link href="/iletisim" className="hover:text-zinc-300 transition-colors">
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
};
