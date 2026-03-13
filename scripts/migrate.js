#!/usr/bin/env node

/**
 * Database migration script for Hektor K9
 * Run: node scripts/migrate.js
 * Requires DATABASE_URL in .env.local
 */

const { neon } = require("@neondatabase/serverless");
const { readFileSync } = require("fs");
const { resolve } = require("path");

// Load .env.local
const envPath = resolve(__dirname, "..", ".env.local");
const envContent = readFileSync(envPath, "utf-8");
for (const line of envContent.split("\n")) {
  const [key, ...rest] = line.split("=");
  if (key && rest.length) {
    process.env[key.trim()] = rest.join("=").trim();
  }
}

const sql = neon(process.env.DATABASE_URL);

async function migrate() {
  console.log("Running Hektor K9 migrations...\n");

  // consultation_requests
  await sql`
    CREATE TABLE IF NOT EXISTS consultation_requests (
      id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name            TEXT NOT NULL,
      email           TEXT,
      phone           TEXT NOT NULL,
      dog_breed       TEXT,
      dog_age         TEXT,
      objective       TEXT,
      preferred_dates TEXT,
      preferred_time  TEXT DEFAULT 'flexible',
      location_pref   TEXT DEFAULT 'home',
      status          TEXT DEFAULT 'pending',
      admin_notes     TEXT,
      session_date    TIMESTAMPTZ,
      session_location TEXT,
      created_at      TIMESTAMPTZ DEFAULT NOW(),
      updated_at      TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  console.log("✓ consultation_requests table");

  // sms_log
  await sql`
    CREATE TABLE IF NOT EXISTS sms_log (
      id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      request_id      UUID REFERENCES consultation_requests(id),
      direction       TEXT,
      to_number       TEXT,
      from_number     TEXT,
      body            TEXT,
      twilio_sid      TEXT,
      status          TEXT,
      created_at      TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  console.log("✓ sms_log table");

  // blog_views
  await sql`
    CREATE TABLE IF NOT EXISTS blog_views (
      id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      slug            TEXT NOT NULL,
      referrer        TEXT,
      created_at      TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  console.log("✓ blog_views table");

  // Indexes
  await sql`
    CREATE INDEX IF NOT EXISTS idx_consultation_status ON consultation_requests(status)
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS idx_consultation_session_date ON consultation_requests(session_date)
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS idx_sms_log_request ON sms_log(request_id)
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS idx_blog_views_slug ON blog_views(slug)
  `;
  console.log("✓ indexes");

  console.log("\nMigration complete.");
}

migrate().catch(console.error);
