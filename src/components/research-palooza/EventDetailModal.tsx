import React, { useEffect } from 'react';
import { PaloozaEvent } from '../../data/researchPaloozaData';
import { getAssetPath } from '../../utils/assetPath';

interface EventDetailModalProps {
  event: PaloozaEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventDetailModal({ event, isOpen, onClose }: EventDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  const isTier1 = event.type === 'Talk' || event.id === 'mechanics-at-the-edge' || event.id === 'from-lab-to-market' || !event.registrationUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-event-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0d0912]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl xl:max-w-6xl max-h-[92vh] bg-[#1e1524] rounded-3xl border-2 border-[#e88b7d]/40 shadow-[0_25px_80px_rgba(0,0,0,0.85)] z-10 text-slate-100 flex flex-col overflow-hidden">
        {/* Header Ribbon / Banner */}
        <div className="relative bg-gradient-to-r from-[#291321] via-[#43162b] to-[#611933] p-5 sm:p-7 text-white border-b border-white/10 shrink-0">
          {/* Subtle star dots pattern */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#e88b7d_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-md"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Event Meta Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-2.5 pr-10">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#d46859] text-white tracking-wider uppercase shadow-xs">
              Event {event.number}
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/15 text-[#f5be67] border border-white/15">
              {event.type}
            </span>
            {event.timeSlot && (
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#f5be67]/25 text-[#f5be67] border border-[#f5be67]/50 shadow-xs flex items-center gap-1">
                <span>🕒</span>
                <span>{event.timeSlot.trim()}</span>
              </span>
            )}
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200">
              ⏱ {event.duration}
            </span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200">
              📍 {event.venue}
            </span>
          </div>

          <h2 id="modal-event-title" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight drop-shadow-md">
            {event.title}
          </h2>
          <p className="font-display italic text-[#f5be67] text-base sm:text-lg mt-1 font-light">
            {event.tagline}
          </p>
        </div>

        {/* Modal Body: Two Columns on lg+ screens */}
        <div className="flex-1 min-h-0 overflow-y-auto lg:overflow-hidden flex flex-col lg:grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {/* Left Column: Poster Showcase */}
          <div className="lg:col-span-5 xl:col-span-5 bg-[#140c17]/95 p-5 sm:p-6 flex flex-col items-center justify-center lg:overflow-y-auto scrollbar-thin">
            {event.image ? (
              <div className="w-full max-w-md mx-auto flex flex-col items-center">
                <div className="relative group w-full rounded-2xl overflow-hidden border border-[#e88b7d]/35 bg-[#0b050f] shadow-2xl flex flex-col items-center">
                  <a
                    href={getAssetPath(event.image)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Click to open full resolution poster"
                    className="block w-full text-center cursor-zoom-in"
                  >
                    <img
                      src={getAssetPath(event.image)}
                      alt={`${event.title} Poster`}
                      className="w-full h-auto max-h-[440px] xl:max-h-[500px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </a>
                  <div className="w-full py-2.5 px-4 bg-[#231526]/95 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">Official Event Poster</span>
                    <a
                      href={getAssetPath(event.image)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#f5be67] hover:text-white font-bold hover:underline transition-colors cursor-pointer"
                    >
                      <span>Open Full Resolution</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full max-w-md mx-auto p-8 rounded-2xl border border-[#e88b7d]/30 bg-gradient-to-br from-[#271a2c] to-[#1c1220] text-center shadow-inner">
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#d46859]/20 text-[#f5be67] mx-auto flex items-center justify-center border border-[#d46859]/40 shadow-md">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#f5be67] font-mono">
                    Official Event Poster & Showcase
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {event.posterPlaceholderText} — More details and poster coming soon.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: All Event Details */}
          <div className="lg:col-span-7 xl:col-span-7 p-5 sm:p-7 md:p-8 space-y-6 lg:overflow-y-auto scrollbar-thin">
            {/* Quick Schedule & Logistics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-2.5 p-3.5 sm:p-4 rounded-2xl bg-[#251829]/90 border border-white/10 shadow-sm items-stretch">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-[#f5be67] uppercase tracking-wider block font-bold mb-1">
                  🕒 Time Slot
                </span>
                <span className="text-white font-bold text-xs sm:text-sm font-mono leading-snug break-words">
                  {event.timeSlot?.trim() || 'Schedule TBA'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold mb-1">
                  ⏱ Duration
                </span>
                <span className="text-white font-medium text-xs sm:text-sm font-mono leading-snug break-words">
                  {event.duration}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold mb-1">
                  📍 Venue
                </span>
                <span className="text-white font-medium text-xs sm:text-[13px] leading-snug break-words">
                  {event.venue}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold mb-1">
                  👥 Audience
                </span>
                <span className="text-white font-medium text-xs sm:text-[13px] leading-snug break-words">
                  {event.audience}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#f5be67] uppercase mb-2">
                About The Event
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Objectives */}
            {event.objectives && event.objectives.length > 0 && (
              <div>
                <h3 className="text-xs font-mono font-bold tracking-widest text-[#f5be67] uppercase mb-2.5">
                  Key Objectives
                </h3>
                <ul className="space-y-2">
                  {event.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-slate-200 gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d46859] mt-1.5 flex-shrink-0 shadow-[0_0_6px_#d46859]" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Rules & Guidelines */}
            {event.rules && event.rules.length > 0 && (
              <div className="bg-[#261a29]/90 p-5 rounded-2xl border border-white/10">
                <h3 className="text-xs font-mono font-bold tracking-widest text-[#f5be67] uppercase mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#d46859]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Rules & Eligibility
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200 mb-3">
                  {event.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#f5be67] font-bold font-mono">0{i + 1}.</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2.5 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  <span className="font-semibold text-white">Target Audience:</span>
                  <span className="text-[#f5be67]">{event.eligibility}</span>
                </div>
              </div>
            )}

            {/* Event Coordinators */}
            {event.coordinators && event.coordinators.length > 0 && (
              <div className="bg-[#261a29]/90 p-5 sm:p-6 rounded-2xl border border-white/10 shadow-sm">
                <h3 className="text-xs font-mono font-bold tracking-widest text-[#f5be67] uppercase mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#ff8b7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Event Coordinators
                </h3>
                <div className={`grid gap-4 ${event.coordinators.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                  {event.coordinators.map((coord, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:border-[#ff8b7a]/50 transition-all duration-200 shadow-sm"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#9e1c2e] via-[#c7283e] to-[#ff8b7a] text-white flex items-center justify-center font-bold text-base font-mono shadow-[0_2px_10px_rgba(199,40,62,0.35)] flex-shrink-0 border border-white/20">
                          {coord.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <span className="text-base sm:text-lg font-bold text-white block leading-tight">
                            {coord.name}
                          </span>
                          <span className="text-xs font-mono text-[#f5be67] block mt-0.5">
                            Student Coordinator
                          </span>
                        </div>
                      </div>

                      {coord.contact && (
                        <a
                          href={`tel:${coord.contact.replace(/\s+/g, '')}`}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#9e1c2e]/40 to-[#c7283e]/40 hover:from-[#9e1c2e] hover:to-[#c7283e] border border-[#ff8b7a]/40 text-white text-xs sm:text-sm font-mono font-bold transition-all shadow-sm flex-shrink-0"
                          title={`Call ${coord.name}`}
                        >
                          <span className="text-sm">📞</span>
                          <span>{coord.contact}</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prizes & Awards */}
            {event.prizes && (
              <div className="bg-gradient-to-r from-[#381f21] to-[#45231c] p-4.5 rounded-2xl border border-[#f5be67]/40 flex items-start gap-3 shadow-md">
                <div className="w-9 h-9 rounded-full bg-[#f5be67]/20 text-[#f5be67] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#f5be67]/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider text-[#f5be67] uppercase block">
                    Prizes & Recognition
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {event.prizes}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer / Registration CTA */}
        <div className="shrink-0 bg-[#19111e]/95 backdrop-blur-md p-4 sm:p-5 border-t border-white/10 flex items-center">
          {isTier1 ? (
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="hidden sm:block w-24 shrink-0" aria-hidden="true" />
              <div className="text-center flex-1">
                <span className="font-mono text-sm sm:text-base font-bold text-[#f5be67] tracking-wider uppercase inline-flex items-center gap-2">
                  <span>✦</span>
                  <span>Open to all Attendees</span>
                  <span>✦</span>
                </span>
                <span className="block text-xs text-slate-300 mt-0.5">
                  No separate registration required • Seating on first-come, first-served basis
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-white/20 text-slate-200 hover:bg-white/10 text-xs sm:text-sm font-semibold transition cursor-pointer shrink-0"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-300 text-center sm:text-left">
                <span className="block font-medium text-white">Registration is free of cost</span>
                <span>Open to all eligible participants across AMBE</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-white/20 text-slate-200 hover:bg-white/10 text-xs sm:text-sm font-semibold transition cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#9e1c2e] via-[#bf263b] to-[#dc344d] hover:from-[#bf263b] hover:to-[#ed445e] text-white font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_20px_rgba(191,38,59,0.5)] hover:shadow-[0_6px_25px_rgba(220,52,77,0.7)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Register for this Event</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
