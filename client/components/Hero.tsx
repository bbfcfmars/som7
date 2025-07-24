import { useEffect } from "react";
import { motion } from "framer-motion";

export function Hero() {
  useEffect(() => {
    // Load Vimeo Player API script
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://player.vimeo.com/api/player.js"]',
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: "100vh", minHeight: "100vh", marginBottom: "-1px" }}
    >
      {/* Full-bleed Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1103273577?h=fb1328ca55&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&title=0&byline=0&portrait=0&muted=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "calc(100vw + 10px)",
            height: "calc(100vh + 10px)",
            minWidth: "calc(100% + 10px)",
            minHeight: "calc(100% + 10px)",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
          title="hero-video"
        ></iframe>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center flex flex-col justify-center items-center h-full w-full px-6 pb-0.5">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className="font-manrope font-bold text-white text-5xl md:text-7xl leading-tight text-center">
            Redefining Gaming Excellence
          </h1>

          <p className="font-poppins text-white text-2xl md:text-3xl max-w-[996px] text-center">
            Where operational expertise meets cutting-edge innovation.
          </p>

          <motion.a
            href="#about"
            className="inline-flex items-center justify-center px-12 py-4 border-2 border-white bg-transparent rounded-full text-white font-poppins text-xl hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-lg"
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
            Learn More
          </motion.a>
        </div>
      </div>
    </section>
  );
}
