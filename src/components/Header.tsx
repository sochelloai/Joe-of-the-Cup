"use client";

import { useEffect, useState } from "react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-warm-paper/95 backdrop-blur-md border-b-2 border-coffee-black py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1350px] items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/brand/logo.png"
            alt="Joe of the Cup logo"
            className="h-12 object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <span className="font-display text-2xl font-bold tracking-tight text-coffee-black">
            Joe of <span className="text-retro-red">the Cup</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#story"
            className="text-base font-bold uppercase tracking-wider text-coffee-black hover:text-retro-red transition-colors duration-200"
          >
            Our Story
          </a>
          <a
            href="#products"
            className="text-base font-bold uppercase tracking-wider text-coffee-black hover:text-retro-red transition-colors duration-200"
          >
            Shop Coffee
          </a>
          <a
            href="#contact"
            className="text-base font-bold uppercase tracking-wider text-coffee-black hover:text-retro-red transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative flex h-12 items-center justify-center rounded-lg bg-light-cream px-5 font-bold text-coffee-black hover:bg-retro-yellow transition-colors duration-200 retro-border retro-shadow-sm cursor-pointer active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_var(--color-coffee-black)]"
            aria-label="Open Cart"
          >
            <span className="text-base uppercase tracking-wide mr-2">Cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-retro-red text-[10px] font-black text-white ring-2 ring-coffee-black animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
