import React from "react";
import { motion } from "framer-motion";
import {
  RiCodeLine,
  RiSmartphoneLine,
  RiDatabase2Line,
  RiServerLine,
  RiBrushLine,
  RiFileCodeLine,
} from "react-icons/ri";

const services = [
  {
    icon: RiCodeLine,
    title: "Web Development",
    description:
      "Building scalable and responsive web applications using React, Next.js, Node.js, PHP, and .NET.",
  },
  {
    icon: RiSmartphoneLine,
    title: "Mobile App Development",
    description:
      "Designing and developing cross-platform mobile apps using React Native for iOS and Android.",
  },
  {
    icon: RiDatabase2Line,
    title: "Database Management",
    description:
      "Efficient database design, optimization, and management using MySQL, MongoDB, and SQL Server.",
  },
  {
    icon: RiServerLine,
    title: "Backend & REST APIs",
    description:
      "Developing secure, scalable, and maintainable server-side applications and RESTful APIs.",
  },
  {
    icon: RiBrushLine,
    title: "UI/UX Design",
    description:
      "Crafting visually appealing, intuitive, and responsive interfaces for web and mobile apps.",
  },
  {
    icon: RiFileCodeLine,
    title: "Code Review & Optimization",
    description:
      "Ensuring clean, efficient, and maintainable code with best practices and performance tuning.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Floating Blobs (Hero Style) */}
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
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold 
               tracking-tight text-gray-800 dark:text-gray-100"
        >
          Services I Offer
        </h2>
        <p
          className="mt-3 text-sm sm:text-base 
              text-gray-600 dark:text-gray-400 
              leading-relaxed max-w-xl mx-auto"
        >
          Providing high-quality web development and software solutions{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          Tailored services to meet client needs and projects
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto mt-14 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl p-8 
                         border border-gray-200 dark:border-gray-800
                         shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full mb-6
                           bg-linear-to-r from-indigo-600 to-cyan-500
                           text-white shadow-md"
              >
                <Icon className="text-2xl" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Accent Line */}
              <div className="w-14 h-1 bg-linear-to-r from-indigo-600 to-cyan-500 rounded-full"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
