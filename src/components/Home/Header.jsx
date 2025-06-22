// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect, useRef } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
// import useAuth from "../../Hooks/useAuth";

// const Header = () => {
//   const { user, logOut } = useAuth();
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     window.addEventListener("resize", handleResize);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [isOpen]);

//   const isAdmin =
//     user?.email === "contact.proplacer@gmail.com" ||
//     user?.email === "tifikart@gmail.com";

//   const navLinks = (
//     <>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive
//               ? "font-semibold"
//               : "text-gray-700 hover:text-red-500 transition"
//           }
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/jobs"
//           className={({ isActive }) =>
//             isActive
//               ? "font-semibold"
//               : "text-gray-700 hover:text-red-500 transition"
//           }
//         >
//           Jobs
//         </NavLink>
//       </li>
//       {isAdmin && (
//         <li>
//           <NavLink
//             to="/admin"
//             className={({ isActive }) =>
//               isActive
//                 ? "font-semibold"
//                 : "text-red-600 hover:text-red-700 transition"
//             }
//           >
//             Admin
//           </NavLink>
//         </li>
//       )}
//     </>
//   );

//   const buttonLinks = (
//     <>
//       <a
//         href="https://whatsapp.com/channel/0029VbB9H1yKWEKul7W3e92I"
//         className="text-white px-4 py-2 rounded-full flex items-center bg-green-500 hover:bg-green-600 transition"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaWhatsapp className="mr-2 text-xl" />
//         Join WhatsUp
//       </a>
//       <Link
//         to="/contact"
//         className="text-white px-4 py-2 rounded-full flex items-center bg-blue-600 hover:bg-blue-700 transition"
//       >
//         <FaEnvelope className="mr-2 text-lg" />
//         Contact
//       </Link>
//     </>
//   );

//   return (
//     <>
//       <nav className="bg-white shadow-md fixed top-0 left-0 right-0 w-full z-50">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="w-36">
//             <img
//               src="https://i.ibb.co/q3Fz1DD6/logpro.png"
//               alt="Logo"
//               className="w-full h-auto object-contain"
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-6">
//             <ul className="flex items-center space-x-6">{navLinks}</ul>
//             <div className="flex items-center gap-3">{buttonLinks}</div>

//             {user ? (
//               <div className="flex items-center space-x-3 ml-4">
//                 <img
//                   src={user?.photoURL}
//                   alt="avatar"
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <span className="font-medium">{user?.displayName}</span>
//                 <button onClick={logOut} className="btn btn-sm">
//                   Sign out
//                 </button>
//               </div>
//             ) : (
//               <div className="flex items-center gap-2 ml-4">
//                 <Link to="/login">
//                   <button className="btn btn-primary btn-sm">Login</button>
//                 </Link>
//                 <Link to="/register">
//                   <button className="btn btn-outline btn-sm border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
//                     Register
//                   </button>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-700 focus:outline-none"
//             >
//               {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown */}
//         {isOpen && (
//           <div ref={menuRef} className="md:hidden bg-white px-4 pb-4 space-y-4">
//             <ul className="space-y-2">{navLinks}</ul>
//             <div className="flex flex-col gap-3">{buttonLinks}</div>
//             <div className="text-center mt-4">
//               {user ? (
//                 <div className="flex flex-col items-center space-y-2">
//                   <img
//                     src={user?.photoURL}
//                     className="w-10 h-10 rounded-full"
//                     alt="user"
//                   />
//                   <span>{user?.displayName}</span>
//                   <button onClick={logOut} className="btn btn-sm">
//                     Sign out
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex flex-col gap-2">
//                   <Link to="/login">
//                     <button className="btn btn-primary btn-sm w-full">
//                       Login
//                     </button>
//                   </Link>
//                   <Link to="/register">
//                     <button className="btn btn-outline btn-sm w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
//                       Register
//                     </button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Spacer for fixed nav */}
//       <div className="pt-20"></div>
//     </>
//   );
// };

// export default Header;



// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
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

  const isAdmin =
    user?.email === "contact.proplacer@gmail.com" ||
    user?.email === "tifikart@gmail.com";

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold" : "text-gray-700 hover:text-red-500 transition"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/jobs" className={({ isActive }) => isActive ? "font-semibold" : "text-gray-700 hover:text-red-500 transition"}>
          Apply Job
        </NavLink>
      </li>
      <li>
        <NavLink to="/getjob" className={({ isActive }) => isActive ? "font-semibold" : "text-gray-700 hover:text-red-500 transition"}>
          Get Job in 10 Days
        </NavLink>
      </li>
      <li>
       
      </li>
      {isAdmin && (
        <li>
          <NavLink to="/admin" className={({ isActive }) => isActive ? "font-semibold" : "text-red-600 hover:text-red-700 transition"}>
            Admin
          </NavLink>
        </li>
      )}
    </>
  );

  const buttonLinks = (
    <>
      <a
        href="https://whatsapp.com/channel/0029VbB9H1yKWEKul7W3e92I"
        className="text-white px-4 py-2 rounded-full flex items-center bg-green-500 hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="mr-2 text-xl" />
        Join WhatsApp
      </a>
      <Link
        to="/contact"
        className="text-white px-4 py-2 rounded-full flex items-center bg-blue-600 hover:bg-blue-700 transition"
      >
        <FaEnvelope className="mr-2 text-lg" />
        Contact
      </Link>
    </>
  );

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="w-36">
            <img
              src="https://i.ibb.co/q3Fz1DD6/logpro.png"
              alt="Logo"
              className="w-full h-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">{navLinks}</ul>
            <div className="flex items-center gap-3">{buttonLinks}</div>

            {user ? (
              <div className="flex items-center space-x-3 ml-4">
                <img
                  src={user?.photoURL}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">{user?.displayName}</span>
                <button onClick={logOut} className="btn btn-sm">
                  Sign out
                </button>
              </div>
            ) : (
              <div className="hidden">
                <Link to="/login">
                  <button className="btn btn-primary btn-sm">Login</button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-outline btn-sm border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div ref={menuRef} className="md:hidden bg-white px-4 pb-4 space-y-4">
            <ul className="space-y-2">{navLinks}</ul>
            <div className="flex flex-col gap-3">{buttonLinks}</div>
            <div className="text-center mt-4">
              {user ? (
                <div className="flex flex-col items-center space-y-2">
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full"
                    alt="user"
                  />
                  <span>{user?.displayName}</span>
                  <button onClick={logOut} className="btn btn-sm">
                    Sign out
                  </button>
                </div>
              ) : (
                <div className="hidden">
                  <Link to="/login">
                    <button className="btn btn-primary btn-sm w-full">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="btn btn-outline btn-sm w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="pt-20"></div>
    </>
  );
};

export default Header;
