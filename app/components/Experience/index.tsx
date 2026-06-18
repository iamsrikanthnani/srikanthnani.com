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
    <div className="flex flex-col items-center about-main w-screen bg-[#121212] px-8 sm:px-8 lg:px-36 py-16">
      <h2 className="place-self-start text-md sm:text-md lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none pb-4">
        Experience👇
      </h2>

      {ExperienceList.map((item, index) => (
        <div className="w-full" key={`experience-${index}`}>
          <HoverAnimContainer>
            <div className="flex flex-col gap-4 py-8 sm:py-8 md:py-10 px-4 sm:px-8 md:px-16 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {item?.role}
                </p>
                <p className="text-md sm:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 pointer-events-none">
                  {item?.company}
                  <span className="text-neutral-500"> · {item?.type}</span>
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1 shrink-0">
                <p className="text-sm sm:text-base lg:text-lg text-neutral-300">
                  {item?.exp}
                </p>
                <p className="text-sm sm:text-base text-neutral-500">
                  {item?.location}
                </p>
              </div>
            </div>
            <hr className="border-t-[rgba(255,255,255,0.15)]" />
          </HoverAnimContainer>
        </div>
      ))}
    </div>
  );
};

export default Experience;
