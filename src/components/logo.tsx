export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-baseline gap-1 ${className}`}>
      <span className="font-display text-xl font-bold tracking-[0.2em] text-weiss">
        HEKTOR
      </span>
      <span className="font-display text-sm font-medium tracking-wider text-kupfer">
        K9
      </span>
    </div>
  );
}

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="12" fill="#1A1A1A" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#B87333"
        fontFamily="var(--font-space-grotesk), system-ui"
        fontWeight="700"
        fontSize="32"
        letterSpacing="2"
      >
        HK9
      </text>
    </svg>
  );
}
