import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmed M.",
    role: "Startup Founder",
    feedback:
      "Working with Abdalla was an absolute pleasure. He delivered a sleek, fast website with pixel-perfect design.",
  },
  {
    name: "Sara H.",
    role: "UI/UX Designer",
    feedback:
      "Abdalla’s front-end skills are top-notch. The way he brought my Figma designs to life was incredible!",
  },
  {
    name: "Mohamed A.",
    role: "Freelance Developer",
    feedback:
      "We collaborated on a React project. He writes clean code and always focuses on performance.",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="bg-gray-100 dark:bg-gray-900 py-20 px-6 text-gray-800 dark:text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
            >
              <p className="text-sm leading-6 italic mb-4">“{t.feedback}”</p>
              <div className="font-semibold text-blue-500">{t.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
