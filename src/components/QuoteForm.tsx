"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, Send, CheckCircle2, Share2, MessageSquare } from "lucide-react";

export const QuoteForm: React.FC = () => {
  const { t, tx } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pre-select service from URL parameter
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        const validServices = [
          "drill",
          "rental",
          "energy",
          "machinery",
          "equipment",
          "investment",
          "project",
          "spareparts"
        ];
        if (validServices.includes(serviceParam)) {
          setFormData((prev) => ({ ...prev, service: serviceParam }));
        }
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Direct fallback to FormSubmit AJAX endpoint for info@veragoldenerji.com
        await fetch("https://formsubmit.co/ajax/info@veragoldenerji.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            _subject: `[Vera Gold Website Formu] ${formData.name || "Yeni Teklif Talebi"}`,
            Ad_Soyad: formData.name,
            Firma: formData.company,
            Eposta: formData.email,
            Hizmet_Kategorisi: formData.service,
            Mesaj: formData.message,
          }),
        });
      }
    } catch (err) {
      console.error("Form error:", err);
      // Secondary fallback attempt
      try {
        await fetch("https://formsubmit.co/ajax/info@veragoldenerji.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            _subject: `[Vera Gold Website Formu] ${formData.name || "Yeni Teklif Talebi"}`,
            Ad_Soyad: formData.name,
            Firma: formData.company,
            Eposta: formData.email,
            Hizmet_Kategorisi: formData.service,
            Mesaj: formData.message,
          }),
        });
      } catch (e) {
        // Ignore
      }
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", company: "", email: "", service: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-800/80">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(197,155,39,0.08),transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>// {tx({ tr: "İletişim & Teklif", en: "Contact & Proposal", de: "Kontakt & Angebot", fr: "Contact & Proposition", it: "Contatti & Proposta", es: "Contacto & Propuesta" })}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 font-sans">
                {t("contact.title")}
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-md font-medium">
                {t("contact.subtitle")}
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#C59B27] group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                      {t("contact.email")}
                    </h4>
                    <a
                      href="mailto:info@veragoldenerji.com"
                      className="text-white text-sm hover:text-[#C59B27] transition-colors font-semibold"
                    >
                      info@veragoldenerji.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                      {t("contact.phone")}
                    </h4>
                    <a
                      href="tel:+902325022321"
                      className="text-white text-sm hover:text-[#C59B27] transition-colors font-semibold"
                    >
                      +90 232 502 23 21
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#C59B27] group-hover:scale-105 transition-transform duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                      {t("contact.address")}
                    </h4>
                    <span className="text-zinc-300 text-xs leading-snug font-medium block max-w-xs">
                      Fatih Mh. 1184 Sk. No: 6 Sarnıç / Gaziemir - İzmir / Türkiye
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
              {isSuccess ? (
                <div className="py-12 text-center flex flex-col items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {tx({ tr: "Talebiniz Başarıyla Alındı!", en: "Request Sent Successfully!", de: "Anfrage erfolgreich gesendet!", fr: "Demande envoyée avec succès !", it: "Richiesta inviata con successo!", es: "¡Solicitud enviada correctamente!" })}
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-md leading-relaxed font-medium">
                    {tx({ tr: "Teklif talebiniz ekibimize ulaştı. Mühendislerimiz kısa süre içinde sizinle iletişime geçecektir.", en: "Our engineering team has received your request and will contact you shortly.", de: "Unser Ingenieurteam hat Ihre Anfrage erhalten und meldet sich in Kürze bei Ihnen.", fr: "Notre équipe d'ingénieurs a bien reçu votre demande et vous contactera sous peu.", it: "Il nostro team di ingegneri ha ricevuto la tua richiesta e ti contatterà a breve.", es: "Nuestro equipo de ingeniería ha recibido su solicitud y se pondrá en contacto con usted en breve." })}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        {t("contact.formName")} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={tx({ tr: "Adınız Soyadınız", en: "Your Full Name", de: "Ihr vollständiger Name", fr: "Votre Nom Complet", it: "Nome e Cognome", es: "Su Nombre Completo" })}
                        className="w-full px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:border-[#C59B27] text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        {t("contact.formCompany")}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={tx({ tr: "Firma Ünvanınız", en: "Company Name", de: "Firmenname", fr: "Nom de l'Entreprise", it: "Nome dell'Azienda", es: "Nombre de la Empresa" })}
                        className="w-full px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:border-[#C59B27] text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        {t("contact.formEmail")} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ornek@firma.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:border-[#C59B27] text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        {t("contact.formService")}
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:border-[#C59B27] text-sm transition-all"
                      >
                        <option value="">{tx({ tr: "Hizmet Seçiniz", en: "Select Service", de: "Leistung auswählen", fr: "Choisir un Service", it: "Seleziona un Servizio", es: "Seleccione un Servicio" })}</option>
                        <option value="drill">{tx({ tr: "Delgi Mühendisliği & Kaya Çakım", en: "Drilling Engineering", de: "Bohrtechnik", fr: "Ingénierie de Forage", it: "Ingegneria di Perforazione", es: "Ingeniería de Perforación" })}</option>
                        <option value="rental">{tx({ tr: "GES & Ağır İş Makinesi Kiralama", en: "Rig Rental Fleet", de: "Mietflotte", fr: "Flotte de Location", it: "Flotta a Noleggio", es: "Flota de Alquiler" })}</option>
                        <option value="energy">{tx({ tr: "Enerji Santralleri & Derin Sondaj", en: "Deep Well Drilling", de: "Tiefbrunnenbohrung", fr: "Forage de Puits Profonds", it: "Perforazione di Pozzi Profondi", es: "Perforación de Pozos Profundos" })}</option>
                        <option value="machinery">{tx({ tr: "Makine Danışmanlığı", en: "Machinery Consulting", de: "Maschinenberatung", fr: "Conseil Machines", it: "Consulenza Macchine", es: "Consultoría de Maquinaria" })}</option>
                        <option value="spareparts">{tx({ tr: "Yedek Parça & Mobil Saha Servisi", en: "Spare Parts & Field Service", de: "Ersatzteile & Außendienst", fr: "Pièces Détachées & Service Terrain", it: "Ricambi & Assistenza sul Campo", es: "Repuestos & Servicio en Campo" })}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      {t("contact.formMessage")} *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={tx({ tr: "Projeniz, lokasyonunuz ve makine ihtiyaçlarınız hakkında kısa bilgi veriniz...", en: "Provide brief details regarding your project specifications...", de: "Beschreiben Sie kurz die Anforderungen Ihres Projekts...", fr: "Décrivez brièvement les spécifications de votre projet...", it: "Descrivi brevemente le specifiche del tuo progetto...", es: "Describa brevemente las especificaciones de su proyecto..." })}
                      className="w-full px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:border-[#C59B27] text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-none bg-[#C59B27] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#b08920] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    <span>{isSubmitting ? (tx({ tr: "Gönderiliyor...", en: "Sending...", de: "Wird gesendet...", fr: "Envoi en cours...", it: "Invio in corso...", es: "Enviando..." })) : t("contact.formSubmit")}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
