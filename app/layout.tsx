import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// Configure Roboto font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://acecloud.ca'),
  title: {
    default: 'AceCloud | Award-Winning Web Design Agency | Toronto, Canada',
    template: '%s | AceCloud'
  },
  description: 'Expert web design, SEO, and brand design services to boost your business\'s online presence. Get a custom website that delivers results today!',
  keywords: ['Digital Solutions', 'Web Development', 'Cloud Services', 'Innovation', 'Technology'],
  authors: [{ name: 'AceCloud' }],
  creator: 'AceCloud',
  publisher: 'AceCloud',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://acecloud.ca',
    title: 'AceCloud | Award-Winning Web Design Agency | Toronto, Canada',
    description: 'Expert web design, SEO, and brand design services to boost your business\'s online presence. Get a custom website that delivers results today!',
    siteName: 'AceCloud',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AceCloud',
    description: 'Elevating digital experiences through innovation and expertise.',
    creator: '@acecloud',
  },
  verification: {
    google: 'your-google-verification-code',
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
      <body className={roboto.className}>
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}