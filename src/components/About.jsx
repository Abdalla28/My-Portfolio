import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaJava, FaPython, FaMicrosoft} from "react-icons/fa";
import { SiTailwindcss, SiAdobephotoshop, SiPhp, SiPython, SiC, SiCplusplus, SiMysql, SiTensorflow, SiKeras, SiAdobe } from "react-icons/si";
import { VscCode, VscFileCode, VscTools } from "react-icons/vsc";

const skills = [
  // Web Development
  { icon: <FaHtml5 size={40} />, name: "HTML5", category: "Web Development" },
  { icon: <FaCss3Alt size={40} />, name: "CSS3", category: "Web Development" },
  { icon: <FaJs size={40} />, name: "JavaScript", category: "Web Development" },
  { icon: <SiPhp size={40} />, name: "PHP", category: "Web Development" },
  { icon: <FaReact size={40} />, name: "React.js", category: "Web Development" },
  { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS", category: "Web Development" },

  // Tools
  { icon: <FaGitAlt size={40} />, name: "Git & GitHub", category: "Tools" },
  { icon: <VscCode size={40} />, name: "VS Code", category: "Tools" },
  { icon: <FaPython size={40} />, name: "Jupyter Notebook", category: "Tools" },
  { icon: <VscTools size={40} />, name: "Postman", category: "Tools" },
  { icon: <SiMysql size={40} />, name: "MySQL", category: "Tools" },
  { icon: <FaMicrosoft size={40} />, name: "MS Office", category: "Tools" },

  // Programming Languages
  { icon: <SiPython size={40} />, name: "Python", category: "Programming" },
  { icon: <SiC size={40} />, name: "C", category: "Programming" },
  { icon: <SiCplusplus size={40} />, name: "C++", category: "Programming" },
  { icon: <FaJava size={40} />, name: "Java", category: "Programming" },
  { icon: <SiMysql size={40} />, name: "SQL", category: "Programming" },

  // Data Science & ML
  { icon: <SiPython size={40} />, name: "Pandas", category: "Data Science" },
  { icon: <SiPython size={40} />, name: "NumPy", category: "Data Science" },
  { icon: <SiPython size={40} />, name: "Scikit-learn", category: "Data Science" },
  { icon: <SiPython size={40} />, name: "Matplotlib", category: "Data Science" },
  { icon: <SiTensorflow size={40} />, name: "TensorFlow", category: "Data Science" },
  { icon: <SiKeras size={40} />, name: "Keras", category: "Data Science" },

  // Mobile Development
  { icon: <FaJava size={40} />, name: "Kotlin", category: "Mobile Development" },
  { icon: <VscFileCode size={40} />, name: "XML", category: "Mobile Development" },
  { icon: <FaReact size={40} />, name: "React Native", category: "Mobile Development" },

  // Graphic Design
  { icon: <FaFigma size={40} />, name: "Figma", category: "Design" },
  { icon: <SiAdobephotoshop size={40} />, name: "Photoshop", category: "Design" },
  { icon: <SiAdobe size={40} />, name: "Illustrator", category: "Design" },
  { icon: <SiAdobe size={40} />, name: "InDesign", category: "Design" },
];

const uniqueCategories = [...new Set(skills.map((skill) => skill.category))];

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: 5,
        boxShadow: "0px 8px 20px rgba(59,130,246,0.5)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-center gap-2 bg-white dark:bg-gray-800 rounded-xl p-5 w-28 h-28 cursor-pointer"
    >
      {skill.icon}
      <span className="text-sm font-semibold mt-2 text-gray-800 dark:text-gray-200">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function About() {
  const [activeCategory, setActiveCategory] = useState(uniqueCategories[0]);
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  // Variants for left/right entrance
  const itemVariants = {
    left: { opacity: 0, x: -60 },
    right: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.section
      id="about"
      className="cursor-default min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-800 dark:text-white px-6 py-20 flex items-center justify-center flex-col"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl text-center mb-20">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg leading-8 mb-10 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I'm{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            Abdalla Gamal
          </span>{" "}
          — a Full-Stack Software Engineer with experience in web development,
          machine learning, and IoT systems. I build scalable applications using
          technologies like React, Node.js, Python, and Streamlit. From smart
          irrigation to admin panels, I create efficient and impactful software
          solutions.
        </motion.p>
      </div>

      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My Skills & Tools
        </h2>

        {/* Tabs للتصنيفات */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition 
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

        {/* عرض المهارات حسب التصنيف المحدد مع تأثير stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }} // Remove once: true
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
          key={activeCategory}
        >
          {skills
            .filter((s) => s.category === activeCategory)
            .map((skill, index, arr) => {
              // Alternate direction: left for even, right for odd
              const direction = index % 2 === 0 ? "left" : "right";
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: itemVariants[direction],
                    visible: itemVariants.visible,
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }} // Remove once: true
                  transition={{ delay: 0.1 * index + 0.2 }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </motion.section>
  );
}
