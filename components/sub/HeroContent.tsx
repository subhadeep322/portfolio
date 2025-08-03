// components/sub/HeroContent.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Github } from "lucide-react";
import Image from "next/image";
import { UserData } from "@/constants";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            MERN Stack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Crafting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Modern{" "}
            </span>
            Web Experiences
          </span>
        </motion.div>

        <motion.p
  variants={slideInFromLeft(0.8)}
  // THE FIX IS HERE: Replaced text-gray-400 with gradient classes
  className="text-lg my-5 max-w-[600px] bg-gradient-to-r from-blue-500 via-purple-500 to-white bg-clip-text text-transparent animate-pulse"
>
  Hi, I&apos;m Subhadeep Paul, a MERN Stack Developer specializing in
  building dynamic web applications. I integrate modern design with AI
  features to create intelligent and user-friendly digital solutions.
</motion.p>
        
        <motion.a
          href={UserData.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          variants={slideInFromLeft(1)}
          className="group relative flex items-center justify-center gap-3 py-3 px-6 w-fit bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
        >
          <Github size={24} />
          Check out my GitHub
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;