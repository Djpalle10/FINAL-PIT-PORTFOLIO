
import React from 'react';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-slate-300 mb-6">
            Thank you for viewing my Final PIT Portfolio. I'm always open to discussing new opportunities and interesting projects.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200">
              <Mail size={16} />
              Email
            </a>
            <a href="#" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors duration-200">
              <Github size={16} />
              GitHub
            </a>
            <a href="#" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-200">
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> for my Final PIT Portfolio
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © 2024 Final PIT Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
