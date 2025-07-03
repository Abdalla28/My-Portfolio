import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const icons = [
  {
    icon: <FaGithub />,
    href: "https://github.com/Abdalla28",
    baseColorLight: "text-gray-600",
    hoverColorLight: "hover:text-black",
    baseColorDark: "dark:text-gray-300",
    hoverColorDark: "dark:hover:text-white",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/abdalla-gamal-b24733228/",
    baseColorLight: "text-blue-700",
    hoverColorLight: "hover:text-blue-900",
    baseColorDark: "dark:text-blue-400",
    hoverColorDark: "dark:hover:text-blue-200",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-center py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex justify-center gap-8 mb-5">
        {icons.map(({ icon, href, baseColorLight, hoverColorLight, baseColorDark, hoverColorDark }, i) => (
          <motion.a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseColorLight} ${hoverColorLight} ${baseColorDark} ${hoverColorDark} transition-colors text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded`}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            aria-label={`Link to ${href}`}
          >
            {icon}
          </motion.a>
        ))}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 select-none">
        © {new Date().getFullYear()} Abdalla Gamal. All rights reserved.
      </p>
    </footer>
  );
}
