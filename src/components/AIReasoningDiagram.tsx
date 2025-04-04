
import React from 'react';
import { Brain, Lightbulb, ArrowDown, Search, BookOpen, Tv, ClipboardList, Star } from 'lucide-react';

const AIReasoningDiagram = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Adaptive Conversational Agent
          </h2>
          <p className="text-xl text-adapteq-purple font-medium">
            with Reinforcement Learning + Memory
          </p>
        </div>

        {/* Introduction Box */}
        <div className="bg-adapteq-light-purple rounded-3xl p-6 mb-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="bg-white rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-adapteq-purple" />
            </div>
            <p className="text-gray-800 text-lg">
              A conversational AI agent that understands what the user is trying to do, tracks which AI response strategies advance those goals, and reinforces successful outcomes in real time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: AI Reasoning Pipeline */}
          <div className="lg:col-span-5">
            <div className="bg-adapteq-light-blue rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">AI Reasoning Pipeline</h3>
              
              {/* Utterance Classification */}
              <div className="bg-adapteq-purple rounded-xl p-5 text-white mb-4">
                <h4 className="font-bold text-xl mb-2">Utterance Classification</h4>
                <p className="text-sm">
                  Intent, Emotion, User Perspective, Self-disclosure, Cognitive Depth
                </p>
              </div>
              
              <div className="flex justify-center my-2">
                <ArrowDown className="text-adapteq-purple w-6 h-6" />
              </div>
              
              {/* Adaptive Prompting */}
              <div className="bg-adapteq-purple rounded-xl p-5 text-white mb-4">
                <h4 className="font-bold text-xl mb-2">Adaptive Prompting</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Selects Response Strategy</li>
                  <li>Use case specific - eg socratic questioning, probing, challenging, etc</li>
                </ul>
              </div>
              
              <div className="flex justify-center my-2">
                <ArrowDown className="text-adapteq-purple w-6 h-6" />
              </div>
              
              {/* Model Orchestration */}
              <div className="bg-adapteq-purple rounded-xl p-5 text-white">
                <h4 className="font-bold text-xl mb-2">Model Orchestration</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Route to best fit model</li>
                  <li>Optimize for speed, cost, and accuracy</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Column: Memory Systems */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Memory Retrieval */}
              <div className="bg-adapteq-light-blue rounded-3xl p-5 col-span-1">
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Memory Retrieval</h3>
                <div className="flex justify-center mb-2">
                  <Search className="w-10 h-10" />
                </div>
                <div className="bg-adapteq-light-purple p-4 rounded-lg text-center">
                  <p>similarity search<br />keyword search</p>
                </div>
              </div>
              
              {/* Semantic Memory */}
              <div className="flex flex-col space-y-2 col-span-1">
                <div className="bg-white p-3 rounded-xl">
                  <h4 className="text-xl font-bold mb-2 text-center">Semantic Memory</h4>
                  <div className="flex justify-center mb-1">
                    <BookOpen className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="text-center text-sm">Facts, Knowledge, User Preferences</p>
                </div>
                
                {/* Episodic Memory */}
                <div className="bg-white p-3 rounded-xl">
                  <h4 className="text-xl font-bold mb-2 text-center">Episodic Memory</h4>
                  <div className="flex justify-center mb-1">
                    <Tv className="w-8 h-8 text-blue-500" />
                  </div>
                  <p className="text-center text-sm">Few shot examples, summaries of past conversations.</p>
                </div>
                
                {/* Procedural Memory */}
                <div className="bg-white p-3 rounded-xl">
                  <h4 className="text-xl font-bold mb-2 text-center">Procedural Memory</h4>
                  <div className="flex justify-center mb-1">
                    <ClipboardList className="w-8 h-8 text-cyan-500" />
                  </div>
                  <p className="text-center text-sm">Prompt strategies, response styles, personality</p>
                </div>
              </div>
              
              {/* Heuristics + Learned Weights */}
              <div className="bg-adapteq-light-purple rounded-3xl p-5 col-span-2 md:col-span-1">
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Heuristics + <br />Learned Weights</h3>
                <div className="flex justify-center">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3V21M12 3L19 10M12 3L5 10M12 21L19 14M12 21L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reinforcement Learning Loop */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Reinforcement Learning Loop</h3>
          
          <div className="relative">
            {/* Circle Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 border-8 border-adapteq-light-purple rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 relative z-10">
              {/* Detect Utterance */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#e0e7ff"/>
                    <path d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z" fill="#6366f1"/>
                    <path d="M20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19Z" stroke="#6366f1" strokeWidth="2"/>
                    <path d="M18 16L21 19M15 16L18 19" stroke="#6366f1" strokeWidth="2"/>
                  </svg>
                </div>
                <h4 className="font-bold mb-1">Detect Utterance</h4>
                <p className="text-sm">"Semantic Shifts"</p>
              </div>
              
              {/* Train weights */}
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="mb-3">
                  <svg className="w-16 h-16 text-adapteq-purple" viewBox="0 0 24 24" fill="none">
                    <rect x="6" y="6" width="12" height="12" rx="6" fill="#e0e7ff"/>
                    <path d="M21 8.5C21 11.5376 18.5376 14 15.5 14C14.348 14 13.2872 13.6217 12.4323 12.9784C12.2412 12.8346 12.0086 12.8539 11.8402 12.9996C10.9675 13.6804 9.8534 14.0909 8.64286 14.0909C5.52766 14.0909 3 11.5633 3 8.44773C3 5.33217 5.52766 2.80451 8.64286 2.80451C10.4753 2.80451 12.0952 3.69807 13.1079 5.04961C13.2627 5.27023 13.5736 5.33325 13.8028 5.19366C14.3107 4.89398 14.8878 4.72727 15.5 4.72727C18.5376 4.72727 21 7.18969 21 10.2273V8.5Z" stroke="#6366f1" strokeWidth="2"/>
                  </svg>
                </div>
                <h4 className="font-bold mb-1">Train weights on procedural memory nodes</h4>
                <p className="text-sm">(prompt strategies)</p>
              </div>
              
              {/* Assign Reward Signals */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">
                  <Star className="w-16 h-16 text-adapteq-purple" />
                </div>
                <h4 className="font-bold mb-1">Assign Reward Signals</h4>
                <p className="text-sm">based on desired outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIReasoningDiagram;
