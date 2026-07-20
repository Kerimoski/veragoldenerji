"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { ThreeDCard } from "./ThreeDCard";
import { ArrowRight, Drill, Hammer, Layers } from "lucide-react";

export const B2BServices: React.FC = () => {
  const { t } = useTranslation();

  const cards = [
    {
      id: "delgi",
      icon: <Hammer className="w-5 h-5 text-[#C59B27]" />,
      title: t("b2bServices.delgi.title"),
      desc: t("b2bServices.delgi.desc"),
      href: "/hizmetler/delgi",
      image: "/satismakineleri/Paletli-Rock-Makina.jpg",
      tag: t("b2bServices.delgi.tag"),
    },
    {
      id: "kiralama",
      icon: <Drill className="w-5 h-5 text-[#C59B27]" />,
      title: t("b2bServices.kiralama.title"),
      desc: t("b2bServices.kiralama.desc"),
      href: "/hizmetler/kiralama",
      image: "/satismakineleri/kazıkçakma.jpeg",
      tag: t("b2bServices.kiralama.tag"),
    },
    {
      id: "enerji",
      icon: <Layers className="w-5 h-5 text-[#C59B27]" />,
      title: t("b2bServices.enerji.title"),
      desc: t("b2bServices.enerji.desc"),
      href: "/hizmetler/enerji",
      image: "/satismakineleri/sondaj-14.07.2023-19-09-01.jpg",
      tag: t("b2bServices.enerji.tag"),
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Background visual helpers */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-zinc-50 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/30 bg-[#C59B27]/5 text-xs text-[#C59B27] font-semibold mb-4 tracking-widest uppercase">
            {t("b2bServices.badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4">
            {t("b2bServices.title")}
          </h2>
          <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto font-semibold">
            {t("b2bServices.subtitle")}
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <ThreeDCard key={card.id}>
              <div className="h-full flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all shadow-2xs group relative overflow-hidden">
                {/* Real Photo Thumbnail */}
                <div className="relative h-48 w-full bg-zinc-100 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono font-extrabold text-[#C59B27] uppercase tracking-wider bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-xs">
                      // {card.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs">
                      {card.icon}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Title & Desc */}
                    <h3 className="text-lg font-bold text-zinc-950 mb-3 group-hover:text-[#C59B27] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed font-semibold mb-6">
                      {card.desc}
                    </p>
                  </div>

                  {/* Subpage CTA */}
                  <div className="pt-4 border-t border-zinc-100">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B27] hover:text-zinc-950 transition-colors group/link"
                    >
                      <span>{t("b2bServices.viewDetails")}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  );
};
