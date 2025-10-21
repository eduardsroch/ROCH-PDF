
import React from 'react';

const Logo: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="248" height="64" viewBox="0 0 620 160" className="h-10 w-auto">
    <defs>
      <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#FF6B5A"/>
        <stop offset="1" stopColor="#E33E33"/>
      </linearGradient>
    </defs>
    <rect x="0" y="10" width="120" height="140" rx="14" fill="url(#g1)"/>
    <path d="M96 10 L120 34 L96 34 Z" fill="#FFFFFF" opacity="0.12"/>
    <path d="M36 46 C36 36 46 32 58 32 H78 C92 32 104 44 104 58 C104 78 88 86 72 90 L88 120 L72 120 L56 90 H52 C40 90 36 80 36 70 Z" fill="#FFFFFF"/>
    <g transform="translate(140, 80)">
      <text x="0" y="-6" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="64" fill="#0F172A">ROCH</text>
      <text x="210" y="-6" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="64" fill="#E33E33">PDF</text>
    </g>
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" aria-label="ROCH PDF Home">
              <Logo />
            </a>
          </div>
          <nav className="flex items-center space-x-4">
            <a href="#login" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              Login
            </a>
            <a href="#signup" className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-opacity-90 transition-all">
              Sign Up
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
