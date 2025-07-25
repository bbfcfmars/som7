export function Contact() {
  return (
    <section
      id="contact"
      className="bg-section-light px-6 py-20"
      style={{
        boxShadow:
          "0 25px 30px -5px rgba(0, 0, 0, 0.95), 0 15px 20px -3px rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-manrope font-bold text-black text-3xl mb-16">
          Contact
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-manrope font-bold text-black text-xl">
                Atsomnium Partners
              </h3>
              <div className="font-poppins text-black text-base leading-relaxed space-y-2">
                <p>5675 Jimmy Carter Blvd,</p>
                <p>Norcross GA 30071</p>
                <p>(844) 668-4263</p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {[
                  {
                    href: "#",
                    icon: "M24 2.66675H20C18.2319 2.66675 16.5362 3.36913 15.286 4.61937C14.0357 5.86961 13.3333 7.5653 13.3333 9.33342V13.3334H9.33334V18.6667H13.3333V29.3334H18.6667V18.6667H22.6667L24 13.3334H18.6667V9.33342C18.6667 8.97979 18.8072 8.64065 19.0572 8.39061C19.3072 8.14056 19.6464 8.00008 20 8.00008H24V2.66675Z",
                  },
                  {
                    href: "#",
                    icon: "M23.3333 8.66675H23.3467M9.33332 2.66675H22.6667C26.3486 2.66675 29.3333 5.65152 29.3333 9.33342V22.6667C29.3333 26.3486 26.3486 29.3334 22.6667 29.3334H9.33332C5.65142 29.3334 2.66666 26.3486 2.66666 22.6667V9.33342C2.66666 5.65152 5.65142 2.66675 9.33332 2.66675ZM21.3333 15.1601C21.4979 16.2697 21.3083 17.403 20.7917 18.3988C20.275 19.3945 19.4575 20.202 18.4555 20.7063C17.4535 21.2107 16.3179 21.3862 15.2104 21.208C14.1028 21.0298 13.0797 20.5069 12.2864 19.7136C11.4932 18.9204 10.9703 17.8972 10.7921 16.7897C10.6139 15.6822 10.7894 14.5466 11.2938 13.5446C11.7981 12.5426 12.6056 11.7251 13.6013 11.2084C14.597 10.6917 15.7303 10.5022 16.84 10.6667C17.9719 10.8346 19.0198 11.362 19.8289 12.1712C20.638 12.9803 21.1655 14.0282 21.3333 15.1601Z",
                  },
                  {
                    href: "#",
                    icon: "M21.3333 10.6667C23.4551 10.6667 25.4899 11.5096 26.9902 13.0099C28.4905 14.5102 29.3333 16.545 29.3333 18.6667V28.0001H24V18.6667C24 17.9595 23.719 17.2812 23.2189 16.7811C22.7188 16.281 22.0406 16.0001 21.3333 16.0001C20.6261 16.0001 19.9478 16.281 19.4477 16.7811C18.9476 17.2812 18.6667 17.9595 18.6667 18.6667V28.0001H13.3333V18.6667C13.3333 16.545 14.1762 14.5102 15.6765 13.0099C17.1768 11.5096 19.2116 10.6667 21.3333 10.6667ZM7.99999 12.0001H2.66666V28.0001H7.99999V12.0001ZM5.33332 8.00008C6.80608 8.00008 7.99999 6.80617 7.99999 5.33341C7.99999 3.86066 6.80608 2.66675 5.33332 2.66675C3.86056 2.66675 2.66666 3.86066 2.66666 5.33341C2.66666 6.80617 3.86056 8.00008 5.33332 8.00008Z",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-black hover:text-primary transition-all duration-200 hover:scale-105"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path
                        d={social.icon}
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-lg">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full px-4 py-3 border border-input rounded bg-white text-black placeholder:text-input-placeholder font-poppins"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full px-4 py-3 border border-input rounded bg-white text-black placeholder:text-input-placeholder font-poppins"
                />
              </div>

              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3 border border-input rounded bg-white text-black placeholder:text-input-placeholder font-poppins"
              />

              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 border border-input rounded bg-white text-black placeholder:text-input-placeholder font-poppins resize-none"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white font-poppins rounded hover:bg-primary/90 hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
