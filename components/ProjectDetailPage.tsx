
import React, { useEffect } from 'react';
import { Project } from '../types';
import { GlobeIcon } from './icons/SocialIcons'; // Re-using GlobeIcon
import { PlayStoreIcon, AppStoreIcon } from './icons/StoreIcons';
import ImageCarousel from './ImageCarousel'; // Import the new carousel component

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, [project]);

  if (!project) return null;

  const formattedReleaseDate = project.releaseDate
    ? new Date(project.releaseDate.includes('-') ? project.releaseDate : `${project.releaseDate}-01-01`).toLocaleDateString(undefined, { year: 'numeric', month: project.releaseDate.includes('-') ? 'long' : undefined })
    : 'N/A';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-fadeIn">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group text-sm sm:text-base font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Projects
        </button>
      </div>

      <article className="bg-neutral-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl border border-neutral-700/50">
        
        {project.imageUrls && project.imageUrls.length > 0 ? (
          <ImageCarousel imageUrls={project.imageUrls} altText={project.title} />
        ) : (
          <div className="w-full h-auto max-h-[500px] object-contain rounded-lg mb-6 sm:mb-8 shadow-lg bg-neutral-700/30 flex items-center justify-center aspect-[16/10]">
            <p className="text-neutral-400">No image available</p>
          </div>
        )}
        
        <h1 id={`project-title-${project.id}`} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>
          {project.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-400 mb-6">
          <span>{project.category}</span>
          {project.companyName && <span className="before:content-['•'] before:mr-2">{project.companyName}</span>}
          {project.platform && <span className="before:content-['•'] before:mr-2">Platform: {project.platform}</span>}
          {project.releaseDate && <span className="before:content-['•'] before:mr-2">Released: {formattedReleaseDate}</span>}
        </div>

        <div id={`project-summary-${project.id}`} className="text-neutral-300 leading-relaxed space-y-4 mb-8 prose prose-base sm:prose-lg prose-invert max-w-none prose-p:text-neutral-300 prose-headings:text-cyan-400">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>Summary</h2>
          {project.description ? project.description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )) : <p>No summary available for this project.</p>}
        </div>

        {project.roleAndContributions && project.roleAndContributions.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>My Role & Contributions:</h2>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 pl-1">
              {project.roleAndContributions.map((contribution, index) => (
                <li key={index} className="leading-relaxed">{contribution}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Used section is removed as per request */}

        <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 pt-6 border-t border-neutral-700/50">
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
              <PlayStoreIcon className="w-5 h-5 mr-2" /> Google Play 
            </a>
          )}
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-700/40 hover:bg-blue-600/50 text-blue-300 font-medium py-2.5 px-5 rounded-lg transition-colors group text-sm sm:text-base"
            >
              <AppStoreIcon className="w-5 h-5 mr-2" /> App Store
            </a>
          )}
        </div>
      </article>
    </div>
  );
};

export default ProjectDetailPage;