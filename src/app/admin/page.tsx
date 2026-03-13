import Link from "next/link";
import { sql } from "@/lib/db";

interface ConsultationRequest {
  id: string;
  name: string;
  phone: string;
  dog_breed: string;
  dog_age: string;
  objective: string;
  status: string;
  session_date: string | null;
  created_at: string;
}

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const pending = (await sql`
    SELECT * FROM consultation_requests
    WHERE status = 'pending'
    ORDER BY created_at DESC
  `) as ConsultationRequest[];

  const upcoming = (await sql`
    SELECT * FROM consultation_requests
    WHERE status = 'confirmed' AND session_date >= NOW()
    ORDER BY session_date ASC
  `) as ConsultationRequest[];

  const recent = (await sql`
    SELECT * FROM consultation_requests
    WHERE status NOT IN ('pending', 'confirmed')
    ORDER BY updated_at DESC
    LIMIT 10
  `) as ConsultationRequest[];

  return (
    <div className="space-y-8 pb-12">
      {/* Pending */}
      <section>
        <h2 className="font-display mb-3 text-xs font-semibold tracking-[0.2em] text-kupfer">
          PENDING ({pending.length})
        </h2>
        {pending.length === 0 ? (
          <p className="text-sm text-nebel">No pending requests</p>
        ) : (
          <div className="space-y-3">
            {pending.map((req) => (
              <RequestCard key={req.id} request={req} />
            ))}
          </div>
        )}
      </section>

      {/* Upcoming */}
      <section>
        <h2 className="font-display mb-3 text-xs font-semibold tracking-[0.2em] text-stahl">
          UPCOMING ({upcoming.length})
        </h2>
        {upcoming.length === 0 ? (
          <p className="text-sm text-nebel">No upcoming sessions</p>
        ) : (
          <div className="space-y-3">
            {upcoming.map((req) => (
              <RequestCard key={req.id} request={req} />
            ))}
          </div>
        )}
      </section>

      {/* Recent */}
      {recent.length > 0 && (
        <section>
          <h2 className="font-display mb-3 text-xs font-semibold tracking-[0.2em] text-stahl">
            RECENT
          </h2>
          <div className="space-y-3">
            {recent.map((req) => (
              <RequestCard key={req.id} request={req} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function RequestCard({ request }: { request: ConsultationRequest }) {
  const statusColors: Record<string, string> = {
    pending: "text-yellow-400",
    confirmed: "text-green-400",
    completed: "text-stahl",
    declined: "text-red-400",
    cancelled: "text-nebel",
  };

  return (
    <Link
      href={`/admin/${request.id}`}
      className="block rounded-lg border border-border bg-kohle p-4 no-underline transition-colors hover:border-schiefer"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-medium text-weiss">{request.name}</p>
          <p className="mt-0.5 text-sm text-stahl">
            {request.dog_breed} &middot; {request.dog_age}
          </p>
        </div>
        <span className={`text-xs font-medium uppercase ${statusColors[request.status] || "text-nebel"}`}>
          {request.status}
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-nebel">
        {request.objective}
      </p>
      <div className="mt-2 flex items-center justify-between text-xs text-nebel">
        <span>{request.phone}</span>
        <span>
          {request.session_date
            ? new Date(request.session_date).toLocaleDateString()
            : new Date(request.created_at).toLocaleDateString()}
        </span>
      </div>
    </Link>
  );
}
