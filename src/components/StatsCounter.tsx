"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { CheckCircle2, ShieldCheck, Zap, Activity, Drill } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { motion } from "framer-motion";

export const StatsCounter: React.FC = () => {
  const { t, language } = useTranslation();
  const isTr = language === "tr";

  const stats = [
    {
      icon: <Activity className="w-5 h-5 text-[#C59B27]" />,
      target: 500000,
      suffix: "m+",
      labelTr: "Toplam Delgi / Çakım Uzunluğu",
      labelEn: "Total Meters Drilled / Piled",
    },
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      target: 120,
      suffix: "+",
      labelTr: "GES Santrali Altyapısı Projesi",
      labelEn: "Completed Solar Power Sites",
    },
    {
      icon: <Drill className="w-5 h-5 text-[#C59B27]" />,
      target: 40,
      suffix: "+",
      labelTr: "Aktif Makine & Ekipman Parkı",
      labelEn: "Active Machinery & Fleet Rigs",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      target: 100,
      prefix: "%",
      suffix: "",
      labelTr: "Saha İş Güvenliği & Uyum",
      labelEn: "On-Site Safety & Compliance",
    }
  ];

  return (
    <section className="py-20 bg-zinc-950 text-white border-y border-zinc-800/80 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,155,39,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 shadow-xl hover:border-[#C59B27]/50 hover:bg-zinc-900 transition-all flex flex-col items-center text-center gap-3 group"
            >
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                {stat.icon}
              </div>

              {/* Number with AnimatedCounter */}
              <div className="text-3xl md:text-4xl font-black text-white font-mono tracking-tight flex items-baseline justify-center mt-1">
                <AnimatedCounter
                  value={stat.target}
                  duration={2200}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              </div>

              {/* Label */}
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest leading-relaxed mt-1">
                {isTr ? stat.labelTr : stat.labelEn}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
