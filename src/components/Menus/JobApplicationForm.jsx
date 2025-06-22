// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const JobApplicationForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const { title, location: jobLocation } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    qualification: "",
    experience: "0",
    noticePeriod: "",
    expectedCtc: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      jobId: id,
      jobTitle: title,
      jobLocation,
    };

    try {
      const res = await fetch("https://proplacer-server.vercel.app/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          address: "",
          phone: "",
          qualification: "",
          experience: "0",
          noticePeriod: "",
          expectedCtc: "",
        });
      } else {
        alert("Failed to submit application.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Server error. Please try again later.");
    }
  };

  if (!title || !jobLocation) {
    return (
      <div className="text-center text-red-600 mt-10">
        Missing job details. Please return to the job listings.
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Apply for {title}
        </h2>
        <p className="text-gray-600 mb-2">
          <strong>Job ID:</strong> {id}
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Location:</strong> {jobLocation}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {[
            { label: "Your Name *", name: "name", type: "text", required: true },
            { label: "Email *", name: "email", type: "email", required: true },
            { label: "Address *", name: "address", type: "text", required: true },
            { label: "Phone Number", name: "phone", type: "tel" },
            { label: "Highest Qualification *", name: "qualification", type: "text", required: true },
            { label: "Notice Period (Mention Days)", name: "noticePeriod", type: "text" },
            { label: "Expected CTC", name: "expectedCtc", type: "text" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          ))}

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Experience
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="0">0 year</option>
              <option value="1">1 year</option>
              <option value="2">2 year</option>
              <option value="3+">3+ years</option>
            </select>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center pt-2">
            * We will contact you if you're shortlisted. No need to upload your CV.
          </p>
        </form>
      </div>
    </section>
  );
};

export default JobApplicationForm;
