"use client";
import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaLaptopCode,
  FaChartLine,
  FaFeatherAlt,
  FaTools,
  FaUserTie,
} from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "We create high-performance websites with modern technologies to ensure your business stands out online. Mobile responsive, SEO-optimized, and lightning-fast.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Digital Marketing",
    description:
      "ByteBloom empowers your brand visibility with expert SEO, social media strategies, and data-driven ad campaigns to increase engagement and revenue.",
    icon: <FaChartLine />,
  },
  {
    title: "Content Writing",
    description:
      "Crafting compelling, SEO-friendly, and emotionally resonant content that captures your brand voice and converts readers into customers.",
    icon: <FaFeatherAlt />,
  },
  {
    title: "Social Media Management",
    description:
      "We manage your online presence by creating, publishing, and analyzing content tailored to each platform, keeping your audience engaged and growing.",
    icon: <FaFeatherAlt />,
  },
  {
    title: "Maintenance & Tools",
    description:
      "Ensure your website runs smoothly with regular updates, backups, and performance optimizations to prevent downtime and security risks.",
    icon: <FaTools />,
  },
  {
    title: "Code Consulting",
    description:
      "Get expert advice on architecture, best practices, and optimization to elevate your software quality and development workflow.",
    icon: <FaUserTie />,
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
        {services.map((service, index) => (
          <motion.div
            key={index}
            layout
            onClick={() => toggleCard(index)}
            className="bg-white/5 backdrop-blur-md hover:bg-white/10 hover:shadow-cyan-400/40 hover:shadow-lg rounded-3xl p-6 cursor-pointer transition-all duration-300 min-h-[220px] flex flex-col justify-start border border-white/10"
            initial={{ borderRadius: "1.5rem" }}
            animate={{ borderRadius: "1.5rem" }}
          >
            <motion.div layout="position" className="flex items-center gap-4 mb-4">
              <div className="text-4xl text-cyan-400 drop-shadow-md">{service.icon}</div>
              <motion.h2 layout className="text-xl font-semibold tracking-wide">
                {service.title}
              </motion.h2>
            </motion.div>
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
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="text-5xl text-cyan-400">{services[openIndex].icon}</div>
                <h2 className="text-2xl font-bold">{services[openIndex].title}</h2>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                {services[openIndex].description}
              </p>
              <Link 
              href="#contact"
                onClick={() => setOpenIndex(null)}
                className="mt-6 gap-10 text-cyan-300 hover:text-white border border-cyan-300 px-3 py-1.5 rounded-lg transition"
              >
                More
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
