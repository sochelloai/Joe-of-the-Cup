"use client";

import { useState } from "react";
import { CartItem } from "./CartDrawer";

interface ProductGridProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

interface ProductInfo {
  id: string;
  name: string;
  price: number;
  format: string;
  roastLevel: number;
  description: string;
  tastingNotes: string[];
  color: string;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  // Local state to keep track of selected grind variant per product
  const [grinds, setGrinds] = useState<Record<string, "Whole Bean" | "Ground">>({
    bag_01: "Whole Bean",
    bag_02: "Whole Bean",
    bag_03: "Whole Bean",
  });

  const products: ProductInfo[] = [
    {
      id: "bag_01",
      name: "Damn Daniel (Dark Roast)",
      price: 29.95,
      format: "12 oz Bag",
      roastLevel: 9,
      description: "Rich, bold, and unapologetic. Formulated for the early clock-in when you need to get the gears moving immediately.",
      tastingNotes: ["Dark Chocolate", "Roasted Almond", "Cocoa"],
      color: "bg-retro-red",
    },
    {
      id: "bag_02",
      name: "Drop Dead Fred (Medium Roast)",
      price: 29.95,
      format: "12 oz Bag",
      roastLevel: 6,
      description: "A balanced roaster classic. Smooth enough for the second break, strong enough to get you through the morning rush.",
      tastingNotes: ["Toasted Caramel", "Subtle Vanilla", "Smooth Finish"],
      color: "bg-retro-yellow",
    },
    {
      id: "bag_03",
      name: "Dapper Dan (Light Roast)",
      price: 29.95,
      format: "12 oz Bag",
      roastLevel: 3,
      description: "Crisp and clean with natural brightness. Perfect for a slow Saturday morning on the porch or a long back road drive.",
      tastingNotes: ["Brown Sugar", "Warm Spice", "Nutty Finish"],
      color: "bg-light-cream",
    },
  ];

  const handleGrindChange = (productId: string, value: "Whole Bean" | "Ground") => {
    setGrinds((prev) => ({ ...prev, [productId]: value }));
  };

  return (
    <section id="products" className="py-20 bg-warm-paper border-b-4 border-coffee-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-coffee-black sm:text-5xl">
            The Fresh Roasts
          </h2>
          <p className="mt-4 text-base md:text-lg text-coffee-black/80 font-bold uppercase tracking-wide">
            Life's too short for bad coffee... and decaf excuses.
          </p>
          <div className="h-1 w-20 bg-retro-red mx-auto mt-4 rounded-full" />
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-light-cream/30 rounded-2xl border-4 border-coffee-black p-5 retro-shadow hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_var(--color-coffee-black)] transition-all duration-200"
            >
              {/* Product Artwork Placeholder */}
              <div className={`h-64 rounded-xl ${product.color} retro-border flex flex-col p-4 text-center justify-between shadow-sm relative overflow-hidden`}>
                {/* Visual Packaging Line Accents */}
                <div className="absolute inset-0 border-8 border-coffee-black/10 pointer-events-none" />
                
                <span className="font-display text-xs font-black uppercase text-light-cream tracking-widest bg-coffee-black/20 px-2 py-0.5 rounded self-center">
                  Premium Blend
                </span>
                
                <div className="my-auto">
                  <h3 className="font-display text-3xl font-black leading-none text-white tracking-tight uppercase drop-shadow-md">
                    {product.name.split(" ")[0]}
                  </h3>
                  <span className="text-xs font-bold text-retro-yellow block uppercase mt-1 tracking-wider">
                    {product.format} • {grinds[product.id]}
                  </span>
                </div>

