"use client";

import { useEffect, useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  format: string;
  roastLevel: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      });
      
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Failed to initiate Stripe checkout.");
        setIsCheckingOut(false);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("An error occurred during checkout. Please try again.");
      setIsCheckingOut(false);
    }
  };
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Background backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-coffee-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div
          className={`w-screen max-w-md transform bg-warm-paper border-l-4 border-coffee-black transition-transform duration-300 ease-in-out retro-shadow-lg ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col justify-between overflow-y-scroll py-6 px-4 sm:px-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-coffee-black pb-4">
                <h2
                  className="font-display text-2xl font-black uppercase text-coffee-black"
                  id="slide-over-title"
                >
                  Your Toolbox
                </h2>
                <button
                  onClick={onClose}
                  className="rounded-lg p-1.5 text-coffee-black hover:bg-retro-red hover:text-light-cream transition-colors duration-200 retro-border retro-shadow-sm cursor-pointer active:translate-y-0.5"
                  aria-label="Close panel"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Items List */}
              <div className="mt-8">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 px-4">
                    <div className="h-16 w-16 text-retro-red mb-4 opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-full w-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                    </div>
                    <p className="font-display text-lg font-bold text-coffee-black">
                      Your cup is bone dry.
                    </p>
                    <p className="text-sm text-coffee-black/70 mt-1 max-w-xs">
                      Go find some bold roasts before the foreman notices you're taking a break on an empty cup.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 inline-flex items-center justify-center rounded-lg bg-retro-red px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-light-cream retro-border retro-shadow-sm hover:bg-retro-yellow hover:text-coffee-black transition-all cursor-pointer active:translate-y-0.5"
                    >
                      Fill It Up
                    </button>
                  </div>
                ) : (
                  <ul className="-my-6 divide-y-2 divide-coffee-black">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex py-6">
                        {/* Mock Image Placeholder */}
                        <div className="relative h-24 w-16 flex-shrink-0 items-center justify-center bg-retro-red rounded-lg retro-border overflow-hidden flex flex-col p-1 text-center shadow-sm">
                          <span className="font-display text-[10px] font-black leading-none text-light-cream uppercase">
                            Joe's
                          </span>
                          <div className="my-auto text-[8px] leading-tight text-white font-bold uppercase">
                            {item.name.split(" ")[0]}
                          </div>
                          <span className="mt-auto text-[7px] text-retro-yellow font-black uppercase tracking-widest">
                            ROAST {item.roastLevel}/10
                          </span>
                        </div>

                        {/* Details */}
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-bold text-coffee-black">
                              <h3 className="font-display text-md tracking-tight">
                                {item.name}
                              </h3>
                              <p className="ml-4">${item.price.toFixed(2)}</p>
                            </div>
                            <p className="mt-0.5 text-xs font-semibold text-coffee-black/60 uppercase tracking-wider">
                              {item.format}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            {/* Quantity Selector */}
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() =>
                                  onUpdateQuantity(item.id, item.quantity - 1)
                                }
                                className="h-7 w-7 rounded border border-coffee-black bg-light-cream flex items-center justify-center font-bold text-coffee-black hover:bg-retro-yellow transition-colors duration-200 cursor-pointer active:translate-y-0.5"
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <span className="w-8 text-center font-bold text-coffee-black">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  onUpdateQuantity(item.id, item.quantity + 1)
                                }
                                className="h-7 w-7 rounded border border-coffee-black bg-light-cream flex items-center justify-center font-bold text-coffee-black hover:bg-retro-yellow transition-colors duration-200 cursor-pointer active:translate-y-0.5"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>

                            {/* Remove Trigger */}
                            <div className="flex">
                              <button
                                onClick={() => onRemoveItem(item.id)}
                                className="font-bold text-retro-red hover:text-retro-yellow uppercase text-xs tracking-wider transition-colors duration-200 cursor-pointer"
                              >
                                Trash
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Footer Summary */}
            {cartItems.length > 0 && (
              <div className="border-t-2 border-coffee-black pt-4">
                <div className="flex justify-between font-display text-lg font-black uppercase text-coffee-black">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-xs text-coffee-black/60">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full flex items-center justify-center rounded-lg bg-retro-red px-6 py-3.5 text-base font-bold uppercase tracking-wider text-light-cream shadow-md hover:bg-retro-yellow hover:text-coffee-black retro-border retro-shadow transition-all duration-200 cursor-pointer active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_var(--color-coffee-black)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCheckingOut ? "Connecting to Stripe..." : `Checkout — $${subtotal.toFixed(2)}`}
                  </button>
                </div>
                <div className="mt-4 flex justify-center text-center text-xs text-coffee-black/50 font-bold uppercase tracking-wider">
                  <span>🔒 PCI-Compliant Secure Checkout</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
