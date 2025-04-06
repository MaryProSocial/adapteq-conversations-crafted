import React, { useState, useEffect, useCallback } from 'react';
import { Search, Brain, Database, Settings, RefreshCw, BookOpen, Tv, ClipboardList } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Update active index when carousel slides
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Add listeners for carousel events
    emblaApi.on('select', onSelect);
    
    // Clean up
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const sections = [
    {
      title: "Understands and Connects",
      description: "Analyzes user intent, emotion, and perspective to foster a deeper connection in conversation.",
      content: (
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative bg-Adapteq-light-purple rounded-full p-12 w-64 h-64 flex items-center justify-center">
            <Search className="h-24 w-24 text-Adapteq-purple absolute" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-4 border-Adapteq-light-blue rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Remembers What Matters",
      description: "Utilizes episodic, semantic, and procedural memory to retain important information and context.",
      content: (
        <div className="order-1 md:order-1 flex justify-center">
          <img 
            src="/lovable-uploads/a15a8320-95ac-4afd-a5a5-8b9028ea5698.png" 
            alt="Memory types visualization" 
            className="w-auto max-h-80"
          />
        </div>
      )
    },
    {
      title: "Responds Intelligently",
      description: "Applies the right prompting and model strategy based on the situation, reasoning thoroughly before replying.",
      content: (
        <div className="order-1 md:order-2 flex justify-center">
          <div className="bg-Adapteq-light-purple rounded-xl p-6 w-72">
            <div className="flex flex-col gap-4">
              <div className="bg-Adapteq-purple rounded-lg p-4 text-white">
                <h4 className="font-bold text-lg mb-1">Utterance Classification</h4>
                <p className="text-xs">Intent, Emotion, Perspective</p>
              </div>
              <div className="flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="bg-Adapteq-purple rounded-lg p-4 text-white">
                <h4 className="font-bold text-lg mb-1">Adaptive Prompting</h4>
                <p className="text-xs">Selects optimal response strategy</p>
              </div>
              <div className="flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="bg-Adapteq-purple rounded-lg p-4 text-white">
                <h4 className="font-bold text-lg mb-1">Model Orchestration</h4>
                <p className="text-xs">Routes to optimal AI model</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Learns What Works",
      description: "Embraces reinforcement learning to assess the quality of its responses and improve outcomes over time.",
      content: (
        <div className="order-1 md:order-1 flex justify-center items-center w-full">
          <img 
            src="/lovable-uploads/6ba5a951-0727-47ff-b85d-66d778714ee5.png" 
            alt="Reinforcement learning loop" 
            className="w-full max-w-md h-auto"
          />
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-Adapteq-purple/10">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            The Intelligence Behind <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-400">Every Conversation</span>
          </h2>
        </div>

        <div className="relative">
          <Carousel ref={emblaRef}>
            <CarouselContent>
              {sections.map((section, index) => (
                <CarouselItem key={index} className="md:basis-full lg:basis-full">
                  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className={cn("flex flex-col justify-center", index % 2 === 0 ? "order-2 md:order-1" : "order-2")}>
                        <h3 className="text-2xl font-bold text-Adapteq-navy mb-4">{section.title}</h3>
                        <p className="text-lg text-gray-700">
                          {section.description}
                        </p>
                      </div>
                      <div className={cn(index % 2 === 0 ? "order-1 md:order-2" : "order-1")}>
                        {section.content}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-12 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="bg-white hover:bg-Adapteq-light-purple text-Adapteq-navy" />
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2">
              <CarouselNext className="bg-white hover:bg-Adapteq-light-purple text-Adapteq-navy" />
            </div>
          </Carousel>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? "bg-Adapteq-purple w-6" 
                    : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
                onClick={() => {
                  if (emblaApi) {
                    emblaApi.scrollTo(index);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
