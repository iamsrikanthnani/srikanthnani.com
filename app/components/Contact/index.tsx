/*
Contact Component

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
import { ArrowRightIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import HoverAnimContainer from "../HoverAnimContainer";
import {
  ContactBadge,
  ContactCaption,
  ContactEmail,
  ContactTitle,
} from "@/data";

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
      className="flex flex-col bg-[#020202] w-screen px-6 sm:px-8 lg:px-36 pt-12 pb-[10rem] justify-center items-center"
    >
      <div className="flex flex-col items-center gap-6 text-center max-w-2xl">
        <div className="flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.06] px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="text-xs sm:text-sm text-neutral-300">
            {ContactBadge}
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none pb-2">
          {ContactTitle}
        </h2>

        {/* Caption */}
        <p className="text-base sm:text-lg text-neutral-400 max-w-xl">
          {ContactCaption}
        </p>

        <HoverAnimContainer className="mt-3 w-fit">
          <Link
            href={`mailto:${ContactEmail}`}
            aria-label={`Email ${ContactEmail}`}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <EnvelopeClosedIcon className="w-5 h-5" />
            <span className="font-semibold text-sm sm:text-lg">
              {ContactEmail}
            </span>
            <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </HoverAnimContainer>

        <p className="text-xs sm:text-sm text-neutral-600 mt-1">
          I read every email - just no spam, please 🙏
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
