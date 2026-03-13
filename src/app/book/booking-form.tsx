"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  dogBreed: string;
  dogAge: string;
  objective: string;
  preferredDates: string;
  preferredTime: string;
  locationPref: string;
}

export function BookingForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    dogBreed: "",
    dogAge: "",
    objective: "",
    preferredDates: "",
    preferredTime: "flexible",
    locationPref: "home",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-kupfer bg-kohle p-8 text-center">
        <div className="font-display text-2xl font-bold text-kupfer">
          Inquiry received
        </div>
        <p className="mt-4 text-stahl">
          We&apos;ll review your details and text you within 24 hours to
          confirm your consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-kohle p-8">
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium tracking-wider text-stahl">
            YOUR NAME *
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded border border-border bg-schiefer px-4 py-3 text-sm text-weiss placeholder-nebel outline-none transition-colors focus:border-kupfer"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-medium tracking-wider text-stahl">
            PHONE NUMBER *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(561) 000-0000"
            className="w-full rounded border border-border bg-schiefer px-4 py-3 text-sm text-weiss placeholder-nebel outline-none transition-colors focus:border-kupfer"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium tracking-wider text-stahl">
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded border border-border bg-schiefer px-4 py-3 text-sm text-weiss placeholder-nebel outline-none transition-colors focus:border-kupfer"
          />
        </div>

        <hr />

        {/* Dog Breed */}
        <div>
          <label htmlFor="dogBreed" className="mb-1.5 block text-xs font-medium tracking-wider text-stahl">
            DOG BREED *
          </label>
          <input
            id="dogBreed"
            type="text"
            required
            value={form.dogBreed}
            onChange={(e) => update("dogBreed", e.target.value)}
            placeholder="German Shepherd, Labrador, etc."
            className="w-full rounded border border-border bg-schiefer px-4 py-3 text-sm text-weiss placeholder-nebel outline-none transition-colors focus:border-kupfer"
          />
        </div>

        {/* Dog Age */}
        <div>
          <label htmlFor="dogAge" className="mb-1.5 block text-xs font-medium tracking-wider text-stahl">
            DOG AGE *
          </label>
          <input
            id="dogAge"
            type="text"
            required
            value={form.dogAge}
            onChange={(e) => update("dogAge", e.target.value)}
            placeholder="e.g. 8 weeks, 6 months, 2 years"
            className="w-full rounded border border-border bg-schiefer px-4 py-3 text-sm text-weiss placeholder-nebel outline-none transition-colors focus:border-kupfer"
          />
        </div>

        {/* Objective */}
        <div>
          <label htmlFor="objective" className="mb-1.5 block text-xs font-medium tracking-wider text-stahl">
            WHAT DO YOU NEED HELP WITH? *
          </label>
          <textarea
            id="objective"
            required
            rows={3}
            value={form.objective}
            onChange={(e) => update("objective", e.target.value)}
            placeholder="Leash reactivity, basic obedience, puppy training, CGC certification..."
            className="w-full resize-none rounded border border-border bg-schiefer px-4 py-3 text-sm text-weiss placeholder-nebel outline-none transition-colors focus:border-kupfer"
          />
        </div>

        <hr />

        {/* Preferred dates */}
        <div>
          <label htmlFor="preferredDates" className="mb-1.5 block text-xs font-medium tracking-wider text-stahl">
            WHEN ARE YOU AVAILABLE?
          </label>
          <input
            id="preferredDates"
            type="text"
            value={form.preferredDates}
            onChange={(e) => update("preferredDates", e.target.value)}
            placeholder="e.g. Next week, weekends, any weekday"
            className="w-full rounded border border-border bg-schiefer px-4 py-3 text-sm text-weiss placeholder-nebel outline-none transition-colors focus:border-kupfer"
          />
        </div>

        {/* Preferred time */}
        <div>
          <label className="mb-1.5 block text-xs font-medium tracking-wider text-stahl">
            PREFERRED TIME OF DAY
          </label>
          <div className="flex gap-3">
            {["morning", "afternoon", "flexible"].map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => update("preferredTime", time)}
                className={`rounded border px-4 py-2 text-sm capitalize transition-colors ${
                  form.preferredTime === time
                    ? "border-kupfer bg-kupfer/10 text-kupfer"
                    : "border-border text-nebel hover:border-stahl hover:text-stahl"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Location preference */}
        <div>
          <label className="mb-1.5 block text-xs font-medium tracking-wider text-stahl">
            PREFERRED LOCATION
          </label>
          <div className="flex gap-3">
            {[
              { value: "home", label: "My home" },
              { value: "public", label: "Public location" },
              { value: "flexible", label: "Flexible" },
            ].map((loc) => (
              <button
                key={loc.value}
                type="button"
                onClick={() => update("locationPref", loc.value)}
                className={`rounded border px-4 py-2 text-sm transition-colors ${
                  form.locationPref === loc.value
                    ? "border-kupfer bg-kupfer/10 text-kupfer"
                    : "border-border text-nebel hover:border-stahl hover:text-stahl"
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {errorMessage && (
        <p className="mt-4 text-sm text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-display mt-8 w-full rounded bg-kupfer px-8 py-4 text-sm font-semibold tracking-wide text-schwarz transition-colors hover:bg-kupfer-light disabled:opacity-50"
      >
        {status === "submitting" ? "SUBMITTING..." : "SUBMIT INQUIRY"}
      </button>
    </form>
  );
}
