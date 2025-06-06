import React from 'react';
import { Braces, BrainCircuit, LineChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Personalization as a Service",
      description: "Our reinforcement learning algorithms continuously improve conversational patterns based on user interactions, with built-in memory to personalize each experience.",
      icon: <BrainCircuit size={48} className="text-Adapteq-blue" />,
      details: [
        "Dynamic prompt optimization",
        "Contextual memory storage",
        "Personalized user experiences",
      ]
    },
    {
      title: "Model Orchestration",
      description: "Seamlessly integrate multiple AI models to handle complex queries with appropriate domain expertise and response formats.",
      icon: <Braces size={48} className="text-Adapteq-blue" />,
      details: [
        "Multi-model coordination",
        "Utterance level model-switching, cheaper and faster than fine-tuning",
        "Fallback mechanisms",
      ]
    },
    {
      title: "Super easy to customize for your use case",
      description: "We offer flexible intent and emotion classification that allows you to configure conversational strategies and goals for your domain in minutes.",
      icon: <LineChart size={48} className="text-Adapteq-blue" />,
      details: [
        "Sentiment analysis",
        "Intent recognition",
        "Goal management",
      ]
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-Adapteq-purple/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-400">Human-Centered Value</span>
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            Adapteq combines cutting-edge AI technology with deep expertise in conversational patterns to create 
            personalized experiences that are empathetic, effective, and continuously improving.
          </p>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 pb-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex-none w-[85vw] snap-center"
                >
                  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                    <div className="mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <div className="mt-auto">
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-Adapteq-purple mr-2"></div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="mt-auto">
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-Adapteq-purple mr-2"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
