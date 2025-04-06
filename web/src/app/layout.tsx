import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VidVibe - Create and Share Amazing Videos",
  description:
    "VidVibe is a cutting-edge platform for creating, editing, and sharing stunning videos. Join our community and unleash your creativity with powerful video editing tools and seamless sharing capabilities.",
  keywords:
    "VidVibe, video editing, video sharing, create videos, video platform, video community, video tools",
  authors: [
    { name: "Hannan Dev", url: new URL("https://vidvibe-social.vercel.app") },
  ],
  metadataBase: new URL("https://vidvibe-social.vercel.app"),
  openGraph: {
    title: "VidVibe - Create and Share Amazing Videos",
    description:
      "Join VidVibe to create, edit, and share stunning videos. Unleash your creativity with powerful video editing tools and seamless sharing capabilities.",
    images: "/icon.png", // Use the relative path to your image in the public folder
    url: new URL("https://vidvibe-social.vercel.app"),
  },
  twitter: {
    card: "summary_large_image",
    title: "VidVibe - Create and Share Amazing Videos",
    description:
      "VidVibe is your go-to platform for creating, editing, and sharing stunning videos. Join our community and unleash your creativity with powerful video editing tools.",
    images: "/icon.png", // Use the relative path to your image in the public folder
  },
  robots: "index, follow",
  icons: {
    icon: "/icon.png", // Use the relative path to your icon in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
