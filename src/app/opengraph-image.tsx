import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = SITE_NAME;
export const size = {
  width: 1200,
  height: 630,
};
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
          alignItems: "center",
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: "76px",
            fontWeight: 700,
            letterSpacing: "-1.5px",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            width: "120px",
            height: "4px",
            backgroundColor: "#ffffff",
            marginTop: "24px",
          }}
        />
        <div
          style={{
            fontSize: "32px",
            color: "#9ca3af",
            marginTop: "24px",
          }}
        >
          Online Photography Courses
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "36px",
            fontSize: "20px",
            color: "#d1d5db",
          }}
        >
          <span>Learn Online</span>
          <span>&bull;</span>
          <span>Live Classes</span>
          <span>&bull;</span>
          <span>Expert Mentors</span>
        </div>
      </div>
    ),
    size,
  );
}
