import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "About Hektor K9 — Charles Broussard, AKC CGC Evaluator";
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
          The trainer. The dog.
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#B87333",
          }}
        >
          The standard.
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#8A8D8F",
            marginTop: 24,
          }}
        >
          Charles Broussard &bull; AKC CGC Evaluator &bull; West Palm Beach
        </div>
      </div>
    ),
    { ...size }
  );
}
