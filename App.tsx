
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import MouseGlow from './components/MouseGlow'; // Import the new component
import { NAV_LINKS } from './constants';

// Component to handle scrolling to hash links
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top if no hash, or on initial load of a new page
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <MouseGlow /> {/* Add the MouseGlow component here */}
      <ScrollToHashElement />
      <Navbar navLinks={NAV_LINKS} />
      <main className="flex-grow pt-20"> {/* Add padding-top to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          {/* You can add a 404 Not Found page route here later */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;