
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-adapteq-blue to-adapteq-teal rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:p-12 lg:p-16 text-white md:w-3/5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to transform your human services?</h2>
              <p className="text-white/90 text-lg mb-8">
                Join organizations that are using adapteq to deliver more efficient, empathetic, and effective services to their communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-adapteq-blue hover:bg-gray-100 py-6 px-8 text-lg">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
                <div className="w-48 h-48 bg-white/10 rounded-full blur-xl absolute top-10 right-10"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-7xl font-bold opacity-30 transform rotate-12">
                  adapteq
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <h3 className="heading-3 mb-8">Trusted by Leading Human Service Organizations</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
            <div className="text-2xl font-bold text-gray-400">COUNTY HHS</div>
            <div className="text-2xl font-bold text-gray-400">STATE DEPT</div>
            <div className="text-2xl font-bold text-gray-400">NONPROFIT</div>
            <div className="text-2xl font-bold text-gray-400">CARE CENTER</div>
            <div className="text-2xl font-bold text-gray-400">FOUNDATION</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
