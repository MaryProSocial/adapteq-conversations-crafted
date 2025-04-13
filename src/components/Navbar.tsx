
import React, { useState } from 'react';
import { Menu, X, Link } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleTryFree = () => {
    navigate('/signup');
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-Adapteq-navy">Adapt</span>
                <span className="text-Adapteq-purple/70">eq</span>
              </span>
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors">Features</a>
            <a href="#benefits" className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors">Benefits</a>
            <a href="#api-service" className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors">API Architecture</a>
            <RouterLink to="/api-docs" className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors flex items-center">
              <Link className="mr-1 h-4 w-4" />
              API Docs
            </RouterLink>
            <Button 
              onClick={handleTryFree} 
              className="bg-Adapteq-blue hover:bg-blue-700"
            >
              Try It Free
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
              <a 
                href="#features" 
                className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#benefits" 
                className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#api-service" 
                className="text-Adapteq-navy hover:text-Adapteq-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                API Architecture
              </a>
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
                Try It Free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
