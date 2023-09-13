import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/PageWrapper/Header';
import Footer from './components/PageWrapper/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Master Doshi',
  description: 'Japanese Verb Quiz App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
