import React from 'react';

export default function Testimonials() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* <!-- Testimonial 1 --> */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover mr-4"
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="Student"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
                  <p className="text-gray-600">Computer Science Major</p>
                </div>
              </div>
              <p className="text-gray-700">
                “The Computer Science program provided me with the skills and knowledge I needed to excel in my career. The professors were knowledgeable and supportive, and the projects were engaging.”
              </p>
            </div>
            
            {/* <!-- Testimonial 2 --> */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover mr-4"
                  src="https://randomuser.me/api/portraits/men/78.jpg"
                  alt="Student"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
                  <p className="text-gray-600">Business Administration</p>
                </div>
              </div>
              <p className="text-gray-700">
                “The Business Administration program was excellent. It equipped me with practical skills and real-world knowledge that helped me in my professional life.”
              </p>
            </div>

            {/* <!-- Testimonial 3 --> */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover mr-4"
                  src="https://randomuser.me/api/portraits/men/84.jpg"
                  alt="Student"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Emma Wilson</h3>
                  <p className="text-gray-600">Mechanical Engineering</p>
                </div>
              </div>
              <p className="text-gray-700">
                “The Mechanical Engineering program offered a perfect blend of theory and practical application. The hands-on projects were particularly valuable.”
              </p>
            </div>

            {/* <!-- Add more testimonials as needed --> */}
          </div>
        </div>
      </section>
    </div>
  );
}
