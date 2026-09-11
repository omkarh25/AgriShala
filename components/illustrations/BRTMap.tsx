import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const BRTMap = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>BRT Tiger Reserve, Karnataka — illustrated map</title>
    <rect width="800" height="600" fill="#f1e8d9" />
    {/* topography contour lines */}
    <g stroke="#c19a6b" strokeWidth="1.2" fill="none" opacity="0.6">
      <path d="M40 100 Q 200 60 400 110 T 760 90" />
      <path d="M40 160 Q 200 130 400 170 T 760 150" />
      <path d="M40 220 Q 200 200 400 230 T 760 210" />
      <path d="M40 280 Q 200 260 400 290 T 760 270" />
      <path d="M40 340 Q 200 320 400 350 T 760 330" />
      <path d="M40 400 Q 200 380 400 410 T 760 390" />
      <path d="M40 460 Q 200 440 400 470 T 760 450" />
      <path d="M40 520 Q 200 500 400 530 T 760 510" />
    </g>
    {/* forest mass */}
    <path
      d="M120 200 Q 240 150 380 200 Q 540 160 680 220 Q 720 360 600 460 Q 460 510 320 470 Q 180 430 120 340 Z"
      fill="#365520"
      opacity="0.9"
    />
    {/* inner darker zones */}
    <path
      d="M180 250 Q 320 220 460 260 Q 600 240 620 340 Q 540 410 400 410 Q 260 400 200 320 Z"
      fill="#1f3a1f"
    />
    {/* river */}
    <path
      d="M60 300 Q 180 320 240 380 Q 320 460 460 480 Q 600 490 740 460"
      stroke="#3a6fb8"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />
    {/* trees scattered */}
    <g fill="#5d8a36">
      {Array.from({ length: 30 }).map((_, i) => {
        const x = 130 + ((i * 47) % 580);
        const y = 200 + ((i * 31) % 240);
        return <circle key={i} cx={x} cy={y} r={6 + (i % 3) * 2} />;
      })}
    </g>
    {/* label: BRT */}
    <g transform="translate(360 280)">
      <circle r="50" fill="#a87a4b" opacity="0.95" />
      <text
        textAnchor="middle"
        y="6"
        fontFamily="serif"
        fontSize="22"
        fontWeight="700"
        fill="#f7f2e7"
        letterSpacing="2"
      >
        BRT
      </text>
    </g>
    {/* location pin */}
    <g transform="translate(420 340)">
      <path
        d="M0 0 C -12 -20 -20 -30 -20 -40 A 20 20 0 1 1 20 -40 C 20 -30 12 -20 0 0 Z"
        fill="#5d8a36"
      />
      <circle cx="0" cy="-40" r="6" fill="#f7f2e7" />
    </g>
    {/* compass */}
    <g transform="translate(700 100)" stroke="#3f2814" fill="#3f2814">
      <circle r="30" fill="none" strokeWidth="1.5" />
      <polygon points="0,-26 4,0 0,26 -4,0" fill="#3f2814" />
      <polygon points="0,-26 4,0 0,0" fill="#a87a4b" />
      <text x="-4" y="-32" fontSize="10" fontFamily="serif">
        N
      </text>
    </g>
    {/* Karnataka boundary hint */}
    <path
      d="M40 60 L 760 60 L 760 560 L 40 560 Z"
      stroke="#5c3a1e"
      strokeWidth="1.5"
      strokeDasharray="6 6"
      fill="none"
      opacity="0.5"
    />
    <text x="60" y="80" fontFamily="serif" fontSize="14" fill="#5c3a1e">
      KARNATAKA
    </text>
  </svg>
);

export default BRTMap;
