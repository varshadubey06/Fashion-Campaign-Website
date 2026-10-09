"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, SlidersHorizontal, X, ArrowLeft, Sparkles } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function CollectionPage() {
  const [categoryFilter, setCategoryFilter] = useState("all"); // all | bestsellers | new
  const [colorFilter, setColorFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured"); // featured | price-asc | price-desc
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Available colors
  const colors = [
    { label: "All Colors", value: "all" },
    { label: "Ivory", value: "Ivory", hex: "#FAF8F3" },
    { label: "Deep Plum", value: "Deep Plum", hex: "#35163F" },
    { label: "Lavender", value: "Lavender", hex: "#E5DBF5" },
    { label: "Black", value: "Black", hex: "#202024" },
  ];

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Category / Badge filter
    if (categoryFilter === "bestsellers") {
      list = list.filter((p) => p.isBestseller);
    } else if (categoryFilter === "new") {
      list = list.filter((p) => p.isNew);
    }

    // Color filter
    if (colorFilter !== "all") {
      list = list.filter((p) => p.color === colorFilter);
    }

    // Sorting
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [categoryFilter, colorFilter, sortBy]);

  const hasActiveFilters = categoryFilter !== "all" || colorFilter !== "all" || sortBy !== "featured";

  const clearAllFilters = () => {
    setCategoryFilter("all");
    setColorFilter("all");
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#242126]">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <nav className="flex items-center gap-2 text-xs text-[#716A75] font-sans">
            <Link href="/" className="hover:text-[#35163F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#35163F] font-semibold">The Collection</span>
          </nav>
        </div>

        {/* Collection Hero Banner */}
        <section className="bg-[#FAF8F3] border-b border-[#E6E0E8] overflow-hidden mb-8 sm:mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="w-6 h-[1.5px] bg-[#9B7AE8]" />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#9B7AE8]">
                    THE COLLECTION
                  </span>
                </div>
                <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[#35163F] tracking-tight">
                  FIND YOUR STATEMENT.
                </h1>
                <p className="text-base text-[#716A75] max-w-xl font-sans leading-relaxed">
                  Pieces made for big ideas, bold beginnings, and the everyday moments that shape who you become. Crafted in heavyweight cotton with empowering messages.
                </p>
                <div className="pt-2 text-xs text-[#35163F] font-medium tracking-wide">
                  Showing all {products.length} capsule garments • Free delivery above ₹999
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative aspect-16/9 sm:aspect-16/10 w-full rounded-xs overflow-hidden border border-[#E6E0E8] shadow-md bg-[#F0E9FA]">
                  <Image
                    src="/images/folded-collection.jpg"
                    alt="Neatly folded Girls Who Build graphic T-shirts in ivory, lavender, plum and black"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#35163F]/20 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Filter & Controls Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="bg-[#FFFFFF] border border-[#E6E0E8] p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Desktop Quick Category Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { label: "All Styles", val: "all" },
                { label: "Best Sellers", val: "bestsellers" },
                { label: "New Arrivals", val: "new" },
              ].map((btn) => (
                <button
                  key={btn.val}
                  onClick={() => setCategoryFilter(btn.val)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors border ${
                    categoryFilter === btn.val
                      ? "bg-[#35163F] text-[#FAF8F3] border-[#35163F]"
                      : "bg-[#FAF8F3] text-[#242126] border-[#E6E0E8] hover:border-[#35163F]"
                  }`}
                >
                  {btn.label}
                </button>
              ))}

              {/* Color filter dropdown */}
              <div className="relative inline-block ml-1">
                <select
                  value={colorFilter}
                  onChange={(e) => setColorFilter(e.target.value)}
                  className="px-3 py-2 bg-[#FAF8F3] border border-[#E6E0E8] text-xs font-semibold uppercase tracking-wider text-[#35163F] outline-none focus:border-[#35163F] cursor-pointer"
                >
                  {colors.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="px-3 py-1.5 text-xs text-[#716A75] hover:text-[#35163F] underline flex items-center gap-1 font-sans transition-colors"
                >
                  <X className="w-3.5 h-3.5" /> Clear Filters
                </button>
              )}
            </div>

            {/* Sorting & Counter */}
            <div className="flex items-center justify-between md:justify-end gap-4">
              <span className="text-xs text-[#716A75] font-sans">
                {filteredProducts.length} {filteredProducts.length === 1 ? "style" : "styles"}
              </span>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#716A75]">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-[#FAF8F3] border border-[#E6E0E8] text-xs font-semibold uppercase tracking-wider text-[#35163F] outline-none focus:border-[#35163F] cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#FFFFFF] border border-[#E6E0E8] p-8 max-w-lg mx-auto">
              <p className="font-heading text-2xl font-bold text-[#35163F] mb-2">
                No matching styles found
              </p>
              <p className="text-sm text-[#716A75] mb-6">
                Try selecting a different color or category filter.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-3 bg-[#35163F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest hover:bg-[#51265F]"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
