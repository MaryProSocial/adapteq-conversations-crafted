
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-adapteq-navy">Adapt</span>
                <span className="text-adapteq-purple/70">eq</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-adapteq-navy hover:text-adapteq-blue transition-colors">Features</a>
            <a href="#benefits" className="text-adapteq-navy hover:text-adapteq-blue transition-colors">Benefits</a>
            <a href="#testimonials" className="text-adapteq-navy hover:text-adapteq-blue transition-colors">Testimonials</a>
            <Button className="bg-adapteq-blue hover:bg-blue-700">Request Demo</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-adapteq-navy focus:outline-none"
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
                className="text-adapteq-navy hover:text-adapteq-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#benefits" 
                className="text-adapteq-navy hover:text-adapteq-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#testimonials" 
                className="text-adapteq-navy hover:text-adapteq-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <Button className="bg-adapteq-blue hover:bg-blue-700 w-full">Request Demo</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
