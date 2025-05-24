import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/morehumancontactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          site_name: 'adapteq',
          // name,
          // message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: data.message || "We'll be in touch with your demo details soon.",
        });
        setEmail('');
      } else {
        toast({
          title: "Error",
          description: data.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          type="submit"
          disabled={isSubmitting}
          className="bg-Adapteq-blue hover:bg-blue-700 sm:whitespace-nowrap"
        >
          {isSubmitting ? "Submitting..." : "Request Demo"}
        </Button>
      </form>
    </div>
  );
};

export default EmailForm;

