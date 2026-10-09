"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useCart } from "./CartProvider";

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, updateQuantity, removeFromCart, subtotal, shipping, grandTotal, totalItems, clearCart } = useCart();
  const [checkoutModal, setCheckoutModal] = useState(false);

  // Close on Escape & trap scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (checkoutModal) setCheckoutModal(false);
        else onClose();
      }
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
  }, [isOpen, onClose, checkoutModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Bag">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#242126]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F3] border-l border-[#E6E0E8] shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E6E0E8] flex items-center justify-between bg-[#FFFFFF]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#35163F]" />
              <h2 className="font-heading text-xl text-[#35163F] font-semibold tracking-wide">
                YOUR BAG {totalItems > 0 ? `(${totalItems})` : ""}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close bag"
              className="p-2 text-[#716A75] hover:text-[#35163F] rounded-full hover:bg-[#F0E9FA] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              /* Empty Bag State */
              <div className="text-center py-16 px-4 flex flex-col items-center justify-center h-full">
                <div className="w-20 h-20 rounded-full bg-[#F0E9FA] flex items-center justify-center mb-6 text-[#9B7AE8]">
                  <ShoppingBag className="w-9 h-9 stroke-[1.5]" />
                </div>
                <h3 className="font-heading text-2xl text-[#35163F] font-semibold mb-2">
                  YOUR BAG IS WAITING.
                </h3>
                <p className="text-sm text-[#716A75] max-w-xs mb-8">
                  Your next favorite statement piece is just around the corner. Explore the signature campaign collection.
                </p>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest rounded-none transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Explore the Collection
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* Items List */
              <div className="space-y-5 divide-y divide-[#E6E0E8]">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="pt-5 first:pt-0 flex gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-20 h-24 bg-[#FAF8F3] rounded-xs overflow-hidden border border-[#E6E0E8] shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-heading text-base font-semibold text-[#35163F] leading-tight">
                            {item.name}
                          </h4>
                          <span className="font-sans font-semibold text-sm text-[#242126]">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                        <p className="text-xs text-[#716A75] mt-1 font-sans">
                          {item.color} <span className="mx-1">•</span> Size: <strong className="text-[#35163F]">{item.size}</strong>
                        </p>
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="flex items-center justify-between mt-3 pt-2">
                        <div className="flex items-center border border-[#E6E0E8] bg-[#FFFFFF] rounded-xs">
                          <button
                            onClick={() => updateQuantity(item.id, item.size, -1)}
                            className="p-1.5 text-[#716A75] hover:text-[#35163F] hover:bg-[#F0E9FA] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-xs font-semibold text-[#242126] font-sans">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.size, 1)}
                            className="p-1.5 text-[#716A75] hover:text-[#35163F] hover:bg-[#F0E9FA] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="text-[#716A75] hover:text-red-600 p-1.5 transition-colors"
                          aria-label={`Remove ${item.name}`}
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#FFFFFF] border-t border-[#E6E0E8] space-y-4">
              <div className="space-y-2 text-sm font-sans">
                <div className="flex justify-between text-[#716A75]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#242126]">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-[#716A75]">
                  <span>Shipping</span>
                  <span className="text-[#27764B] font-medium">
                    {shipping === 0 ? "Complimentary (Orders > ₹999)" : `₹${shipping}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#E6E0E8] flex justify-between text-base font-semibold text-[#35163F]">
                  <span>Total</span>
                  <span>₹{grandTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button
                onClick={() => setCheckoutModal(true)}
                className="w-full py-3.5 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                PROCEED TO CHECKOUT →
              </button>

              <div className="text-center">
                <button
                  onClick={onClose}
                  className="text-xs text-[#716A75] hover:text-[#35163F] underline underline-offset-4 font-sans tracking-wide transition-colors"
                >
                  Continue Shopping
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-[#716A75]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#27764B]" />
                <span>Campaign Demo Store • Safe & Secure Showcase</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Demo Checkout Modal */}
      {checkoutModal && (
        <div className="fixed inset-0 z-60 bg-[#242126]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF8F3] border border-[#E6E0E8] max-w-md w-full p-6 sm:p-8 rounded-sm shadow-2xl relative text-left">
            <button
              onClick={() => setCheckoutModal(false)}
              className="absolute top-4 right-4 text-[#716A75] hover:text-[#35163F] p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-[#F0E9FA] flex items-center justify-center text-[#9B7AE8] mb-4">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-[#35163F] mb-2">
              Campaign Showcase Demo
            </h3>
            <p className="text-sm text-[#716A75] mb-4">
              Thank you for exploring <strong>Girls Who Build the Future</strong>! This is a real interactive frontend demonstration for the brand campaign.
            </p>

            <div className="bg-[#FFFFFF] p-4 rounded-sm border border-[#E6E0E8] mb-6 space-y-2 text-xs text-[#242126]">
              <div className="flex justify-between">
                <span>Items:</span>
                <strong>{totalItems} T-Shirts</strong>
              </div>
              <div className="flex justify-between">
                <span>Order Total:</span>
                <strong>₹{grandTotal.toLocaleString("en-IN")}</strong>
              </div>
              <div className="flex justify-between text-[#27764B]">
                <span>Status:</span>
                <strong>Demo Order Placed Successfully ✓</strong>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setCheckoutModal(false);
                  clearCart();
                  onClose();
                }}
                className="flex-1 py-3 bg-[#35163F] hover:bg-[#51265F] text-[#FAF8F3] text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                Clear Cart & Reset
              </button>
              <button
                onClick={() => setCheckoutModal(false)}
                className="px-4 py-3 border border-[#E6E0E8] hover:bg-[#F0E9FA] text-[#35163F] text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                Keep Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
