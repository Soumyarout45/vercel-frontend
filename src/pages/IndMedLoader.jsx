import React, { useEffect, useState } from "react";

const IndMedLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-teal-600 to-black relative overflow-hidden">
      {/* Red Plus Medical Symbol */}
      <div className="absolute top-8 left-8 w-15 h-15 bg-red-600 rotate-90 z-10 shadow-lg rounded-sm">
        <div className="absolute top-1/2 left-0 w-full h-4 bg-white transform -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-4 h-full bg-white transform -translate-x-1/2" />
      </div>

      {/* Heart Pulse Icon */}
      <div className="animate-ping-slow p-6 bg-white rounded-full shadow-xl mb-4 border-4 border-indigo-500 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-pink-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
            2.09C13.09 3.81 14.76 3 16.5 
            3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
            6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* Typewriter Title */}
      <h1 className="text-4xl font-extrabold text-white animate-typing-fast whitespace-nowrap border-r-4 border-indigo-900 pr-3">
        Welcome to IndMed
      </h1>

      {/* Subtitle */}
      <p className="text-2xl text-green-400 mt-4 animate-fade-in">
        Bringing care to your fingertips...
      </p>

      {/* Doctor SVG */}
      <div className="mt-6 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-indigo-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C10.3 2 9 3.3 9 5s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-5.5 18c-.8 0-1.5-.7-1.5-1.5S5.7 17 6.5 17s1.5.7 1.5 1.5S7.3 20 6.5 20zm11 0c-.8 0-1.5-.7-1.5-1.5S16.7 17 17.5 17s1.5.7 1.5 1.5S18.3 20 17.5 20zM4 9c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h1v5c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h1c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1H4z" />
        </svg>
      </div>
    </div>
  );
};

export default IndMedLoader;
