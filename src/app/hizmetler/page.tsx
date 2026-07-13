"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { B2BServices } from "@/components/B2BServices";
import { useTranslation } from "@/context/LanguageContext";
import { Building2, Briefcase, Cpu, ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const { t } = useTranslation();

  const isTr = t("nav.home") === "Ana Sayfa";

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
            {isTr
              ? "Vera Gold Enerji olarak, ağır sanayi kuruluşları ve altyapı yüklenicileri için anahtar teslim, yüksek mühendislik içeren hizmetler sunuyoruz."
              : "As Vera Gold Enerji, we offer turnkey, high-engineering services for heavy industrial enterprises and infrastructure contractors."}
          </p>
        </section>

        {/* Services Grid (B2B Reusable component) */}
        <B2BServices />

        {/* Technical Consulting & Support Services */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-950 mb-3">
              {isTr ? "Danışmanlık & Destek Hizmetleri" : "Consultancy & Support Services"}
            </h3>
            <p className="text-zinc-500 text-sm font-semibold max-w-xl mx-auto">
              {isTr 
                ? "Sondaj makineleri, delme ekipmanları ve kurumsal yatırımlarınız için sunduğumuz profesyonel mühendislik destekleri."
                : "Professional engineering supports we provide for drilling machinery, excavation gear, and corporate investments."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { key: "machineryConsulting", svc: "machinery", path: "/hizmetler/makine-danismanligi", descTr: "Makine seçimi, tork analizleri ve mekanik performans danışmanlığı.", descEn: "Machinery selection, torque analysis, and mechanical performance consulting." },
              { key: "equipmentConsulting", svc: "equipment", path: "/hizmetler/ekipman-danismanligi", descTr: "Delici matkap uçları, sarf malzemeleri ve operasyonel verimlilik takipleri.", descEn: "Drill bits, consumables, and operational efficiency analysis." },
              { key: "investmentConsulting", svc: "investment", path: "/hizmetler/yatirim-danismanligi", descTr: "B2B makine ve ekipman alımlarında bütçe ve fizibilite raporlamaları.", descEn: "Budget and feasibility reporting for B2B machinery acquisitions." },
              { key: "projectConsulting", svc: "project", path: "/hizmetler/proje-danismanligi", descTr: "Büyük sondaj ve enerji santrali projelerinde mühendislik planlamaları.", descEn: "Engineering planning for large drilling and power plant projects." },
              { key: "spareParts", svc: "spareparts", path: "/hizmetler/yedek-parca-servis", descTr: "Makineleriniz için orijinal yedek parça temini ve periyodik teknik servis.", descEn: "Original spare parts supply and periodic technical maintenance service." }
            ].map((item) => (
              <div 
                key={item.key} 
                className="p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all flex flex-col justify-between shadow-2xs group"
              >
                <div>
                  <h4 className="text-sm font-extrabold text-zinc-950 group-hover:text-[#C59B27] transition-colors mb-2">
                    {t(`services.${item.key}`)}
                  </h4>
                  <p className="text-zinc-400 text-[11px] font-medium leading-relaxed mb-4">
                    {isTr ? item.descTr : item.descEn}
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-3 border-t border-zinc-100 mt-2">
                  <Link
                    href={item.path}
                    className="inline-flex items-center justify-between text-[11px] font-bold text-[#C59B27] hover:text-zinc-950 transition-colors"
                  >
                    <span>{isTr ? "Detayları İncele" : "View Details"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/iletisim?service=${item.svc}`}
                    className="inline-flex items-center justify-between text-[10px] font-semibold text-zinc-400 hover:text-zinc-900 transition-colors"
                  >
                    <span>{isTr ? "Teknik Teklif Al" : "Get Technical Offer"}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* B2B Partnership details in Shadcn style */}
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <div className="border border-zinc-200 bg-zinc-50/50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-zinc-950 mb-8 text-center">
              {isTr ? "Neden Vera Gold Enerji?" : "Why Choose Vera Gold Enerji?"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Point 1 */}
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#C59B27] shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-zinc-950">
                  {isTr ? "B2B Endüstriyel Odak" : "B2B Industrial Focus"}
                </h4>
                <p className="text-zinc-500 text-xs font-semibold leading-relaxed">
                  {isTr
                    ? "Sondaj yapan bireysel kesime değil, fabrikalara, madenlere ve büyük ölçekli tesis üreticilerine doğrudan tedarikçi olarak hizmet veriyoruz."
                    : "We serve factories, mines, and large-scale plant builders directly as a premium supplier, not individual drillers."}
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#10B981] shadow-xs">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-zinc-950">
                  {isTr ? "En Son Teknoloji" : "Cutting-edge Technology"}
                </h4>
                <p className="text-zinc-500 text-xs font-semibold leading-relaxed">
                  {isTr
                    ? "Geniş makine parkımızdaki tüm ekipmanlar, iş güvenliği ve operasyonel verimlilik standartlarını en üst düzeyde karşılar."
                    : "All equipment in our extensive machinery fleet meets the highest standards for safety and operational efficiency."}
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#C59B27] shadow-xs">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-zinc-950">
                  {isTr ? "Esnek Çözümler" : "Flexible Solutions"}
                </h4>
                <p className="text-zinc-500 text-xs font-semibold leading-relaxed">
                  {isTr
                    ? "Uzun vadeli iş ortaklıkları, esnek kiralama modelleri ve anahtar teslim kurulum çözümleriyle her projeye özel yaklaşıyoruz."
                    : "We approach each project individually with long-term B2B relationships, flexible leasing options, and turnkey engineering."}
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
