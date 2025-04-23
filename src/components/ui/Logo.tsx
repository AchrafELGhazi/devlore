import React from 'react';
import Link from 'next/link';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'text-lg p-2';
      case 'large':
        return 'text-3xl p-4';
      default:
        return 'text-2xl p-3';
    }
  };

  return (
    <Link href='/'>
      <div
        className={`bg-dev-dark-gray border-2 border-dev-yellow font-bold font-mono ${getSizeClasses()}`}
      >
        <span className='text-dev-white'>Dev</span>
        <span className='text-dev-yellow'>Lore</span>
      </div>
    </Link>
  );
};

export default Logo;
