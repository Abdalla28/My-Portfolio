import React, { useState } from "react";
import { motion } from "framer-motion";
import screenshot from "../images/Screenshot 2023-07-08 193955.png"; //Duck's Row
import screenshot2 from "../images/Screenshot 2025-06-22 185104.png"; //Bimar
import screenshot3 from "../images/Screenshot 2025-07-01 212827.png"; //SWNW
import screenshot4 from "../images/Screenshot 2025-07-01 213636.png"; //Used Cars Data Analytics Dashboard
import screenshot5 from "../images/image.png"; //Taxi Total Amount Prediction
import screenshot6 from "../images/Screenshot 2025-07-01 214222.png"; //Wamo
import screenshot7 from "../images/Screenshot 2025-04-12 173242.png"; //CipherCrack
const projects = [
  {
    title: "Bimar",
    image: screenshot2,
    description:
      "Full-stack healthtech app for managing patient records, AI doctor recommendations, appointment scheduling, chat, and virtual consultations.",
    github: "https://github.com/Kareem2003/Bimar",
    live: "https://drive.google.com/file/d/1Vo0HxnLfla4KZfaBzVSgJA4-FXWdOFpW/view?usp=sharing",
    details:
      "Built with AI-based algorithms, real-time chat, and virtual consultations to enhance healthcare experience.",
    category: "Web & Mobile App",
  },
  {
    title: "Wamo",
    image: screenshot6,
    description:
      "E-commerce platform with advanced search, filtering, recommendations, secure transactions, wish lists, and order tracking.",
    github: "",
    live: "https://wamohub.com/en/index.php",
    details:
      "User-friendly shopping with tailored promotions and customer reviews.",
    category: "Web App",
  },

  {
    title: "Duck's Row",
    image: screenshot, // Replace with your image
    description:
      "Dynamic website for planning hangouts based on budget and preferences. HTML, CSS, JS, Bootstrap, jQuery, Ajax, MySQL.",
    github: "https://github.com/Duck-s-Row/Duck-s-Row.github.io",
    live: "https://drive.google.com/file/d/1ik9xPV1pVP98K5UzzxmzBbhck7Wtwn1q/view",
    details: "Interactive planning with robust database management.",
    category: "Web App",
  },
  {
    title: "Taxi Total Amount Prediction",
    image: screenshot5,
    description:
      "ML project to predict NYC taxi fares using regression, Random Forest, SVM, MLP, Tabnet, Wide & Deep, Logistic Regression.",
    github: "https://github.com/3bdalrahman/Taxi-Total-amount-prediction",
    live: "",
    details: "Feature engineering and model evaluation with RMSE and R².",
    category: "Data Science",
  },

  {
    title: "SWNW",
    image: screenshot3,
    description:
      "Graphic design for an immersive Ancient Egypt event: exhibits, workshops, performances.",
    github: "",
    live: "https://www.behance.net/gallery/208866061/SWNW",
    details: "Branding and visual identity for a cultural event.",
    category: "Design",
  },
  {
    title: "CipherCrack",
    image: screenshot7,
    description:
      "Cross-platform app for encoding/decoding classical ciphers (Caesar, Vigenère, Rail Fence) and cryptanalysis.",
    github: "https://github.com/Abdalla28/IOT",
    live: "",
    details:
      "React Native app with encryption, decryption, and key-breaking features.",
    category: "Mobile App",
  },
  {
    title: "Used Cars Data Analytics Dashboard",
    image: screenshot4,
    description:
      "Used Cars Dashboard: Interactive data visualization with Streamlit, Pandas, and Plotly for exploring prices, fuel types, gearboxes, and brands.",
    github: "https://github.com/Abdalla28/Used-Cars",
    live: "https://used-cars-ibvqqkkz5npyomiyg2pjps.streamlit.app/",
    details:
      "Started with a real-world Kaggle dataset, performed extensive cleaning (missing values, outliers, column fixes), and built an interactive Streamlit app for data exploration. Features dynamic filters, real-time updates, and insightful visualizations.",
    category: "Data Science",
  },
  {
    title: "Wgabat",
    image: "",
    description:
      "Mobile app for NCTU students to order food from nearby restaurants. Built with Kotlin, XML, Room DB, and Firebase.",
    github: "https://github.com/OmarEid10/wagbat",
    live: "",
    details:
      "Seamless food ordering experience using local and cloud databases.",
    category: "Mobile App",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
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
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition
                ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-14 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {filteredProjects.map((project, idx) => {
            const direction = idx % 2 === 0 ? "left" : "right";
            return (
              <motion.div
                key={idx}
                className="relative rounded-3xl shadow-xl bg-white dark:bg-gray-800 cursor-pointer overflow-hidden flex flex-col h-full"
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

                <div className="p-8 text-left flex flex-col flex-1">
                  <motion.h3
                    className="text-2xl font-bold mb-3 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300 mb-6 flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex gap-6 mt-auto">
                    {project.title === "SWNW" ? (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full font-semibold shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-purple-500 hover:to-pink-500 transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-400"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        Project in Behance
                      </motion.a>
                    ) : (
                      ["github", "live"].map((key) => {
                        const url = project[key];
                        let label = "Demo";
                        if (key === "live" && project.title === "Wamo") {
                          label = "Live Demo";
                        } else if (
                          key === "live" &&
                          project.title === "Used Cars Data Analytics Dashboard"
                        ) {
                          label = "Streamlit";
                        } else if (key === "live") {
                          label = "Demo";
                        } else if (key === "github") {
                          label = "GitHub";
                        }
                        if (!url) return null;
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
                      })
                    )}
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
