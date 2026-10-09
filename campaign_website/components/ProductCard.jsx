"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Plus, Check } from "lucide-react";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeError, setSizeError] = useState(false);
  const { addToCart, openQuickView } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addToCart(product, selectedSize, 1);
  };

  const handleSizeSelect = (e, sz) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedSize(sz);
    setSizeError(false);
  };

  const currentImage =
    isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <div
      className="group relative bg-[#FAF8F3] border border-[#E6E0E8] flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#9B7AE8]/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Area */}
      <div className="relative aspect-4/5 w-full bg-[#FFFFFF] overflow-hidden">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={currentImage}
            alt={`${product.name} - ${product.slogan}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center transition-all duration-500 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-[#35163F] text-[#FAF8F3] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openQuickView(product);
          }}
          aria-label={`Quick view ${product.name}`}
          className="absolute top-3 right-3 z-10 p-2 bg-[#FAF8F3]/90 backdrop-blur-xs text-[#35163F] hover:bg-[#35163F] hover:text-[#FAF8F3] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Color preview pip */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 bg-[#FAF8F3]/90 backdrop-blur-xs px-2 py-1 rounded-xs border border-[#E6E0E8]/70">
          <span
            className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block"
            style={{ backgroundColor: product.colorHex }}
          />
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#35163F]">
            {product.color}
          </span>
        </div>
      </div>

      {/* Product Details Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-[#FFFFFF]">
        <div>
          {/* Slogan */}
          <p className="text-[11px] font-sans italic text-[#51265F] font-medium mb-1 line-clamp-1">
            "{product.slogan}"
          </p>

          {/* Name & Price */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <Link
              href={`/product/${product.slug}`}
              className="font-heading text-base sm:text-lg font-bold text-[#35163F] hover:text-[#9B7AE8] transition-colors leading-tight"
            >
              {product.name}
            </Link>
            <span className="font-sans font-bold text-sm sm:text-base text-[#242126] shrink-0">
              ₹{product.price}
            </span>
          </div>

          {/* Size Selector */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#716A75] mb-1.5">
              <span>Size:</span>
              {sizeError && (
                <span className="text-red-600 font-medium">Select size</span>
              )}
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={(e) => handleSizeSelect(e, sz)}
                  className={`py-1.5 text-[11px] font-semibold tracking-wider transition-colors border ${
                    selectedSize === sz
                      ? "bg-[#35163F] text-[#FAF8F3] border-[#35163F]"
                      : "bg-[#FAF8F3] text-[#242126] border-[#E6E0E8] hover:border-[#35163F]"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Add CTA */}
        <button
          onClick={handleQuickAdd}
          className="w-full py-2.5 sm:py-3 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>ADD TO BAG</span>
        </button>
      </div>
    </div>
  );
}
