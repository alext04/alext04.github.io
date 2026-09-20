import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { SITE_URL } from "@/lib/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamically generated Open Graph card.
 *
 * Previously there was no OG image at all, so every share on LinkedIn, Slack, or
 * X rendered a blank grey placeholder. This renders the card at request time
 * from the same content layer as the page, so it can never show a stale title.
 *
 * Deliberately uses system font stacks: next/font instances are not available
 * to the OG renderer, and fetching a webfont at request time would add latency
 * and a network dependency to every social unfurl.
 */
export default function OpengraphImage() {
  const stack = [
    { label: "Backend", value: "FastAPI · PostgreSQL · REST" },
    { label: "Cloud", value: "AWS · Step Functions · Docker" },
    { label: "Applied AI", value: "RAG · LLM Integration · Ray" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08090b",
          padding: "72px 80px",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
          position: "relative",
        }}
      >
        {/* Accent wash */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 720,
            height: 720,
            borderRadius: 720,
            background:
              "radial-gradient(circle, rgba(239,68,68,0.22) 0%, rgba(239,68,68,0) 70%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              color: "#9aa3b2",
              letterSpacing: 0.4,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "#34d399",
              }}
            />
            Software Engineer @ Bridgera
          </div>

          <div
            style={{
              marginTop: 30,
              fontSize: 82,
              fontWeight: 700,
              color: "#f2f4f7",
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 38,
              fontWeight: 600,
              color: "#ef4444",
              letterSpacing: -0.5,
              lineHeight: 1.2,
              maxWidth: 900,
            }}
          >
            {profile.tagline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              gap: 56,
              borderTop: "1px solid #23262e",
              paddingTop: 28,
            }}
          >
            {stack.map((item) => (
              <div
                key={item.label}
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <div
                  style={{
                    fontSize: 18,
                    color: "#6b7383",
                    textTransform: "uppercase",
                    letterSpacing: 1.4,
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: 22, color: "#9aa3b2" }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 20,
              color: "#6b7383",
            }}
          >
            <div>{SITE_URL.replace(/^https?:\/\//, "")}</div>
            <div>{profile.contact.location}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
