import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TwoNest - Two nests, one family.",
  description:
    "TwoNest lets you share routines, rules, and updates without direct communication—so your child can experience consistency across both homes without being exposed to conflict.",
  metadataBase: new URL("https://www.twonest.app"),
  keywords: ["co-parenting", "parenting app", "child custody", "parenting communication", "family management"],
  authors: [{ name: "TwoNest" }],
  creator: "TwoNest",
  publisher: "TwoNest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.twonest.app",
    title: "TwoNest - Two nests, one family.",
    description:
      "A better way to co-parent without the conflict. Share routines, rules, and updates without direct communication.",
    siteName: "TwoNest",
    images: [
      {
        url: "/images/site-thumbnail.png",
        // url: "https://www.twonest.app/opengraph-image.png", // TODO: use component approach
        width: 1200,
        height: 630,
        alt: "TwoNest - Two nests, one family.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TwoNest - Two nests, one family.",
    description:
      "A better way to co-parent without the conflict. Share routines, rules, and updates without direct communication.",
    images: ["/images/site-thumbnail.png"],
    // images: ["https://www.twonest.app/twitter-image.png"], // TODO: use component approach
    creator: "@twonestapp",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#0d9488",
    "theme-color": "#ffffff",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
