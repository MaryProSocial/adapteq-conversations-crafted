
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatarSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  organization,
  avatarSrc
}) => {
  return (
    <div className="bg-white rounded-xl p-6 card-shadow">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-adapteq-blue/20 flex items-center justify-center">
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt={author}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="text-adapteq-blue font-medium text-lg">
              {author.charAt(0)}
            </span>
          )}
        </div>
        <div className="ml-4">
          <h4 className="font-medium text-adapteq-navy">{author}</h4>
          <p className="text-sm text-gray-500">
            {role}, {organization}
          </p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic">"{quote}"</blockquote>
      <div className="mt-6 flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
