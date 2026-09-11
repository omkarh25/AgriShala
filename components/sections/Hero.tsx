"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import { SkyMountains } from "@/components/illustrations";

/**
 * Opening scene — pinned, parallaxed, slow text reveal.
 * Acts as the "hook": the city dweller's question, the answer.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const lines = el.querySelectorAll<HTMLElement>(".hero-line");
    const subtitle = el.querySelector<HTMLElement>(".hero-sub");
    const cta = el.querySelector<HTMLElement>(".hero-cta");
    const scrollHint = el.querySelector<HTMLElement>(".hero-scroll-hint");
    const mountain = el.querySelector<HTMLElement>(".hero-mountain");

    // Entrance animations (run on mount)
    gsap.set(lines, { yPercent: 110 });
    gsap.set([subtitle, cta, scrollHint], { autoAlpha: 0, y: 20 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(lines, {
      yPercent: 0,
      duration: 1.1,
      stagger: 0.12,
      delay: 0.3,
    })
      .to(subtitle, { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.5")
      .to(cta, { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.6")
      .to(scrollHint, { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.6");

    // Parallax mountains on scroll
    if (mountain) {
      gsap.to(mountain, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Slow zoom-out on hero illustration
    const img = el.querySelector<HTMLElement>(".hero-illustration");
    if (img) {
      gsap.fromTo(
        img,
        { scale: 1.15 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Mountain illustration as background */}
      <div className="hero-mountain absolute inset-0 -z-10">
        <div className="hero-illustration absolute inset-0">
          <SkyMountains className="w-full h-full object-cover" />
        </div>
        {/* warm gradient overlay so text remains legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/30 to-cream" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/60 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-40 md:pt-48 pb-32">
        <div className="max-w-3xl">
          <p className="hero-sub mb-6 text-sm md:text-base uppercase tracking-[0.4em] text-earth-700">
            A two-day workshop · BRT Tiger Reserve · Karnataka
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-forest-900">
            <span className="split-line block overflow-hidden">
              <span className="hero-line inline-block">Where does</span>
            </span>
            <span className="split-line block overflow-hidden">
              <span className="hero-line inline-block italic text-earth-700">
                your food
              </span>
            </span>
            <span className="split-line block overflow-hidden">
              <span className="hero-line inline-block">come from?</span>
            </span>
          </h1>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#invitation"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-forest-800 text-cream tracking-wide hover:bg-forest-700 transition-colors"
            >
              Reserve a seat
              <span aria-hidden>→</span>
            </a>
            <a
              href="#vision"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-forest-800/30 text-forest-900 tracking-wide hover:bg-forest-50 transition-colors"
            >
              Begin the story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-earth-700/70">
        <span className="text-xs uppercase tracking-[0.4em]">Scroll</span>
        <span className="block w-px h-12 bg-earth-700/40 animate-pulse" />
      </div>
    </section>
  );
}
