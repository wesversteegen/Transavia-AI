import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Flight Inspiration | Find Your Perfect Destination',
  description: 'Discover amazing flight deals to destinations across Europe based on your preferences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
