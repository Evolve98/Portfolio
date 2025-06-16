import React, { useEffect, useRef } from 'react';
import { XIcon } from './icons/MenuIcons';

interface PdfViewerModalProps {
  pdfUrl: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ pdfUrl, isOpen, onClose, title = "Resume Viewer" }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Construct the full PDF URL using Vite's base URL environment variable
  // This ensures correct pathing in both development and production (e.g., /Portfolio/Aravind_Nair_Resume.pdf)
  // resumePdfUrl in constants.ts is like "/Aravind_Nair_Resume.pdf"
  // import.meta.env.BASE_URL is like "/Portfolio/" or "/"
  const fullPublicPdfUrl = `${import.meta.env.BASE_URL}${pdfUrl.startsWith('/') ? pdfUrl.substring(1) : pdfUrl}`;


  return (
    <div
      className="fixed inset-0 bg-neutral-900/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out animate-fadeIn"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-neutral-800 rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col relative transform transition-all duration-300 ease-in-out animate-scaleUp border border-neutral-700/50"
        tabIndex={-1}
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-neutral-700">
          <h3 id="pdf-modal-title" className="text-lg sm:text-xl font-semibold text-cyan-400" style={{fontFamily: "'Poppins', sans-serif"}}>
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-cyan-400 bg-neutral-700/70 hover:bg-neutral-600 transition-colors"
            aria-label="Close PDF viewer"
          >
            <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="flex-grow p-1 sm:p-2">
          <iframe
            src={fullPublicPdfUrl}
            title={title}
            className="w-full h-full border-0 rounded-b-lg"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;