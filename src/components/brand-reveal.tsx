"use client";

export function BrandReveal() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-schwarz py-24 select-none md:py-32">
      {/* The large logotype */}
      <div className="brand-reveal-container relative cursor-pointer px-6">
        <div className="font-display text-center text-[clamp(3rem,12vw,10rem)] font-bold leading-none tracking-[0.15em] text-kupfer/15">
          HEKTOR
        </div>
        <div className="font-display text-center text-[clamp(1.5rem,6vw,5rem)] font-medium tracking-[0.4em] text-kupfer/10">
          K9
        </div>

        {/* Gradient overlay that slides away on hover */}
        <div className="brand-reveal-mask pointer-events-none absolute inset-0" />
      </div>

      <style>{`
        .brand-reveal-mask {
          background: linear-gradient(
            180deg,
            rgba(19, 18, 16, 0.95) 0%,
            rgba(19, 18, 16, 0.85) 40%,
            rgba(19, 18, 16, 0.6) 70%,
            rgba(19, 18, 16, 0) 100%
          );
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .brand-reveal-container:hover .brand-reveal-mask {
          opacity: 0;
          transform: translateY(-100%);
        }

        .brand-reveal-container:hover div:first-child {
          color: rgba(184, 115, 51, 0.6);
          transition: color 1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .brand-reveal-container:hover div:nth-child(2) {
          color: rgba(184, 115, 51, 0.4);
          transition: color 1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .brand-reveal-container div:first-child,
        .brand-reveal-container div:nth-child(2) {
          transition: color 0.6s ease;
        }
      `}</style>
    </div>
  );
}
