"use client";

import React, { useEffect } from "react";
import { CheckCircle2, AlertCircle, Info, X, ShoppingBag } from "lucide-react";

export default function Toast({ toast, onClose, onOpenBag }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type === "success";
  const isError = toast.type === "error";

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-md w-full mx-4 sm:mx-0 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#FFFFFF] border border-[#E6E0E8] shadow-2xl rounded-sm p-4 flex items-start gap-3 text-[#242126]">
        <div className="shrink-0 mt-0.5">
          {isSuccess && <CheckCircle2 className="w-5 h-5 text-[#27764B]" />}
          {isError && <AlertCircle className="w-5 h-5 text-red-600" />}
          {!isSuccess && !isError && <Info className="w-5 h-5 text-[#9B7AE8]" />}
        </div>

        <div className="flex-1 pr-2">
          <p className="text-sm font-semibold text-[#242126] font-sans">
            {toast.message}
          </p>
          {toast.meta && (
            <p className="text-xs text-[#716A75] mt-0.5">
              Item ready in your cart with selected size.
            </p>
          )}

          {isSuccess && onOpenBag && (
            <button
              onClick={() => {
                onClose();
                onOpenBag();
              }}
              className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#35163F] hover:text-[#9B7AE8] inline-flex items-center gap-1 transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              View Shopping Bag →
            </button>
          )}
        </div>

        <button
          onClick={onClose}
          aria-label="Close notification"
          className="text-[#716A75] hover:text-[#242126] transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
