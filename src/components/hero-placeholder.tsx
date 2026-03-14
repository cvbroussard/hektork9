/**
 * Hero image placeholders with shot direction notes.
 * Replace each with real photography matching the described shot.
 */

interface PlaceholderProps {
  aspect?: string;
  shotDirection: string;
  shotDetails: string[];
  label: string;
  className?: string;
}

export function HeroPlaceholder({
  aspect = "aspect-[16/9]",
  shotDirection,
  shotDetails,
  label,
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`photo-placeholder group relative flex items-center justify-center rounded-lg border border-border ${aspect} ${className}`}
    >
      {/* Decorative frame corners */}
      <Corner position="top-left" />
      <Corner position="top-right" />
      <Corner position="bottom-left" />
      <Corner position="bottom-right" />

      <div className="relative z-10 px-6 py-8 text-center">
        <div className="font-mono text-[10px] tracking-[0.3em] text-kupfer/60">
          {label}
        </div>
        <div className="font-display mt-3 text-sm font-semibold text-weiss/40">
          {shotDirection}
        </div>
        <div className="mx-auto mt-4 max-w-xs space-y-1.5">
          {shotDetails.map((detail, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-left text-[11px] text-nebel/50"
            >
              <span className="mt-0.5 block h-1 w-1 shrink-0 rounded-full bg-kupfer/30" />
              {detail}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Corner({ position }: { position: string }) {
  const posClasses: Record<string, string> = {
    "top-left": "top-3 left-3 border-t border-l",
    "top-right": "top-3 right-3 border-t border-r",
    "bottom-left": "bottom-3 left-3 border-b border-l",
    "bottom-right": "bottom-3 right-3 border-b border-r",
  };

  return (
    <div
      className={`absolute h-4 w-4 border-kupfer/20 ${posClasses[position]}`}
    />
  );
}
