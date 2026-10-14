"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cart-context";

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Collection", href: "/products" },
    { label: "Meet the Bnuy", href: "/vision-and-story" },
    { label: "About Studio", href: "/about" },
    { label: "Community", href: "/testimony" },
    { label: "Contact", href: "/contacts" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Ticker — Crisp Bone White & Lavender Accent (No Black!) */}
      <div className="bg-accent-purple-mist/70 text-foreground px-4 py-2 text-[11px] font-mono tracking-wider text-center flex items-center justify-center space-x-3 border-b border-border-muted/70 backdrop-blur-xs">
        <span className="flex items-center gap-1.5 font-medium text-accent-purple">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
          <span>FREE SHIPPING OVER $100</span>
        </span>
        <span className="text-border-muted">•</span>
        <span className="hidden sm:inline text-muted font-normal">
          OFFICIAL HAZY-BNUY MASCOT MERCH & APPAREL
        </span>
      </div>

      {/* Main White / Bone Navbar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-border-muted shadow-2xs py-3"
            : "bg-background/80 backdrop-blur-sm border-border-muted/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-foreground rounded-xl hover:bg-surface-subtle"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Brand Logo with Mascot */}
            <div className="flex items-center">
              <Link href="/" className="group flex items-center space-x-2.5">
                <div className="relative w-8 h-8 rounded-full bg-accent-purple-mist p-0.5 border border-accent-purple/30 group-hover:scale-110 transition-transform shadow-2xs">
                  <Image
                    src="/mascot-icon.svg"
                    alt="hazy-bnuy mascot"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-purple">
                    hazy-bnuy
                  </span>
                  <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-widest text-accent-purple font-bold bg-accent-purple-mist px-2 py-0.5 rounded-full border border-accent-purple/20">
                    STUDIO
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-mono text-xs uppercase tracking-wider transition-all duration-200 relative py-1 ${
                      isActive
                        ? "text-accent-purple font-semibold"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-purple rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              <Link
                href="/products"
                className="hidden sm:flex items-center space-x-1.5 text-xs font-mono text-muted hover:text-foreground p-2 rounded-xl hover:bg-surface-subtle transition-colors"
                title="Search collection"
              >
                <svg className="w-4 h-4 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden lg:inline">Search</span>
              </Link>

              {/* Shopping Bag Button */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative flex items-center space-x-2 rounded-xl bg-card border border-border-muted px-3.5 py-2 text-foreground transition-all duration-200 hover:border-accent-purple/40 hover:bg-surface-subtle active:scale-95 shadow-2xs"
                aria-label="Open shopping bag"
              >
                <svg className="w-4 h-4 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="font-mono text-xs font-medium">Bag</span>
                <span className="rounded-full bg-accent-purple px-1.5 py-0.2 font-mono text-[10px] font-bold text-white min-w-4 text-center">
                  {totalItems}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Drawer Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-border-muted/60 pb-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-xl font-mono text-xs uppercase tracking-wider ${
                    pathname === link.href
                      ? "bg-accent-purple-mist text-accent-purple font-semibold"
                      : "text-foreground hover:bg-surface-subtle"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
