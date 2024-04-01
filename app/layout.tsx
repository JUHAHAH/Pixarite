import type { Metadata } from 'next';
import { urbanist } from './fonts';
import './globals.css';
import { ClerkProvider, SignIn } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Pixarite',
  description: 'Basic test application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth bg-primary font-light">
        <body className={urbanist.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
