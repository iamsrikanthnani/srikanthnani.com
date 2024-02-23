"use client";
import { useRef, useState } from "react";
import Pattern from "./Pattern";

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<any>(null);

  const handleMouseMove = (event: any) => {
    const rect = ref.current && ref.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const size = 700;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-full absolute inset-0"
    >
      <div className="absolute h-[90vh] inset-y-0  overflow-hidden">
        <div className="absolute h-[20vh] w-full pointer-events-none -bottom-2 z-40 bg-[#000] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(${
              size / 5
            }px circle at center, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${
              size / 4
            }px circle at center, white, transparent)`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern
            className="opacity-[0.5]"
            cellClassName="border-green-100 relative z-[100]"
          />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-neutral-800" />
      </div>
    </div>
  );
};

export default Background;
