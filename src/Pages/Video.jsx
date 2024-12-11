import React from "react";
import { FaHouseUser, FaBroom, FaAward, FaGlassMartini } from "react-icons/fa";
import HomeImage from "../assets/homeimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
  return (
    <div className="relative mt-20 ">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white text-center relative"
        style={{ backgroundImage: `url(${HomeImage})` }}
      >
        {/* Play Button */}
        <button className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md hover:bg-blue-600 transition duration-300">
          <FontAwesomeIcon
            icon={faPlay}
            className="text-white text-3xl hover:text-blue transition duration-300"
          />
        </button>

        {/* Hero Content */}
        <p className="text-lg tracking-widest mb-2">
          Clearing Your Worries Away
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
          Need Help With Cleaning
        </h2>
        <button className="px-7 py-2 bg-blue-600 text-white rounded-md shadow-md text-lg hover:bg-blue-700 transition duration-300">
          Request Call Back
        </button>
      </div>

      {/* Stats Section */}
      <div className="absolute left-0 right-0 bottom-0 transform translate-y-1/2 bg-gray-100 text-center border-t border-b border-gray-300 mx-4 sm:mx-10 rounded-lg shadow-lg ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-10 py-8 ">
          {/* Stat 1 */}
          <div className="flex flex-col items-center border-r border-gray-300 last:border-none">
            <FaHouseUser className="text-blue-600 text-4xl mb-2" />
            <h2 className="text-3xl font-bold mb-1">385</h2>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center border-r border-gray-300 last:border-none">
            <FaBroom className="text-green-600 text-4xl mb-2" />
            <h2 className="text-3xl font-bold mb-1">842</h2>
            <p className="text-gray-600">Houses Cleaned</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center border-r border-gray-300 last:border-none">
            <FaAward className="text-yellow-500 text-4xl mb-2" />
            <h2 className="text-3xl font-bold mb-1">485</h2>
            <p className="text-gray-600">Awards Received</p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <FaGlassMartini className="text-orange-600 text-4xl mb-2" />
            <h2 className="text-3xl font-bold mb-1">1485</h2>
            <p className="text-gray-600">Glass Cleaned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
    