
import React from 'react';
import { 
  MessageCircleOff, 
  ShuffleIcon, 
  BarChart2,
  Users
} from 'lucide-react';
import ScenarioCircle from './ScenarioCircle';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const Benefits = () => {
  const isMobile = useIsMobile();
  
  const benefits = [
    {
      icon: <MessageCircleOff size={36} className="text-Adapteq-purple" />,
      title: "Hard to reach, easy to lose",
      description: "Most AI chat tools fail to hold attention—responses feel generic, impersonal, and unhelpful. Users lose interest fast. We use adaptive prompting to capitalize on initial motivation and keep conversations engaging, personal, and on track."
    },
    {
      icon: <ShuffleIcon size={36} className="text-Adapteq-purple" />,
      title: "Inconsistent Outcomes",
      description: "If you don't understand what users are trying to do, you can't help them get the results they need. We classify intent, emotion, and perspective in real time—so the system can meet people where they are and guide them more effectively."
    },
    {
      icon: <BarChart2 size={36} className="text-Adapteq-purple" />,
      title: "Wasted AI Investment",
      description: "Many teams deploy AI but don't know if it's working. Without visibility into user behavior or outcomes, it's hard to improve. We provide conversation-level reporting that shows what strategies worked, where users disengaged, and what to fix next."
    },
    {
      icon: <Users size={36} className="text-Adapteq-purple" />,
      title: "Limited Access at Scale",
      description: "Even with automation, underserved users often slip through. We help you scale support with empathy while keeping your staff in the loop when it matters most."
    }
  ];

  const renderBenefitsDesktop = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">{benefit.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
          <p className="text-gray-600 text-sm">{benefit.description}</p>
        </div>
      ))}
    </div>
  );

  const renderBenefitsMobile = () => (
    <Carousel className="w-full">
      <CarouselContent>
        {benefits.map((benefit, index) => (
          <CarouselItem key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4 gap-1">
        {benefits.map((_, i) => (
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
    <section id="benefits" className="py-16 md:py-24 bg-Adapteq-grey">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-6 max-w-4xl mx-auto">
            It's time to get real about <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-400">implementing AI</span>
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            Stop building generic chatbots. Your users need a personalized, engaging and adaptive agent that can help them reach real outcomes.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            {isMobile ? renderBenefitsMobile() : renderBenefitsDesktop()}
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-purple-400 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Real Scenarios, Real Impact</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-800 to-purple-400"></div>
                </div>
                
                <ScenarioCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
