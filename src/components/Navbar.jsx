import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import '../GlobalStyles.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const navLinks = (
    <>
      <li>
        <a
          href="#home"
          className="hover:text-blue-400 focus:text-blue-400 transition"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="hover:text-blue-400 focus:text-blue-400 transition"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="hover:text-blue-400 focus:text-blue-400 transition"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#certificates"
          className="hover:text-blue-400 focus:text-blue-400 transition"
        >
          Certificates
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="hover:text-blue-400 focus:text-blue-400 transition"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold tracking-wide cursor-default select-none">
          Abdalla
        </h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-10 text-white text-sm md:text-base font-medium items-center">
          {navLinks}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="hover:text-yellow-400 focus:outline-none focus:text-yellow-400 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center space-x-5">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400 transition"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-white hover:text-blue-400 focus:outline-none focus:text-blue-400 transition"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile nav with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 text-white flex flex-col items-center py-6 space-y-6 text-lg font-medium overflow-hidden"
          >
            {navLinks}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
