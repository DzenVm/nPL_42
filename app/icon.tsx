import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#24201a",
          borderRadius: 14,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <polygon points="21,3 37,12 37,30 21,39 5,30 5,12" stroke="#c98a3e" strokeWidth="2.4" fill="none" />
          <polygon points="21,13 29,17.5 29,26.5 21,31 13,26.5 13,17.5" fill="#c98a3e" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
