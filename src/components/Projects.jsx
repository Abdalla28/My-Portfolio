import React from "react";
import { motion } from "framer-motion";
import screenshot from "../images/Screenshot 2023-07-08 193955.png";
import screenshot2 from "../images/Screenshot 2025-06-22 185104.png";
const projects = [
  {
    title: "My Portfolio Website",
    image: screenshot,
    description:
      "A creative personal portfolio built with React and Tailwind CSS.",
    github: "https://github.com/Abdalla28/My-Portfolio",
    live: "https://your-portfolio-link.com",
    details:
      "Built using React, Tailwind CSS, and Framer Motion for smooth animations. Responsive and accessible design.",
  },
  {
    title: "E-commerce Store",
    image: screenshot2,
    description: "Fully responsive store with cart and filtering features.",
    github: "https://github.com/Abdalla28/ecommerce",
    live: "https://your-store-link.com",
    details:
      "Includes product filtering, shopping cart, and payment integration. Developed with React and Context API.",
  },
  {
    title: "My Portfolio Website",
    image: screenshot,
    description:
      "A creative personal portfolio built with React and Tailwind CSS.",
    github: "https://github.com/Abdalla28/My-Portfolio",
    live: "https://your-portfolio-link.com",
    details:
      "Built using React, Tailwind CSS, and Framer Motion for smooth animations. Responsive and accessible design.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  left: { opacity: 0, x: -80, scale: 0.95 },
  right: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  hover: {
    scale: 1.07,
    rotate: 3,
    boxShadow:
      "0 10px 20px rgba(59,130,246,0.4), 0 6px 6px rgba(59,130,246,0.15), 0 0 15px rgba(96,165,250,0.6)",
    transition: { type: "spring", stiffness: 300 },
  },
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-tr from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid gap-14 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {projects.map((project, idx) => {
            const direction = idx % 2 === 0 ? "left" : "right";
            return (
              <motion.div
                key={idx}
                className="relative rounded-3xl shadow-xl bg-white dark:bg-gray-800 cursor-pointer overflow-hidden"
                variants={{
                  hidden: cardVariants[direction],
                  visible: cardVariants.visible,
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                whileHover="hover"
                transition={{ delay: 0.1 * idx + 0.2 }}
              >
                {/* صورة مع تأثير float خفيف */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-3xl"
                  {...floatAnimation}
                />

                <div className="p-8 text-left">
                  <motion.h3
                    className="text-2xl font-bold mb-3 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex gap-6">
                    {["github", "live"].map((key) => {
                      const url = project[key];
                      const label = key === "github" ? "GitHub" : "Live Demo";
                      const baseColors = {
                        github:
                          "bg-gradient-to-r from-gray-800 to-gray-600 text-white",
                        live: "bg-gradient-to-r from-green-500 to-green-700 text-white",
                      };
                      return (
                        <motion.a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-5 py-2 rounded-full font-semibold shadow-lg transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-400
                          ${baseColors[key]}
                          hover:from-blue-500 hover:to-purple-600`}
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {label}
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* تأثير ظل متحرك */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    boxShadow: [
                      "0 0 20px 6px rgba(139,92,246,0.3)",
                      "0 0 40px 10px rgba(139,92,246,0.5)",
                      "0 0 20px 6px rgba(139,92,246,0.3)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
