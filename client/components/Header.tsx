import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* White background with feathering gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-transparent"></div>

      <div className="relative container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets%2F52e09206a5c749d8aeea1c7b00565bbd%2F2febca80a8f84e69affcc27000235d2d"
              alt="Atsomnium Partners Logo"
              className="min-h-[100px] h-[100px] w-auto"
              whileHover={{
                scale: 1.1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  duration: 0.3
                }
              }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#about"
              className="text-black hover:text-primary font-poppins text-lg transition-colors"
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  duration: 0.2
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              About
            </motion.a>
            <motion.a
              href="#services"
              className="text-black hover:text-primary font-poppins text-lg transition-colors"
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  duration: 0.2
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#contact"
              className="text-black hover:text-primary font-poppins text-lg transition-colors"
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  duration: 0.2
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-black/20">
            <div className="flex flex-col space-y-4 pt-4">
              <motion.a
                href="#about"
                className="text-black hover:text-primary font-poppins text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    duration: 0.2
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                About
              </motion.a>
              <motion.a
                href="#services"
                className="text-black hover:text-primary font-poppins text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    duration: 0.2
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                Services
              </motion.a>
              <motion.a
                href="#contact"
                className="text-black hover:text-primary font-poppins text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    duration: 0.2
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                Contact
              </motion.a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
