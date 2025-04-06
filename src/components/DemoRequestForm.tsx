
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

type FormValues = {
  email: string;
  project: string;
};

const DemoRequestForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      project: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create a mailto link with the form data
      const subject = "Demo Request from Website";
      const body = `Project Details: ${data.project}\n\nContact Email: ${data.email}`;
      const mailtoUrl = `mailto:demo@adapteq.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the mailto link in a new window/tab
      window.open(mailtoUrl, '_blank');
      
      console.log("Form submitted:", data);
      
      toast.success("Email client opened. If it didn't open automatically, please email demo@adapteq.ai directly.");
      form.reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error("Failed to open email client. Please email demo@adapteq.ai directly.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="project"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="I need help adapting my chatbot for..."
                  className="resize-none min-h-[120px] text-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your email address" type="email" className="text-black" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-white text-purple-700 hover:bg-gray-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request Demo"}
        </Button>
        
        <p className="text-xs text-center text-white/80">
          We'll never spam you. We just want to help you get the answers you need.
        </p>
      </form>
    </Form>
  );
};

export default DemoRequestForm;
