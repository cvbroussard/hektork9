import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Charles and Hektor. Learn about our Schutzhund/IPG and Nepopo training methodology and AKC CGC Evaluator credentials.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border pt-16">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs tracking-[0.3em] text-kupfer">
            ABOUT
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-weiss md:text-5xl">
            The trainer. The dog.
            <br />
            <span className="text-kupfer">The standard.</span>
          </h1>
        </div>
      </section>

      {/* Charles */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-weiss">
                Charles Broussard
              </h2>
              <p className="font-mono mt-1 text-xs text-kupfer">
                FOUNDER & HEAD TRAINER
              </p>
              <div className="mt-6 space-y-4 text-stahl leading-relaxed">
                <p>
                  Hektor K9 was built on a straightforward belief: the methods
                  used to develop world-class working dogs produce the best
                  companion dogs too. Not watered down. Not repackaged with
                  softer language. The same systems, applied with care.
                </p>
                <p>
                  Charles holds AKC Canine Good Citizen Evaluator credentials
                  and trains using Schutzhund/IPG and Nepopo methodology — two
                  European systems that prioritize clear communication, drive
                  development, and structured progression.
                </p>
                <p>
                  The result is dogs that understand expectations, respond
                  reliably under distraction, and integrate into their
                  owner&apos;s life without friction.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center">
              {/* Photo placeholder */}
              <div className="flex aspect-[3/4] w-full max-w-sm items-center justify-center rounded-lg border border-border bg-schiefer">
                <span className="font-mono text-xs text-nebel">
                  TRAINER PHOTO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hektor */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="order-2 flex items-start justify-center md:order-1">
              {/* Photo placeholder */}
              <div className="flex aspect-[3/4] w-full max-w-sm items-center justify-center rounded-lg border border-border bg-schiefer">
                <span className="font-mono text-xs text-nebel">
                  HEKTOR PHOTO
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-2xl font-bold text-weiss">
                Hektor
              </h2>
              <p className="font-mono mt-1 text-xs text-kupfer">
                3-YEAR-OLD GERMAN SHEPHERD &middot; THE NAMESAKE
              </p>
              <div className="mt-6 space-y-4 text-stahl leading-relaxed">
                <p>
                  The name is German — deliberately. Hektor is a 3-year-old
                  award-winning German Shepherd and the living proof of the
                  methods we teach. His name reflects the German heritage of
                  the training systems we practice and the breeds we specialize
                  in.
                </p>
                <p>
                  Hektor was developed through the same Schutzhund/IPG and
                  Nepopo methodology we apply to every client dog. He
                  demonstrates what structured training produces: a dog that
                  is calm in public, focused under pressure, and completely
                  integrated into daily life.
                </p>
                <p>
                  He&apos;s not a mascot. He&apos;s the standard we hold every
                  dog to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology detail */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs tracking-[0.3em] text-kupfer">
            METHODOLOGY
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-weiss">
            How we train
          </h2>
          <p className="mt-4 max-w-2xl text-stahl">
            Two systems. Both proven over decades in competitive and
            professional working dog contexts. Both adapted — not diluted — for
            companion dogs.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-kohle p-8">
              <h3 className="font-display text-xl font-semibold text-weiss">
                Schutzhund / IPG
              </h3>
              <p className="font-mono mt-1 text-xs text-kupfer">
                GERMAN WORKING DOG SYSTEM
              </p>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-stahl">
                <p>
                  Developed in Germany in the early 1900s to test the working
                  ability of German Shepherds, Schutzhund (now IPG/IPO) is a
                  three-phase discipline: tracking, obedience, and protection.
                </p>
                <p>
                  For companion training, we apply its core principles:
                  structured drive development, precise obedience under
                  distraction, environmental neutrality, and the &ldquo;off
                  switch&rdquo; — the ability to go from high-drive work to
                  calm relaxation instantly.
                </p>
                <p>
                  This produces dogs that are engaged when working and settled
                  when resting. No anxiety. No hyperactivity. Just clarity.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-kohle p-8">
              <h3 className="font-display text-xl font-semibold text-weiss">
                Nepopo Method
              </h3>
              <p className="font-mono mt-1 text-xs text-kupfer">
                BART BELLON&apos;S COMMUNICATION SYSTEM
              </p>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-stahl">
                <p>
                  Developed by Belgian dog trainer Bart Bellon, Nepopo stands
                  for Negative-Positive-Positive — three clear markers that
                  tell the dog exactly where they stand at every moment.
                </p>
                <p>
                  The system starts and ends with positive reinforcement. The
                  brief negative marker in between creates contrast that
                  accelerates learning and builds confidence. Dogs trained
                  under Nepopo learn faster because ambiguity is eliminated.
                </p>
                <p>
                  The result is low-stress, high-clarity training that works
                  across all breeds and temperaments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kohle">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-weiss">
            See the methods in action
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stahl">
            Book a consultation. We&apos;ll evaluate your dog, explain exactly
            what we&apos;d work on, and let the results speak.
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
