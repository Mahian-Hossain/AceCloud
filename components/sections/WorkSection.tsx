'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

function VizDark() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <text x="40" y="180" fontFamily="Geist, sans-serif" fontSize="92" fontWeight="500" fill="white" letterSpacing="-3">Halycon</text>
      <text x="40" y="220" fontFamily="Geist Mono, monospace" fontSize="11" fill="rgba(255,255,255,0.55)" letterSpacing="2">FINANCIAL PLATFORM · 2025</text>
      <line x1="40" y1="280" x2="560" y2="280" stroke="rgba(255,255,255,0.15)" />
      <rect x="40" y="300" width="100" height="44" rx="22" fill="#E85D24" />
      <rect x="160" y="300" width="80" height="44" rx="22" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
    </svg>
  );
}

function VizBlue() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <rect x="40" y="80" width="520" height="240" rx="20" fill="white" stroke="rgba(0,0,0,0.06)" />
      <rect x="60" y="100" width="180" height="14" rx="7" fill="#C8DCF5" />
      <rect x="60" y="124" width="120" height="10" rx="5" fill="#EBF2FC" />
      <rect x="60" y="160" width="480" height="80" rx="10" fill="url(#gb)" />
      <defs><linearGradient id="gb" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#EBF2FC" /><stop offset="1" stopColor="#C8DCF5" /></linearGradient></defs>
      <circle cx="500" cy="120" r="22" fill="#5A90C8" />
      <rect x="60" y="260" width="100" height="36" rx="18" fill="#0A0A0A" />
      <rect x="180" y="260" width="80" height="36" rx="18" fill="white" stroke="rgba(0,0,0,0.1)" />
    </svg>
  );
}

function VizType() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <text x="40" y="240" fontFamily="Geist, sans-serif" fontSize="160" fontWeight="500" fill="#0A0A0A" letterSpacing="-6">FN.</text>
      <rect x="320" y="120" width="220" height="160" rx="14" fill="white" stroke="rgba(0,0,0,0.08)" />
      <rect x="340" y="140" width="60" height="60" rx="8" fill="#7BB4E8" />
      <rect x="340" y="220" width="120" height="10" rx="5" fill="#0A0A0A" />
      <rect x="340" y="240" width="80" height="8" rx="4" fill="#A3A3A0" />
    </svg>
  );
}

function VizWarm() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <rect x="60" y="60" width="480" height="280" rx="14" fill="white" stroke="rgba(0,0,0,0.06)" />
      <rect x="60" y="60" width="480" height="36" rx="14" fill="#F6F5F1" />
      <circle cx="80" cy="78" r="4" fill="#DEDDD6" />
      <circle cx="92" cy="78" r="4" fill="#DEDDD6" />
      <circle cx="104" cy="78" r="4" fill="#DEDDD6" />
      <text x="84" y="160" fontFamily="Geist, sans-serif" fontSize="40" fontWeight="500" fill="#0A0A0A" letterSpacing="-1.5">Mercato</text>
      <text x="84" y="190" fontFamily="Geist Mono, monospace" fontSize="11" fill="#56564F" letterSpacing="1.2">ECOMMERCE · D2C</text>
      <rect x="84" y="220" width="160" height="100" rx="8" fill="#F2EBE0" />
      <rect x="256" y="220" width="160" height="100" rx="8" fill="#E8DDD0" />
      <rect x="428" y="220" width="100" height="100" rx="8" fill="#0A0A0A" />
    </svg>
  );
}

function VizChart() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <text x="40" y="80" fontFamily="Geist Mono, monospace" fontSize="11" fill="#56564F" letterSpacing="1.5">+312% ORGANIC TRAFFIC · 6 MO</text>
      <path d="M40 320 L120 280 L200 290 L280 220 L360 200 L440 140 L520 100 L560 80" stroke="#0A0A0A" strokeWidth="2" fill="none" />
      <path d="M40 320 L120 280 L200 290 L280 220 L360 200 L440 140 L520 100 L560 80 L560 360 L40 360 Z" fill="#C8DCF5" opacity="0.6" />
      <circle cx="560" cy="80" r="6" fill="#5A90C8" />
      <line x1="40" y1="360" x2="560" y2="360" stroke="#DEDDD6" />
      <text x="40" y="120" fontFamily="Geist, sans-serif" fontSize="48" fontWeight="500" fill="#0A0A0A" letterSpacing="-1.5">Atlas</text>
    </svg>
  );
}

