"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Toast from "./Toast";
import CartDrawer from "./CartDrawer";
import SearchDrawer from "./SearchDrawer";
import SizeGuideModal from "./SizeGuideModal";
import QuickViewModal from "./QuickViewModal";

const CartContext = createContext(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("gwb_cart_v1");
      if (stored) {
        setCart(JSON.parse(stored));
      } else {
        // Default initial demo state matching the specification mockup:
        // "The Builder Tee (Ivory | M) - ₹799", "The Unstoppable Tee (Deep Plum | L) - ₹899" -> Subtotal ₹1,698
        const initialCart = [
          {
            id: "builder-tee",
            slug: "builder-tee",
            name: "The Builder Tee",
            color: "Ivory",
            size: "M",
            price: 799,
            quantity: 1,
            image: "/images/builder-tee.jpg",
          },
          {
            id: "unstoppable-tee",
            slug: "unstoppable-tee",
            name: "The Unstoppable Tee",
            color: "Deep Plum",
            size: "L",
            price: 899,
            quantity: 1,
            image: "/images/unstoppable-tee.jpg",
          },
        ];
        setCart(initialCart);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("gwb_cart_v1", JSON.stringify(cart));
      } catch {
        // ignore
      }
    }
  }, [cart, mounted]);

  const addToCart = (product, size, qty = 1) => {
    if (!size) {
      showToast("Please select your size to continue.", "error");
      return false;
    }

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += qty;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            slug: product.slug,
            name: product.name,
            color: product.color,
            size: size,
            price: product.price,
            quantity: qty,
            image: product.images[0],
          },
        ];
      }
    });

    showToast(`Added to your bag! ${product.name} (${size})`, "success", {
      name: product.name,
      size,
    });
    return true;
  };

  const updateQuantity = (id, size, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
    showToast("Item removed from your bag.", "info");
  };

  const clearCart = () => {
    setCart([]);
  };

  const showToast = (message, type = "success", meta = null) => {
    setToast({ message, type, meta });
  };

  const hideToast = () => {
    setToast(null);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;
  const grandTotal = subtotal + shipping;

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        subtotal,
        shipping,
        grandTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        isSizeGuideOpen,
        openSizeGuide: () => setIsSizeGuideOpen(true),
        closeSizeGuide: () => setIsSizeGuideOpen(false),
        quickViewProduct,
        openQuickView: (product) => setQuickViewProduct(product),
        closeQuickView: () => setQuickViewProduct(null),
        showToast,
      }}
    >
      {children}
      <Toast toast={toast} onClose={hideToast} onOpenBag={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchDrawer isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          isOpen={!!quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </CartContext.Provider>
  );
}
