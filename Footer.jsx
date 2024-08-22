// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-white">
        <p className="mb-6 text-lg">Follow us on social media</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Facebook Icon */}
              <path d="M24 12a12 12 0 10-13.86 11.85v-8.37h-3.71v-3.48h3.71V9.14c0-3.67 2.24-5.69 5.51-5.69 1.59 0 3.24.28 3.24.28v3.54h-1.82c-1.8 0-2.37 1.12-2.37 2.27v2.74h4.04l-.64 3.48h-3.4v8.37A12 12 0 0024 12z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Twitter Icon */}
              <path d="M24 4.56c-.89.39-1.85.66-2.86.78a5.03 5.03 0 002.2-2.77 9.87 9.87 0 01-3.16 1.21 4.93 4.93 0 00-8.41 4.49A14 14 0 011.67 3.15a4.93 4.93 0 001.53 6.58A4.9 4.9 0 01.96 9.2v.06a4.93 4.93 0 003.95 4.83 5 5 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 19.54a13.9 13.9 0 007.55 2.22c9.06 0 14.01-7.51 14.01-14.01 0-.21 0-.42-.02-.63A10 10 0 0024 4.56z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* LinkedIn Icon */}
              <path d="M20.45 2H3.55A1.54 1.54 0 002 3.55v16.9A1.54 1.54 0 003.55 22h16.9A1.54 1.54 0 0022 20.45V3.55A1.54 1.54 0 0020.45 2zM8.7 19.17H5.73V10.73H8.7zm-1.48-9.71a1.72 1.72 0 110-3.45 1.72 1.72 0 010 3.45zM19.17 19.17h-2.97v-4.48c0-1.07-.02-2.46-1.5-2.46s-1.73 1.17-1.73 2.38v4.56H10.5v-8.44h2.85v1.15h.04a3.12 3.12 0 012.8-1.54c3 0 3.55 1.97 3.55 4.53v4.3z" />
            </svg>
          </a>
        </div>
        <p className="mt-6">&copy; 2024 Your Department Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
