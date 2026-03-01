import { useState, useEffect } from "react";
import {
  RiMenu4Line,
  RiCloseLine,
  RiMoonLine,
  RiSunLine,
} from "react-icons/ri";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "links", label: "Links" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 dark:bg-gray-900 shadow-sm transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 relative">
        {/* Logo */}
        <div className="font-bold text-xl text-gray-800 dark:text-gray-100 transition-colors duration-300">
          Safeeya Munawwar
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center gap-1 px-3 py-1 rounded-md transition-all duration-200 ${
                  activeLink === link.id
                    ? "text-gray-900 dark:text-gray-100 font-semibold"
                    : "hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-200"
          >
            {darkMode ? <RiSunLine /> : <RiMoonLine />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden text-gray-700 dark:text-gray-300"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu4Line />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto`} // <-- added overflow-y-auto
        >
          <ul className="flex flex-col gap-4 p-6 mt-16">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 ${
                    activeLink === link.id
                      ? "text-gray-900 dark:text-gray-100 font-semibold"
                      : "hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay for closing menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
