/* eslint-disable no-unused-vars */
import React from "react";

const GetJob = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Get your dream job in <span className="text-yellow-400">10 Days</span>
        </h1>

        <p className="text-lg sm:text-xl font-semibold mb-10 max-w-xl">
          100% Guaranteed Interview Opportunity
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Why Join Us?</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Learn From Industry Experts In Easy Way</li>
              <li>
                Highest Salary Package Of{" "}
                <span className="font-extrabold text-yellow-400">14LPA</span>
              </li>
              <li>4 Weeks Online Program</li>
              <li>1:1 Meeting with Mentors</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">
              Book Your One to One Video Call Meeting
            </h2>
            <p className="text-lg">
              Connect with our best mentors for any query & doubts, get
              personalized guidance and clear all your questions.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg mb-10">
          <h3 className="text-3xl font-bold mb-6 text-center text-blue-700">
            What More Do We Offer
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg leading-relaxed">
            <li>✔️ Powerful Resume Building</li>
            <li>✔️ Scheduling Interviews</li>
            <li>✔️ Assessment & Versant Test Preparation</li>
            <li>✔️ Extensive Support</li>
            <li>✔️ Mock Interviews</li>
            <li>✔️ Job Search Assistance</li>
            <li>✔️ Complete Job Guidance</li>
            <li>✔️ Interview Tips & Tricks PDF</li>
          </ul>
        </div>

        {/* Apply Button */}
        <div className="text-center">
          <a
            href="https://forms.gle/NXZVztERHvVHL5in7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black font-semibold text-lg px-6 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetJob;
