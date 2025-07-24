import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      const scrollY = window.scrollY;
      const maxScroll = 30; // Complete transition over 30 pixels
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    handleScroll(); // Set initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic styles based on scroll progress
  const headerOpacity = 0.9 + (0.1 * scrollProgress); // 0.9 to 1.0
  const borderOpacity = scrollProgress; // 0 to 1
  const shadowOpacity = scrollProgress * 0.1; // 0 to 0.1
  const paddingY = 12 - (8 * scrollProgress); // 12px to 4px (py-3 to py-1)
  const logoHeight = 80 - (40 * scrollProgress); // 80px to 40px (h-20 to h-10)
  const logoMarginLeft = 10 - (10 * scrollProgress); // 10% to 0%
  const navGap = 56 - (24 * scrollProgress); // 56px to 32px (gap-14 to gap-8)
  const navMarginRight = 15 - (15 * scrollProgress); // 15% to 0%

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrollProgress > 0 
          ? `rgba(255, 255, 255, ${headerOpacity})` 
          : 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.95), transparent)',
        backdropFilter: scrollProgress > 0.1 ? 'blur(4px)' : 'none',
        borderBottom: `1px solid rgba(229, 231, 235, ${borderOpacity})`,
        boxShadow: `0 1px 3px 0 rgba(0, 0, 0, ${shadowOpacity})`,
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`,
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F52e09206a5c749d8aeea1c7b00565bbd%2F2febca80a8f84e69affcc27000235d2d"
            alt="Atsomnium Partners Logo"
            className="w-auto hover:scale-105 transition-transform duration-200"
            style={{
              height: `${logoHeight}px`,
              marginLeft: `${logoMarginLeft}%`
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center"
          style={{
            gap: `${navGap}px`,
            marginRight: `${navMarginRight}%`
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
        <nav 
          className="md:hidden px-6 py-4"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${Math.max(0.95, headerOpacity)})`,
            borderTop: `1px solid rgba(0, 0, 0, 0.2)`
          }}
        >
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
