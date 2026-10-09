"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function Manifesto() {
  return (
    <section
      id="manifesto-strip"
      className="relative bg-[#35163F] text-[#FAF8F3] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-[#51265F]/40 overflow-hidden"
    >
      {/* Subtle background star decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9B7AE8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 sm:space-y-8">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-[#9B7AE8]/60" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#9B7AE8]">
            THE FUTURE ISN'T GIVEN.
          </span>
          <span className="w-8 h-[1px] bg-[#9B7AE8]/60" />
        </div>

        {/* Main Bold Statement */}
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F3] leading-[1.15]">
          NOT HERE TO FIT IN. <br />
          <span className="text-[#F0E9FA] font-normal italic">
            HERE TO BUILD WHAT'S NEXT.
          </span>
        </h2>

        {/* Supporting Line */}
        <p className="text-base sm:text-lg text-[#F0E9FA]/80 font-sans max-w-2xl mx-auto leading-relaxed">
          Your ideas deserve space. Your voice deserves to be heard. Your future deserves to be yours.
        </p>

        {/* Thin divider */}
        <div className="w-16 h-[1px] bg-[#9B7AE8]/40 mx-auto my-6" />

        {/* 3 Principles with Star Symbols */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-y-3 gap-x-4 sm:gap-x-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FAF8F3]">
          <span className="hover:text-[#9B7AE8] transition-colors">
            DREAM WITHOUT LIMITS
          </span>
          <span className="text-[#9B7AE8] text-base select-none">✦</span>
          <span className="hover:text-[#9B7AE8] transition-colors">
            CREATE WITHOUT FEAR
          </span>
          <span className="text-[#9B7AE8] text-base select-none">✦</span>
          <span className="hover:text-[#9B7AE8] transition-colors">
            LEAD WITH PURPOSE
          </span>
        </div>
      </div>
    </section>
  );
}
