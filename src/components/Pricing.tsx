"use client";

import { motion, Variants } from "framer-motion";
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
      "1 custom domain",
    ],
    tag: "Entry Level",
    highlight: false,
  },
  {
    title: "Pro",
    price: "$49",
    features: [
      "AI-enhanced builder",
      "Premium templates",
      "Priority support",
      "3 custom domains",
      "SEO optimization",
    ],
    tag: "Most Popular",
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
      "Custom integrations",
    ],
    tag: "Enterprise",
    highlight: false,
  },
];

// ✅ Fix: Typed as Variants with custom function and spring type
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      type: "spring" as const,
      stiffness: 100,
    },
  }),
};

const PricingSection = () => {
  return (
    <section className="relative bg-[#0b0f1f] text-white py-28 px-6 sm:px-10 md:px-20 lg:px-32 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-cyan-400/20 blur-3xl rounded-full top-[-200px] left-[-200px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-2xl rounded-full bottom-[-100px] right-[-150px] animate-ping"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Choose Your Plan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Crafted for creators, startups, and enterprises with futuristic goals.
        </motion.p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`relative group rounded-3xl border backdrop-blur-lg bg-gradient-to-br from-[#1a1c2b] to-[#11121a] p-10 transition-all duration-500 shadow-2xl ${
              plan.highlight
                ? "border-cyan-400 ring-2 ring-cyan-500 shadow-cyan-400/30"
                : "border-gray-700"
            }`}
          >
            {/* Glow on Hover */}
            <div className="absolute inset-0 bg-cyan-400/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none"></div>

            {/* Tag Badge */}
            <div className="absolute -top-4 left-5 bg-gradient-to-r from-purple-500 to-cyan-500 text-xs px-4 py-1 rounded-full font-semibold shadow-md">
              {plan.tag}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">
              {plan.title}
            </h3>

            {/* Price */}
            <p className="text-5xl font-extrabold mb-6">
              {plan.price}
              <span className="text-sm font-medium text-gray-400"> /month</span>
            </p>

            {/* Features */}
            <ul className="space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{
                backgroundPosition: "right center",
                transition: { duration: 0.5 },
              }}
              className={`mt-8 w-full py-3 font-semibold rounded-xl text-white transition-all bg-gradient-to-r ${
                plan.highlight
                  ? "from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-cyan-400/30"
                  : "from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700"
              }`}
            >
              {plan.highlight ? "Launch with Pro 🚀" : "Choose Plan"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
