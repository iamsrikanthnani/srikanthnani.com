/*
Hero section

This component represents the hero section of the application's main page.
It includes animations for text elements and utilizes GSAP and ScrollTrigger for scrolling effects.

Dependencies:
- react
- framer-motion
- gsap
- ScrollTrigger (from gsap/all)

Props:
None

Add/change/delete data:
==> data/hero.ts

Usage Example:
<Hero />

Author: github.com/iamsrikanthnani
*/

"use client";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "../Preloader/anim";
import Background from "./Background";
import {
  HeroSlider1,
  HeroSlider2,
  HeroTitle1,
  HeroTitle2,
  SocialLinks,
} from "@/data";
import Link from "next/link";
import HoverAnimContainer from "../HoverAnimContainer";
import {
  CodeIcon,
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
const Hero = () => {
  const firstText = useRef(null); // Ref for first text element
  const secondText = useRef(null); // Ref for second text element
  const slider = useRef(null); // Ref for slider element
  let xPercent = 0; // Initial x percent for animation
  let direction = -1; // Initial direction for animation

  // Effect hook for GSAP animations and ScrollTrigger
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
    gsap.to(slider.current, {
      // GSAP animation for slider
      scrollTrigger: {
        trigger: document.documentElement, // Set trigger to document
        scrub: 0.25, // Set scrubbing factor
        start: 0, // Set start position
        end: window.innerHeight, // Set end position
        onUpdate: (e) => (direction = e.direction * -1), // Update direction on scroll
      },
      x: "-500px", // Move slider horizontally
    });
    requestAnimationFrame(animate); // Request animation frame for continuous animation
  }, []);

  // Function for continuous animation
  const animate = () => {
    if (xPercent < -100) {
      // Reset x percent if below -100
      xPercent = 0;
    } else if (xPercent > 0) {
      // Reset x percent if above 0
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent }); // Set x percent for first text
    gsap.set(secondText.current, { xPercent: xPercent }); // Set x percent for second text
    requestAnimationFrame(animate); // Request animation frame for continuous animation
    xPercent += 0.1 * direction; // Update x percent based on direction
  };

  // Function to get the corresponding icon for a given social media URL
  const getSocialIcon = (url: string) => {
    switch (true) {
      case url.includes("srikanthnani.com"):
        return <CodeIcon color="#fff" width={24} height={24} />;
      case url.includes("twitter"):
        return <TwitterLogoIcon color="#fff" width={24} height={24} />;
      case url.includes("github"):
        return <GitHubLogoIcon color="#fff" width={24} height={24} />;
      case url.includes("linkedin"):
        return <LinkedInLogoIcon color="#fff" width={24} height={24} />;
      case url.includes("discord"):
        return <DiscordLogoIcon color="#fff" width={24} height={24} />;
      case url.includes("youtube"):
        return <VideoIcon color="#fff" width={24} height={24} />;
      case url.startsWith("mailto:"):
        return <EnvelopeClosedIcon color="#fff" width={24} height={24} />;

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
        {/* Second text element */}
        <p
          className="font-bold text-6xl text- sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none"
          style={{ textAlign: "center" }}
        >
          {HeroTitle2}
        </p>
        <img
          alt="srikanthnani visitors badge"
          className="w-24 h-6 self-center mt-2"
          src={
            "https://visitor-badge.laobi.icu/badge?page_id=iamsrikanthnani.iamsrikanthnani"
          }
        />
        {/* Hero footer with animation */}
        <motion.main variants={slideUp} initial="initial" animate="enter">
          <div style={{ position: "absolute", bottom: 16 }}>
            {/* Slider for text elements */}
            <div ref={slider} className={"flex hero-slider"}>
              {/* First text element */}
              <p
                ref={firstText}
                className="text-6xl sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none"
              >
                {HeroSlider1}
              </p>
              {/* Second text element */}
              <p
                ref={secondText}
                className="text-6xl sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none"
              >
                {HeroSlider2}
              </p>
            </div>
          </div>
        </motion.main>
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
