import React from 'react';
import { researchPaloozaData, PaloozaPillar } from '../../data/researchPaloozaData';

export default function PaloozaPillars() {
  const { pillars } = researchPaloozaData;

  const renderIcon = (type: string) => {
    switch (type) {
      case 'telescope':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        );
      case 'chat':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'layers':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'lightbulb':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'trending-up':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'cpu':
      default:
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
    }
  };

  return (
    <section className="relative z-20 border-y border-white/10 bg-[#211826]/75 backdrop-blur-md py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 divide-y md:divide-y-0 divide-white/10">
          {pillars.map((pillar: PaloozaPillar, idx: number) => (
            <div
              key={pillar.id}
              className={`pt-3 md:pt-0 flex flex-col items-center text-center group transition-transform duration-200 hover:-translate-y-0.5 ${
                idx !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-4' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#2e1f2f] text-[#f5be67] border border-white/10 flex items-center justify-center mb-2.5 group-hover:bg-[#9e1c2e] group-hover:text-white group-hover:border-[#e88b7d]/50 shadow-md transition-all duration-300">
                {renderIcon(pillar.icon)}
              </div>
              <h3 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white group-hover:text-[#f5be67] transition-colors mb-0.5">
                {pillar.title}
              </h3>
              <p className="font-sans text-[11px] text-slate-300 leading-tight">
                {pillar.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
