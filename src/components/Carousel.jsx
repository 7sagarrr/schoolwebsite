import { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Annual Sports Day",
      description: "Celebrating Excellence in Sports"
    },
    {
      title: "Science Exhibition",
      description: "Showcasing Student Innovations"
    },
    {
      title: "Cultural Fest",
      description: "Embracing Diversity and Creativity"
    }
  ];

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-800 via-purple-900 to-blue-800 p-6 overflow-hidden rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-center text-gradient mb-6 animate-pulse">Key Highlights</h2>
      
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full flex items-center justify-center p-6 text-center transform transition-transform"
                 style={{ 
                   background: `linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))`,
                   backdropFilter: 'blur(5px)',
                   boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                 }}>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 animate-pulse">{item.title}</h3>
                <p className="text-lg text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform duration-300"
          onClick={goToPrev}
          aria-label="Previous Slide"
        >
          <span className="text-3xl">&lt;</span>
        </button>
        
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform duration-300"
          onClick={goToNext}
          aria-label="Next Slide"
        >
          <span className="text-3xl">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
