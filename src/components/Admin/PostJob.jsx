import { useState } from "react";
import {
  FaUserTie,
  FaComments,
  FaKeyboard,
  FaBriefcase,
  FaChartLine,
  FaTasks,
  FaDatabase,
  FaPenNib,
  FaVideo,
  FaShieldAlt,
  FaCogs,
  FaMobileAlt,
  FaCode,
  FaBug,
  FaLaptopCode,
  FaProjectDiagram,
  FaCommentDots,
  FaRegEdit,
  FaSearch,
} from "react-icons/fa";

const jobCategories = [
  { name: "Customer Service", value: "customer-service", icon: <FaUserTie /> },
  { name: "Chat Process", value: "chat-process", icon: <FaComments /> },
  { name: "Data Entry", value: "data-entry", icon: <FaKeyboard /> },
  { name: "Back Office", value: "back-office", icon: <FaBriefcase /> },
  { name: "Data Annotator", value: "data-annotator", icon: <FaTasks /> },
  { name: "Data Analyst", value: "data-analyst", icon: <FaChartLine /> },
  { name: "Database Management", value: "database", icon: <FaDatabase /> },
  { name: "Content Moderator", value: "content-moderator", icon: <FaShieldAlt /> },
  { name: "Video Editor", value: "video-editor", icon: <FaVideo /> },
  { name: "Graphic Designer", value: "graphic-designer", icon: <FaPenNib /> },
  { name: "Content Writer", value: "content-writer", icon: <FaRegEdit /> },
  { name: "SEO Specialist", value: "seo-specialist", icon: <FaSearch /> },
  { name: "Technical Support", value: "tech-support", icon: <FaCogs /> },
  { name: "Mobile Support", value: "mobile-support", icon: <FaMobileAlt /> },
  { name: "Frontend Developer", value: "frontend-dev", icon: <FaLaptopCode /> },
  { name: "Backend Developer", value: "backend-dev", icon: <FaCode /> },
  { name: "QA Tester", value: "qa-tester", icon: <FaBug /> },
  { name: "Project Manager", value: "project-manager", icon: <FaProjectDiagram /> },
  { name: "Live Chat Agent", value: "live-chat", icon: <FaCommentDots /> },
];

const qualifications = [
  "12th Pass",
  "Diploma",
  "Graduate (B.A/B.Sc/B.Com)",
  "B.Tech / B.E",
  "Post Graduate (M.A/M.Sc/M.Com)",
];

const experiences = [
  "Fresher",
  "1 Year Experience",
  "2-3 Years Experience",
  "3-5 Years Experience",
  "5+ Years Experience",
];

const PostJob = () => {
  const [selectedCategory, setSelectedCategory] = useState(jobCategories[0]);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    salary: "",
    qualification: qualifications[0],
    experience: experiences[0],
    description: "",
    extraNotes: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobPayload = {
      ...formData,
      category: selectedCategory.name,
      icon: selectedCategory.value,
    };

    try {
      const res = await fetch("https://proplacer-server.vercel.app/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobPayload),
      });

      const data = await res.json();
      if (data.success) {
        alert(`✅ Job "${formData.title}" posted successfully!`);
        setFormData({
          title: "",
          location: "",
          salary: "",
          qualification: qualifications[0],
          experience: experiences[0],
          description: "",
          extraNotes: "",
          contact: "",
        });
      } else {
        alert("❌ Failed to post job.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("❌ Something went wrong while posting the job.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold mb-6">Post a New Job</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Job Title */}
        <div>
          <label className="block mb-1 font-medium">Job Title</label>
          <div className="flex items-center border rounded px-3 py-2">
            <span className="text-xl text-gray-600 mr-2">
              {selectedCategory.icon}
            </span>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Customer Service Executive"
              className="w-full focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Job Category */}
        <div>
          <label className="block mb-1 font-medium">Job Category</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={selectedCategory.value}
            onChange={(e) =>
              setSelectedCategory(
                jobCategories.find((cat) => cat.value === e.target.value)
              )
            }
          >
            {jobCategories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Location (manual input) */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter job location manually"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block mb-1 font-medium">Salary</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="e.g. ₹15,000 - ₹25,000 per month"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Qualification */}
        <div>
          <label className="block mb-1 font-medium">Qualification</label>
          <select
            name="qualification"
            className="w-full border px-3 py-2 rounded"
            value={formData.qualification}
            onChange={handleChange}
          >
            {qualifications.map((q, i) => (
              <option key={i} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="block mb-1 font-medium">Experience</label>
          <select
            name="experience"
            className="w-full border px-3 py-2 rounded"
            value={formData.experience}
            onChange={handleChange}
          >
            {experiences.map((exp, i) => (
              <option key={i} value={exp}>
                {exp}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the responsibilities and benefits..."
            rows={4}
            className="w-full border px-3 py-2 rounded resize-none"
          />
        </div>

        {/* Extra Notes */}
        <div>
          <label className="block mb-1 font-medium">
            Extra Notes (Optional)
          </label>
          <input
            type="text"
            name="extraNotes"
            value={formData.extraNotes}
            onChange={handleChange}
            placeholder="e.g. Night shift only, weekend off, etc."
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Contact - disabled input */}
        {/* 
        <div>
          <label className="block mb-1 font-medium">Contact / Apply Link</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="This input disabled by admin"
            className="w-full border px-3 py-2 rounded"
            disabled
          />
        </div>
        */}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;