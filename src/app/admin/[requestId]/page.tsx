import { sql } from "@/lib/db";
import { notFound } from "next/navigation";
import { AdminActions } from "./actions";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ requestId: string }>;
}

export default async function RequestDetailPage({ params }: Props) {
  const { requestId } = await params;

  const results = await sql`
    SELECT * FROM consultation_requests WHERE id = ${requestId}
  `;

  if (results.length === 0) return notFound();
  const req = results[0];

  return (
    <div className="pb-12">
      <a
        href="/admin"
        className="font-mono text-xs text-kupfer no-underline hover:text-kupfer-light"
      >
        &larr; BACK
      </a>

      <div className="mt-4 rounded-lg border border-border bg-kohle p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-weiss">
              {req.name}
            </h2>
            <p className="mt-1 text-sm text-stahl">
              {req.dog_breed} &middot; {req.dog_age}
            </p>
          </div>
          <span className="rounded bg-schiefer px-2 py-1 text-xs font-medium uppercase text-stahl">
            {req.status}
          </span>
        </div>

        <hr className="my-4" />

        <div className="space-y-4 text-sm">
          <div>
            <label className="text-xs font-medium tracking-wider text-stahl">
              CONTACT
            </label>
            <p className="mt-1 text-weiss">
              <a href={`tel:${req.phone}`} className="text-kupfer-light no-underline">
                {req.phone}
              </a>
              {req.email && (
                <>
                  {" "}&middot;{" "}
                  <a href={`mailto:${req.email}`} className="text-kupfer-light no-underline">
                    {req.email}
                  </a>
                </>
              )}
            </p>
          </div>

          <div>
            <label className="text-xs font-medium tracking-wider text-stahl">
              OBJECTIVE
            </label>
            <p className="mt-1 text-weiss">{req.objective}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium tracking-wider text-stahl">
                PREFERRED DATES
              </label>
              <p className="mt-1 text-weiss">
                {req.preferred_dates || "Flexible"}
              </p>
            </div>
            <div>
              <label className="text-xs font-medium tracking-wider text-stahl">
                PREFERRED TIME
              </label>
              <p className="mt-1 capitalize text-weiss">
                {req.preferred_time}
              </p>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium tracking-wider text-stahl">
              LOCATION PREFERENCE
            </label>
            <p className="mt-1 capitalize text-weiss">{req.location_pref}</p>
          </div>

          {req.session_date && (
            <div>
              <label className="text-xs font-medium tracking-wider text-stahl">
                CONFIRMED SESSION
              </label>
              <p className="mt-1 text-kupfer">
                {new Date(req.session_date).toLocaleString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
                {req.session_location && ` — ${req.session_location}`}
              </p>
            </div>
          )}

          {req.admin_notes && (
            <div>
              <label className="text-xs font-medium tracking-wider text-stahl">
                NOTES
              </label>
              <p className="mt-1 text-weiss">{req.admin_notes}</p>
            </div>
          )}

          <div>
            <label className="text-xs font-medium tracking-wider text-nebel">
              RECEIVED
            </label>
            <p className="mt-1 text-nebel">
              {new Date(req.created_at).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <AdminActions
        requestId={req.id}
        status={req.status}
        clientPhone={req.phone}
        clientName={req.name}
        dogBreed={req.dog_breed}
      />
    </div>
  );
}
