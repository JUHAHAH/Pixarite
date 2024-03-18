import localFont from 'next/font/local';
import { Inter, Urbanist } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const urbanist = Urbanist({
  weight: ['200', '400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const code = localFont({
  src: [
    {
      path: '../public/fonts/CODELight.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/CODEBold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
});
