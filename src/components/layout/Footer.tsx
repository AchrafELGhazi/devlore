import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-dev-off-white py-12 border-t-2 border-dev-yellow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center mb-8'>
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
                  href='#'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-dev-dark-gray hover:text-dev-brown hover:underline'
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href='#'
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
