import Link from "next/link";
import { HeroPlaceholder } from "@/components/hero-placeholder";

const services = [
  {
    name: "Foundation Program",
    code: "HK9-FND",
    focus: "Puppy Imprinting & Development",
    description:
      "Structured cognitive development for puppies 8 weeks to 5 months. European imprinting techniques build environmental neutrality, impulse control, and the foundational communication framework for a lifetime of reliability.",
    sessions: "6 sessions",
    price: "$1,650",
  },
  {
    name: "Obedience Program",
    code: "HK9-OBD",
    focus: "Advanced Obedience & Off-Leash Reliability",
    description:
      "Complete communication overhaul for dogs 6 months and older. Precision heel, reliable recall under distraction, threshold discipline, and the structured \"off switch\" that transforms daily life.",
    sessions: "6 sessions",
    price: "$1,500",
  },
  {
    name: "Comprehensive Program",
    code: "HK9-CMP",
    focus: "Full Behavioral Transformation",
    description:
      "Our most thorough engagement. Ten sessions covering advanced obedience, environmental neutrality, impulse control, and real-world proofing across varied environments and distraction levels.",
    sessions: "10 sessions",
    price: "$2,250",
  },
  {
    name: "CGC Test Prep & Evaluation",
    code: "HK9-CGC",
    focus: "AKC Canine Good Citizen Certification",
    description:
      "Six targeted sessions preparing your dog for AKC CGC certification, plus the official evaluation administered by our AKC CGC Evaluator. Training and certification in one program.",
    sessions: "6 sessions + eval",
    price: "$1,800",
  },
];

const credentials = [
  "AKC CGC Evaluator",
  "Schutzhund / IPG Trained",
  "Nepopo Methodology",
  "3+ Years Professional Experience",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-texture relative flex min-h-screen items-center border-b border-border pt-16">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-kupfer">
                WEST PALM BEACH, FL
              </p>
              <h1 className="font-display mt-4 text-5xl font-bold leading-tight tracking-tight text-weiss md:text-7xl">
                Disciplined dogs.
                <br />
                <span className="text-kupfer">Clear methods.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stahl">
                Hektor K9 applies Schutzhund/IPG and Nepopo methodology to
                produce dogs that are calm, focused, and reliable — in your home
                and in the world.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="font-display inline-flex items-center justify-center rounded bg-kupfer px-8 py-3.5 text-sm font-semibold tracking-wide text-schwarz no-underline transition-colors hover:bg-kupfer-light"
                >
                  BOOK A CONSULTATION
                </Link>
                <Link
                  href="/programs"
                  className="font-display inline-flex items-center justify-center rounded border border-border px-8 py-3.5 text-sm font-medium tracking-wide text-stahl no-underline transition-colors hover:border-stahl hover:text-weiss"
                >
                  VIEW PROGRAMS
                </Link>
              </div>
            </div>

            {/* Hero image placeholder */}
            <HeroPlaceholder
              aspect="aspect-[3/4]"
              label="HERO — PRIMARY"
              shotDirection="Hektor: The Watch"
              shotDetails={[
                "Tight portrait, eyes sharp, ears alert, mouth closed",
                "High-contrast lighting — directional, not flat",
                "Dark or neutral background (stone, concrete, dark wood)",
                "Shot on 85mm or 135mm for compressed, creamy bokeh",
                "The gaze should feel locked and intentional",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="border-b border-border bg-kohle">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {credentials.map((cred) => (
              <div key={cred} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-kupfer" />
                <span className="text-sm font-medium text-stahl">{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="hero-texture relative border-b border-border">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-kupfer">
                METHODOLOGY
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-weiss md:text-4xl">
                Systems that produce results
              </h2>
              <p className="mt-6 leading-relaxed text-stahl">
                We train using two proven European systems — not trends,
                not guesswork.
              </p>

              {/* Methodology action shot */}
              <div className="mt-8">
                <HeroPlaceholder
                  aspect="aspect-[4/3]"
                  label="METHODOLOGY — ACTION"
                  shotDirection="Training in progress"
                  shotDetails={[
                    "Charles working with a dog mid-session",
                    "Show the leash, the handler's stance, the dog's focus",
                    "Outdoor or clean indoor environment",
                    "Capture the moment of connection/communication",
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="border-l-2 border-kupfer pl-6">
                <h3 className="font-display text-lg font-semibold text-weiss">
                  Schutzhund / IPG
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stahl">
                  The German system for developing tracking, obedience, and
                  protection in working breeds. We adapt its structured
                  progression and drive-building techniques for companion dogs —
                  producing focus, impulse control, and reliable obedience under
                  real-world distraction.
                </p>
              </div>
              <div className="border-l-2 border-kupfer pl-6">
                <h3 className="font-display text-lg font-semibold text-weiss">
                  Nepopo Method
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stahl">
                  Developed by Bart Bellon, Nepopo uses three clear
                  communication markers — positive, negative, and positive
                  again — to create fast, low-stress learning. The dog always
                  knows exactly where they stand, which builds confidence and
                  accelerates progress.
                </p>
              </div>
              <div className="border-l-2 border-kupfer pl-6">
                <h3 className="font-display text-lg font-semibold text-weiss">
                  AKC CGC Evaluator
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stahl">
                  We don&apos;t just train — we certify. As an AKC Canine Good
                  Citizen Evaluator, we can both prepare your dog and administer
                  the official CGC test. One program, verified results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs tracking-[0.3em] text-kupfer">
            PROGRAMS
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-weiss md:text-4xl">
            Training programs
          </h2>
          <p className="mt-4 max-w-2xl text-stahl">
            Every program is structured, goal-oriented, and priced transparently.
            No hidden fees. No upsells.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.code}
                className="group rounded-lg border border-border bg-kohle p-8 transition-colors hover:border-schiefer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-xs text-kupfer">
                      {service.code}
                    </p>
                    <h3 className="font-display mt-1 text-xl font-semibold text-weiss">
                      {service.name}
                    </h3>
                  </div>
                  <span className="font-display text-lg font-bold text-kupfer">
                    {service.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-stahl">{service.focus}</p>
                <p className="mt-4 text-sm leading-relaxed text-nebel">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-nebel">
                    {service.sessions}
                  </span>
                  <Link
                    href="/book"
                    className="font-display text-xs font-medium tracking-wider text-kupfer no-underline transition-colors hover:text-kupfer-light"
                  >
                    BOOK NOW &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-border bg-kohle p-6 text-center">
            <p className="text-sm text-stahl">
              <span className="font-semibold text-weiss">Single session:</span>{" "}
              $300 / hour &mdash; available for existing clients and one-time
              consultations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-texture relative bg-kohle">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-weiss md:text-4xl">
            Ready to start?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stahl">
            Book a consultation and we&apos;ll evaluate your dog, discuss your
            goals, and recommend the right program.
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
