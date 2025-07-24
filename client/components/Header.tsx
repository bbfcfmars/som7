import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      // Navigate to home page, then scroll to section after navigation
      navigate("/");
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    // Set initial state based on current scroll position
    const initialScrolled = window.scrollY > 10;
    setIsScrolled(initialScrolled);
    setHasInitialized(true);

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-transparent"
        animate={{
          height: isScrolled ? "50%" : "100%",
          opacity: isScrolled ? 0.9 : 1,
        }}
        transition={{
          duration: hasInitialized ? 0.3 : 0,
          ease: [0.4, 0, 0.2, 1],
          height: { duration: hasInitialized ? 0.3 : 0 },
          opacity: { duration: hasInitialized ? 0.3 : 0 },
        }}
        style={{
          willChange: "height, opacity",
          height: isScrolled ? "50%" : "100%",
          opacity: isScrolled ? 0.9 : 1,
        }}
      />

      {/* Clean white background when scrolled */}
      <motion.div
        className="absolute inset-0 bg-white shadow-sm border-b border-gray-100"
        animate={{
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{
          duration: hasInitialized ? 0.3 : 0,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          willChange: "opacity",
          opacity: isScrolled ? 1 : 0,
        }}
      />

      <motion.div
        className="relative flex items-center justify-between container mx-auto px-6"
        animate={{
          paddingTop: isScrolled ? "0.25rem" : "0.75rem",
          paddingBottom: isScrolled ? "0.25rem" : "0.75rem",
        }}
        transition={{
          duration: hasInitialized ? 0.3 : 0,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          willChange: "padding",
          paddingTop: isScrolled ? "0.25rem" : "0.75rem",
          paddingBottom: isScrolled ? "0.25rem" : "0.75rem",
        }}
      >
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets%2F52e09206a5c749d8aeea1c7b00565bbd%2F2febca80a8f84e69affcc27000235d2d"
              alt="Atsomnium Partners Logo"
              className="w-auto"
              animate={{
                height: isScrolled ? "40px" : "100px",
                minHeight: isScrolled ? "40px" : "100px",
                marginLeft: isScrolled ? "0%" : "10%",
              }}
              transition={{
                duration: hasInitialized ? 0.3 : 0,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{
                willChange: "height, margin",
                height: isScrolled ? "40px" : "100px",
                minHeight: isScrolled ? "40px" : "100px",
                marginLeft: isScrolled ? "0%" : "10%",
              }}
              whileHover={{
                scale: isScrolled ? 1.05 : 1.1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  duration: 0.3,
                },
              }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center"
            animate={{
              gap: isScrolled ? "2rem" : "57px",
              margin: isScrolled ? "0" : "5% 15% 5% 5%",
            }}
            transition={{
              duration: hasInitialized ? 0.3 : 0,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              willChange: "gap, margin",
              gap: isScrolled ? "2rem" : "57px",
              margin: isScrolled ? "0" : "5% 15% 5% 5%",
            }}
          >
            <motion.button
              onClick={() => handleNavClick("about")}
              className="text-black hover:text-primary font-poppins text-lg transition-colors cursor-pointer"
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  duration: 0.2,
                },
              }}
              whileTap={{ scale: 0.98 }}
            >
              About
            </motion.button>
            <motion.button
              onClick={() => handleNavClick("services")}
              className="text-black hover:text-primary font-poppins text-lg transition-colors cursor-pointer"
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  duration: 0.2,
                },
              }}
              whileTap={{ scale: 0.98 }}
            >
              Services
            </motion.button>
            <motion.button
              onClick={() => handleNavClick("contact")}
              className="text-black hover:text-primary font-poppins text-lg transition-colors cursor-pointer mr-6"
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  duration: 0.2,
                },
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.button>
          </motion.nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-black/20">
            <div className="flex flex-col space-y-4 pt-4">
              <motion.button
                onClick={() => {
                  handleNavClick("about");
                  setIsMenuOpen(false);
                }}
                className="text-black hover:text-primary font-poppins text-lg transition-colors cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    duration: 0.2,
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                About
              </motion.button>
              <motion.button
                onClick={() => {
                  handleNavClick("services");
                  setIsMenuOpen(false);
                }}
                className="text-black hover:text-primary font-poppins text-lg transition-colors cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    duration: 0.2,
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Services
              </motion.button>
              <motion.button
                onClick={() => {
                  handleNavClick("contact");
                  setIsMenuOpen(false);
                }}
                className="text-black hover:text-primary font-poppins text-lg transition-colors cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    duration: 0.2,
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Contact
              </motion.button>
            </div>
          </nav>
        )}
      </motion.div>
    </header>
  );
}
