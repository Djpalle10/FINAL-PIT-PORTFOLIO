
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      location: "Remote",
      description: "Working on various web development projects including responsive websites and web applications using modern technologies.",
      skills: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      title: "Junior Web Developer Intern",
      company: "Tech Startup",
      period: "Summer 2023",
      location: "Local Office",
      description: "Assisted in developing user interfaces and improving website performance. Gained hands-on experience with team collaboration.",
      skills: ["HTML", "CSS", "JavaScript", "Git"]
    },
    {
      title: "Web Development Student",
      company: "Educational Institution",
      period: "2022 - Present",
      location: "Campus",
      description: "Intensive study of web development fundamentals, including front-end and back-end technologies, database management, and modern frameworks.",
      skills: ["Full Stack Development", "Database Design", "UI/UX", "Version Control"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-medium">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
