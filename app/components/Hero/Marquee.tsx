/*
Marquee
- A horizontally looping text strip that drifts at a constant, smooth speed
  and simply flips direction based on the scroll direction (the original feel).
  Seamless infinite loop.

Author: github.com/iamsrikanthnani
*/
"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  const mod = (((v - min) % range) + range) % range;
  return mod + min;
};

const REPEAT = 8;

const Marquee = ({
  children,
  baseVelocity = 4,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const x = useTransform(baseX, (v) => `${wrap(-100 / REPEAT, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    const v = scrollVelocity.get();
    if (v < -2)
      directionFactor.current = -1; // scrolling up
    else if (v > 2) directionFactor.current = 1; // scrolling down

    baseX.set(
      baseX.get() + directionFactor.current * baseVelocity * (delta / 1000),
    );
  });

  return (
    <div className="w-full overflow-hidden whitespace-nowrap select-none pointer-events-none">
      <motion.div className="flex w-max flex-nowrap" style={{ x }}>
        {Array.from({ length: REPEAT }).map((_, i) => (
          <span key={i} className="flex flex-none items-center">
            <span className="font-bold text-5xl sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500">
              {children}
            </span>
            <span className="mx-6 sm:mx-10 text-3xl sm:text-4xl lg:text-5xl text-green-400/50">
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
