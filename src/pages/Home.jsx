import { Suspense, lazy } from 'react';

// Lazy load components for optimized performance
const Carousel = lazy(() => import('../components/Carousel'));
const QuickLinks = lazy(() => import('../components/QuickLinks'));

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-800 via-purple-700 to-gray-800 text-gray-100">
      {/* Carousel Section */}
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-10">
            <div className="text-white text-lg font-semibold">Loading Carousel...</div>
          </div>
        }
      >
        <Carousel />
      </Suspense>

      {/* Main Content */}
      <section className="relative z-20 p-6 md:p-12 text-center">
        <img
          src="/images/logo.jpg"
          alt="Springdale Public School Logo"
          className="w-36 h-36 mx-auto my-6 rounded-full shadow-lg"
          loading="lazy"
          aria-describedby="logoDesc"
        />
        <div>
          <h1 className="text-5xl font-extrabold mb-4 text-gradient">Springdale Public School</h1>
          <p className="text-lg leading-relaxed" id="logoDesc">
            Welcome to Springdale Public School, where we nurture young minds for a brighter future. Join us in our mission to foster academic excellence and holistic development.
          </p>
        </div>
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-10">
              <div className="text-white text-lg font-semibold">Loading Quick Links...</div>
            </div>
          }
        >
          <QuickLinks />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
