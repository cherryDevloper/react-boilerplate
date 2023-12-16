import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={`flex ${className}`}>
      <div className="w-2 h-2 bg-white rounded-full mr-1 animate-bounce"></div>
      <div className="w-2 h-2 bg-white rounded-full mr-1 animate-bounce"></div>
      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
    </div>
  );
};

export default LoadingSpinner;
