
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmailForm = () => {
  const navigate = useNavigate();

  const handleTryNow = () => {
    navigate('/signup');
  };

  return (
    <div className="w-full max-w-md">
      <Button 
        onClick={handleTryNow} 
        className="bg-Adapteq-purple hover:bg-Adapteq-dark-purple text-white rounded-md h-[46px] flex items-center justify-center px-6 w-full sm:w-auto"
      >
        Try it now for free <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
      <p className="text-xs text-gray-500 mt-2">
        No credit card required
      </p>
    </div>
  );
};

export default EmailForm;
