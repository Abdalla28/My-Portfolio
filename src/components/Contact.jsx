import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import ContactAurora from "./ContactAurora";
export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_el9bd99",
        "template_3kueovc",
        form.current,
        "aHAcaY8oK8GMGpnIz"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(null), 4000);
        },
        () => {
          setSuccess(false);
          setTimeout(() => setSuccess(null), 4000);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 overflow-hidden"
    >
      {/* Aurora / Galaxy Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ContactAurora />
      </div>

      {/* Split Card */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row rounded-3xl bg-white/10 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden my-8 md:my-16"
        style={{ minHeight: 'min(90vh, 700px)' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
      >
        {/* Left: Info & Socials */}
        <div className="flex-1 flex flex-col justify-center items-center gap-8 p-10 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-black/60">
          <motion.h2
            className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Let’s Connect
          </motion.h2>
          <motion.p
            className="text-lg text-center text-gray-200 max-w-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I’d love to hear from you! Reach out for collaborations, questions, or just to say hi.
          </motion.p>
          <div className="flex gap-6 mt-4">
            <a href="mailto:kontyabdalla@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-300 hover:text-blue-500 transition-all">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/abdalla-gamal-b24733228/" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-blue-600 transition-all">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Abdalla28" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-white transition-all">
              <FaGithub />
            </a>
            <a href="tel:+201025226820" className="text-2xl text-green-300 hover:text-green-500 transition-all">
              <FaPhone />
            </a>
          </div>
        </div>
        {/* Right: Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 p-10 flex flex-col justify-center gap-6 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl"
        >
          {[{ name: "user_name", placeholder: "Your Name", icon: <FaUser /> }, { name: "user_email", placeholder: "Your Email", icon: <FaEnvelope /> }].map(({ name, placeholder, icon }, idx) => (
            <div className="relative" key={name}>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-60">
                {icon}
              </span>
              <input
                type={name === "user_email" ? "email" : "text"}
                name={name}
                placeholder={placeholder}
                required
                className="w-full bg-black/30 border border-white/20 rounded-lg pl-12 pr-4 py-3 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
          ))}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full bg-black/30 border border-white/20 rounded-lg px-5 py-3 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-3 mt-2 rounded-lg font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <FaPaperPlane className="text-lg" /> Send Message
          </button>
          <AnimatePresence>
            {success !== null && (
              <motion.p
                className={`text-center mt-2 font-medium ${success ? "text-green-400" : "text-red-400"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {success
                  ? "Message sent successfully ✅"
                  : "Failed to send. Please try again ❌"}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </motion.section>
  );
}
