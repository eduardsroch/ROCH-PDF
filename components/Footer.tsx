
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-sm text-neutral-text">
            &copy; {new Date().getFullYear()} ROCH PDF. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-sm text-neutral-text hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-neutral-text hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="text-sm text-neutral-text hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
