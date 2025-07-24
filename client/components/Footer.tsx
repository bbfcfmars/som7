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
    <footer className="relative h-[88px] overflow-hidden" style={{backgroundColor: "#222222"}}>   

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              className="cursor-pointer flex-shrink-0"
              whileHover={{
                scale: 1.05,
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
                className="h-16 w-auto"
              />
            </motion.button>

            {/* Contact Info */}
            <div className="flex flex-col space-y-1 text-white text-sm ml-8">
              <div className="flex items-center space-x-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3333 4.99967C18.3333 4.08301 17.5833 3.33301 16.6667 3.33301H3.33332C2.41666 3.33301 1.66666 4.08301 1.66666 4.99967M18.3333 4.99967V14.9997C18.3333 15.9163 17.5833 16.6663 16.6667 16.6663H3.33332C2.41666 16.6663 1.66666 15.9163 1.66666 14.9997V4.99967M18.3333 4.99967L9.99999 10.833L1.66666 4.99967"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a
                  href="mailto:info@atsomniumpartners.com"
                  className="hover:text-primary transition-colors"
                >
                  info@atsomniumpartners.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3333 14.0997V16.5997C18.3343 16.8318 18.2867 17.0615 18.1937 17.2741C18.1008 17.4868 17.9644 17.6777 17.7934 17.8346C17.6224 17.9915 17.4205 18.1109 17.2006 18.1853C16.9808 18.2596 16.7478 18.2872 16.5167 18.2663C13.9523 17.9877 11.4892 17.1115 9.32498 15.708C7.31151 14.4286 5.60443 12.7215 4.32499 10.708C2.91663 8.53401 2.04019 6.05884 1.76665 3.48301C1.74583 3.25256 1.77321 3.02031 1.84707 2.80103C1.92092 2.58175 2.03963 2.38025 2.19562 2.20936C2.35162 2.03847 2.54149 1.90193 2.75314 1.80844C2.9648 1.71495 3.1936 1.66656 3.42499 1.66634H5.92498C6.32941 1.66236 6.72148 1.80557 7.02812 2.06928C7.33476 2.333 7.53505 2.69921 7.59165 3.09967C7.69717 3.89973 7.89286 4.68528 8.17499 5.44134C8.2871 5.73961 8.31137 6.06377 8.24491 6.37541C8.17844 6.68705 8.02404 6.9731 7.79998 7.19967L6.74165 8.25801C7.92795 10.3443 9.65536 12.0717 11.7417 13.258L12.8 12.1997C13.0266 11.9756 13.3126 11.8212 13.6243 11.7548C13.9359 11.6883 14.26 11.7126 14.5583 11.8247C15.3144 12.1068 16.0999 12.3025 16.9 12.408C17.3048 12.4651 17.6745 12.669 17.9388 12.9809C18.203 13.2928 18.3435 13.691 18.3333 14.0997Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>(844) 668-4263</span>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex items-center space-x-3 text-white text-xs">
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                to="/terms-of-service"
                className="hover:text-primary transition-colors whitespace-nowrap"
              >
                Terms of Service
              </Link>
              <span>|</span>
              <span className="whitespace-nowrap">©2025 All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
