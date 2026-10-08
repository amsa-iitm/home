import React from 'react';
import { researchPaloozaData, PaloozaExperience } from '../../data/researchPaloozaData';

interface PaloozaExperiencesProps {
  onSelectCategory?: (category: string) => void;
}

export default function PaloozaExperiences({ onSelectCategory }: PaloozaExperiencesProps) {
  const { experiences } = researchPaloozaData;

  const handleCardClick = (targetCategory?: string) => {
    if (onSelectCategory && targetCategory) {
      onSelectCategory(targetCategory);
    }
    const eventsEl = document.getElementById('events');
    if (eventsEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = eventsEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case 'compass':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
            <polygon points="16,8 14,14 8,16 10,10" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case 'mic':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        );
      case 'hammer':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
          </svg>
        );
      case 'grid':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case 'award':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'users':
      default:
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
    }
  };

  return (
    <section className="py-20 sm:py-24 border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-left sm:text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="font-mono text-xs font-bold text-[#f5be67] uppercase tracking-widest block mb-2">
            CHOOSE YOUR EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            What do you want to do at Research Palooza?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-sans">
            Whether you want to present on stage, prototype a venture, showcase live demos, or explore new fields, find your pathway.
          </p>
        </div>

        {/* 6 Experience Cards Grid with Dark Frosted Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
          {experiences.map((exp: PaloozaExperience) => (
            <div
              key={exp.id}
              onClick={() => handleCardClick(exp.targetCategory)}
              className="group bg-[#271d2d]/75 hover:bg-[#35223a]/90 rounded-2xl p-5 border border-white/10 hover:border-[#e88b7d]/60 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_35px_rgba(232,139,125,0.25)] transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5 backdrop-blur-md"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#341f34] text-[#f5be67] border border-white/10 group-hover:bg-[#9e1c2e] group-hover:text-white group-hover:border-[#e88b7d]/50 flex items-center justify-center mb-4 transition-all duration-300 shadow-md">
                  {renderIcon(exp.icon)}
                </div>
                <h3 className="font-montserrat font-bold text-sm tracking-wide text-white group-hover:text-[#f5be67] mb-2 uppercase transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {exp.tagline}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#e88b7d] group-hover:text-[#f5be67] transition-colors">
                <span className="text-[11px] font-mono uppercase tracking-wider">Explore</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
