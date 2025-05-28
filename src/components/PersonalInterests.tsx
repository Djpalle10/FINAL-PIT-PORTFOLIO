
import React from 'react';
import { Code, BookOpen, Camera, Music, Gamepad2, Plane } from 'lucide-react';

const PersonalInterests = () => {
  const interests = [
    {
      icon: Code,
      title: "Coding",
      description: "Passionate about learning new programming languages and frameworks"
    },
    {
      icon: BookOpen,
      title: "Reading",
      description: "Enjoys reading tech blogs, documentation, and science fiction novels"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and exploring creative composition techniques"
    },
    {
      icon: Music,
      title: "Music",
      description: "Listening to various genres and occasionally playing instruments"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Playing strategy games and exploring game development concepts"
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring new places and experiencing different cultures"
    }
  ];

  return (
    <section id="interests" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Personal Interests
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white p-3 rounded-full group-hover:bg-purple-600 transition-colors duration-300">
                  <interest.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 ml-4">{interest.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Beyond Coding</h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              I believe that diverse interests and experiences contribute to better problem-solving and creativity in web development. 
              Whether I'm exploring a new hiking trail or learning a new programming concept, I approach everything with curiosity and enthusiasm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInterests;
