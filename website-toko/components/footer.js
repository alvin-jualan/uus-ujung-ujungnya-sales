"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [honeypot, setHoneypot] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (honeypot) return;

    if (!email || !email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Welcome to the hazy-bnuy reading club! You'll get first access to Drop 02.");
    setEmail("");
  };

  return (
    <footer className="w-full bg-card text-foreground pt-16 pb-12 border-t border-border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-border-muted/70">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-9 h-9 rounded-full bg-accent-purple-mist p-1 border border-accent-purple/30">
                <Image
                  src="/mascot-icon.svg"
                  alt="hazy-bnuy mascot"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="font-serif text-3xl font-semibold tracking-tight text-foreground">
                  hazy-bnuy
                </span>
                <span className="font-mono text-xs tracking-widest text-accent-purple uppercase font-bold">
                  STUDIO
                </span>
              </div>
            </div>
            
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Quiet streetwear, oversized cotton fleece, and studio merchandise designed in warm bone white with gentle lavender accents. Home of the studious little bunny wearing round glasses.
            </p>
            
            <div className="flex items-center space-x-2.5 pt-2 text-xs font-mono text-muted">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>DDoS Shield Active • 100% Organic Cotton</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-surface-subtle/80 border border-border-muted rounded-3xl p-6 sm:p-8 shadow-2xs">
              <span className="font-mono text-xs uppercase tracking-wider text-accent-purple font-semibold">
                Bnuy Inner Circle
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mt-1 mb-2">
                Join the hazy-bnuy Club
              </h3>
              <p className="text-xs text-muted mb-5">
                Subscribers receive secret drop notifications and exclusive mascot stickers with every release.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-2">
                {/* Honeypot field (hidden from real users, traps bots) */}
                <input
                  type="text"
                  name="user_verification_token"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                />

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    maxLength={100}
                    className="flex-1 rounded-xl bg-card border border-border-muted px-4 py-3 text-xs font-mono text-foreground placeholder-muted focus:outline-none focus:border-accent-purple transition-colors shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-accent-purple hover:bg-accent-purple-hover px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white transition-colors active:scale-95 shadow-xs"
                  >
                    Join Club
                  </button>
                </div>

                {status && (
                  <p className="text-xs font-mono text-accent-purple pt-2 font-medium">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-border-muted/70 text-xs">
          <div>
            <h4 className="font-mono font-semibold uppercase tracking-wider text-foreground mb-4">
              Collection
            </h4>
            <ul className="space-y-2.5 text-muted font-mono">
              <li>
                <Link href="/products" className="hover:text-accent-purple transition-colors">
                  All Clothes & Merch
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent-purple transition-colors">
                  hazy-bnuy Hoodies
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent-purple transition-colors">
                  Reading Club Boxy Tees
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent-purple transition-colors">
                  Canvas Duck Totes
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent-purple transition-colors">
                  Studio Drinkware & Ceramics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-semibold uppercase tracking-wider text-foreground mb-4">
              The Mascot & Story
            </h4>
            <ul className="space-y-2.5 text-muted font-mono">
              <li>
                <Link href="/vision-and-story" className="hover:text-accent-purple transition-colors">
                  Meet hazy-bnuy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-purple transition-colors">
                  Why the Round Glasses?
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-purple transition-colors">
                  Bone White Philosophy
                </Link>
              </li>
              <li>
                <Link href="/testimony" className="hover:text-accent-purple transition-colors">
                  Community Lookbook
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-semibold uppercase tracking-wider text-foreground mb-4">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-muted font-mono">
              <li>
                <Link href="/contacts" className="hover:text-accent-purple transition-colors">
                  Contact hazy-bnuy
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-accent-purple transition-colors">
                  Shipping & Tracking
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-accent-purple transition-colors">
                  30-Day Free Returns
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-accent-purple transition-colors">
                  Washing & Care Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-semibold uppercase tracking-wider text-foreground mb-4">
              Security Guarantee
            </h4>
            <ul className="space-y-2.5 text-muted font-mono">
              <li className="flex items-center space-x-1.5 text-accent-purple">
                <span>✓</span>
                <span>Layer 7 Anti-DDoS Shield</span>
              </li>
              <li className="flex items-center space-x-1.5 text-accent-purple">
                <span>✓</span>
                <span>256-Bit SSL Encryption</span>
              </li>
              <li className="flex items-center space-x-1.5 text-accent-purple">
                <span>✓</span>
                <span>Zero Tracking Cookies</span>
              </li>
              <li className="flex items-center space-x-1.5 text-accent-purple">
                <span>✓</span>
                <span>Bot-Protected Checkout</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-muted space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} HAZY-BNUY STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-foreground transition-colors cursor-pointer">
              Privacy Protocol
            </span>
            <span className="hover:text-foreground transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="text-accent-purple font-medium">
              Pure Bone White Edition
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
