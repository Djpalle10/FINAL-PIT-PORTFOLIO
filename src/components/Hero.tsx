
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('personal-info');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center px-6 animate-fade-in">
        <div className="mb-8">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
            P
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
          Welcome to My
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Portfolio
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Web Developer & Student passionate about creating amazing digital experiences
        </p>
        
        <button
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Explore My Journey
          <ArrowDown size={20} />
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;
