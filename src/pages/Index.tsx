
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  {
    quote: "adapteq has completely transformed how we handle client inquiries. Our team can now focus on the most complex cases while the AI system efficiently handles routine questions.",
    author: "Michael Rodriguez",
    role: "Program Director",
    organization: "Community Housing Network"
  },
  {
    quote: "The conversation health analytics have provided invaluable insights into our service delivery. We've identified and addressed gaps we weren't even aware existed.",
    author: "Lisa Chen",
    role: "Chief Data Officer",
    organization: "State Dept. of Human Services"
  },
  {
    quote: "Implementation was seamless, and the adapteq team provided exceptional support throughout the process. The ROI has been clear and substantial.",
    author: "James Wilson",
    role: "Executive Director",
    organization: "Family Support Alliance"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="body-text max-w-3xl mx-auto">
              Organizations across the human services sector are experiencing transformative results with adapteq.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                organization={testimonial.organization}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
