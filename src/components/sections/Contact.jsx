import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RiChat3Line,
  RiMailLine,
  RiWhatsappLine,
  RiLinkedinFill,
  RiGithubFill,
  RiSendPlaneLine,
  RiSendPlaneFill,
} from "react-icons/ri";

const contactLinks = [
  {
    title: "Email",
    icon: RiMailLine,
    buttonText: "Send Email",
    url: "mailto:shafiyasha0036@gmail.com",
  },
  {
    title: "WhatsApp",
    icon: RiWhatsappLine,
    buttonText: "Write Me",
    url: "https://wa.me/94750906149?text=Hello%20Safeeya,%20I%20came%20across%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20regarding%20potential%20collaboration%20or%20opportunities.",
  },
  {
    title: "LinkedIn",
    icon: RiLinkedinFill,
    buttonText: "Visit Profile",
    url: "https://www.linkedin.com/in/safeeya-munawwar",
  },
  {
    title: "GitHub",
    icon: RiGithubFill,
    buttonText: "View Projects",
    url: "https://github.com/Safeeya-Munawwar",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_project: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const { user_name, user_email, user_project } = formData;

    const phoneNumber = "94750906149";

    const message = `Hello Safeeya,
    
  Name: ${user_name}
  Email: ${user_email}
  Project Details: ${user_project}
  
  I came across your portfolio and would like to connect.`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setFormData({ user_name: "", user_email: "", user_project: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Floating Hero Blobs */}
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400 rounded-full opacity-20 blur-3xl"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold 
               tracking-tight text-gray-800 dark:text-gray-100"
        >
          Get In Touch
        </h2>
        <p
          className="mt-3 text-sm sm:text-base 
              text-gray-600 dark:text-gray-400 
              leading-relaxed max-w-xl mx-auto"
        >
          Reach out for collaborations, job opportunities, or just to connect{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          I’m always open to exciting ideas and new challenges
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto mt-14 px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {/* Contact Cards */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <RiChat3Line /> Talk to Me
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg
                             rounded-2xl p-8 flex flex-col items-center justify-center
                             border border-gray-200 dark:border-gray-800
                             shadow-lg hover:shadow-2xl transition duration-300 text-center"
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full mb-4
                                  bg-linear-to-r from-indigo-600 to-cyan-500
                                  text-white shadow-lg"
                  >
                    <Icon className="text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold">{link.title}</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {link.buttonText}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <RiSendPlaneLine /> Write Me
          </h3>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg
                       p-8 rounded-2xl shadow-lg
                       border border-gray-200 dark:border-gray-800
                       flex flex-col gap-5"
          >
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700
                         focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-400 transition"
            />

            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700
                         focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-400 transition"
            />

            <textarea
              name="user_project"
              value={formData.user_project}
              onChange={handleChange}
              placeholder="Your Project"
              required
              className="p-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700
                         focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-400
                         resize-none h-32 transition"
            ></textarea>

            {message && (
              <p className="text-sm font-medium text-indigo-600 dark:text-cyan-400">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="flex items-center justify-center gap-2
                         bg-linear-to-r from-indigo-600 to-cyan-500
                         hover:from-indigo-700 hover:to-cyan-600
                         text-white py-3 rounded-full font-semibold
                         transition transform hover:scale-105 shadow-md"
            >
              Send Message <RiSendPlaneFill />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
