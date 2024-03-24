import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <a href="#" className="text-white text-xl font-bold">Satta King</a>
          </div>
          <div className="hidden md:flex md:items-center gap-5">
            {/* Navigation Links (Hidden on Small Screens) */}
            <Link to='/' className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to='/about' className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to='/login' className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            <Link to='/register' className="text-gray-300 bg-cyan-700 px-3 py-2 rounded-md text-sm font-medium">Sign up</Link>
          </div>
          <div className="md:hidden">
            {/* Hamburger Icon for Mobile */}
            <button onClick={toggleMobileMenu} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col mt-4 text-center p-4">
              <Link to='/' className="text-gray-300 hover:bg-gray-700 px-3 py-4 rounded-md text-sm font-medium">Home</Link>
              <Link to='/about' className="text-gray-300 hover:bg-gray-700 px-3 py-4 rounded-md text-sm font-medium">About</Link>
              <Link to='login' className="text-gray-300 hover:bg-gray-700 px-3 py-4 rounded-md text-sm font-medium">Login</Link>
              <Link to='register' className="text-gray-300 bg-cyan-700 px-3 py-4 rounded-md text-sm font-medium">Sign up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
