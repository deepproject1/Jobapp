/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "sweetalert2/dist/sweetalert2.min.css";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://proplacer-server.vercel.app/jobs";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleEdit = (jobId) => {
    console.log("Edit job:", jobId);
    // You can navigate to an edit form or open a modal here
  };

  const handleDelete = async (jobId) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      const res = await fetch(`https://proplacer-server.vercel.app/jobs/${jobId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
        alert("Job deleted successfully!");
      } else {
        const err = await res.json();
        alert(err.error || "Failed to delete job.");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Something went wrong while deleting!");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">All Posted Jobs</h2>
      <p className="text-gray-600 mb-6">Manage your job listings below.</p>

      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h3>
    <ul className="text-sm text-gray-600 mb-4 space-y-1">
      <li>
        <strong>💵 Salary:</strong> ₹ {job.salary}
      </li>
      <li>
        <strong>📙 Qualification:</strong> {job.qualification}
      </li>
      <li>
        <strong>🧰 Experience:</strong> {job.experience}
      </li>
    </ul>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-400 mt-1">
                Posted on: {job.postedDate}
              </p>

              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleEdit(job._id)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllJobs;
