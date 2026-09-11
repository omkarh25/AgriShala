"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import { TreeOfSeasons } from "@/components/illustrations";

/**
 * Poetic interlude — a tree that is four seasons at once.
 * A quiet moment between the founder's story and the invitation.
 */
export default function Seasons() {
  const root = useRef<HTMLElement>(null);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".seasons-illu",
        { yPercent: 15 },
        {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: ".seasons-illu",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".season-line").forEach((line) => {
        gsap.fromTo(
          line,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: line, start: "top 88%" },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const seasons = [
    {
      name: "Spring",
      detail: "Sowing, blossom, fresh greens",
      months: "Feb – Apr",
    },
    {
      name: "Summer",
      detail: "Mango, jackfruit, the long afternoons",
      months: "Apr – Jun",
    },
    {
      name: "Monsoon",
      detail: "Millets, groundnut, turmeric planted",
      months: "Jun – Sep",
    },
    {
      name: "Harvest",
      detail: "Ragi, jowar, the first honey",
      months: "Oct – Jan",
    },
  ];

  return (
    <section
      ref={root}
      className="relative w-full py-28 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <p className="text-sm uppercase tracking-[0.4em] text-earth-700 mb-4">
              What the soil is doing
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05] text-forest-900">
              <span className="split-line block overflow-hidden">
                <span className="season-line inline-block">
                  The same tree
                </span>
              </span>
              <span className="split-line block overflow-hidden">
                <span className="season-line inline-block italic text-earth-700">
                  wears four
                </span>
              </span>
              <span className="split-line block overflow-hidden">
                <span className="season-line inline-block">seasons.</span>
              </span>
            </h2>
            <p className="font-serif text-lg leading-relaxed text-forest-800/90 mt-8">
              AgriShala is offered across the year, and each season is a
              different conversation with the same land. You&apos;ll go home
              knowing what grows when, why, and what the farmer eats between
              harvests.
            </p>

            <ul className="mt-10 space-y-5">
              {seasons.map((s) => (
                <li
                  key={s.name}
                  className="flex items-baseline gap-6 pb-5 border-b border-earth-200/60"
                >
                  <span className="font-display italic text-3xl text-earth-700 w-32 shrink-0">
                    {s.name}
                  </span>
                  <span className="font-serif text-forest-900 flex-1">
                    {s.detail}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-earth-700/70">
                    {s.months}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <div className="seasons-illu relative aspect-[4/3] rounded-sm overflow-hidden border border-earth-200">
              <TreeOfSeasons className="w-full h-full" />
            </div>
            <p className="mt-4 font-serif italic text-forest-800/70 text-sm">
              A banyan&apos;s year — what&apos;s blooming, fruiting, resting,
              and ready to sow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
