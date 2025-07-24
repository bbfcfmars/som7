import { useEffect, useState, useRef } from "react";

export function Services() {
  const [transform, setTransform] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how much of the section is visible and the scroll progress
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        // Start parallax when section comes into view and continue until it leaves
        const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);

        // Clamp progress between 0 and 1
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        // Calculate parallax offset (moving slower than scroll for depth effect)
        const parallaxOffset = (clampedProgress - 0.5) * 100;

        setTransform(parallaxOffset);
      });
    };

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets%2F52e09206a5c749d8aeea1c7b00565bbd%2F1582478bc59e4c27a65f5bd169896e95?format=webp&width=800",
      title: "Business Consulting & Operations",
      description:
        "Strategic guidance for gaming operations, from start-up to scale. We optimize your business processes and operational efficiency.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets%2F52e09206a5c749d8aeea1c7b00565bbd%2F759d6eaad849448e950550e8971aa85b?format=webp&width=800",
      title: "Technology Solutions",
      description:
        "Custom hardware and software platform development designed specifically for gaming operations and regulatory compliance.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets%2F52e09206a5c749d8aeea1c7b00565bbd%2F41d67d4b34aa4b5eb78690d14cdf4a2b?format=webp&width=800",
      title: "Loyalty Programs & Marketing",
      description:
        "Comprehensive marketing strategies and brand development to establish your gaming business in competitive markets.",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5cda82c1be304edcc317307f8087d923078c83ad?width=2920"
          alt="Gaming background"
          className="w-full object-cover object-center absolute"
          style={{
            height: "120%",
            top: "-10%",
            left: "0",
            transform: `translate3d(0, ${transform}px, 0)`,
            willChange: "transform",
            backfaceVisibility: "hidden",
            perspective: "1000px",
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto p-[5%_10%_10%]">
          {/* Section Header */}
          <h2 className="font-manrope font-bold text-white text-3xl mb-16">
            Services
          </h2>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="space-y-6">
                {/* Service Icon */}
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="font-manrope font-bold text-white text-xl leading-relaxed">
                    {service.title}
                  </h3>

                  <p className="font-poppins text-white text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
