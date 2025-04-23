import Footer from '@/components/layout/Footer';
import Link from 'next/link';
// import Image from 'next/image';

export default function About() {
  return (
    <div className='min-h-screen bg-dev-white text-dev-off-black flex flex-col'>
      {/* Header */}
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
                  href='/'
                  className='text-dev-dark-gray font-medium py-2 px-4 border-2 border-transparent hover:text-dev-brown hover:border-dev-yellow transition-colors duration-300'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/tracks'
                  className='text-dev-dark-gray font-medium py-2 px-4 border-2 border-transparent hover:text-dev-brown hover:border-dev-yellow transition-colors duration-300'
                >
                  Learning Tracks
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-dev-dark-gray font-medium py-2 px-4 border-2 border-dev-yellow text-dev-brown transition-colors duration-300'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#contact'
                  className='bg-dev-yellow text-dev-black border-2 border-dev-brown font-bold py-2 px-4 transition-colors duration-300 hover:bg-dev-dark-yellow'
                >
                  Contact Us
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

      <main className='flex-grow'>
        {/* Hero Section */}
        <section className='bg-dev-off-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='text-4xl md:text-5xl font-bold font-mono text-dev-dark-gray mb-6'>
                About <span className='text-dev-brown'>DevLore</span>
              </h1>
              <p className='text-dev-dark-gray text-lg mb-8'>
                We're on a mission to make web development learning accessible,
                structured, and enjoyable for everyone.
              </p>
            </div>
          </div>
        </section>

        <section className='py-16 bg-dev-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div className='order-2 lg:order-1'>
                <h2 className='text-3xl font-mono text-dev-brown mb-6'>
                  Our Story
                </h2>
                <p className='text-dev-dark-gray mb-4'>
                  DevLore started as a personal mission — I wanted to create the
                  learning platform I wished I had when I was starting out. The
                  world of web development is powerful but chaotic, with endless
                  tutorials, buzzwords, and fragmented knowledge.
                </p>
                <p className='text-dev-dark-gray mb-4'>
                  In 2025, I brought DevLore to life with the goal of building a
                  space where aspiring developers could learn in a focused,
                  structured, and hands-on way. From HTML to full-stack
                  frameworks, everything is organized with purpose.
                </p>
                <p className='text-dev-dark-gray mb-4'>
                  My belief is simple: we learn best by building. That's why
                  DevLore is packed with real-world projects, exercises, and
                  interactive examples — everything you need to not just
                  understand code, but to use it with confidence.
                </p>
              </div>
              <div className='order-1 lg:order-2'>
                <div className='bg-dev-off-white border-2 border-dev-dark-gray p-6 shadow-[6px_6px_0_#8A6534] rotate-1'>
                  <div className='code-block'>
                    <pre>
                      <code>
                        <span className='html-tag'>
                          {'<div class="our-story">'}
                        </span>
                        <br />
                        {'  '}
                        <span className='html-tag'>{'<h1>'}</span>
                        DevLore Origin
                        <span className='html-tag'>{'</h1>'}</span>
                        <br />
                        {'  '}
                        <span className='html-tag'>{'<p>'}</span>
                        Built from passion, crafted for learners.
                        <span className='html-tag'>{'</p>'}</span>
                        <br />
                        {'  '}
                        <span className='html-tag'>{'<year>'}</span>
                        2025
                        <span className='html-tag'>{'</year>'}</span>
                        <br />
                        <span className='html-tag'>{'</div>'}</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 bg-dev-off-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-mono text-dev-brown mb-12 text-center'>
              Our Values
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='retro-card'>
                <h3 className='text-dev-brown font-mono text-lg mb-4'>
                  Clarity Over Chaos
                </h3>
                <p className='text-dev-dark-gray'>
                  DevLore is all about cutting through the noise. Every lesson
                  is part of a bigger roadmap designed to help you learn in the
                  right order, at the right pace.
                </p>
              </div>

              <div className='retro-card'>
                <h3 className='text-dev-brown font-mono text-lg mb-4'>
                  Build to Learn
                </h3>
                <p className='text-dev-dark-gray'>
                  You don’t learn by watching — you learn by doing. Every
                  concept is backed by exercises, projects, and challenges that
                  make the knowledge stick.
                </p>
              </div>

              <div className='retro-card'>
                <h3 className='text-dev-brown font-mono text-lg mb-4'>
                  Peer Power
                </h3>
                <p className='text-dev-dark-gray'>
                  DevLore isn’t just content — it’s a community. A place where
                  learners share progress, ask questions, and lift each other
                  up.
                </p>
              </div>

              <div className='retro-card'>
                <h3 className='text-dev-brown font-mono text-lg mb-4'>
                  Evolve Constantly
                </h3>
                <p className='text-dev-dark-gray'>
                  Web dev changes fast. DevLore adapts. We stay on the pulse of
                  trends and tools, so your learning always stays relevant.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 bg-dev-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-mono text-dev-brown mb-12 text-center'>
              Meet Our Team
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8'>
              <div className='flex flex-col items-center'>
                <div className='w-32 h-32 bg-dev-light-gray border-2 border-dev-dark-gray mb-4 overflow-hidden'>
                  <div className='w-full h-full flex items-center justify-center text-dev-medium-gray text-5xl'>
                    🧑‍💻
                  </div>
                </div>
                <h3 className='text-dev-brown font-mono text-lg mb-1'>
                  Achraf EL GHAZI
                </h3>
                <p className='text-dev-medium-gray mb-3 font-mono text-sm'>
                  Software Engineer & Educator
                </p>
                <p className='text-dev-dark-gray text-center text-sm'>
                  Passionate about making web development accessible for all,
                  Achraf blends modern tech with clear, structured guidance.
                  He’s the mind behind DevLore’s learning flow and design
                  philosophy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id='contact'
          className='py-16 bg-dev-yellow border-t-2 border-b-2 border-dev-brown'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto'>
              <h2 className='text-3xl font-mono text-dev-brown mb-6 text-center'>
                Get in Touch
              </h2>
              <p className='text-dev-dark-gray text-lg mb-8 text-center'>
                Have questions or suggestions? We'd love to hear from you!
              </p>

              <div className='bg-dev-white border-2 border-dev-dark-gray p-8 shadow-[6px_6px_0_#644726]'>
                <form className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-dev-dark-gray font-mono mb-2'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        id='name'
                        className='w-full border-2 border-dev-dark-gray p-3 bg-dev-off-white'
                        placeholder='Your name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-dev-dark-gray font-mono mb-2'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        className='w-full border-2 border-dev-dark-gray p-3 bg-dev-off-white'
                        placeholder='your.email@example.com'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-dev-dark-gray font-mono mb-2'
                    >
                      Subject
                    </label>
                    <input
                      type='text'
                      id='subject'
                      className='w-full border-2 border-dev-dark-gray p-3 bg-dev-off-white'
                      placeholder='What is this regarding?'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-dev-dark-gray font-mono mb-2'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      rows={6}
                      className='w-full border-2 border-dev-dark-gray p-3 bg-dev-off-white'
                      placeholder='Your message here...'
                    ></textarea>
                  </div>
                  <div className='text-right'>
                    <button
                      type='submit'
                      className='bg-dev-brown text-dev-white border-2 border-dev-dark-brown font-bold py-3 px-8 transition-all duration-300 hover:bg-dev-dark-brown hover:shadow-[3px_3px_0_#222222] font-mono'
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
