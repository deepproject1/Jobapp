// eslint-disable-next-line no-unused-vars
import React from "react";

const OnlineInterview = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="md:w-1/2 w-full relative overflow-hidden rounded-lg shadow-md">
          <img
            src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/71b54416-9f8f-443d-80c9-5cd8bd490fb9/4292928330/google-meet-grid-view-fix-oct-2021-screenshot.png"
            alt="Online Interview"
            className="w-full h-full object-cover transition-transform transform hover:scale-105"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Video Call Interview with HR Team 💻
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Meet directly with our HR team for any query or doubts you may have regarding your career path.
          </p>
          <a
            href="https://forms.gle/NBtyjf26cyRAPfn27"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300 transform hover:scale-105"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default OnlineInterview;