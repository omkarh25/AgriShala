"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import SectionDivider from "@/components/SectionDivider";
import OrganicBackground from "@/components/OrganicBackground";

/**
 * A horizontal phase plan: Workshop → Subscription → Experience →
 * Sustenance → Replication. Each phase is a single line and a single
 * sentence. This is the section an investor pauses on.
 */
export default function Roadmap() {
  const root = useRef<HTMLElement>(null);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".phase-row").forEach((row, i) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 88%" },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const phases = [
    {
      id: "Phase 0",
      title: "Brand refresh",
      timeline: "Now · 1–2 weeks",
      status: "Live",
      body:
        "Reposition the existing workshop site as the front door of the platform. Add Subscribe, Stay, Docs. No backend work.",
      done: true,
    },
    {
      id: "Phase 1",
      title: "Subscription MVP",
      timeline: "Months 1–3",
      status: "Next",
      body:
        "Run a working weekly-subscription product on the first 1-acre. Photo updates, manual delivery, payment via a single provider.",
      done: false,
    },
    {
      id: "Phase 2",
      title: "Experience",
      timeline: "Months 4–7",
      status: "Planned",
      body:
        "Stay + cooking + excursions become a permanent bookable surface. Two cottage rooms retrofitted; kitchen upgrade; excursion calendar.",
      done: false,
    },
    {
      id: "Phase 3",
      title: "Sustenance",
      timeline: "Months 5–10",
      status: "Planned",
      body:
        "Bring in cattle for Gau Shala, set up Agnihotra corner, build the value-addition kitchen. First retail SKUs ship.",
      done: false,
    },
    {
      id: "Phase 4",
      title: "Replication",
      timeline: "Year 2+",
      status: "Open-ended",
      body:
        "Publish the playbook. Onboard the first sister site without anyone from the seed farm being on-site for the first month.",
      done: false,
    },
  ];

  return (
    <>
      <SectionDivider variant="line" />

      <section
        ref={root}
        id="roadmap"
        className="relative w-full py-32 md:py-48 bg-forest-900 text-cream overflow-hidden section-fade-top section-fade-bottom"
      >
        <div className="absolute inset-0 opacity-[0.10]">
          <OrganicBackground tone="forest" variant="roots" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-10 mb-20">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.4em] text-forest-300 mb-4">
                From workshop to platform
              </p>
              <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05] text-cream">
                <span className="split-line block overflow-hidden">
                  <span className="block">Five phases,</span>
                </span>
                <span className="split-line block overflow-hidden">
                  <span className="block italic text-forest-300">one farm,</span>
                </span>
                <span className="split-line block overflow-hidden">
                  <span className="block">at a time.</span>
                </span>
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 font-serif text-lg md:text-xl leading-relaxed text-cream/85">
              <p>
                The phases are <em>gates</em>, not sprints. Each phase must
                ship working, on the ground, before the next opens. Nothing
                here is hypothetical; the seed farm already runs phases 0
                and 1 in their earliest form.
              </p>
              <p className="text-cream/70 text-base md:text-lg">
                Read in full at{" "}
                <a
                  href="/docs/12-roadmap"
                  className="text-forest-300 underline decoration-forest-300/40 underline-offset-4 hover:text-cream"
                >
                  docs/12 — Roadmap
                </a>
                .
              </p>
            </div>
          </div>

          <ol className="divide-y divide-forest-700/50 border-t border-forest-700/50">
            {phases.map((p) => (
              <li
                key={p.id}
                className="phase-row grid grid-cols-12 gap-6 items-baseline py-10 md:py-14"
              >
                <span className="col-span-12 md:col-span-2 font-display italic text-3xl text-forest-300">
                  {p.id}
                </span>
                <span className="col-span-12 md:col-span-3 font-display text-3xl md:text-4xl font-light leading-tight">
                  {p.title}
                </span>
                <span className="col-span-6 md:col-span-2 text-xs uppercase tracking-[0.3em] text-forest-300">
                  {p.timeline}
                </span>
                <span
                  className={`col-span-6 md:col-span-1 text-xs uppercase tracking-[0.3em] ${
                    p.done ? "text-forest-300" : "text-cream/50"
                  }`}
                >
                  {p.status}
                </span>
                <p className="col-span-12 md:col-span-4 font-serif text-lg md:text-xl text-cream/85 leading-relaxed">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-20 grid md:grid-cols-12 gap-6 items-baseline">
            <p className="md:col-span-7 font-display italic text-2xl md:text-3xl text-cream leading-snug">
              &ldquo;If a decision shortens the distance between a plate and
              a field, makes the farm more self-sustaining, and preserves
              the voice — we ship it. Otherwise we don&rsquo;t.&rdquo;
            </p>
            <p className="md:col-span-4 md:col-start-9 text-xs uppercase tracking-[0.3em] text-forest-300">
              — the test of any decision, docs/01
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
