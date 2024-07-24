const AboutUs = () => {
    return (
      <div className="p-8 bg-gradient-to-br from-blue-900 via-purple-800 to-gray-700 min-h-screen">
        <h1 className="text-6xl font-extrabold text-gradient text-center mb-12">About Us</h1>
  
        <section className="bg-gray-900 bg-opacity-80 shadow-2xl rounded-3xl p-8 mb-10 border border-teal-500">
          <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-200 pb-3 mb-6">History</h2>
          <p className="text-gray-200 leading-relaxed">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. Our legacy is built on a commitment to excellence and innovation in education.
          </p>
        </section>
  
        <section className="bg-gray-900 bg-opacity-80 shadow-2xl rounded-3xl p-8 mb-10 border border-teal-500">
          <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-200 pb-3 mb-6">Vision</h2>
          <p className="text-gray-200 leading-relaxed">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values. We aim to equip our students with the skills necessary to lead and succeed in an ever-evolving world.
          </p>
        </section>
  
        <section className="bg-gray-900 bg-opacity-80 shadow-2xl rounded-3xl p-8 mb-10 border border-teal-500">
          <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-200 pb-3 mb-6">Mission</h2>
          <p className="text-gray-200 leading-relaxed">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world. Our mission is to inspire a love for learning and cultivate the potential within every student.
          </p>
        </section>
  
        <section className="bg-gray-900 bg-opacity-80 shadow-2xl rounded-3xl p-8 mb-10 border border-teal-500">
          <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-200 pb-3 mb-6">Principal's Message</h2>
          <p className="text-gray-200 leading-relaxed">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our dedicated faculty and state-of-the-art facilities are here to support every step of their educational journey.
          </p>
        </section>
  
        <section className="bg-gray-900 bg-opacity-80 shadow-2xl rounded-3xl p-8 border border-teal-500">
          <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-200 pb-3 mb-6">Infrastructure and Facilities</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-3">
            <li>State-of-the-art science and computer labs with the latest technology</li>
            <li>Spacious and well-equipped classrooms designed for optimal learning</li>
            <li>A comprehensive library with a vast collection of books and digital resources</li>
            <li>Modern sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default AboutUs;
  