"use client";

import React from "react";
import { CartProvider } from "@/context/cart-context";
import CartDrawer from "@/components/cart-drawer";
import QuickViewModal from "@/components/quick-view-modal";
import Toast from "@/components/toast";

export default function Providers({ children }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
      <QuickViewModal />
      <Toast />
    </CartProvider>
  );
}

