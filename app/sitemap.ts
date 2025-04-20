import type { MetadataRoute } from "next";
import { SocialLinks } from "./data/contact";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://srikanthnani.com";

  const mainUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 1,
    },
  ];

  // Map social links to sitemap entries, excluding email addresses
  const socialUrls = SocialLinks.filter(
    (link) => !link.startsWith("mailto:")
  ).map((link) => ({
    url: link,
    lastModified: new Date(),
    changeFrequency: "weekly" as ChangeFrequency,
    priority: 0.8,
  }));

  // Combine all URLs
  return [...mainUrls, ...socialUrls];
}
