
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
      vertical: true,
      content: (
        <div className="order-1 md:order-2 flex justify-center">
          <img 
            src="lovable-uploads/intent.svg" 
            alt="Understanding and connecting visualization" 
            className="w-auto max-h-100">
          </img>
        </div>
      )
    },
    {
      title: "Remembers What Matters",
      description: "Utilizes episodic, semantic, and procedural memory to retain important information and context.",
      vertical: false,
      content: (
        <div className="order-1 md:order-1 flex justify-center">
          <img 
            src="lovable-uploads/memory graphic (1).png" 
            alt="Memory types visualization" 
            className="w-auto max-h-100"
          />
        </div>
      )
    },
    {
      title: "Responds Intelligently",
      description: "Applies the right prompting and model strategy based on the situation, reasoning thoroughly before replying.",
      vertical: false,
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
      vertical: true,
      content: (
        <div className="order-1 md:order-1 flex justify-center items-center w-full">
          <img 
            src="lovable-uploads/Reinforcement Loop.svg" 
            alt="Reinforcement learning loop" 
            className="w-auto max-h-80"
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
            Adaptive Intelligence Behind <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-400">Every Conversation</span>
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
            {sections.map((section, index) => (
                <div key={index} className="min-w-0 shrink-0 grow-0 basis-full pl-4">
                  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full">
                    {section.vertical ? (
                      // Vertical: two rows in one column.
                      <div className="grid grid-cols-1 gap-8">
                        <div className="flex flex-col justify-center">
                          <h3 className="text-2xl font-bold text-Adapteq-navy mb-4">{section.title}</h3>
                          <p className="text-lg text-gray-700">{section.description}</p>
                        </div>
                        <div>
                          {section.content}
                        </div>
                      </div>
                    ) : (
                      // Horizontal: one row with two columns.
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className={cn("flex flex-col justify-center", index % 2 === 0 ? "order-2 md:order-1" : "order-2")}>
                          <h3 className="text-2xl font-bold text-Adapteq-navy mb-4">{section.title}</h3>
                          <p className="text-lg text-gray-700">{section.description}</p>
                        </div>
                        <div className={cn(index % 2 === 0 ? "order-1 md:order-2" : "order-1")}>
                          {section.content}
                        </div>
                      </div>
                    )
                    }
                  </div>
                </div>
))}

            </div>
          </div>

          <div className="absolute -left-12 top-1/2 -translate-y-1/2">
            <button 
              className="h-8 w-8 rounded-full bg-white hover:bg-Adapteq-light-purple text-Adapteq-navy flex items-center justify-center" 
              onClick={() => emblaApi?.scrollPrev()}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className="absolute -right-12 top-1/2 -translate-y-1/2">
            <button 
              className="h-8 w-8 rounded-full bg-white hover:bg-Adapteq-light-purple text-Adapteq-navy flex items-center justify-center" 
              onClick={() => emblaApi?.scrollNext()}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.13559 3.84188L9.565 7.49991L6.13559 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35986 12.0535 6.67627 12.0433 6.86513 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86513 3.15794C6.67627 2.95648 6.35986 2.94628 6.1584 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

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
