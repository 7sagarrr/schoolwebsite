import React from 'react';

const GoogleMap = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.567814843979!2d-122.07851408510768!3d37.38605167982595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5d36913f6f7%3A0x5b72b8a05535c3d3!2sGoogleplex!5e0!3m2!1sen!2sus!4v1656606705917!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 pointer-events-none"></div>
    </div>
  );
};

export default GoogleMap;
