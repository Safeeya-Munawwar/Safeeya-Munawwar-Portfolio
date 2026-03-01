import React from "react";
import { motion } from "framer-motion";
import { RiLinkedinFill, RiGithubLine, RiWhatsappLine, RiMailLine, } from "react-icons/ri";

const Footer = () => {
  const sections = ["home", "skills", "projects"];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white py-20 overflow-hidden">
      {/* Floating Background Blobs */}
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500 rounded-full opacity-20 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Glass Container */}
        <div
          className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl
                        border border-gray-200 dark:border-gray-800
                        rounded-3xl shadow-2xl p-10 text-center"
        >
          {/* Name & Title */}
          <div>
            <h1 className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Safeeya Munawwar
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Full-Stack Developer
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 mx-auto my-6 rounded-full bg-linear-to-r from-indigo-600 to-cyan-500"></div>

          {/* Navigation */}
          <ul className="flex justify-center gap-10 flex-wrap">
            {sections.map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => handleScroll(sec)}
                  className="relative font-medium text-gray-700 dark:text-gray-300 
                             hover:text-indigo-600 dark:hover:text-cyan-400
                             transition duration-300 group"
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}

                  {/* Animated underline */}
                  <span
                    className="absolute left-0 -bottom-1 w-0 h-0.5 
                                   bg-linear-to-r from-indigo-600 to-cyan-500
                                   transition-all duration-300 group-hover:w-full"
                  ></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-10">
            <a
              href="https://www.linkedin.com/in/safeeya-munawwar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full
                         bg-linear-to-r from-indigo-600 to-cyan-500
                         text-white text-xl shadow-lg
                         hover:scale-110 hover:shadow-indigo-500/40
                         transition duration-300"
            >
              <RiLinkedinFill />
            </a>

            <a
              href="https://github.com/Safeeya-Munawwar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full
                         bg-linear-to-r from-indigo-600 to-cyan-500
                         text-white text-xl shadow-lg
                         hover:scale-110 hover:shadow-indigo-500/40
                         transition duration-300"
            >
              <RiGithubLine />
            </a>

            <a
              href="https://wa.me/94750906149?text=Hello%20Safeeya,%20I%20came%20across%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20regarding%20potential%20collaboration%20or%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full
                         bg-linear-to-r from-indigo-600 to-cyan-500
                         text-white text-xl shadow-lg
                         hover:scale-110 hover:shadow-cyan-500/40
                         transition duration-300"
            >
              <RiWhatsappLine />
            </a>

            <a
              href="mailto:shafiyasha0036@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full
                         bg-linear-to-r from-indigo-600 to-cyan-500
                         text-white text-xl shadow-lg
                         hover:scale-110 hover:shadow-cyan-500/40
                         transition duration-300"
            >
              <RiMailLine />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Safeeya Munawwar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
