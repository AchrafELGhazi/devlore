import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-dev-white text-dev-off-black flex flex-col'>
      <Header />

      <main className='flex-grow py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-8 text-center'>
            <h1 className='text-4xl font-bold font-mono text-dev-dark-gray mb-4'>
              Privacy Policy
            </h1>
            <p className='text-dev-medium-gray'>
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>

          <div className='bg-dev-off-white border-2 border-dev-dark-gray p-8 shadow-[6px_6px_0_#8A6534] mb-8'>
            <div className='prose max-w-none text-dev-dark-gray'>
              <p className='mb-6'>
                At DevLore, we respect your privacy and are committed to
                protecting your personal data. This Privacy Policy explains how
                we collect, use, and safeguard your information when you visit
                our website.
              </p>

              <p className='mb-6'>
                Please read this Privacy Policy carefully. By using our website,
                you consent to the practices described in this policy.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                1. Information We Collect
              </h2>

              <h3 className='text-xl font-mono text-dev-brown mt-6 mb-3'>
                1.1 Personal Information
              </h3>
              <p className='mb-3'>
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className='list-disc pl-6 mb-6 space-y-2'>
                <li>Create an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us</li>
                <li>Participate in forums or discussions</li>
                <li>Submit projects or assignments</li>
              </ul>
              <p className='mb-6'>
                This information may include your name, email address, and any
                other details you choose to provide.
              </p>

              <h3 className='text-xl font-mono text-dev-brown mt-6 mb-3'>
                1.2 Usage Data
              </h3>
              <p className='mb-6'>
                We automatically collect certain information when you visit our
                website, including:
              </p>
              <ul className='list-disc pl-6 mb-6 space-y-2'>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Device information</li>
                <li>Referring source</li>
                <li>Operating system</li>
              </ul>

              <h3 className='text-xl font-mono text-dev-brown mt-6 mb-3'>
                1.3 Cookies
              </h3>
              <p className='mb-6'>
                We use cookies and similar tracking technologies to enhance your
                experience on our website, analyze site usage, and assist in our
                marketing efforts. You can control cookies through your browser
                settings.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                2. How We Use Your Information
              </h2>
              <p className='mb-3'>We use the information we collect to:</p>
              <ul className='list-disc pl-6 mb-6 space-y-2'>
                <li>Provide, maintain, and improve our services</li>
                <li>
                  Process account registration and track learning progress
                </li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send you updates, newsletters, and educational content</li>
                <li>
                  Personalize your experience and deliver content relevant to
                  your interests
                </li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>
                  Protect against unauthorized access and illegal activity
                </li>
              </ul>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                3. Information Sharing
              </h2>
              <p className='mb-6'>
                We do not sell, rent, or trade your personal information to
                third parties for marketing purposes. We may share information
                in the following circumstances:
              </p>
              <ul className='list-disc pl-6 mb-6 space-y-2'>
                <li>With service providers who help us operate our website</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>
                  In connection with a business transfer, merger, or acquisition
                </li>
              </ul>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                4. Data Security
              </h2>
              <p className='mb-6'>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the Internet or electronic storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                5. Your Rights
              </h2>
              <p className='mb-3'>
                Depending on your location, you may have the following rights
                regarding your personal data:
              </p>
              <ul className='list-disc pl-6 mb-6 space-y-2'>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className='mb-6'>
                To exercise these rights, please contact us using the
                information provided in the "Contact Us" section.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                6. Children's Privacy
              </h2>
              <p className='mb-6'>
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If we become aware that we have collected
                personal information from a child under 13, we will take steps
                to delete that information.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                7. Third-Party Links
              </h2>
              <p className='mb-6'>
                Our website may contain links to third-party websites, plugins,
                and applications. Clicking on those links may allow third
                parties to collect or share data about you. We do not control
                these third-party websites and are not responsible for their
                privacy practices.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                8. Changes to This Privacy Policy
              </h2>
              <p className='mb-6'>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                9. Contact Us
              </h2>
              <p className='mb-6'>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at{' '}
                <span className='text-dev-brown'>a.elghazi@aui.ma</span>.
              </p>
            </div>
          </div>

          <div className='text-center'>
            <Link
              href='/'
              className='inline-block bg-dev-yellow text-dev-black border-2 border-dev-brown font-bold py-3 px-6 transition-all duration-300 hover:bg-dev-dark-yellow hover:shadow-[3px_3px_0_#644726] font-mono'
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
