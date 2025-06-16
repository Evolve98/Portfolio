
import React from 'react';
import { Project } from '../types';
import { GlobeIcon } from './icons/SocialIcons'; // Assuming you might want a generic link icon

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30 flex flex-col">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
        {project.companyName && (
          <p className="text-xs text-slate-400 mb-1 font-medium">{project.category} at {project.companyName}</p>
        )}
        {!project.companyName && (
          <p className="text-xs text-slate-400 mb-1 font-medium">{project.category}</p>
        )}
        {project.role && <p className="text-sm text-slate-300 mb-2 italic">{project.role}</p>}
        <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-200 mb-1">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-slate-700 text-cyan-300 text-xs px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-auto text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View Project <GlobeIcon className="w-4 h-4 ml-1.5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
