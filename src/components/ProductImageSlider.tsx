"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

interface ProductImageSliderProps {
  images: string[];
  alt: string;
  sizes?: string;
  priority?: boolean;
  onImageClick?: () => void;
  className?: string;
}

export const ProductImageSlider: React.FC<ProductImageSliderProps> = ({
  images,
  alt,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  onImageClick,
  className = "",
}) => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const hasMany = images.length > 1;
  const current = images[index] ?? images[0];

  const go = (dir: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || !hasMany) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-zinc-950 group/slider ${onImageClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onImageClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Blurred backdrop keeps portrait/landscape phone photos from looking cropped or boxed */}
      <Image
        src={current}
        alt=""
        aria-hidden
        fill
        sizes="10vw"
        className="object-cover scale-110 blur-2xl opacity-50"
      />
      <Image
        key={current}
        src={current}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain animate-fadeIn"
      />

      {hasMany && (
        <>
          <button
            type="button"
            aria-label={t("productsPage.prevPhoto")}
            onClick={(e) => go(-1, e)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-zinc-950/70 border border-zinc-700 text-white backdrop-blur-sm transition-opacity md:opacity-0 md:group-hover/slider:opacity-100 hover:bg-[#C59B27] cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label={t("productsPage.nextPhoto")}
            onClick={(e) => go(1, e)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-zinc-950/70 border border-zinc-700 text-white backdrop-blur-sm transition-opacity md:opacity-0 md:group-hover/slider:opacity-100 hover:bg-[#C59B27] cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2 py-1 rounded-full bg-zinc-950/60 backdrop-blur-sm">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`${i + 1} / ${images.length}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === index ? "w-5 bg-[#C59B27]" : "w-1.5 bg-zinc-400/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
