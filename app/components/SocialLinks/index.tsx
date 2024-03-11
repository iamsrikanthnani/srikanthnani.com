/*
Social links Component
- This component represents the contact section of the application.
- It includes social media links and contact information.

Dependencies:
- react
- framer-motion
- @radix-ui/react-icons (for icons)
- next/link (for routing)

Props:
None

Add/change/delete contact:
==> data/contact.ts

Usage Example:
<Social />

Author: github.com/iamsrikanthnani
*/
"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import {
  CodeIcon,
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import HoverAnimContainer from "../HoverAnimContainer";
import { SocialLinks } from "@/data";

const Social = () => {
  const container = useRef(null); // Ref for container element
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  // Function to get the corresponding icon for a given social media URL
  const getSocialIcon = (url: string) => {
    switch (true) {
      case url.includes("srikanthnani.com"):
        return <CodeIcon color="#fff" width={54} height={54} />;
      case url.includes("twitter"):
        return <TwitterLogoIcon color="#fff" width={54} height={54} />;
      case url.includes("github"):
        return <GitHubLogoIcon color="#fff" width={54} height={54} />;
      case url.includes("linkedin"):
        return <LinkedInLogoIcon color="#fff" width={54} height={54} />;
      case url.includes("discord"):
        return <DiscordLogoIcon color="#fff" width={54} height={54} />;
      case url.includes("youtube"):
        return <VideoIcon color="#fff" width={54} height={54} />;
      case url.startsWith("mailto:"):
        return <EnvelopeClosedIcon color="#fff" width={54} height={54} />;

      default:
        // If no matching social media found, return null or handle accordingly
        return null;
    }
  };
  return (
    <motion.div
      style={{ y }}
      ref={container}
      className={
        "h-[50vh] flex flex-col bg-[black] pb-[8rem] w-screen px-8 sm:px-8 lg:px-36 pt-8 justify-center items-center"
      }
    >
      <div className={"flex flex-col items-center justify-center"}>
        <div className="flex items-center mt-8">
          <div className="flex gap-8 justify-center items-center flex-wrap">
            {/* Map through SocialLinks array and render respective icons */}
            {SocialLinks.map((link, index) => (
              <Link href={link} target="_blank" key={index}>
                <HoverAnimContainer>{getSocialIcon(link)}</HoverAnimContainer>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Social;
