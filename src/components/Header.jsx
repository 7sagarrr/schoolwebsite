import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white p-4 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="School Logo" className="h-14 w-auto transition-transform transform hover:scale-110" />
          <h1 className="text-3xl font-extrabold">Springdale Public School</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <ul className="flex items-center space-x-6">
            <li><Link to="/" className="text-lg font-medium hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-lg font-medium hover:text-yellow-400 transition-colors">About Us</Link></li>
            <li><Link to="/academics" className="text-lg font-medium hover:text-yellow-400 transition-colors">Academics</Link></li>
            <li><Link to="/admissions" className="text-lg font-medium hover:text-yellow-400 transition-colors">Admissions</Link></li>
            <li><Link to="/faculty" className="text-lg font-medium hover:text-yellow-400 transition-colors">Faculty</Link></li>
            <li><Link to="/students" className="text-lg font-medium hover:text-yellow-400 transition-colors">Students</Link></li>
            <li><Link to="/gallery" className="text-lg font-medium hover:text-yellow-400 transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="text-lg font-medium hover:text-yellow-400 transition-colors">Contact Us</Link></li>
          </ul>
        </nav>
        <button className="md:hidden text-xl font-semibold focus:outline-none" aria-label="Menu">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
