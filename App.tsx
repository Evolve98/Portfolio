
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeIntro from './components/HomeIntro';
import AboutPage from './components/AboutPage';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage'; // New
import { NAV_LINKS, PROJECTS_DATA, RESUME_DATA, ABOUT_DATA, CONTACT_DATA } from './constants';
import { Project } from './types';

export type ActiveView = 'home' | 'about' | 'projectDetail';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [targetScrollId, setTargetScrollId] = useState<string | null>(null);
  const [selectedProjectForPage, setSelectedProjectForPage] = useState<Project | null>(null);

  useEffect(() => {
    if (activeView === 'home' && targetScrollId) {
      const element = document.getElementById(targetScrollId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setTargetScrollId(null); 
        }, 100);
      }
    } else if (activeView === 'home' && !targetScrollId && !selectedProjectForPage) {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    } else if (activeView === 'about' || activeView === 'projectDetail') {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }
  }, [activeView, targetScrollId, selectedProjectForPage]);

  const handleNavigateToProjectPage = (project: Project) => {
    setSelectedProjectForPage(project);
    setActiveView('projectDetail');
    setTargetScrollId(null);
  };

  const handleBackToProjects = () => {
    setSelectedProjectForPage(null);
    setActiveView('home');
    setTargetScrollId('projects'); // Scroll to projects section on home
  };
  
  const navigateToView = (view: ActiveView, scrollId: string | null = null) => {
    setSelectedProjectForPage(null); // Clear selected project when navigating to main views
    setActiveView(view);
    setTargetScrollId(scrollId);
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        navLinks={NAV_LINKS} 
        activeView={activeView}
        setActiveView={navigateToView} // Updated to use navigateToView
        setTargetScrollId={setTargetScrollId} // Still needed for direct scroll on home
      />
      <main className="flex-grow pt-20"> {/* Add padding-top for fixed navbar */}
        {activeView === 'home' && !selectedProjectForPage && (
          <>
            <HomeIntro id="home-intro" data={ABOUT_DATA} />
            <ProjectsSection 
              id="projects" 
              projects={PROJECTS_DATA} 
              onProjectSelect={handleNavigateToProjectPage} 
            />
            <ResumeSection id="resume" resumeData={RESUME_DATA} />
            <ContactSection id="contact" contactData={CONTACT_DATA} />
          </>
        )}
        {activeView === 'about' && !selectedProjectForPage && (
          <AboutPage id="about-page" aboutData={ABOUT_DATA} resumeData={RESUME_DATA} />
        )}
        {activeView === 'projectDetail' && selectedProjectForPage && (
          <ProjectDetailPage 
            project={selectedProjectForPage} 
            onBack={handleBackToProjects} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
