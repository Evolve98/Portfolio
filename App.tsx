
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { NAV_LINKS, PROJECTS_DATA, RESUME_DATA, ABOUT_DATA, CONTACT_DATA, HERO_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar navLinks={NAV_LINKS} />
      <main className="flex-grow">
        <HeroSection id="home" data={HERO_DATA} />
        <AboutSection id="about" data={ABOUT_DATA} />
        <ProjectsSection id="projects" projects={PROJECTS_DATA} />
        <ResumeSection id="resume" resumeData={RESUME_DATA} />
        <ContactSection id="contact" contactData={CONTACT_DATA} />
      </main>
      <Footer />
    </div>
  );
};

export default App;