import type {Metadata} from 'next';
import {Syne, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';
import {SchemaOrg} from '@/components/schema-org';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['700', '800'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thunder-fitness-gym.vercel.app'),
  title: 'Thunder Fitness Gym Sultanpalya | Best Gym & Personal Training in Bengaluru',
  description: 'Join Thunder Fitness Gym Sultanpalya, Bengaluru for strength training, weight loss, bodybuilding, cardio, personal training, nutrition plans, and 21 Days Body Transformation programs.',
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'ZS7Ji6uzAvCK4ZWV-kfNVwciVcpp0w9o9JPaGPKRc4Q',
  },
  openGraph: {
    url: 'https://thunder-fitness-gym.vercel.app',
    title: 'Thunder Fitness Gym Sultanpalya | Best Gym & Personal Training in Bengaluru',
    description: 'Join Thunder Fitness Gym Sultanpalya, Bengaluru for strength training, weight loss, bodybuilding, cardio, personal training, nutrition plans, and 21 Days Body Transformation programs.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thunder Fitness Gym Sultanpalya | Best Gym & Personal Training in Bengaluru',
    description: 'Join Thunder Fitness Gym Sultanpalya, Bengaluru for strength training, weight loss, bodybuilding, cardio, personal training, nutrition plans, and 21 Days Body Transformation programs.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${syne.variable} ${plusJakarta.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}>
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