function VizDeep() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <text x="40" y="220" fontFamily="Geist, sans-serif" fontSize="120" fontWeight="500" fill="white" letterSpacing="-4" fontStyle="italic">Lumen.</text>
      <text x="40" y="260" fontFamily="Geist Mono, monospace" fontSize="11" fill="rgba(255,255,255,0.5)" letterSpacing="2">BIOTECH · CATEGORY LAUNCH</text>
      <circle cx="500" cy="120" r="80" fill="none" stroke="rgba(255,255,255,0.2)" />
      <circle cx="500" cy="120" r="50" fill="none" stroke="rgba(255,255,255,0.3)" />
      <circle cx="500" cy="120" r="20" fill="#E85D24" />
    </svg>
  );
}

const cards = [
  {
    col: 'wc-col-7', viz: 'wc-viz-2', Svg: VizDark,
    type: 'Platform', year: '2025',
    meta1: '01 — Halycon Capital', meta2: '→ +84% pipeline',
    title: "Re-platforming a fund’s public face.",
    href: '/projects',
  },
  {
    col: 'wc-col-5', viz: 'wc-viz-1', Svg: VizBlue,
    type: 'SaaS', year: '2025',
    meta1: '02 — Northwind', meta2: '→ Series B launch',
    title: 'An OS-style site for a serious DevOps tool.',
    href: '/projects',
  },
  {
    col: 'wc-col-4', viz: 'wc-viz-3', Svg: VizType,
    type: 'Identity', year: '2024',
    meta1: '03 — Fieldnotes', meta2: '→ Brand system',
    title: 'A patient, editorial brand world.',
    href: '/projects',
  },
  {
    col: 'wc-col-4', viz: 'wc-viz-4', Svg: VizWarm,
    type: 'D2C', year: '2025',
    meta1: '04 — Mercato', meta2: '→ +3.1× conv.',
    title: 'Commerce that earns the buy.',
    href: '/projects',
  },
  {
    col: 'wc-col-4', viz: 'wc-viz-6', Svg: VizDeep,
    type: 'Biotech', year: '2024',
    meta1: '05 — Lumen Bio', meta2: '→ Category launch',
    title: 'A category, defined.',
    href: '/projects',
  },
];

export default function WorkSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
    );
    el.querySelectorAll('.reveal').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="ac-container ac-section" id="work" ref={ref}>
      <div className="sect-head">
        <div className="sect-tag reveal">
          <span className="num">03</span>Selected work
        </div>
        <h2 className="h-1 reveal reveal-d-1">
          Brands we&apos;ve quietly shipped <span className="serif-italic">into</span> the next stage.
        </h2>
      </div>

      <div className="work-grid">
        {cards.map((c, i) => (
          <Link
            key={i}
            href={c.href}
            className={`work-card ${c.col} reveal reveal-d-${Math.min(i, 4)}`}
          >
            <div className="wc-visual">
              <div className={`wc-viz ${c.viz}`}>
                <c.Svg />
              </div>
            </div>
            <div className="wc-meta">
              <span className="wc-l">{c.meta1}</span>
              <span className="wc-l">{c.meta2}</span>
            </div>
            <div className="wc-title">
              <span>{c.title}</span>
              <span className="arr">↗</span>
            </div>
          </Link>
        ))}

        {/* Full-width atlas card */}
        <Link href="/projects" className="work-card wc-col-12 reveal">
          <div className="wc-visual" style={{ aspectRatio: '21/9' }}>
            <div className="wc-viz wc-viz-5">
              <VizChart />
            </div>
          </div>
          <div className="wc-meta">
            <span className="wc-l">06 — Atlas Foundry</span>
            <span className="wc-l">→ +312% organic / 6 mo</span>
          </div>
          <div className="wc-title">
            <span>Engineering organic growth into the foundation.</span>
            <span className="arr">↗</span>
          </div>
        </Link>
      </div>

      <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(48px,6vh,80px)' }}>
        <Link href="/projects" className="ac-btn ac-btn-ghost">
          <span>View all case studies</span>
          <span className="arr">↗</span>
        </Link>
      </div>
    </section>
  );
}
