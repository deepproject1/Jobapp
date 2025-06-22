// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-700 text-sm sm:text-base">
          {/* Email */}
          <div className="flex items-start">
            <FaEnvelope className="text-blue-700 text-xl mr-3 mt-1" />
            <div>
              <h2 className="font-semibold text-gray-800">Email</h2>
              <p>contact.proplacer@gmail.com</p>
            </div>
          </div>

          {/* Location (Optional – you can remove or edit as needed) */}
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-blue-700 text-xl mr-3 mt-1" />
            <div>
              <h2 className="font-semibold text-gray-800">Location</h2>
              <p>ProPlacer HQ,Bangalore India (Remote Support)</p>
            </div>
          </div>

          {/* Social Media (Optional – customize links as needed) */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/fb.proplacer" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="https://x.com/pro_placer" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/pro-placer/" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactUs;