"use client";

import React from "react";
import { useCart } from "@/context/cart-context";

export default function Toast() {
  const { toastMessage, setToastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 rounded-2xl bg-card/95 border border-accent-purple/30 shadow-2xl px-5 py-3.5 backdrop-blur-md transition-all animate-bounce-short">
      <div className="w-2.5 h-2.5 rounded-full bg-accent-purple shrink-0 animate-pulse" />
      <span className="font-mono text-xs font-medium text-foreground tracking-tight">
        {toastMessage}
      </span>
      <button
        type="button"
        onClick={() => setToastMessage(null)}
        className="text-muted hover:text-foreground text-xs ml-2 p-1"
      >
        ✕
      </button>
    </div>
  );
}

