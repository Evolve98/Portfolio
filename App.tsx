
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeIntro from './components/HomeIntro';
import AboutPage from './components/AboutPage';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';
import SkipToContentLink from './components/SkipToContentLink';
import { NAV_LINKS, PROJECTS_DATA, RESUME_DATA, ABOUT_DATA, CONTACT_DATA } from './constants';
import { Project } from './types';

export type ActiveView = 'home' | 'about' | 'projectDetail';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [targetScrollId, setTargetScrollId] = useState<string | null>(null);
  const [selectedProjectForPage, setSelectedProjectForPage] = useState<Project | null>(null);
  const [isFading, setIsFading] = useState(false); // For page transitions

  useEffect(() => {
    // Scroll handling logic
    if (isFading) return; // Don't scroll while fading

    if (activeView === 'home' && targetScrollId) {
      const element = document.getElementById(targetScrollId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setTargetScrollId(null); 
        }, 100);
      }
    } else if (activeView === 'home' && !targetScrollId && !selectedProjectForPage) {
        window.scrollTo({ top: 0, behavior: 'auto'}); // auto on initial load
    } else if (activeView === 'about' || activeView === 'projectDetail') {
        window.scrollTo({ top: 0, behavior: 'auto'});
    }
  }, [activeView, targetScrollId, selectedProjectForPage, isFading]);

  const handleNavigation = (callback: () => void) => {
    setIsFading(true);
    setTimeout(() => {
      callback();
      // A slight delay before removing the fading class to allow state to update
      setTimeout(() => setIsFading(false), 50); 
    }, 300); // Duration should match fadeOut animation
  };

  const handleNavigateToProjectPage = (project: Project) => {
    handleNavigation(() => {
      setSelectedProjectForPage(project);
      setActiveView('projectDetail');
      setTargetScrollId(null);
    });
  };

  const handleBackToProjects = () => {
    handleNavigation(() => {
      setSelectedProjectForPage(null);
      setActiveView('home');
      setTargetScrollId('projects');
    });
  };
  
  const navigateToView = (view: ActiveView, scrollId: string | null = null) => {
    if (view === activeView && view === 'home') {
       // If on home and clicking a home link, just scroll
       const element = document.getElementById(scrollId || '');
       if (element) element.scrollIntoView({ behavior: 'smooth' });
       return;
    }

    handleNavigation(() => {
      setSelectedProjectForPage(null);
      setActiveView(view);
      setTargetScrollId(scrollId);
    });
  };

  const renderContent = () => {
    if (activeView === 'home') {
      return (
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
      );
    }
    if (activeView === 'about') {
      return <AboutPage id="about-page" aboutData={ABOUT_DATA} resumeData={RESUME_DATA} />;
    }
    if (activeView === 'projectDetail' && selectedProjectForPage) {
      return <ProjectDetailPage project={selectedProjectForPage} onBack={handleBackToProjects} />;
    }
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContentLink targetId="main-content" />
      <Navbar 
        navLinks={NAV_LINKS} 
        activeView={activeView}
        onNavigate={navigateToView}
      />
      <main id="main-content" className={`flex-grow pt-20 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;