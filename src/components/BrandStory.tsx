import React from "react";

export default function BrandStory() {
  return (
    <section id="story" className="py-20 bg-warm-paper border-b-4 border-coffee-black relative overflow-hidden">
      {/* Background Dots Texture */}
      <div className="absolute inset-0 diner-menu-dots opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Styled Diner chalkboard sign / Menu board (5 cols) */}
          <div className="lg:col-span-5 bg-coffee-black text-light-cream rounded-2xl p-6 md:p-8 retro-border retro-shadow-lg flex flex-col justify-between min-h-[500px]">
            <div>
              {/* Diner Header */}
              <div className="text-center border-b border-dashed border-muted-cream/40 pb-4 mb-6">
                <span className="font-display text-xs font-black uppercase tracking-widest text-retro-yellow">
                  Joe's Diner Board
                </span>
                <h3 className="font-display text-2xl font-black uppercase text-white mt-1">
                  Today's Specials
                </h3>
              </div>

              {/* Board List */}
              <ul className="space-y-6">
                <li className="flex justify-between items-baseline border-b border-dashed border-muted-cream/20 pb-2">
                  <span className="font-display text-sm font-bold uppercase tracking-wider">
                    01. Hard Work
                  </span>
                  <span className="text-xs font-bold text-retro-yellow">ALWAYS ON</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-dashed border-muted-cream/20 pb-2">
                  <span className="font-display text-sm font-bold uppercase tracking-wider">
                    02. Simple Pleasures
                  </span>
                  <span className="text-xs font-bold text-retro-yellow">HOT & FRESH</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-dashed border-muted-cream/20 pb-2">
                  <span className="font-display text-sm font-bold uppercase tracking-wider">
                    03. Absolute Integrity
                  </span>
                  <span className="text-xs font-bold text-retro-yellow">100% PURE</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-dashed border-muted-cream/20 pb-2">
                  <span className="font-display text-sm font-bold uppercase tracking-wider">
                    04. No Decaf Excuses
                  </span>
                  <span className="text-xs font-bold text-retro-yellow">BREW BOLD</span>
                </li>
              </ul>
            </div>

            {/* Chalkboard Keepsake */}
            <div className="mt-8 border-t-2 border-dashed border-muted-cream/40 pt-6 text-center">
              <span className="font-display text-xs font-black tracking-widest uppercase text-retro-yellow block mb-2">
                Brand Memento
              </span>
              <p className="font-display text-md font-bold uppercase tracking-wide text-white leading-snug">
                "The cup doesn't create the dream. It fuels the dreamer."
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Brand Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Slogan */}
            <span className="text-xs font-black uppercase tracking-widest text-retro-red mb-2 block">
              Behind the Brew
            </span>
            
            <h2 className="font-display text-4xl font-black uppercase text-coffee-black sm:text-5xl mb-6">
              What if Joe finally got his own cup?
            </h2>

            <div className="space-y-6 text-base text-coffee-black/90 leading-relaxed">
              <p>
                For generations, hard-working Americans have started their days by asking for a simple <strong>"cup of joe."</strong> But who actually is Joe? 
              </p>
              <p>
                Joe is the tradesperson waking up at 4:30 AM to prep the site. Joe is the nurse finishing a grueling night shift, and the office worker loading the pot before the first meeting starts. Joe represents the everyday person showing up, putting in an honest effort, and appreciating a good cup without a lecture about it.
              </p>
              <p>
                So, we reversed the name. We gave Joe the cup, the face, and a little credit.
              </p>
              <p>
                Founded in <strong>Arizona in 2026</strong>, Joe of the Cup was built on a very simple premise: hardworking people deserve genuinely excellent coffee without the luxury jargon or fancy price tags. We roast bold, smooth, and balanced beans for people who value pride in useful work.
              </p>
              <p className="font-bold text-coffee-black border-l-4 border-retro-red pl-4 italic">
                Success is not brewed overnight. Most of the time it looks ordinary: one call, one delivery, one repaired hinge, one finished page, one more try. We don't sell you motivation. You already brought it with you.
              </p>
            </div>

            {/* Sign-off Quote */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-retro-yellow text-coffee-black font-display font-black text-lg border-2 border-coffee-black">
                ☕️
              </div>
              <div>
                <span className="font-display text-sm font-black uppercase tracking-wider text-coffee-black block">
                  Joe of the Cup
                </span>
                <span className="text-xs font-semibold text-coffee-black/60 uppercase tracking-widest">
                  Rise Early. Brew Bold. Prosper Daily.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
