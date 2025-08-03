// src/components/Skills.tsx
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

// Combine all skills into a single array
const allSkills = [...Frontend_skill, ...Backend_skill, ...Full_stack];

const Skills = () => {
  return (
    <section
      id="skills"
      // This uses standard block layout to ensure it appears AFTER the previous section
      className="relative flex flex-col items-center justify-center py-20"
      style={{ marginTop: "100px" }} // Pushes it down to create space
    >
      <SkillText />

      {/* THE FIX: One single, wide container for all skills */}
      <div className="mt-10 w-full max-w-5xl p-8 rounded-xl border border-gray-600 bg-black/30 backdrop-blur-sm">
        <div className="flex flex-row justify-center flex-wrap gap-5">
          {allSkills.map((skill, index) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.Image}
              width={skill.width}
              height={skill.height}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute top-0 left-0 z-[-10] opacity-40">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>
    </section>
  );
};

export default Skills;