import Link from 'next/link';

export default function Nodejs() {
  return (
    <div className='min-h-screen bg-dev-white text-dev-off-black flex flex-col items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
        {/* Logo */}
        <div className='flex justify-center mb-12'>
          <div className='flex items-center'>
            <div className='w-16 h-16 mr-3'>
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
            <span className='text-dev-dark-gray font-bold font-mono text-3xl'>
              Dev<span className='text-dev-brown'>Lore</span>
            </span>
          </div>
        </div>

        {/* Coming Soon Content */}
        <div className='bg-dev-off-white border-2 border-dev-dark-gray p-8 sm:p-12 text-center mb-8 shadow-[6px_6px_0_#8A6534]'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold font-mono text-dev-dark-gray mb-6'>
            Coming Soon
          </h1>

          <div className='code-block mx-auto max-w-md text-left mb-8'>
            <pre>
              <code>
                <span className='html-tag'>{'<div>'}</span>
                <br />
                {'  '}
                <span className='html-tag'>{'<h1>'}</span>
                We're building something awesome!
                <span className='html-tag'>{'</h1>'}</span>
                <br />
                {'  '}
                <span className='html-tag'>{'<p>'}</span>
                Your web development journey begins soon.
                <span className='html-tag'>{'</p>'}</span>
                <br />
                <span className='html-tag'>{'</div>'}</span>
              </code>
            </pre>
          </div>

          <p className='text-dev-dark-gray text-lg mb-8'>
            We're crafting a comprehensive learning platform for web
            development.
            <br />
            Stay tuned for the launch!
          </p>

          {/* Email Subscription */}
          <div className='mb-8'>
            <h3 className='text-dev-brown font-mono text-lg mb-4'>
              Get Notified When We Launch
            </h3>
            <div className='flex flex-col sm:flex-row gap-2 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Your email address'
                className='border-2 border-dev-dark-gray p-3 w-full text-dev-dark-gray bg-dev-white'
              />
              <button className='bg-dev-yellow text-dev-black border-2 border-dev-brown font-bold py-3 px-6 transition-all duration-300 hover:bg-dev-dark-yellow hover:shadow-[3px_3px_0_#644726] font-mono whitespace-nowrap'>
                Notify Me
              </button>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className='mb-6'>
            <div className='flex justify-between text-dev-dark-gray font-mono text-sm mb-2'>
              <span>Development Progress</span>
              <span>73%</span>
            </div>
            <div className='w-full h-4 bg-dev-light-gray border-2 border-dev-dark-gray'>
              <div
                className='h-full bg-dev-yellow'
                style={{ width: '73%' }}
              ></div>
            </div>
          </div>

          <p className='text-dev-medium-gray text-sm'>
            Expected launch: May 2025
          </p>
        </div>

        {/* Social Links */}
        <div className='flex justify-center gap-4 mb-8'>
          <Link
            href='#'
            className='bg-dev-light-gray p-3 border-2 border-dev-dark-gray hover:bg-dev-yellow transition-colors duration-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
              <rect x='2' y='9' width='4' height='12'></rect>
              <circle cx='4' cy='4' r='2'></circle>
            </svg>
          </Link>
          <Link
            href='#'
            className='bg-dev-light-gray p-3 border-2 border-dev-dark-gray hover:bg-dev-yellow transition-colors duration-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
            </svg>
          </Link>
          <Link
            href='#'
            className='bg-dev-light-gray p-3 border-2 border-dev-dark-gray hover:bg-dev-yellow transition-colors duration-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
            </svg>
          </Link>
          <Link
            href='#'
            className='bg-dev-light-gray p-3 border-2 border-dev-dark-gray hover:bg-dev-yellow transition-colors duration-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
            </svg>
          </Link>
        </div>

        {/* Footer */}
        <div className='text-center text-dev-medium-gray'>
          <p>&copy; {new Date().getFullYear()} DevLore. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
