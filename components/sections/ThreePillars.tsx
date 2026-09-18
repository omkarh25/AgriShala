"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import OrganicBackground from "@/components/OrganicBackground";
import SectionDivider from "@/components/SectionDivider";

/**
 * The three pillars — Subscription, Experience, Sustenance.
 *
 * This is the spine of the platform and the part investors will read
 * first. Typography is the artwork: large numerals, three columns,
 * one quiet illustration in the background. We avoid bullet cards and
 * tables — the intent is that you read it like a chapter title, not
 * a slide.
 */
export default function ThreePillars() {
  const root = useRef<HTMLElement>(null);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Heading split-line reveal
      gsap.utils.toArray<HTMLElement>(".pillar-heading-line").forEach((line) => {
        gsap.fromTo(
          line,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: line, start: "top 88%" },
          }
        );
      });

      // Number reveal
      gsap.utils.toArray<HTMLElement>(".pillar-number").forEach((n, i) => {
        gsap.fromTo(
          n,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: n, start: "top 85%" },
          }
        );
      });

      // Each pillar column fades up
      gsap.utils.toArray<HTMLElement>(".pillar-col").forEach((col, i) => {
        gsap.fromTo(
          col,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: col, start: "top 85%" },
          }
        );
      });

      // Slow parallax on the illustration layer
      gsap.to(".pillar-bg", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SectionDivider variant="line" />

      <section
        ref={root}
        id="pillars"
        className="relative w-full py-32 md:py-56 bg-cream overflow-hidden"
      >
        <div className="pillar-bg absolute inset-0 -z-0">
          <OrganicBackground tone="cream" variant="hills" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          {/* Heading */}
          <div className="max-w-4xl mb-20 md:mb-28">
            <p className="text-sm md:text-base uppercase tracking-[0.4em] text-earth-700 mb-6">
              The platform
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05] text-forest-900">
              <span className="split-line block">
                <span className="pillar-heading-line block">One farm,</span>
              </span>
              <span className="split-line block">
                <span className="pillar-heading-line block italic text-earth-700">
                  three layers
                </span>
              </span>
              <span className="split-line block">
                <span className="pillar-heading-line block">
                  on the same piece of land.
                </span>
              </span>
            </h2>
            <p className="mt-10 font-serif text-lg md:text-xl leading-relaxed text-forest-800/90 max-w-2xl">
              AgriShala is not three businesses. It is three layers of
              relationship with one piece of land — and the platform is
              what lets a city dweller cross every layer without ever
              leaving home, until they choose to come and see it.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            <Pillar
              number="01"
              name="Subscription"
              tag="Pillar 1 · Recurring"
              line="Know the field that feeds you."
              body="A consumer subscribes to a defined piece of land inside a 1-acre. They receive periodic photo updates from their plot — sowing, growing, harvest, packing — and a weekly door delivery on a specified day. They eat from a known field, not from an abstract supply chain."
              proof="Recurring revenue, weekly touch-point, traceable by zone."
              cta={{ href: "#subscribe-cta", label: "How subscribing works" }}
            />
            <Pillar
              number="02"
              name="Experience"
              tag="Pillar 2 · Per booking"
              line="Visit it when you can."
              body="The same farm hosts stays, local excursions (BRT wildlife, the Soliga community, Jenumutti temple, the Tibetan settlement), cooking from the day's harvest, and events. The farm becomes a place you visit, not just a warehouse you receive parcels from."
              proof="Margin per customer-day, place-making, brand reach."
              cta={{ href: "#stay-cta", label: "Plan a weekend" }}
            />
            <Pillar
              number="03"
              name="Sustenance"
              tag="Pillar 3 · Vertical integration"
              line="Help it stand on its own."
              body="The farm decreases its dependence on external inputs every year: Gau Shala, Agnihotra, composting, seed-saving, mixed cropping. The same fields produce ghee, honey, soap, pickles, and millet flours — sold direct to a wider market."
              proof="Farm pays for its own inputs; replicable playbook."
              cta={{ href: "#shop-cta", label: "See what we make" }}
            />
          </div>

          {/* Closing line */}
          <div className="mt-24 md:mt-32 max-w-3xl">
            <p className="font-display italic text-3xl md:text-4xl text-forest-900 leading-tight">
              &ldquo;We are not building a marketplace. We are building the
              smallest possible bridge between a city plate and the soil
              that filled it.&rdquo;
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-earth-700">
              — the AgriShala vision, see docs/01
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="sky" />
    </>
  );
}

function Pillar({
  number,
  name,
  tag,
  line,
  body,
  proof,
  cta,
}: {
  number: string;
  name: string;
  tag: string;
  line: string;
  body: string;
  proof: string;
  cta: { href: string; label: string };
}) {
  return (
    <article className="pillar-col pillar-card group relative bg-cream border border-earth-200/70 rounded-sm p-8 md:p-10 flex flex-col hover:border-forest-400">
      <div className="flex items-baseline justify-between mb-8">
        <span className="pillar-number font-display italic text-6xl text-earth-700/40 leading-none">
          {number}
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-forest-700/60">
          {tag}
        </span>
      </div>

      <h3 className="font-display text-4xl md:text-5xl font-light leading-tight text-forest-900 mb-3">
        {name}
      </h3>

      <p className="font-display italic text-xl md:text-2xl text-earth-700 mb-6">
        {line}
      </p>

      <p className="font-serif text-base md:text-lg leading-relaxed text-forest-800/85 flex-1">
        {body}
      </p>

      <div className="mt-8 pt-6 border-t border-earth-200/60">
        <p className="text-xs uppercase tracking-[0.3em] text-forest-700/60 mb-3">
          Why it matters
        </p>
        <p className="font-serif text-base text-forest-900 leading-snug">
          {proof}
        </p>
      </div>

      <a
        href={cta.href}
        className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-forest-800 hover:text-earth-700 transition-colors"
      >
        {cta.label}
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>
    </article>
  );
}
