/*
Skills Component
- This component represents the skills section of the application.
- It utilizes Framer Motion for animations and handles scroll effects.

Dependencies:
- react
- framer-motion

Props:
None

Add/change/delete skills:
==> data/skills.ts

Usage Example:
<Skills />

Author: github.com/iamsrikanthnani
*/

"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { SkillsList } from "@/data";
import HoverAnimContainer from "../HoverAnimContainer";

const Skills = () => {
  // Ref for container element
  const container = useRef(null);

  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: container, // Set scroll target to container element
    offset: ["start end", "end end"], // Offset for scroll effect
  });

  // Transform y position based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [-250, 0]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="flex bg-black pb-[8rem] w-screen px-8 sm:px-8 lg:px-36 pt-8"
    >
      <div className="flex flex-col items-center gap-4">
        <p className="place-self-start	 text-md sm:text-md lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none">
          Skills👇
        </p>
        {/* Map through skills list and render each skill */}
        <div className="flex gap-4 sm:gap-12 mt-6 flex-wrap justify-center">
          {SkillsList.map((skill, index) => (
            <HoverAnimContainer key={`skill-${index}`}>
              <img
                src={skill}
                className="w-24 h-24 sm:w-24 sm:h-24 lg:w-36 lg:h-36"
              />
            </HoverAnimContainer>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
