"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import { Sapling, LeafCluster } from "@/components/illustrations";

/**
 * "What you'll carry home" — a quiet promise section.
 */
export default function Promise() {
  const root = useRef<HTMLElement>(null);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".promise-card").forEach((c, i) => {
        gsap.fromTo(
          c,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: c, start: "top 85%" },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const promises = [
    {
      title: "A handful of soil",
      body:
        "You will hold living earth in your palm — the kind that grows your food — and understand it for what it is: not dirt, but a community.",
    },
    {
      title: "Names for things",
      body:
        "You will leave knowing the names of millets, greens, and trees you have walked past your whole life without noticing.",
    },
    {
      title: "A new question",
      body:
        "You will stop asking what to eat and start asking where it came from, who grew it, and what they were paid.",
    },
    {
      title: "Quiet hands",
      body:
        "Two mornings of breath, movement, and meditation. A small reset that you can take home in your body.",
    },
    {
      title: "A friend in Lokkanahalli",
      body:
        "You will know a place on the map you didn&apos;t know existed, and people who will smile when you write to say you&apos;re thinking of them.",
    },
    {
      title: "An honest appetite",
      body:
        "You will never look at a restaurant menu the same way. You may never want to.",
    },
  ];

  return (
    <section
      ref={root}
      className="relative w-full py-28 md:py-40 bg-cream overflow-hidden"
    >
      <div className="absolute -right-20 top-20 w-80 h-80 opacity-20 pointer-events-none">
        <LeafCluster />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-[0.4em] text-earth-700 mb-4">
            What you&apos;ll carry home
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05] text-forest-900">
            A small promise
            <br />
            <span className="italic text-earth-700">from the workshop.</span>
          </h2>
          <p className="mt-6 font-serif text-lg leading-relaxed text-forest-800/90">
            We can&apos;t promise you a transformation. We can promise these
            six small things, which is, in our experience, plenty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {promises.map((p, i) => (
            <article
              key={p.title}
              className="promise-card group relative bg-earth-50 rounded-sm p-8 border border-earth-200/70 hover:border-forest-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-5xl text-earth-700/30 leading-none">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-forest-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="font-serif text-forest-800/85 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
                <Sapling className="w-8 h-12" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
