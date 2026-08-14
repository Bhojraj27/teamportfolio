import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = siteConfig.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060a",
          color: "#f4f5f8",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6 }}>
          {siteConfig.name.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
            Reliable Remote Development. We design, build and deploy scalable digital products worldwide.
          </div>
          <div style={{ marginTop: 24, fontSize: 24, color: "#9aa1b5", maxWidth: 760 }}>
            React · Next.js · Node.js · AWS · MongoDB · React Native · CI/CD
          </div>
        </div>
      </div>
    ),
    size,
  );
}
