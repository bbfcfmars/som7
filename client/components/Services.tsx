import { useEffect, useState, useRef } from "react";

export function Services() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: "👥",
      title: "Business Consulting & Operations",
      description: "Strategic guidance for gaming operations, from start-up to scale. We optimize your business processes and operational efficiency."
    },
    {
      icon: "⚙️",
      title: "Technology Solutions",
      description: "Custom hardware and software platform development designed specifically for gaming operations and regulatory compliance."
    },
    {
      icon: "📊",
      title: "Loyalty Programs & Marketing",
      description: "Comprehensive marketing strategies and brand development to establish your gaming business in competitive markets."
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5cda82c1be304edcc317307f8087d923078c83ad?width=2920"
          alt="Gaming background"
          className="w-full object-cover object-center absolute"
          style={{
            height: '150%',
            top: '-25%',
            left: '0',
            transform: `translateY(${Math.min(100, Math.max(-100, scrollY * 0.15))}px)`,
            willChange: 'transform'
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
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                  {service.icon}
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
