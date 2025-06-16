
import React from 'react';
import { AboutData } from '../types';

interface HomeIntroProps {
  id: string;
  data: AboutData;
}

const HomeIntro: React.FC<HomeIntroProps> = ({ id, data }) => {
  return (
    <section id={id} className="min-h-[calc(80vh-5rem)] flex items-center py-16 sm:py-20 bg-neutral-900"> {/* pt-20 from main is already there, adjust if needed */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 items-center">
          <div className="md:col-span-1 flex justify-center md:justify-end order-1 md:order-2">
            <img 
              src={data.profileImageUrl} 
              alt="Aravind Nair" 
              className="rounded-full shadow-xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover ring-4 ring-cyan-500/70 ring-offset-4 ring-offset-neutral-900"
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left order-2 md:order-1">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4"
              style={{fontFamily: "'Poppins', sans-serif"}}
            >
              {data.greeting}
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 mb-6 font-light">
              {data.introduction}
            </p>
             <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'});
              }}
              className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
