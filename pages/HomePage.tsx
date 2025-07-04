
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';
import { PROJECTS_DATA, RESUME_DATA, ABOUT_DATA, CONTACT_DATA, HERO_DATA } from '../constants';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection id="home" data={HERO_DATA} />
      <AboutSection id="about" data={ABOUT_DATA} />
      <ProjectsSection id="projects" projects={PROJECTS_DATA} />
      <ResumeSection id="resume" resumeData={RESUME_DATA} />
      <ContactSection id="contact" contactData={CONTACT_DATA} />
    </>
  );
};

export default HomePage;