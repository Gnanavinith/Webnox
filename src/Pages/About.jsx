import React from 'react';
import { FaClock, FaServicestack, FaChalkboardTeacher } from 'react-icons/fa';
import AboutContainer from './AboutContainer';
import ServiceSection from './ServiceSection';  // Corrected import name

const About = () => {
  return (
    <div>
      <div className="bg-gray-100 p-10">
        {/* Heading Section */}
        <div className="mb-10 text-center mx-auto max-w-3xl">
          <p className="text-blue-600 text-sm font-bold">Why Choose Us</p>
          <h1 className="text-2xl font-bold mb-2">Tradition of Trust</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatem, maxime dicta sequi, voluptatum animi minima ullam deserunt perspiciatis exercitationem aspernatur.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaClock className="text-blue-600 text-4xl" />,
              title: "24/7 Services",
              description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe iure possimus facere, ea ipsa at eligendi delectus minima repellendus laborum quasi magni aspernatur."
            },
            {
              icon: <FaServicestack className="text-green-600 text-4xl" />,
              title: "Service Guarantee",
              description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe iure possimus facere, ea ipsa at eligendi delectus minima repellendus laborum quasi magni aspernatur."
            },
            {
              icon: <FaChalkboardTeacher className="text-orange-600 text-4xl" />,
              title: "Professional Team",
              description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe iure possimus facere, ea ipsa at eligendi delectus minima repellendus laborum quasi magni aspernatur."
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 text-center">
              <div className="mt-6">
                <div className="bg-white rounded-full border-4 w-20 h-20 flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>
                <h1 className="text-xl font-bold mt-4">{feature.title}</h1>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AboutContainer />
      <ServiceSection />
    </div>
  );
};

export default About;
