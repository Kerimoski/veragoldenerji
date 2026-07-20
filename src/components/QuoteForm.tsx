"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, Send, CheckCircle2, Share2 } from "lucide-react";

export const QuoteForm: React.FC = () => {
  const { t } = useTranslation();
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
            Hizmet_Urun: formData.service,
            Mesaj: formData.message,
          }),
        });
      }
    } catch (err) {
      console.log("Form submission fallback trigger:", err);
      try {
        await fetch("https://formsubmit.co/ajax/info@veragoldenerji.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            _subject: `[Vera Gold Website Formu] ${formData.name || "Yeni Teklif Talebi"}`,
            Ad_Soyad: formData.name,
            Firma: formData.company,
            Eposta: formData.email,
            Hizmet_Urun: formData.service,
            Mesaj: formData.message,
          }),
        });
      } catch (e) {
        // Fallback error handled
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-6">
                {t("contact.title")}
              </h2>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-10 max-w-md font-medium">
                {t("contact.subtitle")}
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-[#C59B27] group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {t("contact.email")}
                    </h4>
                    <a
                      href="mailto:info@veragoldenerji.com"
                      className="text-zinc-800 text-sm hover:text-[#C59B27] transition-colors font-semibold"
                    >
                      info@veragoldenerji.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-[#10B981] group-hover:scale-105 transition-transform duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {t("contact.phone")}
                    </h4>
                    <a
                      href="tel:+902325022321"
                      className="text-zinc-800 text-sm hover:text-[#C59B27] transition-colors font-semibold"
                    >
                      +90 (232) 502 23 21
                    </a>
                    <a
                      href="tel:+905066275271"
                      className="text-zinc-800 text-sm hover:text-[#C59B27] transition-colors font-semibold"
                    >
                      +90 (506) 627 52 71
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-[#C59B27] group-hover:scale-105 transition-transform duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {t("contact.address")} (Ofis)
                    </h4>
                    <p className="text-zinc-800 text-sm font-semibold leading-relaxed max-w-xs">
                      Passa Plaza No: 8 Kat: 1 Daire: 27, Bornova, İzmir, Türkiye
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-[#C59B27] group-hover:scale-105 transition-transform duration-300">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                      {t("nav.home") === "Ana Sayfa" ? "Sosyal Medya" : "Social Media"}
                    </h4>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://instagram.com/veragoldenerji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-[#C59B27] transition-colors"
                        title="Instagram"
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a
                        href="https://facebook.com/veragoldenerji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-[#C59B27] transition-colors"
                        title="Facebook"
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/company/veragoldenerji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-[#C59B27] transition-colors"
                        title="LinkedIn"
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aesthetic element: brand quote */}
            <div className="hidden lg:block mt-12 p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 backdrop-blur-xs max-w-sm">
              <p className="text-[#C59B27] text-xs font-mono font-bold mb-2">// RELIABLE B2B INFRASTRUCTURE</p>
              <p className="text-zinc-500 text-xs italic leading-relaxed font-medium">
                &ldquo;Vera Gold Enerji olarak sürdürülebilir altyapı projelerinizi uzmanlığımız ve makine filomuzla destekliyoruz.&rdquo;
              </p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-zinc-250 rounded-3xl p-8 shadow-xs relative overflow-hidden">
              {/* Success Notification */}
              {isSuccess && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-xs z-30 flex flex-col items-center justify-center p-8 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">
                    {t("nav.home") === "Ana Sayfa" ? "Tebrikler!" : "Success!"}
                  </h3>
                  <p className="text-zinc-500 text-sm max-w-md leading-relaxed font-semibold">
                    {t("contact.success")}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-zinc-400 tracking-wider">
                      {t("contact.formName")}
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg border border-zinc-250 bg-white text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] text-sm transition-all duration-150"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-bold text-zinc-400 tracking-wider">
                      {t("contact.formCompany")}
                    </label>
                    <input
                      required
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg border border-zinc-250 bg-white text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] text-sm transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-zinc-400 tracking-wider">
                    {t("contact.formEmail")}
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg border border-zinc-250 bg-white text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] text-sm transition-all duration-150"
                  />
                </div>

                {/* Service of Interest */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-bold text-zinc-400 tracking-wider">
                    {t("contact.formService")}
                  </label>
                  <select
                    required
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg border border-zinc-250 bg-white text-zinc-700 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] text-sm transition-all duration-150"
                  >
                    <option value="" disabled>
                      {t("contact.formServicePlaceholder")}
                    </option>
                    <option value="drill">{t("services.drill.title")}</option>
                    <option value="rental">{t("services.rental.title")}</option>
                    <option value="energy">{t("services.energy.title")}</option>
                    <option value="machinery">{t("services.machineryConsulting")}</option>
                    <option value="equipment">{t("services.equipmentConsulting")}</option>
                    <option value="investment">{t("services.investmentConsulting")}</option>
                    <option value="project">{t("services.projectConsulting")}</option>
                    <option value="spareparts">{t("services.spareParts")}</option>
                    <option value="other">
                      {t("nav.home") === "Ana Sayfa" ? "Diğer Konular" : "Other General Inquiry"}
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-zinc-400 tracking-wider">
                    {t("contact.formMessage")}
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg border border-zinc-250 bg-white text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] text-sm transition-all duration-150 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-lg bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm tracking-wide disabled:opacity-50 transition-colors shadow-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{t("contact.sending")}</span>
                  ) : (
                    <>
                      <span>{t("contact.formSubmit")}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
