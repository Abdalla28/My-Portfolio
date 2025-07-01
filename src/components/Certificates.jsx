import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    name: "Web Development Challenger Track",
    issuer: "Ministry Of Communications and Information Technology",
    year: "2023",
    link: "https://drive.google.com/file/d/1hQRHBTdOREyXxmQeFA5xnjD8n02zNQft/view",
  },
  {
    name: "IT Summer Training",
    issuer: "CISCO",
    year: "2023",
    link: "https://drive.google.com/file/d/1FANtA3nEK4Q9ftPOOSpTVRIquYYoJqqZ/view",
  },
  {
    name: "CCNA R&S2",
    issuer: "Kemtech Valley",
    year: "2023",
    link: "https://drive.google.com/file/d/1c2e18EINfVFgR_0NbNDg01t6gNFXpCBz/view",
  },
  {
    name: "HR Learning & Development",
    issuer: "CIB Egypt",
    year: "2024",
    link: "https://drive.google.com/file/d/1r5kXpLIOWVRwhFKeWkV7zPEu8REtjEsn/view",
  },
  {
    name: "Delivering Quality Work with Agility",
    issuer: "IBM",
    year: "2024",
    link: "https://drive.google.com/file/d/1XDMCs1cNk8a-CVVhf0qK76HPaoWMnAyq/view",
  },
  {
    name: "English Course",
    issuer: "British Council",
    year: "2024",
    link: "https://drive.google.com/file/d/1c-NWJZ53V2zTXYIYhIPIuQ_E6ylbYPNi/view",
  },
  {
    name: "Graphic Design",
    issuer: "National Telecommunication Institute (NTI)",
    year: "2024",
    link: "https://drive.google.com/file/d/1JvRWaIhPnuoIP-IL7j1LlAoXxIwdHZQa/view",
  },
  {
    name: "English Course",
    issuer: "Russian Cultural Center in Cairo",
    year: "2023",
    link: "",
  },
  {
    name: "Data Science and Machine Learning",
    issuer: "Epsilon AI",
    year: "2024",
    link: "",
  },
];

export default function Certificates() {
  return (
    <motion.section
      id="certificates"
      className="bg-white dark:bg-gray-900 py-20 px-6 text-gray-800 dark:text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Certificates</h2>
        <ol className="relative border-l-4 border-blue-500 dark:border-blue-400 ml-4">
          {certificates.map((cert, idx) => (
            <motion.li
              key={idx}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
            >
              <span className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full ring-4 ring-white dark:ring-gray-900 text-white">
                <FaCertificate size={20} />
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="font-semibold text-lg">{cert.name}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    {cert.issuer} &middot; {cert.year}
                  </div>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 sm:mt-0 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    View
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
