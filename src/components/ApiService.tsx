import React from 'react';
import { Code, Cpu, Database, Server, ArrowRight, BookOpen, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ApiService = () => {
  const navigate = useNavigate();

  return (
    <section id="api-service" className="py-20 bg-Adapteq-grey">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">
            Powerful <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-400">API-Driven</span> Architecture
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Access our adaptive conversation intelligence through a simple, powerful API that integrates seamlessly with your applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-Adapteq-light-purple p-8 rounded-xl shadow-md order-2 md:order-1">
            <div className="flex flex-col space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-Adapteq-purple p-3 rounded-lg mt-1">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-Adapteq-navy">RESTful API Access</h3>
                  <p className="text-gray-700">Simple HTTP endpoints for session management and conversation processing</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-Adapteq-purple p-3 rounded-lg mt-1">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-Adapteq-navy">Dual Memory Architecture</h3>
                  <p className="text-gray-700">Hot path (Redis) for immediate context and cool path (PostgreSQL) for long-term memory</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-Adapteq-purple p-3 rounded-lg mt-1">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-Adapteq-navy">Microservice Orchestration</h3>
                  <p className="text-gray-700">Scalable microservices running on Kubernetes for classification, memory retrieval, and response generation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-Adapteq-purple p-3 rounded-lg mt-1">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-Adapteq-navy">Simple Integration</h3>
                  <p className="text-gray-700">Easy-to-use client libraries for popular programming languages</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="text-sm font-mono bg-gray-50 p-4 rounded-md mb-6 overflow-x-auto">
                <div className="text-purple-700">POST /api/session/start</div>
                <div className="text-gray-500 mt-2">Request:</div>
                <pre className="text-gray-700">
{`{
  "user_id": "user-123",
  "parameters": {
    "language": "en-US",
    "context": "customer_support"
  }
}`}
                </pre>
                <div className="text-gray-500 mt-4">Response:</div>
                <pre className="text-gray-700">
{`{
  "session_id": "sess-456abc",
  "status": "ready",
  "message": "How can I assist you today?"
}`}
                </pre>
              </div>
              <div className="flex justify-center space-x-4">
                <Button 
                  onClick={() => navigate('/api-docs')}
                  className="bg-Adapteq-purple hover:bg-Adapteq-dark-purple flex items-center"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  API Documentation
                </Button>
                <Button 
                  variant="outline"
                  className="border-Adapteq-purple text-Adapteq-purple hover:bg-Adapteq-light-purple flex items-center"
                  onClick={() => window.open('https://github.com/adapteq/api-samples', '_blank')}
                >
                  <Link className="mr-2 h-4 w-4" />
                  Code Samples
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-Adapteq-purple hover:text-Adapteq-dark-purple transition-colors cursor-pointer" onClick={() => navigate('/api-docs')}>
            <span className="font-medium">Explore the full API documentation</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiService;
