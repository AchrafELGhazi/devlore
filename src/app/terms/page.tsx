import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsOfService() {
  return (
    <div className='min-h-screen bg-dev-white text-dev-off-black flex flex-col'>
      <Header />

      <main className='flex-grow py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-8 text-center'>
            <h1 className='text-4xl font-bold font-mono text-dev-dark-gray mb-4'>
              Terms of Service
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
                Welcome to DevLore. Please read these Terms of Service ("Terms",
                "Terms of Service") carefully before using the DevLore website
                operated by our team.
              </p>

              <p className='mb-6'>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users, and others who access or use the
                Service.
              </p>

              <p className='mb-6'>
                By accessing or using the Service, you agree to be bound by
                these Terms. If you disagree with any part of the terms, then
                you may not access the Service.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                1. Content
              </h2>
              <p className='mb-3'>
                Our Service allows you to access educational content related to
                web development. The content on DevLore, including text,
                graphics, code, examples, and other materials ("Content"), is
                owned by DevLore and is protected by copyright, trademark, and
                other intellectual property laws.
              </p>
              <p className='mb-6'>
                You may view and use our Content for personal, non-commercial
                purposes. Redistribution, reproduction, or commercial use of any
                Content without explicit permission is prohibited.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                2. Accounts
              </h2>
              <p className='mb-3'>
                When you create an account with us, you must provide information
                that is accurate, complete, and current at all times. Failure to
                do so constitutes a breach of the Terms, which may result in
                immediate termination of your account on our Service.
              </p>
              <p className='mb-6'>
                You are responsible for safeguarding the password that you use
                to access the Service and for any activities or actions under
                your password, whether your password is with our Service or a
                third-party service.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                3. User Content
              </h2>
              <p className='mb-3'>
                Our Service may allow you to post, submit, or share content such
                as comments, feedback, and project submissions ("User Content").
                You retain any rights to your User Content, but by posting it,
                you grant us a worldwide, non-exclusive, royalty-free license to
                use, reproduce, adapt, publish, and distribute such content.
              </p>
              <p className='mb-6'>
                You represent and warrant that your User Content doesn't violate
                any rights of third parties and complies with our content
                guidelines.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                4. Educational Purpose
              </h2>
              <p className='mb-6'>
                DevLore is an educational platform. The code, examples, and
                other materials provided are for learning purposes only. While
                we strive for accuracy and best practices, we don't guarantee
                that all content is error-free or suitable for production
                environments.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                5. Links To Other Websites
              </h2>
              <p className='mb-6'>
                Our Service may contain links to third-party websites or
                services that are not owned or controlled by DevLore. We have no
                control over, and assume no responsibility for, the content,
                privacy policies, or practices of any third-party websites or
                services.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                6. Termination
              </h2>
              <p className='mb-6'>
                We may terminate or suspend your account immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms. Upon termination,
                your right to use the Service will immediately cease.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                7. Limitation Of Liability
              </h2>
              <p className='mb-6'>
                In no event shall DevLore, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                access to or use of or inability to access or use the Service.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                8. Changes
              </h2>
              <p className='mb-6'>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material we
                will try to provide at least 30 days notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>

              <h2 className='text-2xl font-mono text-dev-brown mt-8 mb-4'>
                9. Contact Us
              </h2>
              <p className='mb-6'>
                If you have any questions about these Terms, please contact us
                at <span className='text-dev-brown'>support@devlore.com</span>.
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
