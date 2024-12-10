import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white opacity-90 border-b sticky top-0 z-50 ml-10 mr-10 rounded">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">amiso</h2>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-16 right-0 bg-white w-full md:w-auto md:flex md:space-x-6 p-4 md:p-0 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 gap-7">
            <li>
              <a href="" className="hover:text-gray-400">
                HOME
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">
                ABOUT
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">
                PAGES
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">
                GALLERY
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">
                BLOG
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
