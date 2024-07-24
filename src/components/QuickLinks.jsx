import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Quick Links</h2>
      <ul className="space-y-4">
        <li>
          <Link
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-xl font-semibold flex items-center space-x-2"
            to="/academics"
            aria-label="Academics Page"
          >
            <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h10M7 16h10"></path>
            </svg>
            <span>Academics</span>
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-xl font-semibold flex items-center space-x-2"
            to="/admissions"
            aria-label="Admissions Page"
          >
            <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2 2 2-2m12 0l2 2 2-2M4 6a2 2 0 012-2h12a2 2 0 012 2v6H4V6z"></path>
            </svg>
            <span>Admissions</span>
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-xl font-semibold flex items-center space-x-2"
            to="/faculty"
            aria-label="Faculty Page"
          >
            <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h1v4zm-1-6h.01M5 3a2 2 0 00-2 2v2a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 8H4v6a2 2 0 002 2h12a2 2 0 002-2v-6h-1v-1a1 1 0 00-1-1H6a1 1 0 00-1 1v1z"></path>
            </svg>
            <span>Faculty</span>
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-xl font-semibold flex items-center space-x-2"
            to="/students"
            aria-label="Students Page"
          >
            <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2h-5v2zM12 20h5v-2h-5v2zM7 20h5v-2H7v2zM3 18a2 2 0 01-2-2v-8a2 2 0 012-2h5V3h8v5h5a2 2 0 012 2v8a2 2 0 01-2 2H3z"></path>
            </svg>
            <span>Students</span>
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-xl font-semibold flex items-center space-x-2"
            to="/gallery"
            aria-label="Gallery Page"
          >
            <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm2 0v12h14V6H5z"></path>
            </svg>
            <span>Gallery</span>
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-xl font-semibold flex items-center space-x-2"
            to="/contact-us"
            aria-label="Contact Us Page"
          >
            <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 10V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4m16 4v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16-4V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4"></path>
            </svg>
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
