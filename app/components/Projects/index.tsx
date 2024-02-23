/*
Projects Component
- This component represents the projects section of the application.
- It displays a list of projects with animations based on scroll.

Dependencies:
- react
- framer-motion

Props:
None

Add/change/delete projects:
==> data/projects.ts

Usage Example:
<Projects />

Author: github.com/iamsrikanthnani
*/

"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ProjectsEndText, ProjectsList, ProjectsTitle } from "@/data";
import Card from "./Card";

const Projects = () => {
  const targetRef = useRef(null); // Ref for target element
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform x position based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <div className="w-screen">
      {/* desktop view */}
      <section
        ref={targetRef}
        className="hidden md:block lg:block relative h-[300vh] bg-[#141516]"
      >
        <p
          className="font-bold text-5xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none pl-14 pt-8"
          style={{ textAlign: "center", position: "absolute", top: 40 }}
        >
          {ProjectsTitle}
        </p>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Map through projects list and render each project card */}
          <motion.div style={{ x }} className="flex gap-8 items-center">
            {ProjectsList.map((card, index) => {
              return <Card card={card} key={card.name} index={index} />;
            })}
            <p
              className="font-bold text-4xl sm:text-5xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none  pl-16"
              style={{ textAlign: "center", width: "500px" }}
            >
              {ProjectsEndText}
            </p>
          </motion.div>
        </div>
      </section>
      {/* mobile view */}
      <section className="block  pt-8 h-audo sm:block md:hidden lg:hidden relative bg-[#141516]">
        <p className="font-bold pl-4 text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none">
          {ProjectsTitle}
        </p>
        <div className="flex flex-col  items-center m-4 sm:m-4">
          {/* Map through projects list and render each project card */}
          {ProjectsList.map((card, index) => {
            return <Card card={card} key={card.name} index={index} />;
          })}
          <p
            className="font-bold text-3xl sm:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none pb-16 pt-8"
            style={{ textAlign: "center", width: "300px" }}
          >
            {ProjectsEndText}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
