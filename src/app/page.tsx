"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import BrandStory from "@/components/BrandStory";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CartDrawer, { CartItem } from "@/components/CartDrawer";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add item to cart and automatically slide open the cart drawer for instant feedback
  const handleAddToCart = (newItem: Omit<CartItem, "quantity">) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...newItem, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-warm-paper">
      {/* Announcement Shipping Banner */}
      <div className="bg-retro-red text-light-cream text-center py-2 px-4 text-xs font-black uppercase tracking-widest border-b-2 border-coffee-black relative z-50">
        📢 FREE SHIPPING ON ORDERS OF 2 OR MORE BAGS • ARIZONA FRESH ROASTED DAILY
      </div>

      {/* Primary Layout */}
      <Header
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="flex-grow">
        <Hero />

        {/* Brand Reassurance Grid (Diner Badge Panel) */}
        <section className="bg-coffee-black text-light-cream py-6 border-b-4 border-coffee-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <span className="text-xl mb-1">🏜️</span>
                <span className="text-xs font-black uppercase tracking-widest text-retro-yellow">
                  Arizona Roasted
                </span>
                <span className="text-[10px] text-light-cream/70 uppercase font-bold tracking-wider mt-0.5">
                  Est. 2026 Phoenix
                </span>
              </div>
              <div className="flex flex-col items-center border-l-2 border-dashed border-muted-cream/20 md:border-l-2">
                <span className="text-xl mb-1">☕</span>
                <span className="text-xs font-black uppercase tracking-widest text-retro-yellow">
                  100% Arabica
                </span>
                <span className="text-[10px] text-light-cream/70 uppercase font-bold tracking-wider mt-0.5">
                  Hand-selected beans
                </span>
              </div>
              <div className="flex flex-col items-center border-l-2 border-dashed border-muted-cream/20 md:border-l-2">
                <span className="text-xl mb-1">📦</span>
                <span className="text-xs font-black uppercase tracking-widest text-retro-yellow">
                  Fresh Delivery
                </span>
                <span className="text-[10px] text-light-cream/70 uppercase font-bold tracking-wider mt-0.5">
                  Fitted in clean bags
                </span>
              </div>
              <div className="flex flex-col items-center border-l-2 border-dashed border-muted-cream/20">
                <span className="text-xl mb-1">⚒️</span>
                <span className="text-xs font-black uppercase tracking-widest text-retro-yellow">
                  No Speeches
                </span>
                <span className="text-[10px] text-light-cream/70 uppercase font-bold tracking-wider mt-0.5">
                  Just great coffee
                </span>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid onAddToCart={handleAddToCart} />
        <BrandStory />
        <ContactForm />
      </main>

      <Footer />

      {/* Stateful E-Commerce Cart slideover */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
