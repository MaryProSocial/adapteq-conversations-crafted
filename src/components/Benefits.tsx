
import React from 'react';
import { 
  HeadphonesIcon, 
  ShieldCheck, 
  LineChart, 
  Users
} from 'lucide-react';
import ScenarioCircle from './ScenarioCircle';

const Benefits = () => {
  const benefits = [
    {
      icon: <HeadphonesIcon size={36} className="text-Adapteq-purple" />,
      title: "Hard to reach, easy to lose",
      description: "Most AI chat tools fail to hold attention—responses feel generic, impersonal, and unhelpful. Users lose interest fast. We use adaptive prompting to capitalize on initial motivation and keep conversations engaging, personal, and on track."
    },
    {
      icon: <ShieldCheck size={36} className="text-Adapteq-purple" />,
      title: "Inconsistent Outcomes",
      description: "If you don't understand what users are trying to do, you can't help them get the results they need. We classify intent, emotion, and perspective in real time—so the system can meet people where they are and guide them more effectively."
    },
    {
      icon: <LineChart size={36} className="text-Adapteq-purple" />,
      title: "Wasted AI Investment",
      description: "Many teams deploy AI but don't know if it's working. Without visibility into user behavior or outcomes, it's hard to improve. We provide conversation-level reporting that shows what strategies worked, where users disengaged, and what to fix next."
    },
    {
      icon: <Users size={36} className="text-Adapteq-purple" />,
      title: "Limited Access at Scale",
      description: "Even with automation, underserved users often slip through. We help you scale support with empathy while keeping your staff in the loop when it matters most."
    }
  ];

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
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
                
                <div className="mt-8 bg-Adapteq-grey/50 p-4 rounded-lg">
                  <blockquote className="italic text-gray-700">
                    "It's like having a caseworker who never forgets a conversation, always knows the next best step, and never burns out."
                  </blockquote>
                  <p className="mt-2 text-sm font-medium">— Early Design Partner, Public Services Innovation Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
