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
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { opacity, slideUp } from "./anim"; // Import animation variants
import { languages } from "@/data"; // Import language data

export function PreloaderComponent() {
  // State to track current language index and window dimensions
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const progress = useTransform(count, (v) => `${v}%`);

  // Effect to set initial window dimensions
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    const controls = animate(count, 100, { duration: 2.9, ease: "easeInOut" });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect to update language index periodically
  useEffect(() => {
    // Return if reached the end of languages array
    if (index == languages.length - 1) return;

    const restStep = Math.floor(2000 / (languages.length - 1));
    const timer = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : restStep,
    );

    return () => clearTimeout(timer);
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 z-[2] px-6 sm:px-10 pb-8"
          >
            <div className="flex items-end justify-between">
              <span className="text-sm sm:text-base tracking-wide text-neutral-500">
                srikanthnani.com
              </span>
              <div className="flex items-baseline gap-1">
                <motion.span className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500">
                  {rounded}
                </motion.span>
                <span className="text-xl text-neutral-500">%</span>
              </div>
            </div>
            <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                style={{ width: progress }}
                className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500"
              />
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

export default function Preloader() {
  // // State to track loading status
  const [isLoading, setIsLoading] = useState(true);

  // Effect hook to handle loading animation and scroll behavior
  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  return (
    <AnimatePresence mode="wait">
      {isLoading && <PreloaderComponent />}
    </AnimatePresence>
  );
}
