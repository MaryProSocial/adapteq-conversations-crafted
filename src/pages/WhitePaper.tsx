
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";

const WhitePaper = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end gap-4 mb-8 print:hidden">
          <Button 
            variant="outline" 
            onClick={handlePrint}
            className="flex items-center gap-2"
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button 
            onClick={handleDownload}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
        
        {/* Cover Page */}
        <article className="prose max-w-none">
          <div className="min-h-[11in] relative mb-8 flex flex-col items-center justify-between py-16 px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg print:rounded-none">
            {/* Logo */}
            <div className="w-48 mb-12">
              <img src="/images/thumbnail.png" alt="Adapteq Logo" className="w-full" />
            </div>
            
            {/* Title Section */}
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Beyond Prompting: Evidence-Based Tactics for More Human Conversation
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-100">
                From Boring Text to Adaptive Dialog
              </h2>
              <p className="text-lg mb-4 text-gray-100">
                By Mary Nelson
              </p>
            </div>
            
            {/* Teaser Summary */}
            <div className="max-w-3xl mt-8">
              <p className="text-lg leading-relaxed text-gray-100 text-center">
                Users don't abandon AI conversations because the content is wrong; they quit because the dialog is wrong. 
                Impersonal. Generic. Boring. That's why as many and 80% of users bail out frustrated. 
                Adapteq, ProSocial's cognitive architecture, layers memory, live classification, adaptive prompts, 
                and reinforcement learning to spark conversations that feel human. Grounded in decades of psychology 
                and learning science research, Adapteq plugs into any LLM to turn static chat into dynamic, 
                personalized dialogue that lifts engagement, retention, and real world results—discover how inside.
              </p>
            </div>
            
            {/* Website & Page Number */}
            <div className="absolute bottom-8 w-full px-8">
              <div className="flex justify-between items-center text-sm text-gray-200">
                <span>www.adapteq.ai</span>
                <span className="print:fixed print:bottom-8 print:right-8">1</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default WhitePaper;
