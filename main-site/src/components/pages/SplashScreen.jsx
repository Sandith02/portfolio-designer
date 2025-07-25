import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete && onComplete(), 800);
          }, 1200); // Extra delay to ensure 5+ seconds total
          return 100;
        }
        return prev + 1; // Slower increment for 5 second duration
      });
    }, 50); // 100 increments * 50ms = 5 seconds

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-800 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
       
        {/* Profile Picture */}
        <div className="w-24 h-24 mx-auto mb-8 relative">
          <div className="absolute inset-0 border-2 border-gray-400 rounded-full"></div>
          <div className="absolute inset-1 rounded-full overflow-hidden">
            <img
              src="/myPic2.png"
              alt="Sandith Thenuwara"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl font-bold text-white mb-2">
          Sandith Sithmaka Thenuwara
        </h1>
       
        <p className="text-gray-500 mb-8">
          My Designer Portfolio
        </p>

        {/* Progress */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-gray-300 to-gray-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;