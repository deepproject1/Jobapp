// eslint-disable-next-line no-unused-vars
import React from "react";
import herosData from "../../../data/ourHerosData.json";

const OurHeros = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
        Testimonials🚀
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Already Hired Through Our Support – Real Stories, Real People.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {herosData.map((hero) => (
            <div
              key={hero.id}
              className="bg-white rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={hero.image}
                alt={hero.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-600 mb-4"
              />

              {/* Name & Position */}
              <h3 className="text-lg font-medium text-gray-800">{hero.name}</h3>
              <p className="text-gray-500 text-sm">{hero.position}</p>

              {/* Best Review */}
              <p className="text-gray-600 mt-4 text-sm italic">
          ` {hero.review}`
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default OurHeros;