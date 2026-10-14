"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const REVIEWS = [
  {
    id: 1,
    author: "Elena Rostova",
    location: "Stockholm, Sweden",
    product: "hazy-bnuy Heavyweight Studio Hoodie",
    variant: "Bone White / Size L",
    rating: 5,
    date: "October 2026",
    title: "The embroidered bunny with round glasses is so charming.",
    content:
      "The weight is extraordinary. 480 GSM is no joke—the hood actually stays up without folding inwards, and the bone white shade is so warm and sophisticated. Everyone asks about the little bunny wearing round glasses on the chest!",
    verified: true,
  },
  {
    id: 2,
    author: "Marcus Chen",
    location: "Tokyo, Japan",
    product: "hazy-bnuy Reading Club Boxy Tee",
    variant: "Alabaster Bone / Size M",
    rating: 5,
    date: "September 2026",
    title: "Collar that never stretches, perfect boxy drape.",
    content:
      "The hazy-bnuy reading club tee has become my daily uniform. After 12 washes it still retains its precise shape. The raw hem doesn’t curl uncontrollably, and the drop shoulder cut sits naturally.",
    verified: true,
  },
  {
    id: 3,
    author: "Julian Vance",
    location: "London, UK",
    product: "hazy-bnuy Glasses Crest Crewneck",
    variant: "Dusty Lavender / Size XL",
    rating: 5,
    date: "October 2026",
    title: "Subtle muted violet color and adorable mascot patch.",
    content:
      "Most purple clothes are either neon or too loud. hazy-bnuy nailed this muted, dusty tone. Soft interior fleece and the little round-glasses bunny patch is subtle and high-end.",
    verified: true,
  },
  {
    id: 4,
    author: "Sofia Mendez",
    location: "Berlin, Germany",
    product: "Structured Heavy Canvas Merch Tote",
    variant: "Natural Ecru / One Size",
    rating: 5,
    date: "September 2026",
    title: "Fits my 16-inch laptop with room to spare.",
    content:
      "Heavy 24oz duck canvas that genuinely stands upright on its own. The padded internal sleeve keeps my MacBook safe on commutes. The bone aesthetic matches everything.",
    verified: true,
  },
  {
    id: 5,
    author: "Kenji Sato",
    location: "Kyoto, Japan",
    product: "Matte Violet Insulated Thermal Tumbler",
    variant: "Matte Violet Mist",
    rating: 5,
    date: "August 2026",
    title: "Keeps cold water chilled all day long.",
    content:
      "Texture on the powder coat has just the right tactile grip. Sleek laser-engraved typography and zero condensation on my desk.",
    verified: true,
  },
  {
    id: 6,
    author: "Claire Beaumont",
    location: "Paris, France",
    product: "Heavyweight Relaxed Lounge Sweatpants",
    variant: "Bone White / Size S",
    rating: 5,
    date: "October 2026",
    title: "Incredibly cozy without looking sloppy.",
    content:
      "The hidden zippered pockets are brilliant for keys and phone. Pairs seamlessly with the oversized hoodie for a clean monochrome studio look.",
    verified: true,
  },
];

export default function TestimonyPage() {
  const [filter, setFilter] = useState("All");

  const filteredReviews =
    filter === "All"
      ? REVIEWS
      : REVIEWS.filter((r) =>
          r.product.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full bg-accent-purple-mist border border-accent-purple/20 px-3.5 py-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-purple" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-purple font-semibold">
              Community Perspectives
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-foreground">
            Worn worldwide by architects, designers, & creators.
          </h1>

          <p className="text-base text-muted leading-relaxed">
            Unfiltered feedback from our community. Every review is verified through our secure encrypted order database.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="pt-4 flex flex-wrap items-center gap-6 font-mono text-xs">
            <div className="flex items-center space-x-1.5 bg-card border border-border-muted px-4 py-2 rounded-xl">
              <span className="text-accent-purple text-base">★★★★★</span>
              <span className="font-bold text-foreground text-sm">4.95 / 5.0</span>
            </div>
            <span className="text-muted">Based on 350+ verified orders</span>
            <span className="text-muted">•</span>
            <span className="text-accent-purple font-semibold">100% Cotton Authenticity Guarantee</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 pb-6 border-b border-border-muted/60 mb-10 overflow-x-auto scrollbar-none">
          {["All", "Hoodie", "Tee", "Crewneck", "Tote", "Tumbler", "Sweatpants"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all ${
                filter === cat
                  ? "bg-accent-purple text-white shadow-xs font-semibold"
                  : "bg-surface-subtle border border-border-muted text-muted hover:text-foreground"
              }`}
            >
              {cat === "All" ? "All Reviews" : cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-card border border-border-muted/80 shadow-[0_4px_24px_rgb(0,0,0,0.02)] space-y-6 hover:border-accent-purple/30 transition-all"
            >
              <div className="space-y-3">
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="text-accent-purple text-sm tracking-wider">
                    {"★".repeat(review.rating)}
                  </div>
                  {review.verified && (
                    <span className="flex items-center space-x-1 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span>✓</span>
                      <span>Verified Order</span>
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-medium text-foreground leading-snug">
                  &ldquo;{review.title}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  {review.content}
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="pt-4 border-t border-border-muted/60 space-y-1">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-semibold text-foreground">{review.author}</span>
                  <span className="text-muted">{review.location}</span>
                </div>
                <div className="text-[11px] font-mono text-accent-purple line-clamp-1">
                  {review.product}
                </div>
                <div className="text-[10px] font-mono text-muted">
                  {review.variant}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 rounded-3xl bg-surface-subtle border border-border-muted text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
            Join the community of discerning wearers.
          </h2>
          <p className="text-sm text-muted">
            All pieces backed by our 30-day effortless return guarantee and complimentary exchange service.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 rounded-xl bg-accent-purple hover:bg-accent-purple-hover px-8 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-colors"
          >
            <span>Shop New Drop</span>
            <span>→</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
