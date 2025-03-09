import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#FF8C00]">
          Kukur Tihar
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-[#FF8C00] cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-600 hover:text-[#FF8C00] cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="text-gray-600 hover:text-[#FF8C00] cursor-pointer"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-[#FF8C00] cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div>
          <Link to="/donate">
            <button className="bg-[#FF8C00] text-white px-4 py-2 rounded-md shadow hover:bg-orange-600">
              Donate
            </button>
          </Link>
        </div>

       

        {/* Mobile Menu Button */}
        <div className="md:hidden text-gray-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
