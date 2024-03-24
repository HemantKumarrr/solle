import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Footer Logo and About Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Satta King</h2>
            <p className="text-sm">A brief description of your company can go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Quick Links Section */}
          <div className="w-full md:w-1/4 lg:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          {/* Contact Section */}
          <div className="w-full md:w-1/4 lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <p className="text-sm">123 Main Street, City, Country</p>
            <p className="text-sm">sattaKing@gmail.com</p>
            <p className="text-sm">+91 99********</p>
          </div>
        </div>
        {/* Divider */}
        <hr className="border-gray-700 my-8" />
        {/* Copyright */}
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Satta King. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
