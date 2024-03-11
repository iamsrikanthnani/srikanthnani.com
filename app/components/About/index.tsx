/*
About Component
- This component represents the about section of the application.
- It includes animations using GSAP and ScrollTrigger to reveal content as the user scrolls.

Dependencies:
- react
- gsap
- ScrollTrigger (from gsap)

Props:
None

Add/change/delete data:
==> data/about.ts

Usage Example:
<About />

Author: github.com/iamsrikanthnani
*/
"use client";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { AboutContent, AboutQuote } from "@/data";

const About = () => {
  // Refs for DOM elements
  let refs = useRef<HTMLSpanElement[]>([]);
  const body = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  // Effect hook to create animations on component mount
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin from GSAP
    createAnimation(); // Create animation
  }, []);

  // Function to create animations using GSAP and ScrollTrigger
  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current!, // Trigger animation when the container is in view
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 4.5}`, // Adjust animation end point based on viewport height
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  // Function to split words into individual letters for animation
  const splitWords = (phrase: string) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  // Function to split a word into individual letters
  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            if (el) refs.current.push(el); // Push each letter element to the refs array
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div
      ref={container}
      className="flex about-main h-screen w-screen bg-[#020202] justify-center items-center px-8 sm:px-8 lg:px-36 mt-[-120px]"
    >
      <div className="flex flex-col items-center gap-5 mt-[100px]">
        <p className="place-self-start text-md sm:text-md lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none">
          About me👇
        </p>
        {/* Display about content with animated letters */}
        <div
          ref={body}
          className="about-body text-left text-white mb-8 text-xl sm:text-xl md:text-2xl lg:text-3xl"
        >
          {splitWords(AboutContent)}
        </div>
        {/* Display about quote */}
        <p className="text-center mb-8 text-md sm:text-md md:text-xl lg:text-2xl text-neutral-500 mt-[16px]">
          {AboutQuote}
        </p>
      </div>
    </div>
  );
};

export default About;
