
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const Testimonials = () => {
  const isMobile = useIsMobile();
  
  const testimonials = [
    {
      quote: "Adapteq helped us increase user engagement by 45% and significantly improved our customer satisfaction metrics.",
      author: "Sarah Johnson",
      role: "Head of Customer Experience",
      organization: "TechVista Solutions"
    },
    {
      quote: "The adaptive AI platform has transformed how we connect with our users, providing them with personalized support at scale.",
      author: "Michael Chen",
      role: "CTO",
      organization: "DigitalFirst"
    },
    {
      quote: "Implementing Adapteq's cognitive architecture was seamless. Our team now has insights we never had before.",
      author: "Jamal Williams",
      role: "Director of Innovation",
      organization: "ConnectWell"
    }
  ];

  const renderTestimonialsDesktop = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );

  const renderTestimonialsMobile = () => (
    <Carousel className="w-full">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <div className="flex justify-center mt-6 gap-1">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className="h-2 w-2 rounded-full bg-gray-300 mx-1"
          />
        ))}
      </div>
      
      <div className="hidden sm:flex sm:justify-end sm:space-x-2 mt-4">
        <CarouselPrevious className="relative -left-0 top-0 translate-y-0" />
        <CarouselNext className="relative -right-0 top-0 translate-y-0" />
      </div>
    </Carousel>
  );

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-Adapteq-grey">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">
            What People are <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-400">Saying</span>
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            See how organizations are transforming their user connections and achieving measurable outcomes with our adaptive AI platform.
          </p>
        </div>

        {isMobile ? renderTestimonialsMobile() : renderTestimonialsDesktop()}
      </div>
    </section>
  );
};

export default Testimonials;
