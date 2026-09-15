import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(160deg, #f4ecd8, #e9dcbd)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#a86a29",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 40, height: 2, background: "#a86a29" }} />
          Strategia dla jednego gracza
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 58,
            fontWeight: 700,
            color: "#1b1712",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {siteConfig.shortTitle}
        </div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 28, color: "#4a4030", maxWidth: 900 }}>
          Gospodarka, drzewo technologii i twierdze — bez rywali online.
        </div>
      </div>
    ),
    { ...size },
  );
}
