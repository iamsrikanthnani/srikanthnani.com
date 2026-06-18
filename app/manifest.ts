import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Srikanth Nani - Product Engineer",
    short_name: "Srikanth Nani",
    description:
      "Portfolio of Srikanth Nani, a Product Engineer specializing in React Native, ReactJS, Next.js, Node.js, and AI products.",
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
