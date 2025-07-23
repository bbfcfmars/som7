import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-white p-3 rounded">
              <div className="font-manrope font-bold text-black text-xl">
                ATSOMNIUM
                <div className="text-xs font-normal tracking-wider">PARTNERS</div>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="#about" 
              className="text-white font-poppins text-lg hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link 
              to="#services" 
              className="text-white font-poppins text-lg hover:text-gray-300 transition-colors"
            >
              Services
            </Link>
            <Link 
              to="#contact" 
              className="text-white font-poppins text-lg hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
