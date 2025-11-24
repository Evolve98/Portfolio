import React, { useState } from 'react';
import Section from './Section';
import { ResumeData } from '../types';
// import { EyeIcon } from './icons/ResumeIcons'; // Removed this line as EyeIcon is not exported
import PdfViewerModal from './PdfViewerModal'; // Import the new modal
import useIntersectionObserver from './hooks/useIntersectionObserver';

// Let's add an EyeIcon to ResumeIcons if it doesn't exist, or reuse DownloadIcon
// For now, let's assume we want a more specific "View" icon, or simply change text.
// If EyeIcon doesn't exist, we can use DownloadIcon and change text.
// For this example, let's conceptualize an EyeIcon.
// If you don't have EyeIcon, replace with DownloadIcon from './icons/ResumeIcons'
// const { DownloadIcon: ActionIcon } = await import('./icons/ResumeIcons');
import { DownloadIcon as ActionIcon } from './icons/ResumeIcons';


const ResumeSection: React.FC<{ id: string; resumeData: ResumeData }> = ({ id, resumeData }) => {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [contentRef, isContentVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });

  const openPdfModal = () => setIsPdfModalOpen(true);
  const closePdfModal = () => setIsPdfModalOpen(false);

  return (
    <>
      <Section id={id} title="My Resume">
        <div
          ref={contentRef}
          className={`bg-neutral-800 p-6 sm:p-8 rounded-xl shadow-xl border border-neutral-700/50 max-w-3xl mx-auto ${isContentVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <div className="text-center">
            <p className="text-neutral-300 leading-relaxed mb-8">{resumeData.summary}</p>
            {resumeData.resumePdfUrl && (
               <button
                onClick={openPdfModal}
                className="inline-flex items-center bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <ActionIcon className="w-5 h-5 mr-2.5" /> {/* Using ActionIcon which is DownloadIcon for now */}
                View Full Resume (PDF)
              </button>
            )}
          </div>
        </div>
      </Section>
      {resumeData.resumePdfUrl && (
        <PdfViewerModal
          pdfUrl={resumeData.resumePdfUrl}
          isOpen={isPdfModalOpen}
          onClose={closePdfModal}
          title="Aravind Nair - Resume"
        />
      )}
    </>
  );
};

export default ResumeSection;