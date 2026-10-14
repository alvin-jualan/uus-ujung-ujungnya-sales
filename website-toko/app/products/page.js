"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PhotoCard from "@/components/card";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.numericPrice - b.numericPrice;
      if (sortBy === "price-high") return b.numericPrice - a.numericPrice;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        {/* Page Header */}
        <div className="pb-8 border-b border-border-muted/70 mb-10">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent-purple" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-purple font-semibold">
              The hazy-bnuy Archive
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-foreground">
            Apparel & Mascot Merch
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted max-w-xl">
            Warm bone white silhouettes, 480 GSM terry cotton hoodies, reading club tees, canvas totes, and ceramics starring our round-glasses mascot.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-border-muted/50">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl font-mono text-xs whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-accent-purple text-white shadow-xs font-semibold"
                    : "bg-surface-subtle border border-border-muted text-muted hover:text-foreground hover:border-accent-purple/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search garments & merch..."
                className="w-full sm:w-64 rounded-xl bg-card border border-border-muted px-3.5 py-2 pl-9 text-xs font-mono text-foreground placeholder-muted focus:outline-none focus:border-accent-purple shadow-2xs transition-colors"
              />
              <svg
                className="w-4 h-4 text-muted absolute left-3 top-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-2.5 text-xs text-muted hover:text-foreground"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl bg-card border border-border-muted px-3 py-2 text-xs font-mono text-foreground focus:outline-none focus:border-accent-purple shadow-2xs cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between mb-8 text-xs font-mono text-muted">
          <span>
            Showing <strong className="text-foreground">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? "item" : "items"}
          </span>
          {selectedCategory !== "All" && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-accent-purple hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4 rounded-3xl bg-surface-subtle/40 border border-border-muted/60 p-8">
            <div className="w-16 h-16 rounded-full bg-accent-purple-mist flex items-center justify-center text-accent-purple mx-auto">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground">
              No pieces match your selection
            </h3>
            <p className="text-sm text-muted max-w-sm mx-auto">
              We couldn’t find any items matching &quot;{searchQuery}&quot; in the &quot;{selectedCategory}&quot; category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="rounded-xl bg-accent-purple px-5 py-2.5 text-xs font-mono font-medium text-white hover:bg-accent-purple-hover transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <PhotoCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
