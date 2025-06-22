// src/components/Admin/Dashboard.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Welcome to Admin Dashboard</h2>
      <p className="text-gray-600 mb-4">Manage your job postings and users here.</p>
      <div>
        <h3 className="text-lg font-semibold mb-2">Logged-in User Info</h3>
        <p><strong>Name:</strong> {user?.displayName || "Not Available"}</p>
        <p><strong>Email:</strong> {user?.email || "Not Available"}</p>
      </div>
    </div>
  );
};

export default Dashboard;
