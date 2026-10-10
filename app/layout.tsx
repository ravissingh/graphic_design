import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.northstarstudio.design'),
  title: {
    default: 'Northstar Studio | Graphic Design & Brand Strategy',
    template: '%s | Northstar Studio',
  },
  description:
    'Creative graphic design studio crafting bold brands, digital experiences, and compelling marketing visuals for growing businesses.',
  keywords: ['graphic design', 'branding', 'web design', 'creative studio', 'marketing visuals'],
  openGraph: {
    title: 'Northstar Studio | Graphic Design & Brand Strategy',
    description:
      'Helping founders and brands stand out with strategic design systems, marketing assets, and polished digital experiences.',
    url: 'https://www.northstarstudio.design',
    siteName: 'Northstar Studio',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
