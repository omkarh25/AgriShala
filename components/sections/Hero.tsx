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

    const openerLines = el.querySelectorAll<HTMLElement>(".hero-opener-line");
    const openerSub = el.querySelector<HTMLElement>(".hero-opener-sub");
    const openerDivider = el.querySelector<HTMLElement>(
      ".hero-opener-divider"
    );
    const lines = el.querySelectorAll<HTMLElement>(".hero-line");
    const subtitle = el.querySelector<HTMLElement>(".hero-sub");
    const cta = el.querySelector<HTMLElement>(".hero-cta");
    const scrollHint = el.querySelector<HTMLElement>(".hero-scroll-hint");
    const mountain = el.querySelector<HTMLElement>(".hero-mountain");

    // Reduced-motion check — used for both the opener and the question.
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // --- Dramatic opening — "Let food be your medicine!" ---
    // Replaces the old full-viewport IntroSplash. It now lives inside
    // the Hero so it never breaks, never races the rest of the page,
    // and never locks body scroll.
    const openerLinesArr = Array.from(openerLines);
    gsap.set(openerLinesArr, { yPercent: 110 });
    gsap.set([openerSub, openerDivider], { autoAlpha: 0, y: 12 });

    let openerBreath: gsap.core.Tween | null = null;
    const opener = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 0.15,
      onComplete: () => {
        // Slow breathing on the title while the user is reading.
        openerBreath = gsap.to(".hero-opener-title", {
          scale: 1.025,
          duration: 3.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      },
    });
    opener
      .to(openerLinesArr, {
        yPercent: 0,
        duration: 1.1,
        stagger: 0.06,
      })
      .to(openerSub, { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.5")
      .to(openerDivider, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.5");

    if (reduced) {
      opener.kill();
      gsap.set([openerLinesArr, openerSub, openerDivider], {
        autoAlpha: 1,
        y: 0,
        yPercent: 0,
      });
    }

    // --- The hero question + CTAs enter after the opener has held.
    gsap.set(lines, { yPercent: 110 });
    gsap.set([subtitle, cta, scrollHint], { autoAlpha: 0, y: 20 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(lines, {
      yPercent: 0,
      duration: 1.1,
      stagger: 0.12,
      delay: reduced ? 0 : 2.2,
    })
      .to(subtitle, { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.5")
      .to(cta, { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.6")
      .to(scrollHint, { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.6");

    if (reduced) {
      tl.kill();
      gsap.set([lines, subtitle, cta, scrollHint], {
        autoAlpha: 1,
        y: 0,
        yPercent: 0,
      });
    }

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
      opener.kill();
      openerBreath?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative min-h-screen w-full overflow-hidden section-fade-bottom"
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-28 md:pt-32 pb-28">
        {/* Dramatic opener — "Let food be your medicine!" + subtitle.
            This replaces the old full-viewport IntroSplash; it now
            lives at the top of the Hero so it can never break, never
            race the rest of the page, and never locks body scroll. */}
        <div className="hero-opener mb-20 md:mb-28 max-w-4xl">
          <p className="hero-opener-eyebrow font-sans text-[11px] uppercase tracking-[0.5em] text-earth-700/70 mb-6">
            AgriShala
          </p>
          <h1
            className="hero-opener-title font-display font-light leading-[1.02] text-forest-900"
            style={{ willChange: "transform" }}
          >
            <span className="block overflow-hidden">
              <span className="hero-opener-line block text-5xl md:text-7xl lg:text-8xl">
                Let food be your
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-opener-line block italic text-earth-700 text-5xl md:text-7xl lg:text-8xl">
                medicine!
              </span>
            </span>
          </h1>
          <p className="hero-opener-sub mt-8 font-display italic text-2xl md:text-3xl text-forest-800/85">
            A workshop that reconnects a city with its food.
          </p>
          <div
            aria-hidden
            className="hero-opener-divider mt-8 h-px w-24 bg-earth-700/30"
          />
        </div>

        {/* The hero question + CTAs enter after the opener. */}
        <div className="max-w-3xl">
          <p className="hero-sub mb-4 text-sm md:text-base uppercase tracking-[0.4em] text-earth-700">
            AgriShala · all-India, piloted in Lokkanahalli
          </p>
          <p className="hero-sub mb-8 text-xs uppercase tracking-[0.3em] text-forest-700/70">
            A working farm · BRT Tiger Reserve · Karnataka
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-forest-900">
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
          </h2>

          <p className="hero-sub mt-8 max-w-xl font-serif text-lg md:text-xl leading-relaxed text-forest-800/85">
            Three paths on one farm: subscribe to a known field, stay
            with us for the weekend, or help the community marketplace
            that we host for the people who keep this land alive.
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#paths"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-forest-800 text-cream tracking-wide hover:bg-forest-700 transition-colors"
            >
              Walk the three paths
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-forest-800/40 text-forest-900 tracking-wide hover:bg-forest-50 transition-colors"
            >
              Stay with us
            </a>
            <a
              href="/pilot-farm"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-forest-900/80 hover:text-earth-700 transition-colors"
            >
              See the pilot farm
              <span aria-hidden>↗</span>
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
