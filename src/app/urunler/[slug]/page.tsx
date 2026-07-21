"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { PRODUCT_CATEGORIES, PRODUCTS, Product, ProductCategory } from "@/data/products";
import { ArrowUpRight, Check, Sparkles, ChevronLeft, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t, language } = useTranslation();

  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug) || PRODUCT_CATEGORIES[0];
  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);

  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);

  const getCategoryName = (c: ProductCategory) => {
    if (language === "en") return c.nameEn;
    if (language === "de") return c.nameDe;
    if (language === "fr") return c.nameFr;
    return c.nameTr;
  };

  const getCategoryDesc = (c: ProductCategory) => {
    if (language === "en") return c.descEn;
    if (language === "de") return c.descDe;
    if (language === "fr") return c.descFr;
    return c.descTr;
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

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-zinc-950 text-white relative overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#C59B27]/10 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">{t("nav.home")}</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-white transition-colors">{t("nav.products")}</Link>
            <span>/</span>
            <span className="text-[#C59B27] font-bold">{getCategoryName(category)}</span>
          </div>

          {/* Category Hero Header */}
          <div className="mb-16 border border-zinc-800 rounded-3xl p-8 md:p-12 bg-zinc-900/90 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl backdrop-blur-xl">
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 text-xs text-[#C59B27] font-mono tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>// {t("productsPage.categoryShowcase")}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 font-sans">
                {getCategoryName(category)}
              </h1>
              <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed mb-6">
                {getCategoryDesc(category)}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/urunler"
                  className="inline-flex items-center gap-2 py-3 px-5 rounded-none border border-zinc-700 bg-zinc-950 text-white font-mono font-bold text-xs uppercase tracking-widest hover:border-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t("productsPage.allCategories")}</span>
                </Link>
                <Link
                  href={`/iletisim?category=${encodeURIComponent(getCategoryName(category))}`}
                  className="inline-flex items-center gap-2 py-3 px-5 rounded-none bg-[#C59B27] hover:bg-[#b08920] text-white font-mono font-bold text-xs uppercase tracking-widest transition-colors shadow-md"
                >
                  <span>{t("productsPage.categoryQuote")}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Category Cover Photo */}
            <div className="relative w-full md:w-80 h-52 md:h-64 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
              <Image
                src={category.coverImage}
                alt={getCategoryName(category)}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Items List */}
          <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-3">
            <h2 className="text-xl font-mono uppercase font-black text-white">
              // {getCategoryName(category)} ({categoryProducts.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-900/90 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl hover:border-[#C59B27]/50 hover:bg-zinc-900 transition-all group"
              >
                {/* Image */}
                <div
                  className="relative h-64 w-full bg-zinc-950 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProductModal(product)}
                >
                  <Image
                    src={product.image}
                    alt={getProductName(product)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
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

                    {/* Specs Preview */}
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
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
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
                className="block text-center w-full py-4 rounded-none bg-[#C59B27] hover:bg-[#b08920] text-white font-mono text-xs uppercase font-bold transition-all shadow-lg cursor-pointer"
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
