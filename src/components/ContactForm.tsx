"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill out all fields. Joe likes complete messages.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-warm-paper/50 border-b-4 border-coffee-black relative">
      <div className="mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-16">
        
        {/* Card Container */}
        <div className="max-w-2xl mx-auto bg-light-cream/30 rounded-2xl border-4 border-coffee-black p-8 sm:p-12 retro-shadow-lg">
          
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-sm font-black uppercase tracking-widest text-retro-red">
              Joe's Mailbox
            </span>
            <h2 className="font-display text-4xl font-black uppercase text-coffee-black mt-2">
              Speak to Joe
            </h2>
            <p className="text-sm font-bold text-coffee-black/60 uppercase tracking-wider mt-2">
              Consult with Joe when the day gets strange.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="h-16 w-16 text-retro-yellow mx-auto mb-4 animate-bounce">
                📮
              </div>
              <h3 className="font-display text-2xl font-black text-coffee-black uppercase">
                Message Dropped!
              </h3>
              <p className="text-base text-coffee-black/80 mt-3">
                We've received your mail. We read everything. We'll get back to you during our next coffee break.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-coffee-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-light-cream hover:bg-retro-red hover:text-light-cream transition-colors duration-200 cursor-pointer border-2 border-coffee-black"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-black uppercase tracking-wider text-coffee-black mb-2"
                >
                  First & Last Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Daniel Miller"
                  className="w-full rounded-lg border-2 border-coffee-black bg-warm-paper px-4 py-4 text-base font-bold text-coffee-black placeholder-coffee-black/40 focus:outline-none focus:ring-2 focus:ring-retro-yellow focus:border-coffee-black"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-black uppercase tracking-wider text-coffee-black mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. daniel@domain.com"
                  className="w-full rounded-lg border-2 border-coffee-black bg-warm-paper px-4 py-4 text-base font-bold text-coffee-black placeholder-coffee-black/40 focus:outline-none focus:ring-2 focus:ring-retro-yellow focus:border-coffee-black"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-black uppercase tracking-wider text-coffee-black mb-2"
                >
                  What's on your mind?
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Joe how your day's going, or ask about our beans."
                  className="w-full rounded-lg border-2 border-coffee-black bg-warm-paper px-4 py-4 text-base font-bold text-coffee-black placeholder-coffee-black/40 focus:outline-none focus:ring-2 focus:ring-retro-yellow focus:border-coffee-black resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center rounded-xl bg-retro-red px-6 py-4 text-base font-bold uppercase tracking-wider text-light-cream shadow-md hover:bg-retro-yellow hover:text-coffee-black retro-border retro-shadow transition-all duration-200 cursor-pointer active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_var(--color-coffee-black)]"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Form Footnote */}
          <div className="mt-8 pt-6 border-t border-coffee-black/10 text-center">
            <p className="text-xs text-coffee-black/50 leading-relaxed font-bold uppercase">
              "Consulting with Joe? Take a sip, look thoughtful, tell the boss you're analyzing."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
