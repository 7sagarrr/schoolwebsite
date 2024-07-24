const Students = () => {
    return (
      <div className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-16 text-center">
          Students
        </h1>
  
        <section className="bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl p-8 mb-12 max-w-4xl w-full">
          <h2 className="text-4xl font-semibold text-cyan-400 border-b-4 border-cyan-300 pb-4 mb-8">
            Life at Springdale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-cyan-300">Extracurricular Activities</h3>
              <p className="mt-2 text-cyan-200">Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-cyan-300">Clubs and Societies</h3>
              <p className="mt-2 text-cyan-200">Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
            </div>
          </div>
        </section>
  
        <section className="bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl p-8 mb-12 max-w-4xl w-full">
          <h2 className="text-4xl font-semibold text-cyan-400 border-b-4 border-cyan-300 pb-4 mb-8">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-cyan-200 space-y-4">
            <li>John Smith - National Level Math Olympiad Winner</li>
            <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
            <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
          </ul>
        </section>
  
        <section className="bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
          <h2 className="text-4xl font-semibold text-cyan-400 border-b-4 border-cyan-300 pb-4 mb-8">
            Student Council
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-cyan-300">President</h3>
              <p className="text-cyan-200">Amy Parker, Grade 12</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-cyan-300">Vice President</h3>
              <p className="text-cyan-200">Rajiv Mehta, Grade 11</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-cyan-300">Secretary</h3>
              <p className="text-cyan-200">Lisa Wong, Grade 10</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Students;
  