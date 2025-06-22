// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaBriefcase } from "react-icons/fa"; // Icon for ProPlacer

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Header */}
        <div className="flex items-center mb-6">
          <FaBriefcase className="text-blue-700 text-3xl mr-3" />
          <h1 className="text-2xl font-bold text-gray-800">ProPlacer - Terms & Conditions</h1>
        </div>

        {/* Main Content */}
        <div className="text-gray-700 space-y-5 text-sm sm:text-base">
          <p>
            <strong>100% Job Guarantee Placement</strong>
          </p>
          <p>
            With your hard work and our expert support, your career goals are within reach. We believe in results. Our dedicated mentorship, hands-on training, and real-world projects prepare you for success — and we stand by it with a job guarantee.
          </p>
          <p>
            Please note: <strong>ProPlacer does not directly provide job offers.</strong> We support and guide you through the placement process by offering training, career resources, and mentorship. Our role is to empower you to land the job — not to hire you directly.
          </p>
          <p>
            By continuing to use our services, you acknowledge and agree to this approach. If you`re aligned with this vision, we welcome you to apply and start your journey with us.
          </p>
          <p className="text-blue-700 font-semibold">Thank you for choosing ProPlacer.</p>
        </div>
      </div>
    </div>
  );
};


export default TermsAndConditions;