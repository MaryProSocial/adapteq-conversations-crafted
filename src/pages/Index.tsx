
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ApiService from '@/components/ApiService';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import CognitiveServices from '@/components/CognitiveServices';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <CognitiveServices />
      <ApiService />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
