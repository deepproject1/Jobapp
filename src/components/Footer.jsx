// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Tagline */}
        <a href="/" className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 block">
  <img
    className="w-full h-auto object-contain"
    src="https://i.ibb.co/q3Fz1DD6/logpro.png"
    alt="Logo"
  />
</a>


        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-white transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
          <p className="text-gray-300 text-sm mb-4">
            Email: contact.proplacer@gmail.com
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/fb.proplacer" className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="https://x.com/pro_placer" className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/pro-placer/" className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://whatsapp.com/channel/0029VbB9H1yKWEKul7W3e92I" className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Pro Placer. All rights reserved.
      </div>
    </footer>
  );
};


export default Footer;