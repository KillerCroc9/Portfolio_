import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KillerCroc9 - Generative AI Portfolio",
  description:
    "Exploring the frontiers of AI-generated content. From animated narratives to architectural visions, pushing the boundaries of what machines can create.",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={geistSans.className}>{children}</body>
    </html>
  )
}
