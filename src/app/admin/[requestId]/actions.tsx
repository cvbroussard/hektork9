"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  requestId: string;
  status: string;
  clientPhone: string;
  clientName: string;
  dogBreed: string;
}

export function AdminActions({ requestId, status, clientPhone, clientName, dogBreed }: Props) {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [sessionDate, setSessionDate] = useState("");
  const [sessionTime, setSessionTime] = useState("09:00");
  const [sessionLocation, setSessionLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAction(action: "confirm" | "decline" | "complete" | "cancel") {
    setLoading(true);

    const body: Record<string, string> = { action, notes };

    if (action === "confirm") {
      body.sessionDate = `${sessionDate}T${sessionTime}:00`;
      body.sessionLocation = sessionLocation;
    }

    const res = await fetch(`/api/admin/requests/${requestId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.refresh();
    } else {
      alert("Failed to update request");
    }
    setLoading(false);
  }

  if (status === "completed" || status === "cancelled" || status === "declined") {
    return null;
  }

  return (
    <div className="mt-6 space-y-4">
      {status === "pending" && !showConfirm && (
        <div className="flex gap-3">
          <button
            onClick={() => setShowConfirm(true)}
            className="font-display flex-1 rounded bg-kupfer py-3 text-sm font-semibold tracking-wide text-schwarz transition-colors hover:bg-kupfer-light"
          >
            CONFIRM
          </button>
          <button
            onClick={() => handleAction("decline")}
            disabled={loading}
            className="font-display rounded border border-border px-6 py-3 text-sm font-medium tracking-wide text-stahl transition-colors hover:border-red-400 hover:text-red-400"
          >
            DECLINE
          </button>
        </div>
      )}

      {status === "pending" && showConfirm && (
        <div className="rounded-lg border border-kupfer bg-kohle p-6">
          <h3 className="font-display text-sm font-semibold tracking-wider text-kupfer">
            CONFIRM SESSION
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-1 block text-xs text-stahl">DATE *</label>
              <input
                type="date"
                required
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
                className="w-full rounded border border-border bg-schiefer px-3 py-2 text-sm text-weiss outline-none focus:border-kupfer"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-stahl">TIME *</label>
              <input
                type="time"
                required
                value={sessionTime}
                onChange={(e) => setSessionTime(e.target.value)}
                className="w-full rounded border border-border bg-schiefer px-3 py-2 text-sm text-weiss outline-none focus:border-kupfer"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-stahl">LOCATION</label>
              <input
                type="text"
                value={sessionLocation}
                onChange={(e) => setSessionLocation(e.target.value)}
                placeholder="Client's home, park, etc."
                className="w-full rounded border border-border bg-schiefer px-3 py-2 text-sm text-weiss placeholder-nebel outline-none focus:border-kupfer"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-stahl">NOTES</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="w-full resize-none rounded border border-border bg-schiefer px-3 py-2 text-sm text-weiss outline-none focus:border-kupfer"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleAction("confirm")}
                disabled={loading || !sessionDate}
                className="font-display flex-1 rounded bg-kupfer py-3 text-sm font-semibold tracking-wide text-schwarz transition-colors hover:bg-kupfer-light disabled:opacity-50"
              >
                {loading ? "SENDING..." : "CONFIRM & NOTIFY CLIENT"}
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="rounded border border-border px-4 py-3 text-sm text-stahl hover:text-weiss"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {status === "confirmed" && (
        <div className="flex gap-3">
          <button
            onClick={() => handleAction("complete")}
            disabled={loading}
            className="font-display flex-1 rounded bg-kupfer py-3 text-sm font-semibold tracking-wide text-schwarz transition-colors hover:bg-kupfer-light"
          >
            MARK COMPLETED
          </button>
          <button
            onClick={() => handleAction("cancel")}
            disabled={loading}
            className="font-display rounded border border-border px-6 py-3 text-sm font-medium tracking-wide text-stahl transition-colors hover:border-red-400 hover:text-red-400"
          >
            CANCEL
          </button>
        </div>
      )}
    </div>
  );
}
