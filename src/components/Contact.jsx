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
          setTimeout(() => setSuccess(null), 4000); // اختفاء الرسالة بعد 4 ثواني
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
      className="bg-gray-900 text-white py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
      }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-6"
          initial={{ rotateY: 90, scale: 0.8, opacity: 0 }}
          whileInView={{ rotateY: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          viewport={{ amount: 0.3 }}
        >
          {["user_name", "user_email"].map((name, idx) => (
            <motion.input
              key={name}
              type={name === "user_email" ? "email" : "text"}
              name={name}
              placeholder={name === "user_email" ? "Your Email" : "Your Name"}
              required
              className="bg-gray-800 border border-gray-700 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: 0.1 * idx + 0.3,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            />
          ))}

          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-gray-800 border border-gray-700 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
          />

          <motion.button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded font-semibold shadow-lg"
            whileHover={{
              scale: 1.08,
              rotate: 2,
              boxShadow: "0 4px 24px #a78bfa",
            }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Send Message
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
