// components/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
    console.log(form);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-t from-neutral-900 to-neutral-950 py-20 px-4 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let’s discuss how we can bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 bg-[#0e1119] rounded-2xl shadow-xl hover:scale-100 border border-white p-8">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-semibold mb-4">Send us a message</h3>
            <div className="grid sm:grid-cols-2 gap-4  ">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-[#111827] px-4 py-3 border border-white  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-[#111827] px-4 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Project inquiry"
              value={form.subject}
              onChange={handleChange}
              className="bg-[#111827] px-4 py-3 border border-white rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              required
              className="bg-[#111827] px-4 py-3 border border-white rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-3 border border-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:scale-105 transition-transform duration-300 font-semibold flex items-center justify-center gap-2"
            >
              <FaEnvelope className="text-white" />
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="bg-[#111827] p-4 rounded-md flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-xl" />
              <span className="text-gray-300">hello@bytebloom.dev</span>
            </div>
            <div className="bg-[#111827] p-4 rounded-md flex items-center gap-4">
              <FaPhoneAlt className="text-blue-400 text-xl" />
              <span className="text-gray-300">+91 9350637421 , +91 8570810577</span>
            </div>
            <div className="bg-[#111827] p-4 rounded-md flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-400 text-xl" />
              <span className="text-gray-300">India , Mumbai</span>
            </div>

            <div className="mt-6">
              <p className="mb-3 font-medium">Follow Us</p>
              <div className="flex space-x-5 text-2xl">
                <a
                  href="https://instagram.com/_akkuchaudhary"
                  className="text-pink-500 hover:scale-110 transition-transform"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  className="text-blue-500 hover:scale-110 transition-transform"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://mail.google.com/in/chaudharyakshat239@gmail.com"
                  className="text-red-400 hover:scale-110 transition-transform"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
