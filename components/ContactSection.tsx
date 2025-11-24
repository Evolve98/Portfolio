
import React from 'react';
import Section from './Section';
import { ContactData } from '../types';
import { MailIcon } from './icons/SocialIcons';
import useIntersectionObserver from './hooks/useIntersectionObserver';

const ContactSection: React.FC<{ id: string; contactData: ContactData }> = ({ id, contactData }) => {
  const [contentRef, isContentVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });

  return (
    <Section id={id} title={contactData.title}>
      <div
        ref={contentRef}
        className={`max-w-xl mx-auto text-center ${isContentVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
      >
        <p className="text-neutral-300 text-lg mb-10 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an innovative team. Feel free to reach out!
        </p>
        <a 
          href={`mailto:${contactData.email}`} 
          className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3.5 px-8 rounded-lg text-lg shadow-md hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 mb-10"
        >
          <MailIcon className="w-5 h-5 mr-2.5" /> Send an Email
        </a>
        <div className="flex justify-center space-x-6 sm:space-x-8">
          {contactData.links.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-neutral-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            >
              <link.icon className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;