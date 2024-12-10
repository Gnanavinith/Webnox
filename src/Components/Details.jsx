import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Details = () => {
  return (
    <div className="bg-transparent hidden md:block">
      <div className="flex justify-between items-center text-slate-50 ">
        {/* Left side: Phone and Email */}
        <div className="flex space-x-6 mt-2">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-white text-lg" />
            <span className="font-medium">+123-456-789</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-white-600 text-lg" />
            <span className="font-medium">info@yourdomain.com</span>
          </div>
        </div>

        {/* Right side: Social Media Links and CTA Button */}
        <div className="flex items-center space-x-4 mt-2">
          <FaFacebook className="hover:text-blue-600 text-xl cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 text-xl cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 text-xl cursor-pointer" />
          <FaLinkedin className="hover:text-blue-500 text-xl cursor-pointer" />

          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
            GET A QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
