"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import {
  BRTMap,
  SunYoga,
  FoodPlate,
  HandsSowSeed,
} from "@/components/illustrations";
import SectionDivider from "@/components/SectionDivider";

/**
 * The pilot farm — a brief on the homepage that links out to the
 * full /pilot-farm page. Brief by design; the deep page is where
 * the Subscribe / Experience / Sustain walk-through lives.
 */
export default function PilotFarm() {
  const root = useRef<HTMLElement>(null);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pilot-heading-line > span",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.0,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".pilot-heading", start: "top 85%" },
        }
      );

      gsap.utils.toArray<HTMLElement>(".pilot-photo").forEach((p, i) => {
        gsap.fromTo(
          p,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: p, start: "top 88%" },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".pilot-stat").forEach((s, i) => {
        gsap.fromTo(
          s,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: s, start: "top 88%" },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SectionDivider variant="line" />

      <section
        ref={root}
        id="pilot"
        className="relative w-full py-28 md:py-40 bg-cream overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Left: photos + map */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-6 gap-3 md:gap-4">
                <div className="pilot-photo col-span-4 aspect-[4/3] rounded-sm overflow-hidden border border-earth-200/70 bg-earth-50">
                  <BRTMap className="w-full h-full" />
                </div>
                <div className="pilot-photo col-span-2 aspect-[3/4] rounded-sm overflow-hidden border border-earth-200/70 bg-earth-50">
                  <SunYoga className="w-full h-full" />
                </div>
                <div className="pilot-photo col-span-2 aspect-square rounded-sm overflow-hidden border border-earth-200/70 bg-earth-50">
                  <FoodPlate className="w-full h-full" />
                </div>
                <div className="pilot-photo col-span-6 aspect-[16/9] rounded-sm overflow-hidden border border-earth-200/70 bg-earth-50">
                  <HandsSowSeed className="w-full h-full" />
                </div>
              </div>
              <p className="mt-4 font-serif italic text-forest-800/70 text-sm">
                Illustrated photo placeholders · swap with real photography
                when ready (Bamboo Cafe, BRT safari, fields, soil).
              </p>
            </div>

            {/* Right: text */}
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-[0.4em] text-earth-700 mb-4">
                The pilot farm
              </p>
              <h2
                className="pilot-heading font-display text-5xl md:text-7xl font-light leading-[1.05] text-forest-900"
              >
                <span className="split-line block overflow-hidden">
                  <span className="pilot-heading-line inline-block">
                    Lokkanahalli,
                  </span>
                </span>
                <span className="split-line block overflow-hidden">
                  <span className="pilot-heading-line inline-block italic text-earth-700">
                    on the edge of the BRT.
                  </span>
                </span>
              </h2>

              <p className="mt-8 font-serif text-lg md:text-xl leading-relaxed text-forest-800/90">
                AgriShala is an all-India idea. Its first home is a 1-acre
                seed farm at Lokkanahalli, on the edge of the Biligiri
                Rangaswamy Temple Tiger Reserve in Karnataka — about 3.5
                hours from Bengaluru, in the foothills of the Western
                Ghats.
              </p>

              {/* Per-path summary */}
              <ul className="mt-10 divide-y divide-earth-200/70 border-y border-earth-200/70">
                <li className="pilot-stat grid grid-cols-12 gap-4 items-baseline py-5">
                  <span className="col-span-3 font-display italic text-2xl text-earth-700/70">
                    01
                  </span>
                  <div className="col-span-9">
                    <p className="font-display text-lg text-forest-900">
                      Subscription
                    </p>
                    <p className="font-serif text-sm md:text-base text-forest-800/85 leading-snug">
                      1 acre · 10 zones · 12 weekly baskets · photo
                      digest every week.
                    </p>
                  </div>
                </li>
                <li className="pilot-stat grid grid-cols-12 gap-4 items-baseline py-5">
                  <span className="col-span-3 font-display italic text-2xl text-earth-700/70">
                    02
                  </span>
                  <div className="col-span-9">
                    <p className="font-display text-lg text-forest-900">
                      Experience
                    </p>
                    <p className="font-serif text-sm md:text-base text-forest-800/85 leading-snug">
                      Bamboo Cafe · 2-day workshop every month · BRT
                      safari, Jenumutti temple, Tibetan settlement.
                    </p>
                  </div>
                </li>
                <li className="pilot-stat grid grid-cols-12 gap-4 items-baseline py-5">
                  <span className="col-span-3 font-display italic text-2xl text-earth-700/70">
                    03
                  </span>
                  <div className="col-span-9">
                    <p className="font-display text-lg text-forest-900">
                      Sustain
                    </p>
                    <p className="font-serif text-sm md:text-base text-forest-800/85 leading-snug">
                      Soliga community liaison · community-driven
                      marketplace · first retail SKUs in Phase 3.
                    </p>
                  </div>
                </li>
              </ul>

              <a
                href="/pilot-farm"
                className="pilot-stat mt-10 inline-flex items-center gap-2 text-sm tracking-wide text-forest-800 hover:text-earth-700 transition-colors"
              >
                See the pilot in detail
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
