import type { Metadata, Viewport } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SocialLinks, ContactEmail } from "./data/contact";
import Script from "next/script";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
});

// SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://srikanthnani.com"),
  title: "Srikanth Nani — Senior Product Engineer",
  description:
    "Srikanth Nani is a Senior Product Engineer who designs, builds and ships end-to-end products for mobile and web — and open-source tools trusted by thousands of developers worldwide.",
  keywords:
    "Srikanth Nani, srikanthnani, iamsrikanthnani, Srikanth, Nani, Srikanth Nani Product Engineer, Srikanth Nani portfolio, Srikanth Nani developer, srikanthnani.com, Pluely, HeyNotch, Product Engineer, Mobile Developer, Web Developer, Product Development, React Native, ReactJS, Next.js, Node.js, MongoDB, TypeScript, JavaScript, Python, Rust, Hyderabad developer",
  robots: "index, follow",
  creator: "Srikanth Nani",
  publisher: "Srikanth Nani",
  authors: [
    { name: "Srikanth Nani", url: "https://srikanthnani.com/" },
    { name: "Srikanth Nani", url: "https://iamsrikanthnani.com/" },
  ],
  alternates: { canonical: "https://srikanthnani.com" },
  openGraph: {
    title: "Srikanth Nani — Senior Product Engineer",
    description:
      "Senior Product Engineer designing, building and shipping end-to-end products for mobile and web, alongside open-source tools trusted by thousands of developers.",
    url: "https://srikanthnani.com/",
    type: "website",
    locale: "en_US",
    siteName: "Srikanth Nani Portfolio",
    images: [
      {
        url: "https://srikanthnani.com/site-image.png",
        width: 1506,
        height: 779,
        alt: "Srikanth Nani - Product Engineer Portfolio",
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
    title: "Srikanth Nani — Senior Product Engineer",
    description:
      "Senior Product Engineer designing, building and shipping end-to-end products for mobile and web, alongside open-source tools trusted by thousands of developers.",
    card: "summary_large_image",
    creator: "@srikanthnani",
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
    <html lang="en" className={comfortaa.variable}>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://srikanthnani.com/#person",
                  name: "Srikanth Nani",
                  alternateName: [
                    "srikanthnani",
                    "iamsrikanthnani",
                    "Srikanth Nani",
                  ],
                  url: "https://srikanthnani.com",
                  image: "https://srikanthnani.com/site-image.png",
                  jobTitle: "Senior Product Engineer",
                  email: ContactEmail,
                  description:
                    "Senior Product Engineer who designs, builds and ships end-to-end products for mobile and web, and open-source tools trusted by thousands of developers worldwide.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Hyderabad",
                    addressRegion: "Telangana",
                    addressCountry: "IN",
                  },
                  knowsAbout: [
                    "Pluely",
                    "Open Source Developer",
                    "React Native",
                    "ReactJS",
                    "Next.js",
                    "Node.js",
                    "TypeScript",
                    "JavaScript",
                    "MongoDB",
                    "Python",
                    "Rust",
                    "Desktop applications",
                    "Product Engineering",
                    "End-to-End Product Development",
                    "Frontend Development",
                    "Backend Development",
                    "Database Management",
                    "API Development",
                    "AI/ML",
                  ],
                  sameAs: [twitterUrl, githubUrl, linkedinUrl, youtubeUrl],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://srikanthnani.com/#website",
                  url: "https://srikanthnani.com",
                  name: "Srikanth Nani",
                  alternateName: [
                    "Srikanth Nani Portfolio",
                    "iamsrikanthnani",
                    "srikanthnani.com",
                    "Srikanth Nani",
                    "Srikanthnani",
                  ],
                  description:
                    "The portfolio of Srikanth Nani — Senior Product Engineer building open-source tools and end-to-end products for mobile and web.",
                  publisher: { "@id": "https://srikanthnani.com/#person" },
                  inLanguage: "en",
                },
              ],
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
