"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";

/**
 * An alternative, hyper-typographic view of the seven chapters —
 * a long typographic list where each row crossfades into the next
 * as it passes through the viewport. A visual breathing space
 * between the timeline and the founder.
 */
const items = [
  ["01", "Sunrise", "Yoga, pranayama, meditation"],
  ["02", "Breakfast", "Farm-fresh, locally sourced"],
  ["03", "Soil", "Practical agricultural workshop"],
  ["04", "Forest", "Safari in BRT Tiger Reserve"],
  ["05", "Temple", "Jenumutti at dusk"],
  ["06", "Settlement", "A visit to the Tibetan community"],
  ["07", "Firecamp", "The last evening under the stars"],
];

export default function Chapters() {
  const root = useRef<HTMLElement>(null);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".chapter-row").forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0.15 },
          {
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
              end: "top 35%",
              scrub: true,
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative w-full py-28 md:py-40 bg-forest-900 text-cream"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="text-sm uppercase tracking-[0.4em] text-forest-300 mb-4">
          The chapters, in order
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-light leading-[1.1] mb-16">
          Seven things that will happen
          <br />
          <span className="italic text-forest-300">to you, gently,</span>{" "}
          across two days.
        </h2>

        <ul className="divide-y divide-forest-700/60">
          {items.map(([num, label, desc]) => (
            <li
              key={num}
              className="chapter-row grid grid-cols-12 gap-6 items-baseline py-10 md:py-14"
            >
              <span className="col-span-2 md:col-span-1 font-display text-3xl md:text-4xl text-forest-400">
                {num}
              </span>
              <span className="col-span-10 md:col-span-5 font-display text-3xl md:text-5xl font-light">
                {label}
              </span>
              <span className="col-start-3 md:col-start-7 col-span-10 md:col-span-6 font-serif italic text-lg md:text-2xl text-forest-100/80">
                {desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
