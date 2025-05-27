import React from 'react';
import EmailForm from './EmailForm';

const Hero = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block bg-Adapteq-purple/10 px-4 py-1 rounded-full mb-2">
              <span className="text-sm font-medium text-Adapteq-purple">Adaptive AI for Meaningful Connections</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-Adapteq-navy">
              Human Centered <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-400">Connection</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-Adapteq-navy">
              Adaptive AI Conversations That Evolve With Every Interaction
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Purpose-built to drive engagement, our adaptive conversation agent learns from each interaction to deepen user connections, improve outcomes, and increase retention.  Available as a standalone chat widget or as an API service.
            </p>
            <div className="mt-8">
              <EmailForm />
            </div>
          </div>

          <div className="md:w-1/2">
            <div>
              <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
              <div className="sl-embed" style={{
                position: 'relative',
                width: '100%',
                height: '600px',
                marginTop: '20px'
              }}>
                <iframe 
                  loading="lazy" 
                  className="sl-demo" 
                  src="https://app.storylane.io/demo/b6hfwyqngl7f?embed=inline" 
                  name="sl-embed" 
                  allow="fullscreen" 
                  allowFullScreen 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(63,95,172,0.35)',
                    boxShadow: '0px 0px 18px rgba(26, 19, 72, 0.15)',
                    borderRadius: '10px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
