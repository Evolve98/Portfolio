
import React from 'react';
import { Project } from '../types';
import { GlobeIcon } from './icons/SocialIcons';
import { PlayStoreIcon, AppStoreIcon } from './icons/StoreIcons';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/20 flex flex-col cursor-pointer h-full border border-neutral-700/50"
      onClick={onClick}
      onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-cyan-400 mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>{project.title}</h3>
        {project.companyName && (
          <p className="text-xs text-neutral-400 mb-1 font-medium">{project.category} at {project.companyName}</p>
        )}
        {!project.companyName && (
          <p className="text-xs text-neutral-400 mb-1 font-medium">{project.category}</p>
        )}
        {/* project.role display removed */}
        
        <p className="text-neutral-300 text-sm leading-relaxed mb-4 flex-grow line-clamp-3" title={project.description}>
          {project.description || "No detailed description available for this project yet. Click to learn more!"}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-neutral-200 mb-1.5">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => ( 
              <span key={tech} className="bg-neutral-700 text-cyan-300 text-xs px-3 py-1 rounded-md">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="bg-neutral-700 text-cyan-300 text-xs px-3 py-1 rounded-md">
                ...
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto flex items-center space-x-4">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} 
              className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label={`View project ${project.title} on the web`}
            >
              <GlobeIcon className="w-5 h-5" />
            </a>
          )}
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center text-sm text-green-400 hover:text-green-300 transition-colors"
              aria-label={`View ${project.title} on Google Play Store`}
            >
              <PlayStoreIcon className="w-5 h-5" />
            </a>
          )}
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
              aria-label={`View ${project.title} on Apple App Store`}
            >
              <AppStoreIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
