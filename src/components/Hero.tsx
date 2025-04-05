
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import InteractiveChat from './InteractiveChat';

const Hero = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-adapteq-navy">Adapt</span>
              <span className="text-adapteq-purple/70">eq</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-adapteq-purple">
              Human Centered Connection
            </h2>
            <h3 className="text-xl md:text-2xl text-adapteq-navy">
              Adaptive AI Conversations That Evolve With Every Interaction
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Built for human services, our adaptive agent learns from each interaction to deepen user connections, improve outcomes, and increase engagement.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="font-bold">Not just chat</span> - It's an intelligent system that supports people the way your team would—learning what works, remembering what matters, and helping your organization deliver more meaningful, mission-aligned conversations at scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <div className="relative w-full max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full py-3 px-4 border border-adapteq-purple rounded-md pr-12" 
                />
                <Button className="absolute right-0 top-0 h-full bg-adapteq-purple hover:bg-adapteq-dark-purple text-white rounded-l-none">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <InteractiveChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
