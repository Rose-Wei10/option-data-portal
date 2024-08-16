import React from 'react';

interface ButtonProps {
  onClick?: () => void; // Optional click handler
  children: React.ReactNode; // Button content
  className?: string; // Optional additional CSS classes
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};
