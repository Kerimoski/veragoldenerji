"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { useTranslation } from "@/context/LanguageContext";
import { Clock, ShieldCheck, MailQuestion } from "lucide-react";

export default function ContactPage() {
  const { t, tx } = useTranslation();

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
              // {tx({ tr: "Sıkça Sorulan Kurumsal Sorular", en: "Frequently Asked Corporate Questions", de: "Häufige Fragen von Unternehmen", fr: "Questions Fréquentes des Entreprises", it: "Domande Frequenti delle Aziende", es: "Preguntas Frecuentes de Empresas" })}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Question 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#C59B27] font-bold text-sm font-mono">
                  <Clock className="w-4 h-4" />
                  <span>{tx({ tr: "Geri Dönüş Süresi", en: "Response Time", de: "Antwortzeit", fr: "Délai de Réponse", it: "Tempi di Risposta", es: "Tiempo de Respuesta" })}</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                  {tx({ tr: "Teklif ve bilgi taleplerinize mühendislik ekibimiz tarafından en geç 24 saat içinde detaylı fizibilite ve fiyatlandırma ile geri dönüş yapılır.", en: "Our engineering team responds to all quotes and inquiries within 24 hours with detailed feasibility and pricing.", de: "Unser Ingenieurteam beantwortet alle Angebots- und Anfragen innerhalb von 24 Stunden mit detaillierter Machbarkeit und Preisgestaltung.", fr: "Notre équipe d'ingénieurs répond à toutes les demandes de devis sous 24 heures avec une étude de faisabilité et une tarification détaillées.", it: "Il nostro team di ingegneri risponde a tutte le richieste di preventivo entro 24 ore con fattibilità e prezzi dettagliati.", es: "Nuestro equipo de ingeniería responde a todas las solicitudes de presupuesto en 24 horas con viabilidad y precios detallados." })}
                </p>
              </div>

              {/* Question 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{tx({ tr: "Güvenlik Standartları", en: "Safety Standards", de: "Sicherheitsstandards", fr: "Normes de Sécurité", it: "Standard di Sicurezza", es: "Normas de Seguridad" })}</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                  {tx({ tr: "Tüm projelerimizde sıfır kaza politikası uygulanmakta olup, ekiplerimiz uluslararası geçerliliğe sahip sertifikalara sahiptir.", en: "We implement a zero-accident policy across all projects, and our teams hold internationally recognized certifications.", de: "Wir verfolgen in allen Projekten eine Null-Unfall-Politik, und unsere Teams verfügen über international anerkannte Zertifizierungen.", fr: "Nous appliquons une politique zéro accident sur tous nos projets et nos équipes détiennent des certifications reconnues internationalement.", it: "Applichiamo una politica di zero incidenti in tutti i progetti e i nostri team possiedono certificazioni riconosciute a livello internazionale.", es: "Aplicamos una política de cero accidentes en todos los proyectos y nuestros equipos cuentan con certificaciones reconocidas internacionalmente." })}
                </p>
              </div>

              {/* Question 3 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#C59B27] font-bold text-sm font-mono">
                  <MailQuestion className="w-4 h-4" />
                  <span>{tx({ tr: "Tedarik Süreçleri", en: "Supply Pipeline", de: "Lieferkette", fr: "Chaîne d'Approvisionnement", it: "Catena di Fornitura", es: "Cadena de Suministro" })}</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                  {tx({ tr: "Satışını gerçekleştirdiğimiz tüm hidrolik delgi ve çakma makineleri doğrudan orijinal üretici garantisi ve yedek parça desteği ile teslim edilir.", en: "All hydraulic drilling and piling rigs supplied by us are delivered directly with OEM manufacturer warranty and spare parts support.", de: "Alle von uns gelieferten hydraulischen Bohr- und Rammanlagen werden direkt mit Herstellergarantie und Ersatzteilversorgung ausgeliefert.", fr: "Toutes les foreuses et sonneuses hydrauliques que nous fournissons sont livrées directement avec la garantie constructeur et le support en pièces détachées.", it: "Tutte le perforatrici e i battipalo idraulici da noi forniti vengono consegnati direttamente con garanzia del produttore e supporto ricambi.", es: "Todas las perforadoras e hincadoras hidráulicas que suministramos se entregan directamente con garantía del fabricante y soporte de repuestos." })}
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
