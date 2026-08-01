import React from "react";

export default function Footer() {
  return (
    <footer className="bg-coffee-black text-light-cream border-t-4 border-coffee-black py-16 relative overflow-hidden">
      {/* Visual Accent Top Bar */}
      <div className="absolute top-0 inset-x-0 h-2 bg-retro-red" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Slogan Column */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-retro-red text-light-cream font-display font-bold text-xl border-2 border-coffee-black">
                J
              </div>
              <span className="font-display text-xl font-black uppercase text-white tracking-tight">
                Joe of the Cup
              </span>
            </a>
            <p className="text-xs text-light-cream/70 leading-relaxed uppercase font-bold tracking-wider">
              Premium coffee for the everyday American worker. Roasted with bold character and zero preachy lectures.
            </p>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-display text-sm font-black uppercase text-retro-yellow tracking-wider mb-4">
              Diner Office
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-light-cream/80 uppercase tracking-widest">
              <li>📍 Phoenix, Arizona</li>
              <li>✉️ hello@joeofthecup.com</li>
              <li>⏰ Mon - Fri • 5:00 AM - 5:00 PM</li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display text-sm font-black uppercase text-retro-yellow tracking-wider mb-4">
              Toolbox Links
            </h4>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider">
              <li>
                <a href="#story" className="hover:text-retro-red transition-colors duration-200">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-retro-red transition-colors duration-200">
                  Roast Selector
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-retro-red transition-colors duration-200">
                  Drop Joe Mail
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Policy Links Column */}
          <div>
            <h4 className="font-display text-sm font-black uppercase text-retro-yellow tracking-wider mb-4">
              Diner Policies
            </h4>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider">
              <li>
                <a href="#" className="hover:text-retro-red transition-colors duration-200">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-retro-red transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-retro-red transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-retro-red transition-colors duration-200">
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Central Motto Banner */}
        <div className="border-t border-muted-cream/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-light-cream/40 block">
              Primary Motto
            </span>
            <span className="font-display text-xl font-black uppercase tracking-widest text-retro-red block mt-0.5">
              Rise Early. Brew Bold. Prosper Daily.
            </span>
          </div>

          {/* Social Icons Placeholder */}
          <div className="flex gap-4">
            <span className="text-xs font-black uppercase tracking-widest text-light-cream/40 mr-2">
              Follow Joe:
            </span>
            <a href="#" className="hover:text-retro-red text-sm font-bold uppercase tracking-wide">
              [Instagram]
            </a>
            <a href="#" className="hover:text-retro-red text-sm font-bold uppercase tracking-wide">
              [Facebook]
            </a>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-light-cream/30">
          <span>© 2026 Joe of the Cup. Built for the dreamers. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
