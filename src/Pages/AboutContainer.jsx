import React from 'react';
import House1 from "../assets/House1.jpg";

const AboutContainer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center bg-gray-100 relative">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2">
        <img
          src={House1}
          alt="House Cleaning"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 bg-slate-300 p-8 md:p-12 relative">
        <div className="mx-auto max-w-lg">
          <p className="text-blue-600 font-bold text-sm uppercase mb-2">Maid For You</p>
          <h1 className="text-3xl font-bold mb-4">A Cleaner Place is a Safer Place</h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam,
            laudantium doloremque adipisci expedita, dolores quasi harum in mollitia
            magnam voluptatibus, perferendis rerum explicabo perspiciatis itaque provident
            dicta saepe corrupti.
          </p>

          {/* Icons and Text */}
          <div className="flex flex-col space-y-6">
            {[
              {
                icon: '🧹',
                title: "Professional Cleaning",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, dolores."
              },
              {
                icon: '⚡',
                title: "Fast and Efficient",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aliquam!"
              }
            ].map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <span className="text-blue-600 text-2xl">{service.icon}</span>
                <div>
                  <h2 className="text-xl font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
