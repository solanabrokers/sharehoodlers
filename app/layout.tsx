import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "shareHOODlers — 3,333 Shares. One Collective.",
  description:
    "Meet shareHOODlers: 3,333 anime-inspired digital share certificates on Robinhood Chain. Explore the collection, vision and free mint.",
  openGraph: {
    title: "shareHOODlers — 3,333 Shares. One Collective.",
    description:
      "A community-driven collection built around ownership, culture and the HOOD.",
    images: [{ url: "/assets/scene-20.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
