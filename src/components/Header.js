import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/atlas liquor logo.svg";
import { BsBag } from "react-icons/bs";
import { ProductContext } from '../contexts/ProductContext'; // Import the ProductContext

const Header = () => {
  // Header state
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { searchTerm, setSearchTerm } = useContext(ProductContext); // Access the search term and setter
  const [lastScrollY, setLastScrollY] = useState(0);

  // Event listener for scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toggle header visibility based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(true); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);

      // Change header background based on scroll position
      setIsActive(currentScrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update search term in the context
  };

  return (
    <header
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-transform duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to="/">
          <div className="w-[40px]">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>

        {/* Search bar */}
        <div className="flex-grow px-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch} // Update search term on change
            className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-300 transition"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          {/* Login and Register Links */}
          <Link to="/login" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
            Login
          </Link>

          {/* Cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
