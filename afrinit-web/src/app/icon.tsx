import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#E8741E",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            width: "14px",
            height: "14px",
            background: "#1F130C",
            borderRadius: "3px",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
