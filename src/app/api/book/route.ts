import { NextRequest, NextResponse } from "next/server";
import { z } from "zod/v4";
import { sql } from "@/lib/db";
import { sendSMS, formatPhone } from "@/lib/twilio";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email().optional().or(z.literal("")),
  dogBreed: z.string().min(1, "Dog breed is required"),
  dogAge: z.string().min(1, "Dog age is required"),
  objective: z.string().min(1, "Please describe what you need help with"),
  preferredDates: z.string().optional(),
  preferredTime: z.enum(["morning", "afternoon", "flexible"]).default("flexible"),
  locationPref: z.enum(["home", "public", "flexible"]).default("home"),
});

const OWNER_PHONE = process.env.OWNER_PHONE || "+15612318006";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = bookingSchema.parse(body);

    // Insert into database
    const result = await sql`
      INSERT INTO consultation_requests (
        name, phone, email, dog_breed, dog_age, objective,
        preferred_dates, preferred_time, location_pref
      ) VALUES (
        ${data.name}, ${formatPhone(data.phone)}, ${data.email || null},
        ${data.dogBreed}, ${data.dogAge}, ${data.objective},
        ${data.preferredDates || null}, ${data.preferredTime}, ${data.locationPref}
      )
      RETURNING id
    `;

    const requestId = result[0].id;

    // SMS notification to owner
    try {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hektork9.com";
      await sendSMS({
        to: OWNER_PHONE,
        body: `New Hektor K9 inquiry from ${data.name} — ${data.dogBreed}, ${data.dogAge}. Goal: ${data.objective.slice(0, 80)}. Preferred: ${data.preferredTime}, ${data.preferredDates || "flexible"}. Review: ${siteUrl}/admin/${requestId}`,
      });

      // Log SMS
      await sql`
        INSERT INTO sms_log (request_id, direction, to_number, from_number, body, status)
        VALUES (${requestId}, 'outbound', ${OWNER_PHONE}, ${process.env.TWILIO_PHONE_NUMBER || "+15612318006"}, 'Owner notification', 'sent')
      `;
    } catch (smsError) {
      // Don't fail the booking if SMS fails
      console.error("SMS notification failed:", smsError);
    }

    return NextResponse.json({ success: true, id: requestId });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please call us at (561) 231-8006." },
      { status: 500 }
    );
  }
}
