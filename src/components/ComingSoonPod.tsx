"use client";

import { useState } from "react";

export default function ComingSoonPod() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-coffee-black text-light-cream border-b-4 border-coffee-black relative overflow-hidden">
      {/* Decorative sunburst behind the pod image */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-retro-yellow/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Graphic: Packaging Render for Keurig Pod */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group/pod max-w-sm w-full bg-roasted-brown border-4 border-coffee-black p-8 rounded-2xl retro-shadow-lg flex items-center justify-center h-80 sm:h-96">
              {/* Coming Soon Ribbon Badge */}
              <div className="absolute top-0 right-0 bg-retro-yellow text-coffee-black font-black uppercase text-xs py-1 px-8 rotate-45 translate-x-6 translate-y-4 border-y border-coffee-black tracking-widest text-center shadow z-10">
                Soon
              </div>
              
              <img
                src="/products/keurig_pod.png"
                alt="Joe's Single-Serve Pod Packaging"
                className="h-full object-contain drop-shadow-[6px_10px_0px_var(--color-coffee-black)] transform group-hover/pod:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right / Copy & Alert Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-sm font-black uppercase tracking-widest text-retro-yellow mb-3 block">
              New Product Development
            </span>
            
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6">
              Single-Serve Quick Pods
            </h2>
            
            <p className="text-lg text-light-cream/80 leading-relaxed mb-6 max-w-2xl">
              For the break room, the quick workshop cup, or when you just need one bold brew without getting the whole chemex or pot dirty. Same rich Arizona roasted character, packed into Keurig-compatible single-serve pods. 
            </p>
            
            <p className="text-base font-bold text-retro-yellow uppercase tracking-widest mb-8">
              ⏰ Expected Release: Fall 2026
            </p>

            {/* Email Alerts Form */}
            <div className="max-w-md w-full">
              {isSubscribed ? (
                <div className="bg-roasted-brown/50 border-2 border-dashed border-retro-yellow/40 p-5 rounded-xl text-center">
                  <span className="text-2xl mb-2 block">📮</span>
                  <h4 className="text-lg font-black uppercase text-white">Alert Configured!</h4>
                  <p className="text-sm text-light-cream/70 mt-1">
                    You'll be the first to know when the pods land at the warehouse.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email for launch alerts"
                    className="flex-grow rounded-lg border-2 border-muted-cream bg-roasted-brown px-4 py-3 text-sm font-bold text-light-cream placeholder-light-cream/40 focus:outline-none focus:ring-2 focus:ring-retro-yellow focus:border-coffee-black"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-retro-red hover:bg-retro-yellow hover:text-coffee-black text-sm font-bold uppercase tracking-wider text-light-cream border-2 border-coffee-black px-6 py-3 cursor-pointer retro-shadow-sm active:translate-y-0.5 transition-all"
                  >
                    Notify Me
                  </button>
                </form>
              )}
              <p className="text-xs text-light-cream/40 mt-3 italic">
                *Quick Pod specifications subject to final supplier authorization. Keurig compatible.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
