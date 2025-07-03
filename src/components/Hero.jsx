import React from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);

  const child = {
    hover: {
      y: -10,
      scale: 1.5,
      rotate: [0, 15, -15, 15, 0],
      color: ["#a78bfa", "#f472b6", "#60a5fa", "#a78bfa"],
      textShadow: "0 0 8px rgb(167 139 250), 0 0 15px rgb(244 114 182)",
      transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse" },
    },
    initial: { y: 0, scale: 1, rotate: 0, color: "#fff", textShadow: "none" },
  };

  return (
    <motion.span style={{ display: "inline-flex", cursor: "default" }}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={child}
          initial="initial"
          whileHover="hover"
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const heroVariants = {
  hidden: { opacity: 0, scale: 0.95, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, type: "spring", bounce: 0.3 },
  },
};

const headlineVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, type: "spring", bounce: 0.5 },
  },
};

export default function Hero() {
  // Detect mobile device
  const isMobile = window.innerWidth < 768;

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 text-white overflow-hidden"
      variants={heroVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: isMobile }}
    >
      {/* Responsive background blobs */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 max-w-full bg-gradient-to-tr from-blue-700 to-purple-700 opacity-15 blur-3xl rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: isMobile ? 0 : Infinity,
          duration: 60,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 sm:w-72 sm:h-72 max-w-full bg-pink-700 opacity-10 blur-3xl rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          repeat: isMobile ? 0 : Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="flex flex-col items-center justify-center text-center max-w-full sm:max-w-3xl z-10 mx-auto"
        variants={headlineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.7, once: true }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
          variants={headlineVariants}
        >
          <AnimatedText text="Abdalla Gamal" />
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-10 text-gray-300 drop-shadow-sm text-center break-words max-w-full sm:max-w-xl mx-auto"
          variants={itemVariants}
        >
          <AnimatedText text="Software Engineer ✨" />
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            View My Projects
          </motion.a>

          <motion.a
            href="/Abdalla-Gamal-Mohamed.pdf"
            download
            className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaDownload />
            Download CV
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-16 text-3xl text-gray-400 select-none"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
