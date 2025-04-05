
import React from 'react';
import { Search, Brain, Database, Settings, RefreshCw, BookOpen, Tv, ClipboardList } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-adapteq-purple" />,
      emoji: "🔍",
      title: "Understands the User",
      description: "Classifies intent, emotion, and cognitive depth to identify the core needs in each conversation.",
      details: "Our advanced classification system analyzes utterances to understand both explicit requests and implicit needs, creating a foundation for meaningful interactions.",
      color: "bg-adapteq-light-purple",
      memoryType: {
        icon: <BookOpen className="h-8 w-8 text-adapteq-purple" />,
        title: "Semantic Memory",
        description: "Stores facts, knowledge, and user preferences to personalize each interaction."
      }
    },
    {
      icon: <Brain className="h-12 w-12 text-adapteq-blue" />,
      emoji: "💡",
      title: "Chooses Smart Responses",
      description: "Selects the best prompt strategy (e.g., probing, reflective) to advance the conversation.",
      details: "Our adaptive prompting system selects from dozens of response strategies based on the conversation context and user needs.",
      color: "bg-adapteq-light-blue",
      memoryType: {
        icon: <Tv className="h-8 w-8 text-adapteq-blue" />,
        title: "Episodic Memory",
        description: "Recalls examples and summaries of past conversations to provide consistent support."
      }
    },
    {
      icon: <Database className="h-12 w-12 text-teal-500" />,
      emoji: "🧠",
      title: "Remembers What Matters",
      description: "Recalls examples, facts, and past interactions from multiple memory systems.",
      details: "Our triple memory system combines semantic, episodic, and procedural knowledge to create cohesive, continuous conversations.",
      color: "bg-teal-100",
      memoryType: {
        icon: <ClipboardList className="h-8 w-8 text-teal-500" />,
        title: "Procedural Memory",
        description: "Stores prompt strategies, response styles, and conversation patterns that have proven effective."
      }
    },
    {
      icon: <Settings className="h-12 w-12 text-indigo-500" />,
      emoji: "⚙️",
      title: "Optimizes the System",
      description: "Routes to the best model for speed, accuracy, and cost based on the complexity of the request.",
      details: "Our model orchestration layer intelligently selects the most appropriate AI system for each task, balancing performance and efficiency.",
      color: "bg-indigo-100"
    },
    {
      icon: <RefreshCw className="h-12 w-12 text-pink-500" />,
      emoji: "🔁",
      title: "Learns What Works",
      description: "Tracks outcomes and reinforces successful strategies with every interaction.",
      details: "Our reinforcement learning loop continuously improves the system by identifying and amplifying successful conversation patterns.",
      color: "bg-pink-100"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">
            How <span className="gradient-text">adapteq</span> Works
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            Our adaptive AI system powers human connections across education, healthcare, and support services.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {steps.map((step, index) => (
            <Collapsible key={index} className="group">
              <Card className={`h-full transition-all duration-300 overflow-hidden hover:shadow-lg ${step.color} border-none`}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-white rounded-full p-4 shadow-md">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      <span>{step.emoji}</span> 
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-700">{step.description}</p>
                    
                    <CollapsibleTrigger className="text-adapteq-purple font-medium hover:text-adapteq-dark-purple transition-colors">
                      Learn more
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="pt-4">
                        <Separator className="mb-4" />
                        <p className="text-gray-700 mb-4">
                          {step.details}
                        </p>
                        
                        {step.memoryType && (
                          <div className="bg-white/80 rounded-lg p-4 flex items-start gap-3">
                            <div className="shrink-0 mt-1">
                              {step.memoryType.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">
                                {step.memoryType.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {step.memoryType.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CollapsibleContent>
                  </div>
                </CardContent>
              </Card>
            </Collapsible>
          ))}
        </div>

        {/* Memory Systems Overview */}
        <div className="bg-adapteq-grey rounded-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="heading-3 mb-3">
              Reinforcement Learning + Memory
            </h3>
            <p className="body-text max-w-2xl mx-auto">
              Our adaptive conversational agent learns from each interaction to deliver increasingly effective support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Learning Loop Visual */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-xl font-bold mb-4 text-center text-adapteq-purple">
                Continuous Learning Loop
              </h4>
              
              <div className="relative py-8">
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-60 h-60 border-4 border-adapteq-light-purple rounded-full opacity-50"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-6 relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 bg-adapteq-light-purple p-3 rounded-full">
                      <Search className="h-6 w-6 text-adapteq-purple" />
                    </div>
                    <h5 className="font-medium text-sm">Detect Patterns</h5>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 bg-adapteq-light-blue p-3 rounded-full">
                      <RefreshCw className="h-6 w-6 text-adapteq-blue" />
                    </div>
                    <h5 className="font-medium text-sm">Adjust Strategies</h5>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 bg-teal-100 p-3 rounded-full">
                      <Brain className="h-6 w-6 text-teal-500" />
                    </div>
                    <h5 className="font-medium text-sm">Improve Results</h5>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefits by Sector */}
            <div className="bg-gradient-to-r from-adapteq-light-purple to-adapteq-light-blue rounded-xl p-6 shadow-sm">
              <h4 className="text-xl font-bold mb-4 text-center text-adapteq-navy">
                Powering Human Services
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/80 p-4 rounded-lg">
                  <h5 className="font-bold text-adapteq-purple mb-2">Education</h5>
                  <p className="text-sm">Personalized learning support that adapts to student needs and learning styles.</p>
                </div>
                
                <div className="bg-white/80 p-4 rounded-lg">
                  <h5 className="font-bold text-adapteq-blue mb-2">Healthcare</h5>
                  <p className="text-sm">Patient-centered support that enhances care coordination and health literacy.</p>
                </div>
                
                <div className="bg-white/80 p-4 rounded-lg">
                  <h5 className="font-bold text-teal-500 mb-2">Support Services</h5>
                  <p className="text-sm">Empathetic assistance that connects people with the resources they need.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
