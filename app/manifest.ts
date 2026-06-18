import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Srikanth Nani — Senior Product Engineer",
    short_name: "Srikanth Nani",
    description:
      "Senior Product Engineer designing, building and shipping end-to-end products for mobile and web, alongside open-source tools trusted by thousands of developers.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
