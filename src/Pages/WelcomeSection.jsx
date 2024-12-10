import React from "react";

const WelcomeSection = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center text-center ml-4 mr-4 md:items-start md:ml-20 md:mr-10 md:text-left mt-10 md:mt-0 min-h-[50vh] relative">
      <div className="mb-6">
        <p className="text-lg uppercase tracking-widest mb-2">Renew Your Look</p>
        <h1 className="text-4xl uppercase tracking-widest md:text-6xl font-bold">
          A Tradition of <br />
          <span>Quality Cleaning</span>
        </h1>
      </div>
      <div>
        <button className="px-6 py-2 mt-10 bg-transparent border border-white hover:bg-blue-700 text-white rounded-md shadow-md text-lg transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;
