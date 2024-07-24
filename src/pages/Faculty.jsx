const Faculty = () => {
    return (
      <div className="p-8 bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-600 min-h-screen">
        <h1 className="text-6xl font-extrabold text-gradient text-center mb-12">Faculty</h1>
  
        <section className="bg-opacity-80 shadow-2xl rounded-3xl p-8 mb-10 bg-gradient-to-r from-gray-800 to-gray-700">
          <h2 className="text-3xl font-semibold text-cyan-300 border-b-4 border-cyan-200 pb-3 mb-6">Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John Doe", title: "Principal", details: "M.Ed, 20 years of experience in educational administration." },
              { name: "Jane Smith", title: "Vice Principal", details: "M.Sc. in Physics, 15 years of teaching experience." },
              { name: "Emily Johnson", title: "English Teacher", details: "M.A. in English, 10 years of teaching experience." },
              { name: "Michael Brown", title: "Mathematics Teacher", details: "M.Sc. in Mathematics, 8 years of teaching experience." },
              { name: "Sophia Davis", title: "Science Teacher", details: "M.Sc. in Chemistry, 12 years of teaching experience." },
              { name: "David Wilson", title: "Computer Science Teacher", details: "B.Tech in Computer Science, 5 years of teaching experience." }
            ].map((faculty, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-90 p-6 rounded-3xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold text-teal-300">{faculty.name}</h3>
                <p className="text-gray-200 mt-2">{faculty.title}, {faculty.details}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default Faculty;
  