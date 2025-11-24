
import React from 'react';
import useIntersectionObserver from './hooks/useIntersectionObserver';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section id={id} className={`py-12 sm:py-16 md:py-20 ${className} bg-neutral-900 overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className={`text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-14 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 ${isTitleVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
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