const Academics = () => {
    return (
      <div className="p-8 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-700 min-h-screen">
        <h1 className="text-6xl font-extrabold text-gradient text-center mb-12">Academics</h1>
  
        {/* Curriculum Section */}
        <section className="bg-gray-800 bg-opacity-80 shadow-2xl rounded-3xl p-8 mb-12">
          <h2 className="text-4xl font-bold text-indigo-300 border-b-4 border-indigo-200 pb-3 mb-8">Curriculum</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 bg-opacity-90 p-8 rounded-3xl shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-white">Primary (Grades 1-5)</h3>
              <p className="mt-4 text-gray-300">English, Mathematics, Science, Social Studies, Art, Physical Education</p>
            </div>
            <div className="bg-gray-900 bg-opacity-90 p-8 rounded-3xl shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-white">Secondary (Grades 6-10)</h3>
              <p className="mt-4 text-gray-300">English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
            </div>
            <div className="bg-gray-900 bg-opacity-90 p-8 rounded-3xl shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-white">Senior Secondary (Grades 11-12)</h3>
              <p className="mt-4 text-gray-300"><strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
              <p className="mt-2 text-gray-300"><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</p>
            </div>
          </div>
        </section>
  
        {/* Teaching Methodologies Section */}
        <section className="bg-gray-800 bg-opacity-80 shadow-2xl rounded-3xl p-8 mb-12">
          <h2 className="text-4xl font-bold text-indigo-300 border-b-4 border-indigo-200 pb-3 mb-8">Teaching Methodologies</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles, integrating cutting-edge technology and innovative approaches. Our methodologies ensure that every student achieves their full potential.
          </p>
        </section>
  
        {/* Educational Resources Section */}
        <section className="bg-gray-800 bg-opacity-80 shadow-2xl rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-indigo-300 border-b-4 border-indigo-200 pb-3 mb-8">Educational Resources</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our educational resources include digital classrooms, interactive learning modules, and access to online educational platforms. These resources are equipped with the latest technological advancements to support a dynamic learning environment.
          </p>
        </section>
      </div>
    );
  };
  
  export default Academics;
  