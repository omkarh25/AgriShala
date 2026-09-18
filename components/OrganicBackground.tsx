import React from "react";

/**
 * A faint, layered SVG of organic silhouettes (rolling hills + scattered
 * leaves + horizon line) used as a section background. Designed to be
 * very low-opacity so it reads as "the room behind the words", never
 * as content. Multiple variants so different sections feel distinct
 * without the page becoming loud.
 *
 * Use the `tone` prop to bias the colour family toward cream / earth /
 * forest without introducing a new palette.
 */
export default function OrganicBackground({
  tone = "cream",
  variant = "hills",
  className = "",
}: {
  tone?: "cream" | "earth" | "forest";
  variant?: "hills" | "canopy" | "roots";
  className?: string;
}) {
  const palette = {
    cream: {
      bg: "transparent",
      far: "#a87a4b",
      mid: "#5d8a36",
      near: "#365520",
      accent: "#5c3a1e",
    },
    earth: {
      bg: "transparent",
      far: "#8b5a2b",
      mid: "#5d8a36",
      near: "#365520",
      accent: "#3f2814",
    },
    forest: {
      bg: "transparent",
      far: "#5d8a36",
      mid: "#365520",
      near: "#1f3a1f",
      accent: "#14291a",
    },
  }[tone];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 w-full h-full overflow-hidden ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full drift-slow"
      >
        {/* Top edge: faint topo lines, like a survey map */}
        <g
          stroke={palette.far}
          strokeWidth="1"
          fill="none"
          opacity="0.18"
        >
          <path d="M0 90 Q 400 60 800 100 T 1600 90" />
          <path d="M0 130 Q 400 100 800 140 T 1600 130" />
          <path d="M0 170 Q 400 140 800 180 T 1600 170" />
        </g>

        {variant === "hills" && (
          <>
            {/* Far hills */}
            <path
              d="M0 360 Q 300 280 600 340 Q 900 290 1200 350 T 1600 320 L 1600 600 L 0 600 Z"
              fill={palette.far}
              opacity="0.07"
            />
            {/* Mid hills */}
            <path
              d="M0 430 Q 250 380 500 420 Q 800 360 1100 410 T 1600 400 L 1600 600 L 0 600 Z"
              fill={palette.mid}
              opacity="0.10"
            />
            {/* Near hills */}
            <path
              d="M0 500 Q 350 460 700 500 Q 1050 460 1400 510 L 1600 500 L 1600 600 L 0 600 Z"
              fill={palette.near}
              opacity="0.14"
            />
            {/* Scattered leaf points */}
            <g fill={palette.accent} opacity="0.18">
              {Array.from({ length: 24 }).map((_, i) => {
                const x = (i * 71 + 30) % 1600;
                const y = 110 + ((i * 41) % 130);
                return <circle key={i} cx={x} cy={y} r="1.5" />;
              })}
            </g>
          </>
        )}

        {variant === "canopy" && (
          <>
            {/* Overhead canopy — large soft circles like leaves overhead */}
            <g>
              {Array.from({ length: 40 }).map((_, i) => {
                const cx = (i * 53 + 20) % 1600;
                const cy = ((i * 37) % 200) + 10;
                const r = 18 + ((i * 7) % 22);
                return (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={palette.mid}
                    opacity={0.04 + ((i % 5) * 0.01)}
                  />
                );
              })}
            </g>
            {/* Subtle horizon line */}
            <path
              d="M0 380 Q 800 360 1600 380"
              stroke={palette.far}
              strokeWidth="1"
              fill="none"
              opacity="0.20"
            />
          </>
        )}

        {variant === "roots" && (
          <>
            {/* Underground roots / contour lines */}
            <g
              stroke={palette.accent}
              strokeWidth="1"
              fill="none"
              opacity="0.18"
            >
              <path d="M0 320 Q 200 300 400 320 T 800 320 T 1200 320 T 1600 320" />
              <path d="M0 360 Q 200 340 400 360 T 800 360 T 1200 360 T 1600 360" />
              <path d="M0 400 Q 200 380 400 400 T 800 400 T 1200 400 T 1600 400" />
              <path d="M0 440 Q 200 420 400 440 T 800 440 T 1200 440 T 1600 440" />
              <path d="M0 480 Q 200 460 400 480 T 800 480 T 1200 480 T 1600 480" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
}
