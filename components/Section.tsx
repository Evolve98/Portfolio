
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 sm:py-20 md:py-24 ${className} bg-slate-900`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          style={{fontFamily: "'Poppins', sans-serif"}}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;