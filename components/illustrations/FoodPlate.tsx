import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const FoodPlate = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>A plate of farm-fresh, locally sourced breakfast</title>
    <rect width="800" height="600" fill="#efe7d3" />
    {/* table grain */}
    <g opacity="0.15" stroke="#5c3a1e" strokeWidth="0.8">
      {Array.from({ length: 30 }).map((_, i) => (
        <line
          key={i}
          x1={0}
          x2={800}
          y1={i * 20 + (i % 2 ? 7 : 0)}
          y2={i * 20 + (i % 2 ? 7 : 0)}
        />
      ))}
    </g>
    {/* shadow */}
    <ellipse cx="400" cy="500" rx="280" ry="22" fill="#000" opacity="0.12" />
    {/* plate */}
    <ellipse cx="400" cy="360" rx="280" ry="80" fill="#f7f2e7" />
    <ellipse cx="400" cy="358" rx="280" ry="80" fill="#fff" />
    <ellipse
      cx="400"
      cy="358"
      rx="240"
      ry="64"
      fill="none"
      stroke="#c19a6b"
      strokeWidth="2"
      opacity="0.5"
    />
    {/* bowl of dal */}
    <ellipse cx="280" cy="340" rx="90" ry="35" fill="#5c3a1e" />
    <ellipse cx="280" cy="338" rx="86" ry="32" fill="#a87a4b" />
    <ellipse cx="280" cy="334" rx="78" ry="26" fill="#e3cfae" />
    <path
      d="M205 334 q 75 -25 150 0"
      stroke="#5c3a1e"
      strokeWidth="2"
      fill="none"
      opacity="0.4"
    />
    {/* dosa */}
    <path
      d="M380 350 Q 470 290 580 320 Q 640 360 580 380 Q 470 410 380 380 Z"
      fill="#e3cfae"
    />
    <path
      d="M390 350 Q 470 300 575 325"
      stroke="#c19a6b"
      strokeWidth="2"
      fill="none"
      opacity="0.5"
    />
    {/* chutney bowl */}
    <ellipse cx="540" cy="370" rx="60" ry="22" fill="#5c3a1e" />
    <ellipse cx="540" cy="368" rx="56" ry="20" fill="#365520" />
    {/* idli stack */}
    <ellipse cx="650" cy="360" rx="48" ry="18" fill="#f7f2e7" />
    <ellipse cx="650" cy="355" rx="48" ry="18" fill="#fff" />
    <ellipse cx="650" cy="345" rx="44" ry="16" fill="#f7f2e7" />
    <ellipse cx="650" cy="340" rx="44" ry="16" fill="#fff" />
    <ellipse cx="650" cy="330" rx="40" ry="14" fill="#f7f2e7" />
    {/* coffee cup */}
    <g transform="translate(180 410)">
      <rect x="0" y="0" width="80" height="60" rx="6" fill="#f7f2e7" />
      <rect x="0" y="0" width="80" height="60" rx="6" fill="none" stroke="#5c3a1e" strokeWidth="2" />
      <ellipse cx="40" cy="0" rx="40" ry="10" fill="#3f2814" />
      <path
        d="M80 15 q 25 0 25 20 q 0 20 -25 20"
        stroke="#5c3a1e"
        strokeWidth="3"
        fill="none"
      />
      {/* steam */}
      <path
        d="M25 -10 q 5 -10 0 -20 q -5 -10 0 -20 M45 -10 q 5 -10 0 -20 q -5 -10 0 -20 M65 -10 q 5 -10 0 -20 q -5 -10 0 -20"
        stroke="#a87a4b"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
    </g>
    {/* leaf garnish */}
    <path
      d="M310 330 q 20 -20 50 -10 q -10 25 -50 10 Z"
      fill="#5d8a36"
    />
    <path
      d="M315 328 q 25 -10 45 -5"
      stroke="#365520"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

export default FoodPlate;
