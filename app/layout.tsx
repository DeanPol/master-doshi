import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StoreProvider } from '@/store/StoreProvider';

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
    <StoreProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
