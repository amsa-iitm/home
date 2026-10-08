import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/home/HeroSection';
import PaloozaSpotlightBanner from '../components/home/PaloozaSpotlightBanner';
import HighlightsSection from '../components/home/HighlightsSection';
import UpcomingEvents from '../components/home/UpcomingEvents';
import StatsSection from '../components/home/StatsSection';

export default function Home() {
  return (
    <MainLayout title="Applied Mechanics Student Association | IIT Madras">
      <HeroSection />
      <PaloozaSpotlightBanner />
      <HighlightsSection />
      <UpcomingEvents />
      <StatsSection />
    </MainLayout>
  );
}
