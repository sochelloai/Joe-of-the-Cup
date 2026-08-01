"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-warm-paper to-light-cream/40 py-24 lg:py-36 border-b-4 border-coffee-black">
      {/* Decorative Floating Elements (Simulated parallax beans) */}
      <div className="absolute inset-0 pointer-events-none opacity-25 select-none z-10">
        {/* Bean 1 */}
        <div className="absolute top-12 left-10 animate-bounce text-4xl select-none" style={{ animationDuration: "6s" }}>
          🫘
        </div>
        {/* Bean 2 */}
        <div className="absolute top-1/3 right-12 animate-bounce text-5xl select-none" style={{ animationDuration: "8s" }}>
          🫘
        </div>
        {/* Bean 3 */}
        <div className="absolute bottom-20 left-1/4 animate-bounce text-3xl select-none" style={{ animationDuration: "7s" }}>
          🫘
        </div>
      </div>

      <div className="mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-16 relative z-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7">
            {/* Slogan Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-coffee-black bg-retro-yellow/20 px-5 py-2 text-sm font-black uppercase tracking-wider text-coffee-black retro-shadow-sm mb-8">
              <span className="flex h-2.5 w-2.5 rounded-full bg-retro-red" />
              St. Charles, Missouri • Est. 2026
            </div>

            {/* Main Headings */}
            <h1 className="font-display text-6xl font-black leading-none text-coffee-black sm:text-7xl lg:text-8xl">
              Joe of <span className="text-retro-red">the Cup</span>
            </h1>

            <p className="mt-6 font-display text-3xl font-bold uppercase tracking-tight text-coffee-black max-w-2xl">
              Premium coffee for people who show up.
            </p>

            <p className="mt-8 text-lg md:text-xl text-coffee-black/85 max-w-xl leading-relaxed">
              We reversal-branded the cup of joe. Coffee has borrowed Joe's name for long enough, so we gave Joe the cup, the face, and a little credit. No grand lectures. Just bold roasts that make the morning a little more manageable.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a
                href="#products"
                className="inline-flex h-16 items-center justify-center rounded-xl bg-retro-red px-10 font-display text-xl font-black uppercase tracking-wider text-light-cream hover:bg-retro-yellow hover:text-coffee-black retro-border retro-shadow transition-all duration-200 cursor-pointer active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_var(--color-coffee-black)]"
              >
                Shop Coffee
              </a>
              <a
                href="#story"
                className="inline-flex h-16 items-center justify-center rounded-xl bg-light-cream px-10 font-display text-xl font-black uppercase tracking-wider text-coffee-black hover:bg-retro-yellow border-2 border-coffee-black retro-shadow-sm transition-all duration-200 cursor-pointer active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_var(--color-coffee-black)]"
              >
                Meet Joe
              </a>
            </div>

            {/* Keepsake line */}
            <div className="mt-10 border-t-2 border-coffee-black/10 pt-6 w-full max-w-xl">
              <span className="text-sm font-black uppercase tracking-widest text-coffee-black/50 block">
                The Brand Motto:
              </span>
              <p className="font-display text-base sm:text-lg font-black uppercase italic tracking-wide text-retro-red mt-2">
                "Rise Early. Brew Bold. Prosper Daily."
              </p>
            </div>
          </div>

          {/* Graphic Container (Visual Anchor: Overlapping Polaroids of workers) */}
          <div className="flex justify-center items-center relative lg:col-span-5 h-[400px] sm:h-[450px]">
            {/* Visual background sunburst glow */}
            <div className="absolute h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-retro-yellow/20 blur-3xl -z-10" />

            <div className="relative w-full max-w-sm h-full flex items-center justify-center">
              
              {/* Polaroid 1: Auto Mechanic Woman (Back Left) */}
              <div className="absolute left-4 top-10 bg-light-cream p-3 rounded border-3 border-coffee-black shadow-md rotate-[-6deg] w-48 sm:w-56 hover:rotate-[0deg] hover:z-30 transition-all duration-300 z-10">
                <div className="aspect-[2/3] bg-coffee-black/15 border-2 border-coffee-black rounded overflow-hidden">
                  <img
                    src="/characters/03-auto-mechanic-woman.png"
                    alt="Auto Mechanic Woman"
                    className="w-full h-full object-cover filter sepia-[0.2]"
                  />
                </div>
                <div className="pt-2 text-center text-xs font-black text-coffee-black uppercase tracking-tight">
                  Auto Mechanic • St. Charles
                </div>
              </div>

              {/* Polaroid 2: Registered Nurse Man (Front Right) */}
              <div className="absolute right-4 bottom-10 bg-light-cream p-3 rounded border-3 border-coffee-black shadow-lg rotate-[8deg] w-48 sm:w-56 hover:rotate-[0deg] hover:z-30 transition-all duration-300 z-20">
                <div className="aspect-[2/3] bg-coffee-black/15 border-2 border-coffee-black rounded overflow-hidden">
                  <img
                    src="/characters/02-registered-nurse-man.png"
                    alt="Registered Nurse Man"
                    className="w-full h-full object-cover filter sepia-[0.2]"
                  />
                </div>
                <div className="pt-2 text-center text-xs font-black text-coffee-black uppercase tracking-tight">
                  Registered Nurse • Night Shift
                </div>
              </div>

              {/* Floating Coffee Cup Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-retro-red text-light-cream h-20 w-20 rounded-full border-4 border-coffee-black flex items-center justify-center text-3xl shadow-xl z-25 animate-pulse select-none">
                ☕️
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
