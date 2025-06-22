// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AdminLayout = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const allowedEmails = ["tifikart@gmail.com", "contact.proplacer@gmail.com"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = () => {
    setIsSidebarOpen(false);
  };

  // Check if user is authorized
  if (!user || !allowedEmails.includes(user.email)) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-50 text-red-600 text-lg font-semibold">
        Access Denied: You are not authorized to view this page.
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`w-64 bg-white shadow transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:static absolute top-0 left-0 z-20 h-full`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 text-center">Admin Menu</h2>
          <nav className="space-y-3">
            <Link to="/" onClick={handleMenuItemClick} className="block text-blue-700 font-medium hover:underline">Home</Link>
            <Link to="/admin" onClick={handleMenuItemClick} className="block text-blue-700 font-medium hover:underline">Dashboard</Link>
            <Link to="/admin/post-job" onClick={handleMenuItemClick} className="block text-blue-700 font-medium hover:underline">Post a Job</Link>
            <Link to="/admin/applied-jobs" onClick={handleMenuItemClick} className="block text-blue-700 font-medium hover:underline">Applied Jobs</Link>
            <Link to="/admin/all-jobs" onClick={handleMenuItemClick} className="block text-blue-700 font-medium hover:underline">All Jobs</Link>
            <button
              onClick={handleLogout}
              className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </nav>
        </div>
      </aside>

      {/* Topbar for mobile */}
      <div className="md:hidden flex justify-between items-center px-4 py-2 bg-gray-200 shadow">
        <button onClick={toggleSidebar} className="text-2xl text-blue-700">
          {isSidebarOpen ? "✖" : "☰"}
        </button>
        <h2 className="text-lg font-bold">Admin Panel</h2>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto flex items-start justify-center bg-gray-100">
        <div className="w-full max-w-full md:max-w-screen-lg px-2 py-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
