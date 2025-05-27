import React, { useState } from 'react';
import { Menu, X, Link, BookOpen } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleTryFree = () => {
    navigate('/contact');
  };

  const navigateToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home page first
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      // If already on home page, just scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center outline-none">
              <span className="text-2xl font-bold">
                <span className="text-Adapteq-navy">Adapt</span>
                <span className="text-Adapteq-purple/70">eq</span>
              </span>
              <span className="ml-2 text-xs text-Adapteq-navy font-medium hidden sm:inline-block">
                Connected Conversations
              </span>
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateToSection('features')} 
              className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => navigateToSection('benefits')} 
              className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => navigateToSection('cognitive-architecture')} 
              className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors"
            >
              Learn More
            </button>
            <button 
              onClick={() => navigateToSection('api-service')} 
              className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors"
            >
              API Architecture
            </button>
            <RouterLink to="/api-docs" className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors flex items-center">
              <Link className="mr-1 h-4 w-4" />
              API Docs
            </RouterLink>
            <Button 
              onClick={handleTryFree} 
              className="bg-Adapteq-blue hover:bg-blue-700"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-Adapteq-navy focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => navigateToSection('features')} 
                className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => navigateToSection('benefits')} 
                className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors text-left"
              >
                Benefits
              </button>
              <button 
                onClick={() => navigateToSection('cognitive-architecture')} 
                className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors text-left"
              >
                Learn More
              </button>
              <button 
                onClick={() => navigateToSection('api-service')} 
                className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors text-left"
              >
                API Architecture
              </button>
              <RouterLink 
                to="/api-docs" 
                className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link className="mr-1 h-4 w-4" />
                API Docs
              </RouterLink>
              <Button 
                onClick={() => {
                  handleTryFree();
                  setIsMenuOpen(false);
                }} 
                className="bg-Adapteq-blue hover:bg-blue-700 w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
