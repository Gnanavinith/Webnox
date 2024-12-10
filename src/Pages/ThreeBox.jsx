import React from "react";
import { FaBroom, FaBolt, FaHome } from "react-icons/fa";

const ThreeBox = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-10 px-4 py-8 bg-blue-400 mt-28">
      {/* Box 1 */}
      <div className="flex flex-col items-center text-center p-6 relative -translate-y-28 ">
        <div className="bg-white p-10 flex flex-col items-center justify-center">
          <div className="text-blue-600 text-4xl mb-4">
            <FaBroom />
          </div>
          <h2 className="text-xl font-bold mb-2">Professional Cleaning</h2>
          <p className="text-gray-600">
            Housekeeping is responsible for minor security in the hotel ecosystem for food and cleaner through.
          </p>
        </div>
        <div className="mt-20 text-left">
          <h1 className="text-2xl font-bold text-black-600 mb-2">A Clean House is a Happy Place!</h1>
          <p className=" text-white">
            Washla has met the demand of a growing world.
          </p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="flex flex-col items-center text-center p-6 relative -translate-y-28">
        <div className="bg-white p-10 flex flex-col items-center justify-center">
          <div className="text-green-600 text-4xl mb-4">
            <FaBolt />
          </div>
          <h2 className="text-xl font-bold mb-2">Fast and Efficient</h2>
          <p className="text-gray-600">
            Housekeeping is responsible for minor security in the hotel ecosystem for food and cleaner through.
          </p>
        </div>
        <div className="mt-20 text-left">
          <p className="text-white leading-relaxed">
            Washla has met the demand of a growing world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab?
          </p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="flex flex-col items-center text-center p-6 relative -translate-y-28">
        <div className="bg-white p-10 flex flex-col items-center justify-center">
          <div className="text-orange-600 text-4xl mb-4">
            <FaHome />
          </div>
          <h2 className="text-xl font-bold mb-2">Renew Your Look</h2>
          <p className="text-gray-600">
            Housekeeping is responsible for minor security in the hotel ecosystem for food and cleaner through.
          </p>
        </div>
        <div className="mt-20 text-start">
          <p className="text-white leading-relaxed">
            Washla has met the demand of a growing world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloribus ipsa in dignissimos. Accusantium consequatur assumenda iusto itaque soluta nam doloribus voluptatibus et id dolor voluptates consectetur in, corrupti inventore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeBox;
