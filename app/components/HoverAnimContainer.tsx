import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Component for handling hover animations
const HoverAnimContainer = ({ children }: any) => {
  // Reference to the container element
  const ref = useRef(null);
  // State for the position of the mouse
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Handler for mouse movement
  const handleMouse = (e: any) => {
    const { clientX, clientY } = e;
    // Get the dimensions and position of the container
    // @ts-ignore
    const { height, width, left, top } = ref?.current?.getBoundingClientRect();
    // Calculate the position of the mouse relative to the center of the container
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Update the position state
    setPosition({ x: middleX, y: middleY });
  };

  // Reset the position state when the mouse leaves the container
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    // Apply motion to enable animation
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }} // Animate based on mouse position
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }} // Spring animation configuration
    >
      {children}
    </motion.div>
  );
};

export default HoverAnimContainer;
