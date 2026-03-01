import { useEffect } from "react";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify parent to hide loader
    }, 6500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const name = "Safeeya Munawwar".split("");
  const techStack = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Angular",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PHP",
    ".NET Core",
  ];

  return (
    <div className="fixed inset-0 bg-gray-50 dark:bg-slate-900 flex items-center justify-center z-50 transition-colors duration-300">
      <div className="text-center px-4 md:px-0">
        {/* Name */}
        <div className="flex justify-center flex-wrap mb-4">
          {name.map((letter, i) => (
            <span
              key={i}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {letter === " " ? "\u00A0" : letter}{" "}
              {/* replace space with non-breaking space */}
            </span>
          ))}
        </div>

        {/* Professional Title */}
        <p
          className="text-gray-700 dark:text-gray-300 text-sm md:text-lg mb-4 font-medium opacity-0 animate-fade-up"
          style={{ animationDelay: `${name.length * 0.08 + 0.5}s` }}
        >
          Full-Stack Developer | MERN & Web Technologies | Software Engineer
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm font-medium opacity-0 animate-fade-up transition-colors duration-300 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
              style={{
                animationDelay: `${name.length * 0.08 + 1 + i * 0.15}s`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 h-2 rounded-full overflow-hidden mx-auto mt-4 bg-gray-200 dark:bg-gray-700 shadow-inner">
          <div className="h-full bg-blue-500 animate-progress rounded-full" />
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fade-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fade-up 0.5s forwards;
          }

          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-progress {
            animation: progress 6.5s linear forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
