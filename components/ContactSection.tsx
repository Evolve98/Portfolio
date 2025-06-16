
import React from 'react';
import Section from './Section';
import { ContactData } from '../types';
import { MailIcon } from './icons/SocialIcons';

const ContactSection: React.FC<{ id: string; contactData: ContactData }> = ({ id, contactData }) => {
  return (
    <Section id={id} title={contactData.title}>
      <div className="max-w-xl mx-auto text-center">
        <p className="text-slate-300 text-lg mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an innovative team. Feel free to reach out!
        </p>
        <a 
          href={`mailto:${contactData.email}`} 
          className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 mb-8"
        >
          <MailIcon className="w-5 h-5 mr-2" /> Send an Email
        </a>
        <div className="flex justify-center space-x-6">
          {contactData.links.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <link.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
