import React, { useState } from 'react';
import { ShoppingCart, Menu } from 'lucide-react'; // Removed Search
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="absolute w-full z-10 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Right Side Items */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:block">
              {/* You can add more navigation items here if needed */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-blue-600 to-cyan-700 relative overflow-hidden">
        <div className="container mx-auto flex justify-between h-full px-6">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-white max-w-xl z-10">
            <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">
              Mobile Province
              <br />
              <span className="font-light">new collection</span>
            </h1>
            <p className="text-lg mb-8 max-w-md">
              Pay on delivery, 48 hours to return your device (at no charge). 1 year warranty
            </p>
            <Link 
              to="/" 
              className="self-start uppercase font-semibold py-4 px-8 bg-emerald-400 rounded-full hover:bg-emerald-500 transition-colors"
            >
              Discover More
            </Link>
          </div>

          {/* Right Content - Phone Image */}
          <div className="hidden md:flex items-center justify-center w-1/2">
            <div className="relative">
              <img 
                src="/api/placeholder/600/800"
                alt="Latest smartphone"
                className="rounded-lg shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-full h-32 bg-white/5 backdrop-blur-sm transform skew-y-3"></div>
      </section>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="bg-white w-64 h-full p-4" onClick={e => e.stopPropagation()}>
          <div className="flex flex-col space-y-4">
            <Link to="/smartphones" className="text-gray-700 hover:text-cyan-700">All Smartphones</Link>
            <Link to="/apple" className="text-gray-700 hover:text-cyan-700">Apple</Link>
            <Link to="/samsung" className="text-gray-700 hover:text-cyan-700">Samsung</Link>
            <Link to="/discounts" className="text-gray-700 hover:text-cyan-700">MoDiscounts</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
