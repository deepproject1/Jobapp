// eslint-disable-next-line no-unused-vars
import React from "react";

const highlights = [
  {
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/businessman-discussing-with-new-applicant-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--business-meeting-conversation-employee-job-interview-pack-illustrations-5230948.png?f=webp",
    text: "100% Guaranteed Interview",
  },
  {
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/salary-3d-icon-download-in-png-blend-fbx-gltf-file-formats--money-finance-business-and-pack-management-icons-4745537.png",
    text: "Best Salary Package Upto 8 LPA",
  },
  {
    img: "https://cdn-icons-png.freepik.com/256/2980/2980844.png",
    text: "Work From Home & Office",
  },
  {
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/event-list-3d-icon-download-in-png-blend-fbx-gltf-file-formats--meeting-calendar-pack-user-interface-icons-6491366.png?f=webp",
    text: "100% Guide to Get a Job",
  },
  {
    img: "https://cdn-icons-png.freepik.com/256/942/942748.png",
    text: "Help to Build Resume",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2496/2496097.png",
    text: "Boost Your LinkedIn Profile",
  },
];

const HighlightsBar = () => (
  <div className="py-6 px-4 bg-white">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 text-center">
      {highlights.map((item, i) => (
        <div
          key={i}
          className="bg-gray-200 p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 min-w-[180px] sm:min-w-[220px] flex flex-col items-center"
        >
          <img src={item.img} alt={`Highlight ${i}`} className="w-12 h-auto mb-2" />
          <span className="text-sm sm:text-lg font-bold">{item.text}</span>
        </div>
      ))}
    </div>
  </div>
);

export default HighlightsBar;
