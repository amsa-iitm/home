import React from 'react';
import { researchPaloozaData } from '../../data/researchPaloozaData';

export default function PaloozaAbout() {
  const { about } = researchPaloozaData;

  const pathways = [
    {
      role: 'UG & Masters Students',
      badge: 'Discover & Compete',
      badgeColor: 'text-[#ff9e88] bg-[#4a1c24]/90 border-[#ff9e88]/30',
      iconBg: 'bg-gradient-to-tr from-[#9e1c2e] to-[#e11d48]',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      description: 'Discover emerging AMBE lab research, witness live hardware demos, and compete in fast-paced challenges.'
    },
    {
      role: 'PhD Scholars & Fellows',
      badge: 'Stage & Showcase',
      badgeColor: 'text-[#fde68a] bg-[#452817]/90 border-[#f5be67]/30',
      iconBg: 'bg-gradient-to-tr from-[#d97706] to-[#f5be67]',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: 'Take the main stage with a 10-minute TechTalk, showcase your research work with prototypes and posters, and connect with fellow researchers.'
    },
    {
      role: 'Industry, Startups & Alumni',
      badge: 'Translate & Scout',
      badgeColor: 'text-[#bae6fd] bg-[#1a2942]/90 border-[#38bdf8]/30',
      iconBg: 'bg-gradient-to-tr from-[#0284c7] to-[#38bdf8]',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Scout top deep-tech talent from AMBE, explore patent-pending translational breakthroughs, and engage in collaborative translational R&D.'
    }
  ];

  return (
    <section className="py-12 sm:py-14 relative border-b border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-[#4d1627]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] rounded-full bg-[#2a1738]/25 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Top Grid: Narrative (Left) + Attendee Pathways (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Symposium Narrative */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="font-mono text-xs font-bold text-[#f5be67] uppercase tracking-widest block">
              {about.sectionTag}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-sm">
              {about.heading}
            </h2>

            <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl">
              {about.paragraphs.map((p, i) => (
                <p key={i}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Attendee Pathways */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-[#f5be67] uppercase tracking-widest">
                WHO IS RESEARCH PALOOZA FOR?
              </span>
              <span className="text-[11px] font-mono text-slate-400">3 Tailored Pathways</span>
            </div>

            {pathways.map((pathway, idx) => (
              <div
                key={idx}
                className="group relative p-4 sm:p-4.5 rounded-2xl bg-[#231726]/85 hover:bg-[#2e1d32]/95 border border-white/10 hover:border-[#e88b7d]/50 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_25px_rgba(232,139,125,0.2)] transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-10 h-10 rounded-xl ${pathway.iconBg} flex items-center justify-center flex-shrink-0 shadow-md border border-white/15`}>
                    {pathway.icon}
                  </div>
                  <div className="space-y-1 grow min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-montserrat font-bold text-sm sm:text-[15px] text-white group-hover:text-[#f5be67] transition-colors">
                        {pathway.role}
                      </h3>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${pathway.badgeColor}`}>
                        {pathway.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-300 font-sans leading-relaxed">
                      {pathway.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Compact, subtle single-line quote at the end of the section */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-block px-5 sm:px-6 py-2.5 rounded-full bg-[#241627]/85 border border-[#e88b7d]/25 shadow-sm backdrop-blur-md max-w-3xl">
            <p className="font-serif text-xs sm:text-sm text-slate-200">
              <span className="text-[#f5be67] font-serif font-bold text-sm sm:text-base mr-1">“</span>
              <span className="font-semibold text-white">Research isn’t just something you publish</span>
              <span className="text-[#e88b7d] mx-2 font-sans font-light">—</span>
              <span className="italic text-[#f5be67]">it’s something you communicate, demonstrate, build and translate.</span>
              <span className="text-[#f5be67] font-serif font-bold text-sm sm:text-base ml-1">”</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
