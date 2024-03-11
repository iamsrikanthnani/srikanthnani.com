import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: any) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="hidden md:block lg:block ">
      <motion.div
        className={"cursor bg-gradient-to-b from-green-400 to-blue-500  "}
        animate={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default Cursor;
