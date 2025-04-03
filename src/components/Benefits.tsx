
import React from 'react';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Clock 
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp size={36} className="text-adapteq-teal" />,
      title: "Improved Outcomes",
      description: "Enhance service delivery with AI-powered conversations that adapt to individual needs, increasing successful case resolutions by up to 42%."
    },
    {
      icon: <Shield size={36} className="text-adapteq-teal" />,
      title: "Reduced Burnout",
      description: "Alleviate staff workloads by automating routine inquiries, allowing human service professionals to focus on complex cases that require personal attention."
    },
    {
      icon: <Users size={36} className="text-adapteq-teal" />,
      title: "Greater Accessibility",
      description: "Provide 24/7 support to clients with varying abilities, languages, and digital literacy levels through intuitive conversational interfaces."
    },
    {
      icon: <Clock size={36} className="text-adapteq-teal" />,
      title: "Time Savings",
      description: "Reduce case processing time by up to 68% with intelligent triage and information gathering before human intervention is needed."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-adapteq-grey">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="heading-2 mb-6">
              Why Choose <span className="gradient-text">adapteq</span> for Human Services
            </h2>
            <p className="body-text mb-8">
              Our technology is specifically designed to address the unique challenges and sensitivities 
              of human service organizations. With adapteq, you'll transform how your organization connects 
              with and serves your community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-adapteq-teal to-adapteq-blue rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Real-World Impact</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-adapteq-blue to-adapteq-teal"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-3 w-3 rounded-full bg-adapteq-teal"></div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">County Housing Authority</p>
                      <p className="text-sm text-gray-600">Increased application completion rates by 53% while reducing staff workload by 38%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-3 w-3 rounded-full bg-adapteq-teal"></div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">State Benefit Program</p>
                      <p className="text-sm text-gray-600">Reduced average case resolution time from 7.2 days to 2.1 days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-3 w-3 rounded-full bg-adapteq-teal"></div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Mental Health Nonprofit</p>
                      <p className="text-sm text-gray-600">Expanded service coverage by 215% with existing staff through AI-assisted triage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-3 w-3 rounded-full bg-adapteq-teal"></div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Family Support Center</p>
                      <p className="text-sm text-gray-600">Client satisfaction ratings increased from 76% to 92% after implementing adapteq</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-adapteq-grey/50 p-4 rounded-lg">
                  <blockquote className="italic text-gray-700">
                    "adapteq has revolutionized how we engage with our community. We're able to serve more people with greater efficiency while maintaining the human touch that's essential to our mission."
                  </blockquote>
                  <p className="mt-2 text-sm font-medium">— Sarah Johnson, Director of Client Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
