// src/components/sub/SkillDataProvider.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.2;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      // This creates the styled "frame" for each icon
      className="p-3 bg-[#1c1830] rounded-lg flex items-center justify-center shadow-lg"
      style={{ width: "85px", height: "85px" }}
    >
      <Image 
        src={src} 
        width={width} 
        height={height} 
        alt="skill image" 
      />
    </motion.div>
  );
};

export default SkillDataProvider;