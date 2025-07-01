import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-20 flex items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-8 mb-8">
          I'm Abdalla Gamal — a passionate front-end developer and creative graphic designer based in Egypt. 
          I enjoy crafting visually appealing, accessible, and responsive web interfaces using modern technologies like React, Tailwind CSS, and JavaScript.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium">
          <span className="bg-white shadow p-3 rounded">React</span>
          <span className="bg-white shadow p-3 rounded">JavaScript</span>
          <span className="bg-white shadow p-3 rounded">Tailwind CSS</span>
          <span className="bg-white shadow p-3 rounded">Figma</span>
          <span className="bg-white shadow p-3 rounded">Git & GitHub</span>
          <span className="bg-white shadow p-3 rounded">Adobe XD</span>
        </div>
      </div>
    </motion.section>
  );
}
