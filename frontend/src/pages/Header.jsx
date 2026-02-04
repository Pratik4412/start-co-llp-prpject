import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuBar } from "../data/text";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4 md:py-6"
        }`}
      >
        <div className="px-5 md:px-10 lg:px-20">
          <div
            className={`container mx-auto flex items-center justify-between bg-white rounded-md py-3 px-4 md:px-6 w-full transition-all duration-300 ${
              isScrolled ? "shadow-lg border border-gray-100" : "shadow-md"
            }`}
          >
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="S T A R S & Co. LLP Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
                }`}
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              {menuBar.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className={`relative text-base font-medium transition-all duration-300 hover:text-primary-dark group ${
                    location.pathname === item.path
                      ? "text-primary-dark"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-primary-dark transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            {/* <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="py-2.5 px-6 bg-primary-dark text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </div> */}
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-dark transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <img src={logo} alt="Logo" className="h-10" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-primary-dark transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-1 px-4">
              {menuBar.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-primary-dark text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-primary-dark"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-6 border-t border-gray-200 space-y-4">
            {/* <Link
              to="/contact"
              className="block w-full py-3 px-6 bg-primary-dark text-white text-center text-sm font-medium rounded-full hover:bg-opacity-90 transition-all"
            >
              Get in Touch
            </Link> */}
            <a
              href="tel:+919819082799"
              className="flex items-center justify-center gap-2 text-primary-dark hover:text-primary-dark/80 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 9819082799
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
