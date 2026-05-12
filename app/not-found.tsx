'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', textAlign: 'center',
      fontFamily: '"Geist", ui-sans-serif, sans-serif',
      padding: '0 24px',
    }}>
      <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5A5A55', marginBottom: 24 }}>
        404 — Page not found
      </div>
      <h1 style={{ fontWeight: 500, fontSize: 'clamp(48px,8vw,120px)', letterSpacing: '-0.04em', lineHeight: 0.92, margin: '0 0 32px' }}>
        Lost in the cloud.
      </h1>
      <Link href="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '14px 26px', background: '#0A0A0A', color: '#fff',
        borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: 'none',
      }}>
        Back home ↗
      </Link>
    </div>
  );
}
