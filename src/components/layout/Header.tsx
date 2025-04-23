'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className='sticky top-0 z-50 bg-dev-white border-b-2 border-dev-yellow shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <div className='w-10 h-10 mr-2'>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              {/* Background Square */}
              <rect
                x='10'
                y='10'
                width='180'
                height='180'
                fill='#EEEEEE'
                stroke='#8A6534'
                strokeWidth='4'
              />

              {/* Logo Text */}
              <g fontFamily='monospace' fontWeight='bold' letterSpacing='-2'>
                {/* Dev Text */}
                <text x='34' y='110' fontSize='42' fill='#444444'>
                  Dev
                </text>

                {/* Lore Text */}
                <text x='100' y='110' fontSize='42' fill='#8A6534'>
                  Lore
                </text>
              </g>

              {/* Decorative Code Elements */}
              <g stroke='#8A6534' strokeWidth='2' fill='none'>
                {/* HTML Tag */}
                <path d='M30,40 L45,50 L30,60' />
                <path d='M60,40 L45,50 L60,60' />

                {/* Curly Brace */}
                <path d='M140,40 C145,40 150,43 150,48 C150,53 145,55 140,55 C145,55 150,57 150,62 C150,67 145,70 140,70' />

                {/* Semicolon */}
                <circle cx='165' cy='50' r='3' fill='#8A6534' />
                <circle cx='165' cy='62' r='3' fill='#8A6534' />
              </g>

              {/* Bottom Code Line */}
              <line
                x1='30'
                y1='140'
                x2='170'
                y2='140'
                stroke='#8A6534'
                strokeWidth='2'
                strokeDasharray='5,5'
              />
              <line
                x1='30'
                y1='160'
                x2='120'
                y2='160'
                stroke='#8A6534'
                strokeWidth='2'
                strokeDasharray='5,5'
              />
            </svg>
          </div>
          <span className='text-dev-dark-gray font-bold font-mono text-xl'>
            Dev<span className='text-dev-brown'>Lore</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className='hidden md:block'>
          <ul className='flex gap-8'>
            <li>
              <Link
                href='#about'
                className='text-dev-dark-gray font-medium py-2 px-4 border-2 border-transparent hover:text-dev-brown hover:border-dev-yellow transition-colors duration-300'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='#tracks'
                className='text-dev-dark-gray font-medium py-2 px-4 border-2 border-transparent hover:text-dev-brown hover:border-dev-yellow transition-colors duration-300'
              >
                Learning Tracks
              </Link>
            </li>
            <li>
              <Link
                href='#features'
                className='text-dev-dark-gray font-medium py-2 px-4 border-2 border-transparent hover:text-dev-brown hover:border-dev-yellow transition-colors duration-300'
              >
                Features
              </Link>
            </li>
            <li>
              <Link href='#start' className='retro-button-primary'>
                Get Started
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className='md:hidden border-2 border-dev-brown p-2 text-dev-brown'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
