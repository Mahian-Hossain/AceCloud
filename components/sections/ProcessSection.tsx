'use client';

import { useEffect, useRef } from 'react';

const steps = [
  { t: 'Diagnose', d: 'Audit, narrative interrogation, and a sharp written brief. Two weeks, no surprises.', w: 'Wk 01–02' },
  { t: 'Design', d: 'Identity, system, marketing site and product surfaces — designed in vertical slices.', w: 'Wk 03–06' },
  { t: 'Engineer', d: 'Next.js, headless CMS, edge infra. We ship behind a flag, then progressively reveal.', w: 'Wk 05–09' },
  { t: 'Compound', d: 'Performance, SEO and CRO baked in. We measure, iterate, and hand back a system.', w: 'Wk 10+' },
];

export default function ProcessSection() {
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
    <section className="ac-section" id="process" ref={ref}>
      <div className="ac-process">
        <div className="sect-head">
          <div className="sect-tag reveal">
            <span className="num">04</span>Process
          </div>
          <div>
            <h2 className="h-1 reveal reveal-d-1" style={{ maxWidth: '14ch', color: '#FAFAF7' }}>
              Four phases. <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, color: 'rgba(250,250,247,0.55)' }}>One</span> compounding system.
            </h2>
            <p className="lede reveal reveal-d-2" style={{ marginTop: 24 }}>
              Strategy, design and engineering operate as a single shipping team —
              not handoffs across silos.
            </p>
          </div>
        </div>

        <div className="ac-steps">
          {steps.map((s, i) => (
            <div key={i} className={`ac-step reveal reveal-d-${i}`}>
              <div className="step-bar" />
              <div className="step-n">Phase 0{i + 1} · {s.w}</div>
              <div className="step-t">{s.t}</div>
              <div className="step-d">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
