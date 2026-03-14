import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dog Training Programs & Pricing — Hektor K9";
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
          Programs &amp; Pricing
        </div>
        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 40,
            fontSize: 20,
            color: "#8A8D8F",
          }}
        >
          <span>Foundation $1,650</span>
          <span>Obedience $1,500</span>
          <span>Comprehensive $2,250</span>
          <span>CGC $1,800</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
