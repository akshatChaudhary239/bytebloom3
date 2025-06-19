"use client";

import { motion, AnimatePresence, easeIn, easeOut } from "framer-motion";
import { useEffect, useState } from "react";

const allowedTexts = [
  "Innovate Your Future",
  "Design. Develop. Deploy.",
  "Next-Level Web Solutions",
  "Empower Your Business",
  "Experience ByteBloom Magic",
];

const flipVariants = {
  initial: {
    opacity: 0,
    y: 20,
    rotateX: -90,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    rotateX: 90,
    scale: 0.95,
    transition: {
      duration: 0.6,
      ease: easeIn,
    },
  },
};

export default function TextFlipper() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % allowedTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-transparent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center text-white text-2xl sm:text-4xl md:text-5xl font-bold h-[80px] overflow-hidden drop-shadow-xl pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={allowedTexts[index]}
          variants={flipVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute w-full"
        >
          {allowedTexts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
