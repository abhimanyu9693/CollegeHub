import React from 'react'

export default function CollegeReviews() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">College Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* <!-- Review 1 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img className="h-40 w-full object-cover rounded-t-lg" src="https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_1280.jpg" alt="College Image" />
              <div className="pt-6">
                <h3 className="text-xl font-bold text-gray-800">Harvard University</h3>
                <p className="mt-4 text-gray-600">Harvard provides a world-class education and the campus is stunning. The professors are highly knowledgeable and approachable.</p>
                <div className="mt-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">Read More →</a>
                </div>
              </div>
            </div>
            
            {/* <!-- Review 2 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img className="h-40 w-full object-cover rounded-t-lg" src="https://cdn.pixabay.com/photo/2013/01/20/04/53/college-75535_1280.jpg" alt="College Image" />
              <div className="pt-6">
                <h3 className="text-xl font-bold text-gray-800">Stanford University</h3>
                <p className="mt-4 text-gray-600">Stanford offers unparalleled opportunities in research and innovation. The campus life is vibrant and full of possibilities.</p>
                <div className="mt-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">Read More →</a>
                </div>
              </div>
            </div>
            
            {/* <!-- Review 3 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img className="h-40 w-full object-cover rounded-t-lg" src="https://cdn.pixabay.com/photo/2014/03/22/14/05/dartmouth-college-292587_1280.jpg" alt="College Image" />
              <div className="pt-6">
                <h3 className="text-xl font-bold text-gray-800">MIT</h3>
                <p className="mt-4 text-gray-600">MIT is a hub for technology and innovation. The academic environment is challenging yet incredibly rewarding.</p>
                <div className="mt-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">Read More →</a>
                </div>
              </div>
            </div>
  
            {/* <!-- Add more reviews as needed --> */}
  
          </div>
        </div>
      </section>
    </div>
  )
}
