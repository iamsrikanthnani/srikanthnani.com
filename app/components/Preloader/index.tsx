/*
  Preloader Component

  This component displays a preloader animation while content is being loaded.
  It dynamically changes the displayed language during the loading process.

  Dependencies:
  - react
  - framer-motion

  Props:
  None

  Add/change/delete languages:
  ==> data/preloader.ts

  Usage Example:
  <Preloader />

  Author: github.com/iamsrikanthnani
*/

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim"; // Import animation variants
import { languages } from "@/data"; // Import language data

export default function Preloader() {
  // State to track current language index and window dimensions
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // Effect to set initial window dimensions
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Effect to update language index periodically
  useEffect(() => {
    // Return if reached the end of languages array
    if (index == languages.length - 1) return;

    // Update index after a delay, with a shorter delay after the first language
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  // Define initial and target paths for SVG animation
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  // Define animation variants for SVG path
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={"preloader"}
    >
      {dimension.width > 0 && (
        <>
          {/* Text animation for displaying languages */}
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-6xl sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none"
          >
            {languages[index]}
          </motion.p>
          {/* SVG animation for background */}
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
