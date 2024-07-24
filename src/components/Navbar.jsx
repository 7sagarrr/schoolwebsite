import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 shadow-lg border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-white text-2xl font-bold tracking-wide">
            Springdale Public School
          </div>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link className="text-white hover:text-yellow-300 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/">Home</Link>
          <Link className="text-white hover:text-yellow-300 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/about-us">About Us</Link>
          <Link className="text-white hover:text-yellow-300 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/academics">Academics</Link>
          <Link className="text-white hover:text-yellow-300 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/admissions">Admissions</Link>
          <Link className="text-white hover:text-yellow-300 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/faculty">Faculty</Link>
          <Link className="text-white hover:text-yellow-300 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/students">Students</Link>
          <Link className="text-white hover:text-yellow-300 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/gallery">Gallery</Link>
          <Link className="text-white hover:text-yellow-300 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/contact-us">Contact Us</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none transition-transform transform-gpu hover:scale-110">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 shadow-lg border-t border-gray-800">
          <Link onClick={toggleMenu} className="block py-3 px-4 hover:bg-blue-500 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/">Home</Link>
          <Link onClick={toggleMenu} className="block py-3 px-4 hover:bg-blue-500 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/about-us">About Us</Link>
          <Link onClick={toggleMenu} className="block py-3 px-4 hover:bg-blue-500 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/academics">Academics</Link>
          <Link onClick={toggleMenu} className="block py-3 px-4 hover:bg-blue-500 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/admissions">Admissions</Link>
          <Link onClick={toggleMenu} className="block py-3 px-4 hover:bg-blue-500 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/faculty">Faculty</Link>
          <Link onClick={toggleMenu} className="block py-3 px-4 hover:bg-blue-500 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/students">Students</Link>
          <Link onClick={toggleMenu} className="block py-3 px-4 hover:bg-blue-500 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/gallery">Gallery</Link>
          <Link onClick={toggleMenu} className="block py-3 px-4 hover:bg-blue-500 transition-transform transform-gpu hover:scale-110 font-semibold text-lg" to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
