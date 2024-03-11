/*
Contact Component
- This component represents the contact section of the application.
- It includes social media links and contact information.

Dependencies:
- react
- framer-motion
- @radix-ui/react-icons (for icons)
- next/link (for routing)

Props:
None

Add/change/delete contact:
==> data/contact.ts

Usage Example:
<Contact />

Author: github.com/iamsrikanthnani
*/
"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import { ContactCaption, ContactEmail, ContactTitle } from "@/data";

const Contact = () => {
  const container = useRef(null); // Ref for container element
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className={
        "h-[50vh] flex flex-col bg-[#020202] pb-[8rem] w-screen px-8 sm:px-8 lg:px-36 pt-8 justify-center items-center"
      }
    >
      <div className={"flex flex-col items-center justify-center"}>
        <p
          className="font-bold text-2xl sm:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none"
          style={{ textAlign: "center" }}
        >
          {ContactTitle}
        </p>
        <p
          className="font-bold text-xl sm:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none"
          style={{ textAlign: "center" }}
        >
          {ContactCaption}
        </p>

        <Link
          style={{ color: "var(--accent-9)" }}
          href={`mailto:${ContactEmail}`}
          target="_blank"
        >
          <p className="font-600 text-2xl sm:text-2xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none">
            {ContactEmail}
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Contact;
