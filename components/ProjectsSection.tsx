
import React, { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { Project, ProjectCategory } from '../types';

interface ProjectsSectionProps {
  id: string;
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, projects }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

  const categories = ['All', ...Object.values(ProjectCategory)];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Section id={id} title="My Work">
      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as ProjectCategory | 'All')}
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-all duration-300
              ${activeCategory === category 
                ? 'bg-cyan-500 text-white shadow-md' 
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-400 text-lg">No projects found in this category.</p>
      )}
    </Section>
  );
};

export default ProjectsSection;
