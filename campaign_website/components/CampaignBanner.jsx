"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CampaignBanner() {
  return (
    <section className="bg-[#35163F] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px] items-stretch">
          
          {/* Left Column: Urban Editorial Photography */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full">
            <Image
              src="/images/campaign-banner.jpg"
              alt="Woman wearing campaign graphic T-shirt in modern architectural city setting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {/* Subtle inner shadow on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#35163F]/50 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center text-[#FAF8F3] space-y-6">
            
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#9B7AE8]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#9B7AE8]">
                SHE MAKES HER OWN RULES.
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-5xl font-bold leading-[1.12] text-[#FAF8F3] tracking-tight">
              SHE WAS NEVER <br />
              <span className="italic font-normal text-[#F0E9FA]">
                MADE TO FOLLOW.
              </span>
            </h2>

            <div className="w-12 h-[1px] bg-[#9B7AE8]/50 my-1" />

            <p className="text-base sm:text-lg text-[#F0E9FA]/85 font-sans leading-relaxed max-w-lg">
              She questions what exists. She imagines what could be. Then she gets to work and builds it her way.
            </p>

            <div className="pt-4">
              <Link
                href="/collection"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAF8F3] hover:bg-[#F0E9FA] text-[#35163F] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-x-1"
              >
                <span>FIND YOUR STATEMENT PIECE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#9B7AE8] font-medium tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Limited Editorial Run • High-Density Screen Print</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
