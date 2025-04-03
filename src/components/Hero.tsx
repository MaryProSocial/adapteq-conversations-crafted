
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-adapteq-grey py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="heading-1">
              Transforming Human Services with{' '}
              <span className="gradient-text">Cognitive Conversations</span>
            </h1>
            <p className="body-text leading-relaxed">
              adapteq is an advanced conversational AI built specifically for human services. 
              With adaptive prompting, model orchestration, and conversation health analytics, 
              we're redefining how organizations connect with those they serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-adapteq-blue hover:bg-blue-700 text-white py-6 px-8 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-adapteq-teal text-adapteq-teal hover:bg-adapteq-teal/10 py-6 px-8 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-adapteq-blue to-adapteq-teal rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="p-6 rounded-t-lg bg-adapteq-navy text-white">
                  <p className="font-mono text-sm">adapteq conversational agent</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="bg-adapteq-grey p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">I'm looking for housing assistance programs in my area. Can you help?</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-adapteq-blue/10 p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">I'd be happy to help you find housing assistance programs in your area. To provide the most relevant information, could you share what city or county you're located in?</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-adapteq-grey p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">I'm in King County, Washington.</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-adapteq-blue/10 p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">Great! In King County, there are several housing assistance programs available. The King County Housing Authority offers Section 8 vouchers, public housing, and emergency rental assistance. Additionally, there's the Multi-Family Tax Exemption program and various non-profit organizations like Catholic Community Services that provide housing support.</p>
                        <p className="text-sm mt-2">Would you like me to provide specific contact information for any of these programs?</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-adapteq-teal rounded-full animate-pulse mr-1"></div>
                      <div className="h-3 w-3 bg-adapteq-teal rounded-full animate-pulse delay-100 mr-1"></div>
                      <div className="h-3 w-3 bg-adapteq-teal rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
