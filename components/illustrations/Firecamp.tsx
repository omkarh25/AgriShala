import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const Firecamp = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>A campfire at night with people gathered around</title>
    <defs>
      <radialGradient id="fireGlow" cx="50%" cy="55%" r="55%">
        <stop offset="0%" stopColor="#fde4a8" />
        <stop offset="35%" stopColor="#f0bd6e" />
        <stop offset="100%" stopColor="#1f3a1f" />
      </radialGradient>
      <linearGradient id="night" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#0b180e" />
        <stop offset="100%" stopColor="#14291a" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#night)" />
    <rect width="800" height="600" fill="url(#fireGlow)" opacity="0.85" />
    {/* trees in distance */}
    <g fill="#0b180e">
      <path d="M0 380 L 50 320 L 100 380 Z" />
      <path d="M100 380 L 150 310 L 200 380 Z" />
      <path d="M600 380 L 650 310 L 700 380 Z" />
      <path d="M700 380 L 750 320 L 800 380 Z" />
    </g>
    {/* stars */}
    <g fill="#f7f2e7">
      {[
        [80, 60],
        [200, 100],
        [330, 40],
        [470, 90],
        [620, 50],
        [730, 110],
        [120, 160],
        [560, 180],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" />
      ))}
    </g>
    {/* ground */}
    <ellipse cx="400" cy="600" rx="500" ry="180" fill="#0b180e" opacity="0.8" />
    {/* logs */}
    <g transform="translate(400 470)">
      <rect x="-80" y="-8" width="160" height="16" fill="#3f2814" />
      <rect x="-80" y="-8" width="160" height="16" fill="none" stroke="#5c3a1e" strokeWidth="2" />
      <circle cx="-80" cy="0" r="10" fill="#5c3a1e" />
      <circle cx="80" cy="0" r="10" fill="#5c3a1e" />
      <rect x="-60" y="-22" width="120" height="14" fill="#3f2814" />
      <circle cx="-60" cy="-15" r="8" fill="#5c3a1e" />
      <circle cx="60" cy="-15" r="8" fill="#5c3a1e" />
    </g>
    {/* flames */}
    <g transform="translate(400 440)">
      <path
        d="M0 0 Q -30 -50 -10 -90 Q 0 -70 10 -90 Q 30 -50 0 0 Z"
        fill="#f0bd6e"
      >
        <animate
          attributeName="d"
          dur="1.5s"
          repeatCount="indefinite"
          values="
            M0 0 Q -30 -50 -10 -90 Q 0 -70 10 -90 Q 30 -50 0 0 Z;
            M0 0 Q -34 -60 -8 -100 Q 0 -75 12 -100 Q 28 -55 0 0 Z;
            M0 0 Q -28 -45 -12 -85 Q 0 -65 8 -85 Q 32 -45 0 0 Z
          "
        />
      </path>
      <path
        d="M0 -10 Q -18 -45 -6 -75 Q 0 -60 6 -75 Q 18 -45 0 -10 Z"
        fill="#fde4a8"
      >
        <animate
          attributeName="d"
          dur="1.2s"
          repeatCount="indefinite"
          values="
            M0 -10 Q -18 -45 -6 -75 Q 0 -60 6 -75 Q 18 -45 0 -10 Z;
            M0 -10 Q -20 -50 -4 -82 Q 0 -65 8 -82 Q 16 -50 0 -10 Z;
            M0 -10 Q -16 -40 -8 -70 Q 0 -55 4 -70 Q 20 -40 0 -10 Z
          "
        />
      </path>
    </g>
    {/* sparks */}
    <g fill="#fde4a8">
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={380 + i * 10} cy={350}>
          <animate
            attributeName="cy"
            from="350"
            to="200"
            dur={`${2 + i * 0.3}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0"
            dur={`${2 + i * 0.3}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="2;0.5"
            dur={`${2 + i * 0.3}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </g>
    {/* silhouettes of people */}
    <g fill="#0b180e">
      <g transform="translate(220 510)">
        <circle cx="0" cy="-60" r="14" />
        <path d="M-22 -45 Q 0 -55 22 -45 L 30 30 L -30 30 Z" />
      </g>
      <g transform="translate(580 510)">
        <circle cx="0" cy="-60" r="14" />
        <path d="M-22 -45 Q 0 -55 22 -45 L 30 30 L -30 30 Z" />
      </g>
      <g transform="translate(150 540)">
        <circle cx="0" cy="-50" r="12" />
        <path d="M-18 -38 Q 0 -45 18 -38 L 24 25 L -24 25 Z" />
      </g>
      <g transform="translate(650 540)">
        <circle cx="0" cy="-50" r="12" />
        <path d="M-18 -38 Q 0 -45 18 -38 L 24 25 L -24 25 Z" />
      </g>
    </g>
  </svg>
);

export default Firecamp;
