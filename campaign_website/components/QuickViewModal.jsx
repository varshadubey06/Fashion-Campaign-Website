"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Ruler, Check, ArrowRight, ShieldCheck, RefreshCw, Truck } from "lucide-react";
import { useCart } from "./CartProvider";

export default function QuickViewModal({ product, isOpen, onClose }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [validationError, setValidationError] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState("description");

  const { addToCart, openSizeGuide, openCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSelectedSize("");
      setQuantity(1);
      setActiveImageIdx(0);
      setValidationError(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    if (!selectedSize) {
      setValidationError(true);
      return;
    }
    setValidationError(false);
    addToCart(product, selectedSize, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={product.name}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#242126]/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FAF8F3] border border-[#E6E0E8] w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-sm shadow-2xl z-10 text-[#242126]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 text-[#716A75] hover:text-[#35163F] rounded-full hover:bg-[#F0E9FA] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          {/* Left: Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-4/5 w-full bg-[#FFFFFF] border border-[#E6E0E8] overflow-hidden rounded-xs">
              <Image
                src={product.images[activeImageIdx] || product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
                priority
              />
              <span className="absolute top-3 left-3 bg-[#35163F] text-[#FAF8F3] text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
                {product.badge || "Signature"}
              </span>
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-16 h-20 rounded-xs border-2 overflow-hidden shrink-0 transition-all ${
                    activeImageIdx === idx
                      ? "border-[#35163F] ring-1 ring-[#35163F]"
                      : "border-[#E6E0E8] hover:border-[#9B7AE8]"
                  }`}
                >
                  <Image src={img} alt="" fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info & Actions */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Eyebrow & Slogan */}
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9B7AE8]">
                  {product.color} • {product.category}
                </span>
                <span className="text-xs text-[#27764B] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27764B] inline-block" />
                  In Stock
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#35163F] leading-tight">
                {product.name}
              </h2>

              <p className="font-heading italic text-base text-[#51265F] mt-1 mb-3">
                "{product.slogan}"
              </p>

              <div className="flex items-baseline gap-3 mb-5 pb-4 border-b border-[#E6E0E8]">
                <span className="font-sans text-2xl font-bold text-[#242126]">
                  ₹{product.price}
                </span>
                <span className="text-xs text-[#716A75]">
                  Inclusive of all taxes
                </span>
              </div>

              <p className="text-sm text-[#716A75] mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Color Swatch */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#35163F]">
                    Color: <span className="font-normal text-[#716A75]">{product.color}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-full border-2 border-[#35163F] flex items-center justify-center p-0.5 shadow-xs"
                    title={product.color}
                  >
                    <span
                      className="w-full h-full rounded-full"
                      style={{ backgroundColor: product.colorHex }}
                    />
                  </div>
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#35163F]">
                    Size: {selectedSize ? <span className="text-[#35163F] font-bold">{selectedSize}</span> : <span className="text-red-600 font-normal">*Required</span>}
                  </span>
                  <button
                    onClick={openSizeGuide}
                    className="text-xs text-[#716A75] hover:text-[#35163F] flex items-center gap-1 underline underline-offset-2 transition-colors"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    Size Guide
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => {
                        setSelectedSize(sz);
                        setValidationError(false);
                      }}
                      className={`py-2.5 text-xs font-semibold tracking-wider transition-all border ${
                        selectedSize === sz
                          ? "bg-[#35163F] text-[#FAF8F3] border-[#35163F] shadow-sm"
                          : "bg-[#FFFFFF] text-[#242126] border-[#E6E0E8] hover:border-[#35163F]"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>

                {validationError && (
                  <p className="text-xs text-red-600 mt-2 font-medium flex items-center gap-1 animate-in fade-in">
                    Please select your size to continue.
                  </p>
                )}
              </div>

              {/* Quantity & Add to Bag */}
              <div className="flex items-stretch gap-3 mb-6">
                <div className="flex items-center border border-[#E6E0E8] bg-[#FFFFFF] rounded-none shrink-0">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 text-[#716A75] hover:text-[#35163F] hover:bg-[#F0E9FA] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-semibold text-[#242126] font-sans">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 text-[#716A75] hover:text-[#35163F] hover:bg-[#F0E9FA] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 py-3.5 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  ADD TO BAG • ₹{product.price * quantity}
                </button>
              </div>

              {/* Full details link */}
              <div className="mb-6 text-center">
                <Link
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="text-xs text-[#716A75] hover:text-[#35163F] font-semibold uppercase tracking-wider inline-flex items-center gap-1 underline underline-offset-4"
                >
                  View Full Product Details Page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Accordions */}
              <div className="border-t border-[#E6E0E8] pt-4 space-y-3 text-xs">
                <div>
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "description" ? "" : "description")}
                    className="w-full flex justify-between items-center py-2 text-left font-semibold text-[#35163F] uppercase tracking-wider"
                  >
                    <span>Product Description</span>
                    <span>{activeAccordion === "description" ? "−" : "+"}</span>
                  </button>
                  {activeAccordion === "description" && (
                    <p className="text-[#716A75] pb-2 leading-relaxed font-sans">
                      {product.fullDescription}
                    </p>
                  )}
                </div>

                <div className="border-t border-[#E6E0E8]/60 pt-2">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "fabric" ? "" : "fabric")}
                    className="w-full flex justify-between items-center py-2 text-left font-semibold text-[#35163F] uppercase tracking-wider"
                  >
                    <span>Fabric & Fit</span>
                    <span>{activeAccordion === "fabric" ? "−" : "+"}</span>
                  </button>
                  {activeAccordion === "fabric" && (
                    <div className="text-[#716A75] pb-2 space-y-1 font-sans">
                      <p><strong>Fit:</strong> {product.fit}</p>
                      <p><strong>Fabric:</strong> {product.fabric}</p>
                    </div>
                  )}
                </div>

                <div className="border-t border-[#E6E0E8]/60 pt-2">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "care" ? "" : "care")}
                    className="w-full flex justify-between items-center py-2 text-left font-semibold text-[#35163F] uppercase tracking-wider"
                  >
                    <span>Care Instructions</span>
                    <span>{activeAccordion === "care" ? "−" : "+"}</span>
                  </button>
                  {activeAccordion === "care" && (
                    <p className="text-[#716A75] pb-2 leading-relaxed font-sans">
                      {product.care}
                    </p>
                  )}
                </div>

                <div className="border-t border-[#E6E0E8]/60 pt-2">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "delivery" ? "" : "delivery")}
                    className="w-full flex justify-between items-center py-2 text-left font-semibold text-[#35163F] uppercase tracking-wider"
                  >
                    <span>Delivery & Returns</span>
                    <span>{activeAccordion === "delivery" ? "−" : "+"}</span>
                  </button>
                  {activeAccordion === "delivery" && (
                    <p className="text-[#716A75] pb-2 leading-relaxed font-sans">
                      {product.delivery}
                    </p>
                  )}
                </div>
              </div>

              {/* Confidence elements row */}
              <div className="mt-6 pt-4 border-t border-[#E6E0E8] grid grid-cols-3 gap-2 text-center text-[11px] text-[#716A75]">
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-[#9B7AE8]" />
                  <span>Free over ₹999</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RefreshCw className="w-4 h-4 text-[#9B7AE8]" />
                  <span>7-Day Exchange</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#9B7AE8]" />
                  <span>Verified Cotton</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
