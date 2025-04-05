
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-adapteq-purple">
              Human Centered Connection
            </h2>
            <h3 className="text-xl md:text-2xl text-adapteq-navy">
              Adaptive AI Conversations That Evolve With Every Interaction
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Built for human services, our adaptive agent learns from each interaction to deepen user connections, improve outcomes, and increase engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <div className="relative w-full max-w-md">
                <div className="flex items-center">
                  <input 
                    type="email" 
                    placeholder="Enter email for demo"
                    className="w-full py-3 px-4 border border-adapteq-purple rounded-l-md" 
                  />
                  <div className="w-2"></div>
                  <Button className="bg-adapteq-purple hover:bg-adapteq-dark-purple text-white rounded-md h-[46px] flex items-center justify-center">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
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
