// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: "Is there really a 100% job guarantee?",
    answer: "Yes! With your effort and our guidance, we guarantee job placement. It's our commitment to your success."
  },
  {
    question: "When will I get a job interview?",
    answer: "You’ll receive a job interview opportunity within 2 days of applying to our program."
  },
  {
    question: "What kind of support will I get?",
    answer: "We offer dedicated mentorship, real-world projects, and hands-on training to prepare you thoroughly."
  },
  {
    question: "How do real-world projects help me?",
    answer: "They give you practical experience that employers value, boosting your confidence and resume."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 pb-4">
          <button
            className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-700 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {openIndex === index ? <FiChevronUp className="text-xl" /> : <FiChevronDown className="text-xl" />}
          </button>
          {openIndex === index && (
            <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
