/*
Experience Component
- This component represents the experience section of the application.

Props:
None

Add/change/delete data:
==> data/experience.ts

Usage Example:
<Experience />

Author: github.com/iamsrikanthnani
*/
"use client";
import { ExperienceList } from "@/data";
import HoverAnimContainer from "../HoverAnimContainer";

const Experience = () => {
  return (
    <div className="flex flex-col items-center about-main h-[110vh] w-screen bg-[#121212] px-8 sm:px-8 lg:px-36 py-16">
      <p className="place-self-start text-md sm:text-md lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none pb-4">
        Experience👇
      </p>

      {ExperienceList.map((item, index) => (
        <div className="w-full ">
          <HoverAnimContainer key={`skill-${index}`}>
            <div
              key={index}
              className="flex py-12 sm:py-12 md:py-10 px-8 sm:px-8 md:px-16 justify-between"
            >
              <p className="text-xl sm:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none">
                {item?.company}
              </p>

              <p className="text-sm sm:text-sm lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none">
                {item?.exp}
              </p>
            </div>
            <hr className=" border-t-[rgba(255,255,255,0.15)]" />
          </HoverAnimContainer>
        </div>
      ))}
    </div>
  );
};

export default Experience;
