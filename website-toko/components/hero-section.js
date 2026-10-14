"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-border-muted/60">
      {/* Soft lavender atmospheric ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-accent-purple/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Personality */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Live Mascot Pill */}
            <div className="inline-flex items-center space-x-2.5 rounded-full bg-accent-purple-mist border border-accent-purple/30 px-4 py-1.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-accent-purple animate-ping" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-accent-purple">
                hazy-bnuy official release // capsule 01
              </span>
            </div>

            {/* Typography */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-[1.08]">
                meet hazy-bnuy.
                <br />
                <span className="italic font-light text-accent-purple">
                  cozy clothes & merch.
                </span>
              </h1>
              
              <p className="max-w-xl text-base sm:text-lg text-muted font-normal leading-relaxed">
                A warm bone-white clothing line engineered for quiet thinkers, late-night readers, and coffee sippers. 
                Heavyweight 480 GSM terry cotton stamped with our round-glasses mascot.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center space-x-2.5 rounded-xl bg-accent-purple hover:bg-accent-purple-hover px-7 py-4 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-xs transition-all duration-200 active:scale-95"
              >
                <span>Shop Bnuy Merch</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href="/vision-and-story"
                className="inline-flex items-center rounded-xl bg-card hover:bg-surface-subtle border border-border-muted hover:border-accent-purple/40 px-6 py-4 text-xs font-mono font-semibold uppercase tracking-wider text-foreground transition-all duration-200 shadow-2xs"
              >
                <span>The Story of hazy-bnuy</span>
              </Link>
            </div>

            {/* Feature Indicators */}
            <div className="pt-6 border-t border-border-muted/60 grid grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <span className="block font-bold text-foreground text-sm sm:text-base">480 GSM</span>
                <span className="text-muted">French Terry Fleece</span>
              </div>
              <div>
                <span className="block font-bold text-foreground text-sm sm:text-base">Round Glasses</span>
                <span className="text-muted">Official Mascot</span>
              </div>
              <div>
                <span className="block font-bold text-accent-purple text-sm sm:text-base">Anti-DDoS</span>
                <span className="text-muted">Protected Storefront</span>
              </div>
            </div>

          </div>

          {/* Right Column: Mascot & Lookbook Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden bg-card border border-border-muted/90 shadow-[0_20px_50px_rgba(115,93,138,0.12)] p-6 sm:p-8 flex flex-col items-center justify-between group">
              
              {/* Background ambient pattern */}
              <div className="absolute inset-0 bg-radial from-accent-purple-mist/50 to-transparent pointer-events-none" />

              {/* Mascot Badge Tag */}
              <div className="w-full flex items-center justify-between relative z-10">
                <span className="font-mono text-[11px] font-bold text-accent-purple uppercase tracking-widest bg-accent-purple-mist px-3 py-1 rounded-full border border-accent-purple/20">
                  STUDIO MASCOT
                </span>
                <span className="font-mono text-xs text-muted">
                  Series #001
                </span>
              </div>

              {/* Big Mascot Vector Illustration */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-4 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/mascot.svg"
                  alt="hazy-bnuy wearing round glasses"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Floating Mascot Spotlight Strip */}
              <div className="relative z-10 w-full rounded-2xl bg-surface-subtle/80 backdrop-blur-md p-4 border border-border-muted shadow-xs flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-foreground">
                    hazy-bnuy // The Philosopher
                  </h4>
                  <p className="font-mono text-xs text-muted">
                    Round wire glasses • Soft bone fur
                  </p>
                </div>
                <Link
                  href="/products"
                  className="rounded-xl bg-accent-purple px-3.5 py-2 font-mono text-xs font-semibold text-white hover:bg-accent-purple-hover transition-colors shadow-2xs"
                >
                  View Drops
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
