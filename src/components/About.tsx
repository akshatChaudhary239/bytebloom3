
"use client"
// import Link from "next/link";
import { FaCogs, FaChartBar, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
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
const teamMembers = [
  {
    name: "Akku Chaudhary",
    role: "Founder & CEO",
    image: "/team/akku.jpg", // Replace with your actual image path
    bio: "Visionary behind ByteBloom. Passionate about web innovation, AI, and creating products that solve real-world problems.",
  },
  {
    name: "Sundram Singh",
    role: "Lead Designer",
    image: "/team/sundram.jpg",
    bio: "Blending creativity with user-centric design. Priya crafts seamless experiences with a futuristic edge.",
  },
  {
    name: "Sumaiya khan",
    role: "Full Stack Developer",
    image: "/team/sumaiya.jpg",
    bio: "Tech wizard turning ideas into scalable digital systems using MERN, Next.js, and Web3.",
  },
  {
    name: "Naman Dhounchak",
    role: "Full Stack Developer",
    image: "/team/naman.jpg",
    bio: "Tech wizard turning ideas into scalable digital systems using MERN, Next.js, and Web3.",
  },
];

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
        <div className="min-h-screen bg-transparent text-white px-6 py-12">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          About <span className="text-teal-400">ByteBloom</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          ByteBloom started as a spark of innovation in the heart of a passionate developer. What began as a one-person mission to blend design and tech has grown into a digital powerhouse focused on delivering sleek, scalable, and future-forward web solutions.
        </p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-teal-300">Our Journey</h2>
        <p className="text-gray-300 text-base leading-relaxed">
          From humble beginnings in a small workspace, ByteBloom emerged during the Web3 revolution, carving its niche by blending modern UI/UX, responsive development, and scalable backend systems. 
          Over the years, our team expanded with creative minds and problem-solvers, all united under a shared mission — <span className="text-white font-semibold">to innovate fearlessly</span>.
          <br />
          <br />
          We’ve built digital products for startups, helped businesses scale, and educated communities through tech. Our stack? Next.js, Tailwind CSS, Framer Motion, MongoDB, Express — the best tools to power the digital era.
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-10 text-teal-300 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-teal-400">{member.role}</p>
              <p className="mt-3 text-gray-400 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
      </section>

      {/* Mission, Vision, Values */}
          <div className="py-20 px-6 md:px-20 bg-[#0f0f0f] text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-zinc-500 to-zinc-200 bg-clip-text text-transparent">
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
