
import React, { useState } from 'react';
import { Home, Briefcase, MessageSquare, BookOpen, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type Scenario = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ScenarioCircle = () => {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);
  
  const scenarios: Scenario[] = [
    {
      icon: <Home className="h-6 w-6 text-Adapteq-purple" />,
      title: "Human Services",
      description: "A tenant reaches out to their local housing agency unsure if they qualify for support. The system listens for key details, offers clarification in plain language, and helps them take the next step—without needing to wait in a queue or repeat their story."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-Adapteq-purple" />,
      title: "Workplace Support",
      description: "An employee has a sensitive question about accommodations. Instead of browsing a policy manual or sending an awkward email, they talk to the AI—receiving thoughtful, confidential guidance and a clear path toward resolution."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-Adapteq-purple" />,
      title: "Interview Coaching",
      description: "A job seeker practices answering tough behavioral questions. The AI plays the role of interviewer, gives real-time feedback, and adjusts based on confidence or hesitation—building both skill and self-trust through conversation."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-Adapteq-purple" />,
      title: "Student Advising",
      description: "A returning student isn't sure how to re-enroll. The system recalls past goals, picks up where they left off, and gently guides them through the process—surfacing reminders, offering encouragement, and connecting them to a human when it counts."
    }
  ];

  const handleScenarioClick = (index: number) => {
    if (activeScenario === index) {
      setActiveScenario(null);
    } else {
      setActiveScenario(index);
    }
  };

  const handleClickOutside = () => {
    setActiveScenario(null);
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-96">
      {/* Circular rotating background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border-2 border-dashed border-Adapteq-purple/30 animate-spin-slow"></div>
        <div className="absolute w-52 h-52 rounded-full border border-Adapteq-purple/20"></div>
      </div>
      
      {/* Scenario buttons positioned in a circle */}
      {scenarios.map((scenario, index) => {
        // Calculate position around the circle
        const angle = (index * Math.PI / 2) - Math.PI / 4; // Distribute evenly
        const x = Math.cos(angle) * 110; // Radius
        const y = Math.sin(angle) * 110; // Radius
        
        return (
          <button
            key={index}
            className={cn(
              "absolute transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full",
              "flex flex-col items-center justify-center transition-all duration-300",
              "bg-white shadow-md hover:shadow-lg hover:scale-110 z-10",
              activeScenario === index ? "scale-110 bg-Adapteq-purple/10" : ""
            )}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            onClick={() => handleScenarioClick(index)}
          >
            <div className="mb-1">{scenario.icon}</div>
            <div className="text-xs font-medium text-center text-Adapteq-navy leading-tight px-1">
              {scenario.title}
            </div>
          </button>
        );
      })}
      
      {/* Center circle with title */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-blue-800 to-purple-400 flex items-center justify-center p-2">
        <span className="text-white text-xs text-center font-semibold">Real Scenarios, Real Impact</span>
      </div>
      
      {/* Description flyout */}
      {activeScenario !== null && (
        <>
          <div 
            className="fixed inset-0 bg-transparent z-20" 
            onClick={handleClickOutside}
          />
          <div 
            className="absolute z-30 bg-white rounded-lg p-4 shadow-xl w-72 max-w-xs transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <button 
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              onClick={handleClickOutside}
            >
              <X size={18} />
            </button>
            <div className="flex items-center mb-3">
              {scenarios[activeScenario].icon}
              <h4 className="ml-2 font-semibold text-Adapteq-navy">
                {scenarios[activeScenario].title}
              </h4>
            </div>
            <p className="text-sm text-gray-600">
              {scenarios[activeScenario].description}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ScenarioCircle;
