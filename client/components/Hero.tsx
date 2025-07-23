export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Full-bleed Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/1103273577?autoplay=1&loop=1&muted=1&controls=0&background=1&h=fb1328ca55"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            width: '100vw',
            height: '100vh',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'scale(1.02)', // Slight scale to ensure no edge gaps
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <h1 className="font-manrope font-bold text-white text-5xl md:text-7xl leading-tight mb-6 max-w-5xl">
          Redefining Gaming Excellence
        </h1>

        <p className="font-poppins text-white text-2xl md:text-3xl mb-12 max-w-4xl">
          Where operational expertise meets cutting-edge innovation.
        </p>

        <a
          href="#about"
          className="inline-flex items-center justify-center px-12 py-4 border-2 border-white rounded-full text-white font-poppins text-xl hover:bg-white hover:text-black transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
