import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Abdalla</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-sm md:text-base font-medium">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black bg-opacity-90 text-white py-4 space-y-4">
          <li>
            <a
              href="#home"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
      <button
        onClick={() => {
          document.documentElement.classList.toggle("dark");
        }}
        className="ml-4 px-3 py-1 rounded bg-white text-black text-sm hover:bg-gray-200 transition"
      >
        Toggle Theme
      </button>
    </nav>
  );
}
