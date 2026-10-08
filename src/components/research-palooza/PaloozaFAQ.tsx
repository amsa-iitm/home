import React, { useState } from 'react';
import { researchPaloozaData, PaloozaFAQItem } from '../../data/researchPaloozaData';

export default function PaloozaFAQ() {
  const { faqs } = researchPaloozaData;
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First item opened by default

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-12 sm:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-left sm:text-center space-y-2 mb-8 sm:mb-10">
          <span className="font-mono text-xs font-bold text-[#f5be67] uppercase tracking-widest block">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans max-w-xl mx-auto">
            Everything you need to know about registration, participation, team formations, and symposium logistics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 text-left">
          {faqs.map((faq: PaloozaFAQItem, idx: number) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                  isOpen
                    ? 'bg-[#2d1c2f]/95 border-[#e88b7d]/60 shadow-[0_8px_30px_rgba(232,139,125,0.2)] ring-1 ring-[#e88b7d]/30'
                    : 'bg-[#231826]/75 hover:bg-[#2c1d2e]/85 border-white/10 hover:border-white/20 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 flex items-start justify-between gap-4 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 shadow-xs ${
                      isOpen
                        ? 'bg-gradient-to-r from-[#9e1c2e] to-[#c7283e] text-white rotate-45'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-200 font-sans leading-relaxed border-t border-white/10 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Assistance Callout */}
        <div className="mt-14 text-center text-xs text-slate-400 font-sans">
          <span>Have an unanswered question? Email the symposium coordinators at </span>
          <a href="mailto:amsa@iitm.ac.in" className="font-semibold text-[#f5be67] underline hover:text-[#ff8b7a] transition-colors">
            amsa@iitm.ac.in
          </a>
        </div>

      </div>
    </section>
  );
}
