import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const myFont = localFont({
  src: '../public/fonts/CODELight.otf',
});

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
      <html lang="en" className="scroll-smooth bg-primary">
        <body className={myFont.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
