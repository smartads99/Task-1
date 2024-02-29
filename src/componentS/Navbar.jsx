// Navbar.js

import React from 'react';
import logo from '../assets/logo.png';
import Voucher from '../assets/voucher.png';

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center ml-12">
          <img src={logo}alt="Logo" className="h-22 w-35" />
        </div>
        {/* Navigation Links */}
        <div className="space-x-8">
          <a href="#" className="text-black hover:text-green-400 text-2xl font-semibold">Who we are</a>
          <a href="#" className="text-black hover:text-green-400 text-2xl font-semibold">Our Unique Approach</a>
          <a href="#" className="text-black hover:text-green-400 text-2xl font-semibold">How it Works</a>
          <a href="#" className="text-black hover:text-green-400 text-2xl font-semibold">Contact Us</a>
        </div>
        {/* Button */}
        <button className="bg-green-500 text-white px-5 py-4 rounded flex items-center space-x-2 hover:bg-green-600 mr-12">

        <img src={Voucher} alt="Button Icon" className="h-6 w-6" />
      <span className="text-2xl">GET COUPONS</span>
           </button>
      </div>
    </nav>
  );
};

export default Navbar;