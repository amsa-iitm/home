import React from 'react';
import { Link } from 'react-router-dom';
import { researchPaloozaData } from '../../data/researchPaloozaData';

export default function PaloozaSpotlightBanner() {
  const { meta } = researchPaloozaData;

  const highlights = [
    {
      icon: '🎙',
      label: '2 Keynote Talks',
      subtext: 'Flagship Horizon & Translation Lectures',
      color: 'border-[#ff8b7a]/30 bg-[#3b1928]/60 text-[#ff8b7a]'
    },
    {
      icon: '⚡',
      label: '5 Dynamic Events',
      subtext: '3-Min Bunco, Live Demos & Pitch Battles',
      color: 'border-[#93c5fd]/30 bg-[#1e2738]/60 text-[#93c5fd]'
    },
    {
      icon: '🏆',
      label: 'Win Cash Prize',
      subtext: 'Awards and cash prize for event winners',
      color: 'border-[#f5be67]/30 bg-[#3a2916]/60 text-[#f5be67]'
    },
    {
      icon: '📍',
      label: 'TTJ Auditorium, ICSR',
      subtext: 'IIT Madras • Oct 17, 2026',
      color: 'border-[#6ee7b7]/30 bg-[#163328]/60 text-[#6ee7b7]'
    }
  ];

  return (
    <section className="py-8 sm:py-10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Bento Spotlight Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c121e] via-[#2a1426] to-[#38162b] border border-[#e88b7d]/35 hover:border-[#f5be67]/60 shadow-[0_12px_45px_rgba(0,0,0,0.45)] transition-all duration-300 p-6 sm:p-8 lg:p-10">
          
          {/* Ambient Radial Lighting Glows */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-[#9e1c2e]/25 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-[#f5be67]/15 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Content Area */}
            <div className="flex-1 space-y-4 text-left">
              
              {/* Eyebrow & Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#521b2d] text-[#ff8b7a] border border-[#ff8b7a]/40 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#ff8b7a] animate-pulse" />
                  ANNUAL SYMPOSIUM 2026
                </span>
                <span className="text-xs font-mono text-[#f5be67] tracking-wider uppercase hidden sm:inline-block">
                  • AMBE • 3RD EDITION • IIT MADRAS
                </span>
              </div>

              {/* Title in Six Caps */}
              <div className="space-y-1">
                <Link to="/research-palooza" className="group/title inline-block">
                  <h2
                    className="font-sixcaps text-5xl sm:text-6xl md:text-7xl lg:text-7xl tracking-[0.18em] sm:tracking-[0.22em] text-[#ea586c] group-hover/title:text-[#f5be67] transition-colors leading-none"
                    style={{ fontFamily: "'Six Caps', Impact, -apple-system, sans-serif" }}
                  >
                    RESEARCH PALOOZA '26
                  </h2>
                </Link>
                <p className="font-display italic text-base sm:text-lg text-slate-200 font-light max-w-2xl leading-relaxed">
                  {meta.tagline || 'Where engineering research meets real-world application.'}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl leading-relaxed">
                
              </p>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/research-palooza"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#9e1c2e] via-[#bd243a] to-[#c7283e] hover:from-[#bd243a] hover:to-[#e0314a] shadow-[0_4px_25px_rgba(199,40,62,0.45)] hover:shadow-[0_6px_30px_rgba(199,40,62,0.65)] transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <span>Enter Palooza 2026 Portal</span>
                  <span className="text-base leading-none">→</span>
                </Link>

                <Link
                  to="/research-palooza#events"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-mono text-xs font-semibold tracking-wider uppercase text-[#f5be67] hover:text-white bg-white/5 hover:bg-white/10 border border-[#f5be67]/30 hover:border-[#f5be67] transition-all duration-200 cursor-pointer"
                >
                  <span>View All Events</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

            {/* Right Quick-Stats Bento Grid */}
            <div className="w-full lg:w-[420px] shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border backdrop-blur-sm transition-all duration-200 flex flex-col justify-between ${item.color}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      Highlight {idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-white leading-snug">
                      {item.label}
                    </h3>
                    <p className="font-sans text-[11px] text-slate-300 mt-0.5 leading-snug">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
