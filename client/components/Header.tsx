import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 10);
  const [hasInitialized, setHasInitialized] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Set initialized after first render to enable transitions
    setHasInitialized(true);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${hasInitialized ? 'transition-all duration-300' : ''} ${
      isScrolled
        ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 py-1"
        : "bg-gradient-to-b from-white via-white/95 to-transparent py-3"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F52e09206a5c749d8aeea1c7b00565bbd%2F2febca80a8f84e69affcc27000235d2d"
            alt="Atsomnium Partners Logo"
            className={`w-auto hover:scale-105 ${hasInitialized ? 'transition-all duration-300' : ''} ${
              isScrolled ? "h-10" : "h-20 md:h-24"
            }`}
            style={{
              marginLeft: isScrolled ? '0' : '10%'
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center ${hasInitialized ? 'transition-all duration-300' : ''}`}
          style={{
            gap: isScrolled ? '2rem' : '3.5rem',
            marginRight: isScrolled ? '0' : '15%'
          }}
        >
          {["about", "services", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className="text-black hover:text-primary font-poppins text-lg transition-all duration-200 hover:scale-105 capitalize"
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-black/20 px-6 py-4">
          <div className="flex flex-col space-y-4">
            {["about", "services", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => {
                  handleNavClick(section);
                  setIsMenuOpen(false);
                }}
                className="text-left text-black hover:text-primary font-poppins text-lg transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
