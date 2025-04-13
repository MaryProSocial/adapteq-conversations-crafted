import React from 'react';

const ApiService = () => {
  return (
    <section id="api-service" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-Adapteq-navy mb-6">
          Adaptive Conversation Intelligence API
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Unlock the power of adaptive conversations with our robust API.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hot Path (Redis) */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-Adapteq-navy mb-3">
              Hot Path (Redis)
            </h3>
            <p className="text-gray-600">
              Handles immediate context and working memory for fast response times.
            </p>
          </div>

          {/* Cool Path (PostgreSQL) */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-Adapteq-navy mb-3">
              Cool Path (PostgreSQL)
            </h3>
            <p className="text-gray-600">
              Provides long-term memory storage with vector search capabilities.
            </p>
          </div>

          {/* Orchestration Layer */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-Adapteq-navy mb-3">
              Orchestration Layer
            </h3>
            <p className="text-gray-600">
              Coordinates between services to deliver optimized responses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiService;
