import { Horizon } from "@/components/illustrations";

/**
 * A reusable seam between page sections. The Horizon SVG (sky →
 * land → soil) sits at low opacity with a soft top/bottom mask so it
 * never reads as a literal illustration — it dissolves into whatever
 * section comes next.
 *
 * Variants:
 *   "sky"   → default horizon, suits cream-to-earth transitions.
 *   "line"  → just the 1px gradient hairline, for tight gaps.
 *   "earth" → mirrored horizon (soil on top), suits dark-to-light.
 */
export default function SectionDivider({
  variant = "sky",
  className = "",
}: {
  variant?: "sky" | "line" | "earth";
  className?: string;
}) {
  if (variant === "line") {
    return (
      <div
        aria-hidden
        className={`section-divider mx-auto max-w-5xl my-0 ${className}`}
      />
    );
  }

  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden pointer-events-none ${
        variant === "earth" ? "rotate-180" : ""
      } ${className}`}
    >
      <div className="relative h-24 md:h-36 section-fade-both opacity-[0.18] drift-slow">
        <Horizon className="w-full h-full" />
      </div>
    </div>
  );
}
