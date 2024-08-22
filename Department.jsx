import React from 'react';

const Department = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Our Distinguished Departments
        </h2>
        <p className="text-white text-lg mb-12">
          Explore the variety of departments that shape the future of innovation and education.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tech Department */}
          <div className="bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tech Department
            </h3>
            <p className="text-gray-600">
              Leading the way in software development, data science, and AI innovation.
            </p>
          </div>
          
          {/* Medical Department */}
          <div className="bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Medical Department
            </h3>
            <p className="text-gray-600">
              Advancing healthcare with cutting-edge research and patient care.
            </p>
          </div>
          
          {/* Master's Program */}
          <div className="bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Master's Program
            </h3>
            <p className="text-gray-600">
              Excellence in advanced studies across multiple disciplines.
            </p>
          </div>
          
          {/* Fashion Department */}
          <div className="bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Fashion Department
            </h3>
            <p className="text-gray-600">
              Innovating in design, textiles, and fashion technology.
            </p>
          </div>
          
          {/* Add more department cards here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Department;
