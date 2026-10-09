"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CommunitySection() {
  const blocks = [
    {
      title: "THE COURAGE TO BEGIN",
      subtitle: "Confidence to begin.",
      copy: "Every first step counts. Start before everything feels perfect.",
      image: "/images/community-1.jpg",
      alt: "Woman presenting an idea with confidence to her creative team",
    },
    {
      title: "THE FREEDOM TO CREATE",
      subtitle: "Courage to create.",
      copy: "Your perspective is your strength. Make room for ideas that are unmistakably yours.",
      image: "/images/community-2.jpg",
      alt: "Two women collaborating seamlessly on a laptop in modern workspace",
    },
    {
      title: "THE POWER TOGETHER",
      subtitle: "Community to grow.",
      copy: "Great things grow when we share knowledge, celebrate progress, and support one another.",
      image: "/images/community-3.jpg",
      alt: "Creative woman sketching bold new designs in her studio",
    },
  ];

  return (
    <section id="community" className="bg-[#F0E9FA]/40 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-[#E6E0E8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#9B7AE8]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#9B7AE8]">
              WOMEN SUPPORTING WOMEN
            </span>
            <span className="w-6 h-[1.5px] bg-[#9B7AE8]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#35163F] tracking-tight">
            BUILT BY HER. INSPIRED BY US.
          </h2>
          <p className="text-base sm:text-lg text-[#716A75] font-sans leading-relaxed">
            Every big idea begins somewhere. Sometimes with a question, sometimes with a sketch, and sometimes with the courage to begin.
          </p>
        </div>

        {/* 3 Editorial Gallery Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8">
          {blocks.map((b, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F3] border border-[#E6E0E8] overflow-hidden group hover:border-[#9B7AE8] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 w-full bg-[#E6E0E8] overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between bg-[#FFFFFF]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9B7AE8] block mb-1">
                    {b.subtitle}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#35163F] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-[#716A75] font-sans leading-relaxed">
                    {b.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Statements Pill Row */}
        <div className="mt-12 pt-8 border-t border-[#E6E0E8] flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold uppercase tracking-widest text-[#35163F]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9B7AE8]" />
            Confidence to begin.
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9B7AE8]" />
            Courage to create.
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9B7AE8]" />
            Community to grow.
          </span>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/collection"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <span>BE PART OF THE MOVEMENT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
