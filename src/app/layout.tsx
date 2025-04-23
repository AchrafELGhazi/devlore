import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'DevLore | Web Development Journey',
  description:
    'A complete guide to web development from HTML to React and Node.js',
  icons: {
    icon: [
      { url: '/logo-dl.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },

    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
