import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const TreeOfSeasons = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>Tree of seasonal crops — four seasons across one banyan</title>
    <rect width="800" height="600" fill="#f7f2e7" />
    {/* ground */}
    <path d="M0 460 Q 400 420 800 470 L 800 600 L 0 600 Z" fill="#8b5a2b" />
    {/* trunk */}
    <path d="M380 460 L 420 460 L 430 200 L 370 200 Z" fill="#5c3a1e" />
    {/* branches */}
    <g stroke="#5c3a1e" strokeWidth="6" fill="none" strokeLinecap="round">
      <path d="M400 280 Q 250 240 200 150" />
      <path d="M400 280 Q 550 240 600 150" />
      <path d="M400 240 Q 320 130 350 80" />
      <path d="M400 240 Q 480 130 450 80" />
      <path d="M400 320 Q 250 340 150 380" />
      <path d="M400 320 Q 550 340 650 380" />
    </g>
    {/* spring quadrant (top-left): pink blossoms */}
    <g>
      {Array.from({ length: 25 }).map((_, i) => {
        const x = 150 + ((i * 19) % 130);
        const y = 100 + ((i * 17) % 130);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={5}
            fill="#e89bb0"
            opacity="0.85"
          />
        );
      })}
    </g>
    {/* summer (top-right): bright leaves */}
    <g fill="#5d8a36">
      {Array.from({ length: 30 }).map((_, i) => {
        const x = 510 + ((i * 21) % 140);
        const y = 100 + ((i * 13) % 130);
        return <circle key={i} cx={x} cy={y} r={8} />;
      })}
    </g>
    {/* monsoon (bottom-left): heavy green leaves + drops */}
    <g fill="#365520">
      {Array.from({ length: 30 }).map((_, i) => {
        const x = 100 + ((i * 23) % 140);
        const y = 300 + ((i * 13) % 120);
        return <circle key={i} cx={x} cy={y} r={9} />;
      })}
    </g>
    <g fill="#3a6fb8" opacity="0.8">
      {Array.from({ length: 20 }).map((_, i) => (
        <ellipse
          key={i}
          cx={120 + ((i * 29) % 180)}
          cy={300 + ((i * 19) % 140)}
          rx="2"
          ry="4"
        />
      ))}
    </g>
    {/* harvest (bottom-right): golden fruits */}
    <g>
      {Array.from({ length: 20 }).map((_, i) => {
        const x = 530 + ((i * 23) % 150);
        const y = 300 + ((i * 17) % 130);
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r="9" fill="#f0bd6e" />
            <path d="M-3 -9 q 6 -3 6 0" stroke="#365520" strokeWidth="2" fill="none" />
          </g>
        );
      })}
    </g>
    {/* quadrant labels */}
    <g
      fontFamily="serif"
      fontSize="14"
      fill="#5c3a1e"
      letterSpacing="2"
      opacity="0.7"
    >
      <text x="60" y="50">SPRING</text>
      <text x="640" y="50">SUMMER</text>
      <text x="60" y="290">MONSOON</text>
      <text x="640" y="290">HARVEST</text>
    </g>
  </svg>
);

export default TreeOfSeasons;
