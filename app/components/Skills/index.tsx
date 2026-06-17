/*
Skills Component
- This component represents the skills section of the application.

Add/change/delete skills:
==> data/skills.ts

Usage Example:
<Skills />

Author: github.com/iamsrikanthnani
*/

import { SkillsList } from "@/data";
import HoverAnimContainer from "../HoverAnimContainer";

const Skills = () => {
  return (
    <div className="flex bg-black pb-[8rem] w-screen px-8 sm:px-8 lg:px-36 pt-8 mt-[0px] mb-16">
      <div className="flex flex-col items-center gap-4 pt-16 w-full">
        <h2 className="place-self-start text-md sm:text-md lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none">
          Skills👇
        </h2>
        {/* Map through skills list and render each skill */}
        <div className="flex gap-4 sm:gap-12 mt-6 flex-wrap justify-center">
          {SkillsList.map((skill, index) => (
            <div
              key={`skill-${index}`}
              className="group flex items-center justify-center hover:z-20"
            >
              <HoverAnimContainer>
                <div className="relative inline-flex items-center justify-center">
                  {/* Tooltip — animated reveal on hover, moves with the logo */}
                  <div className="pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 scale-90 translate-y-1 opacity-0 transition-all duration-200 ease-out group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="w-max max-w-[180px] rounded-xl border border-white/10 bg-[#0d0d0f]/70 px-4 py-2.5 text-center shadow-xl shadow-black/40 backdrop-blur-sm">
                      <p className="font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                        {skill.name}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-neutral-400">
                        {skill.description}
                      </p>
                    </div>
                    {/* arrow */}
                    <div className="absolute left-1/2 top-full -mt-[6px] h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-[#0d0d0f]/95" />
                  </div>

                  <img
                    src={skill.src}
                    loading="lazy"
                    title={skill.name}
                    alt={`${skill.name} logo`}
                    className="w-20 h-20 sm:w-20 sm:h-20 lg:w-32 lg:h-32 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </HoverAnimContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
