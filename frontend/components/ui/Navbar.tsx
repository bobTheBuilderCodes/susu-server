"use client"

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-700 border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="py-5">
            <a href="/" className="text-gray-700 font-bold">LOGO</a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="navItem hover:bg-gray-100">Home</a>
            <a href="#" className="navItem hover:bg-gray-100 ">About</a>
            <a href="#" className="navItem hover:bg-gray-100">Services</a>
            <a href="#" className="navItem hover:bg-gray-100">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'max-h-40' : 'max-h-0'} overflow-hidden transition-max-height duration-700 ease-in-out`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">About</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">Services</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
