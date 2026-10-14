"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { STORE_POLICIES } from "@/data/products";

export default function CartDrawer() {
  const {
    isOpen,
    setIsOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    freeShippingProgress,
    amountNeededForFreeShipping,
    clearCart,
  } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  const shippingCost = subtotal >= STORE_POLICIES.freeShippingThreshold || cartItems.length === 0 ? 0 : 12;
  const estimatedTax = subtotal > 0 ? Math.round(subtotal * 0.08 * 100) / 100 : 0;
  const grandTotal = subtotal + shippingCost + estimatedTax;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-card border-l border-border-muted shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-border-muted/70 bg-card/80 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-serif text-xl font-medium tracking-tight text-foreground">
                  Your Bag
                </span>
                <span className="rounded-full bg-accent-purple-mist px-2.5 py-0.5 font-mono text-xs font-semibold text-accent-purple">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-muted hover:text-foreground hover:bg-surface-subtle transition-colors"
                aria-label="Close cart"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="mt-4 pt-3 border-t border-border-muted/50">
              <div className="flex items-center justify-between text-xs font-mono text-muted mb-1.5">
                {amountNeededForFreeShipping > 0 ? (
                  <span>
                    Add <strong className="text-foreground">${amountNeededForFreeShipping.toFixed(2)}</strong> for Free Worldwide Delivery
                  </span>
                ) : (
                  <span className="text-accent-purple font-semibold flex items-center gap-1">
                    <span>✓</span> Complimentary Express Shipping Unlocked
                  </span>
                )}
                <span>{freeShippingProgress}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-surface-subtle overflow-hidden">
                <div
                  className="h-full bg-accent-purple transition-all duration-500 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent-purple-mist flex items-center justify-center text-accent-purple">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-medium text-foreground">Your bag is empty</h3>
                  <p className="text-sm text-muted max-w-xs">
                    Explore our latest hazy-bnuy drop and mascot merchandise crafted with fine organic fibers.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 inline-flex items-center rounded-xl bg-accent-purple px-5 py-2.5 text-xs font-mono font-medium text-white shadow-xs transition-colors hover:bg-accent-purple-hover"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="flex space-x-4 p-3 rounded-xl bg-surface-subtle/50 border border-border-muted/60 transition-colors hover:border-border-muted"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-background shrink-0 border border-border-muted/60">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-medium text-foreground leading-tight line-clamp-1">
                          {item.title}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.size, item.color)}
                          className="text-muted hover:text-red-600 transition-colors"
                          title="Remove item"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-1 text-xs font-mono text-muted">
                        <span>Size: {item.size}</span>
                        <span>•</span>
                        <span>{item.color}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-border-muted/40">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-border-muted rounded-md bg-card">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, item.color, -1)}
                          className="px-2 py-0.5 text-xs text-muted hover:text-foreground transition-colors"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2 font-mono text-xs font-medium text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, item.color, 1)}
                          className="px-2 py-0.5 text-xs text-muted hover:text-foreground transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-mono text-sm font-semibold text-foreground">
                        ${(item.numericPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-border-muted bg-card/90 backdrop-blur-md space-y-4">
              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-muted">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Standard Shipping</span>
                  <span>{shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Estimated Sales Tax</span>
                  <span>${estimatedTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-foreground pt-2 border-t border-border-muted/60">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={() => {
                  alert("Simulated Secure Checkout. Integrating with Stripe / Lemonsqueezy or Shopify headless.");
                }}
                className="w-full flex items-center justify-center space-x-2 rounded-xl bg-accent-purple py-3.5 px-4 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-accent-purple-hover active:scale-[0.98]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Proceed to Secure Checkout</span>
              </button>

              {/* Security Strip */}
              <div className="flex items-center justify-center space-x-3 pt-1 text-[11px] font-mono text-muted">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  256-Bit SSL
                </span>
                <span>•</span>
                <span>DDoS Shield Protected</span>
                <span>•</span>
                <span>30-Day Returns</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

