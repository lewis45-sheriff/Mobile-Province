import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import phone from '../img/phone.jpg';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => (
  <nav className="absolute w-full px-6 py-4 z-10 bg-gradient-to-r from-blue-600 to-cyan-700">
    <div className="container mx-auto flex items-center justify-between">
      <div className="text-white font-bold text-2xl">Mobile Province</div>

      <div>
      <div className="flex items-center justify-between">
        <div className="md:hidden flex justify-start">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="text-black w-8 h-8" />
          </button>
        </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {['/smartphones',
            '/apple',
            '/samsung',
            '/discounts ',
            '/Gaming'].map((link, index) => (
              <Link key={index} to={link} className="text-white hover:text-cyan-300">
                {link.replace('/', '') || 'Home'}
              </Link>
            ))}
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the mobile menu when the user presses the Esc key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleEsc);
    return () => {
      window.removeEventListener('scroll', handleEsc);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-blue-600 to-cyan-700 pt-24">
        <div className="container mx-auto h-full flex justify-between items-center px-6">
          {/* Left Content */}
          <div className="text-white max-w-xl">
            <h1 className="text-[55px] md:text-[70px] font-semibold leading-tight mb-4">
              Mobile Province
              <br />
              <span className="font-light">new collection</span>
            </h1>
            <p className="text-lg mb-8">
              Pay on delivery, 48 hours to return your device (at no charge). 1 year warranty.
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
              className="rounded-lg shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500 w-full h-auto max-w-[500px] md:max-w-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="fixed top-0 left-0 h-full bg-gray-800 p-4 z-50">
            <ul className="flex flex-col space-y-2"> {/* List styling */}
              {['/smartphones', '/apple', '/samsung', '/discounts', 'Gaming'].map((link, index) => (
                <li key={index}>
                  <Link to={link} className="text-white hover:text-cyan-300 py-2 block">
                    {link.replace('/', '') || 'Home'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
