"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToCollection = (e) => {
    e.preventDefault();
    const el = document.getElementById("collection-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToStory = (e) => {
    e.preventDefault();
    const el = document.getElementById("our-story");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-[#E6E0E8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center z-10 space-y-6 sm:space-y-8">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-[1.5px] w-6 bg-[#9B7AE8]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#9B7AE8]">
                A CAMPAIGN FOR THE FEARLESS
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#35163F] leading-[1.06]">
              GIRLS WHO <br />
              BUILD THE <br />
              <span className="text-[#51265F] italic font-normal">FUTURE.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#716A75] font-sans leading-relaxed max-w-xl">
              For the women who dream bigger, challenge limits, and turn ideas into action. Wear your ambition. Own your story.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <a
                href="#collection-section"
                onClick={scrollToCollection}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>SHOP THE COLLECTION</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#our-story"
                onClick={scrollToStory}
                className="inline-flex items-center justify-center gap-1.5 py-3 text-xs font-semibold uppercase tracking-widest text-[#35163F] hover:text-[#9B7AE8] transition-colors group underline underline-offset-8"
              >
                <span>DISCOVER OUR STORY</span>
              </a>
            </div>

            {/* Small supporting label */}
            <div className="pt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#716A75]">
              <Sparkles className="w-3.5 h-3.5 text-[#9B7AE8]" />
              <span>MADE FOR THE WOMAN YOU'RE BECOMING.</span>
            </div>
          </div>

          {/* Right Column: Hero Photograph */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative aspect-4/5 sm:aspect-16/11 lg:aspect-4/3 w-full rounded-xs overflow-hidden border border-[#E6E0E8] shadow-2xl bg-[#F0E9FA]">
              <Image
                src="/images/hero-campaign.jpg"
                alt="Three confident women wearing Girls Who Build campaign graphic T-shirts in ivory, lavender, and plum"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Subtle gradient vignette at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#242126]/30 to-transparent pointer-events-none" />

              {/* Badge overlay */}
              <div className="absolute bottom-4 right-4 bg-[#FAF8F3]/95 backdrop-blur-xs px-4 py-2 border border-[#E6E0E8] text-[11px] font-semibold text-[#35163F] uppercase tracking-wider hidden sm:block">
                Signature Capsule • Drop 01
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center">
          <a
            href="#manifesto-strip"
            className="flex flex-col items-center text-[#716A75] hover:text-[#35163F] transition-colors"
            aria-label="Scroll down to campaign manifesto"
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] mb-1">
              EXPLORE
            </span>
            <div className="w-6 h-10 border border-[#716A75]/50 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1.5 h-2 bg-[#9B7AE8] rounded-full animate-soft-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
