// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const AppliedJobs = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://proplacer-server.vercel.app/applications")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch applications");
        }
        return res.json();
      })
      .then((data) => {
        setApplications(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-4">Loading applications...</p>;
  if (error) return <p className="text-center py-4 text-red-600">{error}</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Applied Jobs</h2>
      <p className="text-gray-600 mb-4">
        List of jobs that users have applied to will be shown here.
      </p>

      {applications.length === 0 ? (
        <p className="text-center text-gray-500">No applications found.</p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="table-auto w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">User</th>
                <th className="border px-4 py-2">Job Title</th>
                <th className="border px-4 py-2">Applied Date</th>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Phone No</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Experience</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app._id}>
                  <td className="border px-4 py-2">{app.name}</td>
                  <td className="border px-4 py-2">{app.jobTitle}</td>
                  <td className="border px-4 py-2">
                    {new Date(app.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="border px-4 py-2">{app.jobLocation || "-"}</td>
                  <td className="border px-4 py-2">{app.phone || "-"}</td>
                  <td className="border px-4 py-2">{app.email || "-"}</td>
                  <td className="border px-4 py-2">{app.experience || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
