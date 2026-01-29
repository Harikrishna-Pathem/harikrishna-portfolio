import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaBriefcase } from "react-icons/fa";
import useTheme from "../hooks/useTheme";

const menuVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
  exit: { opacity: 0, y: -10, scale: 0.98 },
};

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
     { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-[#dacce8]/70 dark:bg-[#1A0B2E]/60">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
        {/* LOGO */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <FaBriefcase className="text-primary" />
          <span>Portfolio</span>
        </div>

        {/* DESKTOP NAV (CENTERED) */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                nav-link
                text-sm font-medium
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="theme-btn"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="md:hidden ml-auto flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="theme-btn"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={() => setOpen(!open)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full w-full px-6 py-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  block py-3 text-lg font-semibold
                  hover:text-primary
                "
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
