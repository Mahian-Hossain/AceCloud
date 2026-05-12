'use client';

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      background: '#fff',
      position: 'fixed',
      inset: 0,
      zIndex: 9998,
    }}>
      <div style={{
        fontFamily: '"Geist", ui-sans-serif, sans-serif',
        fontWeight: 500,
        fontSize: 'clamp(32px, 5vw, 56px)',
        letterSpacing: '-0.04em',
        color: '#0A0A0A',
        animation: 'ac-pulse 1.2s ease-in-out infinite',
      }}>
        acecloud
      </div>
    </div>
  );
}
