"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { B2BServices } from "@/components/B2BServices";
import { useTranslation } from "@/context/LanguageContext";
import { Building2, Briefcase, Cpu, ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24">
        {/* Intro Section */}
        <section className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mb-4">
            {t("nav.services")}
          </h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-3xl mx-auto font-medium">
            {t("services.subtitle")}
          </p>
        </section>

        {/* Services Grid (B2B Reusable component) */}
        <B2BServices />

        {/* Technical Consulting & Support Services */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-950 mb-3">
              {t("consulting.title")}
            </h3>
            <p className="text-zinc-500 text-sm font-semibold max-w-xl mx-auto">
              {t("consulting.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { key: "machineryConsulting", svc: "machinery", path: "/hizmetler/makine-danismanligi", image: "/veragaleri/Makine-6632-scaled.jpg", descKey: "consulting.machineryDesc" },
              { key: "equipmentConsulting", svc: "equipment", path: "/hizmetler/ekipman-danismanligi", image: "/veragaleri/Filtre-6579-scaled.jpg", descKey: "consulting.equipmentDesc" },
              { key: "investmentConsulting", svc: "investment", path: "/hizmetler/yatirim-danismanligi", image: "/veragaleri/Makine-6621-scaled.jpg", descKey: "consulting.investmentDesc" },
              { key: "projectConsulting", svc: "project", path: "/hizmetler/proje-danismanligi", image: "/veragaleri/WhatsApp-Image-2024-10-27-at-21.27.56.jpeg", descKey: "consulting.projectDesc" },
              { key: "spareParts", svc: "spareparts", path: "/hizmetler/yedek-parca-servis", image: "/veragaleri/Filtre-6645-scaled.jpg", descKey: "consulting.sparePartsDesc" }
            ].map((item) => (
              <div 
                key={item.key} 
                className="rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all flex flex-col justify-between shadow-2xs group overflow-hidden"
              >
                {/* Photo Thumbnail */}
                <div className="relative h-36 w-full bg-zinc-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={t(`services.${item.key}`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-zinc-950 group-hover:text-[#C59B27] transition-colors mb-2">
                      {t(`services.${item.key}`)}
                    </h4>
                    <p className="text-zinc-500 text-[11px] font-medium leading-relaxed mb-4">
                      {t(item.descKey)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pt-3 border-t border-zinc-100 mt-2">
                    <Link
                      href={item.path}
                      className="inline-flex items-center justify-between text-[11px] font-bold text-[#C59B27] hover:text-zinc-950 transition-colors"
                    >
                      <span>{t("consulting.viewDetails")}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={`/iletisim?service=${item.svc}`}
                      className="inline-flex items-center justify-between text-[10px] font-semibold text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                      <span>{t("consulting.getOffer")}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* B2B Partnership details */}
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <div className="border border-zinc-200 bg-zinc-50/50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-zinc-950 mb-8 text-center">
              {t("nav.home") === "Ana Sayfa" ? "Neden Vera Gold Enerji?" : t("nav.home") === "Startseite" ? "Warum Vera Gold Enerji?" : t("nav.home") === "Accueil" ? "Pourquoi Vera Gold Enerji ?" : "Why Choose Vera Gold Enerji?"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Point 1 */}
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#C59B27] shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-zinc-950">
                  {t("nav.home") === "Ana Sayfa" ? "B2B Endüstriyel Odak" : t("nav.home") === "Startseite" ? "B2B Industrie-Fokus" : t("nav.home") === "Accueil" ? "Focus B2B Industriel" : "B2B Industrial Focus"}
                </h4>
                <p className="text-zinc-500 text-xs font-semibold leading-relaxed">
                  {t("footer.desc")}
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#10B981] shadow-xs">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-zinc-950">
                  {t("nav.home") === "Ana Sayfa" ? "En Son Teknoloji" : t("nav.home") === "Startseite" ? "Neueste Technologie" : t("nav.home") === "Accueil" ? "Dernière Technologie" : "Cutting-edge Technology"}
                </h4>
                <p className="text-zinc-500 text-xs font-semibold leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#C59B27] shadow-xs">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-zinc-950">
                  {t("nav.home") === "Ana Sayfa" ? "Esnek Çözümler" : t("nav.home") === "Startseite" ? "Flexible Lösungen" : t("nav.home") === "Accueil" ? "Solutions Flexibles" : "Flexible Solutions"}
                </h4>
                <p className="text-zinc-500 text-xs font-semibold leading-relaxed">
                  {t("contact.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
