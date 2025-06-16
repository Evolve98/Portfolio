
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import { GlobeIcon, LinkIcon } from '../components/icons/SocialIcons'; // Re-using LinkIcon for back button

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS_DATA.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">Project Not Found</h1>
        <p className="text-slate-300 mb-8">Sorry, we couldn't find the project you were looking for.</p>
        <Link
          to="/#projects"
          className="inline-flex items-center bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-cyan-500/50 transition-all duration-300"
        >
          <LinkIcon className="w-5 h-5 mr-2 transform rotate-180" /> Back to All Projects
        </Link>
      </div>
    );
  }

  const displayDescription = project.longDescription || project.description;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <article className="bg-slate-800 shadow-2xl rounded-lg overflow-hidden p-6 md:p-10">
        {/* Back Link */}
         <Link
            to="/#projects"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>
          {project.title}
        </h1>

        <div className="mb-6 text-sm text-slate-400">
          <span className="font-semibold">{project.category}</span>
          {project.companyName && ` at ${project.companyName}`}
          {project.role && ` - Role: ${project.role}`}
        </div>

        {/* Main Project Image (Optional, if different from thumbnail) */}
        {/* <img src={project.imageUrl} alt={project.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" /> */}

        <div className="prose prose-invert prose-lg max-w-none text-slate-300 mb-8" dangerouslySetInnerHTML={{ __html: displayDescription.replace(/\n/g, '<br />') }}>
          {/* The description is now rendered here. If it contains HTML, it will be rendered. Otherwise, line breaks are converted. */}
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Technologies Used:</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-slate-700 text-cyan-300 text-sm px-3 py-1.5 rounded-full shadow">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.projectUrl && (
          <div className="mb-8">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              <GlobeIcon className="w-6 h-6 mr-2" />
              View Live Project / Repository
              <span className="ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        )}

        {project.detailImages && project.detailImages.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Project Gallery:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.detailImages.map((imgUrl, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg border-2 border-slate-700 hover:border-cyan-500 transition-all duration-300">
                  <img 
                    src={imgUrl} 
                    alt={`${project.title} - Detail Image ${index + 1}`} 
                    className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default ProjectDetailPage;