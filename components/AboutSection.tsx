
import React from 'react';
import Section from './Section';
import { AboutData } from '../types';

interface AboutSectionProps {
  id: string;
  data: AboutData;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, data }) => {
  return (
    <Section id={id} title="About Me">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
          <img 
            src={data.profileImageUrl} 
            alt="Profile" 
            className="rounded-lg shadow-xl mx-auto w-48 h-48 md:w-56 md:h-56 object-cover border-4 border-blue-600/50"
          />
        </div>
        <div className="md:col-span-2 text-slate-300 space-y-4">
          <h3 className="text-3xl font-semibold text-blue-500 mb-2">{data.greeting}</h3>
          <p className="text-lg leading-relaxed">{data.introduction}</p>
          {data.bioParagraphs.map((paragraph, index) => (
            <p key={index} className="text-md leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;