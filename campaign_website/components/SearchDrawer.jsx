"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "./CartProvider";

export default function SearchDrawer({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const { openQuickView } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.slogan.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Search Collection">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#242126]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-x-0 top-0 max-h-screen bg-[#FAF8F3] border-b border-[#E6E0E8] shadow-2xl z-10 transition-transform">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E6E0E8]">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#35163F]">
              FIND YOUR NEXT STATEMENT.
            </h2>
            <button
              onClick={onClose}
              aria-label="Close search"
              className="p-2 text-[#716A75] hover:text-[#35163F] rounded-full hover:bg-[#F0E9FA] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Input */}
          <div className="relative mt-6">
            <Search className="w-5 h-5 text-[#716A75] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search T-shirts, colors, or slogans… (e.g. Builder, Lavender, Unstoppable)"
              className="w-full pl-12 pr-12 py-4 bg-[#FFFFFF] border border-[#E6E0E8] focus:border-[#35163F] focus:ring-1 focus:ring-[#35163F] outline-none text-[#242126] font-sans text-base placeholder:text-[#716A75]/60 transition-all rounded-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#716A75] hover:text-[#242126] p-1"
                aria-label="Clear query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Suggestions when empty */}
          {!query && (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#716A75]">
              <span className="font-semibold text-[#35163F]">Trending:</span>
              {["Builder", "Plum", "Lavender", "Unstoppable", "Future"].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 bg-[#F0E9FA] hover:bg-[#9B7AE8]/20 text-[#35163F] rounded-full transition-colors font-medium"
                >
                  {term}
                </button>
              ))}
            </div>
          )}

          {/* Results Area */}
          <div className="mt-8 max-h-[60vh] overflow-y-auto pr-2 pb-4">
            {query && filtered.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-[#716A75] font-semibold mb-4">
                  {filtered.length} {filtered.length === 1 ? "Result" : "Results"} Found
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filtered.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#FFFFFF] p-4 border border-[#E6E0E8] flex gap-4 hover:border-[#9B7AE8] transition-colors group cursor-pointer"
                      onClick={() => {
                        onClose();
                        openQuickView(item);
                      }}
                    >
                      <div className="relative w-20 h-24 bg-[#FAF8F3] shrink-0 border border-[#E6E0E8] overflow-hidden">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          sizes="80px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#9B7AE8]">
                            {item.color}
                          </span>
                          <h4 className="font-heading text-base font-semibold text-[#35163F] group-hover:text-[#9B7AE8] transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-xs text-[#716A75] italic line-clamp-1 mt-0.5">
                            "{item.slogan}"
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <span className="font-semibold text-sm text-[#242126]">
                            ₹{item.price}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#35163F] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Quick View <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {query && filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="font-heading text-xl font-semibold text-[#35163F] mb-1">
                  NO MATCHES YET
                </p>
                <p className="text-sm text-[#716A75]">
                  Try a different word or explore our four signature campaign styles.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
