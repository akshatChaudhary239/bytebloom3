"use client";

import { motion } from "motion/react";
import React from "react";
import Link from "next/link";
import { AuroraBackground } from "../components/ui/aurora-background";
import { ContainerTextFlip } from "../components/ui/container-text-flip";

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
         <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zinc-300 to-white bg-clip-text text-transparent">
    Bytebloom
  </h1>
<ContainerTextFlip
              words={["Content writing", "Website development", "Social media handeling",]} className=" text-2xl bg-white"
            />

  <p className="mt-4 text-xl text-slate-50 dark:text-slate-300 italic max-w-2xl mx-auto">
 We build beautiful products with the latest technologies and frameworks.
 <br />
        We are a team of passionate developers and designers that love to build
        amazing products.
  </p>
  <Link  href="#pricing" className="mt-6 px-6 py-3 font-semibold bg-gradient-to-r from-zinc-600 to-zinc-300 hover:bg-amber-300  text-black rounded-xl shadow-lg">
    Let&apos;s Get Started
  </Link>
      </motion.div>
    </AuroraBackground>
  );
}
