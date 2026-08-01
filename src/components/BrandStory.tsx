import React from "react";

export default function BrandStory() {
  return (
    <section id="story" className="py-24 bg-warm-paper border-b-4 border-coffee-black relative overflow-hidden">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 retro-menu-dots opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Polaroid-style Character Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-light-cream/90 p-5 rounded-lg border-4 border-coffee-black retro-shadow-lg rotate-[-2deg] hover:rotate-[0deg] transition-transform duration-300 max-w-sm w-full">
              <div className="aspect-[2/3] bg-coffee-black/10 rounded border-2 border-coffee-black overflow-hidden relative">
                <img
                  src="/characters/01-construction-carpenter-woman.png"
                  alt="Daniela Miller - Carpenter"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="pt-4 pb-2 text-center">
                <span className="font-display text-2xl font-black text-coffee-black block uppercase tracking-tight">
                  Daniela Miller
                </span>
                <span className="text-sm font-bold text-retro-red uppercase tracking-wider block mt-1">
                  Carpenter • St. Charles, MO
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Brand Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Slogan */}
            <span className="text-sm font-black uppercase tracking-widest text-retro-red mb-3 block">
              Behind the Brew
            </span>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-coffee-black mb-8 leading-tight">
              What if Joe finally got his own cup?
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-coffee-black/90 leading-relaxed">
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
                Founded in <strong>St. Charles, Missouri in 2026</strong>, Joe of the Cup was built on a very simple premise: hardworking people deserve genuinely excellent coffee without the luxury jargon or fancy price tags. We roast bold, smooth, and balanced beans for people who value pride in useful work.
              </p>
              <p className="font-bold text-coffee-black border-l-4 border-retro-red pl-5 italic text-lg sm:text-xl leading-relaxed">
                Success is not brewed overnight. Most of the time it looks ordinary: one call, one delivery, one repaired hinge, one finished page, one more try. We don't sell you motivation. You already brought it with you.
              </p>
            </div>

            {/* Sign-off Quote */}
            <div className="mt-10 flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-retro-yellow text-coffee-black font-display font-black text-xl border-3 border-coffee-black">
                ☕️
              </div>
              <div>
                <span className="font-display text-base font-black uppercase tracking-wider text-coffee-black block">
                  Joe of the Cup
                </span>
                <span className="text-sm font-semibold text-coffee-black/60 uppercase tracking-widest block mt-0.5">
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
