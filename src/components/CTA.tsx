import React from 'react';
import DemoRequestForm from './DemoRequestForm';

const CTA = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-blue-800 to-purple-400 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:p-12 lg:p-16 text-white md:w-3/5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to transform your customer conversations?</h2>
              <p className="text-white/90 text-lg mb-8">
                Join organizations that are using Adapteq to deliver more efficient, empathetic, and effective services to their users.
              </p>
              <div className="max-w-md">
                <DemoRequestForm />
              </div>
            </div>
            <div className="hidden md:block md:w-2/5 relative">
              <img 
                src="/images/f27cab23-bf37-4c58-ab9d-e9394f968e4d.png" 
                alt="Woman smiling and conversing"
                className="object-cover h-full w-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
