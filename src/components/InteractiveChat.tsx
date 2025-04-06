
import React, { useState, useEffect } from 'react';
import { Send, Edit } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type ChatMessage = {
  content: string;
  isUser: boolean;
  typing?: boolean;
};

type ResponseStrategy = 'direct' | 'probing' | 'action';

const RESPONSE_STRATEGIES = {
  direct: {
    name: 'Direct Support',
    response: "For housing assistance in King County, I recommend contacting the King County Housing Authority at (206) 214-1300. They can help with Section 8 vouchers and emergency rental assistance."
  },
  probing: {
    name: 'Probing Question',
    response: "Is there a specific area in King County where you live that you're looking for housing assistance?"
  },
  action: {
    name: 'Action Oriented',
    response: "To access housing assistance: 1) Visit kingcountyhousingauthority.org 2) Complete an eligibility screening 3) Gather required documents (ID, income verification) 4) Submit your application online or in person."
  }
};

interface InteractiveChatProps {
  className?: string;
}

const InteractiveChat: React.FC<InteractiveChatProps> = ({ className }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { content: "Welcome! I'm here to help with housing, benefits, and social services information. How can I assist you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("I'm looking for housing assistance programs in my area.");
  const [selectedStrategy, setSelectedStrategy] = useState<ResponseStrategy>('direct');
  const [isTyping, setIsTyping] = useState(false);
  const [showStrategyOptions, setShowStrategyOptions] = useState(false);
  const [recentlyChanged, setRecentlyChanged] = useState(false);
  const [lastBotMessageIndex, setLastBotMessageIndex] = useState(-1);
  const [hasUserSentMessage, setHasUserSentMessage] = useState(false);
  const [showInputArea, setShowInputArea] = useState(true);

  // Update response when strategy changes
  useEffect(() => {
    if (lastBotMessageIndex >= 0) {
      updateResponseForCurrentStrategy();
      
      // Add animation effect when strategy changes
      setRecentlyChanged(true);
      setTimeout(() => setRecentlyChanged(false), 1500);
    }
  }, [selectedStrategy]);

  const updateResponseForCurrentStrategy = () => {
    const responseContent = RESPONSE_STRATEGIES[selectedStrategy].response;
    
    setMessages(prev => {
      const newMessages = [...prev];
      if (lastBotMessageIndex >= 0) {
        newMessages[lastBotMessageIndex] = { content: responseContent, isUser: false };
      }
      return newMessages;
    });
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    if (!inputValue.trim() || hasUserSentMessage) return;
    
    // Add user message
    const userMessage = { content: inputValue, isUser: true };
    setMessages([...messages, userMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      setIsTyping(false);
      
      // Get response based on current strategy
      const responseContent = RESPONSE_STRATEGIES[selectedStrategy].response;
      
      // Add AI response
      setMessages(prev => {
        const newMessages = [...prev, { content: responseContent, isUser: false }];
        setLastBotMessageIndex(newMessages.length - 1);
        return newMessages;
      });
      
      // Mark that user has sent a message
      setHasUserSentMessage(true);
      
      // Hide input area after sending
      setShowInputArea(false);
    }, 1500);
  };

  const handleStrategyChange = (strategy: ResponseStrategy) => {
    setSelectedStrategy(strategy);
    setShowStrategyOptions(false);
  };

  const toggleStrategyOptions = () => {
    setShowStrategyOptions(prev => !prev);
  };

  return (
    <div className="flex flex-col space-y-3">
      <div className="text-left">
        <h3 className="text-xl font-semibold text-adapteq-navy">Personalize and Adapt</h3>
        <p className="text-sm text-gray-600">
          Adaptive user conversations that automatically detect which responses work best and reinforce successful outcomes in real time
        </p>
      </div>
      
      <Card className={`bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 p-4 ${className}`}>
        <div className="p-6">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isUser ? '' : 'justify-end'}`}>
                <div 
                  className={`p-3 rounded-lg max-w-[80%] relative ${
                    message.isUser 
                      ? 'bg-gray-100' 
                      : `bg-adapteq-purple text-white ${
                          recentlyChanged && index === lastBotMessageIndex 
                            ? 'animate-fade-in shadow-glow' 
                            : ''
                        }`
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  
                  {/* Float edit button below AI response */}
                  {!message.isUser && index === lastBotMessageIndex && hasUserSentMessage && (
                    <div className="mt-2 flex justify-center">
                      {!showStrategyOptions ? (
                        <Button 
                          variant="outline" 
                          onClick={toggleStrategyOptions} 
                          className="text-xs py-1 px-3 h-auto text-adapteq-purple border-adapteq-light-purple hover:bg-adapteq-light-purple/20 flex items-center gap-1 animate-fade-in"
                          size="sm"
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Adjust Strategy
                        </Button>
                      ) : (
                        <ToggleGroup 
                          type="single" 
                          value={selectedStrategy} 
                          onValueChange={(value) => value && handleStrategyChange(value as ResponseStrategy)} 
                          className="flex flex-wrap justify-center gap-1 animate-fade-in"
                        >
                          {Object.entries(RESPONSE_STRATEGIES).map(([key, strategy]) => (
                            <ToggleGroupItem 
                              key={key} 
                              value={key}
                              className={`text-xs py-1 px-2 h-auto ${
                                selectedStrategy === key 
                                  ? 'bg-adapteq-purple text-white hover:bg-adapteq-dark-purple' 
                                  : 'bg-white text-adapteq-purple border border-adapteq-light-purple hover:bg-adapteq-light-purple/20'
                              }`}
                            >
                              {strategy.name}
                            </ToggleGroupItem>
                          ))}
                        </ToggleGroup>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-adapteq-purple p-3 rounded-lg text-white">
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-white rounded-full animate-pulse mr-1"></div>
                    <div className="h-2 w-2 bg-white rounded-full animate-pulse delay-100 mr-1"></div>
                    <div className="h-2 w-2 bg-white rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {showInputArea && (
            <form onSubmit={handleSend} className="mt-4 flex items-center space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
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

export default InteractiveChat;
