import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  RiLinkedinBoxLine,
  RiGithubLine,
  RiMailLine,
  RiWhatsappLine,
} from "react-icons/ri";
import profileImg from "../../assets/profile/safeeya.webp";
import cv from "../../assets/cv/Safeeya Munawwar CV.pdf";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";
import HeroImageSection from "./HeroImageSection";

const roles = [
  "Full-Stack Developer",
  "MERN Stack Specialist",
  "Software Engineer",
  "MERN & Web Technologies",
];

const professionBadges = [
  { label: "Full-Stack Dev", icon: <FaReact />, position: "-top-4 left-6" },
  { label: "MERN Specialist", icon: <FaNodeJs />, position: "top-10 -right-6" },
  {
    label: "Software Engineer",
    icon: <SiJavascript />,
    position: "bottom-10 -left-8",
  },
  {
    label: "MongoDB Expert",
    icon: <SiMongodb />,
    position: "-bottom-4 right-6",
  },
];

export default function Hero() {
  const stats = [
    { label: "Years Experience", value: 3 },
    { label: "Projects Completed", value: 29 },
    { label: "Happy Clients", value: 5 },
    { label: "Tech Stack", value: 15 },
  ];

  const services = [
    "Full-Stack Web Development (MERN Stack)",
    "Mobile App Development (React Native)",
    "RESTful APIs & Backend",
    "Database Design & Management",
    "Software Architecture & Optimization",
  ];

  // Typing animation
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setCurrentRole((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentRole("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      {/* Floating Blobs */}
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-400 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400 rounded-full opacity-20 blur-3xl"
      />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col justify-start space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I am{" "}
            <span className="text-indigo-600 dark:text-cyan-400">
              Safeeya Munawwar
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 min-h-12.5">
            {currentRole}
            <span className="animate-blink">|</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
            I’m a professional full-stack MERN developer with 3+ years of
            experience building scalable, responsive, and user-friendly web
            applications. I specialize in React, Node.js, Express, MongoDB, and
            JavaScript, delivering clean and maintainable code.
          </p>

          {/* Services */}
          <div className="mt-4 text-left">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
              What I Do:
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              {services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Profile Image + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center lg:justify-end relative w-full"
        >
          <div className="w-full flex flex-col items-center justify-center">
            {/* Profile Image */}
            <div className="relative w-70 h-90 flex items-center justify-center">
              <HeroImageSection />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
              <a
                href={cv}
                download="Safeeya_Munawwar_CV.pdf"
                className="flex-1 sm:flex-none"
              >
                <button className="min-w-45 w-full bg-linear-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 shadow-lg">
                  Download Resume
                </button>
              </a>

              <a
                href="mailto:shafiyasha0036@gmail.com"
                className="flex-1 sm:flex-none"
              >
                <button className="min-w-45 w-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 shadow">
                  Contact Me
                </button>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-6 text-3xl text-gray-500 dark:text-gray-300">
              <a
                href="https://www.linkedin.com/in/safeeya-munawwar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-cyan-400 transition"
              >
                <RiLinkedinBoxLine />
              </a>
              <a
                href="https://github.com/Safeeya-Munawwar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-cyan-400 transition"
              >
                <RiGithubLine />
              </a>
              <a
                href="mailto:shafiyasha0036@gmail.com"
                className="hover:text-indigo-600 dark:hover:text-cyan-400 transition"
              >
                <RiMailLine />
              </a>
              <a
                href="https://wa.me/94750906149?text=Hello%20Safeeya,%20I%20came%20across%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20regarding%20potential%20collaboration%20or%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-cyan-400 transition text-2xl"
              >
                <RiWhatsappLine />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-6 justify-center sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-5 rounded-2xl text-center shadow hover:shadow-xl transition transform hover:scale-105 w-full h-32 flex flex-col justify-center"
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-2">
              {stat.label}
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stat.value}+
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
