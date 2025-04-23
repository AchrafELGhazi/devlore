import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-dev-white text-dev-off-black flex flex-col items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
        <div className='flex justify-center mb-8'>
          <Link href='/' className='flex items-center'>
            <div className='w-14 h-14 mr-3'>
              <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
                <rect
                  x='10'
                  y='10'
                  width='180'
                  height='180'
                  fill='#EEEEEE'
                  stroke='#8A6534'
                  strokeWidth='4'
                />
                <g fontFamily='monospace' fontWeight='bold' letterSpacing='-2'>
                  <text x='34' y='110' fontSize='42' fill='#444444'>
                    Dev
                  </text>
                  <text x='100' y='110' fontSize='42' fill='#8A6534'>
                    Lore
                  </text>
                </g>
                <g stroke='#8A6534' strokeWidth='2' fill='none'>
                  <path d='M30,40 L45,50 L30,60' />
                  <path d='M60,40 L45,50 L60,60' />
                  <path d='M140,40 C145,40 150,43 150,48 C150,53 145,55 140,55 C145,55 150,57 150,62 C150,67 145,70 140,70' />
                  <circle cx='165' cy='50' r='3' fill='#8A6534' />
                  <circle cx='165' cy='62' r='3' fill='#8A6534' />
                </g>
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

        <div className='bg-dev-off-white border-2 border-dev-dark-gray p-8 sm:p-12 text-center mb-8 shadow-[6px_6px_0_#8A6534]'>
          <h1 className='text-9xl font-bold font-mono text-dev-brown mb-6'>
            404
          </h1>
          <h2 className='text-2xl font-mono text-dev-dark-gray mb-8'>
            Page Not Found
          </h2>

          <div className='bg-dev-dark-gray text-dev-light-gray p-4 rounded font-mono text-sm mx-auto max-w-md text-left mb-8'>
            <div>
              <span className='text-dev-yellow'>{'<error>'}</span>
              <div className='ml-4'>
                <span className='text-dev-yellow'>{'<message>'}</span>
                <span className='text-dev-white'>
                  Oops! This page seems to be missing.
                </span>
                <span className='text-dev-yellow'>{'</message>'}</span>
              </div>
              <div className='ml-4'>
                <span className='text-dev-yellow'>{'<suggestion>'}</span>
                <span className='text-dev-white'>
                  Let's get you back on track.
                </span>
                <span className='text-dev-yellow'>{'</suggestion>'}</span>
              </div>
              <span className='text-dev-yellow'>{'</error>'}</span>
            </div>
          </div>

          <p className='text-dev-dark-gray text-lg mb-8'>
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/'
              className='bg-dev-yellow text-dev-black border-2 border-dev-brown font-bold py-3 px-6 transition-all duration-300 hover:bg-dev-dark-yellow hover:shadow-[3px_3px_0_#644726] font-mono'
            >
              Return Home
            </Link>
            <Link
              href='/tracks'
              className='bg-dev-white text-dev-brown border-2 border-dev-brown font-bold py-3 px-6 transition-all duration-300 hover:bg-dev-light-gray hover:shadow-[3px_3px_0_#644726] font-mono'
            >
              Explore Tracks
            </Link>
          </div>
        </div>

   
      </div>
    </div>
  );
}
