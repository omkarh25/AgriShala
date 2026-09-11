"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import { FounderJayapal, VineDivider } from "@/components/illustrations";

/**
 * Jayapal's story — pinned portrait + scrolling chapters of his life.
 * Reads like a long-form magazine pull-quote.
 */
export default function Founder() {
  const root = useRef<HTMLElement>(null);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".founder-portrait",
        { scale: 1.1 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".founder-portrait",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".founder-heading",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".founder-heading",
            start: "top 85%",
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".founder-para").forEach((p, i) => {
        gsap.fromTo(
          p,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: i * 0.05,
            scrollTrigger: { trigger: p, start: "top 85%" },
          }
        );
      });

      gsap.fromTo(
        ".founder-quote",
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".founder-quote", start: "top 80%" },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="founder"
      className="relative w-full py-28 md:py-40 bg-forest-900 text-cream overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(127,166,80,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(193,154,107,0.4), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5 md:sticky md:top-32">
            <div className="founder-portrait aspect-[4/5] w-full rounded-sm overflow-hidden border border-forest-700">
              <FounderJayapal className="w-full h-full" />
            </div>
            <p className="mt-4 font-serif italic text-forest-100/70 text-sm">
              Jayapal · Lokkanahalli, Karnataka · Founder of Bamboo Cafe.
            </p>
          </div>

          <div className="md:col-span-7 space-y-8">
            <p className="text-sm uppercase tracking-[0.4em] text-forest-300">
              The founder
            </p>
            <h2 className="founder-heading font-display text-5xl md:text-7xl font-light leading-[1.05] overflow-hidden">
              <span className="inline-block italic text-forest-300">
                Jayapal.
              </span>
            </h2>

            <VineDivider className="max-w-[200px]" />

            <div className="space-y-6 font-serif text-lg md:text-xl leading-relaxed text-cream/90">
              <p className="founder-para">
                Jayapal owns{" "}
                <span className="italic text-forest-300">Bamboo Cafe</span> —
                an organic cafe nestled in Lokkanahalli, surrounded by the
                kind of quiet that city people forget exists.
              </p>
              <p className="founder-para">
                Before the cafe, he spent over a decade as a manager at HDFC
                Bank in Mysore. Numbers, targets, branches, performance
                reviews. A life his family was proud of, and a life that was
                slowly draining the part of him that actually lived.
              </p>
              <p className="founder-para">
                He began showing up on weekends to plant saplings. Then more
                weekends. Then, one morning, he sat under a tamarind tree on
                a friend&apos;s farm and understood — quietly, without drama
                — that this was the work.
              </p>
              <p className="founder-para">
                He resigned. He spent two years learning organic farming
                from elders in the BRT region. He built Bamboo Cafe so that a
                place serving honest food could also fund honest agriculture.
                He started AgriShala so that the rest of us could borrow a
                few days from the life he had chosen.
              </p>
            </div>

            <blockquote className="founder-quote my-12 pl-6 border-l-2 border-forest-300">
              <p className="font-display italic text-3xl md:text-4xl text-cream leading-tight">
                &ldquo;The city will feed you for the rest of your life.
                Spend two days understanding who feeds the city.&rdquo;
              </p>
              <footer className="mt-4 text-sm uppercase tracking-[0.4em] text-forest-300">
                — Jayapal
              </footer>
            </blockquote>

            <p className="founder-para font-serif text-lg leading-relaxed text-cream/90">
              He has not looked back. The cafe still runs. The saplings he
              helped plant have grown into groves you can walk through on
              quiet afternoons. And every few weeks, a small group of city
              strangers arrive at Lokkanahalli to remember, for a couple of
              days, what it means to be fed by a place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
