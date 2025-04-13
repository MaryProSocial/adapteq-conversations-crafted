
import React from 'react';
import { Braces, BrainCircuit, LineChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Adaptive Prompting",
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
        "Domain-specific routing",
        "Fallback mechanisms",
      ]
    },
    {
      title: "Conversation Health Analytics",
      description: "Comprehensive metrics and insights to track conversation quality, user satisfaction, and areas for improvement.",
      icon: <LineChart size={48} className="text-Adapteq-blue" />,
      details: [
        "Sentiment analysis",
        "Completion rates",
        "Satisfaction metrics",
      ]
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-Adapteq-purple/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Powerful Features for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-400">Human-Centered AI</span>
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            Adapteq combines cutting-edge AI technology with deep expertise in human services to create 
            conversational experiences that are empathetic, effective, and continuously improving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
