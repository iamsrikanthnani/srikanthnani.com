import type { Metadata, Viewport } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SocialLinks, ContactEmail } from "./data/contact";
import Script from "next/script";

const comfortaa = Comfortaa({ subsets: ["latin"] });

// SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://srikanthnani.com"),
  title: "Srikanth Nani - Product Engineer 👨‍💻",
  description:
    "Experienced Product Engineer specializing in end-to-end product development with expertise in React Native, ReactJS, NextJS, Node.js, MongoDB, TypeScript, JavaScript, and Python.",
  keywords:
    "Srikanth Nani, Product Engineer, Mobile Developer, Web Developer, Product Development, React Native, ReactJS, Next.js, Node.js, MongoDB, TypeScript, JavaScript, Python",
  robots: "index, follow",
  creator: "Srikanth Nani",
  publisher: "Srikanth Nani",
  authors: [
    { name: "Srikanth Nani", url: "https://srikanthnani.com/" },
    { name: "Srikanth Nani", url: "https://iamsrikanthnani.com/" },
  ],
  alternates: { canonical: "https://srikanthnani.com" },
  openGraph: {
    title: "Srikanth Nani - Product Engineer 👨‍💻",
    description:
      "Experienced Product Engineer specializing in end-to-end product development with expertise in React Native, ReactJS, NextJS, Node.js, MongoDB, TypeScript, JavaScript, and Python.",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  appleWebApp: {
    title: "Srikanth Nani Portfolio",
    statusBarStyle: "default",
    capable: true,
  },
  twitter: {
    title: `👋 Hello! i am Srikanth Nani`,
    description:
      "Experienced Product Engineer specializing in end-to-end product development with expertise in React Native, ReactJS, NextJS, Node.js, MongoDB, TypeScript, JavaScript, and Python.",
    card: "summary_large_image",
    creator: "@truly_sn",
    site: "https://srikanthnani.com/",
    images: ["https://srikanthnani.com/site-image.png"],
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Extract social profiles from SocialLinks
  const twitterUrl = SocialLinks.find((link) => link.includes("twitter")) || "";
  const githubUrl = SocialLinks.find((link) => link.includes("github")) || "";
  const linkedinUrl =
    SocialLinks.find((link) => link.includes("linkedin")) || "";
  const youtubeUrl = SocialLinks.find((link) => link.includes("youtube")) || "";

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Srikanth Nani",
              url: "https://srikanthnani.com",
              image: "https://srikanthnani.com/site-image.png",
              jobTitle: "Product Engineer",
              email: ContactEmail,
              description:
                "Experienced Product Engineer specializing in end-to-end product development and delivering user-centric solutions",
              sameAs: [twitterUrl, githubUrl, linkedinUrl, youtubeUrl],
            }),
          }}
        />
      </head>
      <body className={`${comfortaa.className} bg-black`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
