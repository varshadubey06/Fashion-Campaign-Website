"use client";

import React from "react";
import { Sparkles, Heart, Sun } from "lucide-react";

export default function BrandValues() {
  const values = [
    {
      icon: Sparkles,
      title: "DESIGNED WITH PURPOSE",
      description: "Thoughtful designs that communicate confidence and individuality.",
    },
    {
      icon: Heart,
      title: "MADE TO MAKE A STATEMENT",
      description: "Graphic essentials for women who express themselves without hesitation.",
    },
    {
      icon: Sun,
      title: "INSPIRED BY POSSIBILITY",
      description: "A campaign celebrating ambition, creativity, and the courage to begin.",
    },
  ];

  return (
    <section className="bg-[#FAF8F3] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6E0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6E0E8]">
          {values.map((v, i) => {
            const IconComponent = v.icon;
            return (
              <div
                key={i}
                className="py-8 md:py-4 px-4 md:px-8 flex flex-col items-center text-center first:pt-0 md:first:pl-0 last:pb-0 md:last:pr-0"
              >
                <div className="w-12 h-12 rounded-full bg-[#F0E9FA] flex items-center justify-center text-[#9B7AE8] mb-5">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#35163F] tracking-wide mb-2 uppercase">
                  {v.title}
                </h3>
                <p className="text-sm text-[#716A75] font-sans max-w-xs leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
