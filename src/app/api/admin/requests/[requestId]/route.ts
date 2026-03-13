import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "@/lib/db";
import { sendSMS } from "@/lib/twilio";

async function verifyAdmin() {
  const cookieStore = await cookies();
  const session = cookieStore.get("hk9_admin");
  const validToken = process.env.ADMIN_SESSION_TOKEN;
  return session?.value === validToken;
}

interface Params {
  params: Promise<{ requestId: string }>;
}

export async function PATCH(request: NextRequest, { params }: Params) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { requestId } = await params;
  const body = await request.json();
  const { action, notes, sessionDate, sessionLocation } = body;

  // Get the request
  const results = await sql`
    SELECT * FROM consultation_requests WHERE id = ${requestId}
  `;

  if (results.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const req = results[0];

  switch (action) {
    case "confirm": {
      await sql`
        UPDATE consultation_requests
        SET status = 'confirmed',
            session_date = ${sessionDate},
            session_location = ${sessionLocation || null},
            admin_notes = ${notes || null},
            updated_at = NOW()
        WHERE id = ${requestId}
      `;

      // SMS to client
      try {
        const date = new Date(sessionDate);
        const dateStr = date.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        });
        const timeStr = date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        });

        await sendSMS({
          to: req.phone,
          body: `Your consultation with Hektor K9 is confirmed for ${dateStr} at ${timeStr}${sessionLocation ? `. Location: ${sessionLocation}` : ""}. We look forward to meeting ${req.dog_breed}. Reply STOP to cancel.`,
        });

        await sql`
          INSERT INTO sms_log (request_id, direction, to_number, body, status)
          VALUES (${requestId}, 'outbound', ${req.phone}, 'Confirmation sent', 'sent')
        `;
      } catch (e) {
        console.error("SMS failed:", e);
      }
      break;
    }

    case "decline":
      await sql`
        UPDATE consultation_requests
        SET status = 'declined', admin_notes = ${notes || null}, updated_at = NOW()
        WHERE id = ${requestId}
      `;
      break;

    case "complete":
      await sql`
        UPDATE consultation_requests
        SET status = 'completed', admin_notes = ${notes || null}, updated_at = NOW()
        WHERE id = ${requestId}
      `;
      break;

    case "cancel": {
      await sql`
        UPDATE consultation_requests
        SET status = 'cancelled', admin_notes = ${notes || null}, updated_at = NOW()
        WHERE id = ${requestId}
      `;

      // Notify client of cancellation
      try {
        await sendSMS({
          to: req.phone,
          body: `Your Hektor K9 consultation has been rescheduled. We'll be in touch shortly to confirm a new time. Call (561) 231-8006 with questions.`,
        });
      } catch (e) {
        console.error("SMS failed:", e);
      }
      break;
    }

    default:
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
