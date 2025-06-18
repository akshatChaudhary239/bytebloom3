
"use client"
// import Link from "next/link";
import { FaCogs, FaChartBar, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import Apple from "./Apple";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};


const cards = [
  {
    icon: <FaCogs className="text-4xl text-[#00c6ff]" />,
    title: "Advanced Tech Stack",
    description:
      "Built with the latest frameworks and tools like Next.js, Tailwind CSS, and secure APIs for performance-driven results.",
    glow: "hover:shadow-[0_0_25px_#00c6ff]",
  },
  {
    icon: <FaChartBar className="text-4xl text-[#38ef7d]" />,
    title: "Growth-Oriented Design",
    description:
      "Every interface is crafted to engage users and drive conversions through intuitive, scalable digital experiences.",
    glow: "hover:shadow-[0_0_25px_#38ef7d]",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-[#9b5de5]" />,
    title: "24/7 Support & Security",
    description:
      "ByteBloom ensures real-time monitoring, rapid bug fixes, and enterprise-grade data security with 24/7 availability.",
    glow: "hover:shadow-[0_0_25px_#9b5de5]",
  },
];

export default function AboutPage() {
  return (
    <motion.main
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white font-mono"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-20 text-center">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-4 text-gray-100"
        >
          About ByteBloom
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
        >
          Empowering brands to bloom in the digital world with futuristic websites, result-driven marketing, and a magnetic social presence.
        </motion.p>
      </section>

      {/* Mission, Vision, Values */}
          <div className="py-20 px-6 md:px-20 bg-[#0f0f0f] text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00c6ff] via-[#38ef7d] to-[#9b5de5] bg-clip-text text-transparent">
        Why Choose ByteBloom?
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className={`bg-[#1a1a1a]/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transition-all duration-300 ${card.glow}`}
          >
            <div className="flex flex-col items-center text-center gap-4">
              {card.icon}
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-6xl font-bold text-gray-100 mb-12"
          >
           About our services
          </motion.h2>

        <Apple/>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 px-6 md:px-20 text-center bg-gray-950/80">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Bloom with ByteBloom?
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-300 max-w-xl mx-auto mb-8"
        >
          Whether you need a website, a campaign, or a full brand overhaul, our digital experts are here to make it happen.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-block bg-white text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-200 transition"
        >
          Let&apos;s Connect
        </motion.a>
      </section> */}
    </motion.main>
  );
}
