"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import { useCart } from "./CartProvider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart, openSearch } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trap scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Collection", href: "/collection" },
    { label: "Our Story", href: "/#our-story" },
    { label: "Community", href: "/#community" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E6E0E8] shadow-xs py-3.5"
            : "bg-[#FAF8F3] border-b border-transparent py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11">
            {/* Left: Custom Typographic Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group text-[#35163F] transition-opacity hover:opacity-90"
              aria-label="Girls Who Build Home"
            >
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wider uppercase text-[#35163F]">
                GIRLS WHO BUILD
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#9B7AE8] group-hover:rotate-45 transition-transform duration-300" />
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-[#242126]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative py-1 transition-colors hover:text-[#9B7AE8] ${
                      isActive ? "text-[#35163F] font-bold" : "text-[#242126]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#35163F]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Search Trigger */}
              <button
                onClick={openSearch}
                aria-label="Search Collection"
                className="p-2 text-[#242126] hover:text-[#35163F] hover:bg-[#F0E9FA] rounded-full transition-colors"
              >
                <Search className="w-4.5 h-4.5" />
              </button>

              {/* Shopping Bag Trigger */}
              <button
                onClick={openCart}
                aria-label={`Shopping bag with ${totalItems} items`}
                className="relative p-2 text-[#242126] hover:text-[#35163F] hover:bg-[#F0E9FA] rounded-full transition-colors"
              >
                <ShoppingBag className="w-4.5 h-4.5" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 w-4.5 h-4.5 bg-[#35163F] text-[#FAF8F3] text-[10px] font-bold rounded-full flex items-center justify-center font-sans">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Primary CTA button (Desktop) */}
              <Link
                href="/collection"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-xs hover:shadow-md"
              >
                SHOP NOW
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className="md:hidden p-2 text-[#242126] hover:text-[#35163F] hover:bg-[#F0E9FA] rounded-full transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-[#242126]/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF8F3] border-l border-[#E6E0E8] shadow-2xl p-6 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E6E0E8]">
                <div className="flex items-center gap-1.5 text-[#35163F]">
                  <span className="font-heading text-lg font-bold tracking-wider uppercase">
                    GIRLS WHO BUILD
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#9B7AE8]" />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-1.5 text-[#716A75] hover:text-[#35163F] rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="mt-8 flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-xl font-medium text-[#242126] hover:text-[#9B7AE8] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openSearch();
                  }}
                  className="flex items-center gap-2 font-heading text-xl font-medium text-[#242126] hover:text-[#9B7AE8] transition-colors text-left"
                >
                  <Search className="w-5 h-5" /> Search Catalog
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCart();
                  }}
                  className="flex items-center gap-2 font-heading text-xl font-medium text-[#242126] hover:text-[#9B7AE8] transition-colors text-left"
                >
                  <ShoppingBag className="w-5 h-5" /> Shopping Bag ({totalItems})
                </button>
              </nav>
            </div>

            {/* Mobile Bottom CTA */}
            <div className="pt-6 border-t border-[#E6E0E8] space-y-3">
              <Link
                href="/collection"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest text-center block transition-colors shadow-md"
              >
                SHOP THE COLLECTION →
              </Link>
              <p className="text-[11px] text-center text-[#716A75]">
                Smart. Strong. Unstoppable.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
