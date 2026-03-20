import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Dayu Dayusman | Backend & Fullstack Developer',
  description: 'Personal portfolio of Dayu Dayusman Tardian, specializing in Backend and Fullstack development.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="bg-[#F5F5F5] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}
