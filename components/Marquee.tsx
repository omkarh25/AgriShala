"use client";

/**
 * A horizontal marquee strip — a typewriter-like rhythm break
 * between heavy sections. Pure CSS animation, no JS needed.
 *
 * Two variants:
 *   - default (`light`): pale earth background, dark text.
 *     Sits between two light sections.
 *   - `dark`: deep forest background, light text.
 *     Sits between two sections where one side is dark.
 *
 * Padding, opacity and the divider glyph are tuned for the
 * longer items now used (e.g. "Sixteen documents").
 */
export default function Marquee({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`relative w-full py-10 md:py-12 overflow-hidden border-y ${
        dark
          ? "bg-forest-900 border-forest-700/60 text-forest-300"
          : "bg-earth-100/70 border-earth-200/70 text-earth-700"
      }`}
    >
      <div className="marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 px-10 font-display text-2xl md:text-3xl italic whitespace-nowrap"
          >
            {item}
            <span aria-hidden className="text-3xl opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
