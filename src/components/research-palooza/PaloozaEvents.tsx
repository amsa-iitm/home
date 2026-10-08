import React, { useState } from 'react';
import { researchPaloozaData, PaloozaEvent } from '../../data/researchPaloozaData';
import EventDetailModal from './EventDetailModal';

export default function PaloozaEvents() {
  const { events } = researchPaloozaData;
  const [activeModalEvent, setActiveModalEvent] = useState<PaloozaEvent | null>(null);

  const keynoteTalks = events.filter((ev) => ev.type === 'Talk');
  const competitionsAndShowcases = events.filter((ev) => ev.type !== 'Talk');

  const getEventBadge = (event: PaloozaEvent) => {
    switch (event.id) {
      case 'ambe-shark-tank':
        return { text: '🏆 Pitch Your Ideas', color: 'bg-[#472a14] text-[#f5be67] border-[#f5be67]/40' };
      case '3-minute-bunco':
        return { text: '⚡ 3-Min Video Challenge', color: 'bg-[#3b1c2b] text-[#ff8b7a] border-[#ff8b7a]/40' };
      case 'techtalk':
        return { text: '🎙 TEDx-Style Mainstage', color: 'bg-[#212b40] text-[#93c5fd] border-[#93c5fd]/40' };
      case 'flash-forum':
        return { text: '🔬 Live Hardware & Demos', color: 'bg-[#18352b] text-[#6ee7b7] border-[#6ee7b7]/40' };
      case 'the-pitch':
        return { text: '🔥 Impromptu Sales Battle', color: 'bg-[#3d201a] text-[#fdba74] border-[#fdba74]/40' };
      default:
        return { text: event.type, color: 'bg-white/10 text-white border-white/20' };
    }
  };

  const getEventIcon = (id: string) => {
    switch (id) {
      case 'mechanics-at-the-edge':
        return (
          <svg className="w-6 h-6 text-[#f5be67]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        );
      case '3-minute-bunco':
        return (
          <svg className="w-6 h-6 text-[#ff8b7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'techtalk':
        return (
          <svg className="w-6 h-6 text-[#93c5fd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'ambe-venture-challenge':
        return (
          <svg className="w-6 h-6 text-[#f5be67]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'flash-forum':
        return (
          <svg className="w-6 h-6 text-[#6ee7b7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'the-pitch':
        return (
          <svg className="w-6 h-6 text-[#fdba74]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        );
      case 'from-lab-to-market':
      default:
        return (
          <svg className="w-6 h-6 text-[#f5be67]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
    }
  };

  return (
    <section id="events" className="py-12 sm:py-16 relative border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-left space-y-2">
          <span className="font-mono text-xs font-bold text-[#f5be67] uppercase tracking-widest block">
            THE EVENTS & KEYNOTE TALKS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Seven Events. Multiple Perspectives. One Platform.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans">
            2 Visionary symposium keynotes and 5 high-voltage competitions & tactile showcases.
          </p>
        </div>

        {/* TIER 1: FLAGSHIP KEYNOTE TALKS (2 PANORAMIC CARDS) */}
        {keynoteTalks.length > 0 && (
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold tracking-widest text-[#f5be67] uppercase">
                ✦ TIER 1: FLAGSHIP KEYNOTE & HORIZON TALKS
              </span>
              <div className="h-[1px] grow bg-gradient-to-r from-[#f5be67]/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {keynoteTalks.map((talk) => (
                <div
                  key={talk.id}
                  onClick={() => setActiveModalEvent(talk)}
                  className="group relative bg-gradient-to-br from-[#2c1c2e]/90 via-[#351e33]/90 to-[#411e33]/90 rounded-3xl border border-[#e88b7d]/40 hover:border-[#f5be67] p-7 sm:p-8 shadow-[0_8px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_45px_rgba(245,190,103,0.25)] transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5 backdrop-blur-md"
                >
                  <div>
                    {/* Top Meta Line */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="font-serif text-2xl font-bold text-[#f5be67]">
                          {talk.number}
                        </span>
                        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#521b2d] text-[#ff8b7a] border border-[#ff8b7a]/40 shadow-xs">
                          KEYNOTE TALK
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-300 bg-white/10 px-3 py-1 rounded-full">
                        ⏱ {talk.duration}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white group-hover:text-[#f5be67] transition-colors leading-tight mb-2">
                      {talk.title}
                    </h3>
                    <p className="font-display italic text-sm sm:text-base text-[#f5be67] font-light mb-4">
                      {talk.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {talk.description}
                    </p>
                  </div>

                  {/* Bottom Meta & Action */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <span>📍 {talk.venue}</span>
                      <span>•</span>
                      <span className="text-[#f5be67]">{talk.timeSlot}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#ff8b7a] group-hover:text-[#f5be67]">
                      <span>View Abstract & Poster</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TIER 2: INTERACTIVE COMPETITIONS & TACTILE SHOWCASES (5 BENTO CARDS) */}
        {competitionsAndShowcases.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold tracking-widest text-[#f5be67] uppercase">
                ✦ TIER 2: STUDENT COMPETITIONS & DYNAMIC FORUMS
              </span>
              <div className="h-[1px] grow bg-gradient-to-r from-[#f5be67]/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitionsAndShowcases.map((event) => {
                const badge = getEventBadge(event);
                const isVenture = event.id === 'ambe-venture-challenge';

                return (
                  <div
                    key={event.id}
                    onClick={() => setActiveModalEvent(event)}
                    className={`group relative rounded-3xl border p-6 sm:p-7 shadow-[0_6px_30px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5 backdrop-blur-md ${
                      isVenture
                        ? 'bg-gradient-to-br from-[#301d2a]/90 via-[#3a1f2f]/90 to-[#47222f]/90 border-[#f5be67]/50 hover:border-[#f5be67] shadow-[0_8px_35px_rgba(245,190,103,0.15)] md:col-span-2 lg:col-span-1'
                        : 'bg-[#261b2a]/80 hover:bg-[#322035]/90 border-white/10 hover:border-[#e88b7d]/50'
                    }`}
                  >
                    <div>
                      {/* Top Header: Number and Highlight Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif text-2xl font-bold text-[#f5be67]">
                          {event.number}
                        </span>
                        <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border shadow-xs ${badge.color}`}>
                          {badge.text}
                        </span>
                      </div>

                      {/* Icon Circle */}
                      <div className="w-14 h-14 rounded-2xl bg-[#331f33] border border-white/10 group-hover:border-[#e88b7d]/50 flex items-center justify-center mb-5 transition-colors duration-300 shadow-md">
                        {getEventIcon(event.id)}
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1.5 mb-5 text-left">
                        <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#f5be67] transition-colors leading-tight">
                          {event.title}
                        </h3>
                        <p className="font-display italic text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                          {event.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Metadata & Expand Call */}
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap items-center gap-2">
                        {event.timeSlot && (
                          <span className="text-[10.5px] font-mono px-2.5 py-0.5 rounded-full bg-[#f5be67]/15 text-[#f5be67] border border-[#f5be67]/30 font-bold">
                            🕒 {event.timeSlot.trim()}
                          </span>
                        )}
                        <span className="text-[10.5px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200">
                          {event.audience}
                        </span>
                        <span className="text-[10.5px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200">
                          ⏱ {event.duration}
                        </span>
                      </div>

                      {event.coordinators && event.coordinators.length > 0 && (
                        <div className="text-[11px] font-mono text-slate-300 flex items-center justify-between">
                          <span className="text-slate-400">Coord:</span>
                          <span className="text-white font-medium truncate max-w-[200px]" title={event.coordinators.map(c => c.name).join(', ')}>
                            {event.coordinators.map(c => c.name).join(', ')}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-1 text-xs font-semibold text-[#ff8b7a] group-hover:text-[#f5be67]">
                        <span className="font-mono text-[11px] tracking-wider uppercase group-hover:underline">
                          View Poster & Rules
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#9e1c2e] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                          <span className="transform group-hover:translate-x-0.5 text-xs transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Banner Hint */}
        <div className="mt-14 text-center text-xs text-slate-400 font-mono">
          <span>Click any event card to view the poster, rules, eligibility, prizes, and direct registration link.</span>
        </div>

      </div>

      {/* Expanded Event Detail Modal */}
      <EventDetailModal
        event={activeModalEvent}
        isOpen={!!activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
}
