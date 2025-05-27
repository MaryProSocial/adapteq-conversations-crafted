import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          site_name: 'adapteq',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Thank you for your message. We'll be in touch soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-Adapteq-navy">Get API Access</h1>
              <p className="mt-2 text-gray-600">Sign up to access the Adapteq API and start integrating adaptive conversations into your applications.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 space-y-4">
              <div className="flex items-start">
                <Server className="h-6 w-6 text-Adapteq-purple mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-Adapteq-navy">RESTful API Access</h3>
                  <p className="text-sm text-gray-600">Get full access to our conversation intelligence API with JSON requests and responses.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-Adapteq-purple mr-3 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 12H7L9 8L13 16L15 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-medium text-Adapteq-navy">Dual Memory Architecture</h3>
                  <p className="text-sm text-gray-600">Leverage our hot and cool memory paths for immediate context and long-term storage.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-Adapteq-purple mr-3 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3H4V8H9V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 3H15V8H20V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 15H15V20H20V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 15H4V20H9V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 6H15V18H9V6Z" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <h3 className="font-medium text-Adapteq-navy">Robust Microservices</h3>
                  <p className="text-sm text-gray-600">Our API is built on distributed microservices ensuring reliability and scalability.</p>
                </div>
              </div>

              <Link to="/api-docs" className="inline-flex items-center text-Adapteq-purple hover:text-Adapteq-dark-purple mt-2">
                View complete API documentation <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold tracking-tight text-center text-Adapteq-purple">
                Contact Us
              </CardTitle>
              <CardDescription className="text-center">
                Get in touch with our team to learn more about Adapteq
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    required
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-Adapteq-purple hover:bg-Adapteq-dark-purple"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <p className="text-sm text-center text-gray-500">
                We'll get back to you within 24 hours.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact; 