const Admissions = () => {
    return (
      <div className="p-8 bg-gradient-to-br from-blue-900 via-purple-800 to-gray-700 min-h-screen">
        <h1 className="text-6xl font-extrabold text-teal-400 text-center mb-12">Admissions</h1>
    
        <section className="bg-gray-800 bg-opacity-90 shadow-xl rounded-2xl p-8 mb-10 border border-teal-600">
          <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-400 pb-3 mb-6">Process</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Admission forms are available for download. Submit the completed form along with required documents at the school office. Ensure all fields are filled accurately to avoid any delays.
          </p>
        </section>
    
        <section className="bg-gray-800 bg-opacity-90 shadow-xl rounded-2xl p-8 mb-10 border border-teal-600">
          <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-400 pb-3 mb-6">Criteria</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades. Please review the specific requirements for each grade level to ensure compliance.
          </p>
        </section>
    
        <section className="bg-gray-800 bg-opacity-90 shadow-xl rounded-2xl p-8 border border-teal-600">
          <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-400 pb-3 mb-6">Important Dates</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-4 text-lg">
            <li className="hover:text-teal-400 transition-colors duration-300">Admission Form Availability: <span className="font-semibold">March 1st</span></li>
            <li className="hover:text-teal-400 transition-colors duration-300">Last Date for Submission: <span className="font-semibold">March 31st</span></li>
            <li className="hover:text-teal-400 transition-colors duration-300">Entrance Test: <span className="font-semibold">April 15th</span></li>
            <li className="hover:text-teal-400 transition-colors duration-300">Announcement of Results: <span className="font-semibold">April 30th</span></li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Admissions;
  