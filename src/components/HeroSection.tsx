
import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-center mb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl -z-10 animate-pulse"></div>
      
      <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in">
        FrameFury
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in">
        Welcome to our digital universe. Connect with us across all platforms and join the fury!
      </p>
      
      <div className="mt-8 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-fade-in"></div>
      </div>
    </div>
  );
};

export default HeroSection;
