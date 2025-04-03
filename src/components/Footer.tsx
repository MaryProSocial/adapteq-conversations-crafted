
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-adapteq-navy text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 gradient-text">adapteq</h3>
            <p className="text-gray-300 mb-6">
              Transforming human services with cognitive conversations powered by AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-adapteq-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-adapteq-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-adapteq-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-adapteq-teal transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Housing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mental Health</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Crisis Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} adapteq. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
