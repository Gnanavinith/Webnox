import React from "react";
import Team1 from "../assets/Team1.jpg";
import Team2 from "../assets/Team2.jpg";
import Team3 from "../assets/Team3.jpg";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8 ml-10 mr-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-gray-600 text-sm">Meet Our</p>
        <h1 className="text-3xl font-bold mt-2">Our Team</h1>
        <p className="text-gray-700 mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          itaque consectetur doloremque, ut dolor, nisi illum perferendis
          cupiditate amet saepe ullam.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Team Member 1 */}
        <div className="relative flex flex-col items-center">
          <img
            src={Team1}
            alt="Monica Gordan"
            className="w-full h-96 object-cover mb-4"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-80 text-center mt-36 border border-gray-300 shadow-lg">
            <h1 className="text-xl font-semibold text-black">Monica Gordan</h1>
            <p className="text-black">House Cleaning</p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="relative flex flex-col items-center">
          <img
            src={Team2}
            alt="John Smith"
            className="w-full h-96 object-cover mb-4"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-80 text-center mt-36 border border-gray-300 shadow-lg">
            <h1 className="text-xl font-semibold text-black">John Smith</h1>
            <p className="text-black">Team Lead</p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="relative flex flex-col items-center">
          <img
            src={Team3}
            alt="Sarah Lee"
            className="w-full h-96 object-cover mb-4"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-80 text-center mt-36 border border-gray-300 shadow-lg">
            <h1 className="text-xl font-semibold text-black">Sarah Lee</h1>
            <p className="text-black">Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
