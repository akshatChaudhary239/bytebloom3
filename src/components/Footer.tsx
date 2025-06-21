"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 to-gray-700 text-white pt-10 pb-5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-white/10 pb-8">
        
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-cyan-400">ByteBloom</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering digital transformation with cutting-edge web solutions, content strategy, and growth-focused marketing.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <h3 className="text-lg font-semibold text-white">Navigate</h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li><Link href="#about" className="hover:text-cyan-400 transition">About</Link></li>
            <li><Link href="#services" className="hover:text-cyan-400 transition">Services</Link></li>
            <li><Link href="#pricing" className="hover:text-cyan-400 transition">Pricing</Link></li>
            <li><Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Social & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-white">Connect with us</h3>
          <div className="flex space-x-4 text-2xl text-cyan-400">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform">
              <FaLinkedin />
            </a>
            <a href="mailto:bytebloom@example.com" className="hover:scale-110 transition transform">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-500 text-sm mt-6"
      >
        © {new Date().getFullYear()} ByteBloom. All rights reserved.
      </motion.div>
    </footer>
  );
}
