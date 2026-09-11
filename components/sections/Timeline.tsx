"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, useGsap } from "@/lib/useGsap";
import { Sapling } from "@/components/illustrations";
import { chapters } from "./timelineData";

/**
 * The two days — seven chapters inside an isolated snap-scroller.
 *
 * Scrolling past this section's heading opens a "scrollytelling"
 * mode: each chapter fills the viewport and snaps into place as you
 * flick-scroll, swipe, or use the arrow keys. A progress rail on the
 * right tracks which chapter you're on. Outside this section, normal
 * page scroll is preserved.
 */
export default function Timeline() {
  const root = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useGsap();

  // GSAP animations — parallax + line reveal INSIDE the snap region.
  // We pass `scroller` to every ScrollTrigger so they bind to the
  // nested scroller, not the document.
  useEffect(() => {
    const el = root.current;
    const scroller = scrollerRef.current;
    if (!el || !scroller) return;

    const ctx = gsap.context(() => {
      // Heading reveal (outside the snap region, plays normally)
      gsap.fromTo(
        ".timeline-heading",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-heading",
            start: "top 85%",
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".chapter").forEach((chapter) => {
        const illustration = chapter.querySelector<HTMLElement>(
          ".chapter-illustration"
        );
        const lines = chapter.querySelectorAll<HTMLElement>(".chapter-line");

        if (illustration) {
          gsap.fromTo(
            illustration,
            { yPercent: 10, scale: 1.05 },
            {
              yPercent: -10,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: chapter,
                scroller,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        lines.forEach((line) => {
          gsap.fromTo(
            line,
            { yPercent: 110 },
            {
              yPercent: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: line,
                scroller,
                start: "top 90%",
              },
            }
          );
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  // Track the currently-visible chapter inside the snap scroller
  // so we can highlight the progress rail and the active dot.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio.
        const sorted = [...entries].sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        );
        const best = sorted[0];
        if (best && best.isIntersecting) {
          const idx = Number((best.target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        }
      },
      {
        root: scroller,
        threshold: [0.25, 0.5, 0.75],
      }
    );

    const chapterEls = scroller.querySelectorAll<HTMLElement>(".chapter");
    chapterEls.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation inside the snap region
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onKey = (e: KeyboardEvent) => {
      const rect = scroller.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      const chapterEls = scroller.querySelectorAll<HTMLElement>(".chapter");
      const currentScroll = scroller.scrollTop;
      const viewportH = scroller.clientHeight;

      let currentIdx = 0;
      chapterEls.forEach((c, i) => {
        if (Math.abs(c.offsetTop - currentScroll) < viewportH / 2) {
          currentIdx = i;
        }
      });

      let targetIdx = currentIdx;
      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " "
      ) {
        targetIdx = Math.min(currentIdx + 1, chapterEls.length - 1);
        e.preventDefault();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        targetIdx = Math.max(currentIdx - 1, 0);
        e.preventDefault();
      } else if (e.key === "Home") {
        targetIdx = 0;
        e.preventDefault();
      } else if (e.key === "End") {
        targetIdx = chapterEls.length - 1;
        e.preventDefault();
      }

      if (targetIdx !== currentIdx) {
        chapterEls[targetIdx]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click on a chapter dot to scroll to that chapter
  const goTo = (idx: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const chapter = scroller.querySelectorAll<HTMLElement>(".chapter")[idx];
    chapter?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={root}
      id="two-days"
      className="relative w-full py-28 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-12 md:mb-20">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.4em] text-earth-700 mb-4">
              Two days · Seven chapters
            </p>
            <div className="flex items-center gap-3 text-earth-700/70">
              <Sapling />
              <span className="text-xs uppercase tracking-[0.4em]">
                A field journal
              </span>
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="timeline-heading font-display text-5xl md:text-7xl font-light leading-[1.05] text-forest-900 overflow-hidden">
              <span className="inline-block">What the two</span>
              <br />
              <span className="inline-block italic text-earth-700">
                days feel like.
              </span>
            </h2>
            <p className="mt-8 font-serif text-lg leading-relaxed text-forest-800/85 max-w-2xl">
              Scroll, swipe, or use your arrow keys. Each chapter will snap
              into place like the page of a book being turned.
            </p>
          </div>
        </div>
      </div>

      {/* Snap-scroller wrapper — isolated from the rest of the page */}
      <div className="relative">
        <div
          ref={scrollerRef}
          className="timeline-scroller relative h-[100svh] w-full overflow-y-scroll snap-y snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {chapters.map((c, i) => {
            const Illustration = c.Illustration;
            const reverse = i % 2 === 1;
            return (
              <article
                key={c.number}
                data-index={i}
                className={`chapter relative w-full h-[100svh] min-h-[640px] snap-start snap-always overflow-hidden flex items-center bg-gradient-to-b ${c.accent} to-transparent`}
              >
                <div className="mx-auto max-w-7xl w-full px-6 lg:px-12">
                <div
                  className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
                    reverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="md:col-span-7 relative aspect-[4/3] rounded-sm overflow-hidden border border-earth-200/60">
                    <div className="chapter-illustration absolute inset-0">
                      <Illustration className="w-full h-full" />
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-display text-6xl md:text-7xl text-earth-700/40 leading-none">
                        {c.number}
                      </span>
                      <span className="text-xs uppercase tracking-[0.4em] text-earth-700">
                        {c.day}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl font-light leading-[1.1] text-forest-900 mb-4">
                      <span className="split-line block overflow-hidden">
                        <span className="chapter-line inline-block">
                          {c.title}
                        </span>
                      </span>
                      {c.italic && (
                        <span className="split-line block overflow-hidden mt-2">
                          <span className="chapter-line inline-block italic text-earth-700 text-xl md:text-2xl">
                            {c.italic}
                          </span>
                        </span>
                      )}
                    </h3>
                    <p className="font-serif text-lg leading-relaxed text-forest-800/90 mt-4">
                      {c.body}
                    </p>
                  </div>
                </div>
              </div>

              {/* First-chapter scroll hint */}
              {i === 0 && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-earth-700/60 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-[0.4em]">
                    Scroll
                  </span>
                  <span className="block w-px h-8 bg-earth-700/40 animate-pulse" />
                </div>
              )}
            </article>
          );
        })}
        </div>

        {/* Progress rail (right side) */}
        <nav
          aria-label="Chapters"
          className="hidden md:flex flex-col items-center gap-3 absolute top-1/2 -translate-y-1/2 right-6 lg:right-10 z-10"
        >
          {chapters.map((c, i) => (
            <button
              key={c.number}
              onClick={() => goTo(i)}
              aria-label={`Go to chapter ${c.number}: ${c.title}`}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <span
                className={`hidden lg:block text-xs uppercase tracking-[0.3em] transition-all duration-300 ${
                  activeIndex === i
                    ? "text-earth-700 opacity-100 translate-x-0"
                    : "text-earth-700/50 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                }`}
              >
                {c.title}
              </span>
              <span
                className={`relative block rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-3 h-3 bg-forest-700"
                    : "w-2 h-2 bg-earth-400 group-hover:bg-earth-600"
                }`}
              >
                {activeIndex === i && (
                  <span className="absolute inset-0 rounded-full bg-forest-700/30 animate-ping" />
                )}
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile bottom progress bar */}
        <div className="md:hidden absolute left-0 right-0 bottom-0 h-1 bg-earth-200/60">
          <div
            className="h-full bg-forest-700 transition-all duration-500"
            style={{
              width: `${((activeIndex + 1) / chapters.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
