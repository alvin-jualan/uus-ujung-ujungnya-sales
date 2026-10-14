"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { STORE_POLICIES } from "@/data/products";

const CartContext = createContext(null);

function getInitialCart() {
  if (typeof window === "undefined") return [];
  try {
    const savedCart = localStorage.getItem("hazy_bnuy_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getInitialCart);
  const [isOpen, setIsOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Synchronize cart changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("hazy_bnuy_cart", JSON.stringify(cartItems));
    } catch (e) {
      console.warn("Could not save cart to localStorage", e);
    }
  }, [cartItems]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3200);
  };

  const addToCart = (product, selectedSize = null, selectedColor = null) => {
    const size = selectedSize || (product.sizes && product.sizes[0]) || "One Size";
    const color = selectedColor || (product.colors && product.colors[0]?.name) || "Default";

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.size === size && item.color === color
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            numericPrice: product.numericPrice,
            imageUrl: product.imageUrl,
            category: product.category,
            size,
            color,
            quantity: 1,
          },
        ];
      }
    });

    showToast(`Added "${product.title}" (${size}) to your bag`);
    setIsOpen(true);
  };

  const removeFromCart = (id, size, color) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  const updateQuantity = (id, size, color, delta) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === id && item.size === size && item.color === color) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.numericPrice * item.quantity,
    0
  );

  const freeShippingThreshold = STORE_POLICIES.freeShippingThreshold;
  const freeShippingProgress = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );
  const amountNeededForFreeShipping = Math.max(
    0,
    freeShippingThreshold - subtotal
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isOpen,
        setIsOpen,
        quickViewProduct,
        setQuickViewProduct,
        toastMessage,
        setToastMessage,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        freeShippingProgress,
        amountNeededForFreeShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

