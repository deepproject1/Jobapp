import React from "react";
import jobs from "../data/jobs.json";

const JobList = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Available Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">{job.title}</h3>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-sm text-gray-700 mt-2 mb-2">{job.description}</p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li><strong>Salary:</strong> {job.salary}</li>
                <li><strong>Qualification:</strong> {job.qualification}</li>
                <li><strong>Experience:</strong> {job.experience}</li>
              </ul>
              <a
                href={`mailto:${job.contact}`}
                className="inline-block mt-auto text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;