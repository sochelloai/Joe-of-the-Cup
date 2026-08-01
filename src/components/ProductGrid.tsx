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
  image: string;
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
      name: "Drop Dead Fred (Dark Roast)",
      price: 29.95,
      format: "12 oz Bag",
      roastLevel: 9,
      description: "Rich, bold, and unapologetic. Formulated for the early clock-in when you need to get the gears moving immediately.",
      tastingNotes: ["Dark Chocolate", "Roasted Almond", "Cocoa"],
      color: "bg-retro-red",
      image: "/products/drop_dead_fred.png",
    },
    {
      id: "bag_02",
      name: "Damn Daniel (Medium Roast)",
      price: 29.95,
      format: "12 oz Bag",
      roastLevel: 6,
      description: "A balanced roaster classic. Smooth enough for the second break, strong enough to get you through the morning rush.",
      tastingNotes: ["Toasted Caramel", "Subtle Vanilla", "Smooth Finish"],
      color: "bg-retro-yellow",
      image: "/products/damn_daniel.png",
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
      image: "/products/dapper_dan.png",
    },
  ];

  const handleGrindChange = (productId: string, value: "Whole Bean" | "Ground") => {
    setGrinds((prev) => ({ ...prev, [productId]: value }));
  };

  return (
    <section id="products" className="py-24 bg-warm-paper border-b-4 border-coffee-black">
      <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="font-display text-5xl font-black uppercase tracking-tight text-coffee-black sm:text-6xl">
            The Fresh Roasts
          </h2>
          <p className="mt-6 text-lg md:text-xl text-coffee-black/80 font-bold uppercase tracking-wide">
            Life's too short for bad coffee... and decaf excuses.
          </p>
          <div className="h-1.5 w-28 bg-retro-red mx-auto mt-6 rounded-full" />
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-light-cream/30 rounded-2xl border-4 border-coffee-black p-6 retro-shadow hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_var(--color-coffee-black)] transition-all duration-200"
            >
              {/* Product Artwork Container */}
              <div className={`h-80 rounded-xl ${product.color} retro-border flex flex-col p-4 text-center justify-between shadow-sm relative overflow-hidden group/art`}>
                {/* Visual Packaging Line Accents */}
                <div className="absolute inset-0 border-8 border-coffee-black/10 pointer-events-none" />
                
                <span className="font-display text-xs font-black uppercase text-light-cream tracking-widest bg-coffee-black/20 px-2 py-0.5 rounded self-center z-10">
                  Premium Roast
                </span>
                
                <div className="my-auto flex justify-center items-center h-48 z-10 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain drop-shadow-[4px_6px_0px_var(--color-coffee-black)] transform group-hover/art:scale-105 transition-transform duration-200"
                  />
                </div>

                {/* Roast Indicator */}
                <div className="bg-coffee-black text-light-cream rounded-lg p-2 flex flex-col items-center z-10 border border-coffee-black">
                  <span className="text-[10px] uppercase font-black tracking-widest text-retro-yellow">
                    Roast Level: {product.roastLevel}/10
                  </span>
                  <div className="flex gap-1.5 mt-1">
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
              <div className="mt-6 flex-1 flex flex-col">
                <div className="flex justify-between items-baseline mb-3">
                  <h4 className="font-display text-2xl font-black text-coffee-black leading-tight">
                    {product.name}
                  </h4>
                  <span className="text-2xl font-black text-retro-red">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-base text-coffee-black/85 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Tasting Notes */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tastingNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="inline-block text-xs font-black uppercase tracking-wider bg-warm-paper border border-coffee-black rounded px-3 py-1 text-coffee-black shadow-[1.5px_1.5px_0px_var(--color-coffee-black)]"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Variant Grind Selector */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={() => handleGrindChange(product.id, "Whole Bean")}
                    className={`py-2.5 text-sm font-bold uppercase tracking-wider border-2 border-coffee-black rounded-lg cursor-pointer transition-all ${
                      grinds[product.id] === "Whole Bean"
                        ? "bg-coffee-black text-light-cream"
                        : "bg-warm-paper hover:bg-retro-yellow/20"
                    }`}
                  >
                    Whole Bean
                  </button>
                  <button
                    onClick={() => handleGrindChange(product.id, "Ground")}
                    className={`py-2.5 text-sm font-bold uppercase tracking-wider border-2 border-coffee-black rounded-lg cursor-pointer transition-all ${
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
                      image: product.image,
                      format: `${product.format} • ${grinds[product.id]}`,
                      roastLevel: product.roastLevel,
                    })
                  }
                  className="w-full flex items-center justify-center rounded-xl bg-retro-red px-5 py-4 text-base font-bold uppercase tracking-wider text-light-cream shadow-md hover:bg-retro-yellow hover:text-coffee-black retro-border retro-shadow transition-all duration-200 cursor-pointer active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_var(--color-coffee-black)]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
