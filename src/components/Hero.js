import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import phone from '../img/phone.jpg'

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="absolute w-full px-6 py-4 z-10 bg-gradient-to-r from-blue-600 to-cyan-700">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-2xl"></div>

          {/* Toggle Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="text-white w-8 h-8" />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 pt-10"> {/* Adjust pt-10 as needed */}
            <Link to="/smartphones" className="text-white hover:text-cyan-300">All Smartphones</Link>
            <Link to="/apple" className="text-white hover:text-cyan-300">Apple</Link>
            <Link to="/samsung" className="text-white hover:text-cyan-300">Samsung</Link>
            <Link to="/discounts" className="text-white hover:text-cyan-300">Second Hand</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-blue-600 to-cyan-700 pt-24"> {/* Reduced padding-top */}
        <div className="container mx-auto h-full flex justify-between items-center px-6">
          {/* Left Content */}
          <div className="text-white max-w-xl">
            <h1 className="text-[55px] md:text-[70px] font-semibold leading-tight mb-4">
              Mobile Province
              <br />
              <span className="font-light">new collection</span>
            </h1>
            <p className="text-lg mb-8">
              Pay on delivery, 48 hours to return your device (at no charge). 1 year warranty
            </p>
            <Link
              to="/"
              className="inline-block py-4 px-8 bg-emerald-400 text-white font-semibold uppercase rounded-full hover:bg-emerald-500 transition"
            >
              Discover More
            </Link>
          </div>

          {/* Right Content - Phone Image */}
          <div className="hidden md:flex w-full md:w-1/2 justify-full">
            <img
              src={phone}
              alt="Latest smartphone"
              className="rounded-lg shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500 w-full h-auto max-w-[500px] md:max-w-[600px]" // Adjusted size
            />
          </div>

        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="bg-white w-64 h-full p-4 mt-16"
            onClick={(e) => e.stopPropagation()}
          >

          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
