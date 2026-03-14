import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hektor K9 — Dog Training in West Palm Beach";
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
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#B87333",
          }}
        >
          HEKTOR K9
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#8A8D8F",
            marginTop: 24,
            letterSpacing: "0.3em",
          }}
        >
          DOG TRAINING IN WEST PALM BEACH
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#666",
            marginTop: 16,
          }}
        >
          Schutzhund/IPG &bull; Nepopo Method &bull; AKC CGC Evaluator
        </div>
      </div>
    ),
    { ...size }
  );
}
