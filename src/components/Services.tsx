"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import { ThreeDCard } from "./ThreeDCard";
import { Pickaxe, Truck, Zap, ArrowRight } from "lucide-react";

export const Services: React.FC = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      id: "drill",
      icon: <Pickaxe className="w-8 h-8 text-[#C59B27]" />,
      path: "/hizmetler/delgi",
      gradient: "from-[#C59B27]/5 to-transparent",
      borderColor: "group-hover:border-[#C59B27]/30",
      svgGraphic: (
        <svg viewBox="0 0 200 100" className="w-full h-24 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
          {/* Ground Layers */}
          <line x1="10" y1="80" x2="190" y2="80" stroke="#bbb" strokeWidth="2" />
          <line x1="20" y1="90" x2="180" y2="90" stroke="#ddd" strokeWidth="4" />
          {/* Drill Rig abstract */}
          <path d="M 100,80 L 100,20 L 90,80 Z" fill="#C59B27" />
          <path d="M 85,20 L 115,20" stroke="#C59B27" strokeWidth="2" />
          {/* Energy spark at drill tip */}
          <circle cx="100" cy="80" r="8" fill="#10B981" className="animate-pulse" />
          <line x1="100" y1="20" x2="100" y2="80" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      id: "rental",
      icon: <Truck className="w-8 h-8 text-[#C59B27]" />,
      path: "/hizmetler/kiralama",
      gradient: "from-[#10B981]/5 to-transparent",
      borderColor: "group-hover:border-[#10B981]/30",
      svgGraphic: (
        <svg viewBox="0 0 200 100" className="w-full h-24 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
          {/* Machine Track / Wheels abstract */}
          <rect x="50" y="60" width="100" height="20" rx="10" fill="none" stroke="#C59B27" strokeWidth="3" />
          <circle cx="70" cy="70" r="8" fill="#C59B27" />
          <circle cx="100" cy="70" r="8" fill="#C59B27" />
          <circle cx="130" cy="70" r="8" fill="#C59B27" />
          {/* Mechanical Arm */}
          <path d="M 80,60 L 50,30 L 110,15" stroke="#C59B27" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Connector points */}
          <circle cx="50" cy="30" r="4" fill="#10B981" />
          <circle cx="110" cy="15" r="4" fill="#10B981" />
        </svg>
      )
    },
    {
      id: "energy",
      icon: <Zap className="w-8 h-8 text-[#C59B27]" />,
      path: "/hizmetler/enerji",
      gradient: "from-[#C59B27]/5 via-[#10B981]/2 to-transparent",
      borderColor: "group-hover:border-[#10B981]/30",
      svgGraphic: (
        <svg viewBox="0 0 200 100" className="w-full h-24 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
          {/* Solar Panel grid abstract */}
          <polygon points="30,80 70,30 110,30 70,80" fill="none" stroke="#C59B27" strokeWidth="1.5" />
          <line x1="50" y1="80" x2="90" y2="30" stroke="#C59B27" strokeWidth="1.5" />
          <line x1="45" y1="55" x2="85" y2="55" stroke="#C59B27" strokeWidth="1" />
          {/* Wind Turbine abstract */}
          <line x1="150" y1="80" x2="150" y2="35" stroke="#10B981" strokeWidth="2" />
          <circle cx="150" cy="35" r="4" fill="#10B981" />
          <path d="M 150,35 L 135,20 M 150,35 L 165,20 M 150,35 L 150,55" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-base md:text-lg font-medium">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((svc) => {
            const title = t(`services.${svc.id}.title`);
            const shortDesc = t(`services.${svc.id}.short`);
            const features = t(`services.${svc.id}.features`) as string[];

            return (
              <ThreeDCard key={svc.id} className="group">
                {/* Inner container */}
                <div className="h-full bg-white border border-zinc-200 p-8 rounded-3xl flex flex-col justify-between relative z-20 overflow-hidden shadow-xs hover:border-zinc-300 transition-colors">
                  {/* Subtle Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`} />

                  {/* Icon & SVG Graphic */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                        {svc.icon}
                      </div>
                      <span className="text-zinc-400 text-xs font-mono font-semibold uppercase tracking-widest">
                        // {svc.id.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-zinc-950 mb-4 group-hover:text-[#C59B27] transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-medium">
                      {shortDesc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-8">
                      {Array.isArray(features) &&
                        features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs text-zinc-700 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* SVG Illustration & Button */}
                  <div className="mt-auto">
                    <div className="mb-6">
                      {svc.svgGraphic}
                    </div>

                    <Link
                      href={svc.path}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-zinc-950 hover:bg-[#C59B27] text-white hover:text-black border border-zinc-200 hover:border-[#C59B27] transition-all duration-200 font-bold text-xs group/btn"
                    >
                      <span>{t("services.learnMore")}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ThreeDCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
