
import React from 'react';
import Section from './Section';
import { ResumeData, ExperienceItem, EducationItem } from '../types';
import { DownloadIcon, BriefcaseIcon, AcademicCapIcon, SparklesIcon } from './icons/ResumeIcons';
import { LinkIcon } from './icons/SocialIcons';

const ResumeSection: React.FC<{ id: string; resumeData: ResumeData }> = ({ id, resumeData }) => {
  return (
    <Section id={id} title="My Resume">
      <div className="bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl">
        <div className="text-center mb-8">
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">{resumeData.summary}</p>
          {resumeData.resumePdfUrl && (
             <a
              href={resumeData.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-blue-600/50 transition-all duration-300 transform hover:scale-105"
            >
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download Full Resume (PDF)
            </a>
          )}
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-500 mb-6 flex items-center">
            <BriefcaseIcon className="w-7 h-7 mr-3 text-blue-500" />
            Experience
          </h3>
          {resumeData.experience.map((item, index) => (
            <div key={index} className="mb-6 p-4 border-l-4 border-blue-600 bg-slate-700/30 rounded-r-lg">
              <h4 className="text-xl font-semibold text-slate-100">{item.role}</h4>
              <p className="text-md text-blue-400 font-medium">
                {item.companyUrl ? (
                  <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center">
                    {item.company} <LinkIcon className="w-3 h-3 ml-1.5"/>
                  </a>
                ) : item.company}
              </p>
              <p className="text-sm text-slate-400 mb-2">{item.duration}</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 pl-2">
                {item.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-500 mb-6 flex items-center"> {/* Changed from cyan-400 to blue-500 for consistency */}
            <AcademicCapIcon className="w-7 h-7 mr-3 text-blue-500" /> {/* Changed from cyan-400 to blue-500 */}
            Education
          </h3>
          {resumeData.education.map((item, index) => (
            <div key={index} className="mb-4 p-4 border-l-4 border-indigo-500 bg-slate-700/30 rounded-r-lg"> {/* Changed purple-500 to indigo-500 */}
              <h4 className="text-xl font-semibold text-slate-100">{item.degree}</h4>
              <p className="text-md text-indigo-400 font-medium">{item.institution}</p> {/* Changed purple-300 to indigo-400 */}
              <p className="text-sm text-slate-400">{item.year}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-6 flex items-center"> {/* Changed from cyan-400 to blue-500 */}
            <SparklesIcon className="w-7 h-7 mr-3 text-blue-500" /> {/* Changed from cyan-400 to blue-500 */}
            Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">Technical Skills</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                {resumeData.skills.technical.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">Software Proficiency</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                {resumeData.skills.software.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">Tools & Platforms</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                {resumeData.skills.toolsAndPlatforms.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ResumeSection;