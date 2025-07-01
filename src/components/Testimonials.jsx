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
    name: "Hana H.",
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

// Variants للانيميشن مع stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  left: { opacity: 0, x: -60 },
  right: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  hover: {
    scale: 1.05,
    boxShadow:
      "0 12px 24px rgba(59,130,246,0.3), 0 8px 12px rgba(59,130,246,0.2)",
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="bg-gray-100 dark:bg-gray-900 py-20 px-6 text-gray-800 dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }} // Removed once: true
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }} // Removed once: true
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          What People Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => {
            const direction = i % 2 === 0 ? "left" : "right";
            return (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md cursor-default"
                variants={{
                  hidden: cardVariants[direction],
                  visible: cardVariants.visible,
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }} // Removed once: true
                whileHover="hover"
                transition={{ delay: 0.1 * i + 0.2 }}
              >
                <motion.p
                  className="text-sm leading-7 italic mb-6 text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                >
                  “{t.feedback}”
                </motion.p>
                <motion.div
                  className="font-semibold text-blue-600 dark:text-blue-400 text-lg"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                >
                  {t.name}
                </motion.div>
                <motion.div
                  className="text-sm text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * i + 0.6 }}
                >
                  {t.role}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
