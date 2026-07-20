"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";
import { PRODUCT_CATEGORIES, PRODUCTS, Product, ProductCategory } from "@/data/products";
import { ArrowUpRight, Check, Sparkles, ChevronLeft, Eye } from "lucide-react";
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
      <main className="flex-grow pt-32 pb-24 bg-white text-zinc-900 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#C59B27]/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#10B981]/5 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 mb-8">
            <Link href="/" className="hover:text-zinc-950 transition-colors">{t("nav.home")}</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-zinc-950 transition-colors">{t("nav.products")}</Link>
            <span>/</span>
            <span className="text-[#C59B27] font-bold">{getCategoryName(category)}</span>
          </div>

          {/* Category Hero */}
          <div className="mb-16 border border-zinc-200 rounded-3xl p-8 md:p-12 bg-zinc-50/70 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-250 bg-white text-xs text-[#C59B27] font-semibold mb-4 shadow-3xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("productsPage.categoryShowcase")}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
                {getCategoryName(category)}
              </h1>
              <p className="text-zinc-600 text-sm md:text-base font-semibold leading-relaxed mb-6">
                {getCategoryDesc(category)}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/urunler"
                  className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl border border-zinc-300 bg-white text-zinc-900 font-bold text-xs hover:bg-zinc-100 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t("productsPage.allCategories")}</span>
                </Link>
                <Link
                  href={`/iletisim?category=${encodeURIComponent(getCategoryName(category))}`}
                  className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-zinc-950 text-white font-bold text-xs hover:bg-zinc-900 transition-colors shadow-sm"
                >
                  <span>{t("productsPage.categoryQuote")}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Category Cover Photo */}
            <div className="relative w-full md:w-80 h-52 md:h-64 rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
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
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-zinc-950">
              {getCategoryName(category)} ({categoryProducts.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-zinc-200 rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xs hover:border-zinc-300 hover:shadow-md transition-all group"
              >
                {/* Image */}
                <div
                  className="relative h-64 w-full bg-zinc-100 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProductModal(product)}
                >
                  <Image
                    src={product.image}
                    alt={getProductName(product)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.inStock && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/90 text-white backdrop-blur-xs shadow-xs flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        {t("productsPage.inStock")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
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

                    {/* Specs */}
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
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
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
              <button
                onClick={() => setSelectedProductModal(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-72 md:h-full min-h-[260px] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                  <Image
                    src={selectedProductModal.image}
                    alt={getProductName(selectedProductModal)}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#C59B27]/10 text-[#C59B27] inline-block mb-3">
                      {getCategoryName(category)}
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