                {/* Roast Indicator */}
                <div className="bg-coffee-black text-light-cream rounded-lg p-2 flex flex-col items-center z-10 border border-coffee-black">
                  <span className="text-[9px] uppercase font-black tracking-widest text-retro-yellow">
                    Roast Level: {product.roastLevel}/10
                  </span>
                  <div className="flex gap-1 mt-1">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2.5 w-2.5 rounded-full border border-light-cream ${
                          i < product.roastLevel ? "bg-retro-yellow" : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-5 flex-1 flex flex-col">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-display text-lg font-black text-coffee-black leading-tight">
                    {product.name}
                  </h4>
                  <span className="text-xl font-black text-retro-red">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-sm text-coffee-black/80 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Tasting Notes */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.tastingNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="inline-block text-[10px] font-black uppercase tracking-wider bg-warm-paper border border-coffee-black rounded px-2.5 py-0.5 text-coffee-black shadow-[1px_1px_0px_var(--color-coffee-black)]"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Variant Grind Selector */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <button
                    onClick={() => handleGrindChange(product.id, "Whole Bean")}
                    className={`py-2 text-xs font-bold uppercase tracking-wider border-2 border-coffee-black rounded-lg cursor-pointer transition-all ${
                      grinds[product.id] === "Whole Bean"
                        ? "bg-coffee-black text-light-cream"
                        : "bg-warm-paper hover:bg-retro-yellow/20"
                    }`}
                  >
                    Whole Bean
                  </button>
                  <button
                    onClick={() => handleGrindChange(product.id, "Ground")}
                    className={`py-2 text-xs font-bold uppercase tracking-wider border-2 border-coffee-black rounded-lg cursor-pointer transition-all ${
                      grinds[product.id] === "Ground"
                        ? "bg-coffee-black text-light-cream"
                        : "bg-warm-paper hover:bg-retro-yellow/20"
                    }`}
                  >
                    Ground
                  </button>
                </div>

                {/* CTA */}
                <button
                  onClick={() =>
                    onAddToCart({
                      id: `${product.id}_${grinds[product.id].toLowerCase().replace(" ", "_")}`,
                      name: `${product.name.split(" (")[0]} (${grinds[product.id]})`,
                      price: product.price,
                      image: "", // placeholder
                      format: `${product.format} • ${grinds[product.id]}`,
                      roastLevel: product.roastLevel,
                    })
                  }
                  className="w-full flex items-center justify-center rounded-xl bg-retro-red px-4 py-3 text-sm font-bold uppercase tracking-wider text-light-cream shadow-md hover:bg-retro-yellow hover:text-coffee-black retro-border retro-shadow transition-all duration-200 cursor-pointer active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_var(--color-coffee-black)]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="flex flex-col bg-coffee-black text-light-cream rounded-2xl border-4 border-coffee-black p-5 retro-shadow relative overflow-hidden">
            {/* Visual Ribbon Accent */}
            <div className="absolute top-0 right-0 bg-retro-yellow text-coffee-black font-black uppercase text-[10px] py-1 px-8 rotate-45 translate-x-6 translate-y-3 border-y border-coffee-black tracking-widest text-center shadow">
              Soon
            </div>

            {/* Packaging Placeholder */}
            <div className="h-64 rounded-xl bg-roasted-brown border-2 border-dashed border-muted-cream/40 flex flex-col p-4 text-center justify-between shadow-inner">
              <span className="font-display text-xs font-black uppercase text-retro-yellow tracking-widest border border-dashed border-retro-yellow/30 px-2 py-0.5 rounded self-center">
                New Product Development
              </span>

              <div className="my-auto">
                <h3 className="font-display text-3xl font-black leading-none text-muted-cream tracking-tight uppercase">
                  Quick Pods
                </h3>
                <span className="text-xs font-bold text-retro-yellow/70 block uppercase mt-1 tracking-wider">
                  Keurig Compatible Single-Serve
                </span>
              </div>

              <span className="text-[10px] uppercase font-black tracking-widest text-muted-cream/60">
                Arizona Blend • Development Phase
              </span>
            </div>

            {/* Description */}
            <div className="mt-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-display text-lg font-black text-light-cream leading-tight">
                    Single-Serve Pods
                  </h4>
                  <span className="text-xs font-black uppercase tracking-widest bg-retro-yellow/20 px-2 py-1 rounded text-retro-yellow border border-retro-yellow/30">
                    Coming Soon
                  </span>
                </div>
                <p className="text-sm text-light-cream/70 leading-relaxed mb-4">
                  For the break room, the quick workshop pot, or when you just need one bold cup without getting the whole chemex or pot dirty.
                </p>
              </div>

              <div>
                {/* Disabled Notification Form */}
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email for alerts"
                    disabled
                    className="flex-1 rounded-lg border-2 border-muted-cream bg-roasted-brown px-3 py-2 text-xs font-bold text-light-cream placeholder-light-cream/40 focus:outline-none opacity-50"
                  />
                  <button
                    disabled
                    className="rounded-lg bg-muted-cream px-3 py-2 text-xs font-bold uppercase tracking-wider text-coffee-black border-2 border-coffee-black opacity-50 cursor-not-allowed"
                  >
                    Notify
                  </button>
                </div>
                <p className="text-[10px] text-light-cream/40 mt-1.5 italic font-bold">
                  *Pod release specifications subject to final supplier authorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
