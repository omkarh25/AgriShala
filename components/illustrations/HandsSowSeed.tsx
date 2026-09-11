import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const HandsSowSeed = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>A hand sowing a seed into the earth</title>
    <rect width="800" height="600" fill="#efe7d3" />
    {/* sun */}
    <circle cx="650" cy="120" r="60" fill="#fde4a8" opacity="0.85" />
    {/* earth */}
    <path d="M0 380 Q 400 340 800 380 L 800 600 L 0 600 Z" fill="#8b5a2b" />
    <path d="M0 430 Q 400 400 800 430 L 800 600 L 0 600 Z" fill="#5c3a1e" />
    <path d="M0 480 Q 400 460 800 480 L 800 600 L 0 600 Z" fill="#3f2814" />
    {/* soil texture */}
    <g fill="#2a1a0d" opacity="0.5">
      {Array.from({ length: 50 }).map((_, i) => {
        const x = (i * 33) % 800;
        const y = 400 + ((i * 17) % 180);
        return <circle key={i} cx={x} cy={y} r="2" />;
      })}
    </g>
    {/* hand */}
    <g transform="translate(400 320) rotate(-15)">
      <path
        d="M-180 0 Q -160 -90 -80 -110 Q 0 -130 80 -100 Q 130 -50 110 30 Q 60 70 -20 60 Q -120 60 -180 0 Z"
        fill="#c19a6b"
        stroke="#5c3a1e"
        strokeWidth="2"
      />
      {/* palm lines */}
      <path
        d="M-140 -10 q 100 -20 200 0 M-130 20 q 90 -10 190 0"
        stroke="#8b5a2b"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      {/* seed falling */}
      <g transform="translate(60 -150)">
        <ellipse rx="8" ry="12" fill="#3f2814" />
        <ellipse rx="8" ry="12" fill="none" stroke="#14291a" strokeWidth="1" />
      </g>
    </g>
    {/* sprouting seeds already in soil */}
    <g>
      {[
        [120, 420],
        [220, 430],
        [620, 430],
        [720, 420],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path
            d="M0 0 q -2 -30 0 -60"
            stroke="#365520"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M0 -40 q -10 -3 -16 -12 q 10 -2 16 4 Z" fill="#5d8a36" />
          <path d="M0 -55 q 10 -3 16 -12 q -10 -2 -16 4 Z" fill="#7fa650" />
        </g>
      ))}
    </g>
  </svg>
);

export default HandsSowSeed;
