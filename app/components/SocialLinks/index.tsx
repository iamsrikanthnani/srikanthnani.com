/*
Social links Component

Add/change/delete contact:
==> data/contact.ts

Usage Example:
<Social />

Author: github.com/iamsrikanthnani
*/
"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import {
  CodeIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import XIcon from "../icons/XIcon";
import HoverAnimContainer from "../HoverAnimContainer";
import { SocialLinks } from "@/data";

const getSocialMeta = (url: string) => {
  const cls = "w-6 h-6 sm:w-7 sm:h-7";
  switch (true) {
    case url.startsWith("mailto:"):
      return { name: "Email", icon: <EnvelopeClosedIcon className={cls} /> };
    case url.includes("srikanthnani.com"):
      return { name: "Source Code", icon: <CodeIcon className={cls} /> };
    case url.includes("x.com"):
      return { name: "X", icon: <XIcon className={cls} /> };
    case url.includes("github"):
      return { name: "GitHub", icon: <GitHubLogoIcon className={cls} /> };
    case url.includes("linkedin"):
      return { name: "LinkedIn", icon: <LinkedInLogoIcon className={cls} /> };
    case url.includes("youtube"):
      return { name: "YouTube", icon: <VideoIcon className={cls} /> };
    default:
      return { name: "", icon: null };
  }
};

const Social = () => {
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
      className="flex flex-col gap-8 bg-[#020202] w-screen justify-center items-center py-20 sm:py-28"
    >
      <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-500">
        Find me online
      </p>

      <div className="grid grid-cols-3 gap-6 justify-items-center sm:flex sm:flex-row sm:flex-wrap sm:gap-7 sm:items-center sm:justify-center">
        {SocialLinks.map((link, index) => {
          const { name, icon } = getSocialMeta(link);
          return (
            <div
              key={index}
              className="group relative flex items-center justify-center hover:z-20"
            >
              <HoverAnimContainer>
                <div className="relative inline-flex items-center justify-center">
                  <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 scale-90 translate-y-1 opacity-0 transition-all duration-200 ease-out group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="w-max rounded-lg border border-white/10 bg-[#0d0d0f]/90 px-3 py-1.5 text-center shadow-xl shadow-black/40 backdrop-blur-sm">
                      <span className="text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                        {name}
                      </span>
                    </div>
                    <div className="absolute left-1/2 top-full -mt-1 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-[#0d0d0f]/90" />
                  </div>

                  <Link
                    href={link}
                    target="_blank"
                    aria-label={name}
                    className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white transition-all duration-300 group-hover:border-green-400/40 group-hover:bg-white/[0.06] group-hover:text-green-300 group-hover:shadow-lg group-hover:shadow-blue-500/20"
                  >
                    {icon}
                  </Link>
                </div>
              </HoverAnimContainer>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Social;
