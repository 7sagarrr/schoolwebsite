import { useState, Suspense, lazy } from 'react';

const GoogleMap = lazy(() => import('./GoogleMap')); // Lazy-loaded Google Maps component

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 min-h-screen flex flex-col items-center">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-12 text-center">
        Contact Us
      </h1>

      <section className="bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl p-8 mb-12 max-w-4xl w-full">
        <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-500 pb-4 mb-8">Address</h2>
        <p className="text-xl text-gray-300">Springdale Public School, 123 Education Lane, New York, NY 10080</p>
      </section>

      <section className="bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl p-8 mb-12 max-w-4xl w-full">
        <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-500 pb-4 mb-8">Phone</h2>
        <p className="text-xl text-gray-300">+1 (123) 456-7890</p>
      </section>

      <section className="bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl p-8 mb-12 max-w-4xl w-full">
        <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-500 pb-4 mb-8">Email</h2>
        <p className="text-xl text-gray-300">info@springdale.edu</p>
      </section>

      <section className="bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl p-8 mb-12 max-w-4xl w-full">
        <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-500 pb-4 mb-8">Contact Form</h2>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6 transition-transform transform hover:scale-105">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-400">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                required 
                className="mt-2 block w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-400">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                required 
                className="mt-2 block w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-400">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                required 
                rows="6" 
                className="mt-2 block w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform"
              ></textarea>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform transform hover:scale-105"
          >
            Send
          </button>
          {submitted && <p className="mt-4 text-green-400 text-center text-xl">Thank you for your message!</p>}
        </form>
      </section>

      <section className="bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
        <h2 className="text-4xl font-semibold text-teal-300 border-b-4 border-teal-500 pb-4 mb-8">Find Us on Google Maps</h2>
        <div className="mt-6 rounded-3xl overflow-hidden shadow-lg">
          <Suspense fallback={<div className="text-center text-gray-400 text-xl">Loading map...</div>}>
            <GoogleMap />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
