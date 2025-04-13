import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", type: "link" },
    { name: "Jobs", type: "link" },
    // { name: "Services", type: "link" },
    {
      name: "Join Whats Up",
      type: "button",
      icon: <FaWhatsapp className="mr-2 text-xl" />,
      href: "https://whatsapp.com/channel/0029VbB9H1yKWEKul7W3e92I",
      buttonClass: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Contact",
      type: "button",
      icon: <FaEnvelope className="mr-2 text-lg" />,
      href: "/contact",
      buttonClass: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  const getLink = (item) => {
    if (item.name === "Home") return "/";
    return item.href || `/${item.name.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 w-full z-50">

        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 block">
  <img
    className="w-full h-auto object-contain"
    src="https://i.ibb.co/q3Fz1DD6/logpro.png"
    alt="Logo"
  />
</a>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {menuItems.map((item) =>
              item.type === "button" ? (
                <a
                  key={item.name}
                  href={getLink(item)}
                  className={`text-white px-4 py-2 rounded-full flex items-center transition ${item.buttonClass}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={getLink(item)}
                  className="text-gray-700 hover:text-blue-600 transition duration-200"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div ref={menuRef} className="md:hidden bg-white px-4 pb-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={getLink(item)}
                className={`block py-2 text-center rounded-full mt-2 ${
                  item.type === "button"
                    ? `${item.buttonClass} text-white flex justify-center items-center gap-2`
                    : "text-gray-700 hover:text-blue-600"
                } transition duration-200`}
                onClick={() => setIsOpen(false)}
                target={item.type === "button" ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Spacer to prevent content being hidden under navbar */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
