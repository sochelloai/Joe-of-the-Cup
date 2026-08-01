"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ComingSoonPod from "@/components/ComingSoonPod";
import BrandStory from "@/components/BrandStory";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import VideoLoader from "@/components/VideoLoader";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isVideoActive, setIsVideoActive] = useState(false);

  useEffect(() => {
    // Check if video loader should be displayed
    const hasPlayed = sessionStorage.getItem("joe_intro_played");
    if (!hasPlayed) {
      setIsVideoActive(true);
    }
  }, []);

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
      {/* Page Load Fullscreen Video Overlay */}
      {isVideoActive && (
        <VideoLoader onComplete={() => setIsVideoActive(false)} />
      )}

      {/* Announcement Shipping Banner */}
      <div className="bg-retro-red text-light-cream text-center py-2 px-4 text-xs font-black uppercase tracking-widest border-b-2 border-coffee-black relative z-50">
        📢 FREE SHIPPING ON ORDERS OF 2 OR MORE BAGS • MISSOURI FRESH ROASTED DAILY
      </div>

      {/* Primary Layout */}
      <Header
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="flex-grow">
        <Hero />

        {/* Brand Reassurance Grid (Badge Panel) */}
        <section className="bg-coffee-black text-light-cream py-8 border-b-4 border-coffee-black">
          <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">🪵</span>
                <span className="text-sm font-black uppercase tracking-widest text-retro-yellow">
                  Missouri Roasted
                </span>
                <span className="text-xs text-light-cream/70 uppercase font-bold tracking-wider mt-1">
                  Est. 2026 St. Charles
                </span>
              </div>
              <div className="flex flex-col items-center border-l-2 border-dashed border-muted-cream/20">
                <span className="text-2xl mb-1">☕</span>
                <span className="text-sm font-black uppercase tracking-widest text-retro-yellow">
                  100% Arabica
                </span>
                <span className="text-xs text-light-cream/70 uppercase font-bold tracking-wider mt-1">
                  Hand-selected beans
                </span>
              </div>
              <div className="flex flex-col items-center border-l-2 border-dashed border-muted-cream/20">
                <span className="text-2xl mb-1">📦</span>
                <span className="text-sm font-black uppercase tracking-widest text-retro-yellow">
                  Fresh Delivery
                </span>
                <span className="text-xs text-light-cream/70 uppercase font-bold tracking-wider mt-1">
                  Fitted in clean bags
                </span>
              </div>
              <div className="flex flex-col items-center border-l-2 border-dashed border-muted-cream/20">
                <span className="text-2xl mb-1">⚒️</span>
                <span className="text-sm font-black uppercase tracking-widest text-retro-yellow">
                  No Speeches
                </span>
                <span className="text-xs text-light-cream/70 uppercase font-bold tracking-wider mt-1">
                  Just great coffee
                </span>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid onAddToCart={handleAddToCart} />
        
        <ComingSoonPod />

        <BrandStory />

        {/* Meet the Joes Section (Sporadic Character Image Grid) */}
        <section className="py-24 bg-light-cream/20 border-b-4 border-coffee-black">
          <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-sm font-black uppercase tracking-widest text-retro-red mb-3 block">
                The People Who Show Up
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-coffee-black">
                Meet the Joes
              </h2>
              <p className="mt-4 text-lg text-coffee-black/85 max-w-2xl mx-auto">
                Our coffee is dedicated to the builders, the drivers, the helpers, and the doers. Real people fueling real dreams.
              </p>
              <div className="h-1.5 w-24 bg-retro-red mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Polaroid 1: Farmer */}
              <div className="flex justify-center">
                <div className="bg-light-cream p-4 rounded border-3 border-coffee-black shadow-md rotate-[-2deg] hover:rotate-0 transition-transform duration-300 w-72">
                  <div className="aspect-[4/5] bg-coffee-black/10 border-2 border-coffee-black rounded overflow-hidden">
                    <img
                      src="/characters/05-farmer-man.png"
                      alt="Marcus Vance - Farmer"
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="pt-3 text-center">
                    <span className="font-display text-xl font-black text-coffee-black uppercase block leading-none">
                      Marcus Vance
                    </span>
                    <span className="text-xs font-bold text-retro-red uppercase tracking-wider block mt-1">
                      Farmer • St. Charles, MO
                    </span>
                  </div>
                </div>
              </div>

              {/* Polaroid 2: Electrician */}
              <div className="flex justify-center">
                <div className="bg-light-cream p-4 rounded border-3 border-coffee-black shadow-md rotate-[3deg] hover:rotate-0 transition-transform duration-300 w-72">
                  <div className="aspect-[4/5] bg-coffee-black/10 border-2 border-coffee-black rounded overflow-hidden">
                    <img
                      src="/characters/06-electrician-woman.png"
                      alt="Sarah Jenkins - Electrician"
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="pt-3 text-center">
                    <span className="font-display text-xl font-black text-coffee-black uppercase block leading-none">
                      Sarah Jenkins
                    </span>
                    <span className="text-xs font-bold text-retro-red uppercase tracking-wider block mt-1">
                      Electrician • Local 1
                    </span>
                  </div>
                </div>
              </div>

              {/* Polaroid 3: Delivery Driver */}
              <div className="flex justify-center">
                <div className="bg-light-cream p-4 rounded border-3 border-coffee-black shadow-md rotate-[-1deg] hover:rotate-0 transition-transform duration-300 w-72">
                  <div className="aspect-[4/5] bg-coffee-black/10 border-2 border-coffee-black rounded overflow-hidden">
                    <img
                      src="/characters/07-delivery-driver-man.png"
                      alt="Frank Russo - Delivery Driver"
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="pt-3 text-center">
                    <span className="font-display text-xl font-black text-coffee-black uppercase block leading-none">
                      Frank Russo
                    </span>
                    <span className="text-xs font-bold text-retro-red uppercase tracking-wider block mt-1">
                      Driver • Route 66
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
