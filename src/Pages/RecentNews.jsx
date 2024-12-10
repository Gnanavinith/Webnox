import React from "react";
import Clean1 from "../assets/Clean1.jpg";
import Clean2 from "../assets/Clean2.jpg";
import Clean3 from "../assets/Clean3.jpg";

import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";

const RecentNews = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-64 relative ">
      {/* Header Section */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-gray-600 text-sm">Why Choose Us</p>
        <h2 className="text-3xl font-bold mt-2">Recent News</h2>
        <p className="text-gray-700 mt-4 mx-4 sm:mx-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam
          numquam asperiores recusandae repellat, placeat deleniti cumque quod
          libero necessitatibus ex dicta natus quam. Voluptates velit tenetur
          distinctio doloremque eaque.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 relative z-0">
        {/* Image 1 */}
        <div className="relative shadow-lg ">
          <img src={Clean1} alt="Clean1" className="w-full h-60 object-cover" />
          <div className="absolute top-0 right-0">
            <h2 className="py-5 px-5 bg-blue-500 text-white font-bold text-center">
              12 <br /> Nov
            </h2>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-full sm:w-80 text-center border border-gray-300 shadow-lg mt-20">
            <p className="text-gray-500 text-xs font-semibold">CLEANING</p>
            <h1 className="text-2xl font-bold mt-2">Temporary Ruling Issued</h1>
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non
              eligendi, rem reiciendis hic incidunt, repellendus placeat expedita
              nulla cupiditate.
            </p>
            <div className="mt-6 flex items-center justify-center sm:justify-start">
              <img
                src={person1}
                alt="Martha Smith"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">Martha Smith</h2>
                <p className="text-gray-500">Washla CEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative shadow-lg mt-56 sm:mt-0">
          <img src={Clean2} alt="Clean2" className="w-full h-60 object-cover" />
          <div className="absolute top-0 right-0">
            <h2 className="py-5 px-5 bg-blue-500 text-white font-bold text-center">
              12 <br /> Nov
            </h2>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-full sm:w-80 text-center border border-gray-300 shadow-lg mt-20">
            <p className="text-gray-500 text-xs font-semibold">CLEANING</p>
            <h1 className="text-2xl font-bold mt-2">Temporary Ruling Issued</h1>
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non
              eligendi, rem reiciendis hic incidunt, repellendus placeat expedita
              nulla cupiditate.
            </p>
            <div className="mt-6 flex items-center justify-center sm:justify-start">
              <img
                src={person2}
                alt="Laura Jones"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">Laura Jones</h2>
                <p className="text-gray-500">Accounting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative shadow-lg mt-56 sm:mt-0">
          <img src={Clean3} alt="Clean3" className="w-full h-60 object-cover" />
          <div className="absolute top-0 right-0">
            <h2 className="py-5 px-5 bg-blue-500 text-white font-bold text-center">
              12 <br /> Nov
            </h2>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-full sm:w-80 text-center border border-gray-300 shadow-lg mt-20">
            <p className="text-gray-500 text-xs font-semibold">CLEANING</p>
            <h1 className="text-2xl font-bold mt-2">Temporary Ruling Issued</h1>
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non
              eligendi, rem reiciendis hic incidunt, repellendus placeat expedita
              nulla cupiditate.
            </p>
            <div className="mt-6 flex items-center justify-center sm:justify-start">
              <img
                src={person3}
                alt="Matt Ryan"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">Matt Ryan</h2>
                <p className="text-gray-500">Lawyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
