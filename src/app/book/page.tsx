import type { Metadata } from "next";
import { BookingForm } from "./booking-form";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Request a private dog training consultation with Hektor K9 in West Palm Beach. We'll respond within 24 hours.",
};

export default function BookPage() {
  return (
    <>
      <section className="border-b border-border pt-16">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-kupfer">
                BOOK A CONSULTATION
              </p>
              <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-weiss">
                Let&apos;s talk about your dog
              </h1>
              <p className="mt-6 leading-relaxed text-stahl">
                Tell us about your dog, your goals, and when you&apos;re
                available. We&apos;ll review your inquiry and respond within 24
                hours to schedule your consultation.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <span className="font-mono text-sm text-kupfer">01</span>
                  <div>
                    <p className="font-semibold text-weiss">Submit your inquiry</p>
                    <p className="mt-1 text-sm text-nebel">
                      Fill out the form with your dog&apos;s details and your
                      availability.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-sm text-kupfer">02</span>
                  <div>
                    <p className="font-semibold text-weiss">We review & confirm</p>
                    <p className="mt-1 text-sm text-nebel">
                      We&apos;ll text you within 24 hours with a confirmed date,
                      time, and location.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-sm text-kupfer">03</span>
                  <div>
                    <p className="font-semibold text-weiss">Meet & evaluate</p>
                    <p className="mt-1 text-sm text-nebel">
                      We observe your dog, discuss your goals, and recommend the
                      right program.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
