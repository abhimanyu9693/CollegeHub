// src/components/SelectedStudents.js
import React from 'react';

const SelectedStudents = () => {
  const students = [
    {
      name: "Kartik Agarwal",
      branch: "CSE",
      degree: "BTech",
      batch: "Alpha Student",
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Replace with the actual logo URL
      stipend: "Rs 1 lakh+/month Stipend",
      image: "https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_1280.jpg", // Replace with the actual student image URL
    },
    {
      name: "Rojal Sapkota",
      branch: "CSE",
      degree: "BS (USA)",
      batch: "Alpha Student",
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Replace with the actual logo URL
      stipend: "Rs 6 lakh/month CTC",
      image: "https://cdn.pixabay.com/photo/2012/02/28/15/40/adult-18377_1280.jpg", // Replace with the actual student image URL
    },
    // Add more students here
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our Selected Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {students.map((student, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-lg p-6 shadow-lg">
              <div className="flex justify-center mb-4">
                <img
                  className="w-24 h-24 rounded-full shadow-md"
                  src={student.image}
                  alt={student.name}
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-black mb-2 text-center">
                  {student.company} (Intern)
                </h3>
                <p className="text-black">
                  <strong>Name: </strong> {student.name}
                </p>
                <p className="text-black">
                  <strong>Branch: </strong> {student.branch}
                </p>
                <p className="text-black">
                  <strong>Degree: </strong> {student.degree}
                </p>
                <p className="text-black">
                  <strong>Batch: </strong> {student.batch}
                </p>
                <p className="text-black mt-4 text-center">
                  <strong>{student.stipend}</strong>
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <img src={student.logo} alt={student.company} className="w-24 h-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedStudents;
