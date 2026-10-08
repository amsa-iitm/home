import React, { useRef, useState } from 'react';
import { researchPaloozaData } from '../../data/researchPaloozaData';
import { getAssetPath } from '../../utils/assetPath';

export default function PaloozaHero() {
  const { meta } = researchPaloozaData;
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden pt-28 sm:pt-32 lg:pt-28 pb-6 sm:pb-8 border-b border-white/10 select-none">
      {/* Background Video Layer */}
      {meta.videoTeaserUrl && !videoError ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 mix-blend-screen"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
        >
          <source src={getAssetPath(meta.videoTeaserUrl)} type="video/mp4" />
        </video>
      ) : null}

      {/* Atmospheric Dark Grid Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(#e88b7d_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl xl:max-w-5xl text-left space-y-4 sm:space-y-5">
          
          {/* Main Title in Six Caps with Increased Letter Spacing & Single Pinkish-Red Color */}
          <div className="space-y-1">
            <h1
              className="font-sixcaps text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-normal tracking-[0.14em] sm:tracking-[0.18em] leading-[0.92] text-[#ea586c] drop-shadow-[0_4px_25px_rgba(234,88,108,0.35)] uppercase"
              style={{ fontFamily: "'Six Caps', Impact, -apple-system, sans-serif" }}
            >
              <span className="block">
                RESEARCH
              </span>
              <span className="block mt-1 sm:mt-1.5">
                PALOOZA '26
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl font-serif text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow-sm">
            {meta.tagline}
          </p>

          {/* Sub-tagline / Department Context */}
          {meta.subTagline && (
            <p className="text-xs sm:text-sm font-sans text-slate-400 max-w-xl leading-relaxed">
              {meta.subTagline}
            </p>
          )}

          {/* Call-to-Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('events')}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#9e1c2e] via-[#bf263b] to-[#dc344d] hover:from-[#bf263b] hover:to-[#ed445e] text-white font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(191,38,59,0.45)] hover:shadow-[0_6px_35px_rgba(220,52,77,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Events</span>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <a
              href={meta.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#2b1e2f]/80 hover:bg-[#38243e] text-[#f5be67] border-2 border-[#f5be67]/60 hover:border-[#f5be67] font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_25px_rgba(245,190,103,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer backdrop-blur-md"
            >
              <span>Register Now</span>
              <span className="text-[#f5be67]" aria-hidden="true">↗</span>
            </a>
          </div>

          {/* 3 Columns: Date, Time & Venue with Vibrant Colourful Icons */}
          <div className="pt-3.5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Date Column - Crimson / Rose Highlight */}
            <div className="flex items-center gap-3 bg-[#2a1727]/90 hover:bg-[#341a30] px-3.5 py-3 rounded-2xl border border-[#f43f5e]/35 hover:border-[#f43f5e]/70 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_25px_rgba(244,63,94,0.25)] backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#e11d48] to-[#fb7185] text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_18px_rgba(225,29,72,0.5)] border border-white/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left min-w-0">
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#fda4af] block leading-tight">Date</span>
                <span className="text-xs sm:text-[13px] font-bold text-white font-mono leading-tight block">{meta.date}</span>
              </div>
            </div>

            {/* Time Column - Amber / Gold Highlight */}
            <div className="flex items-center gap-3 bg-[#2a1d21]/90 hover:bg-[#362225] px-2.5 py-3 rounded-2xl border border-[#f59e0b]/35 hover:border-[#f59e0b]/70 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.25)] backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#d97706] to-[#fbbf24] text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_18px_rgba(217,119,6,0.5)] border border-white/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left min-w-0">
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#fde68a] block leading-tight">Time</span>
                <span className="text-xs sm:text-[13px] font-bold text-white font-mono leading-tight block">
                  {meta.time || '08:30 AM – 05:30 PM'}
                </span>
              </div>
            </div>

            {/* Venue Column - Cyan / Azure Highlight */}
            <div className="flex items-center gap-3 bg-[#1c2232]/90 hover:bg-[#222c42] px-3.5 py-3 rounded-2xl border border-[#0ea5e9]/40 hover:border-[#0ea5e9]/75 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_25px_rgba(14,165,233,0.3)] backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_18px_rgba(2,132,199,0.55)] border border-white/20">
                <svg className="w-5 h-5 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="text-left min-w-0">
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#bae6fd] block leading-tight">Venue</span>
                <span className="text-xs sm:text-[13px] font-bold text-white font-mono leading-snug block" title={meta.venue}>
                  {meta.venue || 'TTJ Auditorium, ICSR, IIT Madras'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
