
import React from 'react';
import Section from './Section';
import { ResumeData } from '../types';
import { DownloadIcon } from './icons/ResumeIcons';

const ResumeSection: React.FC<{ id: string; resumeData: ResumeData }> = ({ id, resumeData }) => {
  return (
    <Section id={id} title="My Resume">
      <div className="bg-neutral-800 p-6 sm:p-8 rounded-xl shadow-xl border border-neutral-700/50 max-w-3xl mx-auto">
        <div className="text-center">
          <p className="text-neutral-300 leading-relaxed mb-8">{resumeData.summary}</p>
          {resumeData.resumePdfUrl && (
             <a
              href={resumeData.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <DownloadIcon className="w-5 h-5 mr-2.5" />
              Download Full Resume (PDF)
            </a>
          )}
        </div>
      </div>
    </Section>
  );
};

export default ResumeSection;
