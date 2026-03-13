import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Dog training programs and pricing. Foundation, obedience, comprehensive, and CGC certification programs in West Palm Beach.",
};

const programs = [
  {
    name: "Foundation Program",
    code: "HK9-FND",
    focus: "Puppy Imprinting & Development",
    age: "8 weeks – 5 months",
    sessions: 6,
    pricePerSession: "$275",
    totalPrice: "$1,650",
    outcomes: [
      "Environmental neutrality — calm around new sounds, surfaces, and stimuli",
      "Impulse control foundations — waiting for food, thresholds, and leash pressure",
      "Early leash communication and structured walking",
      "The \"off switch\" — settling on command indoors",
      "Socialization framework — confident, not fearful or over-excited",
      "House manners and crate conditioning",
    ],
    note: "The most impactful investment you can make in a puppy. This window closes fast — the cognitive development period between 8-20 weeks shapes behavior for life.",
  },
  {
    name: "Obedience Program",
    code: "HK9-OBD",
    focus: "Advanced Obedience & Off-Leash Reliability",
    age: "6 months+",
    sessions: 6,
    pricePerSession: "$250",
    totalPrice: "$1,500",
    outcomes: [
      "Precision heel — on and off leash",
      "Reliable recall under real-world distraction",
      "Threshold discipline — no door bolting, no gate crashing",
      "Duration \"place\" and \"down-stay\" commands",
      "Leash reactivity resolution",
      "Public access confidence",
    ],
    note: "Six sessions of focused, structured work. Each session builds on the last. You'll see measurable progress by session three.",
  },
  {
    name: "Comprehensive Program",
    code: "HK9-CMP",
    focus: "Full Behavioral Transformation",
    age: "6 months+",
    sessions: 10,
    pricePerSession: "$225",
    totalPrice: "$2,250",
    featured: true,
    outcomes: [
      "Everything in the Obedience Program",
      "Advanced distraction proofing across multiple environments",
      "Behavioral modification for anxiety, reactivity, or resource guarding",
      "Off-leash reliability in high-distraction settings",
      "Handler coaching — teaching you to maintain and build on results",
      "Real-world testing at parks, outdoor dining, and public spaces",
    ],
    note: "Our most thorough program. Ten sessions give us the time to address complex behavioral issues and proof obedience across varied, challenging environments.",
  },
  {
    name: "CGC Test Prep & Evaluation",
    code: "HK9-CGC",
    focus: "AKC Canine Good Citizen Certification",
    age: "All ages",
    sessions: 6,
    pricePerSession: "$300",
    totalPrice: "$1,800",
    outcomes: [
      "All 10 CGC test items practiced and refined",
      "Accepting a friendly stranger",
      "Sitting politely for petting",
      "Appearance and grooming tolerance",
      "Walking through a crowd",
      "Official AKC CGC Evaluation included in the program",
    ],
    note: "We both train and certify. As an AKC CGC Evaluator, Charles administers the official test — so you get preparation and evaluation in one cohesive program.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border pt-16">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs tracking-[0.3em] text-kupfer">
            PROGRAMS & PRICING
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-weiss md:text-5xl">
            Transparent pricing.
            <br />
            <span className="text-kupfer">Structured results.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stahl">
            Every program has a clear scope, a defined number of sessions, and
            a fixed price. No hidden fees. No upsells mid-program.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col gap-12">
            {programs.map((program) => (
              <div
                key={program.code}
                className={`rounded-lg border bg-kohle p-8 md:p-10 ${
                  program.featured
                    ? "border-kupfer"
                    : "border-border"
                }`}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <p className="font-mono text-xs text-kupfer">
                        {program.code}
                      </p>
                      {program.featured && (
                        <span className="rounded bg-kupfer px-2 py-0.5 text-xs font-semibold text-schwarz">
                          BEST VALUE
                        </span>
                      )}
                    </div>
                    <h2 className="font-display mt-1 text-2xl font-bold text-weiss">
                      {program.name}
                    </h2>
                    <p className="text-sm text-stahl">{program.focus}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-3xl font-bold text-kupfer">
                      {program.totalPrice}
                    </span>
                    <p className="mt-1 text-xs text-nebel">
                      {program.sessions} sessions &middot;{" "}
                      {program.pricePerSession}/session
                    </p>
                  </div>
                </div>

                <hr className="my-6" />

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="font-display mb-3 text-xs font-semibold tracking-[0.15em] text-stahl">
                      WHAT YOU GET
                    </h3>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2 text-sm text-nebel"
                        >
                          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-kupfer" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display mb-3 text-xs font-semibold tracking-[0.15em] text-stahl">
                      DETAILS
                    </h3>
                    <div className="space-y-3 text-sm text-nebel">
                      <div className="flex justify-between border-b border-border pb-2">
                        <span>Age requirement</span>
                        <span className="text-stahl">{program.age}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span>Sessions</span>
                        <span className="text-stahl">{program.sessions}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span>Session duration</span>
                        <span className="text-stahl">1 hour</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span>Location</span>
                        <span className="text-stahl">
                          Your home or agreed location
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-nebel italic">
                      {program.note}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/book"
                    className="font-display inline-flex items-center justify-center rounded bg-kupfer px-8 py-3 text-sm font-semibold tracking-wide text-schwarz no-underline transition-colors hover:bg-kupfer-light"
                  >
                    BOOK THIS PROGRAM
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single session + FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-weiss">
                Single Sessions
              </h2>
              <p className="mt-4 text-stahl">
                One-hour training sessions available for existing clients and
                one-time consultations.
              </p>
              <p className="font-display mt-4 text-3xl font-bold text-kupfer">
                $300<span className="text-lg text-stahl"> / hour</span>
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-weiss">
                How it works
              </h2>
              <div className="mt-4 space-y-4 text-sm text-stahl">
                <div className="flex gap-4">
                  <span className="font-mono text-kupfer">01</span>
                  <p>
                    <span className="font-semibold text-weiss">
                      Book a consultation.
                    </span>{" "}
                    Tell us about your dog and your goals. We&apos;ll respond
                    within 24 hours.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-kupfer">02</span>
                  <p>
                    <span className="font-semibold text-weiss">
                      Initial evaluation.
                    </span>{" "}
                    We observe your dog in their environment, assess behavior,
                    and recommend the right program.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-kupfer">03</span>
                  <p>
                    <span className="font-semibold text-weiss">
                      Structured training begins.
                    </span>{" "}
                    Each session has defined goals. You&apos;ll see measurable
                    progress with clear homework between sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kohle">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-weiss">
            Not sure which program?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stahl">
            Book a consultation. We&apos;ll evaluate your dog and recommend the
            right fit — no commitment required.
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
