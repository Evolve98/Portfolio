
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { GlobeIcon, LinkIcon as ArrowRightIcon } from './icons/SocialIcons'; // Using LinkIcon and renaming to ArrowRightIcon for clarity

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-blue-600/30 group">
      <Link to={`/project/${project.id}`} className="block hover:opacity-90 transition-opacity">
        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-blue-500 mb-2 group-hover:text-blue-400 transition-colors">
          <Link to={`/project/${project.id}`}>{project.title}</Link>
        </h3>
        {project.companyName && (
          <p className="text-xs text-slate-400 mb-1 font-medium">{project.category} at {project.companyName}</p>
        )}
        {!project.companyName && (
          <p className="text-xs text-slate-400 mb-1 font-medium">{project.category}</p>
        )}
        {project.role && <p className="text-sm text-slate-300 mb-2 italic">{project.role}</p>}
        <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow line-clamp-3 group-hover:line-clamp-none transition-all">
          {project.description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-200 mb-1">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => ( // Show limited techs initially
              <span key={tech} className="bg-slate-700 text-blue-400 text-xs px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="bg-slate-600 text-blue-300 text-xs px-2 py-1 rounded-full">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-auto flex justify-between items-center">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center text-sm text-blue-500 hover:text-blue-400 transition-colors font-medium"
          >
            View Details <ArrowRightIcon className="w-4 h-4 ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition-colors"
              aria-label="View external project link"
              onClick={(e) => e.stopPropagation()} // Prevent card link navigation if outer link is also a Link
            >
              <GlobeIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;