import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const DemoRequestForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const navigate = useNavigate();
  
  const handleTryNow = () => {
    navigate('/contact');
    if (onSuccess) onSuccess();
  };

  return (
    <div className="space-y-6">
      <Button 
        onClick={handleTryNow} 
        className="w-full bg-white text-purple-700 hover:bg-gray-100 flex items-center justify-center"
      >
        Contact Us <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
      
      <p className="text-xs text-center text-white/80">
        We'll get back to you within 24 hours.
      </p>
    </div>
  );
};

export default DemoRequestForm;
