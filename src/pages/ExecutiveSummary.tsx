
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Printer, Download } from "lucide-react";

const ExecutiveSummary: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col min-h-screen">
        {/* Main content container */}
        <div className="flex flex-1">
          {/* Left sidebar - 25% width with gradient background */}
          <div className="w-1/4 bg-gradient-to-b from-Adapteq-blue to-Adapteq-purple p-6 text-white">
            <div className="flex flex-col space-y-8">
              <div className="quote">
                <p className="text-sm font-light mb-2">"80% of consumers who have interacted with a chatbot said it increased their frustration level."</p>
                <p className="text-sm font-light mb-2">"72% felt that using a chatbot for customer service was a waste of time."</p>
                <p className="text-sm font-light mb-2">"63% indicated that their interaction with a chatbot did not result in a resolution."</p>
                <p className="text-xs text-white/70">— UJET Research, 2022</p>
              </div>
              
              <div className="quote">
                <p className="text-sm font-light mb-2">"Brands cannot provide great customer service through simply adopting automation. Leaders must be intentional on how they design and implement automation to add value to the consumer, service workers and the business's bottom line."</p>
                <p className="text-xs text-white/70">— Justin Robbins, Senior Director of Corporate Communications, UJET</p>
              </div>
              
              <div className="quote">
                <p className="text-sm font-light mb-2">"Participants did not need much of a cue to respond socially to the computers. The experiment supports the hypothesis that social rules can apply to media, and computers can be social initiators."</p>
                <p className="text-xs text-white/70">— The Media Equation (Reeves & Nass, 1996)</p>
              </div>
              
              <div className="quote">
                <p className="text-sm font-light mb-2">"Cognitive AI differs from traditional deep learning models by...infusing AI with cognitive reasoning abilities, AGI can become more robust, adaptable, and applicable across various domains."</p>
                <p className="text-xs text-white/70">— Ramachandran, 2025</p>
              </div>
            </div>
          </div>
          
          {/* Main content area - 75% width */}
          <div className="w-3/4 flex flex-col">
            {/* Header with actions and logo */}
            <header className="p-6 flex justify-between items-center h-20 print:h-16">
              <div className="print:hidden flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={handlePrint} 
                  className="flex items-center gap-2"
                >
                  <Printer className="h-4 w-4" />
                  Print
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Link to="/white-paper" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Cover
                  </Link>
                </Button>
              </div>
              <div>
                <span className="text-2xl font-bold">
                  <span className="text-Adapteq-navy">Adapt</span>
                  <span className="text-Adapteq-navy/70">eq</span>
                </span>
              </div>
            </header>
            
            <Separator className="mb-8" />
            
            {/* Main content */}
            <div className="flex-1 p-8 max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-Adapteq-navy mb-6">Executive Summary</h1>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Soon, conversational agents will handle everything from retail support to mental health triage. 
                  Currently, 80 percent of users report feeling "frustrated" by chat exchanges, with chatbots 
                  called out as a major culprit for impersonal, ineffective help (UJET, 2022). Of course, some of this 
                  feedback is based on traditional, rules-based chat interactions, but the word on the street is that 
                  newer AI-based offerings really aren't that much better.
                </p>
                
                <div className="my-8 mx-auto max-w-2xl">
                  <img 
                    src="/lovable-uploads/983acc65-4c3a-4c01-9fec-4b785e0eb0ae.png" 
                    alt="Expectation vs Reality in AI Conversations" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                
                <p className="mb-4">
                  The current generation of AI is not a wholesale replacement for human connection – not even 
                  close. People instinctively expect social intelligence from a conversational 
                  partner (Reeves & Nass, 1996). When an AI agent cannot recognize what a user really needs, be 
                  it soothing, clarification, or coaching, responses default to generic, impersonal replies. The 
                  interaction collapses. In the best-case scenarios, this might mean unhappy customers or a missed 
                  revenue opportunity. In high-stakes contexts, missed conversational cues mean ineffective 
                  learning, stalled behavior change (Duenas & Ruiz, 2024), or even real-world harm.
                </p>
                
                <p className="mb-4">
                  Language models alone are not sufficient to solve the problem of human-like conversation– they 
                  are the voice, not the brain. This white paper explores Cognitive architectures that combine 
                  memory, logical reasoning, and adaptation are the next steps towards AGI. Cognitive 
                  architectures that combine memory, logical reasoning, and adaptation are the next steps 
                  towards AGI. This paper outlines a small part of that system more specifically - how to adapt 
                  prompts to large language models based on real-time utterance classification.
                </p>
              </div>
            </div>
            
            {/* Footer */}
            <footer className="p-6 text-center text-sm text-gray-500 print:fixed print:bottom-6 print:w-full">
              <p>2025, all rights reserved</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
