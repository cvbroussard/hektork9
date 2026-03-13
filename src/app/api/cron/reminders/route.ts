import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { sendSMS } from "@/lib/twilio";

export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Find confirmed sessions happening tomorrow
  const tomorrow = await sql`
    SELECT * FROM consultation_requests
    WHERE status = 'confirmed'
      AND session_date >= CURRENT_DATE + INTERVAL '1 day'
      AND session_date < CURRENT_DATE + INTERVAL '2 days'
  `;

  let sent = 0;

  for (const req of tomorrow) {
    try {
      const date = new Date(req.session_date);
      const timeStr = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });

      await sendSMS({
        to: req.phone,
        body: `Reminder: Your Hektor K9 consultation is tomorrow at ${timeStr}${req.session_location ? `. Location: ${req.session_location}` : ""}. See you then. Reply STOP to cancel.`,
      });

      await sql`
        INSERT INTO sms_log (request_id, direction, to_number, body, status)
        VALUES (${req.id}, 'outbound', ${req.phone}, 'Day-before reminder', 'sent')
      `;

      sent++;
    } catch (e) {
      console.error(`Reminder SMS failed for ${req.id}:`, e);
    }
  }

  return NextResponse.json({ sent, total: tomorrow.length });
}
