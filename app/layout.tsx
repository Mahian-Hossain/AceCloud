import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "./client-shell";

export const metadata: Metadata = {
  metadataBase: new URL('https://acecloud.ca'),
  title: {
    default: 'AceCloud — Digital infrastructure for ambitious brands',
    template: '%s | AceCloud'
  },
  description: 'AceCloud is a full-stack digital partner for ambitious brands — design, engineering and growth infrastructure under one roof. Toronto, Canada.',
  keywords: ['Web Design', 'SEO', 'Brand Design', 'Digital Agency', 'Toronto', 'Full-Stack'],
  authors: [{ name: 'AceCloud' }],
  creator: 'AceCloud',
  publisher: 'AceCloud',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://acecloud.ca',
    title: 'AceCloud — Digital infrastructure for ambitious brands',
    description: 'Full-stack design, engineering and growth infrastructure. Toronto, Canada.',
    siteName: 'AceCloud',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AceCloud',
    description: 'Full-stack digital partner for ambitious brands.',
    creator: '@acecloud',
  },
  alternates: {
    canonical: 'https://acecloud.ca',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
