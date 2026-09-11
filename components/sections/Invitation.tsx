"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import { LeafCluster, Sapling } from "@/components/illustrations";

/**
 * The closing — the invitation. Big type, simple form, soft horizon.
 */
export default function Invitation() {
  const root = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".invite-line").forEach((line) => {
        gsap.fromTo(
          line,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: line, start: "top 88%" },
          }
        );
      });

      gsap.fromTo(
        ".invite-form",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".invite-form", start: "top 85%" },
        }
      );

      gsap.to(".leaf-cluster", {
        yPercent: -8,
        rotate: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        duration: 6,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={root}
      id="invitation"
      className="relative w-full py-28 md:py-40 overflow-hidden"
    >
      {/* Decorative leaves */}
      <div className="leaf-cluster absolute -top-10 right-0 w-72 h-72 opacity-40 pointer-events-none">
        <LeafCluster />
      </div>
      <div className="leaf-cluster absolute bottom-0 -left-10 w-96 h-96 opacity-30 pointer-events-none rotate-45">
        <LeafCluster />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.4em] text-earth-700 mb-6">
            Your invitation
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.02] text-forest-900">
            <span className="split-line block overflow-hidden">
              <span className="invite-line inline-block">Come for two days.</span>
            </span>
            <span className="split-line block overflow-hidden">
              <span className="invite-line inline-block italic text-earth-700">
                Return a little
              </span>
            </span>
            <span className="split-line block overflow-hidden">
              <span className="invite-line inline-block">
                less of a stranger
              </span>
            </span>
            <span className="split-line block overflow-hidden">
              <span className="invite-line inline-block">
                to your own plate.
              </span>
            </span>
          </h2>
        </div>

        <div className="invite-form mt-16 md:mt-24 max-w-2xl">
          {submitted ? (
            <div className="rounded-sm border border-forest-300 bg-forest-50 p-10 text-center">
              <Sapling className="mx-auto" />
              <p className="font-display text-3xl text-forest-900 mt-6">
                Thank you.
              </p>
              <p className="font-serif text-forest-800/90 mt-3">
                We&apos;ll be in touch within a couple of days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="block text-xs uppercase tracking-[0.3em] text-earth-700 mb-2">
                    Your name
                  </span>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-earth-300 py-3 font-serif text-lg text-forest-900 focus:outline-none focus:border-forest-700 transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="block text-xs uppercase tracking-[0.3em] text-earth-700 mb-2">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-earth-300 py-3 font-serif text-lg text-forest-900 focus:outline-none focus:border-forest-700 transition-colors"
                  />
                </label>
              </div>
              <label className="block">
                <span className="block text-xs uppercase tracking-[0.3em] text-earth-700 mb-2">
                  Which weekend?
                </span>
                <select
                  required
                  className="w-full bg-transparent border-b border-earth-300 py-3 font-serif text-lg text-forest-900 focus:outline-none focus:border-forest-700 transition-colors"
                >
                  <option value="">Pick a season</option>
                  <option>Spring · Mar</option>
                  <option>Summer · May</option>
                  <option>Monsoon · Aug</option>
                  <option>Harvest · Nov</option>
                </select>
              </label>
              <label className="block">
                <span className="block text-xs uppercase tracking-[0.3em] text-earth-700 mb-2">
                  What brings you here?
                </span>
                <textarea
                  rows={3}
                  className="w-full bg-transparent border-b border-earth-300 py-3 font-serif text-lg text-forest-900 focus:outline-none focus:border-forest-700 transition-colors resize-none"
                />
              </label>
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-forest-800 text-cream tracking-wide hover:bg-forest-700 transition-colors"
              >
                Reserve a seat
                <span aria-hidden>→</span>
              </button>
              <p className="font-serif italic text-sm text-forest-800/60 mt-3">
                No payment yet. We&apos;ll send a confirmation with full
                details once we&apos;ve spoken.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

