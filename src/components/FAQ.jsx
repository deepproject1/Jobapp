import React, { useState } from "react";
import faqData from "../data/FAQ.json"; // Path to your FAQ JSON file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the answer if it's already open
    } else {
      setActiveIndex(index); // Open the selected answer
    }
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center sm:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-6">
          {faqData.map((faq) => (
            <div key={faq.id} className="bg-white rounded-xl shadow p-6">
              <div
                className="cursor-pointer text-xl font-semibold text-gray-800 mb-3"
                onClick={() => toggleAnswer(faq.id)}
              >
                {faq.question}
              </div>
              {activeIndex === faq.id && (
                <p className="text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
