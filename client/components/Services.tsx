import { useEffect, useState, useRef } from "react";

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

export function Services() {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      );

      setParallaxOffset((scrollProgress - 0.5) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 overflow-hidden"
    >
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/5cda82c1be304edcc317307f8087d923078c83ad?width=2920')",
          transform: `translateY(${parallaxOffset}px)`,
          willChange: "transform",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <h2 className="font-manrope font-bold text-white text-3xl mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-6">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-manrope font-bold text-white text-xl">
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
    </section>
  );
}
