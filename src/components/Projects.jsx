import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    description: "A responsive online store built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/600x400?text=Project+1",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing design and development skills.",
    image: "https://via.placeholder.com/600x400?text=Project+2",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A modern blog with markdown support and admin dashboard.",
    image: "https://via.placeholder.com/600x400?text=Project+3",
    link: "#",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-white py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-600 hover:underline">
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
