// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const JobList = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch("https://proplacer-server.vercel.app/jobs")
//       .then((response) => response.json())
//       .then((data) => {
//         setJobs(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching jobs:", error);
//         setError(true);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section className="bg-gray-50 py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
//           Available Jobs
//         </h2>

//         {loading ? (
//           <p className="text-center text-gray-600">Loading jobs...</p>
//         ) : error || jobs.length === 0 ? (
//           <div className="text-center text-gray-700 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
//               alt="No jobs"
//               className="w-20 h-20 mx-auto mb-4"
//             />
//             <h3 className="text-xl font-semibold text-red-600 mb-2">
//               No jobs found right now!
//             </h3>
//             <p className="mb-4">
//               It looks like there are no job openings available at the moment. But don``t worry —
//               you can fill out the form below to stay in the loop for future opportunities.
//             </p>
//             <a
//               href="https://forms.gle/NBtyjf26cyRAPfn27"
//               className="inline-block text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
//             >
//               Notify Me for Future Updates
//             </a>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//            {jobs.map((job) => (
//   <div
//     key={job._id}
//     className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
//   >
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/9631/9631363.png"
//       alt={job.title}
//       className="w-16 h-16 mb-4"
//     />

//     <span className="bg-green-600 text-white text-sm font-medium px-2 py-1 rounded-sm flex w-20 items-center gap-1 shadow-sm">
//       <FaCheckCircle className="text-white h-4 w-4" />
//       Verified
//     </span>
//     <h3 className="text-xl font-semibold text-blue-800">{job.title}</h3>
//     <p className="text-gray-600 font-semibold bg-amber-100">
//       📌 {job.location}
//     </p>
//     <p className="text-sm text-gray-700 mt-2 mb-2">{job.description}</p>
//     <ul className="text-sm text-gray-600 mb-4 space-y-1">
//       <li>
//         <strong>💵 Salary:</strong> ₹ {job.salary}
//       </li>
//       <li>
//         <strong>📙 Qualification:</strong> {job.qualification}
//       </li>
//       <li>
//         <strong>🧰 Experience:</strong> {job.experience}
//       </li>
//     </ul>
//     <a
//       href="https://forms.gle/NBtyjf26cyRAPfn27"
//       className="inline-block mt-auto text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
//     >
//       Apply Now
//     </a>
//   </div>
// ))}

//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default JobList;


// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://proplacer-server.vercel.app/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Available Jobs
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading jobs...</p>
        ) : error || jobs.length === 0 ? (
          <div className="text-center text-gray-700 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No jobs"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              No jobs found right now!
            </h3>
            <p className="mb-4">
              It looks like there are no job openings available at the moment.
              But don’t worry — you can fill out the form below to stay in the
              loop for future opportunities.
            </p>
            <a
              href="https://forms.gle/NBtyjf26cyRAPfn27"
              className="inline-block text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Notify Me for Future Updates
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9631/9631363.png"
                  alt={job.title}
                  className="w-16 h-16 mb-4"
                />

                <span className="bg-green-600 text-white text-sm font-medium px-2 py-1 rounded-sm flex w-20 items-center gap-1 shadow-sm mb-2">
                  <FaCheckCircle className="text-white h-4 w-4" />
                  Verified
                </span>

                <h3 className="text-xl font-semibold text-blue-800">
                  {job.title}
                </h3>

                <p className="text-gray-600 font-semibold bg-amber-100">
                  📌 {job.location}
                </p>

                <p className="text-sm text-gray-700 mt-2 mb-2">
                  {job.description}
                </p>

                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  <li>
                    <strong>💵 Salary:</strong> ₹ {job.salary}
                  </li>
                  <li>
                    <strong>📙 Qualification:</strong> {job.qualification}
                  </li>
                  <li>
                    <strong>🧰 Experience:</strong> {job.experience}
                  </li>
                </ul>

                <Link
                  to={`/apply/${job._id}`}
                  state={{ title: job.title, location: job.location }}
                  className="inline-block mt-auto text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobList;