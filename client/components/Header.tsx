import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 10;
          setIsScrolled(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-transparent"
        initial={{ height: '100%', opacity: 1 }}
        animate={{
          height: isScrolled ? '50%' : '100%',
          opacity: isScrolled ? 0.9 : 1
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{ willChange: 'height, opacity' }}
      />

      {/* Clean white background when scrolled */}
      <motion.div
        className="absolute inset-0 bg-white shadow-sm border-b border-gray-100"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isScrolled ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{ willChange: 'opacity' }}
      />

      <motion.div
        className="relative container mx-auto px-6"
        initial={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
        animate={{
          paddingTop: isScrolled ? '0.25rem' : '1.5rem',
          paddingBottom: isScrolled ? '0.25rem' : '1.5rem'
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{ willChange: 'padding' }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets%2F52e09206a5c749d8aeea1c7b00565bbd%2F2febca80a8f84e69affcc27000235d2d"
              alt="Atsomnium Partners Logo"
              className="w-auto"
              initial={{ height: '100px', minHeight: '100px', marginLeft: '10%' }}
              animate={{
                height: isScrolled ? '40px' : '100px',
                minHeight: isScrolled ? '40px' : '100px',
                marginLeft: isScrolled ? '0%' : '10%'
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{ willChange: 'height, margin' }}
              whileHover={{
                scale: isScrolled ? 1.05 : 1.1,
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
          <motion.nav
            className="hidden md:flex items-center"
            initial={{ gap: '34%', margin: '5% 15% 5% 5%' }}
            animate={{
              gap: isScrolled ? '2rem' : '34%',
              margin: isScrolled ? '0' : '5% 15% 5% 5%'
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'gap, margin' }}
          >
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
          </motion.nav>

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
      </motion.div>
    </header>
  );
}
