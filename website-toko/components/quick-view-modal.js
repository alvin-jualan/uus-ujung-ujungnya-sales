"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/cart-context";

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  if (!quickViewProduct) return null;

  const currentSize = selectedSize || quickViewProduct.sizes?.[0] || "One Size";
  const currentColor =
    selectedColor || quickViewProduct.colors?.[0]?.name || "Default";

  const handleAddToCart = () => {
    addToCart(quickViewProduct, currentSize, currentColor);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-card border border-border-muted shadow-2xl p-6 sm:p-8">
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-10 rounded-full p-2 text-muted hover:text-foreground hover:bg-surface-subtle transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Preview */}
            <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-surface-subtle border border-border-muted/80">
              <Image
                src={quickViewProduct.imageUrl}
                alt={quickViewProduct.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {quickViewProduct.isNewDrop && (
                <span className="absolute top-3 left-3 rounded-full bg-accent-purple-mist/90 backdrop-blur-xs border border-accent-purple/20 px-3 py-1 font-mono text-xs font-medium text-accent-purple">
                  NEW DROP
                </span>
              )}
            </div>

            {/* Product Meta & Selectors */}
            <div className="flex flex-col space-y-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  {quickViewProduct.category}
                </span>
                <h2 className="font-serif text-2xl font-medium text-foreground tracking-tight mt-1">
                  {quickViewProduct.title}
                </h2>
                <p className="text-xs text-muted font-mono mt-0.5">
                  {quickViewProduct.subtitle}
                </p>
                <div className="mt-3 flex items-baseline space-x-3">
                  <span className="font-mono text-xl font-bold text-foreground">
                    {quickViewProduct.price}
                  </span>
                  <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                    In Stock ({quickViewProduct.stock} left)
                  </span>
                </div>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Color Selection */}
              {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
                <div className="space-y-2">
                  <label className="block font-mono text-xs font-medium uppercase tracking-wider text-muted">
                    Color: <span className="text-foreground">{currentColor}</span>
                  </label>
                  <div className="flex space-x-2">
                    {quickViewProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          currentColor === c.name
                            ? "ring-2 ring-accent-purple ring-offset-2 scale-110"
                            : "opacity-80 hover:opacity-100"
                        }`}
                        style={{ backgroundColor: c.hex, borderColor: c.border }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {quickViewProduct.sizes && quickViewProduct.sizes.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block font-mono text-xs font-medium uppercase tracking-wider text-muted">
                      Select Size
                    </label>
                    <span className="text-xs font-mono text-accent-purple underline cursor-pointer hover:text-accent-purple-hover">
                      Size Guide
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {quickViewProduct.sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`rounded-lg py-2 font-mono text-xs font-medium transition-all ${
                          currentSize === s
                            ? "bg-accent-purple text-white shadow-xs"
                            : "bg-surface-subtle border border-border-muted text-foreground hover:border-accent-purple/40"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Garment Details Bullet List */}
              {quickViewProduct.details && (
                <div className="pt-3 border-t border-border-muted/50 space-y-1">
                  {quickViewProduct.details.slice(0, 3).map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-muted">
                      <span className="text-accent-purple text-xs">◆</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full rounded-xl bg-accent-purple py-3.5 px-4 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-accent-purple-hover active:scale-[0.98]"
                >
                  Add to Bag • {quickViewProduct.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

