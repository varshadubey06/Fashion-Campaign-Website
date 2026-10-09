"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function FeaturedCollection() {
  return (
    <section
      id="collection-section"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-[#E6E0E8] pb-8">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-[1.5px] w-6 bg-[#9B7AE8]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#9B7AE8]">
              THE SIGNATURE COLLECTION
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#35163F] tracking-tight">
            WEAR YOUR POWER.
          </h2>
          <p className="text-base text-[#716A75] font-sans mt-2 max-w-xl">
            More than a T-shirt. A reminder of what you're capable of.
          </p>
        </div>

        <Link
          href="/collection"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#35163F] hover:text-[#9B7AE8] transition-colors group underline underline-offset-8 shrink-0"
        >
          <span>EXPLORE ALL STYLES</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Bottom capsule note */}
      <div className="mt-14 text-center">
        <p className="text-xs text-[#716A75] font-sans tracking-wide">
          Heavyweight Ringspun Cotton <span className="mx-2">•</span> Pre-Shrunk Comfort <span className="mx-2">•</span> Free Shipping Above ₹999
        </p>
      </div>
    </section>
  );
}
