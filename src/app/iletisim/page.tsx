"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { useTranslation } from "@/context/LanguageContext";
import { Clock, ShieldCheck, MailQuestion } from "lucide-react";

export default function ContactPage() {
  const { t } = useTranslation();

  const isTr = t("nav.home") === "Ana Sayfa";

  return (
    <>
      <Header />
      <main className="flex-grow pt-12">
        {/* QuoteForm holds the form and general contact info cards */}
        <QuoteForm />

        {/* Corporate FAQ/Support Section */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="border border-zinc-200 rounded-3xl p-8 bg-zinc-50/50">
            <h3 className="text-xl font-bold text-zinc-950 mb-8 text-center">
              {isTr ? "Sıkça Sorulan Kurumsal Sorular" : "Frequently Asked Corporate Questions"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Question 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm">
                  <Clock className="w-4 h-4 text-[#C59B27]" />
                  <span>{isTr ? "Geri Dönüş Süresi" : "Response Time"}</span>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed font-semibold">
                  {isTr
                    ? "Teklif ve bilgi taleplerinize mühendislik ekibimiz tarafından en geç 24 saat içinde detaylı fizibilite ve fiyatlandırma ile geri dönüş yapılır."
                    : "Our engineering team responds to all quotes and inquiries within 24 hours with detailed feasibility and pricing."}
                </p>
              </div>

              {/* Question 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>{isTr ? "Güvenlik Standartları" : "Safety Standards"}</span>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed font-semibold">
                  {isTr
                    ? "Tüm projelerimizde sıfır kaza politikası uygulanmakta olup, ekiplerimiz uluslararası geçerliliğe sahip sertifikalara sahiptir."
                    : "We implement a zero-accident policy across all projects, and our teams hold internationally recognized certifications."}
                </p>
              </div>

              {/* Question 3 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm">
                  <MailQuestion className="w-4 h-4 text-[#C59B27]" />
                  <span>{isTr ? "Tedarik Süreçleri" : "Supply Pipeline"}</span>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed font-semibold">
                  {isTr
                    ? "Tüm yedek parça ve makine aksamları doğrudan kendi lojistik merkezlerimizden şantiyenize hızlıca sevk edilir."
                    : "All spare parts and machinery components are shipped directly from our logistics centers to your site."}
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
