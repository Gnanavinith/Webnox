import React from "react";
import { FaUsers, FaClock, FaShieldAlt, FaBroom, FaBolt } from "react-icons/fa"; // Importing icons
import house from "../../assets/homeimage.jpg";
import Services from "./Services";

const About = () => {
  return (
    <div className="">
      <div className="p-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-1xl font-medium text-gray-600 uppercase ">
            Why Choose Us
          </h1>
          <h2 className="text-4xl font-bold  mt-2">Tradition Of Trust</h2>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quo!
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          <div className="p-6 text-center">
            <div className="bg-slate-50 shadow-xl rounded-full  p-4 flex items-center justify-center mx-auto w-20 h-20 ">
              <FaUsers className="text-4xl text-blue-500" /> {/* Team icon */}
            </div>

            <h1 className="text-xl font-semibold mt-5">Professional Team</h1>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore, officia?
            </p>
          </div>
          <div className="p-6  text-center">

          <div className="bg-slate-50 shadow-xl rounded-full  p-4 flex items-center justify-center mx-auto w-20 h-20 ">
            <FaClock className="text-4xl text-green-500 mx-auto mb-4" />
            {/* Clock icon */}
            </div>
            
            <h1 className="text-xl font-semibold mt-5">24/7 Services</h1>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, ut!
            </p>
          </div>
          <div className="p-6 text-center">
          <div className="bg-slate-50 shadow-xl rounded-full  p-4 flex items-center justify-center mx-auto w-20 h-20 ">
            <FaShieldAlt className="text-4xl text-red-500 mx-auto mb-4" />
            {/* Service icon */}
            </div>
            
            <h1 className="text-xl font-semibold mt-5">Service Guarantee</h1>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              at?
            </p>
          </div>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        {/* Image Section */}
        <div className="relative">
          <img src={house} alt="House" className="w-full" />
        </div>

        {/* Text Section */}
        <div className="relative bg-white shadow-2xl p-10 lg:w-[113%] lg:-ml-20 mt-28 z-10">
          <h2 className="text-2xl text-gray-600 ">MAID FOR YOU</h2>
          <h1 className="text-3xl font-bold  mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            error.
          </h1>
          <p className="text-gray-500 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            dolor.
          </p>

          {/* Flexbox Section */}
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="flex-1 p-4  text-start">
              <FaBroom className="text-4xl text-purple-500 mb-4" />{" "}
              {/* Clean icon */}
              <h1 className="text-xl font-semibold">Professional Cleaning</h1>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat, iusto.
              </p>
            </div>
            <div className="flex-1 p-4  text-start">
              <FaBolt className="text-4xl text-yellow-500  mb-4" />{" "}
              {/* Efficient icon */}
              <h1 className="text-xl font-semibold">Fast And Efficient</h1>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                necessitatibus?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-24   ">
<Services/>
</div>
     
    </div>
  );
};

export default About;
