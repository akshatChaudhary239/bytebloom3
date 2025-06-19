"use client";

import { motion, AnimatePresence, easeIn, easeOut } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AuroraBackground } from "../components/ui/aurora-background"; // Adjust path if needed

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

export default function AuroraBackgroundDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % allowedTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-24"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zinc-300 to-white bg-clip-text text-transparent">
          Bytebloom
        </h1>

        {/* ✅ Flipping Text Inline */}
        <div className="text-center text-white text-2xl sm:text-4xl md:text-5xl font-bold h-[80px] overflow-hidden drop-shadow-xl my-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={allowedTexts[index]}
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              {allowedTexts[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-4 text-xl text-slate-50 dark:text-slate-300 italic max-w-2xl mx-auto text-center">
          We build beautiful products with the latest technologies and frameworks.
          <br />
          Our team of passionate developers and designers loves building amazing products.
        </p>

        <Link
          href="#pricing"
          className="mt-6 px-6 py-3 font-semibold bg-gradient-to-r from-zinc-600 to-zinc-300 hover:from-zinc-700 hover:to-zinc-400 text-black rounded-xl shadow-lg transition"
        >
          Let&apos;s Get Started
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
