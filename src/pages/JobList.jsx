import React, { useEffect, useState } from "react";
import { FaCheckCircle } from 'react-icons/fa';
import herosData from "../data/joblist.json"; // your job data

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Load data from the JSON file into the state
    setJobs(herosData);
  }, []);

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

              <span className="bg-green-600 text-white text-sm font-medium px-2 py-1 rounded-sm flex w-20 items-center gap-1 shadow-sm">
                <FaCheckCircle className="text-white h-4 w-4" />
                Verified
              </span>

              <h3 className="text-xl font-semibold text-blue-800 mt-2">{job.title}</h3>
              <p className="text-gray-600 font-semibold bg-amber-100 px-2 py-1 inline-block mt-1">📌 {job.location}</p>
              <p className="text-sm text-gray-700 mt-2 mb-2">{job.description}</p>

              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li><strong>💵 Salary:</strong> {job.salary}</li>
                <li><strong>📙 Qualification:</strong> {job.qualification}</li>
                <li><strong>🧰 Experience:</strong> {job.experience}</li>
              </ul>

              <a
                href="https://forms.gle/NBtyjf26cyRAPfn27"
                className="inline-block mt-auto text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                target="_blank" // optional: opens in a new tab
                rel="noopener noreferrer"
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
