import Link from 'next/link';

export default function JavaScript() {
  return (
    <div className='min-h-screen bg-dev-white text-dev-off-black flex flex-col items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
        <div className='flex justify-center mb-12'>
          <div className='flex items-center'>
            <span className='text-dev-dark-gray font-bold font-mono text-3xl'>
              Dev<span className='text-dev-brown'>Lore</span>
            </span>
          </div>
        </div>

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
                {"We're building something awesome!"}
                <span className='html-tag'>{'</h1>'}</span>
                <br />
                {'  '}
                <span className='html-tag'>{'<p>'}</span>
                {'Your web development journey begins soon.'}
                <span className='html-tag'>{'</p>'}</span>
                <br />
                <span className='html-tag'>{'</div>'}</span>
              </code>
            </pre>
          </div>

          <p className='text-dev-dark-gray text-lg mb-8'>
            {
              "We're crafting a comprehensive learning platform for web development."
            }
            <br />
            {'Stay tuned for the launch!'}
          </p>

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

          <div className='mb-6'>
            <div className='flex justify-between text-dev-dark-gray font-mono text-sm mb-2'>
              <span>Development Progress</span>
              <span>20%</span>
            </div>
            <div className='w-full h-4 bg-dev-light-gray border-2 border-dev-dark-gray'>
              <div
                className='h-full bg-dev-yellow'
                style={{ width: '20%' }}
              ></div>
            </div>
          </div>

          <p className='text-dev-medium-gray text-sm'>
            Expected launch: May 2025
          </p>
        </div>

        <div className='flex justify-center gap-4 mb-8'>
          <Link
            href='https://www.linkedin.com/in/achraf-el-ghazi-16b8bb2a7/'
            target='_blank'
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
            href='https://github.com/AchrafELGhazi'
            target='_blank'
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
        </div>

        {/* Footer */}
        <div className='text-center text-dev-medium-gray'>
          <p>&copy; {new Date().getFullYear()} DevLore. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
