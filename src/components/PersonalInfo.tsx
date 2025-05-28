
import React from 'react';
import { User, Mail, MapPin, Calendar } from 'lucide-react';

const PersonalInfo = () => {
  return (
    <section id="personal-info" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="text-blue-600" size={20} />
                  <span className="text-slate-600">Your Name Here</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-slate-600">your.email@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-slate-600">Your City, Country</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-600" size={20} />
                  <span className="text-slate-600">Web Development Student</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I am a passionate web development student with a strong dedication to learning and creating innovative digital solutions. My journey in web development has been driven by curiosity and a desire to build meaningful applications that make a difference.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Currently focused on mastering modern web technologies and frameworks, I believe in continuous learning and staying updated with the latest industry trends. I'm excited about the possibilities that web development offers and eager to contribute to meaningful projects.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-medium">Problem Solver</span>
              </div>
              <div className="bg-purple-100 px-4 py-2 rounded-full">
                <span className="text-purple-800 font-medium">Creative Thinker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
