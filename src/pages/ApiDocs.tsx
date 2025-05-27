import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ApiDocs = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="mb-12 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-Adapteq-navy mb-4">Adapteq API Documentation</h1>
              <p className="text-xl text-gray-700">Integrate adaptive conversation intelligence into your applications</p>
            </div>
            <Button 
              onClick={handleSignUp} 
              className="bg-Adapteq-purple hover:bg-Adapteq-dark-purple flex items-center"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Contact Us for API Access
            </Button>
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="authentication">Authentication</TabsTrigger>
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="models">Data Models</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-Adapteq-navy mb-3">Introduction</h2>
                  <p className="text-gray-700">
                    The Adapteq API provides RESTful endpoints that let you integrate our conversation intelligence into any application.
                    Our API follows standard REST conventions with JSON request and response bodies.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-Adapteq-navy mb-3">Base URL</h2>
                  <div className="bg-gray-50 p-4 rounded-md font-mono">
                    https://api.adapteq.com/v1
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-Adapteq-navy mb-3">Architecture</h2>
                  <p className="text-gray-700 mb-4">
                    The Adapteq API is built on a distributed microservice architecture with dual memory paths:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Hot Path (Redis):</strong> Handles immediate context and working memory for fast response times</li>
                    <li><strong>Cool Path (PostgreSQL):</strong> Provides long-term memory storage with vector search capabilities</li>
                    <li><strong>Orchestration Layer:</strong> Coordinates between services to deliver optimized responses</li>
                    <li><strong>Classification Services:</strong> Analyzes user input for intent, sentiment, and entities</li>
                    <li><strong>Memory Services:</strong> Retrieves relevant context based on the current conversation</li>
                    <li><strong>AI Services:</strong> Generates adaptive responses using the latest AI models</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="authentication" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-Adapteq-navy mb-3">API Keys</h2>
                  <p className="text-gray-700 mb-4">
                    All API requests require authentication using API keys. Your API keys carry significant privileges, so be sure to keep them secure.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md font-mono">
                    Authorization: Bearer YOUR_API_KEY
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h2 className="text-2xl font-semibold text-Adapteq-navy mb-3">Rate Limits</h2>
                  <p className="text-gray-700 mb-4">
                    API requests are subject to rate limiting based on your subscription tier. The current limits are:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tier</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requests per Minute</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Concurrent Sessions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Free</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Professional</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">60</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Enterprise</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">600</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="endpoints" className="mt-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-Adapteq-navy mb-2">Session Management</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="font-semibold text-green-700">POST /session/start</div>
                    <p className="text-sm text-gray-700 mt-1">Start a new conversation session</p>
                    
                    <div className="mt-4">
                      <div className="text-sm font-semibold">Request:</div>
                      <pre className="text-xs mt-1 overflow-x-auto">
{`{
  "user_id": "string",
  "parameters": {
    "language": "string",
    "context": "string",
    "session_options": {
      "ttl_minutes": "number"
    }
  }
}`}
                      </pre>
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-sm font-semibold">Response:</div>
                      <pre className="text-xs mt-1 overflow-x-auto">
{`{
  "session_id": "string",
  "status": "string",
  "message": "string",
  "expires_at": "ISO8601 timestamp"
}`}
                      </pre>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-Adapteq-navy mb-2">Conversation</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="font-semibold text-blue-700">POST /conversation</div>
                    <p className="text-sm text-gray-700 mt-1">Send a message and get a response</p>
                    
                    <div className="mt-4">
                      <div className="text-sm font-semibold">Request:</div>
                      <pre className="text-xs mt-1 overflow-x-auto">
{`{
  "session_id": "string",
  "message": "string",
  "parameters": {
    "temperature": "number",
    "max_tokens": "number"
  }
}`}
                      </pre>
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-sm font-semibold">Response:</div>
                      <pre className="text-xs mt-1 overflow-x-auto">
{`{
  "conversation_id": "string",
  "response": "string",
  "metadata": {
    "intent": "string",
    "sentiment": "string",
    "entities": []
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-Adapteq-navy mb-2">Memory</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="font-semibold text-purple-700">GET /memory/{'{user_id}'}</div>
                    <p className="text-sm text-gray-700 mt-1">Retrieve stored user memories</p>
                    
                    <div className="mt-4">
                      <div className="text-sm font-semibold">Query Parameters:</div>
                      <pre className="text-xs mt-1 overflow-x-auto">
{`{
  "type": "semantic|episodic",
  "limit": "number",
  "since": "ISO8601 timestamp"
}`}
                      </pre>
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-sm font-semibold">Response:</div>
                      <pre className="text-xs mt-1 overflow-x-auto">
{`{
  "memories": [
    {
      "id": "string",
      "type": "string",
      "content": "string",
      "created_at": "ISO8601 timestamp"
    }
  ]
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="models" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-Adapteq-navy mb-3">Data Models</h2>
                  <p className="text-gray-700 mb-6">
                    The following data models are used throughout the API:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-Adapteq-navy mb-2">Session</h3>
                      <pre className="bg-gray-50 p-4 rounded-md text-sm overflow-x-auto">
{`{
  "session_id": "string",
  "user_id": "string",
  "status": "active|ended",
  "created_at": "ISO8601 timestamp",
  "expires_at": "ISO8601 timestamp",
  "parameters": {
    "language": "string",
    "context": "string"
  }
}`}
                      </pre>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-Adapteq-navy mb-2">Conversation</h3>
                      <pre className="bg-gray-50 p-4 rounded-md text-sm overflow-x-auto">
{`{
  "conversation_id": "string",
  "session_id": "string",
  "messages": [
    {
      "id": "string",
      "role": "user|assistant",
      "content": "string",
      "timestamp": "ISO8601 timestamp",
      "metadata": {
        "intent": "string",
        "sentiment": "string",
        "entities": []
      }
    }
  ]
}`}
                      </pre>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-Adapteq-navy mb-2">Memory</h3>
                      <pre className="bg-gray-50 p-4 rounded-md text-sm overflow-x-auto">
{`{
  "id": "string",
  "user_id": "string",
  "type": "episodic|semantic|procedural",
  "content": "string",
  "vector_embedding": "float[]",
  "created_at": "ISO8601 timestamp",
  "source": {
    "type": "conversation|manual|inferred",
    "id": "string"
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocs;
