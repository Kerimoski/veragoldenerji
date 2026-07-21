"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { PRODUCT_CATEGORIES, PRODUCTS, Product, ProductCategory } from "@/data/products";
import { ArrowUpRight, Check, Sparkles, Eye, X } from "lucide-react";
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
      <main className="flex-grow pt-32 pb-24 bg-zinc-950 text-white relative overflow-hidden">
        {/* Background Visual Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#C59B27]/10 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// {t("productsPage.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 font-sans">
              {t("nav.products")}
            </h1>
            <p className="text-zinc-400 text-base md:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              {t("productsPage.subtitle")}
            </p>
          </div>

          {/* Category Cards Showcase */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 mb-14">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`p-4 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#C59B27] text-white border-[#C59B27] shadow-lg"
                  : "bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:bg-zinc-900"
              }`}
            >
              <div className="text-xs font-mono font-bold mb-2">// 00</div>
              <div className="text-xs font-bold leading-snug">{t("productsPage.all")}</div>
              <div className="text-[10px] opacity-75 mt-2 font-mono">{PRODUCTS.length} {t("productsPage.models")}</div>
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
                      ? "bg-[#C59B27] text-white border-[#C59B27] shadow-lg"
                      : "bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:bg-zinc-900"
                  }`}
                >
                  <div className="text-xs font-mono font-bold mb-2">// 0{idx + 1}</div>
                  <div className="text-xs font-bold leading-snug">{getCategoryName(cat)}</div>
                  <div className="text-[10px] opacity-75 mt-2 font-mono">{count} {t("productsPage.items")}</div>
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
                  className="bg-zinc-900/90 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl hover:border-[#C59B27]/50 hover:bg-zinc-900 transition-all group"
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full bg-zinc-950 overflow-hidden cursor-pointer" onClick={() => setSelectedProductModal(product)}>
                    <Image
                      src={product.image}
                      alt={getProductName(product)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-wider bg-zinc-950/90 backdrop-blur-md text-[#C59B27] border border-zinc-800">
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
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C59B27] transition-colors leading-snug">
                        {getProductName(product)}
                      </h3>
                      <p className="text-zinc-400 text-xs leading-relaxed font-normal mb-6">
                        {getProductShortDesc(product)}
                      </p>

                      {/* Key Specs Matrix */}
                      <div className="grid grid-cols-2 gap-2 mb-6 bg-zinc-950 p-3 rounded-2xl border border-zinc-800">
                        {product.specs.slice(0, 4).map((spec, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase">{getSpecLabel(spec)}</span>
                            <span className="text-xs font-extrabold text-white font-mono">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                      <button
                        onClick={() => setSelectedProductModal(product)}
                        className="flex-1 py-3 px-4 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-800 text-white font-mono text-xs uppercase font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-[#C59B27]" />
                        <span>{t("productsPage.viewDetails")}</span>
                      </button>

                      <Link
                        href={`/iletisim?service=${product.categorySlug}`}
                        className="py-3 px-4 rounded-xl bg-[#C59B27] hover:bg-[#b08920] text-white font-mono text-xs uppercase font-bold transition-all flex items-center justify-center cursor-pointer shadow-md"
                        title={t("productsPage.getQuote")}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Modal for Product Details */}
        {selectedProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 relative text-white shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProductModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 border border-zinc-800 bg-zinc-950">
                <Image
                  src={selectedProductModal.image}
                  alt={getProductName(selectedProductModal)}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold mb-2 text-white">
                {getProductName(selectedProductModal)}
              </h2>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {getProductFullDesc(selectedProductModal)}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold uppercase text-[#C59B27] tracking-wider mb-3 border-b border-zinc-800 pb-1">
                  // {t("productsPage.technicalSpecs")}
                </h4>
                <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
                  {selectedProductModal.specs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">{getSpecLabel(spec)}</span>
                      <span className="text-sm font-extrabold text-white font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/iletisim?service=${selectedProductModal.categorySlug}`}
                onClick={() => setSelectedProductModal(null)}
                className="block text-center w-full py-4 rounded-xl bg-[#C59B27] hover:bg-[#b08920] text-white font-mono text-xs uppercase font-bold transition-all shadow-lg cursor-pointer"
              >
                {t("productsPage.getQuote")}
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
