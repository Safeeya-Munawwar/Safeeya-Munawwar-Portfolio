import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import profileImg from "../../assets/profile/safeeya.webp";

export default function HeroImageSection() {
  const badges = [
    { label: "Full Stack", icon: <FaCode />, angle: 0 },
    { label: "Web & App", icon: <FaLaptopCode />, angle: 120 },
    { label: "MERN Stack", icon: <SiMongodb />, angle: 240 },
  ];

  const radius = 120; // distance from profile center
  const rotation = useMotionValue(0);

  // continuously rotate
  React.useEffect(() => {
    const controls = setInterval(() => {
      rotation.set((rotation.get() + 1) % 360);
    }, 20); // adjust speed here
    return () => clearInterval(controls);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-linear-to-r from-indigo-600 to-purple-600 rounded-full blur-3xl opacity-30"></div>

      {/* Profile Container */}
      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* Profile Image */}
        <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
          <img
            src={profileImg}
            alt="Safeeya Munawwar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Badges */}
        {badges.map((badge, index) => {
          // angle of badge = initial angle + rotation
          const x = useTransform(
            rotation,
            (r) => radius * Math.cos(((r + badge.angle) * Math.PI) / 180)
          );
          const y = useTransform(
            rotation,
            (r) => radius * Math.sin(((r + badge.angle) * Math.PI) / 180)
          );

          return (
            <motion.div
              key={index}
              style={{ x, y }}
              className="absolute z-20 backdrop-blur-md bg-white/20 dark:bg-gray-800/40 border border-white/30 shadow-xl rounded-2xl w-28 py-4 flex flex-col items-center text-center"
            >
              <div className="text-3xl text-indigo-600 dark:text-cyan-400 mb-2">
                {badge.icon}
              </div>
              <span className="text-xs font-semibold text-gray-900 dark:text-white px-1">
                {badge.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
