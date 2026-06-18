/*
Hero section

This component represents the hero section of the application's main page.

Props:
None

Add/change/delete data:
==> data/hero.ts

Usage Example:
<Hero />

Author: github.com/iamsrikanthnani
*/

"use client";
import Background from "./Background";
import Marquee from "./Marquee";
import { HeroSlider1, HeroTitle1, HeroTitle2, SocialLinks } from "@/data";
import Link from "next/link";
import HoverAnimContainer from "../HoverAnimContainer";
import {
  CodeIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

const Hero = () => {
  // Function to get the corresponding icon for a given social media URL
  const getSocialIcon = (url: string) => {
    switch (true) {
      case url.startsWith("mailto:"):
        return <EnvelopeClosedIcon color="#fff" width={24} height={24} />;
      case url.includes("srikanthnani.com"):
        return <CodeIcon color="#fff" width={24} height={24} />;
      case url.includes("twitter"):
        return <TwitterLogoIcon color="#fff" width={24} height={24} />;
      case url.includes("github"):
        return <GitHubLogoIcon color="#fff" width={24} height={24} />;
      case url.includes("linkedin"):
        return <LinkedInLogoIcon color="#fff" width={24} height={24} />;
      case url.includes("youtube"):
        return <VideoIcon color="#fff" width={24} height={24} />;

      default:
        // If no matching social media found, return null or handle accordingly
        return null;
    }
  };

  return (
    <div className="relative h-screen bg-[#000] flex justify-center overflow-hidden">
      {/* Background animation */}
      <Background />
      <div className="flex flex-col relative z-50 mt-40 pointer-events-none select-none">
        {/* First text element */}
        <p
          className="font-bold text-6xl sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none"
          style={{ textAlign: "center" }}
        >
          {HeroTitle1}
        </p>
        <h1
          className="pt-2 font-bold text-6xl sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none"
          style={{ textAlign: "center" }}
        >
          {HeroTitle2}
        </h1>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-50">
        <Marquee baseVelocity={4}>{HeroSlider1}</Marquee>
      </div>

      {/* social links */}
      <div className="absolute top-12 right-12 z-[99999]">
        <div className="flex gap-4 justify-center items-center flex-wrap">
          {/* Map through SocialLinks array and render respective icons */}
          {SocialLinks.map((link, index) => (
            <Link href={link} target="_blank" key={index}>
              <HoverAnimContainer>{getSocialIcon(link)}</HoverAnimContainer>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
