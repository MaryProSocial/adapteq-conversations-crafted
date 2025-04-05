
import React from 'react';
import { Search, Brain, Database, Settings, RefreshCw, BookOpen, Tv, ClipboardList } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-adapteq-light-blue">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            The Intelligence Behind <span className="gradient-text">Every Conversation</span>
          </h2>
        </div>

        {/* Alternating sections */}
        <div className="space-y-12">
          {/* Section 1: Understands and Connects */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-adapteq-navy mb-4">Understands and Connects</h3>
                <p className="text-lg text-gray-700">
                  Analyzes user intent, emotion, and perspective to foster a deeper connection in conversation.
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative bg-adapteq-light-purple rounded-full p-12 w-64 h-64 flex items-center justify-center">
                  <Search className="h-24 w-24 text-adapteq-purple absolute" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 border-4 border-adapteq-light-blue rounded-full opacity-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Remembers What Matters */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-adapteq-navy mb-4">Remembers What Matters</h3>
                <p className="text-lg text-gray-700">
                  Utilizes episodic, semantic, and procedural memory to retain important information and context.
                </p>
              </div>
              <div className="order-1 md:order-1 flex justify-center">
                <div className="relative bg-adapteq-light-blue p-8 rounded-xl w-72 h-72">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="bg-white p-4 rounded-lg flex items-center gap-3">
                      <BookOpen className="h-8 w-8 text-adapteq-blue" />
                      <div>
                        <h4 className="font-bold">Semantic Memory</h4>
                        <p className="text-sm text-gray-600">Facts & Knowledge</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg flex items-center gap-3">
                      <Tv className="h-8 w-8 text-adapteq-purple" />
                      <div>
                        <h4 className="font-bold">Episodic Memory</h4>
                        <p className="text-sm text-gray-600">Conversation History</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg flex items-center gap-3">
                      <ClipboardList className="h-8 w-8 text-teal-500" />
                      <div>
                        <h4 className="font-bold">Procedural Memory</h4>
                        <p className="text-sm text-gray-600">Response Strategies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Responds Intelligently */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-adapteq-navy mb-4">Responds Intelligently</h3>
                <p className="text-lg text-gray-700">
                  Applies the right prompting and model strategy based on the situation, reasoning thoroughly before replying.
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="bg-adapteq-light-purple rounded-xl p-6 w-72">
                  <div className="flex flex-col gap-4">
                    <div className="bg-adapteq-purple rounded-lg p-4 text-white">
                      <h4 className="font-bold text-lg mb-1">Utterance Classification</h4>
                      <p className="text-xs">Intent, Emotion, Perspective</p>
                    </div>
                    <div className="flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="bg-adapteq-purple rounded-lg p-4 text-white">
                      <h4 className="font-bold text-lg mb-1">Adaptive Prompting</h4>
                      <p className="text-xs">Selects optimal response strategy</p>
                    </div>
                    <div className="flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="bg-adapteq-purple rounded-lg p-4 text-white">
                      <h4 className="font-bold text-lg mb-1">Model Orchestration</h4>
                      <p className="text-xs">Routes to optimal AI model</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Improves with Use */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-adapteq-navy mb-4">Improves with Use</h3>
                <p className="text-lg text-gray-700">
                  Embraces reinforcement learning to assess the quality of its responses and improve outcomes over time.
                </p>
              </div>
              <div className="order-1 md:order-1 flex justify-center">
                <div className="relative bg-adapteq-light-blue rounded-xl p-8 w-72 h-72 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 border-4 border-adapteq-purple rounded-full opacity-40"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 relative z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 bg-white p-3 rounded-full shadow-md">
                        <Search className="h-6 w-6 text-adapteq-purple" />
                      </div>
                      <p className="text-xs font-medium">Detect Patterns</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 bg-white p-3 rounded-full shadow-md">
                        <RefreshCw className="h-6 w-6 text-adapteq-blue" />
                      </div>
                      <p className="text-xs font-medium">Train Models</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 bg-white p-3 rounded-full shadow-md">
                        <Brain className="h-6 w-6 text-teal-500" />
                      </div>
                      <p className="text-xs font-medium">Improve Results</p>
                    </div>
                  </div>
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
