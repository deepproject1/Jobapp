import React from "react";

const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 leading-tight">
            100% Job Guarantee Placement
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            With <strong>your hard work</strong> and <strong>our expert support</strong>, your career goals are within reach.
          </p>
          <p className="text-gray-600 mb-6">
            We believe in results. Our dedicated mentorship, hands-on training, and real-world projects prepare you for success — and we stand by it with a job guarantee.
          </p>
          <a
            href="https://www.whatsapp.com/channel/0029VbB9H1yKWEKul7W3e92I"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Join Whatsapp
          </a>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/022/280/613/small_2x/3d-illustration-of-job-vacancy-png.png"
            alt="3D Job Guarantee"
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;