'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="bg-white w-full h-full px-10 pt-5 pb-12 shadow-md rounded">
      <div className="flex items-center mb-6 gap-2">
        <h2 className="text-3xl font-semibold text-gray-800">Contact</h2>
        <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9C1A] text-2xl" />
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 space-y-5 text-gray-700 text-base">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#ED250A]" />
            <span>Email: <a href="mailto:kashifkhalil720@gmail.com" className="text-blue-600">kashif@example.com</a></span>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faPhone} className="text-[#ED250A]" />
            <span>Phone: +92 349 5262735</span>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faLocationDot} className="text-[#ED250A]" />
            <span>Location: IT Park Peshawar, Pakistan</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#FF9C1A]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#FF9C1A]"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#FF9C1A]"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#FF9C1A] to-[#ED250A] text-white py-2 px-6 rounded hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
