// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const Disclaimer = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Header */}
        <div className="flex items-center mb-6">
          <FaExclamationTriangle className="text-yellow-500 text-3xl mr-3" />
          <h1 className="text-2xl font-bold text-gray-800">Disclaimer - ProPlacer</h1>
        </div>

        {/* Content */}
        <div className="text-gray-700 space-y-5 text-sm sm:text-base">
          <p>
            The information provided by <strong>ProPlacer</strong> is for general informational and educational purposes only. 
            All content is provided in good faith; however, we make no representation or warranty of any kind, express or implied, 
            regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the platform.
          </p>

          <h2 className="font-semibold text-gray-800 text-lg">1. Job Guarantee Disclaimer</h2>
          <p>
            While we offer comprehensive training, mentorship, and support, <strong>ProPlacer does not directly offer or guarantee employment</strong>. 
            Our services are intended to enhance your job readiness and increase your chances of securing employment through skill-building and guidance.
          </p>

          <h2 className="font-semibold text-gray-800 text-lg">2. No Legal or Professional Advice</h2>
          <p>
            The content on this site is not intended to constitute legal, financial, or professional advice. Users are advised to consult appropriate professionals 
            for specific concerns.
          </p>

          <h2 className="font-semibold text-gray-800 text-lg">3. External Links</h2>
          <p>
            Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy or safety of such links.
          </p>

          <h2 className="font-semibold text-gray-800 text-lg">4. Consent</h2>
          <p>
            By using our website and services, you hereby consent to this disclaimer and agree to its terms.
          </p>

          <p className="text-blue-700 font-semibold">Thank you for choosing ProPlacer. We re here to support your career journey responsibly.</p>
        </div>
      </div>
    </div>
  );
};


export default Disclaimer;