import type { Metadata } from "next";
import Link from "next/link";
import { HeroPlaceholder } from "@/components/hero-placeholder";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Client testimonials and training results from Hektor K9 in West Palm Beach.",
};

const testimonials = [
  {
    quote:
      "Our German Shepherd was reactive on leash and impossible to walk in our neighborhood. After six sessions, he heels without pulling and ignores other dogs completely. The change was dramatic.",
    client: "West Palm Beach client",
    dog: "German Shepherd, 2 years",
    program: "Obedience Program",
  },
  {
    quote:
      "We brought our puppy in at 10 weeks. The structure and socialization work was exactly what we needed. She's now confident, calm indoors, and walks beautifully on leash at 6 months.",
    client: "Jupiter client",
    dog: "Belgian Malinois, 10 weeks at start",
    program: "Foundation Program",
  },
  {
    quote:
      "Charles doesn't just train the dog — he teaches you how to maintain it. Every session had clear goals and homework. Our dog passed the CGC test on the first attempt.",
    client: "Wellington client",
    dog: "Labrador Retriever, 18 months",
    program: "CGC Test Prep & Evaluation",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-texture relative border-b border-border pt-16">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs tracking-[0.3em] text-kupfer">
            RESULTS
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-weiss md:text-5xl">
            The work speaks.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stahl">
            Real results from real clients in West Palm Beach. No stock photos.
            No scripts.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-kohle p-8 md:p-10"
              >
                <blockquote className="text-lg leading-relaxed text-weiss">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <hr className="my-6" />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                  <span className="text-sm font-medium text-stahl">
                    {t.client}
                  </span>
                  <span className="text-sm text-nebel">{t.dog}</span>
                  <span className="font-mono text-xs text-kupfer">
                    {t.program}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-kupfer">
                5.0
              </span>
              <p className="mt-2 text-sm text-stahl">Google Rating</p>
            </div>
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-kupfer">
                3+
              </span>
              <p className="mt-2 text-sm text-stahl">Years Experience</p>
            </div>
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-kupfer">
                AKC
              </span>
              <p className="mt-2 text-sm text-stahl">CGC Evaluator</p>
            </div>
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-kupfer">
                100%
              </span>
              <p className="mt-2 text-sm text-stahl">CGC Pass Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video/media placeholder */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs tracking-[0.3em] text-kupfer">
            TRAINING IN ACTION
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-weiss">
            See the work
          </h2>
          <p className="mt-4 text-stahl">
            Follow our training sessions and results on social media.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <HeroPlaceholder
              aspect="aspect-square"
              label="RESULTS — HEEL"
              shotDirection="Perfect heel: side view"
              shotDetails={[
                "Dog shoulder aligned with handler's leg",
                "Both moving, dog looking up at handler",
                "Low angle, tracking shot if video",
                "Outdoor — sidewalk, park path, or field",
              ]}
            />
            <HeroPlaceholder
              aspect="aspect-square"
              label="RESULTS — NEUTRALITY"
              shotDirection="Environmental neutrality"
              shotDetails={[
                "Dog in place/down-stay with distractions visible",
                "Another dog walking by in background (out of focus)",
                "The subject dog is completely still and composed",
                "This proves the training — show the contrast",
              ]}
            />
            <HeroPlaceholder
              aspect="aspect-square"
              label="RESULTS — RECALL"
              shotDirection="Off-leash recall"
              shotDetails={[
                "Dog mid-run toward camera on recall",
                "Compressed telephoto shot (135mm+)",
                "Athletic, powerful, controlled — not chaotic",
                "Open field or park, clean background",
              ]}
            />
          </div>
          <div className="mt-8 flex gap-4">
            <a
              href="https://instagram.com/hektor_k9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display rounded border border-border px-6 py-3 text-sm font-medium tracking-wide text-stahl no-underline transition-colors hover:border-stahl hover:text-weiss"
            >
              INSTAGRAM
            </a>
            <a
              href="https://youtube.com/@Hektork9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display rounded border border-border px-6 py-3 text-sm font-medium tracking-wide text-stahl no-underline transition-colors hover:border-stahl hover:text-weiss"
            >
              YOUTUBE
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-texture relative bg-kohle">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-weiss">
            Ready for results like these?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stahl">
            Book a consultation and we&apos;ll show you exactly what&apos;s
            possible for your dog.
          </p>
          <Link
            href="/book"
            className="font-display mt-8 inline-flex items-center justify-center rounded bg-kupfer px-10 py-4 text-sm font-semibold tracking-wide text-schwarz no-underline transition-colors hover:bg-kupfer-light"
          >
            BOOK A CONSULTATION
          </Link>
        </div>
      </section>
    </>
  );
}
