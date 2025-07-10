import React from 'react';

// Define props interface for type safety
interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Optional custom Tailwind classes
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition-colors duration-200 ease-in-out
                 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                 ${className || ''}`}
    >
      {label}
    </button>
  );
};

export default Button;
