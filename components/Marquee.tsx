"use client";

/**
 * A horizontal marquee strip — a typewriter-like rhythm break
 * between heavy sections. Pure CSS animation, no JS needed.
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
      className={`relative w-full py-8 md:py-10 overflow-hidden border-y ${
        dark
          ? "bg-forest-900 border-forest-700 text-forest-300"
          : "bg-earth-100 border-earth-200 text-earth-700"
      }`}
    >
      <div className="marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 font-display text-2xl md:text-3xl italic whitespace-nowrap"
          >
            {item}
            <span aria-hidden className="text-3xl opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
