
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
      // In a real implementation, this would send the data to a server
      // For now we'll simulate a successful submission
      console.log("Form submitted:", data);
      
      // Simulate sending email to demo@adapteq.ai
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Request submitted successfully!");
      form.reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
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
                  className="resize-none min-h-[120px]"
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
                <Input placeholder="Your email address" type="email" {...field} />
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
