import { useEffect, useState, useRef } from "react";

export function Hero() {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://player.vimeo.com/api/player.js"]',
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress for hero section
      const scrollProgress = Math.max(0, Math.min(1,
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));

      // More pronounced parallax movement, still safe within 10% buffer
      setParallaxOffset((scrollProgress - 0.5) * 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <iframe
        src="https://player.vimeo.com/video/1103273577?h=fb1328ca55&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&title=0&byline=0&portrait=0&muted=1&background=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-[120%] h-[120%] object-cover"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          willChange: "transform",
        }}
        title="hero-video"
      />

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-manrope font-bold text-white text-5xl md:text-7xl leading-tight -mr-0.5">
            Redefining Gaming Excellence
          </h1>
          
          <p className="font-poppins text-white text-2xl md:text-3xl pt-[15px] pb-[25px]">
            Where operational expertise meets cutting-edge innovation.
          </p>
          
          <a
            href="#about"
            className="inline-flex items-center justify-center px-12 py-4 border-2 border-white bg-transparent rounded-full text-white font-poppins text-xl hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
