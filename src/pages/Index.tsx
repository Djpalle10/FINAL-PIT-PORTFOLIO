
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PersonalInfo from '../components/PersonalInfo';
import FamilyBackground from '../components/FamilyBackground';
import WorkExperience from '../components/WorkExperience';
import PersonalInterests from '../components/PersonalInterests';
import CurrentProjects from '../components/CurrentProjects';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <PersonalInfo />
      <FamilyBackground />
      <WorkExperience />
      <PersonalInterests />
      <CurrentProjects />
      <Footer />
    </div>
  );
};

export default Index;
