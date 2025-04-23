import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) => {
  const baseClasses = 'font-bold border-2 transition-colors duration-300';

  const variantClasses = {
    primary:
      'bg-dev-yellow text-dev-black border-dev-yellow hover:bg-dev-dark-yellow hover:border-dev-dark-yellow',
    secondary:
      'bg-transparent text-dev-yellow border-dev-yellow hover:bg-dev-yellow/10',
  };

  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-4 px-8 text-lg',
  };

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // If href is provided, render as a Link
  if (href) {
    return (
      <Link href={href} className={allClasses}>
        {children}
      </Link>
    );
  }

  // Otherwise render as a button
  return (
    <button type={type} onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
};

export default Button;
