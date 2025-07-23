export function About() {
  return (
    <section
      id="about"
      className="p-[5%_10%_10%] bg-section-light"
      style={{
        boxShadow: "21px 30px 50px 5px rgb(0, 0, 0)",
        marginTop: "-20px",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <h2 className="font-manrope font-bold text-black text-3xl mb-16">
            About
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5b1654ffd0006a7668cd08213b1714395ba1a423?width=1000"
                alt="Gaming solutions team collaboration"
                className="w-full h-[281px] object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="font-manrope font-bold text-black text-xl leading-relaxed">
                Somnium delivers comprehensive solutions for the modern gaming
                industry.
              </h3>

              <p className="font-poppins text-black text-base leading-relaxed">
                Somnium represents the convergence of deep industry knowledge
                and breakthrough technology. We understand the gaming landscape
                from every angle—operations, innovation, and market
                dynamics—providing our clients with unparalleled expertise to
                navigate and excel in this evolving industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
