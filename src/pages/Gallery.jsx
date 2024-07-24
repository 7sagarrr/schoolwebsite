const Gallery = () => {
    return (
      <div className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-16 text-center">
          Gallery
        </h1>
  
        <section className="bg-gray-900 bg-opacity-80 shadow-2xl rounded-3xl p-8 max-w-6xl w-full">
          <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-200 pb-4 mb-8">
            Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                src: "/images/sportsday.jpg",
                alt: "Sports Day",
                title: "Sports Day",
                description: "Students participating in various sports events.",
              },
              {
                src: "/images/science_exhibition.jpg",
                alt: "Science Exhibition",
                title: "Science Exhibition",
                description: "Students presenting their science projects.",
              },
              {
                src: "/images/cultural_fest.jpg",
                alt: "Cultural Fest",
                title: "Cultural Fest",
                description: "Students performing in the cultural fest.",
              },
              {
                src: "/images/classroom.jpg",
                alt: "Classroom",
                title: "Classroom",
                description: "A glimpse of our interactive classrooms.",
              },
              {
                src: "/images/library.jpg",
                alt: "Library",
                title: "Library",
                description: "Students reading and studying in the school library.",
              },
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-3xl">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-80 object-cover rounded-3xl transition-transform transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-500">
                  <p className="text-white text-xl font-semibold text-center p-4">{item.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                  <p className="text-sm text-center font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default Gallery;
  