
import React from 'react';
import Section from './Section'; // Re-use Section for sub-sections
import { AboutData, ResumeData } from '../types';
import { SparklesIcon } from './icons/ResumeIcons'; // Re-use ResumeIcons
import { LinkIcon } from './icons/SocialIcons'; // Corrected import for LinkIcon
import useIntersectionObserver from './hooks/useIntersectionObserver';

interface AboutPageProps {
  id: string;
  aboutData: AboutData;
  resumeData: ResumeData;
}

const AboutPage: React.FC<AboutPageProps> = ({ id, aboutData, resumeData }) => {
  const [introRef, isIntroVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  const [expRef, isExpVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  const [eduRef, isEduVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, isSkillsVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <div id={id} className="pt-8 pb-16 bg-neutral-900 animate-fadeIn"> {/* Added padding top and bottom */}
      {/* Full Introduction Section */}
      <Section id="about-intro-full" title="About Me" className="!pt-0"> {/* Override Section's default top padding */}
        <div ref={introRef} className={`max-w-3xl mx-auto text-neutral-300 space-y-5 ${isIntroVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <img 
              src={aboutData.profileImageUrl} 
              alt="Aravind Nair" 
              className="rounded-xl shadow-lg w-40 h-40 sm:w-48 sm:h-48 object-cover ring-2 ring-cyan-500/50 ring-offset-2 ring-offset-neutral-800 flex-shrink-0"
            />
            <div>
              <h3 className="text-3xl font-semibold text-cyan-400 mb-3 text-center sm:text-left" style={{fontFamily: "'Poppins', sans-serif"}}>{aboutData.greeting}</h3>
              <p className="text-lg leading-relaxed text-center sm:text-left">{aboutData.introduction}</p>
            </div>
          </div>
          {aboutData.bioParagraphs.map((paragraph, index) => (
            <p key={index} className="text-md leading-relaxed text-neutral-400">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="about-experience" title="Experience">
        <div ref={expRef} className={`max-w-3xl mx-auto ${isExpVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
        {resumeData.experience.map((item, index) => (
          <div key={index} className="mb-8 p-5 border-l-4 border-cyan-600 bg-neutral-800 rounded-r-lg shadow-lg">
            <h4 className="text-xl font-semibold text-neutral-100">{item.role}</h4>
            <p className="text-md text-cyan-300 font-medium">
              {item.companyUrl ? (
                <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center">
                  {item.company} <LinkIcon className="w-3.5 h-3.5 ml-1.5 opacity-70"/>
                </a>
              ) : item.company}
            </p>
            <p className="text-sm text-neutral-400 mb-2.5">{item.duration}</p>
            <ul className="list-disc list-inside text-neutral-300 space-y-1.5 pl-2 text-sm sm:text-base">
              {item.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="about-education" title="Education">
         <div ref={eduRef} className={`max-w-3xl mx-auto ${isEduVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
        {resumeData.education.map((item, index) => (
          <div key={index} className="mb-6 p-5 border-l-4 border-purple-600 bg-neutral-800 rounded-r-lg shadow-lg">
            <h4 className="text-xl font-semibold text-neutral-100">{item.degree}</h4>
            <p className="text-md text-purple-300 font-medium">{item.institution}</p>
            <p className="text-sm text-neutral-400">{item.year}</p>
          </div>
        ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="about-skills" title="Skills">
        <div ref={skillsRef} className={`max-w-4xl mx-auto bg-neutral-800 p-6 sm:p-8 rounded-xl shadow-xl border border-neutral-700/50 ${isSkillsVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-8">
            <div>
              <h4 className="text-xl font-semibold text-neutral-100 mb-4 flex items-center"><SparklesIcon className="w-6 h-6 mr-2 text-cyan-400"/>Technical Skills</h4>
              <ul className="space-y-2 text-neutral-300 text-sm sm:text-base">
                {resumeData.skills.technical.map(skill => <li key={skill} className="pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-cyan-400">{skill}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-neutral-100 mb-4 flex items-center"><SparklesIcon className="w-6 h-6 mr-2 text-cyan-400"/>Software Proficiency</h4>
              <ul className="space-y-2 text-neutral-300 text-sm sm:text-base">
                {resumeData.skills.software.map(skill => <li key={skill} className="pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-cyan-400">{skill}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-neutral-100 mb-4 flex items-center"><SparklesIcon className="w-6 h-6 mr-2 text-cyan-400"/>Tools & Platforms</h4>
              <ul className="space-y-2 text-neutral-300 text-sm sm:text-base">
                {resumeData.skills.toolsAndPlatforms.map(skill => <li key={skill} className="pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-cyan-400">{skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;