"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import OrganicBackground from "@/components/OrganicBackground";

/**
 * Three Paths — the spine of the AgriShala platform.
 *
 * Reads as a single page that the visitor walks down: three
 * full-viewport waypoints (Subscription, Experience, Sustain) separated
 * by horizon dividers. As you scroll past each waypoint:
 *
 *   - The number settles into scale and gains opacity.
 *   - The name + tagline enter with the project's split-line mask.
 *   - The body streams in line by line.
 *   - The next waypoint's background gently lifts in from below.
 *
 * Reduced-motion: a single fade per waypoint.
 */
export default function ThreePaths() {
  const root = useRef<HTMLElement>(null);
  useGsap();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const waypoints = gsap.utils.toArray<HTMLElement>(".path-waypoint");

      waypoints.forEach((wp) => {
        const number = wp.querySelector<HTMLElement>(".path-number");

        if (number) {
          gsap.fromTo(
            number,
            { autoAlpha: 0, scale: 0.94, y: 30 },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: wp,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Per-word title reveal — staggered across all words.
        // The highlight word animates in with the others, then the
        // underline stroke draws in from left → right once the
        // title is fully visible.
        const wordSpans = wp.querySelectorAll<HTMLElement>(
          ".path-word > span"
        );
        if (wordSpans.length) {
          gsap.fromTo(
            wordSpans,
            { yPercent: 110 },
            {
              yPercent: 0,
              duration: 1.0,
              ease: "power3.out",
              stagger: 0.07,
              scrollTrigger: {
                trigger: wp,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Legacy `.path-line` reveal kept for the italic tagline
        // line (the second line of the h2) which still uses the
        // single-span mask.
        const lines = wp.querySelectorAll<HTMLElement>(".path-line");
        if (lines.length) {
          gsap.fromTo(
            lines,
            { yPercent: 110 },
            {
              yPercent: 0,
              duration: 1.0,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: wp,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Highlight stroke — draws in after the words land.
        const stroke = wp.querySelector<HTMLElement>(
          ".path-highlight-stroke"
        );
        if (stroke) {
          gsap.fromTo(
            stroke,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 0.85,
              duration: 0.9,
              ease: "power3.out",
              delay: 0.55, // ≈ half a beat after the last word lands
              scrollTrigger: {
                trigger: wp,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        const body = wp.querySelectorAll<HTMLElement>(".path-body p");
        if (body.length) {
          gsap.fromTo(
            body,
            { autoAlpha: 0, y: 16 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: wp,
                start: "top 65%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        const cta = wp.querySelector<HTMLElement>(".path-cta");
        if (cta) {
          gsap.fromTo(
            cta,
            { autoAlpha: 0, y: 14 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: wp,
                start: "top 60%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Across-waypoint parallax-fade.
        if (number) {
          gsap.to(number, {
            yPercent: -8,
            opacity: 0.45,
            ease: "none",
            scrollTrigger: {
              trigger: wp,
              start: "top 30%",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      // Quiet parallax on the organic backgrounds.
      gsap.utils.toArray<HTMLElement>(".path-bg").forEach((bg, i) => {
        gsap.to(bg, {
          yPercent: i % 2 === 0 ? 10 : -8,
          ease: "none",
          scrollTrigger: {
            trigger: bg.closest(".path-waypoint") || bg,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="paths"
      className="relative w-full"
    >
      <Waypoint
        index="01"
        name="Subscription"
        highlight="grow"
        tagline="What you see grow is what you cook at your home."
        body={[
          "Subscribe to a defined piece of land inside our pilot farm. You get a weekly photo journal from your plot — sow, grow, harvest, pack — and a basket on a chosen day, delivered to your door in Bengaluru.",
          "You eat from a known field, not from an abstract supply chain.",
        ]}
        cta={{ href: "/pilot-farm#subscribe", label: "How subscribing works" }}
        tone="cream"
        variant="hills"
      />

      <PathDivider variant="sky" />

      <Waypoint
        index="02"
        name="Experience"
        highlight="stay"
        tagline="Come stay with us and experience the farm life."
        body={[
          "The same farm hosts stays, weekend workshops, cooking from the day's harvest, and walks into the BRT Tiger Reserve, the Jenumutti temple, and the Tibetan settlement nearby.",
          "Two days is enough to feel the place change you. A lifetime of better meals is what comes after.",
        ]}
        cta={{ href: "/pilot-farm#experience", label: "Plan a weekend" }}
        tone="earth"
        variant="canopy"
      />

      <PathDivider variant="earth" />

      <Waypoint
        index="03"
        name="Sustain"
        highlight="alive"
        tagline="A community-driven marketplace for the people who keep this land alive."
        body={[
          "We support Soliga-led producers, forest-gatherers, and local cottage industries with a small marketplace that we host but do not own. They set the prices. We keep the rails.",
          "At Lokkanahalli, the first products to enter are Soliga forest honey, ragi and jowar from their own millet plots, and wild-tuber preserves. The platform fee funds the community's own audit and pricing work.",
        ]}
        cta={{ href: "/pilot-farm#sustain", label: "Read about the community marketplace" }}
        tone="forest"
        variant="roots"
        dark
      />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Single waypoint                                                     */
/* ------------------------------------------------------------------ */

function Waypoint({
  index,
  name,
  highlight,
  tagline,
  body,
  cta,
  tone,
  variant,
  dark = false,
}: {
  index: string;
  name: string;
  highlight: string;
  tagline: string;
  body: string[];
  cta: { href: string; label: string };
  tone: "cream" | "earth" | "forest";
  variant: "hills" | "canopy" | "roots";
  dark?: boolean;
}) {
  const bgClass =
    tone === "forest"
      ? "bg-forest-900"
      : tone === "earth"
      ? "bg-earth-50"
      : "bg-cream";

  const textClass = dark ? "text-cream" : "text-forest-900";
  const subtleClass = dark ? "text-cream/70" : "text-forest-800/85";
  const eyebrowClass = dark ? "text-forest-300" : "text-earth-700";

  // Split both the title and the tagline into words so each one
  // can rise into view in sequence. The `highlight` keyword — when
  // present in the tagline — gets the italic, different colour and
  // the underline stroke element. The keyword may appear multiple
  // times in the tagline (e.g. "stay"); we highlight every
  // occurrence.
  const titleWords = `${name}.`.split(/\s+/);
  const taglineWords = tagline.split(/\s+/);

  function isMatch(word: string) {
    const clean = word.replace(/[.,!?:;]+$/g, "").toLowerCase();
    return clean === highlight.toLowerCase();
  }

  return (
    <article
      className={`path-waypoint relative min-h-[100svh] w-full overflow-hidden flex items-center ${bgClass} ${textClass}`}
    >
      <div className="path-bg absolute inset-0 pointer-events-none">
        <OrganicBackground tone={tone} variant={variant} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7">
            <p
              className={`text-xs md:text-sm uppercase tracking-[0.4em] mb-6 ${eyebrowClass}`}
            >
              Waypoint {index} · {name}
            </p>

            <h2 className="font-display font-light leading-[1.05]">
              {/* Title — per-word mask reveal (one word). */}
              <span className="block text-5xl md:text-7xl lg:text-8xl">
                {titleWords.map((word, i) => (
                  <span key={i} className="path-word">
                    <span>{word}</span>
                  </span>
                ))}
              </span>

              {/* Tagline — per-word mask reveal. The highlighted
                  keyword (matched case-insensitively against the
                  `highlight` prop) gets the italic, different colour
                  and the underline stroke element. */}
              <span
                className={`block italic text-2xl md:text-4xl lg:text-5xl mt-4 ${
                  dark ? "text-forest-300" : "text-earth-700"
                }`}
              >
                {taglineWords.map((word, i) => {
                  const matched = isMatch(word);
                  return (
                    <span
                      key={i}
                      className={`path-word${matched ? " path-highlight" : ""}`}
                    >
                      <span>{word}</span>
                      {matched && (
                        <span
                          className={`path-highlight-stroke path-highlight-stroke--${tone}`}
                          aria-hidden
                        />
                      )}
                    </span>
                  );
                })}
              </span>
            </h2>
          </div>

          <div className="md:col-span-5 md:col-start-9">
            <div className={`path-body space-y-5 font-serif text-lg md:text-xl leading-relaxed ${subtleClass}`}>
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <a
              href={cta.href}
              className={`path-cta mt-8 inline-flex items-center gap-2 text-sm tracking-wide ${
                dark
                  ? "text-forest-300 hover:text-cream"
                  : "text-forest-800 hover:text-earth-700"
              } transition-colors`}
            >
              {cta.label}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      <span
        className={`path-number pointer-events-none absolute -bottom-8 -right-4 md:-right-12 font-display italic select-none ${
          dark ? "text-cream/[0.08]" : "text-forest-900/[0.06]"
        }`}
        style={{ fontSize: "clamp(12rem, 28vw, 24rem)", lineHeight: 0.85 }}
        aria-hidden
      >
        {index}
      </span>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Path divider — horizon seam                                         */
/* ------------------------------------------------------------------ */

function PathDivider({ variant }: { variant: "sky" | "earth" | "line" }) {
  if (variant === "line") {
    return (
      <div
        aria-hidden
        className="section-divider mx-auto max-w-5xl"
        style={{ height: 1 }}
      />
    );
  }
  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden pointer-events-none ${
        variant === "earth" ? "rotate-180" : ""
      }`}
    >
      <div className="relative h-20 md:h-28 section-fade-both opacity-[0.16] drift-slow">
        <HorizonInline />
      </div>
    </div>
  );
}

function HorizonInline() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient id="path-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e8b97a" />
          <stop offset="100%" stopColor="#f1d6a4" />
        </linearGradient>
      </defs>
      <rect width="1200" height="200" fill="url(#path-sky)" />
      <path
        d="M0 140 Q 300 100 600 130 T 1200 120 L 1200 200 L 0 200 Z"
        fill="#365520"
      />
      <path
        d="M0 160 Q 300 130 600 150 T 1200 145 L 1200 200 L 0 200 Z"
        fill="#1f3a1f"
      />
      <circle cx="900" cy="80" r="40" fill="#fbe4b8" opacity="0.9" />
    </svg>
  );
}
