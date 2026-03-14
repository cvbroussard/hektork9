import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Book a Consultation — Hektor K9";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#131210",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#B87333",
            letterSpacing: "0.3em",
            marginBottom: 16,
          }}
        >
          HEKTOR K9
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          Book a Consultation
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#8A8D8F",
            marginTop: 24,
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Tell us about your dog. We&apos;ll respond within 24 hours.
        </div>
        <div
          style={{
            marginTop: 40,
            padding: "16px 48px",
            backgroundColor: "#B87333",
            color: "#131210",
            fontSize: 20,
            fontWeight: 700,
            borderRadius: 6,
            letterSpacing: "0.1em",
          }}
        >
          REQUEST A CONSULTATION
        </div>
      </div>
    ),
    { ...size }
  );
}
