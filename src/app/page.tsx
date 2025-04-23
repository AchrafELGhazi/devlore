import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen bg-dev-white text-dev-off-black flex flex-col'>
      <main className='flex-grow'>
        <section className='min-h-[80vh] flex items-center bg-dev-off-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-16'>
            <div className='flex-1'>
              <h1 className='mb-8'>
                <span className='block text-dev-brown text-xl mb-2'>
                  Discover the Art of
                </span>
                <span className='block text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-dev-dark-gray'>
                  Web Development
                </span>
              </h1>

              <p className='text-dev-dark-gray text-lg mb-8 max-w-lg'>
                From HTML basics to advanced React and Node.js. A complete
                journey through modern web development.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href='#tracks'
                  className='retro-button-primary text-center'
                >
                  Start Your Journey
                </Link>
                <Link
                  href='#tracks'
                  className='retro-button-secondary text-center'
                >
                  Explore Tracks
                </Link>
              </div>
            </div>

            <div className='flex-1 flex justify-center items-center'>
              <div className='code-block'>
                <pre>
                  <code>
                    <span className='html-tag'>{'<html>'}</span>
                    <br />
                    {'  '}
                    <span className='html-tag'>{'<head>'}</span>
                    <br />
                    {'    '}
                    <span className='html-tag'>{'<title>'}</span>Welcome to
                    DevLore
                    <span className='html-tag'>{'</title>'}</span>
                    <br />
                    {'  '}
                    <span className='html-tag'>{'</head>'}</span>
                    <br />
                    {'  '}
                    <span className='html-tag'>{'<body>'}</span>
                    <br />
                    {'    '}
                    <span className='html-tag'>{'<h1>'}</span>Hello, Developer!
                    <span className='html-tag'>{'</h1>'}</span>
                    <br />
                    {'    '}
                    <span className='html-tag'>{'<p>'}</span>Your journey begins
                    here.
                    <span className='html-tag'>{'</p>'}</span>
                    <br />
                    {'  '}
                    <span className='html-tag'>{'</body>'}</span>
                    <br />
                    <span className='html-tag'>{'</html>'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='py-16 bg-dev-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='section-title text-3xl text-center mb-12 mx-auto'>
              About DevLore
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='retro-card'>
                <h3 className='text-dev-brown font-mono text-lg mb-4'>
                  Comprehensive Learning
                </h3>
                <p className='text-dev-dark-gray'>
                  From the fundamental building blocks to advanced concepts,
                  DevLore covers it all in a structured, easy-to-follow format.
                </p>
              </div>

              <div className='retro-card'>
                <h3 className='text-dev-brown font-mono text-lg mb-4'>
                  Practical Examples
                </h3>
                <p className='text-dev-dark-gray'>
                  Learn by doing with real-world examples and mini-projects that
                  reinforce concepts and build your portfolio.
                </p>
              </div>

              <div className='retro-card'>
                <h3 className='text-dev-brown font-mono text-lg mb-4'>
                  Progressive Path
                </h3>
                <p className='text-dev-dark-gray'>
                  Follow a carefully designed learning path that builds
                  complexity gradually, ensuring you&apos;re never overwhelmed.
                </p>
              </div>

              <div className='retro-card'>
                <h3 className='text-dev-brown font-mono text-lg mb-4'>
                  Community Driven
                </h3>
                <p className='text-dev-dark-gray'>
                  Join a community of learners and contributors who share your
                  passion for web development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section id='tracks' className='py-16 bg-dev-off-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='section-title text-3xl text-center mb-12 mx-auto'>
              Learning Tracks
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='retro-card'>
                <div className='track-icon'>HTML</div>
                <h3 className='text-dev-brown font-mono text-lg mb-2'>
                  HTML Fundamentals
                </h3>
                <p className='text-dev-dark-gray mb-4'>
                  Structure, semantics, and the backbone of the web.
                </p>
                <Link
                  href='/tracks/html'
                  className='text-dev-brown hover:underline font-medium'
                >
                  Explore &rarr;
                </Link>
              </div>

              <div className='retro-card'>
                <div className='track-icon'>CSS</div>
                <h3 className='text-dev-brown font-mono text-lg mb-2'>
                  CSS & Design
                </h3>
                <p className='text-dev-dark-gray mb-4'>
                  Styling, layouts, and visual enhancement.
                </p>
                <Link
                  href='/tracks/css'
                  className='text-dev-brown hover:underline font-medium'
                >
                  Explore &rarr;
                </Link>
              </div>

              <div className='retro-card'>
                <div className='track-icon'>JS</div>
                <h3 className='text-dev-brown font-mono text-lg mb-2'>
                  JavaScript
                </h3>
                <p className='text-dev-dark-gray mb-4'>
                  Interactivity, DOM manipulation, and modern ES6+.
                </p>
                <Link
                  href='/tracks/javascript'
                  className='text-dev-brown hover:underline font-medium'
                >
                  Explore &rarr;
                </Link>
              </div>

              <div className='retro-card'>
                <div className='track-icon'>React</div>
                <h3 className='text-dev-brown font-mono text-lg mb-2'>
                  React Framework
                </h3>
                <p className='text-dev-dark-gray mb-4'>
                  Components, state management, and modern UI development.
                </p>
                <Link
                  href='/tracks/react'
                  className='text-dev-brown hover:underline font-medium'
                >
                  Explore &rarr;
                </Link>
              </div>

              <div className='retro-card'>
                <div className='track-icon'>Node</div>
                <h3 className='text-dev-brown font-mono text-lg mb-2'>
                  Node.js & Express
                </h3>
                <p className='text-dev-dark-gray mb-4'>
                  Server-side JavaScript, APIs, and backend development.
                </p>
                <Link
                  href='/tracks/nodejs'
                  className='text-dev-brown hover:underline font-medium'
                >
                  Explore &rarr;
                </Link>
              </div>

              <div className='retro-card'>
                <div className='track-icon'>DB</div>
                <h3 className='text-dev-brown font-mono text-lg mb-2'>
                  Databases
                </h3>
                <p className='text-dev-dark-gray mb-4'>
                  SQL, NoSQL, and data management strategies.
                </p>
                <Link
                  href='/tracks/databases'
                  className='text-dev-brown hover:underline font-medium'
                >
                  Explore &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id='features' className='py-16 bg-dev-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='section-title text-3xl text-center mb-12 mx-auto'>
              Features
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center'>
              <div className='flex flex-col items-center'>
                <div className='bg-dev-light-gray w-16 h-16 flex justify-center items-center mb-4 text-2xl border-2 border-dev-dark-gray'>
                  📝
                </div>
                <h3 className='text-dev-brown font-mono text-lg mb-2'>
                  Interactive Code Examples
                </h3>
                <p className='text-dev-dark-gray'>
                  Try out code examples directly in your browser without any
                  setup.
                </p>
              </div>

              <div className='flex flex-col items-center'>
                <div className='bg-dev-light-gray w-16 h-16 flex justify-center items-center mb-4 text-2xl border-2 border-dev-dark-gray'>
                  🔍
                </div>
                <h3 className='text-dev-brown font-mono text-lg mb-2'>
                  Search Functionality
                </h3>
                <p className='text-dev-dark-gray'>
                  Quickly find the topics and concepts you&apos;re interested
                  in.
                </p>
              </div>

              <div className='flex flex-col items-center'>
                <div className='bg-dev-light-gray w-16 h-16 flex justify-center items-center mb-4 text-2xl border-2 border-dev-dark-gray'>
                  📚
                </div>
                <h3 className='text-dev-brown font-mono text-lg mb-2'>
                  Downloadable Resources
                </h3>
                <p className='text-dev-dark-gray'>
                  Cheat sheets and reference guides for offline use.
                </p>
              </div>

              <div className='flex flex-col items-center'>
                <div className='bg-dev-light-gray w-16 h-16 flex justify-center items-center mb-4 text-2xl border-2 border-dev-dark-gray'>
                  🏆
                </div>
                <h3 className='text-dev-brown font-mono text-lg mb-2'>
                  Progress Tracking
                </h3>
                <p className='text-dev-dark-gray'>
                  Track your learning journey and celebrate your milestones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id='start'
          className='py-16 bg-dev-yellow border-t-2 border-b-2 border-dev-brown'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-mono text-dev-brown mb-6'>
              Ready to Begin Your Web Development Journey?
            </h2>
            <p className='text-dev-dark-gray text-lg mb-8 max-w-2xl mx-auto'>
              Join thousands of developers learning with DevLore and build the
              skills to create amazing web experiences.
            </p>
            <Link
              href='/tracks'
              className='inline-block bg-dev-white text-dev-brown border-2 border-dev-brown font-bold py-4 px-8 text-lg transition-all duration-300 hover:bg-dev-light-gray hover:shadow-[3px_3px_0_#644726] font-mono'
            >
              Start Learning Now
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
