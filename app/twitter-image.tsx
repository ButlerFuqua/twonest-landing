// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "TwoNest - Two nests, one family."
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  // Fetch your existing image
  const imageData = await fetch("https://app.twonest.app/images/site-thumbnail.png").then((res) => res.arrayBuffer())

  // Return the existing image directly
  return new Response(imageData, {
    headers: {
      "Content-Type": "image/png",
    },
  })
}
