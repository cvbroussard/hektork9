"use client";

import { useState } from "react";

export function AdminLogin() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });

    if (res.ok) {
      window.location.reload();
    } else {
      setError("Invalid PIN");
      setPin("");
    }
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-schwarz px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs rounded-lg border border-border bg-kohle p-8"
      >
        <h1 className="font-display text-center text-lg font-bold tracking-wider text-kupfer">
          HK9 ADMIN
        </h1>
        <div className="mt-6">
          <label
            htmlFor="pin"
            className="mb-1.5 block text-xs font-medium tracking-wider text-stahl"
          >
            ENTER PIN
          </label>
          <input
            id="pin"
            type="password"
            inputMode="numeric"
            maxLength={6}
            required
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full rounded border border-border bg-schiefer px-4 py-3 text-center text-lg tracking-[0.5em] text-weiss outline-none focus:border-kupfer"
            autoFocus
          />
        </div>
        {error && <p className="mt-3 text-center text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="font-display mt-6 w-full rounded bg-kupfer py-3 text-sm font-semibold tracking-wide text-schwarz transition-colors hover:bg-kupfer-light disabled:opacity-50"
        >
          {loading ? "..." : "LOGIN"}
        </button>
      </form>
    </div>
  );
}
