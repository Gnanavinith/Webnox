import React from 'react';
import House2 from "../assets/House2.jpg";

const ServicesSection = () => {
  return (
    <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[12%] bg-cover bg-center" style={{ backgroundImage: `url(${House2})` }}>
      {/* Main Content */}
      <div className="p-8 md:p-16 w-full md:w-2/3 mx-auto mt-16 text-center">
        <h2 className="text-white text-lg font-bold mb-2">Why Choose Us</h2>
        <h1 className="text-4xl font-bold mb-4">Our Great Service</h1>
        <p className="text-white mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cum.
        </p>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-16">
        {/* Home Cleaning */}
        <div className="bg-blue-400 p-6 shadow-lg items-start">
          <div className="p-3 rounded-full mb-4">
            {/* Replace with actual icon */}
            <span className="text-white text-3xl">🧹</span>
          </div>
          <div>
            <h1 className="text-2xl text-white font-bold mb-2">Home Cleaning</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, possimus.
            </p>
          </div>
        </div>

        {/* Windows Cleaning */}
        <div className="bg-blue-400 p-6 shadow-lg items-start">
          <div className="p-3 rounded-full mb-4">
            {/* Replace with actual icon */}
            <span className="text-yellow-600 text-3xl">🪟</span>
          </div>
          <div>
            <h1 className="text-2xl text-white font-bold mb-2">Windows Cleaning</h1>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, voluptas?
            </p>
          </div>
        </div>

        {/* Office Cleaning */}
        <div className="bg-blue-400 p-6 shadow-lg items-start">
          <div className="p-3 rounded-full mb-4">
            {/* Replace with actual icon */}
            <span className="text-green-600 text-3xl">🏢</span>
          </div>
          <div>
            <h1 className="text-2xl text-white font-bold mb-2">Office Cleaning</h1>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, voluptas?
            </p>
          </div>
        </div>

        {/* Add more service cards here as needed */}
      </div>
    </div>
  );
};

export default ServicesSection;
