import React, { useEffect, useRef } from 'react';
import { XIcon } from './icons/MenuIcons';
import { DownloadIcon } from './icons/ResumeIcons'; // Import DownloadIcon

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
    // Check if the click is on the backdrop itself, not on the modal content or the download button
    if (modalRef.current && e.target instanceof HTMLElement && e.target.classList.contains('pdf-modal-backdrop')) {
      onClose();
    }
  };

  const fullPublicPdfUrl = `${import.meta.env.BASE_URL}${pdfUrl.startsWith('/') ? pdfUrl.substring(1) : pdfUrl}#toolbar=0`;


  return (
    <div
      className="pdf-modal-backdrop fixed inset-0 bg-neutral-900/80 backdrop-blur-md flex items-center justify-center z-[100] p-2 sm:p-4 transition-opacity duration-300 ease-in-out animate-fadeIn"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-neutral-800 rounded-xl shadow-2xl w-[95vw] max-w-[1400px] h-[95vh] flex flex-col relative transform transition-all duration-300 ease-in-out animate-scaleUp border border-neutral-700/50"
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
        <div className="flex-grow p-1 sm:p-2 overflow-hidden"> {/* Added overflow-hidden here */}
          <iframe
            src={fullPublicPdfUrl}
            title={title}
            className="w-full h-full border-0" // Removed rounded-b-lg from iframe as footer is separate
            allowFullScreen
          />
        </div>
        <div className="p-3 sm:p-4 border-t border-neutral-700 flex justify-center">
          <a
            href={fullPublicPdfUrl} // The download link should still be the raw PDF URL without #toolbar=0 for actual download
            download={pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1)} // Suggests filename like "Aravind_Nair_Resume.pdf"
            className="inline-flex items-center bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
            aria-label="Download PDF"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;