import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-dev-white text-dev-off-black flex flex-col items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
        <div className='flex justify-center mb-8'>
          <Link href='/' className='flex items-center'>
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
                  Let&apos;s get you back on track.
                </span>
                <span className='text-dev-yellow'>{'</suggestion>'}</span>
              </div>
              <span className='text-dev-yellow'>{'</error>'}</span>
            </div>
          </div>

          <p className='text-dev-dark-gray text-lg mb-8'>
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
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
