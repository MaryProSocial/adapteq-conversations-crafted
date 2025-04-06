
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { toast } from "sonner";

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Send the email to the demo address
      const mailtoUrl = `mailto:demo@adapteq.ai?subject=Demo Request&body=I would like to request a demo. My email is: ${email}`;
      window.open(mailtoUrl, '_blank');
      
      console.log("Email submitted:", email);
      
      toast.success("Email link opened. If it didn't open automatically, please email demo@adapteq.ai directly.");
      setEmail('');
    } catch (error) {
      toast.error("Failed to open email client. Please email demo@adapteq.ai directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex items-center">
        <Input 
          type="email" 
          placeholder="Enter email for demo"
          className="w-full py-3 px-4 border border-Adapteq-purple rounded-l-md" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="w-2"></div>
        <Button 
          type="submit" 
          className="bg-Adapteq-purple hover:bg-Adapteq-dark-purple text-white rounded-md h-[46px] flex items-center justify-center"
          disabled={isSubmitting}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
      </p>
    </form>
  );
};

export default EmailForm;
