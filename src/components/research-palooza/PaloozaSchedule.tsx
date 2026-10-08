import React, { useState } from 'react';
import { researchPaloozaData, ScheduleItem } from '../../data/researchPaloozaData';

export default function PaloozaSchedule() {
  const { schedule } = researchPaloozaData;
  const [sessionFilter, setSessionFilter] = useState<'All' | 'Morning' | 'Afternoon'>('All');

  const filteredSchedule = schedule.filter((item) => {
    if (sessionFilter === 'All') return true;
    const isMorning = item.time.includes('AM');
    return sessionFilter === 'Morning' ? isMorning : !isMorning;
  });

  const getTagStyle = (type: ScheduleItem['type']) => {
    switch (type) {
      case 'Ceremony':
        return 'bg-[#471829] text-[#ff8b7a] border border-[#ff8b7a]/40 shadow-xs';
      case 'Talk':
        return 'bg-[#402816] text-[#f5be67] border border-[#f5be67]/40 shadow-xs';
      case 'Competition':
        return 'bg-[#451d19] text-[#fdba74] border border-[#fdba74]/40 shadow-xs';
      case 'Presentation':
        return 'bg-[#1e273f] text-[#93c5fd] border border-[#93c5fd]/40 shadow-xs';
      case 'Demonstration':
        return 'bg-[#16362a] text-[#6ee7b7] border border-[#6ee7b7]/40 shadow-xs';
      case 'Networking':
        return 'bg-[#213324] text-[#86efac] border border-[#86efac]/40 shadow-xs';
      case 'Film':
      default:
        return 'bg-[#3b192e] text-[#f472b6] border border-[#f472b6]/40 shadow-xs';
    }
  };

  return (
    <section id="schedule" className="py-12 sm:py-16 relative border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div className="text-left space-y-2 max-w-2xl">
            <span className="font-mono text-xs font-bold text-[#f5be67] uppercase tracking-widest block">
              SCHEDULE & TIMELINE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              A day of ideas, innovation and interaction.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-sans">
              Explore the full schedule for Research Palooza '26, including keynote talks, fast-paced competitions, interactive exhibitions, and networking.
            </p>
          </div>

          {/* Session Switcher Pills */}
          <div className="flex items-center gap-2 bg-[#251a29]/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {(['All', 'Morning', 'Afternoon'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSessionFilter(filter)}
                className={`px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  sessionFilter === filter
                    ? 'bg-gradient-to-r from-[#9e1c2e] to-[#c7283e] text-white shadow-[0_2px_15px_rgba(199,40,62,0.5)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter === 'All' ? 'Full Day' : `${filter}`}
              </button>
            ))}
          </div>
        </div>

        {/* Creative Timeline Container */}
        <div className="bg-[#241928]/75 rounded-3xl border border-white/10 shadow-[0_12px_45px_rgba(0,0,0,0.45)] p-6 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-md">
          {/* Subtle watermark background */}
          <div className="absolute right-4 top-4 font-mono text-[90px] font-black text-white/[0.03] pointer-events-none select-none">
            2026
          </div>

          <div className="space-y-6 sm:space-y-8 relative">
            {/* Timeline vertical guideline */}
            <div className="absolute left-[39px] sm:left-[118px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#e88b7d] via-[#f5be67] to-[#e88b7d] hidden sm:block opacity-40" />

            {filteredSchedule.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pb-6 border-b border-white/10 last:border-b-0 last:pb-0"
              >
                {/* Time Indicator */}
                <div className="w-full sm:w-28 flex-shrink-0 flex items-center justify-between sm:justify-start gap-3">
                  <div className="font-mono text-sm sm:text-base font-bold text-[#f5be67] bg-[#2f1f32] px-3.5 py-1.5 rounded-xl border border-[#f5be67]/30 whitespace-nowrap shadow-xs">
                    {item.time}
                  </div>
                  {/* Small Timeline node indicator on desktop */}
                  <div className="hidden sm:flex w-4 h-4 rounded-full bg-[#1e1523] border-2 border-[#e88b7d] group-hover:bg-[#f5be67] group-hover:scale-125 transition-all duration-300 z-10 flex-shrink-0 shadow-sm" />
                </div>

                {/* Event Content Box */}
                <div className="grow space-y-1.5 text-left">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#f5be67] transition-colors">
                      {item.title}
                    </h3>
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${getTagStyle(item.type)}`}>
                      {item.type}
                    </span>
                    {item.duration && (
                      <span className="text-[11px] font-mono text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                        {item.duration}
                      </span>
                    )}
                  </div>

                  <p className="font-display italic text-xs sm:text-sm text-slate-300 font-light">
                    {item.subtitle}
                  </p>

                  <div className="pt-1 flex items-center gap-2 text-xs text-slate-400 font-sans">
                    <svg className="w-3.5 h-3.5 text-[#e88b7d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{item.venue}</span>
                  </div>
                </div>

                {/* Action Link if linked to an event */}
                {item.relatedEventId && (
                  <button
                    onClick={() => {
                      const eventsEl = document.getElementById('events');
                      if (eventsEl) {
                        eventsEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="self-end sm:self-center text-xs font-mono font-bold text-[#e88b7d] hover:text-[#f5be67] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Details</span>
                    <span>→</span>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Schedule Footer Note */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <span className="italic">
              * Schedule timings are provisional and may be refined as final talk abstracts and film screenings are locked in.
            </span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[#f5be67] font-bold">Venue: IC&SR Building, IIT Madras</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
