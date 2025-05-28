
import React from 'react';
import { Heart, Home, Users } from 'lucide-react';

const FamilyBackground = () => {
  return (
    <section id="family" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Family Background
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <Heart className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Values</h3>
            <p className="text-slate-600">Raised with strong family values of hard work, integrity, and compassion</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <Home className="text-purple-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Support</h3>
            <p className="text-slate-600">A supportive family environment that encourages learning and growth</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <Users className="text-pink-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Community</h3>
            <p className="text-slate-600">Believes in the importance of community and helping others succeed</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <p className="text-lg text-slate-700 leading-relaxed text-center">
            Coming from a close-knit family that values education and personal growth, I've been fortunate to have a strong support system throughout my academic journey. My family has always encouraged me to pursue my passions and has been instrumental in shaping my work ethic and determination to succeed in web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FamilyBackground;
