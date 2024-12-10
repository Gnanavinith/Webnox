import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black py-8 mt-80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Footer Brand Section */}
          <div className="mb-8 sm:mb-0 text-center sm:text-left">
            <h2 className="text-3xl font-bold">Amizo</h2>
            <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic veniam beatae ut neque velit libero mollitia nulla obcaecati officia.</p>
          </div>

          {/* Contact Information Section */}
          <div className="mb-8 sm:mb-0 text-center sm:text-left">
            <h1 className="text-xl font-semibold mb-4">Get in Touch</h1>
            <ul className="space-y-2">
              <li>2344 NW 56th ST, Miami, Florida 34234, United States</li>
              <li>info@gmail.com</li>
              <li>+1 234-242-4424</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-semibold mb-4">Quick Links</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Team</li>
              </ul>
              <ul className="space-y-2">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Gallery</li>
                <li>Blogs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Line Divider */}
        <hr className="my-8 border-t border-gray-300" />

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p>@ 2023 Amizo. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
