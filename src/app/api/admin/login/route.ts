import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  const { pin } = await request.json();

  const pinHash = process.env.ADMIN_PIN_HASH;
  if (!pinHash) {
    return NextResponse.json({ error: "Admin not configured" }, { status: 500 });
  }

  const valid = await bcrypt.compare(pin, pinHash);
  if (!valid) {
    return NextResponse.json({ error: "Invalid PIN" }, { status: 401 });
  }

  const sessionToken = process.env.ADMIN_SESSION_TOKEN;
  if (!sessionToken) {
    return NextResponse.json({ error: "Session not configured" }, { status: 500 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("hk9_admin", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  return response;
}
