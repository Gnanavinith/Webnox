import React from 'react';
import { FaBroom, FaWindowMaximize, FaBuilding } from 'react-icons/fa'; // Importing icons
import service from '../../assets/service.jpg'; // Importing the service image

const Services = () => {
  return (
    <div >
      {/* Header Section with Background Image */}
      <div
        className="relative flex flex-col items-center justify-center text-center bg-cover bg-center w-full h-screen bg-no-repeat mb-12  "
        style={{
          backgroundImage: `url(${service})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg  "></div> {/* Overlay */}
        <div className="relative z-10 text-white mt-96 sm:mt-96 md:mt-96 lg:mt-9 ">

          <h2 className="text-2xl">Why Choose Us</h2>
          <h1 className="text-4xl font-bold mt-2">Our Great Service</h1>
          <p className="text-gray-200 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, earum!
          </p>
        </div>
 {/* Grid Section */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mr-10 ml-10 ">
        <div className="p-6 bg-blue-600 text-start">
          {/* Home Cleaning */}
          <div className="p-4 mb-2">
            <FaBroom className="text-4xl text-white opacity-90" />
          </div>
          <h1 className="text-xl font-semibold text-white opacity-90">Home Cleaning</h1>
          <p className="text-white opacity-90 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ut blanditiis libero quis, eum architecto?
          </p>
        </div>

        <div className="p-6 bg-blue-600 text-start">
          {/* Windows Cleaning */}
          <div className=" p-4 mb-4">
            <FaWindowMaximize className="text-4xl text-white opacity-90" />
          </div>
          <h1 className="text-xl font-semibold text-white opacity-90">Windows Cleaning</h1>
          <p className=" mt-2 text-white opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ut blanditiis libero quis, eum architecto?
          </p>
        </div>

        <div className="p-8 bg-blue-600   text-center ">
          {/* Office Cleaning */}
          <div className=" items-start ">
            <FaBuilding className="text-6xl text-white opacity-90" />
          </div>
          <h1 className="text-xl font-semibold text-start mt-5 opacity-90 text-white">Office Cleaning</h1>
          <p className="text-white mt-2 opacity-90 text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ut blanditiis libero quis, eum architecto?
          </p>
        </div>
      </div>

      </div>

     
    </div>
  );
};

export default Services;
