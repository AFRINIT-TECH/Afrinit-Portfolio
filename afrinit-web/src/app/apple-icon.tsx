import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1F130C",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
        }}
      >
        <div
          style={{
            width: "110px",
            height: "110px",
            background: "#E8741E",
            borderRadius: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#1F130C",
              borderRadius: "12px",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
