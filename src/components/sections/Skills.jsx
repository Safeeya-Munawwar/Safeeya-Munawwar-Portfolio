import React from "react";
import { motion } from "framer-motion";
import {
  RiCodeLine, // Programming Languages
  RiComputerLine, // Frontend Development / UI Frameworks
  RiServerLine, // Backend Development / Server-Side Frameworks
  RiDatabase2Line, // Databases & Data Management
  RiBracesLine, // Specialized Frameworks / Libraries
  RiToolsLine, // Tools, Platforms & DevOps
} from "react-icons/ri";

// ===== Import images =====
import htmlImg from "../../assets/skills/html.webp";
import html5Img from "../../assets/skills/html-5.webp";
import cssImg from "../../assets/skills/css.webp";
import css3Img from "../../assets/skills/css-3.webp";
import tailwindImg from "../../assets/skills/tailwind-css.webp";
import bootstrapImg from "../../assets/skills/bootstrap.webp";
import jsImg from "../../assets/skills/js.webp";
import tsImg from "../../assets/skills/ts.webp";
import reactImg from "../../assets/skills/react.webp";
import angularImg from "../../assets/skills/angular.webp";
import nextImg from "../../assets/skills/next.webp";
import phpImg from "../../assets/skills/php.webp";
import nodeImg from "../../assets/skills/node.webp";
import expressImg from "../../assets/skills/express.webp";
import javaImg from "../../assets/skills/java.webp";
import pythonImg from "../../assets/skills/python.webp";
import cSharpImg from "../../assets/skills/c-sharp.webp";
import cImg from "../../assets/skills/c.webp";
import vscodeImg from "../../assets/skills/visual.webp";
import netbeansImg from "../../assets/skills/netbeans.webp";
import laravelImg from "../../assets/skills/laravel.webp";
import javaSwingImg from "../../assets/skills/java swing.webp";
import gitImg from "../../assets/skills/git.webp";
import githubImg from "../../assets/skills/github.webp";
import vercelImg from "../../assets/skills/vercel.webp";
import mysqlImg from "../../assets/skills/mysql.webp";
import mariaImg from "../../assets/skills/mariadb.webp";
import mongodbImg from "../../assets/skills/mongodb.webp";
import sqlServerImg from "../../assets/skills/sql-server.webp";
import sublimeImg from "../../assets/skills/sublime.webp";

export const skillsData = [
  {
    category: "Programming Languages",
    icon: <RiCodeLine />,
    skills: [
      { name: "HTML", level: "Advanced", img: htmlImg },
      { name: "HTML5", level: "Advanced", img: html5Img },
      { name: "CSS", level: "Advanced", img: cssImg },
      { name: "CSS3", level: "Advanced", img: css3Img },
      { name: "JavaScript", level: "Advanced", img: jsImg },
      { name: "TypeScript", level: "Advanced", img: tsImg },
      { name: "Java", level: "Advanced", img: javaImg },
      { name: "C#", level: "Advanced", img: cSharpImg },
      { name: "Python", level: "Basic", img: pythonImg },
      { name: "C", level: "Basic", img: cImg },
      { name: "PHP", level: "Basic", img: phpImg },
    ],
  },
  {
    category: "Frontend Development / UI Frameworks",
    icon: <RiComputerLine />,
    skills: [
      { name: "React.js", level: "Advanced", img: reactImg },
      { name: "Next.js", level: "Advanced", img: nextImg },
      { name: "Tailwind CSS", level: "Advanced", img: tailwindImg },
      { name: "Angular", level: "Advanced", img: angularImg },
      { name: "Bootstrap", level: "Basic", img: bootstrapImg },
    ],
  },
  {
    category: "Backend Development / Server-Side Frameworks",
    icon: <RiServerLine />,
    skills: [
      { name: "Node.js", level: "Advanced", img: nodeImg },
      { name: "Express.js", level: "Advanced", img: expressImg },
      { name: "Laravel", level: "Basic", img: laravelImg },
    ],
  },
  {
    category: "Databases & Data Management",
    icon: <RiDatabase2Line />,
    skills: [
      { name: "MySQL", level: "Advanced", img: mysqlImg },
      { name: "MariaDB", level: "Advanced", img: mariaImg },
      { name: "SQL Server", level: "Advanced", img: sqlServerImg },
      { name: "MongoDB", level: "Basic", img: mongodbImg },
    ],
  },
  {
    category: "Specialized Frameworks / Libraries",
    icon: <RiBracesLine />,
    skills: [
      {
        name: "Java Swing (desktop GUI development)",
        level: "Advanced",
        img: javaSwingImg,
      },
    ],
  },
  {
    category: "Tools, Platforms & DevOps",
    icon: <RiToolsLine />,
    skills: [
      { name: "VS Code", level: "Advanced", img: vscodeImg },
      { name: "NetBeans", level: "Advanced", img: netbeansImg },
      { name: "Git", level: "Advanced", img: gitImg },
      { name: "GitHub", level: "Advanced", img: githubImg },
      { name: "Vercel", level: "Advanced", img: vercelImg },
      { name: "Sublime", level: "Advanced", img: sublimeImg },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold 
               tracking-tight text-gray-800 dark:text-gray-100"
        >
            Skills & Expertise
          </h2>
          <p
          className="mt-3 text-sm sm:text-base 
              text-gray-600 dark:text-gray-400 
              leading-relaxed max-w-xl mx-auto"
        >
            A showcase of technologies, tools, and frameworks I excel at <span className="hidden sm:inline">
            <br />
          </span>
            Building modern web applications and software solutions
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-10 mt-14">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg
                         p-8 rounded-2xl shadow-lg
                         border border-gray-200 dark:border-gray-800
                         hover:shadow-2xl transition duration-300"
            >
              {/* Category Title */}
              <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6">
                <span
                  className="w-12 h-12 flex items-center justify-center rounded-full
                                 bg-linear-to-r from-indigo-600 to-cyan-500
                                 text-white shadow-md"
                >
                  {category.icon}
                </span>
                {category.category}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl
                               bg-white/60 dark:bg-gray-800/60 backdrop-blur-md
                               border border-gray-200 dark:border-gray-700
                               hover:border-indigo-500 dark:hover:border-cyan-400
                               transition shadow cursor-pointer"
                  >
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-full
                                    bg-linear-to-r from-indigo-600 to-cyan-500
                                    p-2 shadow-md"
                    >
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-8 h-8 object-contain bg-white rounded-full p-1"
                      />
                    </div>

                    <h4 className="font-medium text-gray-900 dark:text-white text-center">
                      {skill.name}
                    </h4>

                    <span className="text-sm text-indigo-600 dark:text-cyan-400 font-medium">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
