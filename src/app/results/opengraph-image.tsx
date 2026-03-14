import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Training Results & Testimonials — Hektor K9";
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
          The work speaks.
        </div>
        <div
          style={{
            display: "flex",
            gap: 64,
            marginTop: 40,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: "#B87333" }}>5.0</span>
            <span style={{ fontSize: 16, color: "#8A8D8F", marginTop: 4 }}>Google Rating</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: "#B87333" }}>100%</span>
            <span style={{ fontSize: 16, color: "#8A8D8F", marginTop: 4 }}>CGC Pass Rate</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: "#B87333" }}>AKC</span>
            <span style={{ fontSize: 16, color: "#8A8D8F", marginTop: 4 }}>CGC Evaluator</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
