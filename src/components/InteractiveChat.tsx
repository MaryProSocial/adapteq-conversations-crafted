
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ScrollArea } from "@/components/ui/scroll-area";

type ChatMessage = {
  content: string;
  isUser: boolean;
  typing?: boolean;
};

type ResponseStrategy = 'direct' | 'probing' | 'action';

const RESPONSE_STRATEGIES = {
  direct: {
    name: 'Direct Support',
    responses: {
      housing: "For housing assistance in King County, I recommend contacting the King County Housing Authority at (206) 214-1300. They can help with Section 8 vouchers and emergency rental assistance.",
      benefits: "You can access benefits by visiting Washington Connection (washingtonconnection.org) or calling DSHS at 1-877-501-2233 to apply for food, cash, and medical assistance.",
      childcare: "For childcare assistance, contact Child Care Aware at 1-800-446-1114. They can connect you with local providers and subsidy programs."
    }
  },
  probing: {
    name: 'Probing Question',
    responses: {
      housing: "Is there a specific area in King County where you're looking for housing assistance? Different neighborhoods have different resources available.",
      benefits: "Which specific benefits are you interested in learning more about - food assistance, healthcare, or income support?",
      childcare: "What ages are your children, and do you need full-time or part-time childcare options?"
    }
  },
  action: {
    name: 'Action Oriented',
    responses: {
      housing: "To access housing assistance: 1) Visit kingcountyhousingauthority.org 2) Complete an eligibility screening 3) Gather required documents (ID, income verification) 4) Submit your application online or in person.",
      benefits: "To apply for benefits: 1) Go to washingtonconnection.org 2) Create an account 3) Complete the benefits application 4) Submit your documentation 5) Check your application status within 7-10 days.",
      childcare: "For childcare: 1) Call Child Care Aware at 1-800-446-1114 2) Provide your location and childcare needs 3) Review the provider list they send 4) Contact providers directly to check availability."
    }
  }
};

interface InteractiveChatProps {
  className?: string;
}

const InteractiveChat: React.FC<InteractiveChatProps> = ({ className }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { content: "Welcome to adapteq! I'm here to help with housing, benefits, and social services information. How can I assist you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("I'm looking for housing assistance programs in my area.");
  const [selectedStrategy, setSelectedStrategy] = useState<ResponseStrategy>('direct');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [currentTopic, setCurrentTopic] = useState('housing');
  const [lastBotMessageIndex, setLastBotMessageIndex] = useState(-1);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Update response when strategy changes
  useEffect(() => {
    if (lastBotMessageIndex >= 0) {
      updateResponseForCurrentStrategy();
    }
  }, [selectedStrategy]);

  const updateResponseForCurrentStrategy = () => {
    const responseContent = RESPONSE_STRATEGIES[selectedStrategy].responses[currentTopic as keyof typeof RESPONSE_STRATEGIES[typeof selectedStrategy]['responses']];
    
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
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { content: inputValue, isUser: true };
    setMessages([...messages, userMessage]);
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      setIsTyping(false);
      
      // Get response based on current strategy and topic
      const responseContent = RESPONSE_STRATEGIES[selectedStrategy].responses[currentTopic as keyof typeof RESPONSE_STRATEGIES[typeof selectedStrategy]['responses']];
      
      // Add AI response
      setMessages(prev => {
        const newMessages = [...prev, { content: responseContent, isUser: false }];
        setLastBotMessageIndex(newMessages.length - 1);
        return newMessages;
      });
      
      // Set next input based on topic
      if (currentTopic === 'housing') {
        setInputValue("Do I need to provide any documentation?");
        setCurrentTopic('benefits');
      } else if (currentTopic === 'benefits') {
        setInputValue("How can I find childcare services near me?");
        setCurrentTopic('childcare');
      } else {
        setInputValue("Thank you for your help!");
        setCurrentTopic('housing');
      }
    }, 1500);
  };

  const handleStrategyChange = (strategy: ResponseStrategy) => {
    setSelectedStrategy(strategy);
  };

  return (
    <Card className={`bg-white shadow-xl rounded-2xl overflow-hidden ${className}`}>
      <div className="p-4 bg-adapteq-navy text-white rounded-t-lg flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-mono text-sm">Select response strategy:</p>
        <ToggleGroup type="single" value={selectedStrategy} onValueChange={(value) => value && handleStrategyChange(value as ResponseStrategy)} className="flex flex-wrap justify-center gap-1">
          {Object.entries(RESPONSE_STRATEGIES).map(([key, strategy]) => (
            <ToggleGroupItem 
              key={key} 
              value={key}
              className={`text-xs py-1 px-2 h-auto text-white border border-adapteq-light-purple ${
                selectedStrategy === key 
                  ? 'bg-adapteq-purple hover:bg-adapteq-dark-purple' 
                  : 'bg-adapteq-navy hover:bg-adapteq-light-purple/20'
              }`}
            >
              {strategy.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div className="p-6">
        <ScrollArea className="h-64 pr-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isUser ? '' : 'justify-end'}`}>
                <div 
                  className={`p-3 rounded-lg max-w-[80%] ${
                    message.isUser ? 'bg-gray-100' : 'bg-adapteq-light-purple'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-adapteq-light-purple p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-adapteq-purple rounded-full animate-pulse mr-1"></div>
                    <div className="h-2 w-2 bg-adapteq-purple rounded-full animate-pulse delay-100 mr-1"></div>
                    <div className="h-2 w-2 bg-adapteq-purple rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        <form onSubmit={handleSend} className="mt-4 flex items-center space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button 
            type="submit"
            size="icon"
            className="bg-adapteq-purple hover:bg-adapteq-dark-purple"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default InteractiveChat;
