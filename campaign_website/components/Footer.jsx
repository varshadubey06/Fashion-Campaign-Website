"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowUp, X } from "lucide-react";
import { useCart } from "./CartProvider";

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function PinterestIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  );
}

export default function Footer() {
  const { openSizeGuide } = useCart();
  const [infoModal, setInfoModal] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#220C2A] text-[#FAF8F3] border-t border-[#35163F] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#35163F]/80">
          
          {/* Column 1: Brand & Statement (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group text-[#FAF8F3]"
            >
              <span className="font-heading text-xl font-bold tracking-wider uppercase">
                GIRLS WHO BUILD
              </span>
              <Sparkles className="w-4 h-4 text-[#9B7AE8]" />
            </Link>

            <p className="text-sm text-[#F0E9FA]/75 font-sans leading-relaxed max-w-sm">
              For every woman building a future on her own terms. Smart. Strong. Unstoppable.
            </p>

            <div className="pt-2 text-xs text-[#9B7AE8] font-semibold tracking-widest uppercase">
              Campaign Drop 01 • Wear Your Ambition
            </div>
          </div>

          {/* Column 2: Explore (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B7AE8]">
              COLLECTION
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F0E9FA]/80 font-sans">
              <li>
                <Link href="/collection" className="hover:text-[#FAF8F3] transition-colors">
                  All T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/collection?filter=new" className="hover:text-[#FAF8F3] transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collection?filter=bestsellers" className="hover:text-[#FAF8F3] transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <a href="#our-story" className="hover:text-[#FAF8F3] transition-colors">
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Help & Service (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B7AE8]">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F0E9FA]/80 font-sans">
              <li>
                <button
                  onClick={openSizeGuide}
                  className="hover:text-[#FAF8F3] transition-colors text-left"
                >
                  Size Guide & Measurements
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setInfoModal({
                      title: "Delivery & Shipping",
                      text: "Standard delivery across India in 3–5 business days. Free shipping on orders above ₹999. All packages shipped with eco-conscious minimal packaging.",
                    })
                  }
                  className="hover:text-[#FAF8F3] transition-colors text-left"
                >
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setInfoModal({
                      title: "Returns & Exchanges",
                      text: "We offer hassle-free 7-day demo exchanges on all unworn graphic tees. Reach out to our customer care team to initiate a size swap.",
                    })
                  }
                  className="hover:text-[#FAF8F3] transition-colors text-left"
                >
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setInfoModal({
                      title: "Contact Brand Team",
                      text: "Campaign inquiries: contact@girlswhobuild.campaign\nCustomer support hours: Monday to Friday, 9:00 AM - 6:00 PM IST.",
                    })
                  }
                  className="hover:text-[#FAF8F3] transition-colors text-left"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Community & Social (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B7AE8]">
              FOLLOW
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#35163F] border border-[#51265F] flex items-center justify-center text-[#F0E9FA] hover:text-[#FAF8F3] hover:bg-[#51265F] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full bg-[#35163F] border border-[#51265F] flex items-center justify-center text-[#F0E9FA] hover:text-[#FAF8F3] hover:bg-[#51265F] transition-colors"
              >
                <PinterestIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-[#F0E9FA]/60 font-sans pt-2">
              Share your look with <strong className="text-[#9B7AE8]">#GirlsWhoBuild</strong>
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F0E9FA]/60 font-sans">
          <div>
            © 2026 Girls Who Build. All rights reserved. Built with Next.js.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() =>
                setInfoModal({
                  title: "Privacy Policy",
                  text: "This campaign site is a demonstration of the Girls Who Build brand experience. We respect your privacy and do not sell personal data to third parties.",
                })
              }
              className="hover:text-[#FAF8F3] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() =>
                setInfoModal({
                  title: "Terms and Conditions",
                  text: "All product designs, photography, and brand statements are property of the Girls Who Build campaign showcase.",
                })
              }
              className="hover:text-[#FAF8F3] transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 text-[#9B7AE8] hover:text-[#FAF8F3] flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Info Dialog */}
      {infoModal && (
        <div className="fixed inset-0 z-60 bg-[#242126]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF8F3] border border-[#E6E0E8] max-w-md w-full p-6 rounded-sm shadow-2xl relative text-[#242126]">
            <button
              onClick={() => setInfoModal(null)}
              className="absolute top-4 right-4 text-[#716A75] hover:text-[#35163F] p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-heading text-xl font-bold text-[#35163F] mb-3">
              {infoModal.title}
            </h3>
            <p className="text-sm text-[#716A75] whitespace-pre-line leading-relaxed mb-6 font-sans">
              {infoModal.text}
            </p>
            <button
              onClick={() => setInfoModal(null)}
              className="w-full py-2.5 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
