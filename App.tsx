
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeIntro from './components/HomeIntro'; // New
import AboutPage from './components/AboutPage'; // New
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection'; // Will be simplified
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { NAV_LINKS, PROJECTS_DATA, RESUME_DATA, ABOUT_DATA, CONTACT_DATA } from './constants';

type ActivePage = 'home' | 'about';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [targetScrollId, setTargetScrollId] = useState<string | null>(null);

  useEffect(() => {
    if (activePage === 'home' && targetScrollId) {
      const element = document.getElementById(targetScrollId);
      if (element) {
        // Timeout to ensure elements are rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setTargetScrollId(null); // Reset after scrolling
        }, 100);
      }
    } else if (activePage === 'home' && !targetScrollId) {
        // Scroll to top if navigating to home without a specific target
        window.scrollTo({ top: 0, behavior: 'smooth'});
    } else if (activePage === 'about') {
        // Scroll to top of about page
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }
  }, [activePage, targetScrollId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        navLinks={NAV_LINKS} 
        activePage={activePage}
        setActivePage={setActivePage}
        setTargetScrollId={setTargetScrollId}
      />
      <main className="flex-grow pt-20"> {/* Add padding-top for fixed navbar */}
        {activePage === 'home' && (
          <>
            <HomeIntro id="home-intro" data={ABOUT_DATA} />
            <ProjectsSection id="projects" projects={PROJECTS_DATA} />
            <ResumeSection id="resume" resumeData={RESUME_DATA} /> {/* This will render the simplified version */}
            <ContactSection id="contact" contactData={CONTACT_DATA} />
          </>
        )}
        {activePage === 'about' && (
          <AboutPage id="about-page" aboutData={ABOUT_DATA} resumeData={RESUME_DATA} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
