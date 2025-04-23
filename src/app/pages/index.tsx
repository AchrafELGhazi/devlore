import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevLore | Web Development Journey</title>
        <meta
          name='description'
          content='A complete guide to web development from HTML to React and Node.js'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoSquare}>
            <span className={styles.logoText}>Dev</span>
            <span className={styles.logoTextAccent}>Lore</span>
          </div>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href='#about'>About</Link>
            </li>
            <li>
              <Link href='#tracks'>Learning Tracks</Link>
            </li>
            <li>
              <Link href='#features'>Features</Link>
            </li>
            <li>
              <Link href='#start'>Get Started</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.titleTop}>Discover the Art of</span>
              <span className={styles.titleMain}>Web Development</span>
            </h1>
            <p className={styles.description}>
              From HTML basics to advanced React and Node.js. A complete journey
              through modern web development.
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.primaryButton}>
                Start Your Journey
              </button>
              <button className={styles.secondaryButton}>Explore Tracks</button>
            </div>
          </div>
          <div className={styles.heroGraphic}>
            <div className={styles.codeBlock}>
              <pre>
                <code>
                  <span className={styles.htmlTag}>{'<html>'}</span>
                  <br />
                  {'  '}
                  <span className={styles.htmlTag}>{'<head>'}</span>
                  <br />
                  {'    '}
                  <span className={styles.htmlTag}>{'<title>'}</span>Welcome to
                  DevLore<span className={styles.htmlTag}>{'</title>'}</span>
                  <br />
                  {'  '}
                  <span className={styles.htmlTag}>{'</head>'}</span>
                  <br />
                  {'  '}
                  <span className={styles.htmlTag}>{'<body>'}</span>
                  <br />
                  {'    '}
                  <span className={styles.htmlTag}>{'<h1>'}</span>Hello,
                  Developer!<span className={styles.htmlTag}>{'</h1>'}</span>
                  <br />
                  {'    '}
                  <span className={styles.htmlTag}>{'<p>'}</span>Your journey
                  begins here.<span className={styles.htmlTag}>{'</p>'}</span>
                  <br />
                  {'  '}
                  <span className={styles.htmlTag}>{'</body>'}</span>
                  <br />
                  <span className={styles.htmlTag}>{'</html>'}</span>
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section id='about' className={styles.section}>
          <h2 className={styles.sectionTitle}>About DevLore</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Comprehensive Learning</h3>
              <p>
                From the fundamental building blocks to advanced concepts,
                DevLore covers it all in a structured, easy-to-follow format.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Practical Examples</h3>
              <p>
                Learn by doing with real-world examples and mini-projects that
                reinforce concepts and build your portfolio.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Progressive Path</h3>
              <p>
                Follow a carefully designed learning path that builds complexity
                gradually, ensuring you're never overwhelmed.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Community Driven</h3>
              <p>
                Join a community of learners and contributors who share your
                passion for web development.
              </p>
            </div>
          </div>
        </section>

        <section id='tracks' className={styles.section}>
          <h2 className={styles.sectionTitle}>Learning Tracks</h2>
          <div className={styles.tracksGrid}>
            <div className={styles.trackCard}>
              <div className={styles.trackIcon}>HTML</div>
              <h3>HTML Fundamentals</h3>
              <p>Structure, semantics, and the backbone of the web.</p>
              <Link href='/tracks/html' className={styles.trackLink}>
                Explore &rarr;
              </Link>
            </div>
            <div className={styles.trackCard}>
              <div className={styles.trackIcon}>CSS</div>
              <h3>CSS & Design</h3>
              <p>Styling, layouts, and visual enhancement.</p>
              <Link href='/tracks/css' className={styles.trackLink}>
                Explore &rarr;
              </Link>
            </div>
            <div className={styles.trackCard}>
              <div className={styles.trackIcon}>JS</div>
              <h3>JavaScript</h3>
              <p>Interactivity, DOM manipulation, and modern ES6+.</p>
              <Link href='/tracks/javascript' className={styles.trackLink}>
                Explore &rarr;
              </Link>
            </div>
            <div className={styles.trackCard}>
              <div className={styles.trackIcon}>React</div>
              <h3>React Framework</h3>
              <p>Components, state management, and modern UI development.</p>
              <Link href='/tracks/react' className={styles.trackLink}>
                Explore &rarr;
              </Link>
            </div>
            <div className={styles.trackCard}>
              <div className={styles.trackIcon}>Node</div>
              <h3>Node.js & Express</h3>
              <p>Server-side JavaScript, APIs, and backend development.</p>
              <Link href='/tracks/nodejs' className={styles.trackLink}>
                Explore &rarr;
              </Link>
            </div>
            <div className={styles.trackCard}>
              <div className={styles.trackIcon}>DB</div>
              <h3>Databases</h3>
              <p>SQL, NoSQL, and data management strategies.</p>
              <Link href='/tracks/databases' className={styles.trackLink}>
                Explore &rarr;
              </Link>
            </div>
          </div>
        </section>

        <section id='features' className={styles.section}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <div className={styles.featuresContainer}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>📝</div>
              <h3>Interactive Code Examples</h3>
              <p>
                Try out code examples directly in your browser without any
                setup.
              </p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🔍</div>
              <h3>Search Functionality</h3>
              <p>Quickly find the topics and concepts you're interested in.</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>📚</div>
              <h3>Downloadable Resources</h3>
              <p>Cheat sheets and reference guides for offline use.</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🏆</div>
              <h3>Progress Tracking</h3>
              <p>Track your learning journey and celebrate your milestones.</p>
            </div>
          </div>
        </section>

        <section id='start' className={styles.cta}>
          <h2>Ready to Begin Your Web Development Journey?</h2>
          <p>
            Join thousands of developers learning with DevLore and build the
            skills to create amazing web experiences.
          </p>
          <button className={styles.primaryButton}>Start Learning Now</button>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <div className={styles.logoSquare}>
            <span className={styles.logoText}>Dev</span>
            <span className={styles.logoTextAccent}>Lore</span>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinkSection}>
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href='/docs'>Documentation</Link>
              </li>
              <li>
                <Link href='/tutorials'>Tutorials</Link>
              </li>
              <li>
                <Link href='/examples'>Examples</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinkSection}>
            <h4>Community</h4>
            <ul>
              <li>
                <Link href='/discord'>Discord</Link>
              </li>
              <li>
                <Link href='/github'>GitHub</Link>
              </li>
              <li>
                <Link href='/twitter'>Twitter</Link>
              </li>
              <li>
                <Link href='/contribute'>Contribute</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinkSection}>
            <h4>About</h4>
            <ul>
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
              <li>
                <Link href='/privacy'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/terms'>Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} DevLore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
