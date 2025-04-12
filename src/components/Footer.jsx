import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-2">JobPortal</h2>
          <p className="text-sm text-gray-300">
            Your success is our mission. Start your career journey with confidence and our full support.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {["Home", "Jobs", "Recruiter", "Services", "Contact Us"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
          <p className="text-gray-300 text-sm mb-4">Email: support@jobportal.com</p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
