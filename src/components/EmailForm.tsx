
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "We'll be in touch with your demo details soon.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleTryFree = () => {
    navigate('/signup');
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-3">
        <h4 className="text-Adapteq-navy font-medium">Request a Personalized Demo</h4>
        <p className="text-sm text-gray-600">See how Adapteq can work for your organization</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
        />
        <Button 
          type="button" 
          onClick={handleTryFree}
          className="bg-Adapteq-blue hover:bg-blue-700 sm:whitespace-nowrap"
        >
          Try It Free
        </Button>
      </form>
    </div>
  );
};

export default EmailForm;

