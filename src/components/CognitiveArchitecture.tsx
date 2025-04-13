
import React from 'react';
import { 
  BookOpen, 
  FileText, 
  Headphones, 
  BarChart, 
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const CognitiveArchitecture = () => {
  const isMobile = useIsMobile();
  
  const kpiItems = [
    {
      icon: <BarChart className="h-8 w-8 text-Adapteq-blue mx-auto mb-4" />,
      value: "95%",
      label: "User Engagement Improvement"
    },
    {
      icon: <BarChart className="h-8 w-8 text-Adapteq-blue mx-auto mb-4" />,
      value: "85%",
      label: "Task Completion Rate"
    },
    {
      icon: <BarChart className="h-8 w-8 text-Adapteq-blue mx-auto mb-4" />,
      value: "3x",
      label: "ROI Compared to Standard AI"
    },
    {
      icon: <BarChart className="h-8 w-8 text-Adapteq-blue mx-auto mb-4" />,
      value: "40%",
      label: "Support Cost Reduction"
    }
  ];

  const renderKpiDesktop = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {kpiItems.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          {item.icon}
          <h4 className="font-bold text-3xl text-Adapteq-navy">{item.value}</h4>
          <p className="text-sm text-gray-600">{item.label}</p>
        </div>
      ))}
    </div>
  );

  const renderKpiMobile = () => (
    <Carousel className="w-full">
      <CarouselContent>
        {kpiItems.map((item, index) => (
          <CarouselItem key={index} className="sm:basis-1/2">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full">
              {item.icon}
              <h4 className="font-bold text-3xl text-Adapteq-navy">{item.value}</h4>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <div className="flex justify-center mt-6 gap-1">
        {kpiItems.map((_, i) => (
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
    <section id="cognitive-architecture" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">
            Understand <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-400">Cognitive Architecture</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn how advanced cognitive architecture is transforming user connections and delivering measurable outcomes through meaningful engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-Adapteq-light-purple p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-Adapteq-navy">Research & Insights</h3>
            <p className="text-gray-700 mb-6">
              Stay current with the latest research on adaptive AI conversation technology and its applications in building lasting user connections.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-Adapteq-purple mt-0.5" />
                <div>
                  <h4 className="font-medium text-Adapteq-navy">White Paper: The Future of Adaptive AI</h4>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-Adapteq-purple mt-0.5" />
                <div>
                  <h4 className="font-medium text-Adapteq-navy">Research: User Retention Transformation</h4>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-Adapteq-purple mt-0.5" />
                <div>
                  <h4 className="font-medium text-Adapteq-navy">Study: AI Engagement Metrics</h4>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-Adapteq-light-purple p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-Adapteq-navy">Podcast & Interviews</h3>
            <p className="text-gray-700 mb-6">
              Listen to thought leaders discuss the impact of cognitive architecture on organizational outcomes and user retention.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Headphones className="h-5 w-5 text-Adapteq-purple mt-0.5" />
                <div>
                  <h4 className="font-medium text-Adapteq-navy">Podcast: The Human Side of AI</h4>
                  <p className="text-sm text-gray-600">Episode 1 coming soon</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Headphones className="h-5 w-5 text-Adapteq-purple mt-0.5" />
                <div>
                  <h4 className="font-medium text-Adapteq-navy">Interview: Transforming User Engagement</h4>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Headphones className="h-5 w-5 text-Adapteq-purple mt-0.5" />
                <div>
                  <h4 className="font-medium text-Adapteq-navy">Panel: AI Ethics in User Connections</h4>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-Adapteq-navy mb-2">Case Studies & Success Stories</h3>
              <p className="text-gray-700">
                Discover how organizations are implementing cognitive architecture to improve user engagement and outcomes.
              </p>
            </div>
            <Button 
              variant="outline" 
              className="border-Adapteq-purple text-Adapteq-purple hover:bg-Adapteq-light-purple flex items-center"
            >
              <span>Coming Soon</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-Adapteq-navy">Key Performance Indicators</h3>
          {isMobile ? renderKpiMobile() : renderKpiDesktop()}
        </div>
      </div>
    </section>
  );
};

export default CognitiveArchitecture;
