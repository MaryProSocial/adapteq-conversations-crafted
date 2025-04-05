
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from 'lucide-react';
import InteractiveChat from './InteractiveChat';

const Hero = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-adapteq-purple text-white rounded-lg flex items-center justify-center mr-2 font-bold">
                A
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                adapteq
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-adapteq-purple">
              Adaptive Conversational Agent with Reinforcement Learning
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              An advanced conversational AI built specifically for human services. 
              With adaptive prompting, model orchestration, and conversation health analytics, 
              we're redefining how organizations connect with those they serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-adapteq-purple hover:bg-adapteq-dark-purple text-white py-6 px-8 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-adapteq-purple text-adapteq-purple hover:bg-adapteq-light-purple py-6 px-8 text-lg">
                Watch Demo
              </Button>
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
