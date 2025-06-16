
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../constants';
// Removed Project import as it's not directly used here for type, inferred from PROJECTS_DATA
import { GlobeIcon, LinkIcon as BackArrowIcon, PlayStoreIcon, AppStoreIcon } from '../components/icons/SocialIcons';

const formatDate = (yearMonth: string): string => {
  const [year, month] = yearMonth.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS_DATA.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Project Not Found</h1>
        <p className="text-slate-300 mb-8">Sorry, we couldn't find the project you were looking for.</p>
        <Link
          to="/#projects"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-blue-600/50 transition-all duration-300"
        >
          <BackArrowIcon className="w-5 h-5 mr-2 transform rotate-180" /> Back to All Projects
        </Link>
      </div>
    );
  }

  const displayDescription = project.longDescription || project.description || "More details coming soon for this project.";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <article className="bg-slate-800 shadow-2xl rounded-lg overflow-hidden p-6 md:p-10">
         <Link
            to="/#projects"
            className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>
          {project.title}
        </h1>

        <div className="mb-6 text-sm text-slate-400">
          <span className="font-semibold">{project.category}</span>
          {project.companyName && ` at ${project.companyName}`}
          {project.role && ` - Role: ${project.role}`} {/* Role might not be present for new data */}
          <span className="block mt-1">{formatDate(project.yearMonth)}</span>
        </div>
        
        {/* Main Project Image (can be different from thumbnail) */}
        <img src={project.imageUrl} alt={project.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />


        <div className="prose prose-invert prose-lg max-w-none text-slate-300 mb-8" dangerouslySetInnerHTML={{ __html: displayDescription.replace(/\n/g, '<br />') }}>
          {/* The description is now rendered here. If it contains HTML, it will be rendered. Otherwise, line breaks are converted. */}
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-500 mb-3">Technologies Used:</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-slate-700 text-blue-400 text-sm px-3 py-1.5 rounded-full shadow">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-8">
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg text-blue-500 hover:text-blue-400 transition-colors group"
              aria-label="View on Play Store"
            >
              <PlayStoreIcon className="w-6 h-6 mr-2" />
              Play Store
              <span className="ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          )}
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg text-blue-500 hover:text-blue-400 transition-colors group"
              aria-label="View on App Store"
            >
              <AppStoreIcon className="w-6 h-6 mr-2" />
              App Store
              <span className="ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          )}
          {project.projectUrl && ( // Fallback for old projects if any
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg text-blue-500 hover:text-blue-400 transition-colors group"
            >
              <GlobeIcon className="w-6 h-6 mr-2" />
              View Project Link
              <span className="ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          )}
        </div>

        {project.detailImages && project.detailImages.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-blue-500 mb-6">Project Gallery:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.detailImages.map((imgUrl, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg border-2 border-slate-700 hover:border-blue-600 transition-all duration-300">
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