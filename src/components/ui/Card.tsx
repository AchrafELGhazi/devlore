import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div
      className={`
        bg-dev-dark-gray 
        border-2 
        border-dev-brown 
        p-6 
        ${
          hover ? 'transition-transform duration-300 hover:-translate-y-1' : ''
        } 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
