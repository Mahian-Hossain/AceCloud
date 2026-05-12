'use client';

import { useEffect, useRef } from 'react';

const metrics = [
  ['120', '+', 'Brands shipped from MVP to scale'],
  ['48h', '', 'Median strategy turnaround'],
  ['3.4', 'x', 'Average post-launch conversion lift'],
  ['09', '', 'Engineers, designers & strategists'],
] as const;

const logos = [
  'Northwind', 'Halycon', 'Fieldnotes', 'Atlas Foundry',
  'Mercato', 'Lumen Bio', 'Parallel', 'Outset',
  'Northwind', 'Halycon', 'Fieldnotes', 'Atlas Foundry',
  'Mercato', 'Lumen Bio', 'Parallel', 'Outset',
];

export default function TrustSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="ac-trust" ref={ref}>
      <div className="ac-container">
        <div className="trust-head">
          {metrics.map(([n, sup, label], i) => (
            <div key={i} className={`metric reveal reveal-d-${i}`}>
              <div className="num">
                <span>{n}</span>
                {sup && <sup>{sup}</sup>}
              </div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="ac-marquee">
        <div className="ac-marquee-track">
          {logos.map((l, i) => (
            <span key={i} className="item">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
