import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ApiService from '@/components/ApiService';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import CognitiveArchitecture from '@/components/CognitiveArchitecture';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { ChatWidget } from '@adapteq/chat-widget';

const Index = () => {
  return (
      
    <div className="min-h-screen flex flex-col bg-white">

      <Navbar />
      <Hero />
      <ApiService />
      <Features />
      <Benefits />
      <CognitiveArchitecture />
      <CTA />
      <Footer />

      <div className="fixed bottom-4 right-4 z-[9999]">
        <ChatWidget
          config={{
            width: 400,
            height: 500,
            primaryColor: '#1E3A8A',
            primaryHoverColor: '#7C3AED',
            backgroundColor: 'white',
            textColor: 'white',
            buttonSize: 96,
            iconSize: 48,
            position: 'bottom-right',
            title: 'Adapteq Sales Assistant',
            placeholder: 'Type a message...',
            tenantId: '9528e5a1-4d61-4313-b04d-72a9b4c2e462',
            apiKey: 'proxy',
            welcomeMessage: 'Hey! Are you interested in learning more about Adapteq? Ask me anything!',
            apiUrl: '/api/api_proxy',
            verbose: false,
            showClassification: true
          }}
        />
      </div>
    </div>
  );
};

export default Index;
