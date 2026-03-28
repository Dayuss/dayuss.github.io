import type {Metadata} from 'next';
import Script from 'next/script';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;


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
        {measurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}');`}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
