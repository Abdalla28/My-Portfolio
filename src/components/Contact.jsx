import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_el9bd99", "template_3kueovc", form.current, "aHAcaY8oK8GMGpnIz")
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setSuccess(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-gray-800 border border-gray-700 px-4 py-2 rounded focus:outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-gray-800 border border-gray-700 px-4 py-2 rounded focus:outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-gray-800 border border-gray-700 px-4 py-2 rounded focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded font-semibold"
          >
            Send Message
          </button>
          {success === true && <p className="text-green-400">Message sent successfully ✅</p>}
          {success === false && <p className="text-red-400">Failed to send. Try again ❌</p>}
        </form>
      </div>
    </motion.section>
  );
}
