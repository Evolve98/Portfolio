
import React, { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';
import { Project, ProjectCategory } from '../types';

interface ProjectsSectionProps {
  id: string;
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, projects }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Object.values(ProjectCategory)];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <Section id={id} title="My Work">
      <div className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as ProjectCategory | 'All')}
            className={`px-5 py-2.5 text-sm sm:text-base font-medium rounded-lg transition-all duration-300
              ${activeCategory === category 
                ? 'bg-cyan-500 text-white shadow-md hover:bg-cyan-400' 
                : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600 hover:text-white'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-neutral-400 text-lg">No projects found in this category.</p>
      )}
      <ProjectDetailModal project={selectedProject} onClose={closeModal} />
    </Section>
  );
};

export default ProjectsSection;