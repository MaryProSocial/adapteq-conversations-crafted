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
            width: 350,
            height: 500,
            primaryColor: '#4F46E5',
            primaryHoverColor: '#4338CA',
            backgroundColor: 'white',
            textColor: 'white',
            buttonSize: 80,
            iconSize: 24,
            position: 'bottom-right',
            title: 'Adapteq Sales Assistant',
            placeholder: 'Type a message...',
            tenantId: import.meta.env.VITE_CHAT_TENANT_ID,
            apiKey: import.meta.env.VITE_CHAT_API_KEY,
            welcomeMessage: 'Hey! Are you interested in learning more about Adapteq? Ask me anything!',
            apiUrl: import.meta.env.VITE_CHAT_API_URL,
            verbose: false,
            showClassification: true
          }}
        />
      </div>
    </div>
  );
};

export default Index;
