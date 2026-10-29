import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1F130C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#E8741E",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                background: "#1F130C",
                borderRadius: "6px",
                transform: "rotate(45deg)",
              }}
            />
          </div>
          <span
            style={{
              color: "#F6EDE3",
              fontSize: "44px",
              fontWeight: "bold",
              letterSpacing: "-0.02em",
            }}
          >
            Afrinit
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span
            style={{
              color: "#7DB364",
              fontSize: "20px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Technology company · Founded 2026
          </span>
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: "1000px",
              margin: 0,
            }}
          >
            Software built in Africa, for businesses that mean to grow.
          </h1>
          <p
            style={{
              color: "#D9C8B6",
              fontSize: "26px",
              lineHeight: 1.5,
              maxWidth: "900px",
              margin: 0,
            }}
          >
            Web platforms, mobile apps and custom business systems.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #3A2518",
            paddingTop: "30px",
          }}
        >
          <span style={{ color: "#E8741E", fontSize: "20px", fontWeight: "bold" }}>
            afrinit.com
          </span>
          <span style={{ color: "#D9C8B6", fontSize: "18px" }}>
            Pan-African Software Engineering
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
