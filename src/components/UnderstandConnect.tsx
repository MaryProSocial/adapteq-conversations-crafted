
import React, { useState } from 'react';
import { Send, Brain, SmilePlus, MessageSquareText, Heart } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type ChatMessage = {
  content: string;
  isUser: boolean;
  typing?: boolean;
};

type Classification = {
  intent: string;
  emotion: string;
  depth: string;
  topic: string;
};

const CLASSIFICATIONS = {
  intent: ["Information Seeking", "Assistance Request", "Complaint", "General Inquiry"],
  emotion: ["Neutral", "Concerned", "Frustrated", "Hopeful"],
  depth: ["1 - Basic", "2 - Applied", "3 - Analytical", "4 - Evaluative", "5 - Creative"],
  topic: ["Housing", "Healthcare", "Financial", "Employment"]
};

interface UnderstandConnectProps {
  className?: string;
}

const UnderstandConnect: React.FC<UnderstandConnectProps> = ({ className }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { content: "Hi there! I'm your AI assistant. How can I help you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("I'm worried about my housing situation and need help finding affordable options near me.");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUserSentMessage, setHasUserSentMessage] = useState(false);
  const [showInputArea, setShowInputArea] = useState(true);
  const [classification, setClassification] = useState<Classification | null>(null);
  const [showClassification, setShowClassification] = useState(false);
  const [classifyingMessage, setClassifyingMessage] = useState(false);

  const handleSend = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    if (!inputValue.trim() || hasUserSentMessage) return;
    
    // Add user message
    const userMessage = { content: inputValue, isUser: true };
    setMessages([...messages, userMessage]);
    
    // Start typing indicator
    setIsTyping(true);
    
    // Show the classifying indicator
    setClassifyingMessage(true);
    
    // Simulate classification process
    setTimeout(() => {
      // Generate "realistic" classifications based on the message content
      const newClassification = {
        intent: inputValue.toLowerCase().includes('need help') ? 
          "Assistance Request" : 
          inputValue.toLowerCase().includes('find') ? 
            "Information Seeking" : 
            "General Inquiry",
        emotion: inputValue.toLowerCase().includes('worried') ? 
          "Concerned" : 
          inputValue.toLowerCase().includes('frustrated') ? 
            "Frustrated" : 
            "Neutral",
        depth: inputValue.toLowerCase().includes('situation') && inputValue.toLowerCase().includes('options') ? 
          "3 - Analytical" : 
          inputValue.toLowerCase().includes('need help') ? 
            "2 - Applied" : 
            "1 - Basic",
        topic: inputValue.toLowerCase().includes('housing') ? 
          "Housing" : 
          inputValue.toLowerCase().includes('health') ? 
            "Healthcare" : 
            inputValue.toLowerCase().includes('money') || inputValue.toLowerCase().includes('afford') ? 
              "Financial" : 
              "Employment"
      };
      
      setClassification(newClassification);
      setClassifyingMessage(false);
      setShowClassification(true);
      
      // Just mark that user has sent a message and hide the input area
      // without adding a bot response
      setIsTyping(false);
      setHasUserSentMessage(true);
      setShowInputArea(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col space-y-3">
      <div className="text-left">
        <h3 className="text-xl font-semibold text-adapteq-navy">Understand and Connect</h3>
        <p className="text-sm text-gray-600">
          Apply intelligence to every user chat with lightweight classification models that run instantly, no expensive LLM calls needed
        </p>
      </div>
      
      <Card className={`bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 p-4 ${className}`}>
        <div className="p-6">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isUser ? '' : 'justify-end'}`}>
                <div 
                  className={`p-3 rounded-lg ${
                    message.isUser 
                      ? 'bg-gray-100' 
                      : 'bg-adapteq-purple text-white'
                  } ${message.isUser && showClassification && index === messages.length - 1 ? 'mb-2' : ''}`}
                >
                  <p className="text-sm">{message.content}</p>
                  
                  {/* Show classification inside the user message bubble */}
                  {message.isUser && showClassification && index === messages.length - 1 && classification && (
                    <div className="mt-3 pt-3 border-t border-gray-300">
                      <p className="text-xs font-medium text-adapteq-navy mb-2">Message Classification:</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-1">
                          <MessageSquareText size={12} className="text-adapteq-purple" />
                          <span className="text-xs text-gray-600">Intent:</span>
                          <span className="text-xs font-medium">{classification.intent}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <SmilePlus size={12} className="text-adapteq-purple" />
                          <span className="text-xs text-gray-600">Emotion:</span>
                          <span className="text-xs font-medium">{classification.emotion}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart size={12} className="text-adapteq-purple" />
                          <span className="text-xs text-gray-600">Topic:</span>
                          <span className="text-xs font-medium">{classification.topic}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Brain size={12} className="text-adapteq-purple" />
                          <span className="text-xs text-gray-600">Depth:</span>
                          <span className="text-xs font-medium">{classification.depth}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {classifyingMessage && (
              <div className="flex justify-center">
                <div className="bg-adapteq-grey p-2 rounded-lg text-xs text-gray-600 flex items-center space-x-2 animate-pulse">
                  <Brain size={16} className="text-adapteq-purple" />
                  <span>Analyzing message...</span>
                </div>
              </div>
            )}
          </div>
          
          {showInputArea && (
            <form onSubmit={handleSend} className="mt-4 flex items-center space-x-2">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 min-h-[60px] resize-none"
                disabled={hasUserSentMessage}
              />
              <Button 
                type="submit"
                size="icon"
                className={`bg-adapteq-purple hover:bg-adapteq-dark-purple transition-opacity ${hasUserSentMessage ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={hasUserSentMessage}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </Card>
    </div>
  );
};

export default UnderstandConnect;
