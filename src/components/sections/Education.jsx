import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    name: "Higher National Diploma in IT",
    institute: "Sri Lanka Institute of Advanced Technological Education",
    location: "Advanced Technological Institute - Kandy, Sri Lanka",
    year: "August 2022 - Present",
  },
  {
    name: "English Extension Course",
    institute: "University of Peradeniya",
    location: "",
    year: "June 2023 - February 2024",
  },
  {
    name: "GCE Advanced Level",
    institute: "CP/ Denu Arafa Muslim Maha Vidyalya",
    location: "",
    year: "2021",
    result: "Results: ABC | Z-Score: 1.0589",
  },
  {
    name: "GCE Ordinary Level",
    institute: "CP/ Denu Arafa Muslim Maha Vidyalya",
    location: "",
    year: "2018",
    result: "Results: 2A 3B 4C",
  },
];
const Education = () => {
  return (
    <section
      id="education"
      className="relative py-20 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300"
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

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold 
               tracking-tight text-gray-800 dark:text-gray-100"
        >
          Education & Qualifications
        </h2>
        <p
          className="mt-3 text-sm sm:text-base 
              text-gray-600 dark:text-gray-400 
              leading-relaxed max-w-xl mx-auto"
        >
          Academic background and professional courses that shaped my skills{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          Laying the foundation for my technical and professional journey
        </p>
      </motion.div>

      {/* Experience Grid */}
      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-2 gap-10 px-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            {/* Period Badge */}
            <div
              className="absolute -top-3 left-6 bg-linear-to-r from-indigo-600 to-cyan-500
                                text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm"
            >
              {edu.year}
            </div>

            {/* Experience Content */}
            <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
              {edu.name}
            </h3>
            <span className="block mt-1 text-gray-700 dark:text-gray-300 font-medium">
              {edu.institute}
            </span>
            {edu.location && (
              <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">
                {edu.location}
              </p>
            )}

            {edu.result && (
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                {edu.result}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
