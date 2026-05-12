'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Loader from '@/components/sections/Loader';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [navReady, setNavReady] = useState(!isHome);

  return (
    <>
      {isHome && !navReady && <Loader onDone={() => setNavReady(true)} />}
      <Navbar ready={navReady} />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}
