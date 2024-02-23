import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const comfortaa = Comfortaa({ subsets: ["latin"] });

// SEO
export const metadata: Metadata = {
  title: "Srikanth Nani - Full-Stack Developer 👨‍💻",
  description:
    "Experienced Full-Stack Developer specializing in Mobile and Web Development with expertise in React Native, ReactJS, NextJS, Node.js, MongoDB, TypeScript, JavaScript, and Python.",
  keywords:
    "Srikanth Nani, Full-Stack Developer, Mobile Developer, Web Developer, React Native, ReactJS, Next.js, Node.js, MongoDB, TypeScript, JavaScript, Python",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  creator: "Srikanth Nani",
  publisher: "Srikanth Nani",
  authors: [
    { name: "Srikanth Nani", url: "https://srikanthnani.com/" },
    { name: "Srikanth Nani", url: "https://iamsrikanthnani.com/" },
  ],
  alternates: { canonical: "https://srikanthnani.com" },
  openGraph: {
    title: "Srikanth Nani - Full-Stack Developer 👨‍💻",
    description:
      "Experienced Full-Stack Developer specializing in Mobile and Web Development with expertise in React Native, ReactJS, NextJS, Node.js, MongoDB, TypeScript, JavaScript, and Python.",
    url: "https://srikanthnani.com/",
    type: "website",
    locale: "en_US",
    siteName: "Srikanth Nani Portfolio",
    images: [
      {
        url: "https://srikanthnani.com/site-image.png",
        alt: "Srikanth Nani Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  appleWebApp: {
    title: "Srikanth Nani Portfolio",
    statusBarStyle: "default",
    capable: true,
  },
  twitter: {
    title: `👋 Hello! i am Srikanth Nani`,
    description:
      "Experienced Full-Stack Developer specializing in Mobile and Web Development with expertise in React Native, ReactJS, NextJS, Node.js, MongoDB, TypeScript, JavaScript, and Python.",
    card: "summary_large_image",
    creator: "@truly_sn",
    site: "https://srikanthnani.com/",
    images: ["https://srikanthnani.com/site-image.png"],
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
