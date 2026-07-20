"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { PRODUCT_CATEGORIES, PRODUCTS, Product, ProductCategory } from "@/data/products";
import { ArrowUpRight, Check, Sparkles, ShieldCheck, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsPage() {
  const { t, language } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);

  const getCategoryName = (c: ProductCategory) => {
    if (language === "en") return c.nameEn;
    if (language === "de") return c.nameDe;
    if (language === "fr") return c.nameFr;
    return c.nameTr;
  };

  const getProductName = (p: Product) => {
    if (language === "en") return p.nameEn;
    if (language === "de") return p.nameDe;
    if (language === "fr") return p.nameFr;
    return p.nameTr;
  };

  const getProductShortDesc = (p: Product) => {
    if (language === "en") return p.shortDescEn;
    if (language === "de") return p.shortDescDe;
    if (language === "fr") return p.shortDescFr;
    return p.shortDescTr;
  };

  const getProductFullDesc = (p: Product) => {
    if (language === "en") return p.fullDescEn;
    if (language === "de") return p.fullDescDe;
    if (language === "fr") return p.fullDescFr;
    return p.fullDescTr;
  };

  const getSpecLabel = (spec: any) => {
    if (language === "en") return spec.labelEn;
    if (language === "de") return spec.labelDe;
    if (language === "fr") return spec.labelFr;
    return spec.labelTr;
  };

  const filteredProducts = selectedCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.categorySlug === selectedCategory);

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-white text-zinc-900 relative overflow-hidden">
        {/* Background Visual Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#C59B27]/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#10B981]/5 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-250 bg-white/80 backdrop-blur-md text-xs text-[#C59B27] font-semibold mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("productsPage.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mb-4">
              {t("nav.products")}
            </h1>
            <p className="text-zinc-500 text-base md:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              {t("productsPage.subtitle")}
            </p>
          </div>

          {/* Category Cards Showcase */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`p-4 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-zinc-950 text-white border-zinc-950 shadow-md ring-2 ring-zinc-950"
                  : "bg-zinc-50/70 border-zinc-200 hover:border-zinc-300 text-zinc-800 hover:bg-zinc-100/80"
              }`}
            >
              <div className="text-xs font-mono font-bold text-[#C59B27] mb-2">// 00</div>
              <div className="text-sm font-bold leading-snug">{t("productsPage.all")}</div>
              <div className="text-[11px] opacity-70 mt-2 font-semibold">{PRODUCTS.length} {t("productsPage.models")}</div>
            </button>

            {PRODUCT_CATEGORIES.map((cat, idx) => {
              const isSelected = selectedCategory === cat.slug;
              const count = PRODUCTS.filter((p) => p.categorySlug === cat.slug).length;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`p-4 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-md ring-2 ring-zinc-950"
                      : "bg-zinc-50/70 border-zinc-200 hover:border-zinc-300 text-zinc-800 hover:bg-zinc-100/80"
                  }`}
                >
                  <div className="text-xs font-mono font-bold text-[#C59B27] mb-2">// 0{idx + 1}</div>
                  <div className="text-xs font-bold leading-snug">{getCategoryName(cat)}</div>
                  <div className="text-[10px] opacity-70 mt-2 font-semibold">{count} {t("productsPage.items")}</div>
                </button>
              );
            })}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const cat = PRODUCT_CATEGORIES.find(c => c.slug === product.categorySlug);
              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-zinc-200 rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xs hover:border-zinc-300 hover:shadow-md transition-all group"
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full bg-zinc-100 overflow-hidden cursor-pointer" onClick={() => setSelectedProductModal(product)}>
                    <Image
                      src={product.image}
                      alt={getProductName(product)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/90 backdrop-blur-md text-zinc-900 shadow-xs border border-zinc-200">
                        {cat ? getCategoryName(cat) : product.categorySlug}
                      </span>
                    </div>
                    {product.inStock && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/90 text-white backdrop-blur-xs shadow-xs flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          {t("productsPage.inStock")}
                        </span>
                      </div>
                    )}
                    {/* Quick View Hover overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 rounded-xl bg-white text-zinc-950 font-bold text-xs shadow-lg flex items-center gap-2">
                        <Eye className="w-4 h-4 text-[#C59B27]" />
                        {t("productsPage.quickView")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono font-bold text-[#C59B27] uppercase tracking-wider mb-1">
                        {product.model}
                      </div>
                      <h3 className="text-lg font-extrabold text-zinc-950 mb-2 leading-tight group-hover:text-[#C59B27] transition-colors">
                        {getProductName(product)}
                      </h3>
                      <p className="text-zinc-500 text-xs leading-relaxed font-semibold mb-6">
                        {getProductShortDesc(product)}
                      </p>

                      {/* Specs Badges */}
                      <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-zinc-100">
                        {product.specs.slice(0, 4).map((spec, idx) => (
                          <div key={idx} className="bg-zinc-50 border border-zinc-150 p-2.5 rounded-xl">
                            <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-tight">
                              {getSpecLabel(spec)}
                            </div>
                            <div className="text-xs font-bold text-zinc-900 mt-0.5">
                              {spec.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                      <button
                        onClick={() => setSelectedProductModal(product)}
                        className="flex-1 py-3 px-4 rounded-xl border border-zinc-250 bg-white hover:bg-zinc-50 text-zinc-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>{t("productsPage.details")}</span>
                      </button>
                      <Link
                        href={`/iletisim?product=${encodeURIComponent(getProductName(product))}`}
                        className="flex-1 py-3 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center"
                      >
                        <span>{t("productsPage.getQuote")}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* B2B Assurance Banner */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl border border-zinc-200 bg-zinc-50/60 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C59B27] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>{t("productsPage.warrantyTitle")}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-zinc-950 mb-3">
                {t("productsPage.warrantySub")}
              </h3>
              <p className="text-zinc-500 text-sm font-semibold leading-relaxed">
                {t("productsPage.warrantyDesc")}
              </p>
            </div>
            <Link
              href="/iletisim"
              className="py-4 px-8 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm shadow-md transition-colors whitespace-nowrap"
            >
              {t("productsPage.contactEngineers")}
            </Link>
          </div>
        </div>
      </main>

      {/* Product Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedProductModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProductModal(null)}
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 md:p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-zinc-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProductModal(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative h-72 md:h-full min-h-[260px] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                  <Image
                    src={selectedProductModal.image}
                    alt={getProductName(selectedProductModal)}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#C59B27]/10 text-[#C59B27] inline-block mb-3">
                      {getProductName(selectedProductModal)}
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-zinc-950 mb-2">
                      {getProductName(selectedProductModal)}
                    </h3>
                    <div className="text-xs font-mono font-bold text-zinc-400 mb-4">
                      MODEL: {selectedProductModal.model}
                    </div>
                    <p className="text-zinc-600 text-xs leading-relaxed font-semibold mb-6">
                      {getProductFullDesc(selectedProductModal)}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-100 pb-1">
                        {t("productsPage.techSpecs")}
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedProductModal.specs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs py-1 border-b border-zinc-50">
                            <span className="font-semibold text-zinc-500">{getSpecLabel(spec)}</span>
                            <span className="font-bold text-zinc-950">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex gap-3">
                    <Link
                      href={`/iletisim?product=${encodeURIComponent(getProductName(selectedProductModal))}`}
                      className="w-full py-3 px-6 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-xs transition-colors shadow-sm text-center flex items-center justify-center gap-2"
                    >
                      <span>{t("productsPage.requestOffer")}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
