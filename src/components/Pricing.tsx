// app/components/PricingSection.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import React from "react";

const pricingPlans = [
  {
    title: "Starter",
    price: "$19",
    features: [
      "Basic website builder",
      "Free templates",
      "Email support",
      "1 custom domain"
    ],
    highlight: false,
  },
  {
    title: "Pro",
    price: "$49",
    features: [
      "Advanced builder with AI",
      "Premium templates",
      "Priority support",
      "3 custom domains",
      "SEO & speed optimization"
    ],
    highlight: true,
  },
  {
    title: "Advanced",
    price: "$99",
    features: [
      "All Pro features",
      "Custom animations",
      "Figma-to-code conversion",
      "Dedicated success manager",
      "Custom integrations"
    ],
    highlight: false,
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const PricingSection = () => {
  return (
    <section className="relative bg-[#0e0f1a] text-white py-24 px-4 sm:px-8 md:px-20 lg:px-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-tr from-cyan-900/20 to-purple-900/10 blur-3xl animate-pulse"></div>
      <div className="relative z-10 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl  font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          ByteBloom Pricing Plans
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-lg text-gray-400"
        >
          Choose the plan that fits your digital journey.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
            whileHover={{ scale: 1.07 }}
            className={`relative rounded-2xl p-10 shadow-xl backdrop-blur-lg bg-gradient-to-br from-[#1e1f2f] to-[#16171f] border ${
              plan.highlight ? "border-cyan-400 shadow-cyan-500/30" : "border-gray-700"
            } transition-transform duration-500`}
          >
            <div className="absolute -top-4 right-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-300 tracking-wide">
              {plan.title}
            </h3>
            <p className="text-5xl font-extrabold mb-6 text-white">
              {plan.price}<span className="text-base font-medium text-gray-400">/month</span>
            </p>
            <ul className="space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-3 rounded-xl transition-all"
            >
              {plan.highlight ? "Most Popular" : "Choose Plan"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;