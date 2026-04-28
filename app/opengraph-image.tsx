import { ImageResponse } from "next/og";

export const alt = "Fitt By Jordyn | Personal Training & Online Coaching";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 65% 35%, rgba(200, 149, 108, 0.22) 0%, transparent 60%), radial-gradient(ellipse at 20% 75%, rgba(200, 149, 108, 0.09) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c8956c",
              fontFamily: "sans-serif",
            }}
          >
            NPTI CERTIFIED · QUEEN CREEK, AZ
          </div>
          <div
            style={{
              fontSize: "88px",
              fontWeight: 700,
              color: "#f5f0eb",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Fitt By Jordyn
          </div>
          <div
            style={{
              width: "72px",
              height: "3px",
              background: "#c8956c",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              fontSize: "26px",
              color: "rgba(245, 240, 235, 0.55)",
              maxWidth: "680px",
              lineHeight: 1.5,
              fontFamily: "sans-serif",
            }}
          >
            Personal Training &amp; Online Coaching
          </div>
          <div
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "8px",
            }}
          >
            <div style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245, 240, 235, 0.35)", fontFamily: "sans-serif" }}>
              Muscle Building
            </div>
            <div style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245, 240, 235, 0.35)", fontFamily: "sans-serif" }}>
              Nutrition Guidance
            </div>
            <div style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245, 240, 235, 0.35)", fontFamily: "sans-serif" }}>
              Online Coaching
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
