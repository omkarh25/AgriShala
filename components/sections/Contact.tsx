"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import { LeafCluster, Sapling } from "@/components/illustrations";
import SectionDivider from "@/components/SectionDivider";

/**
 * Contact — the closing. Big type, simple form, soft horizon.
 * Replaces the older "Invitation" / workshop-booking surface: this
 * section is the public contact form for all three paths (Subscribe,
 * Experience, Sustain / community marketplace).
 */
export default function Contact() {
  const root = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".contact-line").forEach((line) => {
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
        ".contact-form",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-form", start: "top 85%" },
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
    <>
      <SectionDivider variant="earth" />

      <section
        ref={root}
        id="contact"
        className="relative w-full py-28 md:py-40 overflow-hidden"
      >
        <div
          aria-hidden
          className="leaf-cluster absolute -top-10 right-0 w-72 h-72 opacity-40 pointer-events-none"
        >
          <LeafCluster />
        </div>
        <div
          aria-hidden
          className="leaf-cluster absolute bottom-0 -left-10 w-96 h-96 opacity-30 pointer-events-none rotate-45"
        >
          <LeafCluster />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.4em] text-earth-700 mb-6">
              Contact us
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.02] text-forest-900">
              <span className="split-line block overflow-hidden">
                <span className="contact-line inline-block">
                  Tell us which path
                </span>
              </span>
              <span className="split-line block overflow-hidden">
                <span className="contact-line inline-block italic text-earth-700">
                  you want to walk.
                </span>
              </span>
            </h2>
          </div>

          <div className="contact-form mt-16 md:mt-24 max-w-2xl">
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
                    Which path interests you?
                  </span>
                  <select
                    required
                    className="w-full bg-transparent border-b border-earth-300 py-3 font-serif text-lg text-forest-900 focus:outline-none focus:border-forest-700 transition-colors"
                  >
                    <option value="">Pick one</option>
                    <option>Subscription · weekly basket from a known field</option>
                    <option>Experience · stay / weekend workshop</option>
                    <option>Sustain · help the community marketplace</option>
                    <option>Investor / partner</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label className="block">
                  <span className="block text-xs uppercase tracking-[0.3em] text-earth-700 mb-2">
                    A few lines
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
                  Send
                  <span aria-hidden>→</span>
                </button>
                <p className="font-serif italic text-sm text-forest-800/60 mt-3">
                  No payment yet. We&apos;ll write to confirm next steps.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Three doors — quick path CTAs */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 mt-24">
          <div className="grid md:grid-cols-3 gap-px bg-earth-200/60 border border-earth-200/60 rounded-sm overflow-hidden">
            <a
              href="mailto:hello@agrishala.in?subject=Subscribe%20to%20a%20plot"
              className="bg-cream p-10 md:p-14 hover:bg-earth-50 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-earth-700 mb-3">
                For subscribers
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-light leading-tight text-forest-900 mb-4">
                Subscribe to a plot.
              </h3>
              <p className="font-serif text-base md:text-lg leading-relaxed text-forest-800/85 mb-6">
                A seasonal weekly basket from your zone. Photo digest
                every week. Phase 1 ships in the next quarter.
              </p>
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-800 text-cream text-sm tracking-wide">
                Express interest
                <span aria-hidden>→</span>
              </span>
            </a>
            <a
              href="mailto:hello@agrishala.in?subject=Stay%20with%20you"
              className="bg-cream p-10 md:p-14 hover:bg-earth-50 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-earth-700 mb-3">
                For visitors
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-light leading-tight text-forest-900 mb-4">
                Come stay with us.
              </h3>
              <p className="font-serif text-base md:text-lg leading-relaxed text-forest-800/85 mb-6">
                Two days, twelve seats, seven chapters. The current
                workshop runs every few weeks.
              </p>
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-forest-800/40 text-forest-900 text-sm tracking-wide">
                Reserve a seat
                <span aria-hidden>→</span>
              </span>
            </a>
            <a
              href="mailto:hello@agrishala.in?subject=Help%20the%20community%20marketplace"
              className="bg-cream p-10 md:p-14 hover:bg-earth-50 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-earth-700 mb-3">
                For the wider market
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-light leading-tight text-forest-900 mb-4">
                Help the marketplace.
              </h3>
              <p className="font-serif text-base md:text-lg leading-relaxed text-forest-800/85 mb-6">
                We host a marketplace for the Soliga community and
                local cottage industries. They set the prices; we keep
                the rails.
              </p>
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-forest-800/40 text-forest-900 text-sm tracking-wide">
                Get in touch
                <span aria-hidden>→</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
