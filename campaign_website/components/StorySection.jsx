"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function StorySection() {
  return (
    <section id="our-story" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Studio Lifestyle Photography */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-4/3 sm:aspect-16/11 w-full rounded-xs overflow-hidden border border-[#E6E0E8] shadow-xl bg-[#F0E9FA]">
            <Image
              src="/images/brand-story.jpg"
              alt="Women collaborating together in creative design studio with laptop and sketches"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          {/* Subtle accent offset frame */}
          <div className="hidden sm:block absolute -bottom-4 -right-4 w-48 h-48 border border-[#9B7AE8]/40 -z-10 rounded-xs" />
        </div>

        {/* Right Column: Editorial Copy */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#9B7AE8]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#9B7AE8]">
              WHY WE BUILD
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#35163F] tracking-tight leading-[1.15]">
            THE FUTURE NEEDS <br />
            <span className="italic font-normal text-[#51265F]">
              HER VOICE.
            </span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#716A75] font-sans leading-relaxed">
            <p>
              We believe ambition has no boundaries and creativity belongs to everyone. Every idea that changes something begins with someone brave enough to start.
            </p>
            <p>
              Girls Who Build is a celebration of women who challenge expectations, support one another, and turn their ideas into something meaningful.
            </p>
          </div>

          {/* Closing Line */}
          <div className="pt-2 border-l-2 border-[#9B7AE8] pl-4 italic text-[#35163F] font-heading text-lg sm:text-xl font-medium">
            “Your voice matters. Your ideas deserve space. Your future is yours to build.”
          </div>

          <div className="pt-4">
            <a
              href="#community"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>GET TO KNOW US</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
