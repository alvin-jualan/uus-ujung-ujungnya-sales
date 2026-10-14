"use client";

import Image from "next/image";
import React from "react";
import { useCart } from "@/context/cart-context";

export default function PhotoCard({
  product,
  title,
  price,
  category,
  imageUrl,
  isNewDrop = false,
  tag,
  subtitle,
}) {
  const { addToCart, setQuickViewProduct } = useCart();

  // Normalize whether passed as product object or individual props
  const item = product || {
    id: `prod-${(title || "item").toLowerCase().replace(/\s+/g, "-")}`,
    title: title || "Atelier Product",
    price: price || "$0.00",
    numericPrice: parseFloat(String(price || "0").replace(/[^0-9.]/g, "")) || 0,
    category: category || "Apparel",
    imageUrl: imageUrl || "/products/hoodie-bone.svg",
    isNewDrop: Boolean(isNewDrop),
    tag: tag || (isNewDrop ? "NEW DROP" : null),
    subtitle: subtitle || "Curated Essential",
    stock: 15,
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Bone White", hex: "#F9F6F0", border: "#D8D2C4" }],
    description: "Tailored minimalist silhouette crafted with organic heavyweight fabrics and subtle purple accents.",
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(item);
  };

  const handleCardClick = () => {
    setQuickViewProduct(item);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card/70 backdrop-blur-md border border-border-muted/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_16px_45px_rgb(115,93,138,0.12)] hover:border-accent-purple/40 cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative aspect-3/4 w-full overflow-hidden bg-surface-subtle">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Subtle Glass Badge for New Drops / Tags */}
        {(item.isNewDrop || item.tag) && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-accent-purple-mist/90 backdrop-blur-sm border border-accent-purple/20 px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-accent-purple">
            {item.tag || "NEW DROP"}
          </span>
        )}

        {/* Floating Quick View Hint overlay */}
        <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 px-4">
          <span className="w-full py-2 text-center rounded-xl bg-card/90 backdrop-blur-md text-[11px] font-mono font-medium text-foreground border border-border-muted shadow-sm">
            Quick View Details
          </span>
        </div>
      </div>

      {/* Product Metadata & Actions */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              {item.category}
            </span>
            {item.rating && (
              <span className="flex items-center text-[11px] font-mono text-muted">
                <span className="text-accent-purple mr-1">★</span>
                {item.rating}
              </span>
            )}
          </div>

          <h3 className="font-serif text-base sm:text-lg font-medium text-foreground tracking-tight line-clamp-1 group-hover:text-accent-purple transition-colors">
            {item.title}
          </h3>

          {item.subtitle && (
            <p className="font-mono text-[11px] text-muted line-clamp-1">
              {item.subtitle}
            </p>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between pt-4 border-t border-border-muted/50">
          <span className="font-mono text-sm sm:text-base font-semibold text-foreground">
            {item.price}
          </span>

          <button
            type="button"
            onClick={handleQuickAdd}
            className="rounded-xl bg-accent-purple px-4 py-2 text-xs font-mono font-medium text-white transition-all duration-200 hover:bg-accent-purple-hover active:scale-95 shadow-xs flex items-center space-x-1.5"
            aria-label={`Quick add ${item.title} to bag`}
          >
            <span>+</span>
            <span>Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
}