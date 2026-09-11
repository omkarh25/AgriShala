"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import { CityDisconnect, VineDivider } from "@/components/illustrations";

/**
 * The "why" — the city/farm split. As the user scrolls,
 * the two halves slide apart and reveal the vision statement.
 */
export default function Vision() {
  const root = useRef<HTMLElement>(null);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Reveal text blocks
      gsap.utils.toArray<HTMLElement>(".vision-line").forEach((line) => {
        gsap.fromTo(
          line,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
            },
          }
        );
      });

      // Image split apart on scroll
      const city = el.querySelector<HTMLElement>(".vision-city");
      const farm = el.querySelector<HTMLElement>(".vision-farm");
      if (city && farm) {
        gsap.fromTo(
          city,
          { xPercent: 0 },
          {
            xPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
        gsap.fromTo(
          farm,
          { xPercent: 0 },
          {
            xPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="vision"
      className="relative w-full py-28 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Two-column image intro */}
        <div className="relative h-[55vh] md:h-[70vh] mb-20 overflow-hidden rounded-sm">
          <div className="vision-city absolute inset-y-0 left-0 w-1/2 overflow-hidden">
            <CityDisconnect className="w-[200%] h-full" />
          </div>
          <div className="vision-farm absolute inset-y-0 right-0 w-1/2 overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-[200%] h-full">
              <CityDisconnect className="w-full h-full" />
            </div>
          </div>
          {/* Caption overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 bg-gradient-to-t from-cream via-cream/60 to-transparent">
            <p className="font-display italic text-xl md:text-2xl text-forest-900 max-w-2xl">
              Two worlds. One plate of food. A widening gap that nobody is
              asked to notice.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.4em] text-earth-700 mb-4">
              Our vision
            </p>
            <VineDivider className="max-w-[160px] -ml-2" />
          </div>
          <div className="md:col-span-8 space-y-8">
            <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.1] text-forest-900">
              <span className="split-line block overflow-hidden">
                <span className="vision-line inline-block">
                  A city dweller doesn&apos;t know
                </span>
              </span>
              <span className="split-line block overflow-hidden">
                <span className="vision-line inline-block italic text-earth-700">
                  where his food comes from,
                </span>
              </span>
              <span className="split-line block overflow-hidden">
                <span className="vision-line inline-block">
                  and has no idea about the people
                </span>
              </span>
              <span className="split-line block overflow-hidden">
                <span className="vision-line inline-block">
                  who work hard to make it available.
                </span>
              </span>
            </h2>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-forest-800/90">
              AgriShala is two days in the other world — among the soil, the
              seed, the seasons, the people whose hands feed the city. You
              return not with a certificate, but with a different relationship
              to what is on your plate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
