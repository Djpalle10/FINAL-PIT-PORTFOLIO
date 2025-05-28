
import React from 'react';
import { ExternalLink, Github, Code, Palette, Database } from 'lucide-react';

const CurrentProjects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, product catalog, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      status: "In Progress",
      progress: 75,
      icon: Code
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website showcasing my web development journey, built with modern React components and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "Completed",
      progress: 100,
      icon: Palette
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      status: "Planning",
      progress: 25,
      icon: Database
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Current Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <project.icon size={24} />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-2xl font-semibold text-slate-800">{project.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Github size={16} />
                  View Code
                </button>
                <button className="flex items-center gap-2 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                  <ExternalLink size={16} />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">What's Next?</h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              I'm constantly working on new projects and learning new technologies. 
              Stay tuned for more exciting developments in my web development journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;
