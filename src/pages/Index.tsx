
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ApiService from '@/components/ApiService';
import { Separator } from '@/components/ui/separator';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <Separator className="my-8 container mx-auto" />
      <ApiService />
      <Features />
      <Benefits />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
