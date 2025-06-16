
import React from 'react';
import { HeroData } from '../types';

interface HeroSectionProps {
  id: string;
  data: HeroData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id, data }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-center px-4 pt-20">
      <div className="max-w-3xl">
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6"
          style={{fontFamily: "'Poppins', sans-serif"}}
        >
          {data.title}
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-10 font-light">
          {data.subtitle}
        </p>
        <a
          href={data.ctaLink}
          className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
        >
          {data.ctaText}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;