import React from "react";
import { motion } from "framer-motion";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiMailLine,
  RiWhatsappLine,
} from "react-icons/ri";

const links = [
  {
    name: "LinkedIn",
    icon: RiLinkedinFill,
    url: "https://www.linkedin.com/in/safeeya-munawwar",
  },
  {
    name: "GitHub",
    icon: RiGithubFill,
    url: "https://github.com/Safeeya-Munawwar",
  },
  {
    name: "WhatsApp",
    icon: RiWhatsappLine,
    url: "https://wa.me/94750906149?text=Hello%20Safeeya,%20I%20came%20across%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20regarding%20potential%20collaboration%20or%20opportunities.",
  },
  {
    name: "Email",
    icon: RiMailLine,
    url: "mailto:shafiyasha0036@gmail.com",
  },
];

const Links = () => {
  return (
    <section
      id="links"
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

      {/* Title */}
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
          Connect With Me
        </h2>
        <p
          className="mt-3 text-sm sm:text-base 
              text-gray-600 dark:text-gray-400 
              leading-relaxed max-w-xl mx-auto"
        >
          Explore my online presence, professional profiles, and social links{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          Learn more about my work and how to get in touch
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto mt-14 px-6 grid grid-cols-1 sm:grid-cols-4 gap-8 relative z-10">
        {links.map((link, idx) => {
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
                         rounded-2xl p-10 flex flex-col items-center justify-center
                         border border-gray-200 dark:border-gray-800
                         shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Gradient Icon Background */}
              <div
                className="w-20 h-20 flex items-center justify-center rounded-full mb-6
                           bg-linear-to-r from-indigo-600 to-cyan-500
                           text-white shadow-lg transition-transform duration-300"
              >
                <Icon className="text-3xl" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {link.name}
              </h3>

              {/* Accent Line */}
              <div className="mt-4 w-16 h-1 bg-linear-to-r from-indigo-600 to-cyan-500 rounded-full"></div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default Links;
