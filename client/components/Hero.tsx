export function Hero() {
  return (
    <section className="relative h-[900px] bg-black flex items-center justify-center overflow-hidden">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <h1 className="font-manrope font-bold text-white text-5xl md:text-7xl leading-tight mb-6 max-w-5xl">
          Redefining Gaming Excellence
        </h1>
        
        <p className="font-poppins text-white text-2xl md:text-3xl mb-12 max-w-4xl">
          Where operational expertise meets cutting-edge innovation.
        </p>
        
        <button className="inline-flex items-center justify-center px-12 py-4 border-2 border-white rounded-full text-white font-poppins text-xl hover:bg-white hover:text-black transition-all duration-300">
          Learn More
        </button>
      </div>
      
      {/* Gaming-themed background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-lg rotate-12"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-white/20 rounded-lg -rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-lg rotate-45"></div>
      </div>
    </section>
  );
}
