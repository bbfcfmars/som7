import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative h-[80px] overflow-hidden" style={{backgroundColor: "#222222"}}>   

      {/* Content */}
      <div className="relative z-10 flex h-full items-center" style={{ padding: "5%" }}>
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center">
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              className="cursor-pointer"
              whileHover={{
                scale: 1.1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  duration: 0.3,
                },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F52e09206a5c749d8aeea1c7b00565bbd%2F1ce67e3496004f8db2a91a50931ea0dc?format=webp&width=800"
                alt="Atsomnium Partners Logo - Scroll to Top"
                className="h-auto w-auto"
                style={{ height: "50px" }}
              />
            </motion.button>

            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-white text-sm">
              <a
                href="mailto:info@atsomniumpartners.com"
                className="hover:text-primary transition-colors"
              >
                info@atsomniumpartners.com
              </a>
              <span>(844) 668-4263</span>
            </div>

            {/* Footer Links */}
            <div className="flex items-center space-x-3 text-white text-xs">
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                to="/terms-of-service"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <span>|</span>
              <span>©2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
