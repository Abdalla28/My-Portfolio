import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene"; 
import '../GlobalStyles.css';

const AnimatedText = ({ text }) => {
  const letters = Array.from(text || "");
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

const TITLES = [
  "Front-end Developer",
  "Back-end Developer",
  "Full-stack Developer",
  "ML Developer",
  "Graphic Designer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < TITLES[titleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(TITLES[titleIndex].slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setTyping(true);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex]);

  return (
    <motion.section
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-10 bg-transparent text-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Three.js background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <ThreeScene />
      </div>

      {/* Left Side */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left z-10"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text drop-shadow">
          <AnimatedText text="Abdalla Gamal" />
        </h1>

        <p className="text-xl md:text-2xl font-bold mb-2">
          <AnimatedText text="Software Engineer ✨" />
        </p>

        <p className="text-base md:text-xl text-gray-300 font-mono min-h-[2.5rem] border-l-4 border-white pl-3 animate-pulse mb-6">
          {displayed}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="#projects"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow hover:shadow-xl transition hover:scale-105 hover:bg-gray-100"
            whileHover={{ scale: 1.08, boxShadow: "0 8px 32px #6366f1" }}
            whileTap={{ scale: 0.97 }}
          >
            View My Projects
          </motion.a>
          <motion.a
            href="/Abdalla-Gamal-Mohamed.pdf"
            download
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition hover:scale-105"
            whileHover={{ scale: 1.08, boxShadow: "0 8px 32px #a21caf" }}
            whileTap={{ scale: 0.97 }}
          >
            <FaDownload />
            Download CV
          </motion.a>
        </div>
      </motion.div>

      
    </motion.section>
  );
}
