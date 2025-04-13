import React from "react";

const highlights = [
  {
    logo: <img src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-discussing-with-new-applicant-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--business-meeting-conversation-employee-job-interview-pack-illustrations-5230948.png?f=webp" alt="Logo1" className="w-12 h-auto mb-2" />,
    text: "100% Guaranteed Interview",
    bgColor: "bg-gray-200", // Gray background for the box
  },
  {
    logo: <img src="https://cdn3d.iconscout.com/3d/premium/thumb/salary-3d-icon-download-in-png-blend-fbx-gltf-file-formats--money-finance-business-and-pack-management-icons-4745537.png" alt="Logo2" className="w-12 h-auto mb-2" />,
    text: "Best Salary Package Upto 8 LPA",
    bgColor: "bg-gray-200", // Gray background for the box
  },
  {
    logo: <img src="https://cdn-icons-png.freepik.com/256/2980/2980844.png" alt="Logo3" className="w-12 h-auto mb-2" />,
    text: "Work From Home & Office",
    bgColor: "bg-gray-200", // Gray background for the box
  },
  {
    logo: <img src="https://cdn3d.iconscout.com/3d/premium/thumb/event-list-3d-icon-download-in-png-blend-fbx-gltf-file-formats--meeting-calendar-pack-user-interface-icons-6491366.png?f=webp" alt="Logo4" className="w-12 h-auto mb-2" />,
    text: "100% Guide to Get a Job",
    bgColor: "bg-gray-200", // Gray background for the box
  },
];

const HighlightsBar = () => {
  return (
    <div className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bgColor} p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out min-w-[180px] sm:min-w-[220px]`}
            >
              <div className="flex flex-col items-center">
                {/* Show logo */}
                {item.logo}

                <span className="text-sm sm:text-lg font-bold mt-2">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightsBar;
