import type { Metadata, Viewport } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Chaitanya Khanna | Software Developer',
  description: "Personal website of Chaitanya Khanna - Software Developer",
  icons: {
    icon: '/favicon.ico?v=2',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
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
