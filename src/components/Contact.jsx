import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

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
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
      }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-6 bg-gray-800/30 p-6 rounded-xl shadow-2xl backdrop-blur-md"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
        >
          {["user_name", "user_email"].map((name, idx) => (
            <motion.input
              key={name}
              type={name === "user_email" ? "email" : "text"}
              name={name}
              placeholder={name === "user_email" ? "Your Email" : "Your Name"}
              required
              className="bg-gray-900/80 border border-gray-700 px-5 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: 0.1 * idx + 0.3,
              }}
            />
          ))}

          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-gray-900/80 border border-gray-700 px-5 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
            whileFocus={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
          />

          <motion.button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(168,85,247,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Send Message 🚀
          </motion.button>

          <AnimatePresence>
            {success === true && (
              <motion.p
                className="text-green-400 mt-4 text-center font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Message sent successfully ✅
              </motion.p>
            )}
            {success === false && (
              <motion.p
                className="text-red-400 mt-4 text-center font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Failed to send. Try again ❌
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </motion.section>
  );
}
