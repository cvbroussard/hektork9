"use client";

import { useCallback, useRef, useState } from "react";

export function BrandReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maskPos, setMaskPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMaskPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const maskStyle = isHovered
    ? {
        maskImage: `radial-gradient(circle at ${maskPos.x}px ${maskPos.y}px, rgb(0,0,0) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0) 55%)`,
        WebkitMaskImage: `radial-gradient(circle at ${maskPos.x}px ${maskPos.y}px, rgb(0,0,0) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0) 55%)`,
      }
    : {};

  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-schwarz py-20 select-none md:py-28">
      <div
        ref={containerRef}
        className="relative w-full cursor-pointer px-4"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Base text — always visible at low opacity */}
        <div className="font-display whitespace-nowrap text-center text-[clamp(2.5rem,10vw,9rem)] font-bold leading-none tracking-[0.15em] text-kupfer/10">
          HEKTOR K9
        </div>

        {/* Reveal layer — masked by radial gradient following cursor */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-4"
          style={maskStyle}
        >
          <div className="font-display whitespace-nowrap text-center text-[clamp(2.5rem,10vw,9rem)] font-bold leading-none tracking-[0.15em] text-kupfer/50">
            HEKTOR K9
          </div>
        </div>

        {/* SVG noise filter overlay for texture */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]">
          <filter id="brandNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#brandNoise)" />
        </svg>
      </div>
    </div>
  );
}
