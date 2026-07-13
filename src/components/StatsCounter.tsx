"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";

export const StatsCounter: React.FC = () => {
  const { t } = useTranslation();
  const isTr = t("nav.home") === "Ana Sayfa";

  const stats = [
    {
      icon: <Activity className="w-5 h-5 text-[#C59B27]" />,
      target: 500000,
      suffix: "+",
      labelTr: "Metre Toplam Delgi / Çakım",
      labelEn: "Total Meters Drilled / Piled",
      format: (val: number) => val.toLocaleString()
    },
    {
      icon: <Zap className="w-5 h-5 text-[#10B981]" />,
      target: 120,
      suffix: "+",
      labelTr: "Tamamlanan GES Sahası Altyapısı",
      labelEn: "Completed Solar Power Sites",
      format: (val: number) => val.toString()
    },
    {
      icon: <Activity className="w-5 h-5 text-[#C59B27]" />,
      target: 40,
      suffix: "+",
      labelTr: "Aktif Makine ve Ekipman Parkı",
      labelEn: "Active Machinery & Fleet Units",
      format: (val: number) => val.toString()
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      target: 0,
      suffix: "",
      labelTr: "Hata ve Gecikme Oranı",
      labelEn: "Error and Delay Rate",
      format: (val: number) => val.toString()
    }
  ];

  // A simple counting animation trigger
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds counting animation
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCounts(
        stats.map((s) => {
          if (s.target === 0) return 0;
          const val = Math.round((s.target / steps) * currentStep);
          return val > s.target ? s.target : val;
        })
      );

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-zinc-50 border-y border-zinc-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-2xs hover:border-zinc-300 transition-colors flex flex-col items-center text-center gap-3 group"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-150 flex items-center justify-center shadow-3xs group-hover:scale-105 transition-transform">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight flex items-baseline justify-center">
                <span>{stat.format(counts[idx])}</span>
                <span className="text-[#C59B27] ml-0.5">{stat.suffix}</span>
              </div>

              {/* Label */}
              <div className="text-xs font-extrabold text-zinc-500 uppercase tracking-wider leading-relaxed">
                {isTr ? stat.labelTr : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
