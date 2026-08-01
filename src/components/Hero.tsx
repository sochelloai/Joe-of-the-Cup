"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-warm-paper to-light-cream/40 py-20 lg:py-32 border-b-4 border-coffee-black">
      {/* Decorative Floating Elements (Simulated parallax beans) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
        {/* Bean 1 */}
        <div className="absolute top-12 left-10 animate-bounce text-3xl select-none" style={{ animationDuration: "6s" }}>
          🫘
        </div>
        {/* Bean 2 */}
        <div className="absolute top-1/3 right-12 animate-bounce text-4xl select-none" style={{ animationDuration: "8s" }}>
          🫘
        </div>
        {/* Bean 3 */}
        <div className="absolute bottom-20 left-1/4 animate-bounce text-2xl select-none" style={{ animationDuration: "7s" }}>
          🫘
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Slogan Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-coffee-black bg-retro-yellow/20 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-coffee-black retro-shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-retro-red" />
              Arizona Founded • Est. 2026
            </div>

            {/* Main Headings */}
            <h1 className="font-display text-5xl font-black leading-none text-coffee-black sm:text-6xl lg:text-7xl">
              Joe of <span className="text-retro-red">the Cup</span>
            </h1>

            <p className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-coffee-black max-w-lg">
              Premium coffee for people who show up.
            </p>

            <p className="mt-6 text-base md:text-lg text-coffee-black/85 max-w-md leading-relaxed">
              We reversal-branded the cup of joe. Coffee has borrowed Joe's name for long enough, so we gave Joe the cup, the face, and a little credit. No grand lectures. Just bold roasts that make the morning a little more manageable.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#products"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-retro-red px-8 font-display text-lg font-black uppercase tracking-wider text-light-cream hover:bg-retro-yellow hover:text-coffee-black retro-border retro-shadow transition-all duration-200 cursor-pointer active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_var(--color-coffee-black)]"
              >
                Shop Coffee
              </a>
              <a
                href="#story"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-light-cream px-8 font-display text-lg font-black uppercase tracking-wider text-coffee-black hover:bg-retro-yellow border-2 border-coffee-black retro-shadow-sm transition-all duration-200 cursor-pointer active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_var(--color-coffee-black)]"
              >
                Meet Joe
              </a>
            </div>

            {/* Keepsake line */}
            <div className="mt-8 border-t-2 border-coffee-black/10 pt-4 w-full max-w-md">
              <span className="text-xs font-black uppercase tracking-widest text-coffee-black/50 block">
                The Brand Motto:
              </span>
              <p className="font-display text-sm font-black uppercase italic tracking-wide text-retro-red mt-1">
                "Rise Early. Brew Bold. Prosper Daily."
              </p>
            </div>
          </div>

          {/* Graphic Container (Visual Anchor) */}
          <div className="flex justify-center items-center relative">
            {/* Visual background sunburst glow */}
            <div className="absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-retro-yellow/20 blur-3xl -z-10" />

            {/* Retro Diner Plate Graphic & Coffee Cup */}
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full border-4 border-dashed border-coffee-black/40 p-4 flex items-center justify-center bg-warm-paper/30 retro-shadow">
              <div className="flex flex-col items-center text-center">
                {/* CSS animated steam lines */}
                <div className="flex gap-1.5 mb-2 h-10 items-end justify-center select-none">
                  <div className="w-1 bg-retro-red/60 rounded-full h-8 animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="w-1 bg-retro-red/40 rounded-full h-10 animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <div className="w-1 bg-retro-red/50 rounded-full h-7 animate-pulse" style={{ animationDelay: "0s" }} />
                </div>

                {/* Styled Vector Mug */}
                <div className="h-32 w-40 border-4 border-coffee-black rounded-b-3xl relative bg-retro-red flex items-center justify-center retro-shadow">
                  {/* Mug Handle */}
                  <div className="absolute left-full top-6 h-16 w-8 border-4 border-l-0 border-coffee-black rounded-r-2xl bg-warm-paper -ml-1" />
                  
                  {/* Logo cartoon face badge representation */}
                  <div className="h-16 w-16 rounded-full border-2 border-coffee-black bg-light-cream flex items-center justify-center font-display font-black text-coffee-black text-2xl">
                    ☕️
                  </div>
                </div>

                <div className="mt-6 font-display font-black uppercase tracking-widest text-coffee-black text-sm">
                  Cup of Joe • Reimagined
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
