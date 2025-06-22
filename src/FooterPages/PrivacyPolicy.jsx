// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Header */}
        <div className="flex items-center mb-6">
          <FaShieldAlt className="text-blue-700 text-3xl mr-3" />
          <h1 className="text-2xl font-bold text-gray-800">Privacy Policy - ProPlacer</h1>
        </div>

        {/* Content */}
        <div className="text-gray-700 space-y-5 text-sm sm:text-base">
          <p>
            At <strong>ProPlacer</strong>, we value your privacy and are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our platform.
          </p>

          <h2 className="font-semibold text-gray-800 text-lg">1. Information We Collect</h2>
          <ul className="list-disc pl-5">
            <li>Your name, email, phone number, and other contact information</li>
            <li>Educational and professional background when applying or signing up</li>
            <li>Technical data like IP address, browser type, and device info</li>
          </ul>

          <h2 className="font-semibold text-gray-800 text-lg">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5">
            <li>To assist you in job placement and career development</li>
            <li>To provide tailored training and mentorship services</li>
            <li>To send updates, offers, and important communication</li>
          </ul>

          <h2 className="font-semibold text-gray-800 text-lg">3. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share your data with trusted partners only for placement support,
            training services, or legal compliance.
          </p>

          <h2 className="font-semibold text-gray-800 text-lg">4. Your Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your personal data. To make such a request, please contact us at:
            <span className="text-blue-700"> contact.proplacer@gmail.com</span>
          </p>

          <h2 className="font-semibold text-gray-800 text-lg">5. Policy Updates</h2>
          <p>
            This policy may be updated periodically. We encourage you to review it regularly to stay informed.
          </p>

          <p className="text-blue-700 font-semibold">Thank you for trusting ProPlacer.</p>
        </div>
      </div>
    </div>
  );
};


export default PrivacyPolicy;