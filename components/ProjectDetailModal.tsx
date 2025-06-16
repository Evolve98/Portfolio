
import React, { useEffect, useRef } from 'react';
import { Project, ProjectDetailModalProps } from '../types';
import { XIcon } from './icons/MenuIcons';
import { GlobeIcon } from './icons/SocialIcons';
import { PlayStoreIcon, AppStoreIcon } from './icons/StoreIcons';

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus(); 
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };
  
  const formattedReleaseDate = project.releaseDate 
    ? new Date(project.releaseDate.includes('-') ? project.releaseDate : `${project.releaseDate}-01-01`).toLocaleDateString(undefined, { year: 'numeric', month: project.releaseDate.includes('-') ? 'long' : undefined })
    : 'N/A';


  return (
    <div 
      className="fixed inset-0 bg-neutral-900/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out animate-fadeIn"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
      aria-describedby={`modal-description-${project.id}`}
    >
      <div 
        ref={modalRef}
        className="bg-neutral-800 p-6 sm:p-8 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ease-in-out animate-scaleUp border border-neutral-700/50"
        tabIndex={-1} 
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-neutral-400 hover:text-cyan-400 transition-colors z-10 p-1.5 rounded-full bg-neutral-700/70 hover:bg-neutral-600"
          aria-label="Close project details"
        >
          <XIcon className="w-6 h-6" />
        </button>

        <img src={project.imageUrl} alt={project.title} className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-6 shadow-lg" />
        
        <h2 id={`modal-title-${project.id}`} className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>{project.title}</h2>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-400 mb-4">
          <span>{project.category}</span>
          {project.companyName && <span className="before:content-['•'] before:mr-2">{project.companyName}</span>}
          {project.releaseDate && <span className="before:content-['•'] before:mr-2">Released: {formattedReleaseDate}</span>}
        </div>

        {project.role && (
          <p className="text-md text-neutral-300 mb-4 italic">My Role: {project.role}</p>
        )}

        <div id={`modal-description-${project.id}`} className="text-neutral-300 leading-relaxed space-y-3 mb-6 prose prose-sm sm:prose-base prose-invert max-w-none prose-p:text-neutral-300 prose-headings:text-cyan-400">
          {project.description ? project.description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )) : <p>Further details about this project are not yet available.</p>}
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold text-neutral-100 mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-neutral-700 text-cyan-300 text-xs sm:text-sm px-3 py-1.5 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-cyan-300 font-medium py-2.5 px-5 rounded-lg transition-colors group text-sm sm:text-base"
            >
              <GlobeIcon className="w-5 h-5 mr-2 text-cyan-400 group-hover:text-cyan-200" /> View Project
            </a>
          )}
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-700/40 hover:bg-green-600/50 text-green-300 font-medium py-2.5 px-5 rounded-lg transition-colors group text-sm sm:text-base"
            >
              <PlayStoreIcon className="w-5 h-5 mr-2 " /> Google Play 
            </a>
          )}
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-700/40 hover:bg-blue-600/50 text-blue-300 font-medium py-2.5 px-5 rounded-lg transition-colors group text-sm sm:text-base"
            >
              <AppStoreIcon className="w-5 h-5 mr-2 " /> App Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;