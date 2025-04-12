import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-4">
        Coming Soon 🚧
      </h1>
      <p className="text-gray-600 max-w-xl text-lg md:text-xl mb-6">
        We're working hard to bring you something amazing. Stay tuned — our new feature/page is on its way!
      </p>

      {/* Email notify form */}
      <form className="flex flex-col md:flex-row items-center gap-3 mb-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Notify Me
        </button>
      </form>

      {/* Go Home Button */}
      <Link
        to="/"
        className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium underline"
      >
        ⬅ Go to Home
      </Link>

      {/* Illustration */}
      <img
        src="https://cdn.dribbble.com/users/194276/screenshots/6131618/coming-soon.png"
        alt="Coming Soon Illustration"
        className="w-full max-w-md mt-8"
      />
    </div>
  );
};


export default Error;
