"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import { BRTMap } from "@/components/illustrations";

/**
 * The Place — Biligiri Rangaswamy Temple Tiger Reserve.
 * Uses a horizontal "drawing" reveal of the map's labels
 * and a parallax shift on the topography.
 */
export default function Place() {
  const root = useRef<HTMLElement>(null);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Map slow zoom as it scrolls into view
      gsap.fromTo(
        ".place-map",
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".place-map",
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        }
      );

      // Stagger reveal of fact rows
      gsap.utils.toArray<HTMLElement>(".place-fact").forEach((fact, i) => {
        gsap.fromTo(
          fact,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: { trigger: fact, start: "top 85%" },
          }
        );
      });

      // Heading reveal
      gsap.fromTo(
        ".place-heading",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".place-heading", start: "top 85%" },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="place"
      className="relative w-full py-28 md:py-40 bg-earth-50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Map */}
          <div className="md:col-span-7 md:sticky md:top-32">
            <div className="place-map aspect-[4/3] w-full rounded-sm overflow-hidden border border-earth-200">
              <BRTMap className="w-full h-full" />
            </div>
            <p className="mt-4 font-serif italic text-forest-800/70 text-sm">
              Illustrated map · Biligiri Rangaswamy Temple Tiger Reserve,
              Karnataka.
            </p>
          </div>

          {/* Text */}
          <div className="md:col-span-5 space-y-10">
            <p className="text-sm uppercase tracking-[0.4em] text-earth-700">
              The place
            </p>
            <h2 className="place-heading font-display text-5xl md:text-7xl font-light leading-[1.05] text-forest-900 overflow-hidden">
              <span className="inline-block">Where the land</span>
              <br />
              <span className="inline-block italic text-earth-700">
                remembers
              </span>
              <br />
              <span className="inline-block">being forest.</span>
            </h2>

            <div className="space-y-6 font-serif text-lg leading-relaxed text-forest-800/90">
              <p className="place-fact">
                The BRT Tiger Reserve sits at the meeting of the Western and
                Eastern Ghats — a 1,300&nbsp;km² mosaic of dry deciduous
                forest, rolling grasslands, and the Cauvery river corridor.
              </p>
              <p className="place-fact">
                It is one of India&apos;s richest biodiversity hotspots, home
                to tigers, elephants, gaurs and a four-hundred-year-old
                Soliga Adivasi community who have farmed here since before
                borders were drawn on maps.
              </p>
              <p className="place-fact">
                Our workshop happens on the edge of the reserve, in
                Lokkanahalli — a small village where bamboo grows taller than
                telephone poles and the chai is still made on a wood fire.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-6 pt-6 border-t border-earth-200">
              <div className="place-fact">
                <dt className="text-xs uppercase tracking-[0.3em] text-earth-700">
                  Reserve
                </dt>
                <dd className="mt-1 font-display text-3xl text-forest-900">
                  ~1,300 km²
                </dd>
              </div>
              <div className="place-fact">
                <dt className="text-xs uppercase tracking-[0.3em] text-earth-700">
                  From Bengaluru
                </dt>
                <dd className="mt-1 font-display text-3xl text-forest-900">
                  ~3.5 hours
                </dd>
              </div>
              <div className="place-fact">
                <dt className="text-xs uppercase tracking-[0.3em] text-earth-700">
                  Best seasons
                </dt>
                <dd className="mt-1 font-display text-3xl text-forest-900">
                  Oct – Mar
                </dd>
              </div>
              <div className="place-fact">
                <dt className="text-xs uppercase tracking-[0.3em] text-earth-700">
                  Group size
                </dt>
                <dd className="mt-1 font-display text-3xl text-forest-900">
                  12 seats
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
