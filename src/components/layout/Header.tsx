'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className='sticky top-0 z-50 bg-dev-white border-b-2 border-dev-yellow shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
        <Link href='/' className='flex items-center'>
          <div className='w-10 h-10 mr-2 relative'>
            <Image
              src='/images/logo.svg'
              alt='DevLore Logo'
              fill
              sizes='(max-width: 768px) 40px, 40px'
              style={{ objectFit: 'cover' }}
            />
          </div>
          <span className='text-dev-dark-gray font-bold font-mono text-xl'>
            Dev<span className='text-dev-brown'>Lore</span>
          </span>
        </Link>

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

        <button
          onClick={toggleMobileMenu}
          className='md:hidden border-2 border-dev-brown cursor-pointer p-2 text-dev-brown'
          aria-label='Toggle mobile menu'
        >
          {mobileMenuOpen ? (
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
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className='md:hidden bg-dev-white border-t-2 cursor-pointer border-dev-yellow'>
          <div className='max-w-7xl mx-auto px-4 py-3'>
            <ul className='flex flex-col space-y-3'>
              <li>
                <Link
                  href='#about'
                  className='block text-dev-dark-gray font-medium py-3 px-4 border-l-4 border-transparent hover:border-dev-yellow hover:bg-dev-light-gray hover:text-dev-brown transition-all duration-200'
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#tracks'
                  className='block text-dev-dark-gray font-medium py-3 px-4 border-l-4 border-transparent hover:border-dev-yellow hover:bg-dev-light-gray hover:text-dev-brown transition-all duration-200'
                  onClick={toggleMobileMenu}
                >
                  Learning Tracks
                </Link>
              </li>
              <li>
                <Link
                  href='#features'
                  className='block text-dev-dark-gray font-medium py-3 px-4 border-l-4 border-transparent hover:border-dev-yellow hover:bg-dev-light-gray hover:text-dev-brown transition-all duration-200'
                  onClick={toggleMobileMenu}
                >
                  Features
                </Link>
              </li>
              <li className='pt-2 px-4'>
                <Link
                  href='#start'
                  className='block w-full bg-dev-yellow text-dev-black border-2 border-dev-brown font-bold py-3 px-6 text-center transition-all duration-300 hover:bg-dev-dark-yellow hover:shadow-[3px_3px_0_#644726] font-mono'
                  onClick={toggleMobileMenu}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
