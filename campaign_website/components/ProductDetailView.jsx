"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Minus,
  Ruler,
  Truck,
  RefreshCw,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { useCart } from "./CartProvider";

export default function ProductDetailView({ product }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [validationError, setValidationError] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState("description");

  const { addToCart, openSizeGuide } = useCart();

  const handleAdd = () => {
    if (!selectedSize) {
      setValidationError(true);
      return;
    }
    setValidationError(false);
    addToCart(product, selectedSize, quantity);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#242126]">
      <Header />

      <main className="flex-1 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <nav className="flex items-center gap-2 text-xs text-[#716A75] font-sans">
            <Link href="/" className="hover:text-[#35163F] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/collection" className="hover:text-[#35163F] transition-colors">
              Collection
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#35163F] font-semibold">{product.name}</span>
          </nav>
        </div>

        {/* Product Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left: Gallery (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-4/5 w-full bg-[#FFFFFF] border border-[#E6E0E8] overflow-hidden rounded-xs shadow-lg">
                <Image
                  src={product.images[activeImageIdx] || product.images[0]}
                  alt={`${product.name} - ${product.slogan}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-[#35163F] text-[#FAF8F3] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-md">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails row */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative aspect-4/5 rounded-xs border-2 overflow-hidden transition-all bg-[#FFFFFF] ${
                      activeImageIdx === idx
                        ? "border-[#35163F] ring-2 ring-[#35163F]/20"
                        : "border-[#E6E0E8] hover:border-[#9B7AE8]"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`View ${idx + 1}`}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Details & Purchase Form (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col justify-start space-y-6">
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9B7AE8]">
                    {product.color} • {product.fit}
                  </span>
                  <span className="text-xs text-[#27764B] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#27764B]" />
                    In Stock • Ready to Ship
                  </span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#35163F] leading-tight">
                  {product.name}
                </h1>

                <p className="font-heading italic text-lg text-[#51265F] mt-1 mb-4">
                  "{product.slogan}"
                </p>

                <div className="flex items-baseline gap-3 pb-5 border-b border-[#E6E0E8]">
                  <span className="font-sans text-3xl font-bold text-[#242126]">
                    ₹{product.price}
                  </span>
                  <span className="text-xs text-[#716A75] font-sans">
                    MRP inclusive of all taxes
                  </span>
                </div>
              </div>

              <p className="text-base text-[#716A75] font-sans leading-relaxed">
                {product.description}
              </p>

              {/* Color Swatch */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#35163F]">
                    Color: <span className="font-normal text-[#716A75]">{product.color}</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-[#35163F] p-0.5 flex items-center justify-center shadow-xs">
                    <span
                      className="w-full h-full rounded-full inline-block"
                      style={{ backgroundColor: product.colorHex }}
                    />
                  </div>
                  <span className="text-xs text-[#716A75] font-medium font-sans">
                    Premium pigment-dyed {product.color.toLowerCase()} cotton
                  </span>
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#35163F]">
                    Select Size:{" "}
                    {selectedSize ? (
                      <span className="text-[#35163F] font-bold">{selectedSize}</span>
                    ) : (
                      <span className="text-red-600 font-normal">*Required</span>
                    )}
                  </span>
                  <button
                    onClick={openSizeGuide}
                    className="text-xs text-[#716A75] hover:text-[#35163F] flex items-center gap-1 underline underline-offset-4 transition-colors font-semibold cursor-pointer"
                  >
                    <Ruler className="w-3.5 h-3.5 text-[#9B7AE8]" />
                    Size Guide
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-2.5">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => {
                        setSelectedSize(sz);
                        setValidationError(false);
                      }}
                      className={`py-3 text-xs font-bold tracking-wider transition-all border cursor-pointer ${
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
                  <p className="text-xs text-red-600 mt-2 font-medium flex items-center gap-1">
                    Please select your size before adding to bag.
                  </p>
                )}
              </div>

              {/* Quantity & Add to Bag */}
              <div className="flex items-stretch gap-3 pt-2">
                <div className="flex items-center border border-[#E6E0E8] bg-[#FFFFFF] shrink-0">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3.5 text-[#716A75] hover:text-[#35163F] hover:bg-[#F0E9FA] transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 text-sm font-bold text-[#242126] font-sans">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3.5 text-[#716A75] hover:text-[#35163F] hover:bg-[#F0E9FA] transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 py-4 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>ADD TO BAG • ₹{product.price * quantity}</span>
                </button>
              </div>

              {/* Confidence badges */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#E6E0E8] text-center text-xs text-[#716A75] font-sans">
                <div className="flex flex-col items-center gap-1.5">
                  <Truck className="w-4.5 h-4.5 text-[#9B7AE8]" />
                  <span>Free Shipping &gt; ₹999</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <RefreshCw className="w-4.5 h-4.5 text-[#9B7AE8]" />
                  <span>7-Day Exchange</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#9B7AE8]" />
                  <span>240-260 GSM Cotton</span>
                </div>
              </div>

              {/* Accordions */}
              <div className="space-y-3 pt-2 text-sm font-sans">
                
                <div className="border border-[#E6E0E8] bg-[#FFFFFF] p-4">
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === "description" ? "" : "description")
                    }
                    className="w-full flex justify-between items-center text-left font-bold text-[#35163F] uppercase tracking-wider text-xs cursor-pointer"
                  >
                    <span>PRODUCT STORY & DESIGN</span>
                    <span className="text-base">{activeAccordion === "description" ? "−" : "+"}</span>
                  </button>
                  {activeAccordion === "description" && (
                    <div className="mt-3 text-xs text-[#716A75] leading-relaxed space-y-2">
                      <p>{product.fullDescription}</p>
                    </div>
                  )}
                </div>

                <div className="border border-[#E6E0E8] bg-[#FFFFFF] p-4">
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === "fabric" ? "" : "fabric")
                    }
                    className="w-full flex justify-between items-center text-left font-bold text-[#35163F] uppercase tracking-wider text-xs cursor-pointer"
                  >
                    <span>FABRIC & SILHOUETTE</span>
                    <span className="text-base">{activeAccordion === "fabric" ? "−" : "+"}</span>
                  </button>
                  {activeAccordion === "fabric" && (
                    <div className="mt-3 text-xs text-[#716A75] leading-relaxed space-y-1.5">
                      <p><strong>Fit:</strong> {product.fit}</p>
                      <p><strong>Composition:</strong> {product.fabric}</p>
                      <p><strong>Finishing:</strong> Biowashed and pre-shrunk for maximum longevity.</p>
                    </div>
                  )}
                </div>

                <div className="border border-[#E6E0E8] bg-[#FFFFFF] p-4">
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === "care" ? "" : "care")
                    }
                    className="w-full flex justify-between items-center text-left font-bold text-[#35163F] uppercase tracking-wider text-xs cursor-pointer"
                  >
                    <span>CARE INSTRUCTIONS</span>
                    <span className="text-base">{activeAccordion === "care" ? "−" : "+"}</span>
                  </button>
                  {activeAccordion === "care" && (
                    <div className="mt-3 text-xs text-[#716A75] leading-relaxed">
                      <p>{product.care}</p>
                    </div>
                  )}
                </div>

                <div className="border border-[#E6E0E8] bg-[#FFFFFF] p-4">
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === "delivery" ? "" : "delivery")
                    }
                    className="w-full flex justify-between items-center text-left font-bold text-[#35163F] uppercase tracking-wider text-xs cursor-pointer"
                  >
                    <span>DELIVERY & RETURNS</span>
                    <span className="text-base">{activeAccordion === "delivery" ? "−" : "+"}</span>
                  </button>
                  {activeAccordion === "delivery" && (
                    <div className="mt-3 text-xs text-[#716A75] leading-relaxed">
                      <p>{product.delivery}</p>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Complete the Look */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-[#E6E0E8]">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9B7AE8] block mb-1">
                COMPLETE THE CAPSULE
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#35163F]">
                YOU MAY ALSO LIKE
              </h2>
            </div>
            <Link
              href="/collection"
              className="text-xs font-bold uppercase tracking-widest text-[#35163F] hover:text-[#9B7AE8] flex items-center gap-1 underline underline-offset-4"
            >
              All Styles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
