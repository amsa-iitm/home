import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import PaloozaHero from '../components/research-palooza/PaloozaHero';
import PaloozaAbout from '../components/research-palooza/PaloozaAbout';
import PaloozaEvents from '../components/research-palooza/PaloozaEvents';
import PaloozaSchedule from '../components/research-palooza/PaloozaSchedule';
import PaloozaIndustry from '../components/research-palooza/PaloozaIndustry';
import PaloozaFAQ from '../components/research-palooza/PaloozaFAQ';

export default function ResearchPalooza() {

  return (
    <MainLayout
      title="Research Palooza '26 | AMBE IIT Madras"
      description="Research Palooza '26 is the annual flagship research symposium of the Department of Applied Mechanics & Biomedical Engineering, IIT Madras."
      variant="crimson"
    >
      {/* Root Canvas with Deep Cosmic Plum & Slate Atmospheric Gradient */}
      <div className="relative w-full flex flex-col bg-[#1b1924] text-slate-100 overflow-hidden">
        
        {/* Ambient Radial Backlights */}
        <div className="absolute top-0 left-1/4 w-[45rem] h-[45rem] rounded-full bg-[#4a1626]/25 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-[38rem] h-[38rem] rounded-full bg-[#27273d]/35 blur-[120px] pointer-events-none" />
        <div className="absolute top-2/3 left-[-10rem] w-[40rem] h-[40rem] rounded-full bg-[#3d192c]/20 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[42rem] h-[42rem] rounded-full bg-[#1e2035]/30 blur-[140px] pointer-events-none" />

        {/* Ambient Stardust / Ember Starfield (Inspired by uploaded reference image) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-70">
          {/* Subtle warm coral / terracotta and rose-gold glowing embers */}
          <div className="absolute top-[12%] left-[18%] w-1.5 h-1.5 rounded-full bg-[#d46859] shadow-[0_0_8px_#d46859] animate-pulse" />
          <div className="absolute top-[8%] left-[75%] w-2 h-2 rounded-full bg-[#e88b7d] shadow-[0_0_10px_#e88b7d]" />
          <div className="absolute top-[22%] left-[48%] w-1.5 h-1.5 rounded-full bg-[#d46859] shadow-[0_0_8px_#d46859]" />
          <div className="absolute top-[28%] left-[12%] w-2 h-2 rounded-full bg-[#f5be67] shadow-[0_0_10px_#f5be67]" />
          <div className="absolute top-[35%] left-[82%] w-1 h-1 rounded-full bg-[#d46859] shadow-[0_0_6px_#d46859]" />
          <div className="absolute top-[42%] left-[54%] w-2 h-2 rounded-full bg-[#e88b7d] shadow-[0_0_10px_#e88b7d] animate-pulse" />
          <div className="absolute top-[48%] left-[24%] w-1.5 h-1.5 rounded-full bg-[#f5be67] shadow-[0_0_8px_#f5be67]" />
          <div className="absolute top-[58%] left-[68%] w-1.5 h-1.5 rounded-full bg-[#d46859] shadow-[0_0_8px_#d46859]" />
          <div className="absolute top-[64%] left-[42%] w-1 h-1 rounded-full bg-[#e88b7d] shadow-[0_0_6px_#e88b7d]" />
          <div className="absolute top-[72%] left-[88%] w-2.5 h-2.5 rounded-full bg-[#d46859] shadow-[0_0_12px_#d46859]" />
          <div className="absolute top-[78%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#f5be67] shadow-[0_0_8px_#f5be67] animate-pulse" />
          <div className="absolute top-[85%] left-[72%] w-1 h-1 rounded-full bg-[#e88b7d] shadow-[0_0_6px_#e88b7d]" />
          <div className="absolute top-[92%] left-[36%] w-2 h-2 rounded-full bg-[#d46859] shadow-[0_0_10px_#d46859]" />
        </div>

        {/* 1. Hero Section with Video Background Container */}
        <PaloozaHero />

        {/* 2. The Symposium Narrative & Highlight Quote */}
        <PaloozaAbout />

        {/* 3. 5 Flagship Events + 2 Talks with Redesigned Dual-Tier Bento Layout */}
        <PaloozaEvents />

        {/* 4. Creative Placeholder Schedule */}
        <PaloozaSchedule />

        {/* 5. Research Meets Industry & Spons Brochure */}
        <PaloozaIndustry />

        {/* 6. Frequently Asked Questions */}
        <PaloozaFAQ />
      </div>
    </MainLayout>
  );
}
