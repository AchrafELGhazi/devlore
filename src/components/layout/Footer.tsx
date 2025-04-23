import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-dev-off-white py-12 border-t-2 border-dev-yellow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center mb-8'>
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
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          <div>
            <h4 className='text-dev-brown font-mono mb-4 font-bold'>
              Resources
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/tracks'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-dev-brown font-mono mb-4 font-bold'>
              Community
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='https://github.com/AchrafELGhazi'
                  target='_blank'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  GitHub
                </Link>
              </li>

              <li>
                <Link
                  href='https://github.com/AchrafELGhazi/devlore'
                  target='_blank'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  Contribute
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-dev-brown font-mono mb-4 font-bold'>About</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-dev-medium-gray pt-6 text-center text-dev-medium-gray'>
          <p>&copy; {new Date().getFullYear()} DevLore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
