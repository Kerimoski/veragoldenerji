"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { useTranslation } from "@/context/LanguageContext";
import { Clock, ShieldCheck, MailQuestion } from "lucide-react";

export default function ContactPage() {
  const { t, language } = useTranslation();
  const isTr = language === "tr";

  return (
    <>
      <Header />
      <main className="flex-grow pt-12 bg-zinc-950 text-white relative overflow-hidden">
        {/* QuoteForm holds the form and general contact info cards */}
        <QuoteForm />

        {/* Corporate FAQ/Support Section */}
        <section className="max-w-5xl mx-auto px-6 pb-24 relative z-10">
          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/80 backdrop-blur-xl shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-tight font-sans">
              // {isTr ? "Sıkça Sorulan Kurumsal Sorular" : "Frequently Asked Corporate Questions"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Question 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#C59B27] font-bold text-sm font-mono">
                  <Clock className="w-4 h-4" />
                  <span>{isTr ? "Geri Dönüş Süresi" : "Response Time"}</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                  {isTr
                    ? "Teklif ve bilgi taleplerinize mühendislik ekibimiz tarafından en geç 24 saat içinde detaylı fizibilite ve fiyatlandırma ile geri dönüş yapılır."
                    : "Our engineering team responds to all quotes and inquiries within 24 hours with detailed feasibility and pricing."}
                </p>
              </div>

              {/* Question 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isTr ? "Güvenlik Standartları" : "Safety Standards"}</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                  {isTr
                    ? "Tüm projelerimizde sıfır kaza politikası uygulanmakta olup, ekiplerimiz uluslararası geçerliliğe sahip sertifikalara sahiptir."
                    : "We implement a zero-accident policy across all projects, and our teams hold internationally recognized certifications."}
                </p>
              </div>

              {/* Question 3 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#C59B27] font-bold text-sm font-mono">
                  <MailQuestion className="w-4 h-4" />
                  <span>{isTr ? "Tedarik Süreçleri" : "Supply Pipeline"}</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                  {isTr
                    ? "Satışını gerçekleştirdiğimiz tüm hidrolik delgi ve çakma makineleri doğrudan orijinal üretici garantisi ve yedek parça desteği ile teslim edilir."
                    : "All hydraulic drilling and piling rigs supplied by us are delivered directly with OEM manufacturer warranty and spare parts support."}
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
