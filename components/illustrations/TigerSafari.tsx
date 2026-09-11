import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const TigerSafari = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>Tiger walking through the BRT Tiger Reserve canopy</title>
    <defs>
      <linearGradient id="canopy" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#14291a" />
        <stop offset="100%" stopColor="#365520" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#canopy)" />
    {/* moonlight */}
    <circle cx="640" cy="120" r="60" fill="#fbe4b8" opacity="0.85" />
    <circle cx="640" cy="120" r="100" fill="#fbe4b8" opacity="0.15" />
    {/* tree trunks */}
    <g fill="#0b180e">
      <rect x="60" y="180" width="20" height="420" />
      <rect x="180" y="100" width="16" height="500" />
      <rect x="700" y="200" width="18" height="400" />
      <rect x="320" y="60" width="14" height="540" />
    </g>
    {/* foliage patches */}
    <g fill="#1f3a1f" opacity="0.85">
      <circle cx="120" cy="220" r="60" />
      <circle cx="220" cy="160" r="80" />
      <circle cx="360" cy="120" r="70" />
      <circle cx="660" cy="220" r="90" />
      <circle cx="500" cy="180" r="60" />
    </g>
    <g fill="#365520" opacity="0.6">
      <circle cx="160" cy="280" r="40" />
      <circle cx="280" cy="240" r="50" />
      <circle cx="500" cy="280" r="55" />
      <circle cx="700" cy="300" r="40" />
    </g>
    {/* ground */}
    <path d="M0 480 Q 400 440 800 490 L 800 600 L 0 600 Z" fill="#3f2814" />
    <path d="M0 520 Q 400 490 800 525 L 800 600 L 0 600 Z" fill="#2a1a0d" />
    {/* tiger */}
    <g transform="translate(380 430)">
      {/* body */}
      <path
        d="M-100 0 Q -80 -40 -20 -45 Q 50 -50 80 -25 Q 100 -5 80 15 Q 40 25 -20 25 Q -80 25 -100 10 Z"
        fill="#a87a4b"
      />
      {/* head */}
      <ellipse cx="95" cy="-20" rx="28" ry="22" fill="#c19a6b" />
      {/* ears */}
      <path d="M85 -38 l -6 -12 l 12 4 Z" fill="#5c3a1e" />
      <path d="M105 -38 l 6 -12 l -12 4 Z" fill="#5c3a1e" />
      {/* stripes */}
      <g stroke="#3f2814" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M-90 -15 q 6 12 0 22" />
        <path d="M-60 -22 q 6 14 0 26" />
        <path d="M-30 -28 q 6 14 0 28" />
        <path d="M0 -30 q 6 14 0 28" />
        <path d="M30 -28 q 6 14 0 28" />
        <path d="M60 -22 q 6 12 0 24" />
        {/* face stripes */}
        <path d="M85 -25 q 6 -4 12 0" />
        <path d="M88 -12 q 6 -4 12 0" />
      </g>
      {/* eye */}
      <circle cx="100" cy="-22" r="2.5" fill="#14291a" />
      {/* legs */}
      <rect x="-80" y="10" width="14" height="35" fill="#a87a4b" />
      <rect x="-40" y="10" width="14" height="35" fill="#a87a4b" />
      <rect x="30" y="10" width="14" height="35" fill="#a87a4b" />
      <rect x="60" y="10" width="14" height="35" fill="#a87a4b" />
      {/* tail */}
      <path
        d="M-100 0 q -40 -10 -60 -40 q -10 -20 0 -30"
        stroke="#a87a4b"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
    </g>
    {/* fireflies */}
    <g fill="#fde4a8">
      <circle cx="200" cy="300" r="2.5">
        <animate
          attributeName="opacity"
          values="0.2;1;0.2"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="550" cy="350" r="2.5">
        <animate
          attributeName="opacity"
          values="0.2;1;0.2"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="450" cy="280" r="2">
        <animate
          attributeName="opacity"
          values="0.1;1;0.1"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="700" cy="380" r="2.5">
        <animate
          attributeName="opacity"
          values="0.2;1;0.2"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

export default TigerSafari;
