
"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
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


const cardData = [
  {
    title: "Sured digital growth",
    description: "ByteBloom helps startupsand small businesses grow online combining branding, social media strategy, content creation, and digital marketing into one powerful service.",
    link: "#contact",
    cta: "Explore →",
  },
  {
    title: "Custom SaaS MVP Development for Startups",
    description: "Build minimum viable products (MVPs) for entrepreneurs  fast, scalable, and ready to pitch to investors or validate ideas into the future of the world",
    link: "#contact",
    cta: "Explore →",
  },
  {
    title: "AI Tools & Automation Studio",
    description: "Offer customized automation solutions and AI-driven tools that help businesses save time, improve efficiency, and unlock smarter workflows",
    link: "#contact ",
    cta: "Explore →",
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
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
      {cardData.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gradient-to-tr from-blue-950 to-neutral-950  border-white relative group/card  hover:shadow-[inset_0px_5px_15px_-3px_rgba(0,_0,_0,_0.2)] dark:bg-black dark:border-white/[0.2]  w-auto sm:w-[20rem] h-auto rounded-xl p-6 border transition-all duration-300 ease-in-out">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-50 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-xl max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>

            <div className="flex justify-between items-center mt-16">
              <CardItem
                translateZ={20}
                as="a"
                href={card.link}
                target="_blank"
                className="px-4 py-2 rounded-lg  text-xs font-normal bg-white p-1 text-black hover:bg-gray-100"
              >
                <Link href="#contact">
                  {card.cta}</Link>
              
              </CardItem>
              
            </div>
          </CardBody>
        </CardContainer>
      ))}
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
            className="text-3xl md:text-4xl font-bold text-gray-100 mb-12"
          >
            What We Do
          </motion.h2>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "🌐 Website Development",
                desc: "Stunning, responsive websites with pixel-perfect design and scalable performance."
              },
              {
                title: "📈 Digital Marketing",
                desc: "SEO, PPC, content strategy, and analytics tailored to grow your brand."
              },
              {
                title: "📱 Social Media Management",
                desc: "Authentic content and engagement strategies to amplify your brand’s voice."
              },
              {
                title: "📝 Content writing",
                desc: "Authentic content and engagement strategies to amplify your brand’s voice."
              },
              {
                title: "🛠️ Tech Stack Consulting & Code Audits",
                desc: "Authentic content and engagement strategies to amplify your brand’s voice."
              },
              {
                title: "🧾 Maintenance & Support",
                desc: "Authentic content and engagement strategies to amplify your brand’s voice."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/60 p-6 rounded-2xl shadow-xl text-left"
              >
                <h3 className="text-xl font-bold text-gray-100 mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
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
