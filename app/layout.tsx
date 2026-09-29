import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";
import "./globals.css";

const title = "The Hoodsters — NFT Collection & Collective";
const description =
  "Meet The Hoodsters: a collective of 3,333 anime-inspired NFTs on Robinhood Chain. Each Hoodster is a unique piece of the collection. Explore the art and free mint.";
const socialImage = {
  url: "/assets/scene-20.webp",
  alt: "The Hoodsters overlooking a neon-green futuristic city",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title,
  applicationName: "The Hoodsters",
  icons: { icon: "/assets/sharehoodlers-logo.png" },
  description,
  keywords: [
    "The Hoodsters",
    "Hoodster",
    "NFT collection",
    "NFT collective",
    "Robinhood Chain",
    "anime NFTs",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    siteName: "The Hoodsters",
    type: "website",
    locale: "en_US",
    url: "/",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
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
