"use client";

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
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const teamMembers = [
  {
    name: "Akku Chaudhary",
    role: "Founder & CEO",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
    bio: "Visionary behind ByteBloom. Passionate about web innovation, AI, and creating products that solve real-world problems.",
  },
  {
    name: "Sundram Singh",
    role: "Lead Designer",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
    bio: "Blending creativity with user-centric design. Priya crafts seamless experiences with a futuristic edge.",
  },
  {
    name: "Sumaiya khan",
    role: "Full Stack Developer",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
    bio: "Tech wizard turning ideas into scalable digital systems using MERN, Next.js, and Web3.",
  },
  {
    name: "Naman dhounchak",
    role: "Full Stack Developer",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
    bio: "Tech wizard turning ideas into scalable digital systems using MERN, Next.js, and Web3.",
  },
];

const cards = [
  {
    icon: <FaCogs className="text-4xl text-[#00c6ff]" />,
    title: "Advanced Tech Stack",
    description:
      "Built with the latest frameworks and tools like Next.js, Tailwind CSS, and secure APIs for performance-driven results.",
    glow: "hover:shadow-[0_0_35px_#00c6ff]",
  },
  {
    icon: <FaChartBar className="text-4xl text-[#38ef7d]" />,
    title: "Growth-Oriented Design",
    description:
      "Every interface is crafted to engage users and drive conversions through intuitive, scalable digital experiences.",
    glow: "hover:shadow-[0_0_35px_#38ef7d]",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-[#9b5de5]" />,
    title: "24/7 Support & Security",
    description:
      "ByteBloom ensures real-time monitoring, rapid bug fixes, and enterprise-grade data security with 24/7 availability.",
    glow: "hover:shadow-[0_0_35px_#9b5de5]",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-[#9b5de5]" />,
    title: "Maintence and growth",
    description:
      "ByteBloom ensures real-time monitoring, rapid bug fixes, and enterprise-grade data security with 24/7 availability.",
    glow: "hover:shadow-[0_0_35px_#9b5de5]",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-[#9b5de5]" />,
    title: "Code consulting",
    description:
      "ByteBloom ensures real-time monitoring, rapid bug fixes, and enterprise-grade data security with 24/7 availability.",
    glow: "hover:shadow-[0_0_35px_#9b5de5]",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-[#9b5de5]" />,
    title: "Quality content",
    description:
      "ByteBloom ensures real-time monitoring, rapid bug fixes, and enterprise-grade data security with 24/7 availability.",
    glow: "hover:shadow-[0_0_35px_#9b5de5]",
  },
];

export default function AboutPage() {
  return (
    <motion.main
      className="bg-black text-white font-sans overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
    <section className="relative py-28 px-6 md:px-20 text-center bg-black overflow-hidden">
  {/* Floating Glow Blob */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] rounded-full pointer-events-none animate-pulse" />

  {/* Particle Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,255,0.05),transparent_60%)]" />

  {/* Heading */}
  <motion.div
    className="max-w-5xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-text-glow">
      ByteBloom: Born to Innovate
    </h1>
    <p className="text-xl text-gray-300 leading-relaxed">
      We don&apos;t just design interfaces — we engineer futuristic journeys.
    </p>
  </motion.div>

  {/* Centered Card */}
  <motion.div
  className="flex justify-center mt-24"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }}
>
  <motion.div
    className="w-full max-w-3xl text-left space-y-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-xl hover:shadow-cyan-500/10 transition duration-500"
    whileHover={{ scale: 1.03 }}
  >
    <h2 className="text-4xl font-bold text-cyan-300">Our Journey</h2>
    <p className="text-gray-300 text-lg leading-relaxed">
      ByteBloom was born from the relentless pursuit of digital brilliance. We are not just coders — we are architects of intelligent experiences, builders of scalable systems, and designers of user joy. What started as a spark has grown into a full-spectrum force of innovation, delivering solutions that turn complexity into clarity, and ambition into action.
    </p>
    <p className="text-gray-300 text-base leading-relaxed">
      Whether you&apos;re a startup chasing scale, an enterprise chasing elegance, or a creator chasing conversion — ByteBloom is your launchpad. We merge creativity, logic, and bleeding-edge tech to engineer digital products that *breathe, move, and grow* with your vision.
    </p>

    <ul className="space-y-3 text-sm text-gray-200">
      <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
        ⚡ <span><strong>Full-Stack Wizards:</strong> Expertly built with MERN, Next.js, and edge technologies.</span>
      </motion.li>
      <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
        🎨 <span><strong>Pixel Precision:</strong> We craft UI/UX that feels alive, intuitive, and unforgettable.</span>
      </motion.li>
      <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
        🧠 <span><strong>Smart by Design:</strong> AI-infused flows that adapt, predict, and perform.</span>
      </motion.li>
      <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
        🚀 <span><strong>Launch-Ready Always:</strong> SEO-focused, performance-optimized, and future-proofed.</span>
      </motion.li>
      <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
        🌐 <span><strong>Cross-Platform Presence:</strong> From web to mobile, our code scales across ecosystems.</span>
      </motion.li>
      <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
        🔒 <span><strong>Security First:</strong> Built-in protection at every level — code, data, and user.</span>
      </motion.li>
    </ul>

    <p className="text-cyan-200 font-medium text-base mt-4">
      We don’t just ship projects — we empower movements. Let ByteBloom be your digital revolution.
    </p>
  </motion.div>
</motion.div>


  {/* Text Glow Animation */}
  <style jsx>{`
    .animate-text-glow {
      animation: glowPulse 3s ease-in-out infinite;
    }

    @keyframes glowPulse {
  0%, 100% {
    text-shadow: 0 0 4px silver, 0 0 1px #ccc, 0 0 1px #eee;
  }
  50% {
    text-shadow: 0 0 2px #ddd, 0 0 2px silver, 0 0 2px #ccc;
  }
}

  `}</style>
</section>



     

     <section className="relative py-28 px-6 md:px-20 overflow-hidden bg-black">
  {/* BACKGROUND GLOW + PARTICLES */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] bg-cyan-50/5 blur-[220px] rounded-full animate-pulse" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0f172a33] to-black" />
  </div>

  {/* HEADING */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-6xl font-extrabold text-center mb-20 relative z-10 bg-gradient-to-r from-zinc-900 via-white to-zinc-500 bg-clip-text text-transparent animate-gradient-shimmer"
  >
    Why Choose ByteBloom?
  </motion.h2>

  {/* CARDS GRID */}
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
    {cards.map((card, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
        className={`group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl transition-transform duration-300 hover:shadow-cyan-500/40 relative overflow-hidden`}
      >
        {/* GLOW EDGE */}
        <div className="absolute inset-0 rounded-3xl border border-cyan-400/20 group-hover:border-cyan-400/40 transition pointer-events-none" />

        {/* SPARKLE ORBS */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 blur-2xl rounded-full group-hover:opacity-80 transition duration-500" />

        {/* CONTENT */}
        <div className="flex flex-col items-center text-center gap-4 z-10 relative">
          {card.icon}
          <h3 className="text-xl font-bold text-white">{card.title}</h3>
          <p className="text-sm text-gray-300">{card.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>



      <section className="py-24 px-6 md:px-20 text-center">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-12 font-mono uppercase"
        >
         Our Projects
        </motion.h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-50 to-transparent mt-12 h-[1px] w-full" />
        <Apple />
      </section>
       <motion.section
        className="py-28 px-6 md:px-20 bg-black/90 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Meet the Minds Behind ByteBloom
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#131313] border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-[1.03] hover:shadow-teal-400/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image} alt={member.name} width={96} height={96} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-cyan-400">{member.role}</p>
              <p className="mt-2 text-sm text-gray-400">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}