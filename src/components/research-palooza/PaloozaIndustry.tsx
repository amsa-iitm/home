import React from 'react';
import { researchPaloozaData } from '../../data/researchPaloozaData';
import { getAssetPath } from '../../utils/assetPath';

export default function PaloozaIndustry() {
  const { industry } = researchPaloozaData;

  const renderIcon = (type: string) => {
    switch (type) {
      case 'graduate':
        return (
          <svg className="w-5 h-5 text-[#f5be67]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
          </svg>
        );
      case 'flask':
        return (
          <svg className="w-5 h-5 text-[#f5be67]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'handshake':
      default:
        return (
          <svg className="w-5 h-5 text-[#f5be67]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
    }
  };

  return (
    <section className="py-12 sm:py-16 border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="rounded-3xl border border-[#e88b7d]/40 bg-gradient-to-br from-[#261826]/90 via-[#331c2d]/90 to-[#281625]/90 p-6 sm:p-10 shadow-[0_12px_45px_rgba(0,0,0,0.45)] backdrop-blur-md">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/10">
            <div className="space-y-2 text-left max-w-2xl">
              <span className="font-mono text-xs font-bold text-[#f5be67] uppercase tracking-widest block">
                {industry.tag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {industry.heading}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-sans">
                {industry.subheading}
              </p>
            </div>

            {/* Download Brochure Button & Contact Enquiries Line */}
            <div className="flex-shrink-0 flex flex-col items-start gap-2.5">
              <a
                href={getAssetPath(industry.brochureUrl)}
                download={industry.brochureFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#9e1c2e] via-[#bf263b] to-[#dc344d] hover:from-[#bf263b] hover:to-[#ed445e] text-white font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(191,38,59,0.5)] hover:shadow-[0_6px_35px_rgba(220,52,77,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <svg className="w-4 h-4 text-[#f5be67]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Spons Brochure</span>
              </a>

              <p className="text-xs font-mono text-slate-300 text-left leading-relaxed">
                <span>For sponsorship and collaboration enquires,</span>
                <br />
                <span>
                  please contact{' '}
                  <a
                    href={`mailto:${industry.contactEmail}`}
                    className="text-[#f5be67] hover:text-[#ff8b7a] underline font-semibold transition-colors"
                  >
                    {industry.contactEmail}
                  </a>
                </span>
              </p>
            </div>
          </div>

          {/* Three Compact Highlight Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {industry.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 text-left">
                <div className="w-11 h-11 rounded-2xl bg-[#371f33] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-md">
                  {renderIcon(benefit.icon)}
                </div>
                <div className="space-y-1">
                  <h4 className="font-montserrat font-bold text-xs sm:text-sm tracking-wide text-white uppercase">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
