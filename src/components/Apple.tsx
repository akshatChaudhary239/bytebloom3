"use client";
import {  useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Next.js SaaS Platform",
    description:
      "A high-performance SaaS platform built with Next.js, Tailwind CSS, and MongoDB. Handles authentication, billing, and dashboard UI.",
    image: "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75",
    link: "bookshala-2.vercel.app",
  },
  {
    title: "AI-Powered Blog",
    description:
      "An AI-integrated blog platform where users can generate and post content with SEO optimization features and dynamic rendering.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XxnkqGKKwYumVcA3yW74WPlD6okGSyjarQ&s",

    link: "https://ai-blog.vercel.app",
  },
  {
    title: "E-Commerce Web App",
    description:
      "Responsive and scalable e-commerce application built using MERN stack, featuring real-time cart, checkout, and admin dashboard.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpV0A6Wbva9AwQbDGLaY__9t3-Sbsm2RC_uGJ3e3szuKGfecR3INowYZWT1u_kGA9kDFQ&usqp=CAU",

    link: "https://ecommerce-app-demo.vercel.app",
  },
  {
    title: "Food ordering app",
    description:
      "Responsive and scalable e-commerce application built using MERN stack, featuring real-time cart, checkout, and admin dashboard.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEFmWIslU0sK9A_QSvFSA_7EyqEJ6Ec_-vQ&s",

    link: "https://ecommerce-app-demo.vercel.app",
  },
  {
    title: "TheCyberVision",
    description:
      "Responsive and scalable e-commerce application built using MERN stack, featuring real-time cart, checkout, and admin dashboard.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_vD8KXqcJY1-1qijDmY90Ps5mGV2mfzjCA&s",

    link: "https://ecommerce-app-demo.vercel.app",
  },
  {
    title: "Carpet manufacturing",
    description:
      "Responsive and scalable e-commerce application built using MERN stack, featuring real-time cart, checkout, and admin dashboard.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcfzyg9u_rSy-sMNfNWuMn3tWtQgPWuu24Q&s",

    link: "https://ecommerce-app-demo.vercel.app",
  },
];

export default function Apple() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen px-6 py-20 text-white font-sans relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10 relative">
        {projects.map((project, index) => (
          <motion.div
  key={index}
  layout
  onClick={() => toggleCard(index)}
  whileHover={{ scale: 1.05 }}
  className="relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 min-h-[300px] flex flex-col justify-end border border-white/10 shadow-lg group hover:shadow-gray-500 hover:shadow-lg"
>

            {/* Monochrome background with defined height */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-40 transition duration-300"
              />
            </div>

            <div className="relative z-10 p-4 backdrop-blur-sm bg-black/30 rounded-b-3xl">
              <h2 className="text-xl font-semibold tracking-wide text-center">
                {project.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {openIndex !== null && (
          <>
            {/* Dark backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenIndex(null)}
            />

            {/* Expanded Card */}
            <motion.div
              key="overlayCard"
              layout
              className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white/10 border border-white/20 rounded-3xl p-8 text-white backdrop-blur-xl shadow-xl"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-52 rounded-xl overflow-hidden mb-6">
                <Image
                  src={projects[openIndex].image}
                  alt={projects[openIndex].title}
                  width={600}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">{projects[openIndex].title}</h2>
                <p className="text-gray-200 text-lg leading-relaxed mb-4">
                  {projects[openIndex].description}
                </p>
                <Link
                  href={projects[openIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpenIndex(null)}
                  className="inline-block text-cyan-300 hover:text-white border border-cyan-300 px-4 py-2 rounded-lg transition"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}