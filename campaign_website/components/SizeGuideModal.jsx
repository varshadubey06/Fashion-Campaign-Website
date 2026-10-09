"use client";

import React, { useEffect, useState } from "react";
import { X, Ruler, Sparkles } from "lucide-react";
import { sizeGuideData } from "../data/products";

export default function SizeGuideModal({ isOpen, onClose }) {
  const [tab, setTab] = useState("standard"); // standard | oversized

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const oversizedData = [
    { size: "XS", chest: '38"', length: '27"', shoulder: '18.5"' },
    { size: "S", chest: '40"', length: '28"', shoulder: '19.5"' },
    { size: "M", chest: '42"', length: '29"', shoulder: '20.5"' },
    { size: "L", chest: '44"', length: '30"', shoulder: '21.5"' },
    { size: "XL", chest: '46"', length: '31"', shoulder: '22.5"' },
  ];

  const currentData = tab === "standard" ? sizeGuideData : oversizedData;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Size Guide">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#242126]/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FAF8F3] border border-[#E6E0E8] w-full max-w-lg rounded-sm shadow-2xl p-6 sm:p-8 z-10 text-[#242126]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close size guide"
          className="absolute top-5 right-5 text-[#716A75] hover:text-[#35163F] p-1.5 rounded-full hover:bg-[#F0E9FA] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2 mb-1">
          <Ruler className="w-5 h-5 text-[#9B7AE8]" />
          <h3 className="font-heading text-2xl font-semibold text-[#35163F]">
            FIND YOUR FIT
          </h3>
        </div>
        <p className="text-xs text-[#716A75] font-sans mb-6">
          Use this guide as a starting point. Check the garment's actual measurements in inches before ordering.
        </p>

        {/* Silhouette Switcher Tabs */}
        <div className="flex border-b border-[#E6E0E8] mb-6">
          <button
            onClick={() => setTab("standard")}
            className={`pb-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 -mb-[2px] ${
              tab === "standard"
                ? "border-[#35163F] text-[#35163F]"
                : "border-transparent text-[#716A75] hover:text-[#242126]"
            }`}
          >
            Relaxed Fit
          </button>
          <button
            onClick={() => setTab("oversized")}
            className={`pb-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 -mb-[2px] ${
              tab === "oversized"
                ? "border-[#35163F] text-[#35163F]"
                : "border-transparent text-[#716A75] hover:text-[#242126]"
            }`}
          >
            Oversized Streetwear
          </button>
        </div>

        {/* Measurements Table */}
        <div className="overflow-x-auto bg-[#FFFFFF] border border-[#E6E0E8] rounded-xs mb-6">
          <table className="w-full text-left border-collapse text-xs font-sans">
            <thead>
              <tr className="bg-[#F0E9FA]/60 border-b border-[#E6E0E8] text-[#35163F] font-semibold uppercase tracking-wider">
                <th className="py-3 px-4">Size</th>
                <th className="py-3 px-4">Chest (in)</th>
                <th className="py-3 px-4">Length (in)</th>
                <th className="py-3 px-4">Shoulder (in)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E6E0E8] text-[#242126]">
              {currentData.map((row) => (
                <tr key={row.size} className="hover:bg-[#FAF8F3] transition-colors">
                  <td className="py-3 px-4 font-bold text-[#35163F]">{row.size}</td>
                  <td className="py-3 px-4">{row.chest}</td>
                  <td className="py-3 px-4">{row.length}</td>
                  <td className="py-3 px-4">{row.shoulder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#F0E9FA]/50 border border-[#E6E0E8] p-3.5 rounded-xs flex items-start gap-2.5 text-[11px] text-[#716A75]">
          <Sparkles className="w-4 h-4 text-[#9B7AE8] shrink-0 mt-0.5" />
          <p>
            <strong>Styling Tip:</strong> If you prefer a tailored everyday silhouette, select your true size. For a bold streetwear drape with dropped shoulders, size up by one.
          </p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            Got It, Back to Product
          </button>
        </div>
      </div>
    </div>
  );
}
