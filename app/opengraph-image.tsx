import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "TwoNest - Co-Parent Smarter. Raise Stronger."
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "linear-gradient(90deg, #0d9488 0%, #14b8a6 100%)",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "24px",
          }}
        >
          <div
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            TN
          </div>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
          }}
        >
          TwoNest
        </div>
      </div>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "16px",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        Co-Parent Smarter. Raise Stronger.
      </div>
      <div
        style={{
          fontSize: "32px",
          color: "#666",
          textAlign: "center",
          maxWidth: "70%",
        }}
      >
        Because your child deserves clarity, not chaos.
      </div>
    </div>,
    {
      ...size,
    },
  )
}
