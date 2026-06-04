import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/POWERMIND.png" alt="Powermind Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
              <span className="text-base sm:text-xl font-bold text-gray-900 whitespace-nowrap">Powermind Automation</span>
            </Link>
          </div>
 
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Services
            </Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Case Studies
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Testimonials
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Contact
            </Link>
          </nav>
 
          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
 
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
 
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/case-studies"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="w-full">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 w-full"
                >
                  Get Free Consultation
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;